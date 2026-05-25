# Dark Academia
> Knowledge has a smell — old paper, candle wax, and ambition.

## Overview
Dark Academia romanticizes the pursuit of knowledge through a gothic, literary lens. Think candlelit libraries, worn leather-bound books, ivy-covered stone, and handwritten marginalia. Deep sepia, charcoal, and aged parchment form a palette of intellectual gravity. Use for education platforms, publishing brands, literary communities, research tools, writing apps, and any brand that wants to feel bookish, erudite, and deeply serious.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#1a1410` | Deep charcoal-brown |
| Surface | `#241c16` | Elevated cards |
| Surface light | `#2e241c` | Hover states, inputs |
| Text primary | `#e8dcc8` | Aged parchment white |
| Text mid | `#8a7060` | Secondary copy |
| Text muted | `#4a3828` | Disabled, placeholder |
| Aged gold | `#c4984a` | Primary accent |
| Sepia | `#a0784a` | Secondary accent |
| Crimson | `#8b2030` | Alert, highlight accent |
| Border | `rgba(196,152,74,0.15)` | Warm gold borders |
| Paper | `#f0e8d8` | Inverted section bg |
| Ink | `#2a1c14` | Inverted text |

**Ratio:** 75% charcoal-brown / 20% parchment text / 5% aged gold accents.

## Typography
- **Display:** IM Fell English — weight 400 italic. Looks as if set by hand in a Gutenberg press.
- **Body:** Libre Baskerville — weight 400. Scholarly, serious, supremely legible at body size.
- **Eyebrows:** Libre Baskerville 400 italic, `0.15em` letter-spacing, `0.72rem`, gold-sepia

**Scale:**
- Hero: `clamp(2.8rem, 5vw, 4.5rem)` IM Fell English italic
- H2: `clamp(2rem, 3.5vw, 3rem)` IM Fell English
- Body: `1rem` / `1.9` line-height / Libre Baskerville 400

## Visual Language
- **Paper texture:** Subtle noise at `opacity: 0.06` over all dark sections for aged depth
- **Bookplate ornaments:** Vintage frame borders on cards — thin double-rule lines at `rgba(196,152,74,0.2)`
- **Ink wash:** `radial-gradient(ellipse, rgba(196,152,74,0.05), transparent)` candlelight blooms
- **Marginalia style:** Italic pullquotes with thin left border in gold — evoking handwritten notes
- **Classical dividers:** `— § —` text ornaments, Libre Baskerville, sepia at 60% opacity
- **Monochrome photography:** Images treated with deep sepia duotone filter
- **Greek/Latin watermarks:** Section keywords in IM Fell at `8rem`, `opacity: 0.025` behind content

## Layout Principles
- Dense, considered layouts — information architecture as craft
- Moderate vertical padding: `80–100px` — scholars do not waste space
- Single-column for long-form content; 2-column grids for cards
- Max-width `1100px` / `32px` side padding — intimate and focused
- Allow generous leading (line-height `1.9`) — long reading expected

## Component Patterns
**Buttons:**
- Primary: `#c4984a` bg / dark text / `border-radius: 3px` / IM Fell English / no glow
- Ghost: transparent / `1px solid rgba(196,152,74,0.35)` / gold text / hover: faint sepia bg
- Hover: `background` slightly warms — no transforms, no flash

**Cards:** `#241c16` bg / `1px solid rgba(196,152,74,0.12)` / `border-radius: 4px` / inner double-rule top border / aged shadow

**Inputs:** `#1a1410` bg / `1px solid rgba(196,152,74,0.15)` / focus: `border-color: #c4984a` + warm amber glow

**Blockquotes:** `border-left: 3px solid #c4984a` / IM Fell italic / `margin-left: 24px` / parchment text color

## Motion & Interaction
- Entrance: `opacity(0)` → normal only / `0.8s ease` / stagger `0.15s` — measured, not theatrical
- Hover: a barely perceptible `background` shift — like turning a page
- Focus: gold border appears at `0.3s ease`
- No spring animations — discipline and restraint define the aesthetic
- Transitions: `0.3s ease`

## Voice & Copy Tone
- **Tone:** Intellectual, measured, quietly impassioned. Quotes liberally; never explains itself.
- **Headlines:** Sentence case. Latin phrases welcome. 4–8 words.
- **CTAs:** "Begin Reading", "Explore", "Enrol", "Discover"
- **Avoid:** Informality, emojis, fast-paced energy, startup vocabulary

**Examples:** "Per aspera ad astra." / "The examined life, rendered visible." / "Knowledge without borders."

## CSS Starter
```css
:root {
  --bg:           #1a1410;
  --surface:      #241c16;
  --surface-hi:   #2e241c;
  --text:         #e8dcc8;
  --text-mid:     #8a7060;
  --text-muted:   #4a3828;
  --gold:         #c4984a;
  --sepia:        #a0784a;
  --crimson:      #8b2030;
  --paper:        #f0e8d8;
  --ink:          #2a1c14;
  --border:       rgba(196,152,74,0.15);
  --shadow:       0 8px 32px rgba(0,0,0,0.4);
  --radius:       4px;
  --font-display: 'IM Fell English', serif;
  --font-body:    'Libre Baskerville', serif;
  --transition:   0.3s ease;
}
```
