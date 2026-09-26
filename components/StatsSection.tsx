import { success } from "@/data/content";
import AnimatedStatValue from "./AnimatedStatValue";
import SectionTitle from "./SectionTitle";

export default function StatsSection() {
  return (
    <section className="section stats" aria-labelledby="success-title">
      <SectionTitle
        id="success-title"
        font="display"
        title={success.title}
        text={success.text}
      />
      <dl className="stats__list">
        {success.stats.map((stat) => (
          <div key={stat.label} className="stat">
            <dt className="stat__label">{stat.label}</dt>
            <AnimatedStatValue value={stat.value} font={stat.font} />
          </div>
        ))}
      </dl>
    </section>
  );
}
