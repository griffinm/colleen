import Image from "next/image";
import Link from "next/link";
import { navLinks, ctaLink } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="bg-brand-text-primary text-brand-bg">
      <div className="h-px bg-brand-accent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <Link href="/" aria-label="Glamour By Colleen — home" className="inline-block">
              <Image
                src="/brand/lockup-light.svg"
                alt="Glamour By Colleen"
                width={270}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-bg/70">
              Wedding makeup artist serving Boston, Cape Cod, the North Shore,
              the Berkshires, and all of New England.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Pages
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-bg/70 transition-colors hover:text-brand-bg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={ctaLink.href}
                  className="text-sm text-brand-bg/70 transition-colors hover:text-brand-bg"
                >
                  {ctaLink.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Connect
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {/* PLACEHOLDER — replace with real links */}
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-bg/70 transition-colors hover:text-brand-bg"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://theknot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-bg/70 transition-colors hover:text-brand-bg"
                >
                  The Knot
                </a>
              </li>
              <li>
                {/* PLACEHOLDER — replace with real email */}
                <a
                  href="mailto:hello@glamourbycolleen.com"
                  className="text-sm text-brand-bg/70 transition-colors hover:text-brand-bg"
                >
                  hello@glamourbycolleen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-brand-bg/20 pt-8 text-center text-xs text-brand-bg/70">
          <p>
            &copy; {new Date().getFullYear()} Glamour By Colleen. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
