# VTA Talent Cloud — Landing Page Migration

Technology migration only. No visual, layout, spacing, color, typography, animation,
icon, or responsiveness changes were made. No Employer Portal or Employee Portal code
was touched — this only adds a new public route.

## Drop-in instructions

1. Copy `src/*` into your project's `src/` (folders merge; nothing here overwrites
   existing Employer/Employee code — everything lives under `landing/`, `common/`,
   `hooks/`, `lib/constants/`, and `styles/`, all newly created).
2. Copy `public/assets/*` into your project's `public/assets/`.
3. Ensure these dependencies are installed (add whichever you don't already have):
   ```bash
   npm install clsx tailwind-merge lucide-react
   ```
4. The route group `(public)` renders at `/`. If your app already has a root
   `page.jsx` at `/`, move/rename it (e.g. into an existing route group) before
   dropping this one in, or merge the two as your routing structure requires.
5. This project's font is assumed to already be configured in your root
   `app/layout.jsx` (the original page used Google's Inter at weights
   400–900). If Inter isn't already loaded there, add it via `next/font/google`
   in your existing root layout — not modified here since that file belongs to
   the rest of the app.

## Navigation targets (frontend routing only, no backend)

| Element | Route |
|---|---|
| Employee Login | `/login` |
| Employee Register | `/register` |
| Employer Login | `/employer/login` |
| Employer Register | `/employer/register` |

## Notable engineering decisions

- **Shadcn UI:** the original buttons/cards/dropdowns each carry bespoke,
  one-off Tailwind styling (custom shadows, brand-red states, precise padding)
  rather than a shared design-system look. Wrapping them in Shadcn's default
  `Button`/`DropdownMenu` primitives would either fight their default styles or
  require overriding nearly every class — which risks pixel drift. They're kept
  as plain JSX elements with the exact original classes. Shadcn
  primitives can be layered in later for new sections without touching this one.
- **Custom animations** (marquee, float, arrow-slide, soft-pulse, dash-flow,
  spin-slow, scroll-reveal) aren't expressible as core Tailwind utilities, so
  they live in `src/styles/landing.css`, imported only by the landing page —
  your global Tailwind config and the portals are untouched.
- **Icons** are resolved through `DynamicIcon` (`src/components/common/DynamicIcon.jsx`),
  keeping the original icon-name-as-data pattern so the section data arrays
  stay declarative instead of importing icons ad hoc in every file.
- **Client boundaries** are scoped to only where interactivity is required:
  `Navbar` (dropdowns/mobile menu), `Stats`/`useCountUp` (IntersectionObserver
  count-up), and `ScrollReveal` (IntersectionObserver reveal-on-scroll). Every
  other section is a Server Component.
- **Images** all use `next/image` for optimization; decorative images carry
  `alt=""` and `aria-hidden`, matching the original markup's accessibility intent.

## File map

```
src/
  app/(public)/page.jsx                 → public homepage route
  app/layout.jsx                        → root layout and metadata
  components/landing/
    Navbar/Navbar.jsx                   → header, dropdowns, mobile menu (client)
    Hero/Hero.jsx                       → hero copy, CTAs, highlight stats
    Hero/TalentCloudDiagram.jsx         → orbiting-avatars SVG diagram
    BrandMarquee/BrandMarquee.jsx       → infinite brand-logo marquee
    Solutions/Solutions.jsx             → 4-stakeholder cards
    HowItWorks/HowItWorks.jsx           → 6-step workflow
    Features/Features.jsx               → dark features grid
    Stats/Stats.jsx                     → count-up stats grid (client)
    Testimonials/Testimonials.jsx       → quotes + media logos
    CTA/CTA.jsx                         → closing call-to-action band
    Footer/Footer.jsx                   → footer columns, socials, app links
  components/common/
    DynamicIcon.jsx                     → icon-name → Lucide component resolver
    ScrollReveal.jsx                    → reveal-on-scroll observer (client)
  hooks/useCountUp.js                   → count-up animation hook (client)
  lib/utils.js                          → cn() className helper
  lib/constants/landing-data.js         → all section data (nav, stats, steps, etc.)
  styles/landing.css                    → scoped keyframes/animation classes
public/assets/*                         → all original image assets
```
