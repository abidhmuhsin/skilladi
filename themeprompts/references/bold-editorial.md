# Bold Editorial
> Black, white, and one colour brave enough to matter.

## Overview
Bold Editorial strips design to its skeleton: stark contrast, oversized type, and a single electric accent. Inspired by avant-garde magazine covers, fashion photography, and protest posters. Use for brands that refuse to be ignored — media platforms, creative agencies, launch pages, portfolios that demand attention.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0f0f0f` | Primary dark canvas |
| Surface | `#1a1a1a` | Cards, elevated panels |
| Text primary | `#ffffff` | All main text |
| Text muted | `#666666` | Captions, secondary |
| Accent | `#ff4d4d` | The single accent — use sparingly |
| Accent hover | `#ff2020` | Hover intensification |
| Inverted bg | `#f5f5f5` | Light alternating sections |
| Inverted text | `#111111` | Text on light sections |

**Rule:** One accent colour per design. The accent is a scalpel, not a paintbrush.

## Typography
- **Display:** Bebas Neue — ALL CAPS, tracking `0.04em`. For hero, section titles, bold statements. Size aggressively.
- **Body / UI:** Barlow — 400 body, 600 UI, 700 labels.
- **Eyebrows:** Barlow 700, `0.18em` letter-spacing, uppercase, `0.7rem`, accent colour.

**Scale:**
- Hero: `clamp(4rem, 10vw, 9rem)` Bebas Neue — let it bleed off-screen
- H2: `clamp(2.5rem, 5vw, 5rem)` Bebas Neue
- H3: `1.2rem` Barlow 700 uppercase
- Body: `0.95rem` / `1.65` line-height / Barlow 400

## Visual Language
- **Vertical rule:** 4px solid accent stripe on the far-left edge of hero sections
- **Watermark text:** Section keyword in Bebas at `8–12rem`, `opacity: 0.03`, sitting behind content
- **Hard offset shadows:** `4px 4px 0 rgba(255,77,77,0.3)` — no blur radius, just offset
- **Diagonal crop:** `clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%)` on section breaks
- **Zero border-radius** — `border-radius: 0` or `4px` maximum everywhere
- **High contrast always** — WCAG AA minimum, prefer AAA

## Layout Principles
- Asymmetric column splits: 60/40 or 70/30, never 50/50
- Let hero text bleed to screen edges intentionally on large viewports
- Empty half-grid sections are valid — negative space as punctuation
- Optional visible grid lines: `1px solid rgba(255,255,255,0.04)`
- Max-width: `1400px` — wider than typical. Go full-bleed when content demands it.

## Component Patterns
**Buttons:**
- Primary: `#ff4d4d` bg / white text / `border-radius: 4px` / Bebas Neue / `box-shadow: 4px 4px 0 rgba(255,77,77,0.3)`
- Ghost: `2px solid #ffffff` / white text / hover: fills white, text goes black
- Hover: `transform: translate(-2px, -2px)` + stronger shadow

**Cards:** `#1a1a1a` bg / `1px solid #2a2a2a` / `border-radius: 0` / top-left 4px accent colour corner strip

**Inputs:** Transparent bg / `border-bottom: 2px solid #333` only / focus turns `#ff4d4d`

**Badges:** Flat accent bg / black text / `border-radius: 0` / Barlow 700 uppercase

## Motion & Interaction
- Entrance: `translateX(-20px) opacity(0)` → normal, `0.5s ease-out` — snappy, not floaty
- Button hover: `translate(-2px, -2px)` + shadow intensifies — mechanical feel
- Nav hover: accent underline slides from left, `scaleX(0 → 1)`, `transform-origin: left`
- Default speed: `0.25s` — faster than soft themes

## Voice & Copy Tone
- **Tone:** Direct, provocative, confident. Short sentences. No hedging.
- **Headlines:** ALL CAPS works here. 2–4 words maximum.
- **CTAs:** "MAKE IT NOW", "GET STARTED", "SEE THE WORK", "DO IT"
- **Avoid:** Adjectives, corporate speak, softening language, emoji

**Examples:** "THE WORK SPEAKS." / "BUILD SOMETHING REAL." / "NO EXCUSES."

## CSS Starter
```css
:root {
  --bg:           #0f0f0f;
  --surface:      #1a1a1a;
  --text:         #ffffff;
  --text-muted:   #666666;
  --accent:       #ff4d4d;
  --accent-hover: #ff2020;
  --white-bg:     #f5f5f5;
  --dark-text:    #111111;
  --border:       rgba(255,255,255,0.08);
  --shadow-hard:  4px 4px 0 rgba(255,77,77,0.3);
  --radius:       4px;
  --font-display: 'Bebas Neue', sans-serif;
  --font-body:    'Barlow', sans-serif;
  --transition:   0.25s ease-out;
}
```
