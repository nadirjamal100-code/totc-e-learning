import { features } from "@/data/content";
import FeatureRow from "./FeatureRow";
import SectionTitle from "./SectionTitle";

export default function FeaturesSection() {
  return (
    <section className="section features" id="features" aria-labelledby="features-title">
      <SectionTitle
        id="features-title"
        font="nunito"
        title={features.title}
        text={features.text}
      />
      <div className="features__rows">
        {features.rows.map((row) => (
          <FeatureRow key={row.id} row={row} />
        ))}
      </div>
      <a className="features__more" href="#courses">
        {features.cta}
      </a>
    </section>
  );
}
