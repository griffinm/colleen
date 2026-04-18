import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <section className="bg-oxblood px-6 py-20 text-center text-bone">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-serif text-3xl font-light leading-snug md:text-4xl">
          {headline}
        </h2>
        <div className="mt-8">
          <Button
            className="bg-bone text-oxblood hover:bg-parchment"
            size="lg"
            render={<Link href={href} />}
          >
            {buttonText} &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
