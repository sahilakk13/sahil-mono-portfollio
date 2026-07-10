# Motion and Responsive Requirements

## Framer Motion animations

Required:
- Page transitions: fade + slight y movement
- Section reveal on scroll: opacity 0 -> 1, y 30 -> 0
- Card stagger on entrance
- Project cards: image scale + card lift on hover
- Buttons: slight scale/magnetic feel
- Services preview: crossfade and y movement
- FAQ accordion: smooth height animation
- Testimonial slider: fade/slide
- Mobile nav: slide/fade

Respect `prefers-reduced-motion`.

## Timing guidance

- Page transition: 0.35s to 0.55s
- Section reveal: 0.6s to 0.9s
- Stagger: 0.06s to 0.12s
- Hover transitions: 0.2s to 0.35s
- Service preview crossfade: 0.35s to 0.5s
- Accordion: 0.3s to 0.45s

## Responsive breakpoints

Desktop large: 1440px+
Laptop: 1024px–1439px
Tablet: 768px–1023px
Mobile landscape: 480px–767px
Mobile portrait: <=479px

## Responsive rules

- Desktop keeps asymmetrical grids.
- Tablet stacks complex grids but preserves premium spacing.
- Mobile becomes single-column.
- Hero title must never overflow.
- Cards must not overlap.
- Buttons/touch targets at least 44px.
- Header/mobile nav must be usable with keyboard.
- Use `clamp()` heavily for type.
- Use `minmax(0, 1fr)` for grid safety.
- Avoid horizontal overflow.
