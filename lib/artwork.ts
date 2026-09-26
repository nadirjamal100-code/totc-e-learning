import type { CSSProperties } from "react";

/**
 * Artwork = a piece of illustration that was drawn freely on the Figma canvas
 * (overlapping photos, badges, dots, UI mock-ups ...). It is stored as a tree
 * of absolutely positioned layers. Every length is expressed in % of the
 * parent box or in `cqw` (1% of the artwork width) so the whole illustration
 * scales smoothly with its container.
 */
export type Layer =
  | { t: "box"; s: CSSProperties; c: Layer[] }
  | { t: "text"; s: CSSProperties; l: string[] }
  | {
      t: "svg";
      s: CSSProperties;
      vb: [number, number];
      p: { d: string; f: string; r?: "evenodd" }[];
    }
  | { t: "img"; src: string; alt: string; s?: CSSProperties };

export interface ArtworkData {
  /** design width in px (Figma) */
  w: number;
  /** design height in px (Figma) */
  h: number;
  layers: Layer[];
}
