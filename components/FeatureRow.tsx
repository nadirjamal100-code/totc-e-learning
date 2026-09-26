import type { CSSProperties } from "react";
import type { FeatureRowData } from "@/data/content";
import Artwork from "./Artwork";

/** Width of the Figma container the feature rows were laid out in. */
const CONTAINER = 1600;

function gridColumns(row: FeatureRowData) {
  const artWidth = row.art.w;
  const cols =
    row.side === "art-left"
      ? [row.artLeft, artWidth, row.textLeft - (row.artLeft + artWidth), row.textWidth]
      : [row.textLeft, row.textWidth, row.artLeft - (row.textLeft + row.textWidth), artWidth];
  const used = cols.reduce((sum, value) => sum + value, 0);
  cols.push(Math.max(CONTAINER - used, 0));
  // Zero-width columns are dropped by the browser, `0fr` is valid CSS though.
  return cols.map((value) => `${Math.round(value * 100) / 100}fr`).join(" ");
}

export default function FeatureRow({ row }: { row: FeatureRowData }) {
  const style = {
    "--cols": gridColumns(row),
    "--nudge": row.nudge,
    "--title-w": row.titleWidth,
    "--text-w": row.textWidth,
  } as CSSProperties;

  const art = (
    <Artwork
      data={row.art}
      label={row.artLabel}
      className="feature-row__art"
    />
  );

  const copy = (
    <div className="feature-row__copy">
      <h3 className="feature-row__title">{row.title}</h3>

      {row.text ? (
        <div className="feature-row__paragraph">
          <p className="feature-row__text">{row.text}</p>
          {row.textDecor ? (
            <span
              className="feature-row__decor"
              style={
                {
                  "--l": row.textDecor.left,
                  "--t": row.textDecor.top,
                  "--w": row.textDecor.art.w,
                } as CSSProperties
              }
            >
              <Artwork data={row.textDecor.art} />
            </span>
          ) : null}
        </div>
      ) : null}

      {row.items ? (
        <ul className="feature-list">
          {row.items.map((item) => (
            <li key={item.text} className="feature-list__item">
              <Artwork data={item.icon} className="feature-list__icon" />
              <p className="feature-list__text">{item.text}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );

  return (
    <article
      className={`feature-row feature-row--${row.side}`}
      style={style}
      data-row={row.id}
    >
      {row.side === "art-left" ? (
        <>
          {art}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {art}
        </>
      )}
    </article>
  );
}
