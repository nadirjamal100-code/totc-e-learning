import type { CSSProperties } from "react";
import type { CategoryCard as CategoryCardData } from "@/data/course";
import CategoryIcon from "./CategoryIcon";

export default function CategoryCard({ category }: { category: CategoryCardData }) {
  return (
    <article className="cat-card" style={{ "--cat-color": category.color } as CSSProperties}>
      <span className="cat-card__chip">
        <CategoryIcon icon={category.icon} className="cat-card__icon" />
      </span>
      <h3 className="cat-card__title">{category.title}</h3>
      <p className="cat-card__text">{category.text}</p>
    </article>
  );
}
