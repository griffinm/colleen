# Colleen Mahoney — Wedding Makeup Website

**Content Plan**
Prepared April 2026

---

## 1. Purpose of This Document

This document is the source of truth for the site's structure, voice, and page-level content. It is meant to be read alongside the competitive research document (`wedding_makeup_website_analysis.docx`) and to guide implementation in Next.js.

Placeholder copy is written in the tone the final site should use. Anything marked `[placeholder]` needs a real answer from Colleen before launch. The structure and voice are finalized; the specifics are not.

---

## 2. Structural Decision: Multi-Page, Not Single-Page

The site will be built as a **multi-page application** rather than a single long-scroll page.

**Why multi-page wins for Colleen specifically:**

- **Her story is the pitch.** The MRI-tech origin, the solo-artist trust argument, and the "it will be me on your wedding day" promise all need room to breathe. A one-pager forces them into short blocks.
- **Service complexity.** She serves whole wedding parties, sometimes with an assistant, sometimes partnered with a hair stylist. That's more logistical nuance than a one-pager handles cleanly.
- **FAQ value.** A thorough FAQ is one of the strongest conversion tools in this space. On its own URL it can be exhaustive and it gets independently indexed by Google.

**The pattern to follow:** multi-page with home-page sections that each preview a deeper page. Brides who want the fast answer get it on the home page; brides who want to research get rewarded for clicking deeper. This matches the patterns that convert best in the research (Glamour Cosmetics, Ms. Lauryn Marie).

---

## 3. Site Architecture

Seven routes, kept lean on purpose.

| # | Route | Page | Purpose |
|---|-------|------|---------|
| 1 | `/` | Home | Hook, proof, path forward |
| 2 | `/about` | About Colleen | The story that closes the sale for a solo artist |
| 3 | `/weddings` | Weddings | Services, process, and pricing |
| 4 | `/portfolio` | Portfolio | Organized by wedding, not a wall of faces |
| 5 | `/kind-words` | Kind Words | Testimonials, framed around bride anxieties |
| 6 | `/faq` | FAQ | Answer every reasonable question before it's asked |
| 7 | `/contact` | Contact | Low-friction inquiry form |

**Navigation order:** Home · About · Weddings · Portfolio · Kind Words · FAQ · Inquire

**Notes for Next.js implementation:**

- Pricing lives inside `/weddings` rather than on its own route — it's encountered in context, not as a sticker-shock moment.
- The contact form should appear in **two places**: as its own route (`/contact`) and embedded at the bottom of `/weddings`. Same form, two entry points. This measurably improves inquiries.
- Every page ends with a CTA that routes to `/contact`.

---

## 4. Voice and Tone Guide

This applies everywhere on the site. If copy doesn't pass these rules, rewrite it.

- **First person.** "I" throughout, not "we" or "Colleen's studio." She is the offering.
- **Warm but not gushing.** No "obsessed with," no "sooo excited," no sparkle emojis. Think the register of a thoughtful thank-you card.
- **Specific over poetic.** "I'll be at your venue by 7 a.m. with coffee and a kit that can handle humidity" beats "bringing beauty to your special day."
- **Confident about the craft.** She's been doing this long enough to have opinions. Opinions earn trust.
- **Anchored in place.** Boston, Cape Cod, the North Shore, the Berkshires — name real places. Specificity is credibility.
- **Avoid "look and feel your best."** It's on every makeup artist site in America. Whenever tempted, reach for something Colleen-specific instead.

---

## 5. Page-by-Page Content

### 5.1 Home (`/`)

**Purpose:** In five seconds, communicate who she is, where she works, what makes her different, and how to get in touch.

#### Hero section

One strong image of Colleen working — not a posed headshot, not a stock-feeling portrait. Her hands, a brush, a bride mid-laugh. Over it:

> **Bridal makeup for Boston and the Cape.**
> Hi, I'm Colleen — a former MRI tech who traded scrubs for a makeup kit, and I've been making brides feel like themselves on the biggest day of their lives ever since.
>
> [ Check my availability → ]

The MRI-tech origin is the hook. It's memorable, specific, and quietly signals traits brides actually want: steady hands, calm under pressure, comfort working carefully on people's faces.

#### Signature style strip

A three- or four-image band showing the range of her work, with a short line naming her aesthetic:

> `[placeholder: "Natural, luminous, and unmistakably you — the kind of makeup that photographs beautifully and still looks like you at the end of the night."]`

This sentence is the single most important piece of copy on the site. It needs to come directly from Colleen once she articulates how she thinks about her style.

#### How this works (three-step process)

Three side-by-side blocks with small icons or photos:

1. **Inquire.** Tell me about your wedding — date, venue, how many people need makeup. I'll get back to you within 48 hours with availability and a quote.
2. **Trial.** We meet 6–8 weeks before the wedding to design your look together. Bring inspiration photos, your veil if you have it, and an open mind.
3. **Wedding day.** I arrive at your venue, set up a calm corner, and work through your party on a schedule we've built together. You get to enjoy the morning.

#### Social proof strip

