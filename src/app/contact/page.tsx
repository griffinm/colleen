import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ogImage } from "@/content/placeholder-images";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Inquire about makeup services with Colleen for your wedding or event. Serving Boston, Cape Cod, the North Shore, the Berkshires, and all of New England.",
  openGraph: {
    title: "Contact",
    description:
      "Inquire about wedding makeup with Glamour By Colleen.",
    url: "/contact",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Glamour By Colleen",
    description:
      "Get in touch about wedding makeup services — Boston, Cape Cod, and New England.",
    images: [ogImage.url],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="bg-brand-bg px-6 py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <h1 className="font-serif text-4xl font-light text-brand-text-primary md:text-5xl">
          Let&apos;s talk about your event.
        </h1>
        <p className="mt-6 leading-relaxed text-brand-text-secondary">
          Fill this out and I&apos;ll get back to you within 48 hours &mdash;
          usually sooner. No pressure, no hard sell. If we&apos;re a fit,
          we&apos;ll schedule a quick call. If we&apos;re not, I&apos;ll happily
          point you toward someone who is.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>

        <p className="mt-10 text-center text-sm text-brand-text-secondary">
          Prefer email? Reach me directly at{" "}
          {/* PLACEHOLDER — replace with real email */}
          <a
            href="mailto:hello@glamourbycolleen.com"
            className="text-brand-primary-hover transition-colors hover:text-brand-primary"
          >
            hello@glamourbycolleen.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
