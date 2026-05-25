# Rose Gold Marble
> Refined femininity at the intersection of stone and shimmer.

## Overview
Rose Gold Marble is luxurious, feminine, and aspirational — white Carrara marble veining paired with rose gold metallic accents on a pale blush foundation. Inspired by luxury lifestyle Instagram, high-end beauty brands, bespoke jewellery, and the interiors of aspirational spas. This is the aesthetic of gilded millwork and champagne at noon. Use for beauty and wellness brands, luxury retail, lifestyle content, premium subscriptions, and any product that wants to feel both exclusive and deeply desirable.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#fdf8f6` | Pale blush canvas |
| Surface | `#ffffff` | Cards, modals |
| Surface marble | `#f8f4f0` | Marble-tinted section bg |
| Text | `#2a1a18` | Deep warm brown-black |
| Text mid | `#8a6058` | Secondary copy |
| Text light | `#b89888` | Captions, metadata |
| Rose gold | `#c4847a` | Primary accent |
| Rose gold light | `#dba89e` | Hover, tints |
| Champagne | `#e8d4b8` | Warm neutral fill |
| Blush | `#f4c4b8` | Soft pink tint |
| Marble vein | `rgba(180,140,130,0.15)` | Vein simulation |
| Border | `rgba(196,132,122,0.18)` | Rose gold borders |

**Gradient:** `linear-gradient(135deg, #c4847a, #dba89e, #e8c4a0)` — metallic rose gold shimmer.

## Typography
- **Display:** Cormorant Garamond — weight 300 italic for hero. Impossibly refined.
- **Subheadings:** Cormorant Garamond — weight 600. Authoritative but never heavy.
- **Body:** Lato — weight 300. Airy and legible without disrupting the luxury feeling.
- **Eyebrows:** Lato 500, `0.25em` letter-spacing, uppercase, `0.65rem`, rose gold

**Scale:**
- Hero: `clamp(3rem, 5.5vw, 5rem)` Cormorant Garamond 300 italic
- H2: `clamp(2rem, 3.5vw, 3.2rem)` Cormorant Garamond 600
- Body: `0.95rem` / `1.85` line-height / Lato 300

## Visual Language
- **Marble veining:** CSS pseudo-element with `linear-gradient` at sharp angles, `opacity: 0.12` — subtly textured surface
- **Rose gold shimmer:** `linear-gradient(90deg, transparent, rgba(196,132,122,0.3), transparent)` animated sweep on feature elements
- **Metallic type:** `-webkit-background-clip: text` with rose gold gradient on hero headline
- **Hairline gold borders:** `1px solid rgba(196,132,122,0.2)` — suggest gilding without excess
- **Blush bloom:** `radial-gradient(ellipse, rgba(244,196,184,0.2), transparent)` in section corners
- **White marble surfaces:** Card backgrounds with subtle grain texture at `opacity: 0.04`

## Layout Principles
- Balanced, graceful, classical compositions — symmetry is sophistication here
- Generous vertical breathing room: `100–120px` section padding
- Cards slightly staggered in height for editorial variety
- Max-width `1150px` / `32px` side padding
- Images: warm-toned, slight blush overlay, `border-radius: 12px`
- Gold hairlines define structure — never heavy rules

## Component Patterns
**Buttons:**
- Primary: `linear-gradient(135deg, #c4847a, #dba89e)` / white text / `border-radius: 4px` / Lato 600 / `box-shadow: 0 6px 20px rgba(196,132,122,0.35)`
- Ghost: transparent / `1px solid rgba(196,132,122,0.4)` / rose gold text / hover: blush bg
- Hover: shimmer sweep animation + `translateY(-2px)` + shadow deepens

**Cards:** White / `border-radius: 16px` / `1px solid rgba(196,132,122,0.12)` / warm shadow / optional marble-texture pseudo-element bg

**Inputs:** `#fdf8f6` bg / `1px solid rgba(196,132,122,0.2)` / `border-radius: 8px` / focus: `border-color: #c4847a` + rose glow

**Badges:** Champagne bg / rose gold text / `border-radius: 100px` / Lato 600

## Motion & Interaction
- Entrance: `translateY(20px) opacity(0)` → normal / `0.7s ease` / stagger `0.1s` — graceful
- Shimmer sweep: `background-position: -200% → 200%` on gradient / `3s ease-in-out infinite`
- Hover cards: `translateY(-5px)` + shadow warms and spreads
- No bounce, no scale — restraint is the signature of luxury
- Transitions: `0.4s ease`

## Voice & Copy Tone
- **Tone:** Aspirational, warm, quietly opulent. Speaks to the version of the user they want to become.
- **Headlines:** Sentence case, dreamy, sensory. 4–7 words.
- **CTAs:** "Discover", "Shop Now", "Explore the Collection", "Begin"
- **Avoid:** Bargain language, urgency, tech vocabulary, anything coarse

**Examples:** "Beauty refined to its essence." / "Because you deserve marble floors." / "Crafted for the exquisitely discerning."

## CSS Starter
```css
:root {
  --bg:           #fdf8f6;
  --surface:      #ffffff;
  --surface-mbl:  #f8f4f0;
  --text:         #2a1a18;
  --text-mid:     #8a6058;
  --text-light:   #b89888;
  --rose-gold:    #c4847a;
  --rose-light:   #dba89e;
  --champagne:    #e8d4b8;
  --blush:        #f4c4b8;
  --border:       rgba(196,132,122,0.18);
  --shadow-soft:  0 6px 24px rgba(180,100,90,0.1);
  --shadow-lift:  0 16px 48px rgba(180,100,90,0.16);
  --radius:       12px;
  --radius-pill:  100px;
  --font-display: 'Cormorant Garamond', serif;
  --font-body:    'Lato', sans-serif;
  --transition:   0.4s ease;
}
```
