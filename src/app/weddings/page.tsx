import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Weddings",
  description:
    "Wedding makeup services, process, and pricing from Colleen Mahoney. Serving Boston, Cape Cod, the North Shore, the Berkshires, and all of New England.",
  openGraph: {
    title: "Weddings",
    description:
      "Wedding makeup services, process, and pricing from Colleen Mahoney Beauty.",
    url: "/weddings",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weddings | Colleen Mahoney Beauty",
    description:
      "Wedding makeup services and pricing — Boston, Cape Cod, and all of New England.",
  },
  alternates: {
    canonical: "/weddings",
  },
};

export default function WeddingsPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-bone px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brass">
            Weddings
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
            What to expect when you book me.
          </h1>
          <div className="mt-8 space-y-4 leading-relaxed text-ink">
            <p>
              I work with brides across the Boston area, Cape Cod, the North
              Shore, the Berkshires, and anywhere else in New England a wedding
              takes me. Most of my bookings are full wedding parties &mdash; the
              bride, bridesmaids, mothers, and anyone else who wants to be
              camera-ready. I&apos;m happy to do just the bride, or the whole
              party of twelve.
            </p>
            <p>
              For larger parties, I bring a trusted assistant artist so we stay
              on schedule without rushing anyone. For hair, I partner with{" "}
              {/* PLACEHOLDER — replace with real hair stylist name */}a small
              circle of stylists I trust completely &mdash; you can book us
              together or separately, whatever works for your day.
            </p>
            <p>
              I travel to your venue. Getting-ready suite, hotel room,
              parents&apos; house, tented field in Truro &mdash; wherever you
              are, I&apos;ll be there with a full kit and a plan.
            </p>
          </div>
        </div>
      </section>

      {/* Process Step 1 */}
      <section className="bg-parchment px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light text-ink">
            1. Inquire and book
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-ink">
            <p>
              {/* PLACEHOLDER — replace with real inquiry flow details */}
              Fill out the form at the bottom of this page or send me an email.
              Tell me your date, your venue, and roughly how many people need
              makeup. I&apos;ll get back to you within 48 hours &mdash; usually
              the same day &mdash; with availability and a custom quote.
            </p>
            <p>
              If everything looks good, I&apos;ll send over a contract and
              invoice for the retainer. Once that&apos;s signed and the retainer
              is paid, your date is officially held. I only take one wedding per
              day, so your date is exclusively yours.
            </p>
          </div>
        </div>
      </section>

      {/* Process Step 2 */}
      <section className="bg-bone px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light text-ink">
            2. The trial
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-ink">
            <p>
              {/* PLACEHOLDER — replace with real trial details */}
              We meet about six to eight weeks before your wedding. Bring your
              inspiration photos, your veil or headpiece if you have one, and
              whatever you&apos;d normally wear on a nice night out &mdash; it
              helps me understand your comfort zone.
            </p>
            <p>
              We&apos;ll spend about 90 minutes together designing your look. I
              take detailed notes and photos so I can recreate it exactly on the
              day. You leave wearing the look so you can see how it holds up
              over time and how it photographs in different light.
            </p>
          </div>
        </div>
      </section>

      {/* Process Step 3 */}
      <section className="bg-parchment px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light text-ink">
            3. Wedding day
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-ink">
            <p>
              {/* PLACEHOLDER — replace with real wedding day details */}
              I arrive at your venue early &mdash; usually several hours before
              the ceremony &mdash; and set up a calm, well-lit station wherever
              you&apos;re getting ready. We work through your party on a
              schedule we&apos;ve built together so nobody feels rushed and
              nobody&apos;s waiting.
            </p>
            <p>
              You&apos;re always last in the chair. By the time I start your
              makeup, everyone else is done, the energy in the room is high, and
              all my attention is on you. I stay until the getting-ready photos
              are done and leave you with a custom touch-up kit for the rest of
              the night.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-bone px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light text-ink">Pricing</h2>
          <p className="mt-6 leading-relaxed text-ink">
            Every wedding is a little different, and I&apos;d rather build a
            quote that fits your actual day than list a dozen packages that might
            not. Tell me what you&apos;re thinking and I&apos;ll come back with
            something fair.
          </p>
          {/* PLACEHOLDER — add starting-from pricing when available */}
          <p className="mt-4 text-sm text-smoke">
            [Placeholder: Bridal makeup starts at $XXX. Additional party members
            from $XXX each. Travel fees may apply outside greater Boston and Cape
            Cod.]
          </p>
        </div>
      </section>

      {/* Embedded Contact Form */}
      <section className="bg-parchment px-6 py-16 md:py-20">
        <div className="mx-auto max-w-xl">
          <h2 className="text-center font-serif text-3xl font-light text-ink">
            Let&apos;s talk about your wedding.
          </h2>
          <p className="mt-4 text-center text-smoke">
            Fill this out and I&apos;ll get back to you within 48 hours.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
