import Image from "next/image";
import { categories } from "@/data/blog";

export default function BlogCategories() {
  return (
    <section className="blog-categories" aria-labelledby="categories-title">
      <h2 id="categories-title" className="blog-section__title">
        {categories.title}
      </h2>
      <ul className="blog-categories__grid">
        {categories.tiles.map((tile) => (
          <li key={tile.label}>
            <a className="category-tile" href="#related">
              <Image
                src={tile.image}
                alt={tile.alt}
                fill
                sizes="(max-width: 699px) 45vw, 22vw"
                className="category-tile__image"
              />
              <span className="category-tile__label">{tile.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
