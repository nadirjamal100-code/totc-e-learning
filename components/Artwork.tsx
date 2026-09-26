import Image from "next/image";
import { Fragment } from "react";
import type { ArtworkData, Layer } from "@/lib/artwork";

function renderLayer(layer: Layer, key: number) {
  switch (layer.t) {
    case "box":
      return (
        <div key={key} className="art__layer" style={layer.s}>
          {layer.c.map(renderLayer)}
        </div>
      );
    case "text":
      return (
        <div key={key} className="art__layer" style={layer.s}>
          {layer.l.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </div>
      );
    case "svg":
      return (
        <svg
          key={key}
          className="art__layer"
          style={layer.s}
          viewBox={`0 0 ${layer.vb[0]} ${layer.vb[1]}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {layer.p.map((path, i) => (
            <path key={i} d={path.d} fill={path.f} fillRule={path.r} />
          ))}
        </svg>
      );
    case "img":
      return (
        <Image
          key={key}
          src={layer.src}
          alt={layer.alt}
          fill
          sizes="(max-width: 768px) 90vw, 50vw"
          className="art__img"
          style={layer.s}
        />
      );
  }
}

interface ArtworkProps {
  data: ArtworkData;
  /** Accessible description. When omitted the artwork is treated as decorative. */
  label?: string;
  className?: string;
}

export default function Artwork({ data, label, className = "" }: ArtworkProps) {
  return (
    <div
      className={`art ${className}`.trim()}
      style={{ aspectRatio: `${data.w} / ${data.h}` }}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {data.layers.map(renderLayer)}
    </div>
  );
}
