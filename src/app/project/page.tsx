import { LayoutLoader } from "@/components/animation/layoutLoader";
import { BlogMain } from "@/components/blog/blog-main";
import Footer from "@/components/sections/footer";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

export default function BlogPage() {
  return (
    <LayoutLoader>
      <div className="w-full flex flex-col">
        <BlogMain />

        <Footer />
      </div>
    </LayoutLoader>
  );
}
