<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# CLAUDE.md

Guidance for Claude Code working in this repository. Read this file in full at the start of any session before making changes.

## 1. Project overview

This repo is the marketing website for **Glamour By Colleen** — the public-facing brand of **Colleen Mahoney**, a solo wedding makeup artist serving the **Boston and Cape Cod area of Massachusetts**. The site's single job is to convert a bride who is researching vendors into someone who submits an inquiry. Everything on the site should be evaluated against that goal.

**Brand vs. person:** "Glamour By Colleen" is the brand — use it in nav, footer, page titles, OG/Twitter, and structured data. "Colleen" (first name only) is how she speaks in the first-person body copy. Both are correct; never use "Colleen Mahoney" as the site/brand name.

A companion document, `wedding_makeup_website_analysis.docx`, contains a competitive analysis of seven peer sites. The strategic decisions in this file are derived from that research. When in doubt on a content, structure, or design decision, re-read the relevant section of that document before guessing.

## 2. Strategic positioning

Two points of positioning shape every decision on this site:

**Colleen is a solo artist, and that is the offering.** Larger studios in this market (e.g., Boston's Glamour Cosmetics) have to hedge about who will actually show up on the wedding day. Colleen doesn't — she is the artist, every time. The site should let a bride feel like she already knows Colleen before she sends an inquiry. First-person voice ("I," not "we"), a real founder story, her face in the photography, and a personal tone throughout.

**Cape Cod is a differentiator.** Boston is crowded with strong competitors. Cape Cod weddings — destination, waterfront, summer — are a natural wedge. The site should treat the Cape as a first-class service area, not an afterthought. Mention specific towns where it makes sense (Chatham, Osterville, Falmouth, Provincetown, etc.) and lean into the destination-wedding angle.

## 3. Tech stack

- **Next.js** (App Router, TypeScript, `strict: true`)
- **Tailwind CSS** for styling
- **shadcn/ui** for component primitives — note these are copy-pasted into `components/ui`, not imported from a package. When a new primitive is needed, install it with `npx shadcn@latest add <component>` rather than writing one from scratch.
- **next/image** for all imagery. Portfolio images are the heaviest asset on this site; never use plain `<img>` tags.
- **Form handling:** server actions + email delivery via Resend (or equivalent). No third-party form embed — the inquiry form is the most important CTA on the site and must feel native.
- **Deployment target:** Vercel (assumed).

If a decision requires a dependency not listed here, flag it and confirm before adding.

## 4. Site structure

The planned page structure, in navigation order:

1. **Home** — hero with one strong image, credibility statement, signature-style definition, process teaser, portfolio preview, testimonial highlights, final CTA.
2. **About** — Colleen's story in her own voice. Why makeup, why weddings, what a bride can expect from working with her specifically. Her photo, prominently.
3. **Weddings** (services) — the full offering. Process walkthrough (Inquire → Trial → Wedding Day), what's included, add-ons (bridal party, hair if offered), service area, travel policy for Cape Cod / destination.
4. **Portfolio** — organized by **full weddings** ("The Wedding of X + Y") rather than a disconnected grid of faces. Each wedding gets a short caption with season, location, and style notes. This is the single most important structural lesson from the research.
5. **Pricing** — at minimum a starting-from figure and a clear package range. May live on the Weddings page rather than a separate page; decide once copy is drafted. Do **not** ship this site with pricing fully hidden.
6. **FAQ** — thorough, not token. Topics to cover: airbrush vs. traditional, how far in advance to book, trials, timing on the morning of, travel to Cape Cod / destination weddings, gratuity, products used, skin sensitivities, touch-up kits, bridal party logistics, what to do the night before.
7. **Contact / Inquire** — the primary conversion point. Offer a free 15-minute consultation call as a low-commitment first step (pattern borrowed from Ivana Kostova's site in the research).

An "Inquire" or "Check Availability" button should appear in the nav, after the hero, mid-page, and at the foot of every page.

## 5. Content and copy conventions

Voice is first-person, warm, specific to Colleen. The research flagged one sentence as a cautionary example of what to avoid: *"We are a passionate bridal makeup and hair artist team dedicated to helping brides look and feel their absolute best."* Any sentence that could be dropped onto a hundred other makeup artist websites is the wrong sentence. If draft copy reads generic, rewrite it until it sounds like a specific person said it.

Testimonials should be chosen and surfaced to address bride-specific anxieties — durability through tears, feeling like herself, not knowing what she wants going in — rather than generic praise. Pull-quote the anxious-bride-facing phrase as display text, with the full quote below.

Credibility markers (years of experience, number of weddings, Google review count, press mentions) go high on the home page, not buried in the About section. If Colleen has a verifiable public review count (Google, The Knot, WeddingWire), state it explicitly — it's more persuasive than on-site testimonials because a bride can check it.

Geographic service area should be stated on the home page above the fold. "Boston and Cape Cod, Massachusetts" or similar.

The signature style needs a **name**. Brides buy a look, not a skill. This will come from Colleen directly (not invented by Claude), but leave space for it in the hero and reinforce it on every page once named.

## 6. Design system

Pull design tokens into `tailwind.config.ts` and reference them by name throughout the codebase — no one-off hex values in components.

**Palette:** warm, not cold. The research specifically flagged an all-gray monochrome palette as feeling clinical for a wedding context. Recommended direction: warm off-white background, a muted rose or dusty-pink accent, a deep warm neutral for text, and a single accent for CTA buttons. Keep the palette tight — four or five named colors total.

**Typography:** a single well-chosen serif for display (headings, pull quotes, hero) paired with a clean sans-serif for body. The research praised this exact approach on Bare Beauty Bar & Spa. Load fonts with `next/font` — no external stylesheet links.

**Photography is the design.** Colleen's portfolio images carry more weight than any typography or layout choice. UI should get out of the way: generous whitespace, large image containers, minimal decorative chrome. If a visual element competes with the photography, cut it.

**Motion:** subtle only. Fade-in on scroll for portfolio sections is fine. No parallax, no heavy animations, nothing that delays the first meaningful paint.

## 7. What to avoid

Concrete anti-patterns identified in the research. Do not reproduce these in this codebase:

- Portfolio as an unlabeled grid of faces with no context.
- Pricing completely absent from the site. At minimum, show a starting-from figure.
- A CTA that only appears once, at the bottom of a page.
- Navigation labels that are cute but unclear ("Let's glam!", "non bridal"). Use plain labels.
- "We" and "our team" copy for a solo artist. Colleen is not a team.
- Generic hero copy that could appear on any makeup artist's site.
- An embedded Instagram feed used as filler at the bottom of a page. If it earns its place, fine; if it's there because the page felt empty, delete it.
- Long paragraphs on the home page. The home page is a trailhead, not a destination.

## 8. Code conventions

**File structure.** App Router conventions: route segments under `app/`, shared UI under `components/`, shadcn primitives under `components/ui/`, utilities under `lib/`, content (testimonials, FAQ, pricing) under `content/` as typed TypeScript modules so copy edits don't require hunting through JSX.

**Server components by default.** Drop to client components only when an interactive primitive genuinely requires it (form state, carousel, mobile nav toggle). The majority of this site is static content and should be server-rendered.

**Forms.** The inquiry form uses a server action. Validate with Zod. Deliver via Resend to Colleen's email. Include a honeypot field and a simple rate limit — this form will get scraped.

**Images.** All imagery goes through `next/image` with explicit `width`, `height`, and a meaningful `alt`. Portfolio images should be served from a CDN (Cloudinary or Vercel's built-in image optimization) with AVIF/WebP. Preload the hero image with `priority`.

**Content separation.** Testimonials, FAQ entries, pricing tiers, and service descriptions live in `content/*.ts` as typed arrays. Components read from those modules. This keeps copy edits from touching layout code and makes it trivial to reorder, A/B, or translate later.

**Accessibility.** Target WCAG AA. Real alt text on every portfolio image (not "bride" — describe the look). Keyboard navigation works end to end. Focus states visible. Color contrast checked against the final palette, not assumed.

## 9. SEO and performance

Local SEO matters more than any other acquisition channel for this business. Every page and every component should be built with the following rules in mind.

### 9.1 Metadata and page titles

- Every route **must** export a `generateMetadata` function (or a static `metadata` object) with a unique, descriptive `title` and `description`. No placeholders like "Home | Glamour By Colleen" or empty strings.
- Titles should follow the pattern: `{Page-specific phrase} | Glamour By Colleen — Wedding Makeup Artist, Boston & Cape Cod`. Keep under 60 characters where possible.
- Meta descriptions should be 120–155 characters, written as a compelling sentence (not keyword-stuffed), and unique per page.
- Include a canonical URL on every page (`alternates.canonical` in Next metadata).

### 9.2 Open Graph and social tags

- Every route must set `openGraph` metadata: `title`, `description`, `url`, `siteName`, `images` (at least one 1200×630 image), `locale`, and `type` (`website` for the home page, `article` or `profile` where appropriate).
- Every route must set `twitter` metadata: `card: "summary_large_image"`, `title`, `description`, and `images`.
- OG images should be real photography (not generic brand cards) — a bride sharing a link to her maid of honor should see a compelling preview. Generate or provide a default OG image for pages that lack a page-specific one.

### 9.3 Structured data

- The home page must include `LocalBusiness` schema.org JSON-LD with: `name`, `description`, `url`, `telephone` (if available), `address`, `areaServed` (Boston, Cape Cod, and specific towns), `image`, `priceRange`, and `sameAs` (links to Google Business, Instagram, The Knot, etc.).
- The FAQ page must include `FAQPage` schema.org JSON-LD with every question/answer pair.
- Portfolio wedding pages should include `ImageGallery` or `ImageObject` structured data where practical.
- Inject structured data via a `<script type="application/ld+json">` tag in the page's `<head>` (use Next's metadata API or a layout-level component).

### 9.4 Semantic HTML and accessibility

- Use correct heading hierarchy on every page: one `<h1>` per page, followed by `<h2>`, `<h3>`, etc. in order. Never skip levels for styling purposes — use CSS instead.
- Use semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. Do not build the page out of generic `<div>` soup.
- Every `<img>` (via `next/image`) must have a meaningful `alt` attribute. For portfolio images, describe the look, setting, and season — not just "bride." Decorative images get `alt=""` and `aria-hidden="true"`.
- All interactive elements (links, buttons, form inputs) must be keyboard-navigable with visible focus states.
- Form fields must have associated `<label>` elements (not just placeholder text). Error messages must be programmatically associated with their inputs via `aria-describedby`.
- Color contrast must meet WCAG AA (4.5:1 for body text, 3:1 for large text). Verify against the actual palette, not assumptions.
- Use `aria-current="page"` on the active navigation link.
- Skip-to-content link as the first focusable element in the layout.

### 9.5 Local SEO and content

- Each service area (Boston, Cape Cod, and specific towns worth ranking for — Chatham, Osterville, Falmouth, Provincetown, etc.) must be mentioned in natural body copy, not just stuffed into a footer or meta tags.
- The site must generate a `sitemap.xml` and `robots.txt` via Next's metadata API.
- Internal linking: every page should link to at least two other pages on the site. The portfolio and FAQ pages are natural link targets from service and home pages.

### 9.6 Performance

Performance targets: Lighthouse Performance > 95 on mobile, LCP < 2.5s on the home page. Portfolio images are the main risk — optimize aggressively and lazy-load below-the-fold galleries.

- Preload the hero image with `priority` on `next/image`.
- Serve images in AVIF/WebP via Vercel image optimization or Cloudinary.
- No render-blocking external stylesheets or font links — use `next/font` exclusively.
- Minimize client-side JavaScript. If a component doesn't need interactivity, keep it a server component.

## 10. Working norms

When drafting copy, write in Colleen's voice, not in corporate-marketing voice. If the right copy isn't known, leave a clearly marked `TODO(colleen):` placeholder rather than writing generic filler that might ship by accident.

When making a design or structural decision that isn't covered here, check the research document first. If the research doesn't answer it, surface the decision explicitly in the PR or the response rather than making it silently.

Keep the scope of each change tight. This site is small; changes should be reviewable in one sitting.