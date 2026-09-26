import Image from "next/image";
import { detailHero, purchase } from "@/data/courseDetail";
import Button from "../Button";
import VideoButton from "../VideoButton";
import {
  Certificate,
  Devices,
  Facebook,
  Instagram,
  Layers,
  Play,
  Shield,
  Telegram,
  Twitter,
  Whatsapp,
} from "../icons";

const INCLUDED_ICONS = { shield: Shield, devices: Devices, certificate: Certificate, layers: Layers } as const;
const SHARE_ICONS = {
  twitter: Twitter,
  facebook: Facebook,
  youtube: Twitter,
  instagram: Instagram,
  telegram: Telegram,
  whatsapp: Whatsapp,
} as const;

export default function PurchaseCard() {
  return (
    <aside className="purchase-card" aria-label="Purchase this course">
      <div className="purchase-card__media">
        <Image src={detailHero.image} alt={detailHero.thumbAlt} fill sizes="(max-width: 1099px) 90vw, 24vw" />
        <VideoButton className="purchase-card__play" label="Play course preview">
          <Play />
        </VideoButton>
      </div>

      <div className="purchase-card__price">
        <span className="purchase-card__now">{purchase.price}</span>
        <span className="purchase-card__old">{purchase.oldPrice}</span>
        <span className="purchase-card__discount">{purchase.discount}</span>
      </div>
      <p className="purchase-card__countdown">{purchase.countdown}</p>
      <Button variant="rect" className="purchase-card__buy" href="/checkout">
        {purchase.buy}
      </Button>

      <div className="purchase-card__block">
        <h3 className="purchase-card__heading">{purchase.includedTitle}</h3>
        <ul className="included-list">
          {purchase.included.map((item) => {
            const Icon = INCLUDED_ICONS[item.icon];
            return (
              <li key={item.text} className="included-list__item">
                <Icon className="included-list__icon" />
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="purchase-card__block">
        <h3 className="purchase-card__heading">{purchase.trainingTitle}</h3>
        <p className="purchase-card__text">{purchase.trainingText}</p>
      </div>

      <div className="purchase-card__block">
        <h3 className="purchase-card__heading">{purchase.shareTitle}</h3>
        <ul className="share-list">
          {purchase.share.map((key) => {
            const Icon = SHARE_ICONS[key];
            return (
              <li key={key}>
                <a href="#" className="share-list__link" aria-label={`Share on ${key}`}>
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
