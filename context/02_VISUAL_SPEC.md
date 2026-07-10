# Visual Specification

## Goal

Recreate the Mōno Webflow template style as closely as possible using custom React/Tailwind code.

This is not an inspiration task. It is a close recreation task of the visual language, section structure, layout rhythm, responsiveness, and motion feel.

## Core visual language

- Off-white background
- Near-black typography
- Inter font
- Huge editorial display type
- Thin gray divider lines
- Asymmetrical split grids
- Rounded white/off-white cards
- Large visual cards
- Black pill buttons
- Minimal icons
- Plenty of whitespace
- Small parenthesized section labels
- Quiet premium motion
- No loud colors
- No gradients unless very subtle neutral placeholders are unavoidable

## Design tokens

Use CSS variables everywhere.

```css
:root {
  --bg: #f7f7f4;
  --surface: #ffffff;
  --text: #080808;
  --muted: #777777;
  --line: #e6e6e1;
  --button: #050505;
  --button-text: #ffffff;
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 32px;
  --radius-pill: 999px;
  --shadow-soft: 0 20px 60px rgba(0,0,0,.12);
  --container: 1440px;
}
```

## Typography

Font: Inter

Hero title:
- `font-size: clamp(5rem, 13vw, 14rem)`
- `line-height: 0.85`
- `font-weight: 750 or 800`
- `letter-spacing: -0.06em`

Section headings:
- `font-size: clamp(3.25rem, 7vw, 7rem)`
- `line-height: 0.9 to 1`
- `letter-spacing: -0.05em`

Body:
- `font-size: 1rem to 1.125rem`
- `line-height: 1.45 to 1.6`

Micro labels:
- `font-size: 0.8rem to 0.95rem`
- `font-weight: 600`
- Examples: `(Services)`, `(Portfolio 26©)`, `(Stats)`

## Layout rules

- Use max-width 1440px container.
- Use large section padding.
- Use CSS grid more than flexbox for major layouts.
- Use thin lines as design structure.
- Do not center everything.
- Use asymmetry: small label column + large heading/content column.
- Make cards breathe.
- Desktop layout must feel editorial.
- Mobile must remain premium and not cramped.

## Buttons

Primary button:
- black background
- white text
- pill radius
- compact height
- slight soft shadow
- hover: scale 1.03 and slight y movement

Secondary link:
- text link with arrow or underline reveal
- no bright color

## Images / media placeholders

Do not use copyrighted template assets.
Use neutral placeholder blocks or generate simple local SVG/CSS abstract previews.
Every project card should have a premium thumbnail placeholder that feels designed, not random.
