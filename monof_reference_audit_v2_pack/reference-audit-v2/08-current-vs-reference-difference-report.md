# 08 — Current vs reference difference report

This report uses the latest current-site recording notes plus the reference capture. Codex should also compare locally against the current code/screenshots and update this if needed.

## Critical global mismatch

Current project has been polished into a premium custom interpretation. The reference is not a generic portfolio; it is a Webflow scrollytelling page with:
- very long sticky tracks,
- fixed crosshair overlay,
- absolute top nav,
- bottom nav that hides/shows based on hero and scroll direction,
- right-column vertical work stack with sticky left rail,
- long black vision scroll sequence,
- long black showreel sticky sequence,
- long testimonials sequence.

The current React implementation must be structurally changed, not merely polished.

## Navigation

Reference:
- top nav absolute, transparent, 132px high, not sticky/cloudy.
- hamburger opens black menu overlay.
- bottom floating nav hidden during hero and on scroll down; appears when scrolling up after hero.

Current issue:
- top header + bottom nav fight each other.
- some floating buttons appear stuck due z-index/positioning.

Fix:
- make top header absolute transparent with hamburger.
- implement full-screen black menu overlay.
- make bottom nav exactly follow reference logic.
- audit all fixed/sticky z-indexes.

## Hero

Reference:
- first hero viewport is clean white grid with service list and intro text.
- no angled color collage in the first viewport.
- huge split bottom title: left word and right word, letter-level reveal.

Current issue:
- custom angled colored collage and custom title layout.

Fix:
- rebuild hero from capture: 1200px viewport inside 3600px hero track.
- exact x/y/width for list, text, CTA, copyright, title.
- add fixed hairline/crosshair overlay.

## Partners + work

Reference:
- partners and work share one large light-gray section.
- work is not a 2-column grid; it has sticky left rail and a single large right-column vertical stack.
- each work card wrapper is about 1029×960.

Current issue:
- two-column editorial grid and custom poster cards.

Fix:
- replace homepage work with sticky-left + right vertical stack.
- keep Sahil project content but preserve 4-card homepage structure first.
- use owned/original media compositions shaped like real editorial images.

## About

Reference:
- white section around 1358px high after work.
- h2 is 64px, not mega 96+ unless used in feature cards.

Current issue:
- heading sometimes clipped and oversized.

Fix:
- use captured x/y/width rhythm, 64px h2, stats and cards below.

## Feature/vision

Reference:
- feature cards transition into 9600px black vision animation.
- vision section is sticky scrollytelling, not a static black curved band.

Current issue:
- static/custom dark band.

Fix:
- implement tall sticky vision track with phrase transitions.

## Services

Reference:
- section is short with huge indexed rows and right text descriptions.
- no large image preview card/tab system.

Current issue:
- custom interactive preview/card system.

Fix:
- rebuild as typography-first rows with active hover text transition only.

## Showreel

Reference:
- 4800px black sticky video section, title 96px.

Current issue:
- normal static card/video section.

Fix:
- create sticky video reveal section with play button.

## Pricing + FAQ

Reference:
- same white section, two-column card arrangement, FAQ appears in two columns.

Current issue:
- generic pricing and FAQ flow.

Fix:
- rebuild to captured geometry and row rhythm.

## Testimonials

Reference:
- 6000px sticky light-gray section.

Current issue:
- normal carousel.

Fix:
- sticky testimonial card/slide section.

## Stats / success story

Reference:
- dark section with staggered dark stat cards, metric font 60.8px, cards 331×320.

Current issue:
- custom metric cards.

Fix:
- match staggered card positions and dark card visuals.

## Blog

Reference:
- four horizontal cards, 334×358, light-gray bg, radius 7px.

Current issue:
- custom list/row style.

Fix:
- rebuild as 4-card grid.

## Footer

Reference:
- dense dark footer, contact CTA at top right, newsletter left, pages/contact/social right, vertical divider.

Current issue:
- close but bottom nav overlaps.

Fix:
- add footer safe-space or hide bottom nav near footer.
