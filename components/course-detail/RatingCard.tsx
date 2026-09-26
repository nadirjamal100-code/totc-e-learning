import type { CSSProperties } from "react";
import { rating } from "@/data/courseDetail";
import { Star } from "../icons";

export default function RatingCard() {
  return (
    <div className="rating-card">
      <div className="rating-card__score">
        <p className="rating-card__number">{rating.score}</p>
        <div className="rating-card__stars" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
        </div>
        <p className="rating-card__label">{rating.label}</p>
      </div>
      <ul className="rating-card__breakdown">
        {rating.breakdown.map((row, index) => (
          <li key={row.label} className="rating-row">
            <span className="rating-row__label">{row.label}</span>
            <span
              className="rating-row__track"
              role="progressbar"
              aria-valuenow={row.percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={row.label}
            >
              <span
                className="rating-row__bar"
                style={{
                  "--fill-width": `${row.percent}%`,
                  "--rating-order": index,
                } as CSSProperties}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
