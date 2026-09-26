"use client";

import { useState } from "react";
import { related } from "@/data/blog";
import { ChevronLeft, ChevronRight } from "../icons";
import BlogPostCard from "./BlogPostCard";

export default function RelatedBlogs() {
  const [firstPost, setFirstPost] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [slideKey, setSlideKey] = useState(0);
  const posts = related.posts;
  const visiblePosts = Array.from({ length: Math.min(2, posts.length) }, (_, index) =>
    posts[(firstPost + index) % posts.length],
  );

  function move(direction: -1 | 1) {
    setDirection(direction === 1 ? "next" : "previous");
    setFirstPost((current) => (current + direction + posts.length) % posts.length);
    setSlideKey((current) => current + 1);
  }

  return (
    <section className="related" id="related" aria-labelledby="related-title">
      <div className="related__inner">
        <div className="blog-section__head">
          <h2 id="related-title" className="blog-section__title blog-section__title--medium">
            {related.title}
          </h2>
          <a className="blog-section__all" href="#related">
            {related.seeAll}
          </a>
        </div>

        <div key={slideKey} className={`related__grid related__grid--${direction}`} aria-live="polite">
          {visiblePosts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} readMore={related.readMore} />
          ))}
        </div>

        <nav className="pagination" aria-label="Related blog posts">
          <button
            type="button"
            className="pagination__button"
            onClick={() => move(-1)}
            aria-label="Previous related posts"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="pagination__button pagination__button--active"
            onClick={() => move(1)}
            aria-label="Next related posts"
          >
            <ChevronRight />
          </button>
        </nav>
      </div>
    </section>
  );
}
