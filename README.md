# Waron Construction 
## Project Structure

```
greenbuild/
├── index.html                   # Vite HTML entry point
├── vite.config.js               # Vite config
├── package.json
└── src/
    ├── main.jsx                 # React DOM entry
    ├── App.jsx                  # Root component (layout + page routing)
    │
    ├── styles/
    │   ├── tokens.css           # Design tokens (colors, spacing, typography, shadows)
    │   └── global.css           # Base/reset styles, utility classes
    │
    ├── data/
    │   └── content.js           # All static site content (nav, services, projects, etc.)
    │
    ├── pages/
    │   └── HomePage.jsx         # Home page — assembles all sections
    │
    └── components/
        ├── layout/              # Page-level structural components
        │   ├── Navbar.jsx       # Sticky nav with scroll tracking + mobile menu
        │   ├── Navbar.module.css
        │   ├── Footer.jsx       # Footer with links and contact info
        │   └── Footer.module.css
        │
        ├── sections/            # Full-width page sections
        │   ├── HeroSection.jsx
        │   ├── HeroSection.module.css
        │   ├── AboutSection.jsx
        │   ├── AboutSection.module.css
        │   ├── ServicesSection.jsx
        │   ├── ServicesSection.module.css
        │   ├── ProjectsSection.jsx
        │   ├── ProjectsSection.module.css
        │   ├── TestimonialsSection.jsx
        │   ├── TestimonialsSection.module.css
        │   ├── CtaSection.jsx
        │   └── CtaSection.module.css
        │
        └── ui/                  # Small reusable UI components
            ├── Button.jsx       # Multi-variant button (primary/secondary/outline/ghost)
            ├── Button.module.css
            ├── SectionLabel.jsx # Small uppercase eyebrow labels
            ├── SectionLabel.module.css
            ├── StarRating.jsx   # 1–5 star display
            ├── StarRating.module.css
            ├── WhatsAppButton.jsx  # Floating WhatsApp CTA
            └── WhatsAppButton.module.css
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding New Pages

1. Create `src/pages/AboutPage.jsx`
2. Add sections from `src/components/sections/` or create new ones
3. Import and render in `App.jsx` (add React Router when ready)

## Updating Content

All text, links, and data live in **`src/data/content.js`** — no need to touch component files for copy changes.

## Design Tokens

All colors, fonts, spacing, and shadows are defined as CSS custom properties in **`src/styles/tokens.css`**.  
Update them once to restyle the entire site.

## Tech Stack

- **React 18** — UI components
- **Vite** — lightning-fast dev/build
- **CSS Modules** — scoped component styles
- **CSS Custom Properties** — design tokens
- Google Fonts: **Playfair Display** (display) + **DM Sans** (body)
