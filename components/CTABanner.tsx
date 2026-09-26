import { ctaBanner } from "@/data/course";
import Button from "./Button";

export default function CTABanner() {
  return (
    <section className="cta-banner" aria-labelledby="cta-title">
      <h2 id="cta-title" className="cta-banner__title">
        {ctaBanner.title}
      </h2>
      <p className="cta-banner__text">{ctaBanner.text}</p>
      <Button variant="rect" href="/#courses">
        {ctaBanner.cta}
      </Button>
    </section>
  );
}
