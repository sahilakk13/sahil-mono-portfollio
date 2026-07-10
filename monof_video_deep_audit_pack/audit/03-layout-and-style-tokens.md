# 03 — Layout and Style Tokens From Capture

Measured from `reference-capture/data/home-computed-styles.json` at 1440px viewport.

## Global colors

- White: `rgb(255,255,255)` / `#ffffff`
- Off-white / gray section: `rgb(245,245,245)` / `#f5f5f5`
- Black section: `rgb(0,0,0)` / `#000000`
- Dark card: `rgb(17,17,17)` / `#111111`
- Secondary dark: `rgb(20,20,20)` / `#141414`
- Divider lines are very pale gray, usually around `#e7e7e7` or transparent black/white variants.

## Typography

Font family detected: `Inter, sans-serif`.

### Hero title
- Reference H1/H2 at 1440 capture: `176px`
- Line-height: `149.6px`
- Letter-spacing: `-8px`
- Weight: typically 600–700 visual weight
- At 1440px, hero text boxes:
  - `Mōno™`: x≈48 y≈1020 width≈570 height≈150
  - `Studio`: x≈878 y≈1020 width≈514 height≈150

Sahil equivalent:
```css
.hero-display {
  font-size: clamp(6rem, 12.2vw, 176px);
  line-height: .85;
  letter-spacing: -0.055em;
  font-weight: 700;
}
```

### Section heading
- Work heading: `64px`, line-height `70.4px`, letter-spacing `-1.3px`.
- About heading: `64px`, line-height `70.4px`, letter-spacing `-1.3px`.
- Stats metric: `96px`, line-height `105.6px`, letter-spacing `-1.3px`.

### Small labels / nav / body
- Base: `14px`, line-height `15.4px`, weight 500.
- Project title/meta: `16px`, line-height `13.6px`, letter-spacing `-0.6px`.
- Feature card headings: `27.2px`, line-height `29.92px`, letter-spacing `-1px`.

## Section heights measured at 1440 width

These are critical. Use them for desktop before responsive.

- Hero wrapper: roughly 3600px total including collage and transition.
- Partners + Work section: y≈3599, height≈4823.
- About section: y≈8422, height≈1358.
- Long dark Vision section: y≈9780, height≈9600.
- Services section: y≈19379, height≈989.
- Showreel section: y≈20368, height≈4800.
- Pricing + FAQ section: y≈25167, height≈1706.
- Testimonials section: y≈26873, height≈6000.
- Stats section: y≈32872, height≈2589.
- Blog section: y≈35461, height≈901.
- Contact section: y≈36362, height≈1080.
- Footer/newsletter starts y≈37442.

## Radii

Detected common values:
- Cards: `10px`, `20px`, sometimes `30px`.
- Buttons/pills: `100px`.
- Avatar/dots: `100%` / `50%`.

## Margins / padding

- Many sections use `padding: 28.7969px` at 1440 width. This is roughly `2vw`.
- Some dark sections use negative top/bottom margins `-100px 0px` for curved overlaps.
- Contact section uses large top padding around `187px` and bottom `115px`.

Recommended CSS variables:

```css
:root {
  --bg: #ffffff;
  --bg-soft: #f5f5f5;
  --black: #000000;
  --dark: #111111;
  --text: #000000;
  --muted: rgba(0,0,0,.45);
  --line: rgba(0,0,0,.08);
  --line-dark: rgba(255,255,255,.12);
  --pad: clamp(18px, 2vw, 29px);
  --radius-card: 10px;
  --radius-lg: 20px;
  --radius-pill: 100px;
  --ease-out: cubic-bezier(.22,1,.36,1);
}
```
