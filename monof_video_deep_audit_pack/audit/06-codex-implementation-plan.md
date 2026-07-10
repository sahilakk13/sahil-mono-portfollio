# 06 — Codex Implementation Plan

Implement in this exact order.

## Phase 1 — Create motion/layout primitives

Files:
- `src/lib/motion.ts`
- `src/components/CustomCursor.tsx`
- `src/components/BottomFloatingNav.tsx`
- `src/components/PinnedScene.tsx`
- `src/styles/tokens.css`
- `src/styles/globals.css`

Goals:
- cursor behavior
- top/bottom nav behavior
- pinned scene helpers
- global curve utilities
- no horizontal overflow

## Phase 2 — Rebuild hero and partners

Files:
- `src/components/HeroScene.tsx`
- `src/components/PartnersLogoWall.tsx`
- `src/pages/Home.tsx`

Hero must match:
- tall wrapper
- central white card
- collage backdrop
- hairlines/dots
- split title
- curved transition

## Phase 3 — Rebuild Work

Files:
- `src/components/WorkStickyStack.tsx`
- `src/components/ProjectMediaPoster.tsx`

Use sticky-left and right card stack.

## Phase 4 — About + mixed cards

Files:
- `src/components/AboutFeatureBlock.tsx`

Match section proportions and 2×2 mixed card layout.

## Phase 5 — Long pinned scenes

Files:
- `src/components/VisionScrollScene.tsx`
- `src/components/ShowreelPinnedScene.tsx`
- `src/components/TestimonialsPinnedScene.tsx`

These must be proper long sections:
- Vision 9000–9600px desktop
- Showreel 4500–4800px desktop
- Testimonials 5600–6000px desktop

## Phase 6 — Services / Pricing / FAQ

Files:
- `src/components/ServicesRows.tsx`
- `src/components/PricingFAQ.tsx`

## Phase 7 — Stats / Blog / Contact / Footer

Files:
- `src/components/StatsSuccessStory.tsx`
- `src/components/BlogCards.tsx`
- `src/components/ContactFooter.tsx`

## Phase 8 — Responsive

Only after desktop works.
Use the reference captures at 1440, 1280, 1024, 768, 430, 390.

## Phase 9 — QA

- `npm run build`
- record desktop scroll
- compare against video contact sheet
- fix visible mismatches

## Implementation rules for Codex

- Do not ask for another audit.
- Do not only report.
- Apply code changes directly.
- Use Sahil content.
- Do not copy Webflow source/assets.
- Build from original React/Tailwind/Framer code.
