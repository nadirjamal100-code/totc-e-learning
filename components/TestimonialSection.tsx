import Image from "next/image";
import { arrowLine } from "@/data/art/arrowLine";
import { arrowRight } from "@/data/art/arrowRight";
import { stars } from "@/data/art/stars";
import { testimonial } from "@/data/content";
import Artwork from "./Artwork";

export default function TestimonialSection() {
  return (
    <section
      className="section testimonial"
      id="testimonials"
      aria-labelledby="testimonial-title"
    >
      <div className="testimonial__copy">
        <p className="testimonial__eyebrow">{testimonial.eyebrow}</p>
        <h2 id="testimonial-title" className="testimonial__title">
          {testimonial.title}
        </h2>
        <div className="testimonial__paragraphs">
          {testimonial.paragraphs.map((text) => (
            <p key={text} className="testimonial__text">
              {text}
            </p>
          ))}
        </div>
        <a className="testimonial__cta" href="#">
          <span>{testimonial.cta}</span>
          <Artwork data={arrowLine} className="testimonial__cta-icon" />
        </a>
      </div>

      <div className="testimonial__media">
        <div className="testimonial__photo">
          <Image
            src={testimonial.image}
            alt={testimonial.imageAlt}
            fill
            sizes="(max-width: 700px) 90vw, 30vw"
            className="testimonial__image"
          />
        </div>
        <button type="button" className="testimonial__next" aria-label="Next testimonial">
          <Artwork data={arrowRight} />
        </button>
        <figure className="testimonial__card">
          <blockquote className="testimonial__quote">{testimonial.quote}</blockquote>
          <figcaption className="testimonial__meta">
            <span className="testimonial__author">{testimonial.author}</span>
            <span className="testimonial__rating">
              <Artwork data={stars} label="5 out of 5 stars" className="testimonial__stars" />
              <span className="testimonial__source">{testimonial.source}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
