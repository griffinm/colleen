/*
 * PLACEHOLDER — every image referenced here is an Unsplash stock photo
 * standing in until Colleen delivers real photography. Swap the `src` and
 * `alt` fields once replacements arrive; shape is stable.
 *
 * URL convention:
 *   https://images.unsplash.com/photo-{id}?w={w}&q=80&auto=format&fit=crop
 * where {w} is sized to the slot's max rendered width on a 2x display.
 */

export interface PlaceholderImage {
  src: string;
  alt: string;
}

const unsplash = (id: string, width: number): string =>
  `https://images.unsplash.com/photo-${id}?w=${width}&q=80&auto=format&fit=crop`;

export const heroImage: PlaceholderImage = {
  src: unsplash("1537633552985-df8429e8048b", 1200),
  alt: "A bride and groom stand close on a pebble beach, her long veil drifting behind them toward the surf.",
};

export const aboutPortrait: PlaceholderImage = {
  src: unsplash("1544005313-94ddf0286df2", 900),
  alt: "A woman with loose brown hair smiles warmly into late-afternoon light, standing outdoors in an open field.",
};

export const signatureStyleImages: PlaceholderImage[] = [
  {
    src: unsplash("1488426862026-3ee34a7d66df", 600),
    alt: "A soft, natural bridal look — defined brows, warm flushed cheeks, and a hair-up style with loose strands.",
  },
  {
    src: unsplash("1529626455594-4ff0802cfb7e", 600),
    alt: "An auburn-haired bride in daylight, skin luminous, a soft terracotta lip and understated eye.",
  },
  {
    src: unsplash("1502823403499-6ccfcf4fb453", 600),
    alt: "A sculpted braided updo photographed in profile against low studio light — an editorial-leaning bridal look.",
  },
  {
    src: unsplash("1597225244660-1cd128c64284", 600),
    alt: "A neatly arranged flatlay of lipsticks in nude-to-berry tones on a blush background.",
  },
];

export const behindTheScenesImages: PlaceholderImage[] = [
  {
    src: unsplash("1580618672591-eb180b1a973f", 600),
    alt: "A stylist blow-drying a bride's hair with a round brush in the getting-ready suite.",
  },
  {
    src: unsplash("1457972729786-0411a3b2b626", 600),
    alt: "Close-up of hands applying deep-red polish to a bride's nails during the morning prep.",
  },
  {
    src: unsplash("1515934751635-c81c6bc9a2d8", 600),
    alt: "Two wedding bands resting on a bed of pale-pink garden roses and baby's breath.",
  },
  {
    src: unsplash("1529636798458-92182e662485", 600),
    alt: "A lush bridal bouquet of pink, coral, and ivory blooms hanging from a wooden beam.",
  },
  {
    src: unsplash("1522413452208-996ff3f3e740", 600),
    alt: "A bride and groom's hands resting on a peach-rose bouquet, both wearing new wedding rings.",
  },
];
