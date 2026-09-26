import { seeAllArrow } from "@/data/art/seeAllArrow";
import type { Shelf } from "@/data/content";
import Artwork from "./Artwork";

interface CourseShelfProps {
  shelf: Shelf;
  seeAll: string;
}

export default function CourseShelf({ shelf, seeAll }: CourseShelfProps) {
  return (
    <div className="shelf">
      <div className="shelf__head">
        <h3 className="shelf__title">
          <Artwork data={shelf.icon} className="shelf__icon" />
          {shelf.title}
        </h3>
        <a className="shelf__all" href="#courses" aria-label={`See all ${shelf.title} courses`}>
          <span>{seeAll}</span>
          <Artwork data={seeAllArrow} className="shelf__arrow" />
        </a>
      </div>
      <div
        className="shelf__scroll"
        role="region"
        aria-label={`${shelf.title} courses`}
        tabIndex={0}
      >
        <Artwork data={shelf.art} label={shelf.label} className="shelf__art" />
      </div>
    </div>
  );
}
