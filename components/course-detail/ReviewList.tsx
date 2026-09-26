import { reviews } from "@/data/courseDetail";
import Avatar from "../Avatar";

export default function ReviewList() {
  return (
    <ul className="review-list">
      {reviews.map((review, index) => (
        <li key={index} className="review">
          <div className="review__head">
            <Avatar size={71} />
            <span className="review__author">{review.author}</span>
            <span className="review__duration">{review.duration}</span>
          </div>
          <p className="review__text">{review.text}</p>
        </li>
      ))}
    </ul>
  );
}
