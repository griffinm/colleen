import Link from "next/link";
import { navLinks, ctaLink } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      {/* Decorative brass rule */}
      <div className="h-px bg-brass" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-medium tracking-tight"
            >
              Glamour By Colleen
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-smoke">
              Wedding makeup artist serving Boston, Cape Cod, the North Shore,
              the Berkshires, and all of New England.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brass">
              Pages
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-smoke transition-colors hover:text-bone"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={ctaLink.href}
                  className="text-sm text-smoke transition-colors hover:text-bone"
                >
                  {ctaLink.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brass">
              Connect
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {/* PLACEHOLDER — replace with real links */}
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-smoke transition-colors hover:text-bone"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://theknot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-smoke transition-colors hover:text-bone"
                >
                  The Knot
                </a>
              </li>
              <li>
                {/* PLACEHOLDER — replace with real email */}
                <a
                  href="mailto:hello@glamourbycolleen.com"
                  className="text-sm text-smoke transition-colors hover:text-bone"
                >
                  hello@glamourbycolleen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-smoke/20 pt-8 text-center text-xs text-smoke">
          <p>
            &copy; {new Date().getFullYear()} Glamour By Colleen. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
