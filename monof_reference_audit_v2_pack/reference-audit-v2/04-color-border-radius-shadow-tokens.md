# 04 — Color, border radius, and shadow tokens

## Captured colors

| Token | Captured value | Use |
|---|---|---|
| White | `rgb(255,255,255)` | hero, about, pricing, blog background |
| Light gray | `rgb(245,245,245)` | partners/work, testimonials, blog card bg |
| Black | `rgb(0,0,0)` | dark sections, buttons, nav text, footer |
| Charcoal | `rgb(17,17,17)` / `rgb(20,20,20)` / `rgb(34,34,34)` | menu overlay, stats cards, secondary dark buttons |
| Hairline | `rgb(211,211,211)` | fixed crosshair overlay |
| White divider dark | `rgba(255,255,255,0.14)` / `0.3` | footer/menu dividers |
| Gray text | `rgba`/muted grays and `rgb(245,245,245)` on dark | muted labels and footer text |

## Border radius

Captured common values:
- Buttons: `100px` pill.
- Floating bottom nav: `12px`.
- Work/feature/stats cards: `7px`, `10px`, `20px` depending card.
- Circular icons/dots: `100%` / `50%`.

## Shadows

Hero CTA has a very strong diagonal blur shadow to lower-left:
- Visual: black pill with large soft gray/black shadow around 35–75px blur, offset down-left.
- Do not use generic small button shadows.

## Suggested CSS variables

```css
--white: #fff;
--gray-section: #f5f5f5;
--black: #000;
--charcoal-1: #111;
--charcoal-2: #141414;
--charcoal-3: #222;
--line: #d3d3d3;
--line-dark: rgba(255,255,255,.14);
--radius-card-sm: 7px;
--radius-card: 10px;
--radius-card-lg: 20px;
--radius-pill: 100px;
--radius-menu: 12px;
--shadow-cta: -42px 48px 60px rgba(0,0,0,.22);
```

## Rules

- Do not use colorful gradients in final production. The reference logo is colorful, but page UI is monochrome.
- Project media may have image content/color, but UI system remains black/white/gray.
- Ignore Webflow marketplace badge colors.