`[placeholder: "Trusted by 200+ brides across Massachusetts" or a rotating quote carousel once testimonials exist. If there are press mentions or venue partnerships, a logo strip goes here.]`

#### Closing CTA

A full-width band near the bottom:

> **Your wedding date is already taken by someone. Make sure it isn't by another bride's makeup artist.**
> [ Check my availability → ]

---

### 5.2 About Colleen (`/about`)

**Purpose:** Let a bride feel like she already knows Colleen before she fills out the form. This is the page that closes the sale for a solo artist.

#### Opening

A real photo of Colleen — ideally outdoors, natural, smiling, not in front of a ring light. Next to it:

> I spent years as an MRI technician. It was steady, detailed work, and I was good at it — but every morning I was setting an alarm to go do someone else's dream. Makeup had been mine since I was old enough to hold a brush.
>
> In `[placeholder: year]` I finally stopped putting it off. I started taking bridal clients on weekends, then most weekends, then every weekend, and eventually I hung up the lead apron for good. Today I do this full-time, and I can't imagine doing anything else.

#### Philosophy

> `[placeholder: "I have one job on your wedding day, and it isn't to make you look like someone else. It's to make sure that when your partner sees you at the end of the aisle, they see you — the best, most photographable, most *you* version of you. That's the whole brief."]`

This eventually contains Colleen's real philosophy, pulled from the signature style conversation.

#### Personal section

> When I'm not working, I'm with my husband Yanni and our son Spiro — `[placeholder: one or two specific, charming details. A favorite weekend spot on the Cape? A dish she cooks? The thing Spiro is obsessed with right now?]`. If you book me, this is who you're getting: a working mom from Boston who takes the craft seriously and doesn't take herself too seriously.

Specificity matters here. "Spending time with family" is generic; "Sunday mornings at [specific bakery] with Spiro" is memorable.

#### Why solo matters (the pitch)

> A lot of bigger studios can't tell you exactly who will show up on your wedding day until a week before — sometimes the morning of. I can. It'll be me. I'll be the one you met at your trial, the one who knows your skin, the one who remembers that you mentioned your mom cries easily and you want makeup that can handle it.

This directly addresses what the research identified as the single biggest opportunity for a solo artist in this market.

#### CTA

