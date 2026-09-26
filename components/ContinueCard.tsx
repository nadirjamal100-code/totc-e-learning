import Image from "next/image";
import Link from "next/link";
import type { ContinueCard as ContinueCardData } from "@/data/course";
import Avatar from "./Avatar";

export default function ContinueCard({ card }: { card: ContinueCardData }) {
  return (
    <Link href={`/course/${card.slug}`} className="continue-card">
      <div className="continue-card__media">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          sizes="(max-width: 899px) 90vw, (max-width: 1099px) 45vw, 27vw"
          className="continue-card__image"
        />
      </div>
      <h3 className="continue-card__title">{card.title}</h3>
      <div className="continue-card__author">
        <Avatar size={44} />
        <span>{card.author}</span>
      </div>
      <div
        className="continue-card__progress"
        role="progressbar"
        aria-valuenow={Math.round(card.progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progress in ${card.title}`}
      >
        <span className="continue-card__bar" style={{ width: `${card.progress * 100}%` }} />
      </div>
      <p className="continue-card__lesson">{card.lesson}</p>
    </Link>
  );
}
