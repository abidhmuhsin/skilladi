# Nordic Frost
> Clarity forged in cold light.

## Overview
Nordic Frost is clean Scandinavian minimalism with an icy edge — white space as a design principle, cool greys and glacier blues, and typography of surgical precision. Inspired by Scandinavian product design, Nordic architecture, and the visual vocabulary of fjords and winter light. Use for SaaS tools, productivity apps, design agencies, hardware products, and any brand that prioritizes clarity, function, and calm authority.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#f8fafc` | Arctic white canvas |
| Surface | `#ffffff` | Cards, modals |
| Surface cool | `#f0f4f8` | Tinted section bg |
| Text | `#0f1923` | Near-black with blue tint |
| Text mid | `#4a6070` | Secondary copy |
| Text light | `#8a9db0` | Captions, metadata |
| Glacier | `#4a9ec8` | Primary accent |
| Ice | `#a8d8f0` | Hover states, tints |
| Frost | `#d8ecf8` | Soft accent surfaces |
| Steel | `#2a4a5a` | Dark accent |
| Border | `rgba(74,158,200,0.15)` | Cool blue borders |
| Border neutral | `rgba(15,25,35,0.08)` | Structural dividers |

**Ratio:** 75% white-grey / 20% cool surface / 5% glacier accent.

## Typography
- **Display:** Raleway — weight 800. Precise, geometric, engineered to impress.
- **Body:** Raleway — weight 300 body, 500 UI. Keep in-family for maximum coherence.
- **Eyebrows:** Raleway 700, `0.25em` letter-spacing, uppercase, `0.65rem`

**Scale:**
- Hero: `clamp(2.8rem, 5vw, 4.5rem)` Raleway 800
- H2: `clamp(2rem, 3.5vw, 3.2rem)` Raleway 700
- Body: `0.95rem` / `1.75` line-height / Raleway 300

## Visual Language
- **Geometric grid lines:** `1px solid rgba(74,158,200,0.06)` visible grid overlay in hero
- **Ice facets:** Angular, crystalline `clip-path: polygon()` shapes in frost color at 8% opacity
- **Precision borders:** `1px solid rgba(15,25,35,0.07)` — razor-thin structural definition
- **Glacier gradient:** `linear-gradient(180deg, #f8fafc, #f0f4f8)` — imperceptible, atmospheric
- **White space as element:** Intentional emptiness carries as much weight as content
- **Minimal iconography:** Thin stroke icons at 1.5px, no fill, glacier color
- **Hairline dividers:** `1px solid rgba(74,158,200,0.1)` horizontal rules between sections

## Layout Principles
- Maximally generous whitespace: `120–160px` vertical section padding
- Strict grid: 12-column, `gap: 32px` — no organic irregularity
- Content left-aligned or centered — never chaotic
- Max-width `1280px` / `40px` side padding
- Images: desaturated 20%, cool blue-grey tone, no border-radius or `4px` max
- Type hierarchy does heavy lifting — minimal decoration

## Component Patterns
**Buttons:**
- Primary: `#4a9ec8` bg / white text / `border-radius: 6px` / Raleway 700 / no box-shadow
- Ghost: transparent / `1px solid #4a9ec8` / glacier text / hover: frost bg
- Hover: `background` lightens or darkens by 8% — no transform
- Minimal: no glow, no color transition — pure restraint

**Cards:** White / `1px solid rgba(15,25,35,0.08)` / `border-radius: 8px` / `box-shadow: 0 2px 8px rgba(15,25,35,0.06)` / hover: shadow doubles

**Inputs:** White / `1px solid rgba(15,25,35,0.15)` / `border-radius: 6px` / focus: `border-color: #4a9ec8` + `box-shadow: 0 0 0 3px rgba(74,158,200,0.12)`

**Data/Stats:** Large numbers in Raleway 800, label in Raleway 500 uppercase — no decoration

## Motion & Interaction
- Entrance: `opacity(0)` → normal only — no translate / `0.5s ease` / stagger `0.06s`
- No bounce, no spring, no personality — discipline is the personality
- Hover: subtle `background` shift only — `0.2s ease`
- Focus states: glacier ring appears — `0.15s ease`
- Transitions: `0.2s ease` — fast, efficient, intentional

## Voice & Copy Tone
- **Tone:** Precise, confident, restrained. Substance over style.
- **Headlines:** Sentence case, clear, functional. 3–6 words.
- **CTAs:** "Get Started", "Learn More", "Try Free", "Sign In"
- **Avoid:** Hype, warmth-for-warmth's-sake, decorated language, emoji

**Examples:** "Designed around you." / "Everything in its place." / "Built for the long run."

## CSS Starter
```css
:root {
  --bg:           #f8fafc;
  --surface:      #ffffff;
  --surface-cool: #f0f4f8;
  --text:         #0f1923;
  --text-mid:     #4a6070;
  --text-light:   #8a9db0;
  --glacier:      #4a9ec8;
  --ice:          #a8d8f0;
  --frost:        #d8ecf8;
  --steel:        #2a4a5a;
  --border:       rgba(74,158,200,0.15);
  --border-n:     rgba(15,25,35,0.08);
  --shadow-sm:    0 2px 8px rgba(15,25,35,0.06);
  --shadow-md:    0 8px 24px rgba(15,25,35,0.1);
  --radius:       8px;
  --font-display: 'Raleway', sans-serif;
  --font-body:    'Raleway', sans-serif;
  --transition:   0.2s ease;
}
```
