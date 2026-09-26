import Image from "next/image";
import { detailHero } from "@/data/courseDetail";
import { Play } from "../icons";
import VideoButton from "../VideoButton";

export default function DetailHero() {
  return (
    <div className="detail-hero">
      <Image
        src={detailHero.image}
        alt={detailHero.alt}
        fill
        priority
        sizes="100vw"
        className="detail-hero__image"
      />
      <VideoButton className="detail-hero__play" label="Play course preview">
        <Play />
      </VideoButton>
    </div>
  );
}
