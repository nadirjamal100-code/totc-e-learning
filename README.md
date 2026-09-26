# TOTC – E-Learning landing page

Next.js (App Router) + React + TypeScript implementation of the **"E-Learning Site (Community)"**
Figma file, frame **Landing** (`node-id=10:358`, 1920 × 13489 px).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

## Structure

```
app/            layout (fonts, metadata), page, globals.css, icon.svg
components/     Header, MobileMenu (client), Hero, StatsSection, CapabilitiesSection,
                AboutSection, ClassroomSection, FeaturesSection + FeatureRow,
                ExploreCourses + CourseShelf, TestimonialSection, NewsSection, Footer,
                Button, SectionTitle, Artwork
data/content.ts all copy and the lists that are mapped into components
data/art/*.ts   illustrations exported from Figma (see below)
lib/artwork.ts  types of the artwork data
public/images/  photos exported from the .fig file (WebP)
```

## How the design was reproduced

* Text, colours, sizes, spacing and image crops were read directly from the `.fig` file.
* Sections with normal layouts (header, stats, cards, news, footer …) are real, responsive HTML/CSS.
* Illustrations that were freely composed in Figma (hero cards, the five feature illustrations,
  the bookshelf rows, icons) are stored as layer data in `data/art` and rendered by the single
  `Artwork` component. All lengths are `%` / `cqw`, so each illustration scales with its container.
* `--px` (in `globals.css`) equals 1px at 1920px and scales down linearly to a floor of 0.7px, so the
  desktop layout keeps the proportions of the design. Tablet (<= 1099px) and mobile (<= 699px)
  have their own type/spacing tokens and stacked layouts.

## Fonts

Poppins, Nunito Sans and Roboto come from `next/font/google`. The design's *Buenos Aires Trial*
(commercial trial font, used for "Our Success") is replaced by **DM Sans**; swap it in
`app/layout.tsx` (`--font-display`).
