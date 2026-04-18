export interface PortfolioEntry {
  slug: string;
  title: string;
  venue: string;
  location: string;
  date: string;
  description: string;
  partySize: string;
}

/* PLACEHOLDER — all portfolio entries below are placeholder content */
export const portfolioEntries: PortfolioEntry[] = [
  {
    slug: "sarah-and-michael",
    title: "Sarah & Michael",
    venue: "Wequassett Resort",
    location: "Cape Cod",
    date: "September 2025",
    description:
      "A soft, sun-warmed look for a beachfront ceremony. Warm tones, dewy skin, and a nude lip that photographed perfectly in the golden-hour light.",
    partySize: "Bride + 5 bridesmaids + 2 mothers",
  },
  {
    slug: "emily-and-james",
    title: "Emily & James",
    venue: "The Crane Estate",
    location: "Ipswich, North Shore",
    date: "June 2025",
    description:
      "Classic and polished for a black-tie estate wedding. A bold red lip for the bride, with soft neutrals for the bridal party to complement without competing.",
    partySize: "Bride + 4 bridesmaids + 1 mother",
  },
  {
    slug: "megan-and-connor",
    title: "Megan & Connor",
    venue: "Liberty Hotel",
    location: "Boston",
    date: "May 2025",
    description:
      "Modern city elegance — a smoky eye with a soft matte finish. The bride wanted to look like herself turned up to eleven, and we got there.",
    partySize: "Bride + 6 bridesmaids + 2 mothers",
  },
  {
    slug: "amanda-and-david",
    title: "Amanda & David",
    venue: "Gedney Farm",
    location: "The Berkshires",
    date: "August 2025",
    description:
      "A romantic, garden-party look in a converted barn. Soft pinks, flushed cheeks, and a luminous finish that worked beautifully in the mix of natural and string-light.",
    partySize: "Bride + 3 bridesmaids",
  },
  {
    slug: "rachel-and-tom",
    title: "Rachel & Tom",
    venue: "Chatham Bars Inn",
    location: "Cape Cod",
    date: "July 2025",
    description:
      "Waterproof everything for a ceremony right on the beach. Airbrush foundation, a sun-kissed glow, and a lip that survived a very emotional toast from the bride's father.",
    partySize: "Bride + 7 bridesmaids + 2 mothers",
  },
  {
    slug: "nicole-and-alex",
    title: "Nicole & Alex",
    venue: "Beauport Hotel",
    location: "Gloucester, North Shore",
    date: "October 2025",
    description:
      "Rich autumn tones for a harbor-view wedding. Berry lips, warm bronzed skin, and a look that carried from a 2 p.m. ceremony through a midnight send-off.",
    partySize: "Bride + 4 bridesmaids + 2 mothers",
  },
];
