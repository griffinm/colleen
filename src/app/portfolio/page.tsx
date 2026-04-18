import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABanner } from "@/components/cta-banner";
import { behindTheScenesImages } from "@/content/placeholder-images";
import { portfolioEntries } from "@/content/portfolio";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real weddings, real brides. Browse Colleen Mahoney's bridal makeup portfolio — organized by wedding across Boston, Cape Cod, and New England.",
  openGraph: {
    title: "Portfolio",
    description:
      "Browse Colleen Mahoney's bridal makeup portfolio — real weddings across Boston, Cape Cod, and New England.",
    url: "/portfolio",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Colleen Mahoney Beauty",
    description:
      "Real weddings, real brides — bridal makeup portfolio by Colleen Mahoney.",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-bone px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brass">
            Portfolio
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light text-ink md:text-5xl">
            Real weddings, real brides.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-smoke">
            Every wedding is different &mdash; different skin, different light,
            different vibe. Here&apos;s a look at some of the brides I&apos;ve
            worked with and the looks we created together.
          </p>
        </div>
      </section>

      {/* Wedding Grid */}
      <section className="bg-bone px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2">
            {portfolioEntries.map((entry) => (
              <article key={entry.slug} className="group">
                {/* PLACEHOLDER — Unsplash stock image stands in for the wedding gallery preview */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-parchment transition-transform group-hover:scale-[1.01]">
                  <Image
                    src={entry.image.src}
                    alt={entry.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="font-serif text-2xl font-medium text-ink">
                    {entry.title}
                  </h2>
                  <p className="mt-1 text-sm text-smoke">
                    {entry.venue}, {entry.location} &middot; {entry.date}
                  </p>
                  <p className="mt-3 leading-relaxed text-ink">
                    {entry.description}
                  </p>
                  <p className="mt-2 text-sm text-smoke">{entry.partySize}</p>
                  {/* PLACEHOLDER — link to individual gallery when dynamic routes are built */}
                  <Link
                    href={`/portfolio#${entry.slug}`}
                    className="mt-3 inline-block text-sm font-medium text-claret transition-colors hover:text-oxblood"
                  >
                    See the gallery &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="bg-parchment px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl font-light text-ink">
            Behind the scenes
          </h2>
          <p className="mt-4 max-w-2xl text-smoke">
            The getting-ready hours are some of my favorite moments of the
            day &mdash; the calm before the ceremony, the laughter, the
            last-minute happy tears.
          </p>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
            {/* PLACEHOLDER — Unsplash stock images stand in for real morning-of candids */}
            {behindTheScenesImages.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] w-72 shrink-0 overflow-hidden rounded-lg bg-rule"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
