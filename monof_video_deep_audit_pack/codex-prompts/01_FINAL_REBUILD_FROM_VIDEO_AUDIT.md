# FINAL CODEX COMMAND — Rebuild From Video Audit

Paste this whole prompt into Codex from the project root.

---

Stop all current visual polishing. We are changing approach.

The current site is still not close enough to the real Mōno template because it was built from static guesses. I have now provided a proper video-based deep audit pack from the real template recording.

Read these files first:

- `audit/01-video-scroll-timeline.md`
- `audit/02-reference-section-structure.md`
- `audit/03-layout-and-style-tokens.md`
- `audit/04-motion-and-scroll-system.md`
- `audit/05-component-rebuild-spec.md`
- `audit/06-codex-implementation-plan.md`

Also inspect:

- `evidence/template_video_contact_sheet.jpg`
- `evidence/keyframes/`

Reference URL:
https://monof-template.webflow.io/

Important legal rule:
Do not copy proprietary Webflow source code into our project.
Do not copy paid template assets into production.
Do not reuse Webflow class names as our architecture.
Use the reference and audit only to understand the visible design, layout, spacing, scroll behavior, interaction behavior, and section structure. Rebuild with original React + Tailwind + Framer Motion code.

Current project:
React + Vite + TypeScript + Tailwind + Framer Motion + React Router portfolio for Sahil Kumar.

Goal:
Rebuild the desktop homepage so it matches the Mōno template as closely as possible in layout, scroll behavior, animation, card proportions, cursor, navigation, sticky scenes, and section rhythm.

Do not continue polishing the current custom layout. Refactor/rebuild the homepage components according to the audit.

Hard requirements:

1. Top nav
- Not cloudy sticky.
- Minimal absolute top navigation.
- Can fade after hero.

2. Bottom floating nav
- Fixed bottom-center pill.
- Hidden in hero, appears after hero/work area.
- Hide/fade near footer or reserve bottom safe area.
- Must not cover meaningful footer/contact content.

3. Hero
- Tall wrapper around 3400–3600px desktop.
- Central white hero card.
- Image/collage backdrop around/behind the white card.
- Hairline grid and small black dots.
- Left service list.
- Right intro copy and CTA.
- Split bottom display title, like reference `Mōno™ / Studio`, adapted to `Sahil™ / Kumar`.
- Curved white transition into partners.

4. Partners
- Dense 16-logo wall, 4 columns desktop.
- Light gray/off-white background.

5. Work
- Must be sticky-left text rail + right vertical image-card stack.
- Not a standard grid.
- Use only 4 homepage cards.
- Large editorial image cards.
- Hover: image scale, cursor `View Work`, subtle overlay label.

6. About + mixed cards
- Match reference layout: label/huge heading/media/stat split.
- Mixed cards in structured grid.

7. Vision / Built Different
- Must be a long pinned black scrollytelling scene.
- Desktop wrapper height around 9000–9600px.
- Sticky 100vh inner scene.
- Top label `(Our Vision)`.
- Bottom `(Scroll for more)` and dot.
- Progress-mapped text phases:
  Built Different → Design with purpose → Code with passion → Create with vision → Innovate always → final image reveal.
- This must not be a short static black band.

8. Services
- Huge indexed rows.
- All rows visible.
- Active row emphasized; inactive rows pale.
- Each row has index, title, image, and description.
- Not a generic tab preview section.

9. Showreel
- Long pinned black/media section.
- Desktop wrapper height around 4500–4800px.
- Sticky 100vh inner.
- Central media/video tile with surrounding media tiles.
- Center heading `Showreel 26©`.
- Not a simple video card.

10. Pricing + FAQ
- Pricing white section with multi-line heading and 2 cards.
- FAQ is compact 2×2 grid of accordion cards.
- Include looking-for-more CTA block.

11. Testimonials
- Long pinned light-gray section.
- Desktop wrapper height around 5600–6000px.
- Sticky 100vh inner.
- Left label pinned.
- Center card changes with scroll progress.
- Right counter updates 01/04 to 04/04.
- Floating/rotated background cards.
- Not just a regular slider.

12. Stats + success story
- Black section.
- Metric/quote cards.
- Success story: left large image card, right dark quote card.

13. Blog
- White section with 4 image cards in a row.
- Curved transition into contact.

14. Contact + footer
- Black image-backed contact section.
- Left form overlay.
- Dense footer with newsletter, page links, contact/location/social.
- Floating nav must not overlap footer content.

15. Cursor
- Small subtle default cursor.
- Label only on interactive items: View Work, Open, Close, Read.
- White/inverted on dark sections.
- Desktop only; disabled on touch/mobile and reduced-motion.

16. Motion
- Use Framer Motion and CSS sticky.
- Use `useScroll` + `useTransform` for pinned sections.
- Avoid generic fade-only animation.
- Use mask/upward reveals, progress-linked phase changes, and subtle transforms.

Sahil content mapping:

Hero services:
- Web Design
- Data Analytics
- BI Dashboards
- Development
- SEO Optimization

Hero copy:
No generic portfolio. No empty claims. Only practical data, design, and development work that turns ideas into measurable results.

Homepage work cards:
1. EdMaxEx
2. BudgetBites
3. H&M BI Analytics
4. AI Try-On System

Services:
1. Web Design
2. BI Dashboards
3. Development
4. Data Analytics
5. SEO Optimization

Stats:
- $40K+ decisions supported
- 30% reporting effort reduced
- 20+ projects delivered
- 90%+ satisfaction target

Implementation order:

1. Create/adjust motion primitives:
   - `CustomCursor`
   - `BottomFloatingNav`
   - `PinnedScene`
   - motion utilities
   - CSS tokens

2. Rebuild homepage component structure:
   - `HeroScene`
   - `PartnersLogoWall`
   - `WorkStickyStack`
   - `AboutFeatureBlock`
   - `VisionScrollScene`
   - `ServicesRows`
   - `ShowreelPinnedScene`
   - `PricingFAQ`
   - `TestimonialsPinnedScene`
   - `StatsSuccessStory`
   - `BlogCards`
   - `ContactFooter`

3. Replace current Home.tsx with this new structure.

4. Keep existing routes, data files, and TypeScript setup.

5. After implementation, run:
   `npm run build`

6. Fix all errors.

7. Create:
   `implementation-report/video-audit-match-report.md`

The report must list each section:
- what was rebuilt
- how it matches the video audit
- remaining mismatches
- files changed

Do not say done until build passes.

---
