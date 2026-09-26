import Image from "next/image";
import Link from "next/link";
import { iconGrid } from "@/data/blog";
import type { Article } from "@/data/blog";
import Artwork from "../Artwork";
import Avatar from "../Avatar";
import { Clock } from "../icons";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/course/${article.slug}`} className="article-card">
      <div className="article-card__media">
        <Image
          src={article.image}
          alt={article.alt}
          fill
          sizes="(max-width: 699px) 90vw, (max-width: 1099px) 45vw, 20vw"
          className="article-card__image"
        />
      </div>
      <div className="article-card__body">
        <div className="article-card__meta">
          <span className="article-card__category">
            <Artwork data={iconGrid} className="article-card__category-icon" />
            {article.category}
          </span>
          <span className="article-card__duration">
            <Clock className="article-card__clock" />
            {article.duration}
          </span>
        </div>
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__text">{article.excerpt}</p>
        <div className="article-card__foot">
          <span className="article-card__author">
            <Avatar size={44} />
            {article.author}
          </span>
          <span className="article-card__price">
            <span className="article-card__old">
              <span className="visually-hidden">Original price </span>
              {article.oldPrice}
            </span>
            <span className="article-card__new">
              <span className="visually-hidden">Price </span>
              {article.price}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
