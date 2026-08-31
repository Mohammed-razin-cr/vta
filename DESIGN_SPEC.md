# VOC Technical Academy — Redesign Spec ("The Workshop Standard")

This is the single source of truth for the landing-page redesign. Every section MUST follow it
exactly so the page reads as ONE product. Read `src/lib/content.ts`, `src/lib/motion.ts`,
`src/app/globals.css`, `tailwind.config.ts`, and `src/components/ui/*` before writing any section.

## Brand & positioning
- Business: VOC Technical Academy (VTA) — automotive technician training academy under VOC Automotive.
  Multi-brand two-wheeler theory + hands-on training: diagnostics, repair, maintenance, EV technology.
- Real tagline: **LEARN. PERFORM. EARN.** (from the logo — use it, it's gold).
- Voice: confident, precise, workshop-real. Short declarative sentences. No hype words
  ("world-class", "cutting-edge", "unlock", "empower", "elevate" are BANNED).
- NEVER invent facts. Only use content from `src/lib/content.ts`.

## Aesthetic: Industrial Editorial
A premium technical brand: engineering spec-sheet precision + editorial typography + real workshop
photography. Think of a torque-spec data plate, not a SaaS gradient.

Signature moves (use these, consistently):
1. **Hairline rules** — 1px lines in `line` color structure the page (section dividers, card borders,
   table rows). Borders over shadows.
2. **Mono spec labels** — JetBrains Mono, uppercase, tracking-[0.18em], 11–12px, for kickers, indices,
   captions, stats labels. Format kickers as `01 / Programs` style where a section index exists.
3. **Numbered sections** — each major section starts with the shared `<SectionHeader>` primitive.
4. **Sharp geometry** — radius scale is small (see tokens). No pill cards. Pills ONLY for tiny tags.
5. **Real photography** — the webp assets in /public/assets. Treatment: slight warm contrast via the
   `img-grade` utility class; on dark sections use `img-grade-dark`. Never place a photo without a
   frame: either hairline border + radius-lg, or bleeding plate composition.
6. **Ember accents** — `ember` (#E4322B) is strategic: CTAs, active states, key words in headlines
   (via `<em>` styled ember, not italic), index numbers, small rules. NEVER large ember area fills
   except the primary button and small stamps. The warm gradient (`gradient-ember`) is allowed in
   at most TWO places on the whole page (career section headline + one hero micro-accent).

## Color tokens (already defined in globals.css / tailwind.config)
- `paper` #F6F4EF page bg · `paper-deep` #EDEAE2 alt panels · `white` cards
- `ink` #16130F headlines/dark sections · `ink-soft` #241F19 dark cards · `ink-mute` #37312A
- `smoke` #655E55 body text on light · `smoke-light` #8D8579 captions
- `line` rgba(22,19,15,.14) · on dark use `line-dark` rgba(246,244,239,.16)
- `ember` #E4322B · `ember-deep` #C22420 (hover) · `ember-warm` #FF6B3D (gradient partner ONLY)
- On dark sections: bg `ink`, text `paper`, muted text `paper/64`, borders `line-dark`.

## Typography (fonts loaded in layout.tsx as CSS vars)
- Display: **Archivo** → `font-display` (var --font-display). Headlines 700–900, tracking tight.
- Mono: **JetBrains Mono** → `font-mono` (var --font-mono).
- Body: Archivo 400/500 (default `font-sans` maps to Archivo).
Scale (use exactly these utilities):
- Hero h1: `text-display-xl` (clamp 2.9rem→5.6rem, lh .98, ls -0.03em, w800)
- Section h2: `text-display-lg` (clamp 2.1rem→3.6rem, lh 1.04, ls -0.02em, w800)
- Card h3: `text-2xl md:text-[1.65rem] font-bold tracking-tight`
- Body large: `text-lg leading-relaxed text-smoke`
- Body: `text-base leading-relaxed text-smoke`
- Kicker/meta: `spec-label` utility (mono, uppercase, tracked, 12px).
Headline accent: wrap ONE meaningful word/phrase in `<em>` — globals styles `em` inside `h1,h2` as
ember, not italic. Do not overuse.

## Spacing & layout
- Container: `container-shell` utility = max-w-[1280px] mx-auto px-5 md:px-8.
- Section rhythm: `py-24 md:py-32` (dark full-bleed bands may use py-20 md:py-28).
- Section header block margin-bottom: `mb-12 md:mb-16`.
- Grid gaps: 8px scale — gap-4/6/8/12. Never arbitrary values like gap-[13px].
- Radius: `rounded-xs`(2) tags · `rounded-btn`(6) buttons/inputs · `rounded-card`(14) cards ·
  `rounded-media`(20) photos/large plates. NOTHING larger.
- Shadows: default NONE (borders instead). Allowed: `shadow-lift` on hover for interactive cards and
  on the hero plate. Nothing else.

## Shared primitives (src/components/ui) — USE THEM, do not re-implement
- `<SectionHeader index="02" kicker="Why VOC" title={<>...</>} lede="..." align="left"|"split" dark />`
- `<Button variant="primary"|"secondary"|"ghost" dark href|onClick size="md"|"lg">` — arrow handled via `withArrow`.
- `<Reveal>` / `<RevealGroup>` — scroll-reveal wrappers (Framer Motion, reduced-motion safe). Wrap
  section content in these instead of writing your own whileInView code for simple reveals.
- `<Tag>` — tiny mono tag chip.
Import path alias: `@/components/ui`, `@/lib/content`, `@/lib/motion`, `@/lib/utils` (cn helper).

## Motion rules (src/lib/motion.ts has the presets)
- Easing: `EASE_OUT = [0.16, 1, 0.3, 1]`; reveals 0.6–0.7s; micro-interactions 180–220ms.
- Reveals: rise 24px + fade, stagger 0.07, `viewport={{ once: true, margin: "-12% 0px" }}`.
- Hover: translate-y -2px~-4px max, border-color→ink, arrow nudge 2px. NO scale>1.03, no rotation.
- Every bespoke animation must check `useReducedMotion()` and render final state when reduced.
- No constant/looping motion except: brand marquee (pauses on hover, static when reduced motion).
- GSAP allowed ONLY where already specified (hero entrance, journey pinning, career scrub); import
  from "gsap" and "gsap/ScrollTrigger" inside useEffect with cleanup (ctx.revert()).

## Accessibility
- Semantic landmarks; ONE h1 (hero). Sections use h2, cards h3.
- All interactive elements keyboard reachable, `focus-visible:ring-2 ring-ember ring-offset-2`
  (ring-offset-ink on dark). cursor-pointer on clickables.
- Decorative images `alt="" aria-hidden`. Meaningful images get real alt text.
- Contrast ≥ 4.5:1 for text (smoke on paper passes; paper/64 on ink passes; never ember text below
  18px on paper except spec labels at 600 weight).
- Carousels/scrollers: also operable via visible prev/next buttons; `role="region"` + aria-label.

## Responsive
Design mobile intentionally: 375, 768, 1024, 1440.
- Hero: stacks, visual below copy, trust row becomes 2-col grid.
- Horizontal scrollers: native overflow-x scroll + snap on mobile (`scrollbar-hide` utility exists).
- Touch targets ≥ 44px. No horizontal page overflow — test every section at 375px.
- Pinned/scroll-choreographed sections MUST degrade to simple stacked layout below lg.

## Section map (files each agent owns — do NOT touch files outside your section)
1.  `src/components/navigation/Navbar.tsx` (+ MobileMenu in same folder)
2.  `src/components/hero/Hero.tsx` (+ subcomponents in folder)
3.  `src/components/trust/TrustMarquee.tsx`
4.  `src/components/programs/Programs.tsx` (+ subcomponents)
5.  `src/components/why/WhyVOC.tsx`
6.  `src/components/experience/Journey.tsx`
7.  `src/components/facilities/Facilities.tsx`
8.  `src/components/ecosystem/Ecosystem.tsx`
9.  `src/components/testimonials/Testimonials.tsx`
10. `src/components/career/Career.tsx` (includes final CTA)
11. `src/components/footer/Footer.tsx`
Sections must begin with the right `id` anchor (see content.ts NAV) and alternate surfaces:
paper → paper (hairline divided) → dark ink band (programs featured plate is dark card on paper) →
paper → paper-deep → dark ink (career) → footer ink. Adjacent same-color sections separated by
`border-t border-line` on the section element.
