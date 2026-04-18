export type TestimonialCategory =
  | "look-like-me"
  | "last-all-day"
  | "dont-know-what-i-want"
  | "party-and-skin";

export interface Testimonial {
  quote: string;
  brideName: string;
  venue: string;
  date: string;
  category: TestimonialCategory;
}

/* PLACEHOLDER — all testimonials below are placeholder content */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I was so nervous about looking overdone, but Colleen completely got it. My husband teared up when he saw me, and later he said I just looked like me — the most beautiful version of me. That's exactly what I wanted.",
    brideName: "Sarah M.",
    venue: "Wequassett Resort, Cape Cod",
    date: "September 2025",
    category: "look-like-me",
  },
  {
    quote:
      "I showed Colleen a photo of myself on a random Tuesday and said 'I want to look like this, just better.' She laughed and said 'That's literally my whole job.' And she nailed it.",
    brideName: "Emily R.",
    venue: "The Crane Estate, Ipswich",
    date: "June 2025",
    category: "look-like-me",
  },
  {
    quote:
      "We did a first look at 2 p.m. and danced until midnight. My makeup looked exactly the same in the last photos as the first. I still don't know how she did it.",
    brideName: "Jessica T.",
    venue: "The Chanler, Newport",
    date: "October 2025",
    category: "last-all-day",
  },
  {
    quote:
      "It was 95 degrees and humid on the Cape that day. I cried during the ceremony, hugged every single guest, and danced for four hours. My makeup did not move. Worth every penny.",
    brideName: "Lauren K.",
    venue: "Chatham Bars Inn, Cape Cod",
    date: "July 2025",
    category: "last-all-day",
  },
  {
    quote:
      "I came to my trial with zero ideas. Literally none. Colleen asked me a few questions about my dress, my venue, and how I normally wear my makeup, and then she just... created this look that was perfect. I would never have gotten there on my own.",
    brideName: "Megan D.",
    venue: "Liberty Hotel, Boston",
    date: "May 2025",
    category: "dont-know-what-i-want",
  },
  {
    quote:
      "I sent Colleen about forty Pinterest photos that all looked completely different from each other. Instead of judging me, she pulled out the common thread I couldn't see and designed something cohesive. She's part artist, part therapist.",
    brideName: "Amanda W.",
    venue: "Gedney Farm, The Berkshires",
    date: "August 2025",
    category: "dont-know-what-i-want",
  },
  {
    quote:
      "My mom hadn't worn makeup in twenty years and was nervous about it. Colleen spent extra time with her, kept it light and natural, and my mom cried when she looked in the mirror — happy tears. The photos of us together are my favorite from the whole day.",
    brideName: "Rachel B.",
    venue: "Beauport Hotel, Gloucester",
    date: "September 2025",
    category: "party-and-skin",
  },
  {
    quote:
      "I have really sensitive, rosacea-prone skin and I was dreading the trial. Colleen brought products specifically for reactive skin, did a patch test first, and my face was perfect all day — no irritation, no redness, nothing. I couldn't believe it.",
    brideName: "Nicole P.",
    venue: "Oceanview of Nahant",
    date: "June 2025",
    category: "party-and-skin",
  },
];
