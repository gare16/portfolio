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
    <>
      <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
        <Link href={`/project/${post.slug}`}>
          <div className="relative w-full h-60 me-4 md:h-96">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              className="w-full h-full object-cover"
              width={400}
              height={600}
            />
          </div>
          <div className="mt-2 mb-5">
            <h2 className="text-xl md:text-2xl font-bold">
              {post.metadata.title}
            </h2>
            <p className="line-clamp-1 text-sm text-gray-400">
              {post.metadata.description}
            </p>
            <p className="text-sm text-gray-500">{post.metadata.publishedAt}</p>
          </div>
        </Link>
      </BlurFade>
    </>
  );
}