> [ Let's talk about your wedding → ]

---

### 5.3 Weddings (`/weddings`)

**Purpose:** Answer "what exactly am I buying?" completely enough that a bride could comfortably inquire.

#### What I offer

Prose, not a bullet menu:

> I work with brides across the Boston area, Cape Cod, the North Shore, and anywhere else in New England a wedding takes me. Most of my bookings are full wedding parties — the bride, bridesmaids, mothers, and anyone else who wants to be camera-ready. I'm happy to do just the bride, or the whole party of twelve.
>
> For larger parties, I bring a trusted assistant artist so we stay on schedule without rushing anyone. For hair, I partner with `[placeholder: hair stylist name or "a small circle of stylists I trust completely"]` — you can book us together or separately, whatever works for your day.
>
> I travel to your venue. Getting-ready suite, hotel room, parents' house, tented field in Truro — wherever you are, I'll be there with a full kit and a plan.

#### The process

Three sections, each a short paragraph:

**1. Inquire and book.** `[placeholder: inquiry flow, info needed, deposit, contract, how dates get held.]`

**2. The trial.** `[placeholder: trial duration, location, what to bring, what gets decided, how the wedding-day look gets documented.]`

**3. Wedding day.** `[placeholder: arrival time, setup, order of operations, touch-up kit, departure. Specific enough that a bride can picture the morning.]`

#### Pricing

> `[placeholder section]`
>
> Every wedding is a little different, and I'd rather build a quote that fits your actual day than list a dozen packages that might not. Tell me what you're thinking and I'll come back with something fair.

**Recommendation:** publish at least a "starting from" figure for bridal makeup plus a per-additional-person rate. The research was unambiguous that some pricing information on the site dramatically outperforms none — it filters unqualified inquiries and builds trust with serious ones.

#### Embedded contact form

The `/contact` form should render at the bottom of this page as well. Anyone who reads through the process and is ready to act shouldn't have to click away.

---

### 5.4 Portfolio (`/portfolio`)

**Purpose:** Show the work in a way that helps brides picture their own day.

#### Structure

Organize by wedding, the way Ms. Lauryn Marie does. Each entry is a card that opens into a gallery:

> **Sarah & Michael** — `[placeholder: Wequassett Resort, Cape Cod, September 2025]`
> A soft, sun-warmed look for a beachfront ceremony. Bride plus five bridesmaids and both mothers.
> [ See the gallery → ]

Six to twelve of these at launch. Tells a richer story than face-only shots and quietly communicates volume, venue variety, and whole-party experience.

#### Behind-the-scenes strip

A section lower on the page with candid morning-of shots — kit laid out, Colleen working, the bride laughing with her bridesmaids. Humanizes the work and helps brides visualize the morning.

**Next.js note:** each wedding can be its own dynamic route (`/portfolio/[slug]`) or rendered as a modal/lightbox over the index page. Either works; dynamic routes are better for SEO.

---

### 5.5 Kind Words (`/kind-words`)

**Purpose:** Testimonials, curated to answer the specific fears brides actually have.

#### Structure

Rather than a wall of quotes, group three or four testimonials around the real questions:

**Will I still look like me?**
> `[placeholder testimonial.]`
> — `[placeholder: Bride name, venue, date]`

**Will it last all day?**
> `[placeholder testimonial.]`
> — `[placeholder: Bride name, venue, date]`

**What if I don't know what I want?**
> `[placeholder testimonial.]`
> — `[placeholder: Bride name, venue, date]`

**What about my mom / my bridesmaids / my skin?**
> `[placeholder testimonial.]`
> — `[placeholder: Bride name, venue, date]`

At the bottom, a link to external Google reviews if the count and rating are strong. Externally verifiable reviews are more persuasive than anything on the site itself.

---

### 5.6 FAQ (`/faq`)

**Purpose:** Answer every reasonable question a bride might have before she thinks to ask. Every unanswered question is a reason to keep shopping.

#### Starter questions

- How far in advance should I book?
- Do you travel? How far? Is there a travel fee?
- How long does makeup take per person?
- What products do you use? What if I have sensitive skin?
- Do you offer airbrush? What's the difference?
- What happens at a trial?
- What if I want to change my look after the trial?
- Can you do a second look for the reception?
- Do you stay for touch-ups?
- What's your cancellation and rescheduling policy?
- Do you take a deposit? How much?
- What if my wedding is outside Massachusetts?
- Can you do just the bride, or do I need to book the whole party?
- Do you do hair, or work with someone who does?

Each answer: Colleen's voice, two to four sentences, direct and friendly.

**Next.js note:** FAQPage structured data (JSON-LD) should be added to this page for SEO. It's a measurable win.

---

### 5.7 Contact (`/contact`)

**Purpose:** Convert. Short form, low-commitment framing.

#### Header

> **Let's talk about your wedding.**
> Fill this out and I'll get back to you within 48 hours — usually sooner. No pressure, no hard sell. If we're a fit, we'll schedule a quick call. If we're not, I'll happily point you toward someone who is.

#### Form fields

| Field | Type | Required |
|-------|------|----------|
| Name | text | yes |
| Email | email | yes |
| Wedding date | date (or "not sure yet" checkbox) | yes |
| Venue | text | no |
| Number of people needing makeup | number or select | yes |
| Anything else I should know | textarea | no |

Keep it minimal. Every extra field measurably reduces submission rates.

#### Below the form

> Prefer email? Reach me directly at `[placeholder: email address]`.

#### Post-submit confirmation

> Thanks — I got it. I'll be in touch within 48 hours. In the meantime, feel free to follow along on Instagram at `[placeholder: handle]`.

#### Auto-reply email

`[placeholder: draft a warm, short auto-reply email that sets expectations for response time and sounds like Colleen, not a form autoresponder.]`

**Next.js implementation notes:**

- Server action for form submission, with validation (Zod is a good fit).
- Spam protection: honeypot field + optionally a simple math or hCaptcha challenge.
- Send the submission to Colleen via Resend, Postmark, or similar transactional email service.
- Store submissions in a simple database (or Airtable, if a lighter-weight setup is preferred).

---

## 6. Cross-Cutting Components

Components that appear across multiple pages. Worth building once and reusing.

- **`<NavBar />`** — links to all 7 routes, persistent Inquire CTA on the right.
- **`<Footer />`** — copyright, quick links, social, service area reminder ("Serving Boston, Cape Cod, and all of New England").
- **`<CTABanner />`** — the closing "Check my availability" band. Used on home, about, weddings, portfolio.
- **`<ContactForm />`** — rendered on both `/contact` and embedded in `/weddings`.
- **`<TestimonialCard />`** — used on home snippet and on `/kind-words`.

---

## 7. What's Still Needed Before Launch

In order of importance:

1. **Colleen's signature style in her own words.** This is the sentence that sits on the home page, the About page, and every pitch email. A 15-minute conversation about how she thinks about bridal makeup will give us everything we need.

2. **A pricing decision.** Not the final numbers — just a direction. Fully transparent rate card? Starting-from figure only? Private and inquiry-gated? Each is defensible; pick one and write to it.

3. **Content assets.** Photos of Colleen working, photos of Colleen as a person, testimonials from past brides (with permission), and six to twelve wedding galleries she's proud of.

4. **The year she went full-time.** Needed for the About page opening.

5. **The family details.** One or two specific, charming details to replace the generic placeholder on the About page.

6. **Hair partnership decision.** Does she name the specific stylist(s), or keep it general?

7. **Contact email and Instagram handle.** Small but blocking.

---

## 8. Recommended Next.js Stack

Not prescriptive — just a sensible starting point given the site's requirements.

| Concern | Recommendation |
|---------|----------------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Forms | Server Actions + Zod validation |
| Email | Resend or Postmark |
| Image hosting | Next.js Image component + Cloudinary or Vercel Blob |
| Hosting | Vercel |
| Analytics | Vercel Analytics or Plausible |
| SEO | Next.js Metadata API; add FAQPage and LocalBusiness JSON-LD |

---

*— End of plan —*