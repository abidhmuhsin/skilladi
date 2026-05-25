# Velvet Luxe
> Opulence with depth — the texture of true luxury.

## Overview
Velvet Luxe is deep, sensuous, and unapologetically extravagant. Rich burgundy and deep plum backgrounds accented with aged gold and champagne — the visual vocabulary of velvet drapes, candlelit galleries, and fine jewellery. Inspired by luxury fashion houses, perfume branding, and the interiors of private members clubs. Use for premium brands, high-end retail, exclusive services, luxury hospitality, and any product positioning itself as worth the price of admission.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0e0608` | Deep velvet black-red |
| Surface | `#1a0c10` | Elevated cards |
| Surface light | `#241018` | Hover states, inputs |
| Text primary | `#f5e6d8` | Warm cream |
| Text mid | `#7a4a5a` | Secondary copy |
| Text muted | `#3a1a28` | Disabled, placeholders |
| Gold | `#c9a84c` | Primary accent |
| Gold light | `#e8c870` | Hover, shimmer highlights |
| Champagne | `#f0ddb0` | Soft gold tint |
| Burgundy | `#8b2040` | Secondary accent |
| Border | `rgba(201,168,76,0.15)` | Gold-tinted borders |
| Glow | `rgba(201,168,76,0.08)` | Ambient gold glow |

**Ratio:** 80% deep burgundy-black / 15% warm cream text / 5% gold accents.

## Typography
- **Display:** Cinzel — weight 400 for hero, 700 for strong statements. Roman, eternal, authoritative.
- **Body:** Libre Baskerville — weight 400 body, italic for emphasis. Old-world elegance that reads beautifully small.
- **Eyebrows:** Cinzel 400, `0.3em` letter-spacing, uppercase, `0.65rem`, gold

**Scale:**
- Hero: `clamp(2.5rem, 4.5vw, 4rem)` Cinzel 400
- H2: `clamp(1.8rem, 3vw, 2.8rem)` Cinzel 700
- Body: `0.95rem` / `1.85` line-height / Libre Baskerville 400

## Visual Language
- **Velvet texture:** CSS `radial-gradient` with dark variation at `opacity: 0.4` to simulate fabric depth
- **Gold shimmer bars:** `linear-gradient(90deg, transparent, #c9a84c, transparent)` / 1px height as section dividers
- **Candlelight glows:** `radial-gradient(ellipse at center, rgba(201,168,76,0.06), transparent)` — warm, dim
- **Ornate corners:** Thin SVG corner flourishes in gold at 30% opacity on premium cards
- **No hard whites** — `#f5e6d8` is the brightest surface ever used
- **Monogram motifs:** Large watermark letters or crests at `opacity: 0.03` behind hero content

## Layout Principles
- Slow, cinematic, deliberate — each section earns its space
- Expansive vertical padding: `120–160px` per section
- Centered compositions for ceremony, asymmetric for drama
- Max-width `1200px` / `40px` side padding
- Images: treated with deep burgundy duotone or heavy vignette
- Thin gold hairlines define structure — never thick borders

## Component Patterns
**Buttons:**
- Primary: transparent / `1px solid rgba(201,168,76,0.5)` / gold text / hover: `rgba(201,168,76,0.1)` bg + glow
- Filled: `linear-gradient(135deg, #c9a84c, #e8c870)` / dark text / `border-radius: 2px`
- Hover: `box-shadow: 0 0 24px rgba(201,168,76,0.25)` — candlelight bloom

**Cards:** `#1a0c10` bg / `1px solid rgba(201,168,76,0.12)` / `border-radius: 4px` / gold top hairline / subtle inner glow

**Inputs:** `#0e0608` bg / `1px solid rgba(201,168,76,0.15)` / focus: `border-color: #c9a84c` + ambient glow

**Dividers:** Gold gradient rule / 1px / fade to transparent at edges — never full-width solid

## Motion & Interaction
- Entrance: `opacity(0)` → normal / `1s ease` / long stagger `0.2s` — ceremonial pacing
- Gold shimmer: `background-position` animation on gradient borders, `4s linear infinite`
- Hover glow: `box-shadow` gold bloom appears over `0.5s ease`
- Ornamental elements: imperceptibly slow rotation `0deg → 360deg` / `60s linear infinite`
- Transitions: `0.5s ease` — nothing rushes in luxury

## Voice & Copy Tone
- **Tone:** Measured, rarefied, quietly confident. Does not shout. Does not need to.
- **Headlines:** Sentence case, 3–5 words maximum. Weight every word.
- **CTAs:** "Request Access", "Enquire", "Discover", "Enter"
- **Avoid:** Discounts, urgency, casual language, superlatives

**Examples:** "For the discerning few." / "Time-honoured craft, reimagined." / "Some things defy acceleration."

## CSS Starter
```css
:root {
  --bg:           #0e0608;
  --surface:      #1a0c10;
  --surface-hi:   #241018;
  --text:         #f5e6d8;
  --text-mid:     #7a4a5a;
  --text-muted:   #3a1a28;
  --gold:         #c9a84c;
  --gold-light:   #e8c870;
  --champagne:    #f0ddb0;
  --burgundy:     #8b2040;
  --border:       rgba(201,168,76,0.15);
  --glow:         rgba(201,168,76,0.08);
  --shadow:       0 20px 60px rgba(0,0,0,0.6);
  --radius:       4px;
  --font-display: 'Cinzel', serif;
  --font-body:    'Libre Baskerville', serif;
  --transition:   0.5s ease;
}
```
