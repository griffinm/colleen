import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";

interface BeholdSize {
  mediaUrl: string;
  height: number;
  width: number;
}

interface BeholdPost {
  id: string;
  timestamp: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  isReel: boolean;
  mediaUrl: string;
  thumbnailUrl: string;
  sizes: {
    small: BeholdSize;
    medium: BeholdSize;
    large: BeholdSize;
    full: BeholdSize;
  };
  caption: string;
  prunedCaption: string;
  hashtags: string[];
  mentions: string[];
  colorPalette: {
    dominant: string;
    muted: string;
    mutedLight: string;
    mutedDark: string;
    vibrant: string;
    vibrantLight: string;
    vibrantDark: string;
  };
}

interface BeholdFeed {
  username: string;
  biography: string;
  profilePictureUrl: string;
  website: string | null;
  followersCount: number;
  followsCount: number;
  posts: BeholdPost[];
}

const INSTAGRAM_HANDLE = "glamourbycolleen";
const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

const FEED: BeholdFeed = {
  username: "glamourbycolleen",
  biography: "Soft glam specialist. Featured in @people",
  profilePictureUrl:
    "https://cdn2.behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/17841450732119716/profile.webp",
  website: null,
  followersCount: 924,
  followsCount: 1559,
  posts: [
    {
      id: "18104022014303074",
      timestamp: "2026-04-25T18:34:04+0000",
      permalink: "https://www.instagram.com/reel/DXkJo-Ygthh/",
      mediaType: "VIDEO",
      isReel: true,
      mediaUrl: "",
      thumbnailUrl: "",
      sizes: {
        small: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18104022014303074/small.jpg", height: 400, width: 225 },
        medium: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18104022014303074/medium.jpg", height: 700, width: 394 },
        large: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18104022014303074/large.jpg", height: 1000, width: 563 },
        full: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18104022014303074/full.jpg", height: 1136, width: 640 },
      },
      caption: "",
      prunedCaption: "Beautiful inside and out — engagement glam shoot.",
      hashtags: [],
      mentions: [],
      colorPalette: { dominant: "205,176,161", muted: "173,80,88", mutedLight: "205,169,161", mutedDark: "44,43,60", vibrant: "173,115,80", vibrantLight: "237,169,150", vibrantDark: "9,15,30" },
    },
    {
      id: "18072981209207012",
      timestamp: "2026-03-24T11:57:32+0000",
      permalink: "https://www.instagram.com/reel/DWRCwFIAvLd/",
      mediaType: "VIDEO",
      isReel: true,
      mediaUrl: "",
      thumbnailUrl: "",
      sizes: {
        small: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18072981209207012/small.jpg", height: 400, width: 225 },
        medium: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18072981209207012/medium.jpg", height: 700, width: 394 },
        large: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18072981209207012/large.jpg", height: 1000, width: 563 },
        full: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18072981209207012/full.jpg", height: 1136, width: 640 },
      },
      caption: "",
      prunedCaption: "How it started… vs. how it’s going. Your sign to never give up.",
      hashtags: [],
      mentions: [],
      colorPalette: { dominant: "94,50,78", muted: "167,97,91", mutedLight: "192,146,133", mutedDark: "78,51,90", vibrant: "228,108,53", vibrantLight: "239,179,153", vibrantDark: "148,50,26" },
    },
    {
      id: "18096983719996970",
      timestamp: "2026-03-21T17:08:20+0000",
      permalink: "https://www.instagram.com/reel/DWJ3zpxjTyY/",
      mediaType: "VIDEO",
      isReel: true,
      mediaUrl: "",
      thumbnailUrl: "",
      sizes: {
        small: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18096983719996970/small.jpg", height: 400, width: 225 },
        medium: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18096983719996970/medium.jpg", height: 700, width: 394 },
        large: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18096983719996970/large.jpg", height: 1000, width: 563 },
        full: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18096983719996970/full.jpg", height: 1136, width: 640 },
      },
      caption: "",
      prunedCaption: "Wedding season opens with a spring bride — full glam.",
      hashtags: [],
      mentions: [],
      colorPalette: { dominant: "184,147,124", muted: "159,115,74", mutedLight: "175,173,172", mutedDark: "67,53,43", vibrant: "204,144,77", vibrantLight: "232,165,146", vibrantDark: "122,81,46" },
    },
    {
      id: "18093650045291178",
      timestamp: "2026-02-20T19:09:43+0000",
      permalink: "https://www.instagram.com/reel/DU_aoJsAnbZ/",
      mediaType: "VIDEO",
      isReel: true,
      mediaUrl: "",
      thumbnailUrl: "",
      sizes: {
        small: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18093650045291178/small.jpg", height: 225, width: 400 },
        medium: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18093650045291178/medium.jpg", height: 360, width: 640 },
        large: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18093650045291178/large.jpg", height: 360, width: 640 },
        full: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/18093650045291178/full.jpg", height: 360, width: 640 },
      },
      caption: "",
      prunedCaption: "A baptism in Greece — surrounded by family, faith, and sea.",
      hashtags: [],
      mentions: [],
      colorPalette: { dominant: "233,168,171", muted: "87,148,171", mutedLight: "176,189,207", mutedDark: "45,65,87", vibrant: "245,194,64", vibrantLight: "236,177,184", vibrantDark: "110,6,18" },
    },
    {
      id: "17917334244266817",
      timestamp: "2026-02-13T19:49:00+0000",
      permalink: "https://www.instagram.com/reel/DUtdpv5Ah-L/",
      mediaType: "VIDEO",
      isReel: true,
      mediaUrl: "",
      thumbnailUrl: "",
      sizes: {
        small: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/17917334244266817/small.jpg", height: 400, width: 225 },
        medium: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/17917334244266817/medium.jpg", height: 700, width: 394 },
        large: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/17917334244266817/large.jpg", height: 1000, width: 563 },
        full: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/17917334244266817/full.jpg", height: 1136, width: 640 },
      },
      caption: "",
      prunedCaption: "Valentine’s Day — pink glow and a soft, lit complexion.",
      hashtags: [],
      mentions: [],
      colorPalette: { dominant: "49,36,36", muted: "172,114,98", mutedLight: "219,196,183", mutedDark: "79,53,47", vibrant: "204,140,118", vibrantLight: "228,168,143", vibrantDark: "40,20,11" },
    },
    {
      id: "17990618081760760",
      timestamp: "2026-02-09T21:01:00+0000",
      permalink: "https://www.instagram.com/p/DUjSoA8Ejri/",
      mediaType: "IMAGE",
      isReel: false,
      mediaUrl: "",
      thumbnailUrl: "",
      sizes: {
        small: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/17990618081760760/small.jpg", height: 400, width: 320 },
        medium: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/17990618081760760/medium.jpg", height: 700, width: 560 },
        large: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/17990618081760760/large.jpg", height: 1000, width: 800 },
        full: { mediaUrl: "https://behold.pictures/pWzu26weoROjEWUrbpNmJ3s2P282/J8w0SQYwmgTVjmBYfGfY/17990618081760760/full.jpg", height: 1688, width: 1350 },
      },
      caption: "",
      prunedCaption: "Power-photo headshots — polished, natural, unmistakably you.",
      hashtags: [],
      mentions: [],
      colorPalette: { dominant: "235,235,235", muted: "136,119,103", mutedLight: "208,194,188", mutedDark: "88,72,64", vibrant: "206,100,96", vibrantLight: "236,174,145", vibrantDark: "131,30,27" },
    },
  ],
};

