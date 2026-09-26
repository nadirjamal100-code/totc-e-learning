interface SectionTitleProps {
  id?: string;
  title: string;
  text?: string;
  /** typeface of the heading, as used in the Figma file */
  font?: "poppins" | "nunito" | "display";
  className?: string;
}

export default function SectionTitle({
  id,
  title,
  text,
  font = "nunito",
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`section-title section-title--${font} ${className}`.trim()}>
      <h2 id={id} className="section-title__heading">
        {title}
      </h2>
      {text ? <p className="section-title__text">{text}</p> : null}
    </div>
  );
}
