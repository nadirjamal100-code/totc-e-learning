"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import type { ReactNode } from "react";
import type { NavLink } from "@/data/content";

interface MobileMenuProps {
  links: NavLink[];
  /** `dark` = dark hamburger for pages with a light header */
  variant?: "light" | "dark";
  /** extra content at the bottom of the panel (buttons, user info ...) */
  children?: ReactNode;
}

/** Hamburger menu shown on tablet and mobile widths. */
export default function MobileMenu({ links, variant = "light", children }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={`mobile-menu mobile-menu--${variant}`}>
      <button
        type="button"
        className="mobile-menu__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        <span className="mobile-menu__bars" aria-hidden="true" />
      </button>

      <div id={panelId} className="mobile-menu__panel" hidden={!open}>
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {children ? <div className="mobile-menu__actions">{children}</div> : null}
      </div>
    </div>
  );
}
