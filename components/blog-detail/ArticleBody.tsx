import { article } from "@/data/blogDetail";

export default function ArticleBody() {
  return (
    <article className="article-body">
      <h1 className="article-body__title">{article.title}</h1>
      <p className="article-body__lead">{article.lead}</p>
      {article.paragraphs.map((paragraph, index) => (
        <p key={index} className="article-body__text">
          {paragraph}
        </p>
      ))}
      <ul className="article-tags">
        {article.tags.map((tag) => (
          <li key={tag} className="article-tags__tag">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
