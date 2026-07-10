# 10 — Final desktop match report

Date: 2026-07-10

Build status: passed with `npm run build`.

Local visual render note: a Playwright Chromium screenshot attempt was blocked by the macOS sandbox with `MachPortRendezvousServer ... Permission denied`. The implementation was compared against the captured audit files and rebuilt from the recorded section geometry, tokens, and behavior maps.

## Global tokens and behavior

- Matched: Inter typography tokens, white/light-gray/black color system, 100px pill buttons, small card radii, 29px page padding, 132px absolute top navigation, long sticky tracks.
- Changed: replaced the accumulated custom CSS with a capture-token stylesheet.
- Remaining mismatch: smooth scroll is browser-native CSS rather than Lenis `lerp: 0.08`; this should be added in a later motion fidelity pass if package scope allows.

## Header / navigation

- Matched: replaced sticky cloudy header with transparent absolute top nav, centered links, left brand, right hamburger.
- Matched: added full-screen dark hamburger overlay with large right-side menu links and contact metadata.
- Matched: added bottom floating nav hidden during hero, shown on scroll-up after hero, hidden on scroll-down and near footer.
- Remaining mismatch: overlay hover text is a React/CSS reconstruction, not an exact GSAP/Webflow duplicate-line animation.

## Hero

- Matched: rebuilt hero as a 3600px track with a sticky 1200px first viewport.
- Matched: clean white hero, center hairlines, dot nodes, left service list, right intro statement, CTA, copyright, huge split bottom title.
- Matched: removed first-viewport angled/color panel composition.
- Remaining mismatch: second/third hero continuation uses original CSS poster panels instead of captured paid media assets.

## Partners / Work

- Matched: combined partners and work into one light-gray section.
- Matched: partner metadata row plus dense logo grid.
- Matched: homepage work rebuilt as sticky-left rail plus single right-column stack.
- Matched: homepage shows four primary project cards in the captured Work(4) rhythm.
- Remaining mismatch: work media is original monochrome poster composition, not the reference template images.

## About

- Matched: white section, 64px heading scale, left label/brand rail, right content/card system.
- Matched: removed oversized/clipped custom heading behavior.
- Remaining mismatch: exact card internals are adapted to Sahil’s data/development content.

## Feature Grid / Vision

- Matched: feature cards precede the black vision track.
- Matched: added tall 9600px black sticky scrollytelling section with the captured phrase sequence.
- Matched: removed short custom black band.
- Remaining mismatch: scroll transitions are Framer Motion transforms rather than GSAP SplitText/ScrollTrigger.

## Services

- Matched: rebuilt as huge indexed typographic rows with right descriptions.
- Matched: removed image-preview tab system.
- Matched: active/inactive hover state keeps all rows visible.
- Remaining mismatch: exact Webflow row easing and text splitting are approximated with CSS transitions.

## Showreel

- Matched: rebuilt as 4800px black sticky section.
- Matched: centered 96px heading, large video frame, white circular play control, scroll-linked frame scale.
- Remaining mismatch: uses original scene tiles instead of paid showreel imagery.

## Pricing / FAQ

- Matched: pricing rebuilt with captured 96px three-line heading and two-card right column rhythm.
- Matched: FAQ rebuilt as two-column row toggles with 72px rows, dividers, index alignment, and plus/minus motion.
- Remaining mismatch: pricing scope has two primary cards for desktop fidelity; custom plan details are Sahil-specific.

## Testimonials

- Matched: replaced normal carousel with 6000px light-gray sticky testimonial section.
- Matched: large quote composition, media accent card, numbered controls, smoother transitions.
- Remaining mismatch: scroll state does not auto-index testimonials yet; controls remain click-driven.

## Stats / Success Story

- Matched: stats moved into a dark section with staggered dark cards and 60.8px metric scale.
- Matched: success story quote integrated into the dark stats rhythm, removing empty placeholder cards.
- Remaining mismatch: exact card front/back behavior from the reference is represented visually, not as a flip interaction.

## Blog

- Matched: rebuilt as four horizontal light-gray cards with captured card-like proportions.
- Matched: hover cursor label uses `Read more`.
- Remaining mismatch: original thumbnails are intentionally not copied; cards use text-first original content.

## Contact / Footer

- Matched: contact CTA is a tall dark section before the footer.
- Matched: footer is denser and dark with top collaboration row, newsletter left, page/contact/social columns, and divider rhythm.
- Matched: bottom floating nav hides near footer to prevent overlap.
- Remaining mismatch: footer social/icon image assets are text links for legal/original-asset compliance.

## QA summary

- Hero: matched structurally / changed to 3600px track, clean grid, split title, no angled panels.
- Work: matched structurally / changed to combined partners/work with sticky rail and one right stack.
- Services: matched structurally / changed to large row list, no preview tabs.
- FAQ: matched structurally / changed to two-column row accordion.
- Footer: matched directionally / dense dark layout with safe bottom nav behavior.

## Remaining high-fidelity tasks

- Add Lenis-equivalent smooth scroll integration.
- Add screenshot-based visual QA once Chromium can run outside the current sandbox restriction.
- Tune desktop pixel offsets after screenshot review, especially hero title crop, work card poster proportions, sticky track timings, and footer column x-positions.
