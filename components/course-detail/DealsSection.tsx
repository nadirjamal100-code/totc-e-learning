import { deals } from "@/data/courseDetail";
import DealCard from "./DealCard";

export default function DealsSection() {
  return (
    <section className="deals" aria-labelledby="deals-title">
      <div className="blog-section__head blog-section__head--marketing">
        <h2 id="deals-title" className="blog-section__title blog-section__title--medium">
          {deals.title}
        </h2>
        <a className="blog-section__all" href="#">
          {deals.seeAll}
        </a>
      </div>
      <div className="deals__grid">
        {deals.items.map((deal, index) => (
          <DealCard key={index} deal={deal} />
        ))}
      </div>
    </section>
  );
}
