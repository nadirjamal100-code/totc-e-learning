import Image from "next/image";
import { blogHero } from "@/data/blog";
import Button from "../Button";

export default function BlogHero() {
  return (
    <section className="blog-hero" aria-labelledby="blog-title">
      <div className="blog-hero__inner">
        <div className="blog-hero__copy">
          <p className="blog-hero__byline">{blogHero.byline}</p>
          <h1 id="blog-title" className="blog-hero__title">
            {blogHero.title}
          </h1>
          <p className="blog-hero__text">{blogHero.text}</p>
          <Button variant="rect" href="/#courses">
            {blogHero.cta}
          </Button>
        </div>
        <div className="blog-hero__media">
          <Image
            src={blogHero.image}
            alt={blogHero.imageAlt}
            fill
            priority
            sizes="(max-width: 899px) 92vw, 42vw"
            className="blog-hero__image"
          />
        </div>
      </div>
    </section>
  );
}
