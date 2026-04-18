import type { Metadata } from "next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CTABanner } from "@/components/cta-banner";
import { faqEntries } from "@/content/faq";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about wedding makeup with Colleen — booking, trials, pricing, products, travel, and more.",
  openGraph: {
    title: "FAQ",
    description:
      "Frequently asked questions about wedding makeup with Glamour By Colleen.",
    url: "/faq",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Glamour By Colleen",
    description:
      "Common questions about booking bridal makeup with Colleen.",
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      {/* Intro */}
      <section className="bg-bone px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brass">
            FAQ
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light text-ink md:text-5xl">
            Questions I hear all the time.
          </h1>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-bone px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <Accordion>
            {faqEntries.map((entry, index) => (
              <AccordionItem key={index} className="border-rule">
                <AccordionTrigger className="py-5 text-base font-medium text-ink">
                  {entry.question}
                </AccordionTrigger>
                <AccordionContent className="text-smoke">
                  <p>{entry.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Still have questions? I&rsquo;d love to hear from you."
        buttonText="Get in touch"
      />
    </>
  );
}
