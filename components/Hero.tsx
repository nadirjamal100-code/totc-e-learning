import { heroVisual } from "@/data/art/heroVisual";
import { playButton } from "@/data/art/playButton";
import { hero } from "@/data/content";
import Artwork from "./Artwork";
import Button from "./Button";
import VideoButton from "./VideoButton";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__text">
        <h1 id="hero-title" className="hero__title">
          {hero.title}
        </h1>
        <p className="hero__lead">{hero.text}</p>
        <div className="hero__actions">
          <Button variant="glass" size="lg" href="/register">
            Join for free
          </Button>
          <VideoButton className="play-link" label="Watch how TOTC works">
            <Artwork data={playButton} className="play-link__icon" />
            <span>Watch how it works</span>
          </VideoButton>
        </div>
      </div>

      <Artwork
        data={heroVisual}
        className="hero__visual"
        label="Student holding books with course cards: 250k assisted students, a class starting today and a completed admission"
      />
    </section>
  );
}
