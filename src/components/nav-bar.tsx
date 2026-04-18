"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, ctaLink } from "@/content/navigation";
import { Button } from "@/components/ui/button";

// Routes whose first section sits on a dark background and should let the nav
// float transparently until the user scrolls. Expand this set if new pages
// are built with dark heroes.
const DARK_HERO_ROUTES = new Set<string>(["/"]);

export function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const hasDarkHero = DARK_HERO_ROUTES.has(pathname);
  const transparent = hasDarkHero && !scrolled && !mobileOpen;

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

  // Scroll-reactive solidify: only meaningful on dark-hero routes; on other
  // routes the nav renders solid from the start.
  useEffect(() => {
    if (!hasDarkHero) return;
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasDarkHero]);

  const linkBase =
    "relative text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 " +
    "after:pointer-events-none after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-px " +
    "after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out " +
    "hover:after:scale-x-100 focus-visible:after:scale-x-100 aria-[current=page]:after:scale-x-100";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[var(--nav-h)] transition-[background-color,border-color,backdrop-filter] duration-500 ease-out",
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-rule bg-bone/95 backdrop-blur-md",
      )}
    >
      <nav
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        {/* Brand — two stacked SVGs, crossfaded between dark-hero and solid states */}
        <Link
          href="/"
          aria-label="Glamour By Colleen — home"
          className="relative block h-9 w-[240px] shrink-0 sm:h-10 sm:w-[270px]"
        >
          <Image
            src="/brand/lockup-primary.svg"
            alt="Glamour By Colleen"
            fill
            priority
            sizes="270px"
            className={cn(
              "object-contain object-left transition-opacity duration-500",
              transparent ? "opacity-0" : "opacity-100",
            )}
          />
          <Image
            src="/brand/lockup-light.svg"
            alt=""
            aria-hidden="true"
            fill
            sizes="270px"
            className={cn(
              "object-contain object-left transition-opacity duration-500",
              transparent ? "opacity-100" : "opacity-0",
            )}
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    linkBase,
                    transparent
                      ? active
                        ? "text-bone"
                        : "text-bone/75 hover:text-bone"
                      : active
                        ? "text-oxblood"
                        : "text-smoke hover:text-ink",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Button
            className={cn(
              "hidden md:inline-flex",
              "h-9 rounded-md px-4 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300",
              transparent
                ? "border border-bone/60 bg-transparent text-bone hover:border-bone hover:bg-bone hover:text-oxblood"
                : "bg-oxblood text-bone hover:bg-claret",
            )}
            render={<Link href={ctaLink.href} />}
          >
            {ctaLink.label}
          </Button>

          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center transition-colors duration-300 md:hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm",
              transparent
                ? "text-bone focus-visible:ring-bone focus-visible:ring-offset-oxblood"
                : "text-ink focus-visible:ring-oxblood focus-visible:ring-offset-bone",
            )}
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
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors hover:bg-parchment",
                      active ? "text-oxblood" : "text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Button
                className="h-11 w-full rounded-md bg-oxblood text-[11px] font-medium uppercase tracking-[0.22em] text-bone hover:bg-claret"
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
