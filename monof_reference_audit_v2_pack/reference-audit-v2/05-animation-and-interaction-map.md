# 05 — Animation and interaction map

## Libraries detected in the reference

The captured HTML loads:
- Lenis `1.3.4` for smooth scrolling.
- GSAP `3.15.0`.
- GSAP SplitText.
- GSAP ScrollTrigger.
- Webflow IX scripts.

The app should use original React/Framer/Motion code, but behavior should emulate these patterns.

## Smooth scroll

Reference inline script:

```js
const lenis = new Lenis({ smooth: true, lerp: 0.08, wheelMultiplier: 1, infinite: false });
requestAnimationFrame(raf);
```

Implementation:
- Use Lenis in React or implement an equivalent smooth scroll layer.
- Keep `lerp: 0.08`, `wheelMultiplier: 1`.
- Make sure Framer Motion scroll values use Lenis scroll updates if possible.

## Bottom floating nav behavior

Reference inline script:

- `.menu-bottom` starts hidden with `transform: translateY(150%)`, opacity `0` then `1`.
- It is hidden while inside hero: `currentScroll <= heroHeight - 80`.
- After hero, it shows only when scrolling up.
- It hides when scrolling down.

Implementation:
- Do not show bottom nav in hero.
- Do not keep it permanently over footer.
- Hide it while scrolling down, show on scroll up after hero, optionally hide near footer/contact to avoid covering brand text.

## Top nav/menu

Reference:
- Top nav is absolute, transparent, 132px high.
- Hamburger opens full-screen black menu overlay.
- Menu overlay has right-side navigation column x≈1102, height 1200, large link text 48px duplicated for line/slide hover.
- Overlay includes contact card, social buttons, privacy/terms.

Implementation:
- Top nav should not be sticky/cloudy.
- It should be absolute/top transparent with hamburger.
- If menu opens, full-screen black overlay with right-side large links.

## Fixed crosshair / cursor layers

Reference has:
- `plus-line-wrapper`: fixed full-screen overlay, z≈9998.
- horizontal hairline at y≈viewport center.
- vertical hairline at x≈viewport center.
- center circle/plus 20×20.
- `text-tool-tip`: fixed tooltip layer, z≈9999, for `View Work`, `Read more`.

Implementation:
- Add fixed crosshair overlay only on desktop.
- It must be subtle: line color #d3d3d3, 1px, pointer-events none.
- Custom cursor tooltip should be invisible until hover on work/blog/interactive items.
- Do not use a distracting black dot; the reference is a crosshair/tooltip system more than a generic blob cursor.

## SplitText-style reveals

Captured DOM includes many `gsap_split_word`, `gsap_split_letter`, `gsap_split_line` wrappers.

Implementation:
- Use Framer Motion or CSS masks to reveal words/letters upward.
- Hero title should reveal by letter/word with mask-like upward motion.
- Buttons reveal individual words/letters if possible.
- Section headings reveal line-by-line.

Motion timing:
- Use ease similar to `[0.22, 1, 0.36, 1]`.
- Duration 0.7–1.1s.
- Stagger word/letter 0.025–0.08s.
- Scrollytelling sections should scrub/progress with scroll, not only once-on-view.

## Hero track

Hero is a long track (`hero-track` height 3600px) with a first `hero` viewport of 1200px.
- First viewport: static clean grid/hairlines + huge title.
- Then page content begins around y≈3500.
- Do not build a simple 100vh hero only.

## Vision scrollytelling

`animation-section` is 9600px tall black.
- Titles are centered/sticky and probably transition with scroll.
- Implement a sticky center block where each phrase fades/slides/reveals as user scrolls.
- Labels `(Our Vision)` top and `(Scroll for more)` bottom stay aligned.

## Showreel scrollytelling

`video-section` is 4800px tall black with a sticky video section.
- Heading and video should be sticky/revealing.
- Play button scales from 0.7 to 1 on hover/scroll.
- Do not make it a normal static video card.

## Testimonials

`testimonials-section` is 6000px tall.
- Use sticky scrollytelling/slider behavior.
- Control state transitions should be smooth.
- Do not use a tiny generic carousel.

## FAQ

Reference FAQ is two-column row/toggle layout around y≈26348.
- Toggle header 468×72.
- Plus icon line rotates; line-1/line-2 system.
- Smooth height reveal.
- Keyboard accessible.

## Work cards

Reference work cards are large right-column wrappers, each ≈1029×960.
- Hover should reveal tooltip/cursor `View Work`.
- Image crop should gently transform/scale.
- Text/meta remain compact at bottom/top depending card.
- Avoid current 2-column card grid.

## Blog cards

Reference blog cards are four horizontal cards, 334×358, bg #f5f5f5, radius 7px.
- Hover uses tooltip `Read more`, media/card movement.

## Reduced motion

- Disable crosshair/cursor tooltip and heavy scroll-scrub animations for `prefers-reduced-motion`.