function truncate(text: string, max: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length <= max ? clean : `${clean.slice(0, max).trimEnd()}…`;
}

function ReelBadge() {
  return (
    <span
      aria-hidden="true"
      className="absolute top-3 left-3 inline-flex items-center bg-brand-bg/85 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.32em] text-brand-accent backdrop-blur-[2px]"
    >
      Reel
    </span>
  );
}

interface TileProps {
  post: BeholdPost;
  index: number;
  sizes: string;
}

function Tile({ post, index, sizes }: TileProps) {
  const src = post.sizes.medium.mediaUrl;
  const isVideo = post.mediaType === "VIDEO" || post.isReel;
  const caption = truncate(post.prunedCaption || "View on Instagram", 80);
  const altText = post.prunedCaption
    ? truncate(post.prunedCaption, 140)
    : `Instagram post ${index + 1} by @${INSTAGRAM_HANDLE}`;

  return (
    <Link
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open Instagram post: ${altText}`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 focus-visible:ring-offset-brand-bg-alt"
    >
      <div className="relative aspect-square overflow-hidden bg-brand-bg">
        <Image
          src={src}
          alt={altText}
          fill
          sizes={sizes}
          className="object-cover transition-opacity duration-500 group-active:opacity-85 md:group-hover:opacity-90"
        />
        {isVideo && <ReelBadge />}
      </div>

      {/* Always-visible photo plate — italic Playfair caption beneath the frame */}
      <figcaption className="mt-3 flex items-start gap-2.5 px-0.5">
        <span
          aria-hidden="true"
          className="mt-2 h-px w-4 flex-shrink-0 bg-brand-text-primary/40 md:w-6"
        />
        <p className="font-serif text-[12.5px] leading-[1.45] text-brand-text-secondary italic md:text-[13px]">
          {caption}
        </p>
      </figcaption>
    </Link>
  );
}

export default function InstagramFeed() {
  const posts = FEED.posts.slice(0, 6);

  return (
    <section aria-label="Instagram feed" className="bg-brand-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="grid grid-cols-1 gap-y-5 md:grid-cols-12 md:items-end md:gap-x-10">
            <h2 className="font-serif text-[clamp(2.25rem,9vw,6.5rem)] font-light leading-[0.95] tracking-[-0.01em] text-brand-text-primary md:col-span-8">
              <span className="italic">Lately,</span> in the studio.
            </h2>
            <div className="md:col-span-4 md:pb-3">
              <p className="max-w-md text-[14px] leading-[1.6] text-brand-text-secondary md:text-[13.5px]">
                Recent looks, behind-the-chair moments, and finished frames
                from weddings and shoots around Boston and the Cape.
              </p>
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-baseline gap-2 border-b border-brand-text-primary/30 pb-1 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-text-primary active:text-brand-primary md:mt-5"
              >
                <span>@{INSTAGRAM_HANDLE}</span>
                <span className="text-brand-primary">→</span>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Mobile-first grid: 2-up on phones, 3-up from md.
            Captions sit beneath each frame as a permanent magazine plate. */}
        <Reveal delay={120}>
          <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:mt-16 md:grid-cols-3 md:gap-x-6 md:gap-y-12">
            {posts.map((post, i) => (
              <li key={post.id}>
                <Tile
                  post={post}
                  index={i}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-12 text-center md:mt-16">
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-2 font-serif text-base text-brand-text-primary active:text-brand-primary md:text-lg"
            >
              <span className="italic">See more</span>
              <span className="text-brand-text-secondary">on Instagram</span>
              <span className="text-brand-primary">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
