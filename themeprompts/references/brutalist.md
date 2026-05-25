# Brutalist
> Raw honesty. Design stripped to its concrete bones.

## Overview
Brutalist web design embraces the medium rather than hiding it — raw structure, exposed grids, stark black-and-white contrast, and deliberate ugliness as aesthetic choice. Inspired by brutalist architecture, Dada art movements, and early web design before polish became mandatory. Confrontational, memorable, and impossible to ignore. Use for cultural institutions, experimental artists, underground publications, tech projects that want to signal authenticity, and any brand willing to challenge visual comfort zones.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#f2f2f2` | Raw concrete grey |
| Surface | `#ffffff` | Content areas |
| Surface dark | `#0a0a0a` | Inverted sections |
| Text | `#000000` | Pure black |
| Text inverted | `#f2f2f2` | On dark sections |
| Accent | `#ff2200` | The one color — use with purpose |
| Mid grey | `#888888` | Secondary text |
| Border | `#000000` | Full black borders |
| Yellow | `#ffee00` | Warning/highlight color |

**Rule:** Maximum 2 colors at once. One accent — deployed like a weapon, not a decoration.

## Typography
- **Display:** Space Mono — weight 700. Monospace type as a design statement. Raw. Terminal. Honest.
- **Body:** Space Mono — weight 400. Keep the aesthetic whole. No compromises.
- **Scale labels:** Space Mono 700 uppercase — stark, functional

**Scale:**
- Hero: `clamp(3rem, 8vw, 7rem)` Space Mono 700 — as large as the viewport can hold
- H2: `clamp(2rem, 5vw, 4rem)` Space Mono 700
- Body: `0.9rem` / `1.6` line-height / Space Mono 400

## Visual Language
- **Exposed borders:** `1px solid #000` on everything — the grid is the design
- **Visible grid lines:** `1px solid rgba(0,0,0,0.15)` structural columns shown explicitly
- **Black tape aesthetic:** Heavy `4–8px solid #000` rules dividing sections
- **Raw HTML aesthetic:** No border-radius anywhere — `border-radius: 0` is law
- **Typographic texture:** Repeated words or characters as background fill at low opacity
- **No photography softening:** Images at full contrast, no filter, `border: 1px solid #000`
- **Accidental overflows:** Intentional text or elements slightly outside containers

## Layout Principles
- No hiding the structure — the layout IS the design
- Tight, compressed sections: `40–60px` vertical padding — no luxury of space
- Strict baseline grid — every element on the grid, no exceptions
- Max-width: `none` — go full-bleed or use `1400px` with visible edge borders
- Asymmetric and confrontational — never comfortable
- Newspaper-style dense text columns

## Component Patterns
**Buttons:**
- Primary: `#000` bg / `#f2f2f2` text / `border-radius: 0` / `border: 2px solid #000` / Space Mono 700
- Accent: `#ff2200` bg / `#000` text / `border-radius: 0` / `border: 2px solid #000`
- Hover: `background` inverts — black becomes white, white becomes black / `0.1s` instant

**Cards:** White / `border: 1px solid #000` / `border-radius: 0` / `box-shadow: 4px 4px 0 #000` — brutalist hard shadow

**Inputs:** White bg / `border: 2px solid #000` / `border-radius: 0` / focus: `border-color: #ff2200` — no glow

**Tables:** Visible `border: 1px solid #000` / alternating `#f2f2f2` rows / Space Mono throughout

## Motion & Interaction
- Entrance: instant `opacity(0)` → opacity(1) — no transforms, no duration over `0.2s`
- Hover: immediate inversion — no gradual transitions
- Focus: `outline: 2px solid #ff2200` / `outline-offset: 2px` — no box-shadow ring
- No parallax, no floating, no spring — motion as function only
- Transitions: `0.1s` or none at all — discipline over delight

## Voice & Copy Tone
- **Tone:** Direct, terse, uncompromising. Every word earns its place or gets cut.
- **Headlines:** ALL CAPS or lowercase. 1–4 words maximum.
- **CTAs:** "OPEN", "READ", "SUBMIT", "NEXT"
- **Avoid:** Adjectives, softening language, politeness, decoration

**Examples:** "THIS IS THE WORK." / "no mercy, no compromise." / "WHAT YOU SEE IS WHAT EXISTS."

## CSS Starter
```css
:root {
  --bg:           #f2f2f2;
  --surface:      #ffffff;
  --surface-dark: #0a0a0a;
  --text:         #000000;
  --text-inv:     #f2f2f2;
  --accent:       #ff2200;
  --grey:         #888888;
  --yellow:       #ffee00;
  --border:       1px solid #000000;
  --border-heavy: 4px solid #000000;
  --shadow-hard:  4px 4px 0 #000000;
  --radius:       0px;
  --font-display: 'Space Mono', monospace;
  --font-body:    'Space Mono', monospace;
  --transition:   0.1s ease;
}
```
