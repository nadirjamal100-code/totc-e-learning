import Link from "next/link";
import { footerDiamond } from "@/data/art/footerDiamond";
import { footer } from "@/data/content";
import Artwork from "./Artwork";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link className="footer__logo" href="/" aria-label="TOTC home">
            <Artwork data={footerDiamond} className="footer__diamond" />
            <span className="footer__logo-text">{footer.brand}</span>
          </Link>
          <span className="footer__divider" aria-hidden="true" />
          <p className="footer__tagline">{footer.tagline}</p>
        </div>

        <h2 className="footer__title">{footer.newsletter}</h2>

        <form className="newsletter" action="#">
          <label className="visually-hidden" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            className="newsletter__input"
            type="email"
            name="email"
            placeholder={footer.placeholder}
            autoComplete="email"
            required
          />
          <Button variant="teal" type="submit">
            {footer.subscribe}
          </Button>
        </form>

        <ul className="footer__links">
          {footer.links.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <p className="footer__copy">{footer.copyright}</p>
        <p className="footer__credit">Website Developed By NADIR JAMAL</p>
      </div>
    </footer>
  );
}
