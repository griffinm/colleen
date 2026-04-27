import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Palette, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/cta-banner";
import { HeroSlideshow } from "@/components/hero-slideshow";
import InstagramFeed from "@/components/instagram-feed";
import { Reveal } from "@/components/reveal";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  heroImage,
  heroImages,
  ogImage,
} from "@/content/images";
import { testimonials } from "@/content/testimonials";
import { BASE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Glamour By Colleen | Wedding Makeup Artist | Boston & Cape Cod",
  description:
    "Bridal makeup artist serving Boston, Cape Cod, the North Shore, the Berkshires, and all of New England. Personalized wedding day makeup by Colleen.",
  openGraph: {
    title: "Glamour By Colleen | Wedding Makeup Artist",
    description:
      "Bridal makeup artist serving Boston, Cape Cod, and all of New England. Personalized wedding day makeup by Colleen.",
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glamour By Colleen | Wedding Makeup Artist",
    description:
      "Bridal makeup artist serving Boston, Cape Cod, and all of New England.",
    images: [ogImage.url],
  },
  alternates: {
    canonical: "/",
  },
};

const steps = [
  {
    icon: MessageSquare,
    title: "Inquire",
    description:
      "Tell me about your wedding \u2014 date, venue, how many people need makeup. I\u2019ll get back to you within 48 hours with availability and a quote.",
  },
  {
    icon: Palette,
    title: "Trial",
    description:
      "We meet 6\u20138 weeks before the wedding to design your look together. Bring inspiration photos, your veil if you have it, and an open mind.",
  },
  {
    icon: Heart,
    title: "Wedding Day",
    description:
      "I arrive at your venue, set up a calm corner, and work through your party on a schedule we\u2019ve built together. You get to enjoy the morning.",
  },
];

// Use the first testimonial for the social proof preview
const featuredTestimonial = testimonials[0];

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description:
      "Wedding makeup artist serving Boston, Cape Cod, the North Shore, the Berkshires, and all of New England.",
    url: BASE_URL,
    // PLACEHOLDER — add real phone when available
    // telephone: "+1-XXX-XXX-XXXX",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boston",
      addressRegion: "MA",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Boston" },
      { "@type": "Place", name: "Cape Cod" },
      { "@type": "Place", name: "North Shore" },
      { "@type": "Place", name: "The Berkshires" },
      { "@type": "City", name: "Chatham" },
      { "@type": "City", name: "Osterville" },
      { "@type": "City", name: "Falmouth" },
      { "@type": "City", name: "Provincetown" },
      { "@type": "City", name: "Gloucester" },
      { "@type": "City", name: "Ipswich" },
    ],
    priceRange: "$$", // PLACEHOLDER
    image: heroImage.src, // PLACEHOLDER — stock image; swap for real hero once delivered
    sameAs: [
      // PLACEHOLDER — add real social profile URLs
      "https://instagram.com/glamourbycolleen",
      "https://theknot.com/marketplace/glamour-by-colleen",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      {/* Hero */}
      <section className="-mt-[var(--nav-h)] bg-brand-primary pt-[var(--nav-h)] text-brand-text-primary">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 pt-4 pb-12 md:grid-cols-2 md:items-center md:gap-12 md:py-28">
          <div>
            <h1 className="font-serif text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
              Bridal makeup for Boston and Beyond.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-text-primary/85">
              Hi, I&apos;m Colleen &mdash; a former MRI tech who traded scrubs
              for a makeup kit, and I&apos;ve been making brides feel like
              themselves on the biggest day of their lives ever since.
            </p>
            <div className="mt-8">
              <Button
                className="bg-brand-text-primary text-brand-bg hover:bg-brand-text-secondary"
                size="lg"
                render={<Link href="/contact" />}
              >
                Check my availability &rarr;
              </Button>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
            <HeroSlideshow images={heroImages} />
          </div>
        </div>
      </section>

      <InstagramFeed />

      {/* How It Works — 3-Step Process */}
      <section className="bg-brand-bg px-6 py-16 md:py-20">
        <Reveal className="mx-auto max-w-7xl">
          <h2 className="text-center font-serif text-3xl font-light text-brand-text-primary md:text-4xl">
            How it works
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-soft text-brand-primary">
                  <step.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-medium text-brand-text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-brand-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-brand-soft px-6 py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          {/* PLACEHOLDER — update with real count */}
          <p className="mb-10 text-sm font-medium uppercase tracking-widest text-brand-primary">
            Trusted by 200+ brides across Massachusetts
          </p>
          <TestimonialCard testimonial={featuredTestimonial} />
          <div className="mt-8">
            <Link
              href="/kind-words"
              className="text-sm font-medium text-brand-primary-hover transition-colors hover:text-brand-primary"
            >
              Read more kind words &rarr;
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
