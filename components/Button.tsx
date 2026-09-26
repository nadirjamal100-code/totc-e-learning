import type { ReactNode } from "react";

export type ButtonVariant =
  | "white"
  | "glass"
  | "outline-light"
  | "solid-blue"
  | "outline-teal"
  | "teal"
  | "rect";

interface ButtonProps {
  variant: ButtonVariant;
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  size?: "md" | "lg";
  className?: string;
}

/** Pill button used across the page. Renders a link when `href` is given. */
export default function Button({
  variant,
  children,
  href,
  type = "button",
  size = "md",
  className = "",
}: ButtonProps) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type}>
      {children}
    </button>
  );
}
