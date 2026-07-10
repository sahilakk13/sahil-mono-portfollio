# 03 — Typography tokens from capture

Font stack: `Inter, sans-serif` loaded from Google Fonts with weights 300, 400, 500, 600, 700.

## Exact captured sizes

| Use | Captured values | Notes |
|---|---|---|
| Header/nav links | 14px–16px, weight 500, line-height 15.4–20.8 | top nav visually small and clean |
| Hero service list | 16px, weight 600, line-height 20.8 | left list, 5 rows |
| Hero intro | 16px, weight 600, line-height 20.8, width≈300 | right block |
| Hero title letters | 176px, weight 600, line-height 149.6, letter-spacing -8px | bottom split title |
| Overlay menu link text | 48px, weight 400, line-height 48/52.8 | duplicated link text for hover-line animation |
| Work section h2 | 64px, weight 600, line-height 70.4 | `Work(4)` |
| About h2 | 64px, weight 600, line-height 70.4 | large paragraph-style heading |
| Feature/stat secondary h2 | 27.2px, weight 500/600, line-height 29.92 | cards and subheads |
| Vision titles | 96px, weight 500, line-height 105.6, letter-spacing about -3px | sticky black section |
| Service titles | 96px, weight 600, line-height 105.6, letter-spacing about -3px | row list |
| Showreel title | 96px, weight 500, line-height 105.6 | black sticky section |
| Pricing title | 96px, weight 600, line-height 105.6 | three-line heading |
| Stats metric | 60.8px, weight 500, line-height 66.88 | stat cards |
| Blog card title | 19.2px, weight 600, line-height 24.96 | cards |
| Labels | 16px, weight 600, line-height 20.8 | `(Partners)`, `(Portfolio 26©)`, `(Services)`, etc. |

## Letter spacing

Captured common values:
- Hero letters: approx `-8px`.
- 96px headings: approx `-3px`.
- 64px headings: usually around `-2px` or `-1px`.
- 16px labels/body: normal to `-0.3px`.

## Implementation CSS variables

Use these as the React/Tailwind source of truth:

```css
--font-main: Inter, sans-serif;
--text-xs: 14px;
--text-sm: 14.4px;
--text-base: 16px;
--text-blog: 19.2px;
--text-card: 27.2px;
--text-menu: 48px;
--text-h2: 64px;
--text-stat: 60.8px;
--text-display: 96px;
--text-hero: 176px;

--lh-tight: 0.85;
--lh-hero: 149.6px;
--lh-display: 105.6px;
--lh-h2: 70.4px;
--lh-body: 20.8px;

--ls-hero: -8px;
--ls-display: -3px;
--ls-h2: -2px;
```

Use responsive clamps but keep the 1440px desktop values matching the captured numbers.
