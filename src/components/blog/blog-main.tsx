import { BLUR_FADE_DELAY } from "@/data/blur";
import BlurFade from "../magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import CardBlog from "../card/cardBlog";

export async function BlogMain() {
  const posts = await getBlogPosts();

  return (
    <div className="flex justify-center">
      <section className="w-full md:w-5/6 lg:w-1/2 border-l border-destructive min-h-screen ps-5 pt-10">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-3xl sm:text-4xl mb-6 sm:mb-8 tracking-tight sm:tracking-tighter">
            Blog
          </h1>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 me-2">
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
              <div
                className={
                  id === 0
                    ? "md:col-span-2 row-span-2" // Artikel utama
                    : ""
                }
                key={id}
              >
                <CardBlog post={post} id={id} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
