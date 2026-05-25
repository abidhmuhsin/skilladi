# Crystal Noir
> Iridescence in the void — where darkness refracts into infinite colour.

## Overview
Crystal Noir is dark luxury meets holographic futurism. Deep purple-navy backgrounds fractured by prismatic light — violet, cyan, and pink — as if the UI itself is made of black crystal. Draws from high-fashion editorial, luxury tech products, and rave culture's more sophisticated older sibling. Use for premium tech products, NFT platforms, luxury apps, creative agencies, and brands positioning themselves at the intersection of art and technology.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#060612` | Deep space black-purple |
| Surface | `#0d0d24` | Elevated cards |
| Surface hi | `#141430` | Modals, dropdowns |
| Text primary | `#e8e0ff` | Pale lavender white |
| Text mid | `#5a4a8a` | Secondary copy |
| Text muted | `#2a1a4a` | Disabled, placeholder |
| Violet | `#c084fc` | Primary accent |
| Cyan | `#38bdf8` | Secondary accent |
| Pink | `#f472b6` | Tertiary accent |
| Shimmer top | `linear-gradient(90deg, transparent, #c084fc, #38bdf8, #f472b6, transparent)` | Border shimmer |
| Border | `rgba(192,132,252,0.15)` | Violet-tinted borders |

**Gradient headline:** `linear-gradient(135deg, #c084fc, #38bdf8, #f472b6)` — `-webkit-background-clip: text`

## Typography
- **Display:** Orbitron — weight 900 for hero, 700 for H2. All-caps or title case. Futuristic, precise.
- **Body:** Orbitron — weight 400. Keep in-family. Spacing `0.02em`.
- **Eyebrows:** Orbitron 400, `0.18em` letter-spacing, uppercase, `0.6rem`

**Scale:**
- Hero: `clamp(2rem, 4vw, 3.5rem)` Orbitron 900 — gradient fill
- H2: `clamp(1.6rem, 3vw, 2.6rem)` Orbitron 700
- Body: `0.88rem` / `1.7` line-height / Orbitron 400

## Visual Language
- **Holographic shimmer bar:** 2px top border with `linear-gradient` across full violet→cyan→pink spectrum
- **Prismatic gradient headings:** `-webkit-background-clip: text` with 3-stop gradient
- **Gem motifs:** `💎` `✦` at 15–20% opacity as ambient decoration
- **Radial colour blooms:** Three overlapping `radial-gradient` spheres (violet, cyan, pink) at 10% opacity
- **Dark glass cards:** `backdrop-filter: blur(20px)` on `rgba(13,13,36,0.8)` backgrounds
- **No hard borders** — only gradient or faint tinted borders
- **Clip-path geometry:** Hexagonal or diamond `clip-path` on feature cards

## Layout Principles
- Dark, expansive, cinematic sections — `140px` vertical padding
- Feature cards in asymmetric grid with visible z-axis layering (overlapping cards)
- Max-width `1300px` / `40px` side padding
- Images: treated with `mix-blend-mode: luminosity` or heavy purple duotone filter

## Component Patterns
**Buttons:**
- Primary: `linear-gradient(135deg, #7c3aed, #a855f7)` / white text / `border-radius: 4px` / `box-shadow: 0 0 24px rgba(168,85,247,0.4)`
- Ghost: transparent / `1px solid rgba(192,132,252,0.35)` / violet text / hover: subtle violet bg
- Hover: `box-shadow` intensifies to `0 0 40px rgba(168,85,247,0.6)`

**Cards:** `rgba(13,13,36,0.8)` / `backdrop-filter: blur(20px)` / `1px solid rgba(192,132,252,0.15)` / shimmer top border / `border-radius: 12px`

**Inputs:** `#060612` bg / `1px solid rgba(192,132,252,0.2)` / focus: violet glow `box-shadow: 0 0 0 3px rgba(192,132,252,0.15)`

## Motion & Interaction
- Entrance: `scale(0.95) opacity(0)` → normal / `0.6s cubic-bezier(0.4,0,0.2,1)` / stagger `0.08s`
- Hover glow: `box-shadow` expands outward, violet glow pulse
- Shimmer animation: `background-position` shift on gradient borders, `3s linear infinite`
- Gem float: decorative elements gently rotate `0deg → 360deg` at `20s linear infinite`

## Voice & Copy Tone
- **Tone:** Cryptic, confident, visionary. Speaks in possibilities, not features.
- **Headlines:** Sentence case, poetic, conceptual. 3–6 words.
- **CTAs:** "Enter the Prism", "Discover", "Access", "Unlock"
- **Avoid:** Casual language, emoji, anything mundane

**Examples:** "Beyond the visible spectrum." / "Clarity through complexity." / "The dark has never looked like this."

## CSS Starter
```css
:root {
  --bg:           #060612;
  --surface:      #0d0d24;
  --surface-hi:   #141430;
  --text:         #e8e0ff;
  --text-mid:     #5a4a8a;
  --violet:       #c084fc;
  --cyan:         #38bdf8;
  --pink:         #f472b6;
  --border:       rgba(192,132,252,0.15);
  --glow-violet:  rgba(192,132,252,0.2);
  --glow-cyan:    rgba(56,189,248,0.15);
  --radius:       12px;
  --shadow:       0 0 24px rgba(168,85,247,0.35);
  --font-display: 'Orbitron', monospace;
  --font-body:    'Orbitron', monospace;
  --transition:   0.3s cubic-bezier(0.4,0,0.2,1);
}
```
