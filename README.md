# Wanron Home solutions Limited

## Project Structure

```
greenbuild/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                        # React DOM entry
    ├── App.jsx                         # Root — router + layout shell
    │
    ├── hooks/
    │   └── useHashRouter.js            # Hash-based client routing
    │
    ├── styles/
    │   ├── tokens.css                  # Design tokens (colors, spacing, fonts)
    │   └── global.css                  # Base/reset + utility classes
    │
    ├── data/
    │   └── content.js                  # ALL site copy — edit here, never in components
    │
    ├── pages/                          # One file per route
    │   ├── HomePage.jsx                # /
    │   ├── AboutPage.jsx               # /about
    │   ├── ServicesPage.jsx            # /services
    │   ├── ProjectsPage.jsx            # /projects
    │   ├── TestimonialsPage.jsx        # /testimonials
    │
    └── components/
        ├── layout/                     # Page-level structural components
        │   ├── Navbar.jsx + .css       # Sticky nav, active page, mobile menu
        │   └── Footer.jsx + .css       # Footer columns + contact
        │
        ├── ui/                         # Small reusable primitives
        │   ├── Button.jsx              # primary / secondary / outline / ghost
        │   ├── SectionLabel.jsx        # Eyebrow uppercase labels
        │   ├── StarRating.jsx          # 1–5 star display
        │   └── WhatsAppButton.jsx      # Floating WhatsApp CTA
        │
        └── sections/                   # Full-width page sections
            │
            │  ── HOME ──
            ├── HeroSection             # Full-bleed hero with slow zoom
            ├── AboutSection            # 2-col image + features (home teaser)
            ├── ServicesSection         # 3×2 service card grid
            ├── ProjectsSection         # 2-col featured project cards
            ├── TestimonialsSection     # 3-col testimonial cards
            ├── CtaSection              # Dark green CTA band (reused on all pages)
            │
            │  ── ABOUT ──
            ├── AboutHero               # Full-bleed hero with breadcrumb
            ├── AboutStats              # 4-stat dark green bar
            ├── OurStory                # 2-col image + 3 paragraphs
            ├── CoreValues              # 4-card values grid
            ├── TeamSection             # 4-col team cards with hover zoom
            │
            │  ── SERVICES ──
            ├── ServicesHero            # Full-bleed hero
            ├── ServicesDetailed        # Alternating image↔text rows per service
            ├── ServicesProcess         # 6-step numbered process grid
            │
            │  ── PROJECTS ──
            ├── ProjectsHero            # Full-bleed hero
            ├── ProjectsStats           # 4-stat divider bar
            ├── ProjectsGallery         # Filterable gallery — featured 2-col + 3-col grid
            │
            │  ── TESTIMONIALS ──
            ├── TestimonialsHero        # Green hero with grid pattern
            ├── TestimonialsStats       # 4-stat card row
            ├── FeaturedTestimonial     # Large pull-quote + project stats
            └── TestimonialsGrid        # Filterable 3-col card grid
```

## Routes

| URL hash    | Page              |
|-------------|-------------------|
| `#/`        | Home              |
| `#/about`   | About Us          |
| `#/services`| Services          |
| `#/projects`| Projects Gallery  |
| `#/testimonials` | Testimonials |

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build
```

## Customising Content

All copy, data, images, and links live in **`src/data/content.js`**.
No need to touch component files for content changes.

## Design System

Colors, fonts, spacing, shadows, and border-radius are all CSS custom properties in
**`src/styles/tokens.css`**. Change the primary green once — entire site updates.

| Token                  | Value       |
|------------------------|-------------|
| `--color-primary`      | `#1a4231`   |
| `--color-bg`           | `#f6f8f7`   |
| `--font-display`       | Playfair Display |
| `--font-body`          | DM Sans     |
