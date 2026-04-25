import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

interface CTABannerProps {
  headline?: string;
  buttonText?: string;
  href?: string;
}

export function CTABanner({
  headline = "Your wedding date is already taken by someone. Make sure it isn\u2019t by another bride\u2019s makeup artist.",
  buttonText = "Check my availability",
  href = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-brand-primary px-6 py-20 text-center text-brand-text-primary">
      <Reveal className="mx-auto max-w-2xl">
        <h2 className="font-serif text-3xl font-light leading-snug md:text-4xl">
          {headline}
        </h2>
        <div className="mt-8">
          <Button
            className="bg-brand-text-primary text-brand-bg hover:bg-brand-text-secondary"
            size="lg"
            render={<Link href={href} />}
          >
            {buttonText} &rarr;
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
