import Link from "next/link";
import { logo } from "@/data/art/logo";
import { navLinks } from "@/data/content";
import Artwork from "./Artwork";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__logo" href="/" aria-label="TOTC – home">
          <Artwork data={logo} />
        </Link>

        <nav className="site-nav" aria-label="Main">
          <ul className="site-nav__list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link className="site-nav__link" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Button variant="white" href="/login">
            Login
          </Button>
          <Button variant="glass" href="/register">
            Sign Up
          </Button>
        </div>

        <MobileMenu links={navLinks}>
          <Button variant="white" href="/login">
            Login
          </Button>
          <Button variant="glass" href="/register">
            Sign Up
          </Button>
        </MobileMenu>
      </div>
    </header>
  );
}
