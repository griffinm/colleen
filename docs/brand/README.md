# Glamour By Colleen — Brand Assets

## Logo System

The logo has three forms. Use whichever fits the context.

### Primary lockup (horizontal)
`logos/lockup-primary.svg` — Website header, email signature, print letterhead.

### Stacked lockup
`logos/lockup-stacked.svg` — Square formats: Instagram profile, print where width is limited, signage.

### Monogram
`logos/monogram.svg` — Favicon, social avatar, portfolio watermark, kit branding. Works at any size down to 16px.

### Light variants
Every logo ships with a `-light` variant (bone on transparent) for use on dark backgrounds — ink, oxblood, or photo overlays.

| File | Use on |
|------|--------|
| `lockup-primary.svg` | Bone, parchment, blush, white |
| `lockup-light.svg` | Ink, oxblood, photo overlays |
| `lockup-stacked.svg` | Bone, parchment, blush, white |
| `lockup-stacked-light.svg` | Ink, oxblood, photo overlays |
| `monogram.svg` | Bone, parchment, blush, white |
| `monogram-light.svg` | Ink, oxblood, photo overlays |

### Clear space
Maintain a minimum clear space equal to half the monogram circle diameter on all sides of any logo variant.

### Typeface
The logo is set in **Playfair Display** (Bold 700 for the name, Regular 400 for the descriptor). Available free on [Google Fonts](https://fonts.google.com/specimen/Playfair+Display).

```bash
npm install @fontsource/playfair-display
```

Or via Google Fonts CDN:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

---

## Favicons

Drop the contents of `favicons/` into your Next.js `app/` directory (App Router) or `public/` directory.

### Files included

| File | Size | Purpose |
|------|------|---------|
| `favicon.svg` | scalable | Modern browsers, best quality |
| `favicon.ico` | 16+32px | Legacy browser fallback |
| `favicon-16x16.png` | 16×16 | Browser tab (small) |
| `favicon-32x32.png` | 32×32 | Browser tab (standard) |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `android-chrome-192x192.png` | 192×192 | Android home screen |
| `android-chrome-512x512.png` | 512×512 | Android splash screen |
| `site.webmanifest` | — | PWA manifest |

### Next.js App Router setup

Place favicon files in `app/` and add to `app/layout.tsx`:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glamour By Colleen',
  description: 'Bridal makeup for Boston and the Cape.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};
```

---

## Color Palette — "Oxblood & Bone"

### Quick reference

| Name | Hex | Role |
|------|-----|------|
| Oxblood | `#881337` | Primary brand — hero sections, CTAs, headlines |
| Claret | `#9f1239` | Hover states, secondary buttons, accent text |
| Blush | `#fecdd3` | Testimonial backgrounds, soft accent areas |
| Bone | `#fafaf9` | Page background, card surfaces |
| Parchment | `#f5f5f4` | Alternating section backgrounds |
| Stone | `#e7e5e4` | Dividers, borders, form outlines |
| Smoke | `#57534e` | Captions, metadata, secondary text |
| Ink | `#1c1917` | Body copy, primary headlines |
| Brass | `#b45309` | Eyebrow labels, decorative rules (sparingly) |

### Tailwind CSS

Import `config/brand-colors.js` in your Tailwind config:

```js
// tailwind.config.js
const brandColors = require('./brand/config/brand-colors');

module.exports = {
  theme: {
    extend: {
      colors: brandColors,
    },
  },
};
```

Then use: `bg-oxblood`, `text-bone`, `border-brand-stone`, etc.

> **Note:** `stone` is exported as `brand-stone` to avoid overwriting Tailwind's built-in `stone` scale.

### CSS custom properties

Import `config/brand-colors.css` in your global stylesheet:

```css
@import './brand/config/brand-colors.css';
```

Then use: `color: var(--color-oxblood)`, `background: var(--color-bone)`, etc.

### Key pairings

| Section | Background | Text | Accent |
|---------|-----------|------|--------|
| Hero | oxblood | bone | bone (button bg) |
| About | bone | ink | brass (eyebrow) |
| Testimonials | blush | oxblood | claret (attribution) |
| Body content | bone | ink | smoke (captions) |
| Footer | ink | bone | brass (rule) |
| Alternating sections | parchment | ink | stone (borders) |

---

## File structure

```
brand/
├── README.md
├── logos/
│   ├── lockup-primary.svg
│   ├── lockup-light.svg
│   ├── lockup-stacked.svg
│   ├── lockup-stacked-light.svg
│   ├── monogram.svg
│   └── monogram-light.svg
├── favicons/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   └── site.webmanifest
└── config/
    ├── brand-colors.js
    └── brand-colors.css
```
