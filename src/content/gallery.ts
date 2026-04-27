/*
 * Flat gallery of every photo in `public/photos/`. Order is the curatable
 * surface — Colleen rearranges this array to control display order.
 *
 * `alt` text on every entry is a TODO(colleen) placeholder. Per AGENTS.md §9.4
 * each portfolio image needs a meaningful alt that describes the look, season,
 * and setting (not just "bride"). Until that pass is done, keep these as
 * placeholders so they're easy to grep for and impossible to ship by accident.
 */

export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { src: "/photos/img-0607.jpg", alt: "TODO(colleen): describe img-0607 — look, season, location." },
  { src: "/photos/img-6303.jpg", alt: "TODO(colleen): describe img-6303." },
  { src: "/photos/img-2116.jpg", alt: "TODO(colleen): describe img-2116." },
  { src: "/photos/img-7822.jpg", alt: "TODO(colleen): describe img-7822." },
  { src: "/photos/img-6597.jpg", alt: "TODO(colleen): describe img-6597." },
  { src: "/photos/img-8545.jpg", alt: "TODO(colleen): describe img-8545." },
  { src: "/photos/img-0606.jpg", alt: "TODO(colleen): describe img-0606." },
  { src: "/photos/img-0111.jpg", alt: "TODO(colleen): describe img-0111." },
  { src: "/photos/img-0372.jpg", alt: "TODO(colleen): describe img-0372." },
  { src: "/photos/img-0578.jpg", alt: "TODO(colleen): describe img-0578." },
  { src: "/photos/img-0615.jpg", alt: "TODO(colleen): describe img-0615." },
  { src: "/photos/img-0945.png", alt: "TODO(colleen): describe img-0945." },
  { src: "/photos/img-2284.jpg", alt: "TODO(colleen): describe img-2284." },
  { src: "/photos/img-3569.jpg", alt: "TODO(colleen): describe img-3569." },
  { src: "/photos/img-3848.jpg", alt: "TODO(colleen): describe img-3848." },
  { src: "/photos/img-3852.jpg", alt: "TODO(colleen): describe img-3852." },
  { src: "/photos/img-4780.jpg", alt: "TODO(colleen): describe img-4780." },
  { src: "/photos/img-4805.jpg", alt: "TODO(colleen): describe img-4805." },
  { src: "/photos/img-4956.jpg", alt: "TODO(colleen): describe img-4956." },
  { src: "/photos/img-4982.jpg", alt: "TODO(colleen): describe img-4982." },
  { src: "/photos/img-5458.jpg", alt: "TODO(colleen): describe img-5458." },
  { src: "/photos/img-5731.jpg", alt: "TODO(colleen): describe img-5731." },
  { src: "/photos/img-6301.jpg", alt: "TODO(colleen): describe img-6301." },
  { src: "/photos/img-6541.jpg", alt: "TODO(colleen): describe img-6541." },
  { src: "/photos/img-6608.jpg", alt: "TODO(colleen): describe img-6608." },
  { src: "/photos/img-6611.jpg", alt: "TODO(colleen): describe img-6611." },
  { src: "/photos/img-6890.png", alt: "TODO(colleen): describe img-6890." },
  { src: "/photos/img-7353.jpg", alt: "TODO(colleen): describe img-7353." },
  { src: "/photos/img-8544.png", alt: "TODO(colleen): describe img-8544." },
  { src: "/photos/img-8679.png", alt: "TODO(colleen): describe img-8679." },
  { src: "/photos/img-8793.jpg", alt: "TODO(colleen): describe img-8793." },
  { src: "/photos/h-m-kearstentaylor0094.jpg", alt: "TODO(colleen): describe h-m-kearstentaylor0094." },
  { src: "/photos/h-m-kearstentaylor0096.jpg", alt: "TODO(colleen): describe h-m-kearstentaylor0096." },
  { src: "/photos/bc5a30fa-40d2-4007-99bc-3f0ab2711034.jpg", alt: "TODO(colleen): describe bc5a30fa…711034." },
  { src: "/photos/c1095aff-23ee-4f5f-86be-52512d291513.jpg", alt: "TODO(colleen): describe c1095aff…291513." },
  { src: "/photos/d4cc59b6-ddf1-45ec-a882-233b40b8791f.png", alt: "TODO(colleen): describe d4cc59b6…b8791f." },
];
