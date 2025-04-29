import { BLUR_FADE_DELAY } from "@/data/blur";
import BlurFade from "../magicui/blur-fade";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  post: {
    metadata: {
      [key: string]: any;
    };
    slug: string;
    source: string;
  };
  id: number;
}

export default function CardBlog({ post, id }: CardProps) {
  return (
    <div className="hover:scale-105">
      <BlurFade
        delay={BLUR_FADE_DELAY * 2 + id * 0.05}
        key={post.slug}
        className="max-w-[300px] flex"
      >
        <Link
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col gap-2">
            <Image
              width={300}
              height={300}
              src={post.metadata.image}
              alt={post.metadata.title}
              className="h-40 w-full overflow-hidden"
            />
            <p className="tracking-tight">{post.metadata.title}</p>
            <p className="line-clamp-1 text-muted">
              {post.metadata.description}
            </p>
            <p className="h-6 text-xs text-muted-foreground">
              {post.metadata.publishedAt}
            </p>
          </div>
        </Link>
      </BlurFade>
    </div>
  );
}
