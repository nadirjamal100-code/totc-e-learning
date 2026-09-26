import { marketing } from "@/data/blog";
import ArticleCard from "./ArticleCard";

export default function MarketingArticles() {
  return (
    <section className="marketing" id="marketing" aria-labelledby="marketing-title">
      <div className="blog-section__head blog-section__head--marketing">
        <h2 id="marketing-title" className="blog-section__title blog-section__title--medium">
          {marketing.title}
        </h2>
        <a className="blog-section__all" href="#marketing">
          {marketing.seeAll}
        </a>
      </div>
      <div className="marketing__grid">
        {marketing.articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
