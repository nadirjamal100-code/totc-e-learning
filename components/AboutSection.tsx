import Image from "next/image";
import { about } from "@/data/content";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="section-title section-title--poppins section-title--xl">
        <h2 id="about-title" className="section-title__heading">
          {about.title}
        </h2>
        <p className="section-title__text section-title__text--wide">{about.text}</p>
      </div>

      <div className="about__cards">
        {about.cards.map((card) => (
          <article key={card.title} className={`audience-card audience-card--${card.variant}`}>
            <Image
              src={card.image}
              alt={card.alt}
              fill
              sizes="(max-width: 700px) 100vw, 40vw"
              className="audience-card__image"
            />
            <div className="audience-card__body">
              <h3 className="audience-card__title">{card.title}</h3>
              <Button
                variant={card.variant === "solid" ? "solid-blue" : "outline-light"}
                href={card.cta === "Start a class today" ? "/course" : "#"}
              >
                {card.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
