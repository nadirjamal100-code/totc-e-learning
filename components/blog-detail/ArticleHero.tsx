import Image from "next/image";
import { detailHero } from "@/data/blogDetail";

export default function ArticleHero() {
  return (
    <div className="article-hero">
      <Image
        src={detailHero.image}
        alt={detailHero.alt}
        fill
        priority
        sizes="100vw"
        className="article-hero__image"
      />
    </div>
  );
}
