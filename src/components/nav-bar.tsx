"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, ctaLink } from "@/content/navigation";
import { Button } from "@/components/ui/button";

export function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    if (mobileOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bone/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link href="/" aria-label="Glamour By Colleen — home" className="shrink-0">
          <Image
            src="/brand/lockup-primary.svg"
            alt="Glamour By Colleen"
            width={270}
            height={40}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-oxblood ${
                  pathname === link.href
                    ? "font-medium text-oxblood"
                    : "text-smoke"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden bg-oxblood text-bone hover:bg-claret md:inline-flex"
            render={<Link href={ctaLink.href} />}
          >
            {ctaLink.label}
          </Button>

          <button
            type="button"
            className="inline-flex items-center justify-center text-ink md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-rule bg-bone md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-sm tracking-wide transition-colors hover:bg-parchment ${
                    pathname === link.href
                      ? "font-medium text-oxblood"
                      : "text-ink"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Button
                className="w-full bg-oxblood text-bone hover:bg-claret"
                render={<Link href={ctaLink.href} />}
              >
                {ctaLink.label}
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
