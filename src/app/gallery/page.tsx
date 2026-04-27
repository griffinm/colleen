import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { GalleryGrid } from "@/components/gallery-grid";
import { galleryImages } from "@/content/gallery";
import { ogImage } from "@/content/images";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at Colleen's bridal makeup work — real brides across Boston, Cape Cod, and New England. Click any photo to view it full-size.",
  openGraph: {
    title: "Gallery",
    description:
      "Bridal makeup photos from real weddings across Boston, Cape Cod, and New England.",
    url: "/gallery",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Glamour By Colleen",
    description:
      "Bridal makeup photos from real weddings across Boston, Cape Cod, and New England.",
    images: [ogImage.url],
  },
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-bg px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
            Gallery
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light text-brand-text-primary md:text-5xl">
            The work.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-text-secondary">
            A look at brides I&apos;ve had the joy of working with — across
            Boston, Cape Cod, and the rest of New England. Tap any photo to
            see it full-size.
          </p>
        </div>
      </section>

      <section className="bg-brand-bg px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
