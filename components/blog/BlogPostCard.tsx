import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import Avatar from "../Avatar";
import { Eye } from "../icons";

export default function BlogPostCard({ post, readMore }: { post: BlogPost; readMore: string }) {
  return (
    <article className="post-card">
      <Link href={`/blog/${post.slug}`} className="post-card__media">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          sizes="(max-width: 899px) 90vw, 38vw"
          className="post-card__image"
        />
      </Link>
      <h3 className="post-card__title">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <div className="post-card__author">
        <Avatar size={71} />
        <span>{post.author}</span>
      </div>
      <p className="post-card__text">{post.excerpt}</p>
      <div className="post-card__foot">
        <Link className="post-card__more" href={`/blog/${post.slug}`}>
          {readMore}
        </Link>
        <span className="post-card__views">
          <Eye className="post-card__eye" />
          <span>{post.views}</span>
          <span className="visually-hidden"> views</span>
        </span>
      </div>
    </article>
  );
}
