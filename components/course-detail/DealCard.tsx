import Image from "next/image";

export interface Deal {
  badge: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}

export default function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="deal-card">
      <Image src={deal.image} alt={deal.alt} fill sizes="(max-width: 899px) 90vw, 30vw" className="deal-card__image" />
      <span className="deal-card__badge">{deal.badge}</span>
      <div className="deal-card__body">
        <h3 className="deal-card__title">{deal.title}</h3>
        <p className="deal-card__text">{deal.text}</p>
      </div>
    </article>
  );
}
