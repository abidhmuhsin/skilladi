# Old Money
> Quiet confidence. Earned over generations.

## Overview
Old Money is the aesthetic of inherited wealth and understated authority — cream linens, aged leather, oak panelling, and the effortless ease of those who have never needed to prove themselves. Navy, forest green, warm ivory, and British racing green form a palette of quiet authority. Inspired by Ivy League campuses, London members clubs, country estates, and heritage menswear brands. Use for financial services, premium education, heritage retail, professional services, and brands that position quality as self-evident.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#faf6f0` | Warm ivory canvas |
| Surface | `#ffffff` | Cards, modals |
| Surface tint | `#f4eedc` | Warm cream panels |
| Text | `#1a1a14` | Near-black |
| Text mid | `#5a5040` | Secondary copy |
| Text light | `#8a7860` | Captions, metadata |
| Navy | `#1a2a4a` | Primary accent |
| Forest | `#2a4a2a` | Secondary accent |
| Cream | `#d8c89a` | Warm neutral accent |
| Gold | `#b09050` | Tertiary, ornamental |
| Border | `rgba(26,42,74,0.12)` | Navy-tinted borders |
| Border warm | `rgba(176,144,80,0.15)` | Gold accents |

**Ratio:** 70% ivory / 20% navy or forest surfaces / 10% gold + cream accents.

## Typography
- **Display:** Libre Baskerville — weight 700 for headings. Authoritative, time-tested, unimpeachable.
- **Body:** Libre Baskerville — weight 400. Same family for cohesive scholarly gravitas.
- **Labels/UI:** Raleway 600 uppercase — modern precision alongside traditional serif.
- **Eyebrows:** Raleway 600, `0.25em` letter-spacing, uppercase, `0.68rem`, navy

**Scale:**
- Hero: `clamp(2.8rem, 4.5vw, 4rem)` Libre Baskerville 700
- H2: `clamp(2rem, 3vw, 2.8rem)` Libre Baskerville 700
- Body: `1rem` / `1.85` line-height / Libre Baskerville 400

## Visual Language
- **Heraldic details:** Thin shield or crest motifs at `opacity: 0.05` as section watermarks
- **Engraving style rules:** Fine `1px solid rgba(26,42,74,0.1)` parallel lines as texture
- **Grosgrain ribbon border:** Alternating navy and cream `2px` dash-pattern horizontal rule
- **Wax seal motifs:** Circular stamp/emboss aesthetic on credential or quote cards
- **Gold hairlines:** `1px solid rgba(176,144,80,0.2)` — only where needed, never decorative excess
- **Warm photography:** Sepia-adjacent warm toning, `border-radius: 4px` — no rounded excess

## Layout Principles
- Restrained, precise, grid-disciplined
- Generous whitespace without ostentation: `100px` vertical padding
- Traditional content hierarchy: eyebrow → headline → copy → CTA, always
- Max-width `1200px` / `40px` side padding
- Images: small and purposeful, never full-bleed without reason
- Trust is built through consistency, never novelty

## Component Patterns
**Buttons:**
- Primary: `#1a2a4a` bg / `#faf6f0` text / `border-radius: 4px` / Raleway 700 / no glow
- Secondary: `#2a4a2a` bg / `#faf6f0` text / `border-radius: 4px` — forest variant
- Ghost: transparent / `1px solid rgba(26,42,74,0.35)` / navy text / hover: cream bg
- Hover: extremely subtle `background` shift — no transforms

**Cards:** White / `border-radius: 4px` / `1px solid rgba(26,42,74,0.1)` / warm shadow / thin navy top accent / cream interior bg option

**Inputs:** `#faf6f0` bg / `1px solid rgba(26,42,74,0.2)` / `border-radius: 4px` / focus: navy border / no glow ring

**Dividers:** Single `1px solid rgba(26,42,74,0.1)` — nothing more, nothing less

## Motion & Interaction
- Entrance: `opacity(0)` → normal / `0.6s ease` / minimal stagger `0.08s`
- Absolutely no bouncing, scaling, or springy animations — beneath the brand
- Hover: `background` shift only — `0.2s ease`
- Transitions: `0.25s ease` — efficient and composed

## Voice & Copy Tone
- **Tone:** Confident, measured, institution-calibre. Speaks with authority, never aggression.
- **Headlines:** Title case, classic, four-square. 3–6 words.
- **CTAs:** "Learn More", "Apply Now", "Enquire", "Get Started"
- **Avoid:** Superlatives, discounts, urgency tactics, casual contractions

**Examples:** "Standards passed down, not imposed." / "Excellence is the only metric." / "For those who think in decades."

## CSS Starter
```css
:root {
  --bg:           #faf6f0;
  --surface:      #ffffff;
  --surface-tint: #f4eedc;
  --text:         #1a1a14;
  --text-mid:     #5a5040;
  --text-light:   #8a7860;
  --navy:         #1a2a4a;
  --forest:       #2a4a2a;
  --cream:        #d8c89a;
  --gold:         #b09050;
  --border:       rgba(26,42,74,0.12);
  --border-gold:  rgba(176,144,80,0.15);
  --shadow-soft:  0 4px 16px rgba(26,42,74,0.08);
  --shadow-lift:  0 12px 40px rgba(26,42,74,0.12);
  --radius:       4px;
  --font-display: 'Libre Baskerville', serif;
  --font-body:    'Libre Baskerville', serif;
  --font-ui:      'Raleway', sans-serif;
  --transition:   0.25s ease;
}
```
