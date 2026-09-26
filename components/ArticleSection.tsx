import type { ArticleSectionData } from "@/data/course";
import ArticleCard from "./blog/ArticleCard";

export default function ArticleSection({ section }: { section: ArticleSectionData }) {
  return (
    <section className="article-section" id={section.id} aria-labelledby={`${section.id}-title`}>
      <div className="blog-section__head blog-section__head--marketing">
        <h2 id={`${section.id}-title`} className="blog-section__title blog-section__title--medium">
          {section.title}
        </h2>
        <a className="blog-section__all" href={`#${section.id}`}>
          {section.seeAll}
        </a>
      </div>
      <div className="marketing__grid">
        {section.articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
