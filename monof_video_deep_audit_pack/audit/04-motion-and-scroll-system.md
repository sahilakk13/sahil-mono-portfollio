# 04 — Motion and Scroll System

This is the most important implementation file.

## Global scroll engine

Use Framer Motion `useScroll` + `useTransform` for long pinned scenes.
Use CSS `position: sticky; top: 0; height: 100vh` inside long wrapper sections.
Avoid normal fade-only reveals.

Recommended components:

- `PinnedScene.tsx`
- `BottomNav.tsx`
- `CustomCursor.tsx`
- `HeroScene.tsx`
- `WorkStickyStack.tsx`
- `VisionScrollScene.tsx`
- `ServicesRows.tsx`
- `ShowreelPinnedScene.tsx`
- `TestimonialsPinnedScene.tsx`

## Preloader

- Full black screen.
- Small centered percentage / logo.
- On completion: opacity fade + clip reveal to white page.
- Duration can be 900–1400ms.
- Do not make it blocking for too long.

## Top navigation

- Position absolute near top; not a heavy sticky header.
- Over hero only or fades out after hero progress.
- Minimal logo left, nav center, CTA right.
- No blur/cloudy header.

## Bottom floating nav

Reference behavior from video:
- Hidden during opening hero.
- Appears once user scrolls into partners/work area.
- Fixed bottom center.
- White pill card with five areas: Home / Work(4) / brand / Studio / Contact.
- Should hide/fade near footer or reserve bottom safe area so it does not cover footer text.
- Must also respond to scroll direction: show on slight upward scroll, hide on fast downward scroll.

Implementation idea:
```ts
const { scrollY } = useScroll();
// show after hero, hide in footer, optionally hide on scroll down
```

## Custom cursor

- Small 7–10px dot by default.
- Invert/white on dark sections.
- Expands to pill/circle only on interactive elements.
- Labels: View Work, Open, Close, Read.
- Desktop only; disable <= 1024 and on touch.
- Must not look like a visible black bug.

## Hero scene

- Main wrapper around 3000–3600px height.
- Sticky central white hero card/scene in first 100vh.
- Collage images behind card move at different speeds.
- Hairline grid + small black dots are visible.
- Hero text/title reveals with mask/upward motion.
- Big title is split left/right at bottom.
- Curved white transition overlaps into partner section.

## Work sticky stack

- Wrapper is very tall; reference partners+work combined height ≈4823px.
- Left rail sticky for the work duration.
- Right column cards scroll vertically.
- Card media is full editorial image/poster style.
- Hover: image scale 1.03, cursor says `View Work`, black overlay label appears.

## Vision pinned scene

- Wrapper height ≈9600px at desktop.
- Sticky black 100vh inner.
- Top center label `(Our Vision)`.
- Bottom center dot and `(Scroll for more)`.
- Text phases based on progress:
  - 0.00–0.18: Built Different
  - 0.18–0.36: Design with purpose
  - 0.36–0.54: Code with passion
  - 0.54–0.72: Create with vision
  - 0.72–0.88: Innovate always
  - 0.88–1.00: reveal red portrait/media
- Each phase: masked letters drift horizontally/vertically, blur clears, opacity 0→1→0.

## Services section

- Not pinned for long. Height about 989px.
- White background, curved from vision.
- Huge row list, all rows visible.
- Active row bold/black; inactive large text pale gray.
- Each row has index, title, image, description.
- Image may sit near row/right side, not a detached generic preview card.

## Showreel pinned scene

- Wrapper height ≈4800px.
- Sticky black 100vh.
- Central media/video container with surrounding tiles.
- Text `Showreel 26©` center, white.
- Media starts dim/blurred and becomes clear around middle progress.
- Use existing placeholder/own images; do not copy template assets.

## Pricing / FAQ

- Pricing is normal white section after curved transition.
- FAQ is compact centered 2×2 grid.
- Accordion open should expand card content smoothly without jumping.

## Testimonials pinned scene

- Wrapper height ≈6000px.
- Sticky 100vh light gray.
- Left label pinned.
- Center testimonial card changes based on progress.
- Right counter updates 01/04 through 04/04.
- Floating/rotated background cards appear behind.

## Stats / success story

- Black background.
- Metrics and quote cards use dark cards, rounded corners, strong contrast.
- Success story: left image, right dark card with quote.

## Contact/footer

- Contact has image/collage background at top with dark overlay.
- Form sits left over image.
- Footer dense black layout.
- Bottom nav should not cover important footer text.
