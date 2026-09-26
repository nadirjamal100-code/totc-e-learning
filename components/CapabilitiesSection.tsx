import { capabilities } from "@/data/content";
import Artwork from "./Artwork";
import SectionTitle from "./SectionTitle";

export default function CapabilitiesSection() {
  return (
    <section className="section capabilities" aria-labelledby="capabilities-title">
      <SectionTitle
        id="capabilities-title"
        font="poppins"
        title={capabilities.title}
        text={capabilities.text}
      />
      <ul className="capabilities__grid">
        {capabilities.items.map((item) => (
          <li key={item.title} className="capability-card">
            <Artwork data={item.icon} className="capability-card__icon" />
            <h3 className="capability-card__title">{item.title}</h3>
            <p className="capability-card__text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
