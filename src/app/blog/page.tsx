import CardBlog from "@/components/card/cardBlog";
import BlurFade from "@/components/magicui/blur-fade";
import Footer from "@/components/sections/footer";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center">
        <section className="w-1/2 border-l min-h-screen ps-5 pt-10">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="font-medium text-4xl mb-8 tracking-tighter">Blog</h1>
          </BlurFade>
          <div className="w-full max-h-[40dvh] flex gap-10">
            {posts
              .sort((a, b) => {
                if (
                  new Date(a.metadata.publishedAt) >
                  new Date(b.metadata.publishedAt)
                ) {
                  return -1;
                }
                return 1;
              })
              .map((post, id) => (
                <CardBlog post={post} id={id} key={id} />
              ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
