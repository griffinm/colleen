export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Weddings", href: "/weddings" },
  { label: "Gallery", href: "/gallery" },
  { label: "Kind Words", href: "/kind-words" },
  { label: "FAQ", href: "/faq" },
];

export const ctaLink: NavLink = { label: "Inquire", href: "/contact" };
