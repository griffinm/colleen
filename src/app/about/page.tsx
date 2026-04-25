import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { aboutPortrait, ogImage } from "@/content/placeholder-images";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Colleen",
  description:
    "Meet Colleen — a former MRI technician turned full-time bridal makeup artist serving Boston, Cape Cod, and all of New England.",
  openGraph: {
    title: "About Colleen",
    description:
      "Meet Colleen — a former MRI technician turned full-time bridal makeup artist serving Boston, Cape Cod, and all of New England.",
    url: "/about",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "profile",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Colleen | Glamour By Colleen",
    description:
      "Meet Colleen — a former MRI tech turned bridal makeup artist in Boston and Cape Cod.",
    images: [ogImage.url],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Opening */}
      <section className="bg-brand-bg px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          {/* PLACEHOLDER — Unsplash stock portrait stands in until Colleen's real photo arrives */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-brand-bg-alt">
            <Image
              src={aboutPortrait.src}
              alt={aboutPortrait.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              About
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-brand-text-primary md:text-5xl">
              From scrubs to brushes.
            </h1>
            <div className="mt-6 space-y-4 leading-relaxed text-brand-text-primary">
              <p>
                I spent years as an MRI technician. It was steady, detailed
                work, and I was good at it &mdash; but every morning I was
                setting an alarm to go do someone else&apos;s dream. Makeup had
                been mine since I was old enough to hold a brush.
              </p>
              <p>
                {/* PLACEHOLDER — replace [YEAR] with the actual year */}
                In [YEAR] I finally stopped putting it off. I started taking
                bridal clients on weekends, then most weekends, then every
                weekend, and eventually I hung up the lead apron for good. Today
                I do this full-time, and I can&apos;t imagine doing anything
                else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-brand-bg-alt px-6 py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          {/* PLACEHOLDER — replace with Colleen's real philosophy */}
          <blockquote className="font-serif text-2xl leading-relaxed italic text-brand-text-primary md:text-3xl">
            &ldquo;I have one job on your wedding day, and it isn&apos;t to make
            you look like someone else. It&apos;s to make sure that when your
            partner sees you at the end of the aisle, they see{" "}
            <em className="not-italic font-medium">you</em> &mdash; the best,
            most photographable, most you version of you.&rdquo;
          </blockquote>
        </Reveal>
      </section>

      {/* Personal */}
      <section className="bg-brand-bg px-6 py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light text-brand-text-primary">
            Off the clock
          </h2>
          <p className="mt-6 leading-relaxed text-brand-text-primary">
            When I&apos;m not working, I&apos;m with my husband Yanni and our
            son Spiro &mdash;{" "}
            {/* PLACEHOLDER — one or two specific, charming details */}
            [placeholder: specific charming details about family life]. If you
            book me, this is who you&apos;re getting: a working mom from Boston
            who takes the craft seriously and doesn&apos;t take herself too
            seriously.
          </p>
        </Reveal>
      </section>

      {/* Why Solo Matters */}
      <section className="bg-brand-soft px-6 py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light text-brand-primary">
            Why solo matters
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-text-primary">
            A lot of bigger studios can&apos;t tell you exactly who will show up
            on your wedding day until a week before &mdash; sometimes the
            morning of. I can. It&apos;ll be me. I&apos;ll be the one you met
            at your trial, the one who knows your skin, the one who remembers
            that you mentioned your mom cries easily and you want makeup that
            can handle it.
          </p>
        </Reveal>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="I&rsquo;d love to hear about your wedding."
        buttonText="Get in touch"
      />
    </>
  );
}
