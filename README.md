# Tanya Dance Academy

Premium dance academy website for **Jaipur, Rajasthan, India** — built with React, Framer Motion, and SCSS modules.

**Location:** Plot 18, Malviya Nagar, Near Gaurav Tower, Jaipur 302017  
**Tagline:** Dance Beyond Boundaries

## Tech Stack

- React 19 + Vite
- React Router
- Framer Motion
- SCSS Modules
- Lazy loading & code splitting

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # 12 homepage sections
│   └── ui/           # Reusable UI (Button, SectionTitle, etc.)
├── data/             # Programs, instructors, events, pricing, etc.
├── hooks/            # useInView for scroll animations
├── pages/            # Home page
└── styles/           # Global SCSS variables & mixins
```

## Design System

| Token   | Value     |
|---------|-----------|
| Primary | `#D72638` |
| Black   | `#0F0F0F` |
| Gold    | `#F5B700` |
| Gray    | `#F4F4F4` |

**Fonts:** Playfair Display (headings), Inter (body), Poppins (buttons)

## Routes

| Path | Page |
|------|------|
| `/` | Homepage (12 sections) |
| `/programs/:id` | Program detail (e.g. `/programs/ballet`) |
| `/performances` | Performance archive & video showcase |
| `/404` | Not found |

## Sections

1. Cinematic Hero (video background)
2. About Academy (animated stats)
3. Dance Programs (8 styles)
4. Why Choose Us
5. Meet The Masters (instructors)
6. Student Success Stories (carousel)
7. Global Achievements (timeline)
8. Gallery (masonry + lightbox)
9. Upcoming Events
10. Pricing (3 tiers)
11. Contact
12. Footer
