import Image from "next/image";
import Link from "next/link";

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
      prunedCaption: "Beautiful inside and out! Engagement glam shoot for this beauty.",
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
      prunedCaption: "How it started… VS how it’s going. This is your sign to never give up.",
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
      prunedCaption: "Wedding season kicks off with a spring wedding! This girly pop wanted full glam.",
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
      prunedCaption: "Our hearts are still trying to catch up to this moment. Baptizing Spiro in Greece, surrounded by family.",
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
      prunedCaption: "Valentine’s Day pink glow.",
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
      prunedCaption: "This is not just a headshot — it’s your power photo. Polished, natural makeup that enhances your features.",
      hashtags: [],
      mentions: [],
      colorPalette: { dominant: "235,235,235", muted: "136,119,103", mutedLight: "208,194,188", mutedDark: "88,72,64", vibrant: "206,100,96", vibrantLight: "236,174,145", vibrantDark: "131,30,27" },
    },
  ],
};

function truncate(text: string, max = 80): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max).trimEnd() + "…";
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-3.5 w-3.5"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function InstagramFeed() {
  const posts = FEED.posts.slice(0, 6);

  return (
    <section
      aria-label="Instagram feed"
      className="w-full bg-[#fafaf9] px-6 py-20"
      style={{ fontFamily: "var(--font-sans, 'DM Sans', sans-serif)" }}
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="text-xs font-medium uppercase tracking-[0.18em] text-[#b45309]"
            >
              From the studio
            </p>
            <h2
              className="mt-2 text-3xl font-normal leading-tight text-[#1c1917] sm:text-4xl"
              style={{
                fontFamily:
                  "var(--font-serif, 'Playfair Display', Georgia, serif)",
              }}
            >
              Follow along
            </h2>
          </div>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit @${INSTAGRAM_HANDLE} on Instagram`}
            className="text-sm font-medium text-[#881337] underline-offset-4 transition-colors hover:text-[#9f1239] hover:underline"
          >
            @{INSTAGRAM_HANDLE} &rarr;
          </Link>
        </header>

        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {posts.map((post) => {
            const src = post.sizes.medium.mediaUrl;
            const alt = post.prunedCaption
              ? truncate(post.prunedCaption, 140)
              : `Instagram post by @${INSTAGRAM_HANDLE}`;
            const overlayText = truncate(post.prunedCaption || "View on Instagram", 80);
            const isVideo = post.mediaType === "VIDEO" || post.isReel;

            return (
              <li key={post.id} className="relative">
                <Link
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open Instagram post: ${alt}`}
                  className="group relative block aspect-square overflow-hidden bg-[#f5f5f4] outline-none ring-offset-2 ring-offset-[#fafaf9] focus-visible:ring-2 focus-visible:ring-[#881337]"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />

                  {isVideo && (
                    <span
                      aria-hidden="true"
                      className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1c1917]/55 text-[#fafaf9] backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-0"
                    >
                      <PlayIcon />
                    </span>
                  )}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#1c1917]/0 p-4 opacity-0 transition-all duration-200 ease-out group-hover:bg-[#1c1917]/55 group-hover:opacity-100"
                  >
                    <p className="text-center text-sm leading-snug text-[#fafaf9]">
                      {overlayText}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#9f1239] underline-offset-4 hover:underline"
          >
            See more on Instagram &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
