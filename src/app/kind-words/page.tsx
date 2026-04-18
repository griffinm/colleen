import type { Metadata } from "next";
import { CTABanner } from "@/components/cta-banner";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  testimonials,
  type TestimonialCategory,
} from "@/content/testimonials";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kind Words",
  description:
    "What brides say about working with Colleen — real testimonials from weddings across Boston, Cape Cod, and New England.",
  openGraph: {
    title: "Kind Words",
    description:
      "Real testimonials from brides who worked with Glamour By Colleen.",
    url: "/kind-words",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kind Words | Glamour By Colleen",
    description:
      "What brides say about working with Colleen.",
  },
  alternates: {
    canonical: "/kind-words",
  },
};

const categories: {
  key: TestimonialCategory;
  heading: string;
}[] = [
  { key: "look-like-me", heading: "\u201CWill I still look like me?\u201D" },
  { key: "last-all-day", heading: "\u201CWill it last all day?\u201D" },
  {
    key: "dont-know-what-i-want",
    heading: "\u201CWhat if I don\u2019t know what I want?\u201D",
  },
  {
    key: "party-and-skin",
    heading:
      "\u201CWhat about my mom / my bridesmaids / my skin?\u201D",
  },
];

export default function KindWordsPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-bone px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brass">
            Kind Words
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light text-ink md:text-5xl">
            What brides say.
          </h1>
        </div>
      </section>

      {/* Testimonial Groups */}
      {categories.map((category, index) => {
        const items = testimonials.filter(
          (t) => t.category === category.key
        );
        return (
          <section
            key={category.key}
            className={`px-6 py-16 md:py-20 ${
              index % 2 === 0 ? "bg-parchment" : "bg-bone"
            }`}
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-2xl font-light text-oxblood md:text-3xl">
                {category.heading}
              </h2>
              <div className="mt-10 space-y-10">
                {items.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.brideName}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Google Reviews Link */}
      <section className="bg-bone px-6 py-12 text-center">
        <a
          href="https://google.com/maps" // PLACEHOLDER — replace with real Google Business URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-claret transition-colors hover:text-oxblood"
        >
          See all reviews on Google &rarr;
        </a>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to talk about your wedding?"
        buttonText="Get in touch"
      />
    </>
  );
}
