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

// PLACEHOLDER — random landscape photo from the import standing in as the
// social share card. A dedicated 1200×630 OG image (lockup + portrait) will
// outperform a generic photo crop; swap once one is produced.
export const ogImage = {
  url: "/photos/img-5458.jpg",
  width: 2400,
  height: 1600,
  alt: "TODO(colleen): describe img-5458 for social share preview.",
} as const;

export const aboutPortrait: PlaceholderImage = {
  src: "/photos/img-4982.jpg",
  alt: "TODO(colleen): describe img-4982 — portrait of Colleen for the About page.",
};

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

export const behindTheScenesImages: PlaceholderImage[] = [
  {
    src: "/photos/img-4956.jpg",
    alt: "TODO(colleen): describe img-4956.",
  },
  {
    src: "/photos/four.jpg",
    alt: "TODO(colleen): describe four.jpg.",
  },
  {
    src: "/photos/img-0372.jpg",
    alt: "TODO(colleen): describe img-0372.",
  },
  {
    src: "/photos/img-8793.jpg",
    alt: "TODO(colleen): describe img-8793.",
  },
  {
    src: "/photos/img-0945.png",
    alt: "TODO(colleen): describe img-0945.",
  },
];
