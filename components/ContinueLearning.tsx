"use client";

import { useState } from "react";
import { continueLearning } from "@/data/course";
import { ChevronLeft, ChevronRight } from "./icons";
import ContinueCard from "./ContinueCard";

export default function ContinueLearning() {
  const [firstCard, setFirstCard] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [slideKey, setSlideKey] = useState(0);
  const cards = continueLearning.cards;
  const visibleCards = Array.from({ length: Math.min(3, cards.length) }, (_, index) =>
    cards[(firstCard + index) % cards.length],
  );

  function move(direction: -1 | 1) {
    setDirection(direction === 1 ? "next" : "previous");
    setFirstCard((current) => (current + direction + cards.length) % cards.length);
    setSlideKey((current) => current + 1);
  }

  return (
    <section className="continue" aria-labelledby="continue-title">
      <div className="blog-section__head">
        <h2 id="continue-title" className="continue__title">
          {continueLearning.title}
        </h2>
        <a className="continue__history" href="#">
          {continueLearning.viewHistory}
        </a>
      </div>
      <div key={slideKey} className={`continue__grid continue__grid--${direction}`} aria-live="polite">
        {visibleCards.map((card, index) => (
          <ContinueCard key={card.image} card={card} />
        ))}
      </div>
      <nav className="pagination" aria-label="Continue learning pagination">
        <button
          type="button"
          className="pagination__button"
          onClick={() => move(-1)}
          aria-label="Previous courses"
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          className="pagination__button pagination__button--active"
          onClick={() => move(1)}
          aria-label="Next courses"
        >
          <ChevronRight />
        </button>
      </nav>
    </section>
  );
}
