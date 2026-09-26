import { categories } from "@/data/course";
import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <section className="cat-section" aria-labelledby="categories-title">
      <h2 id="categories-title" className="blog-section__title blog-section__title--medium">
        {categories.title}
      </h2>
      <div className="cat-grid">
        {categories.items.map((item, index) => (
          <CategoryCard key={index} category={item} />
        ))}
      </div>
    </section>
  );
}
