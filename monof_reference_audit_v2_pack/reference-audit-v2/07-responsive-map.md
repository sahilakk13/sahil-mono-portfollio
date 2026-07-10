# 07 — Responsive map

Screenshots captured at: 1440, 1280, 1024, 768, 430, 390 widths.

## Key reference behavior

### Desktop 1440 / 1280
- Full top nav visible.
- Header nav centered with logo left and hamburger right.
- Hero is clean two-sided grid, giant split title at bottom.
- Fixed crosshair overlay visible.
- Bottom floating nav hidden in hero, appears after hero based on scroll direction.

### 1024
- Top nav still visible.
- Hero title begins to wrap/crop; `Mōno™` and `Studio` may break into stacked chunks.
- Center hairlines/dots still visible.

### 768
- Nav still visible but tighter.
- Hero content squeezes; title significantly wraps/crops.
- Right intro remains top-right, CTA below.

### 430 / 390
- Logo left and hamburger right; center nav hidden.
- Service list stays top-left.
- Intro block moves below service list / central-right depending width.
- CTA remains black pill.
- Hero title is large but split/stacked to fit; it intentionally crops, but no horizontal scroll.
- Fixed crosshair may be simplified or disabled on touch.

## Implementation rules

- Disable custom cursor and crosshair on touch/mobile if it causes usability issues.
- Mobile hero should preserve reference layout feel: service list top, intro text below/right, huge title bottom.
- Do not build a generic centered mobile hero.
- Partners logo grid should become 2-column or compact grid.
- Work right-column vertical stack can become single-column full-width; sticky left rail becomes top label block.
- Services huge rows should scale down but remain indexed row list; do not convert to unrelated cards unless necessary.
- Blog cards become single column or horizontal scroll.
- Footer stacked mobile but still dense/dark.
