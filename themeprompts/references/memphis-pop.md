# Memphis Pop
> Maximum color, maximum character, zero apologies.

## Overview
Memphis Pop channels the anarchic energy of 1980s Memphis Group design — bold geometric shapes, clashing primary colors, squiggly lines, and polka dots colliding in gleeful chaos. Anti-minimalism as a design philosophy. Inspired by 80s graphic design, retro game packaging, and streetwear aesthetics. Use for music platforms, event brands, youth culture products, creative tools, and anything that needs to be instantly eye-catching and irreverently fun.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#f5f0e8` | Off-white warm canvas |
| Primary yellow | `#f7d428` | Primary accent, hero fill |
| Primary red | `#e83040` | Secondary accent |
| Primary blue | `#2050e8` | Tertiary accent |
| Black | `#0f0f0f` | Text, borders, geometry |
| Mint | `#40e8c0` | Fresh pop color |
| Pink | `#f040a0` | Energetic highlight |
| Surface | `#ffffff` | Card backgrounds |
| Text | `#0f0f0f` | Near-black |

**Rule:** Never use fewer than 3 colors in any section. Color is structure.

## Typography
- **Display:** Righteous — bold, geometric, confident. Built for headlines that demand attention.
- **Body:** Quicksand — weight 500. Friendly, modern, highly legible.
- **Accent labels:** Righteous 400 for secondary labels. Keep mono-family display grouping.
- **Eyebrows:** Quicksand 700, `0.15em` letter-spacing, uppercase, `0.75rem`

**Scale:**
- Hero: `clamp(3.5rem, 7vw, 6rem)` Righteous — let it dominate
- H2: `clamp(2.2rem, 4vw, 3.5rem)` Righteous
- Body: `1rem` / `1.65` line-height / Quicksand 500

## Visual Language
- **Geometric decoration:** Hard-edged circles, triangles, rectangles scattered at `opacity: 1` — fully visible, intentional
- **Squiggle lines:** Wavy SVG lines in red or blue at `opacity: 0.6` connecting sections
- **Polka dot fills:** `radial-gradient(circle, currentColor 2px, transparent 2px)` / `20px 20px` repeat at 15% opacity
- **Hard shadows:** `6px 6px 0 #0f0f0f` — no blur, pure offset. The Memphis signature.
- **Color block sections:** Full-width yellow, red, or blue section backgrounds alternating
- **Thick borders:** `3px solid #0f0f0f` on key elements — never hairlines here

## Layout Principles
- Deliberate visual tension — intentional crowding and overlap
- Staggered, asymmetric grids with intentional misalignment
- Section padding: `80px` — not too generous, the chaos needs compression
- Max-width `1200px` / `24px` side padding
- Rotate elements: `rotate(2deg)` `rotate(-3deg)` on cards and images
- Let geometry overflow container edges intentionally

## Component Patterns
**Buttons:**
- Primary: `#f7d428` bg / black text / `border-radius: 4px` / `3px solid #0f0f0f` / `box-shadow: 5px 5px 0 #0f0f0f`
- Secondary: `#e83040` bg / white text / same hard shadow treatment
- Hover: `transform: translate(-2px, -2px)` + `box-shadow: 7px 7px 0 #0f0f0f`

**Cards:** White / `3px solid #0f0f0f` / `border-radius: 8px` / `box-shadow: 6px 6px 0 #0f0f0f` / colorful top stripe (rotate colors)

**Inputs:** White / `2px solid #0f0f0f` / `border-radius: 6px` / focus: `border-color: #2050e8` + `box-shadow: 4px 4px 0 #2050e8`

**Badges:** Solid color bg / black text / `border-radius: 0` / `2px solid #0f0f0f`

## Motion & Interaction
- Entrance: `scale(0.9) rotate(-3deg) opacity(0)` → normal / `0.5s cubic-bezier(0.34,1.56,0.64,1)` — springy
- Hover cards: `translate(-3px, -3px)` + `box-shadow` increases — mechanical snap
- Button press: `translate(4px, 4px)` + `box-shadow` compresses — click feedback
- Geometric decorations: individual slow rotations at different speeds `10–30s linear infinite`
- Transitions: `0.2s` — fast and punchy, energy is everything

## Voice & Copy Tone
- **Tone:** Loud, playful, irreverent. Full of personality, zero corporate filler.
- **Headlines:** ALL CAPS is welcome. Short, punchy, fun. 2–4 words.
- **CTAs:** "LET'S GO!", "DO IT", "GET IN", "START NOW"
- **Avoid:** Subtlety, sophistication-signaling, passive voice, anything beige

**Examples:** "LOUD BY DESIGN." / "Make more noise." / "Rules were made to break."

## CSS Starter
```css
:root {
  --bg:           #f5f0e8;
  --surface:      #ffffff;
  --yellow:       #f7d428;
  --red:          #e83040;
  --blue:         #2050e8;
  --black:        #0f0f0f;
  --mint:         #40e8c0;
  --pink:         #f040a0;
  --text:         #0f0f0f;
  --border:       3px solid #0f0f0f;
  --shadow-hard:  6px 6px 0 #0f0f0f;
  --radius:       8px;
  --font-display: 'Righteous', sans-serif;
  --font-body:    'Quicksand', sans-serif;
  --transition:   0.2s cubic-bezier(0.34,1.56,0.64,1);
}
```
