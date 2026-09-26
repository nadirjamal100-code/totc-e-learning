import Link from "next/link";
import { logoDark, blogUser } from "@/data/blog";
import { navLinks } from "@/data/content";
import type { NavLink } from "@/data/content";
import Artwork from "../Artwork";
import Avatar from "../Avatar";
import { ChevronDown } from "../icons";
import MobileMenu from "../MobileMenu";

interface BlogHeaderProps {
  /** which top-nav item to mark as the current page */
  active?: NavLink["label"];
}

export default function BlogHeader({ active }: BlogHeaderProps = {}) {
  return (
    <header className="blog-header">
      <div className="blog-header__inner">
        <Link className="blog-header__logo" href="/" aria-label="TOTC – home">
          <Artwork data={logoDark} />
        </Link>

        <nav className="blog-nav" aria-label="Main">
          <ul className="blog-nav__list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="blog-nav__link"
                  href={link.href}
                  aria-current={link.label === active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="blog-user">
          <Avatar size={63} />
          <span className="blog-user__name">{blogUser.name}</span>
          <ChevronDown className="blog-user__chevron" />
        </div>

        <MobileMenu links={navLinks} variant="dark">
          <div className="mobile-menu__user">
            <Avatar size={44} />
            <span>{blogUser.name}</span>
          </div>
        </MobileMenu>
      </div>
    </header>
  );
}
