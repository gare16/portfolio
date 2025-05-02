import { LayoutLoader } from "@/components/animation/layoutLoader";
import BlurFade from "@/components/magicui/blur-fade";
import Footer from "@/components/sections/footer";
import { getBlogPosts, getPost } from "@/data/blog";
import { BLUR_FADE_DELAY } from "@/data/blur";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <LayoutLoader>
      <div className="w-full h-screen">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="w-full flex flex-col border">
            <section
              className="flex justify-center px-4 sm:px-6 lg:px-8"
              id="blog"
            >
              <div className="w-full max-w-4xl border-l border-destructive flex justify-center pt-10">
                <div className="w-full flex flex-col sm:ms-6 md:ms-10 px-2 sm:px-0">
                  <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        headline: post.metadata.title,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.publishedAt,
                        description: post.metadata.summary,
                        image: post.metadata.image
                          ? `${DATA.url}${post.metadata.image}`
                          : `${DATA.url}/og?title=${post.metadata.title}`,
                        url: `${DATA.url}/blog/${post.slug}`,
                        author: {
                          "@type": "Person",
                          name: DATA.name,
                        },
                      }),
                    }}
                  />
                  <h1 className="title font-medium text-3xl sm:text-4xl tracking-tight max-w-3xl">
                    {post.metadata.title}
                  </h1>
                  <div className="flex items-center mt-2 mb-6 sm:mb-8 text-sm max-w-3xl">
                    <Suspense fallback={<p className="h-5" />}>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {formatDate(post.metadata.publishedAt)}
                      </p>
                    </Suspense>
                  </div>
                  <div className="w-full h-[1px] bg-destructive" />
                  <div className="w-full flex ps-2 sm:ps-5">
                    <article
                      className="flex text-justify flex-col py-10 prose prose-sm sm:prose-base dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: post.source }}
                    ></article>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </BlurFade>
      </div>
    </LayoutLoader>
  );
}
