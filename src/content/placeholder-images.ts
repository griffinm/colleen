/*
 * PLACEHOLDER — image paths point at random selections from the
 * `public/photos/` import. They are not yet matched to the slot they fill
 * (hero vs. about portrait vs. signature style vs. BTS) — Colleen still needs
 * to assign each photo to its intended role, and the `alt` text is a TODO
 * until she does. Shape is stable; only `src` and `alt` should churn.
 */

export interface PlaceholderImage {
  src: string;
  alt: string;
}

export const heroImages: PlaceholderImage[] = [
  {
    src: "/photos/img-0607.jpg",
    alt: "TODO(colleen): describe img-0607 — bride, setting, season, mood.",
  },
  {
    src: "/photos/img-6303.jpg",
    alt: "TODO(colleen): describe img-6303.",
  },
  {
    src: "/photos/img-0606.jpg",
    alt: "TODO(colleen): describe img-0606.",
  },
  {
    src: "/photos/bc5a30fa-40d2-4007-99bc-3f0ab2711034.jpg",
    alt: "TODO(colleen): describe bc5a30fa…711034.",
  },
  {
    src: "/photos/img-2116.jpg",
    alt: "TODO(colleen): describe img-2116.",
  },
];

export const heroImage: PlaceholderImage = heroImages[0];

export const aboutPortrait: PlaceholderImage = {
  src: "/photos/img-3110.jpg",
  alt: "TODO(colleen): describe img-3108 — portrait of Colleen for the About page.",
};

// PLACEHOLDER — reuses the About portrait as the social share card across all
// pages. A dedicated 1200×630 OG image (lockup + portrait) will outperform a
// portrait crop on most platforms; swap once one is produced.
export const ogImage = {
  url: aboutPortrait.src,
  width: 1598,
  height: 2400,
  alt: aboutPortrait.alt,
} as const;

export const signatureStyleImages: PlaceholderImage[] = [
  {
    src: "/photos/img-7822.jpg",
    alt: "TODO(colleen): describe img-7822.",
  },
  {
    src: "/photos/img-2115.jpg",
    alt: "TODO(colleen): describe img-2115.",
  },
  {
    src: "/photos/img-6597.jpg",
    alt: "TODO(colleen): describe img-6597.",
  },
  {
    src: "/photos/img-8545.jpg",
    alt: "TODO(colleen): describe img-8545.",
  },
];

