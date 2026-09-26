import { article } from "@/data/blogDetail";
import Avatar from "../Avatar";
import Button from "../Button";

export default function ArticleAuthor() {
  return (
    <div className="article-author">
      <Avatar size={77} />
      <div className="article-author__name">
        <p className="article-author__label">{article.writtenBy}</p>
        <p className="article-author__value">{article.author}</p>
      </div>
      <Button variant="outline-teal" className="article-author__follow">
        {article.follow}
      </Button>
    </div>
  );
}
