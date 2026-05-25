# Desert Boho
> Warm earth, wandering spirit, slow golden hours.

## Overview
Desert Boho channels the sun-bleached beauty of canyon landscapes, Moroccan bazaars, and artisan markets at sunset. Terracotta, ochre, sand, and burnt sienna form a palette that feels ancient and alive. Paired with hand-drawn textures, woven patterns, and earthy serif type. Use for travel brands, artisan e-commerce, wellness retreats, lifestyle blogs, and any brand rooted in warmth, craft, and wanderlust.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#f7f0e6` | Warm sand canvas |
| Surface | `#ffffff` | Cards, panels |
| Surface warm | `#f2e4cc` | Tinted section bg |
| Text | `#2d1a0e` | Deep warm brown |
| Text mid | `#8a5a3a` | Secondary copy |
| Text light | `#b8895a` | Captions, metadata |
| Terracotta | `#c4622d` | Primary accent |
| Ochre | `#d4a84b` | Secondary accent |
| Sand | `#e8c98a` | Warm neutral fill |
| Rust | `#a0422a` | Deep accent |
| Sage | `#8a9e7a` | Cool contrast |
| Border | `rgba(196,98,45,0.15)` | Warm brown borders |

**Gradient:** `linear-gradient(180deg, #f7f0e6, #f2e4cc)` for warm section transitions.

## Typography
- **Display:** Fraunces — weight 700 italic. Ancient, expressive, imperfect in the best way.
- **Body:** Outfit — weight 300–400. Clean enough to read, warm enough to feel human.
- **Eyebrows:** Outfit 500, `0.2em` letter-spacing, uppercase, `0.72rem`, terracotta

**Scale:**
- Hero: `clamp(3rem, 5.5vw, 5rem)` Fraunces 700 italic
- H2: `clamp(2rem, 3.5vw, 3.2rem)` Fraunces 600
- Body: `1.02rem` / `1.8` line-height / Outfit 400

## Visual Language
- **Woven textures:** SVG or CSS hatching pattern at `opacity: 0.05` in section backgrounds
- **Brushstroke underlines:** Irregular hand-drawn SVG underline on key words
- **Geometric tile motifs:** Subtle diamond and triangle patterns at corners at low opacity
- **Earth tone blobs:** Organic `border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%` shapes in terracotta or ochre at 8% opacity
- **Warm grain:** CSS noise filter at `opacity: 0.03` for analog texture
- **Macrame-inspired dividers:** Dotted or dashed rules in terracotta at 20% opacity

## Layout Principles
- Relaxed, wandering layouts — avoid rigid symmetry
- Generous breathing room: `100px` vertical padding
- Staggered image grids with slight rotation (`rotate(1.5deg)` alternating)
- Max-width `1150px` / `32px` side padding
- Images: warm duotone filter, `border-radius: 12px`
- Allow text to overlap decorative background elements for depth

## Component Patterns
**Buttons:**
- Primary: `#c4622d` bg / white text / `border-radius: 6px` / Outfit 600 / `box-shadow: 0 6px 20px rgba(196,98,45,0.3)`
- Ghost: transparent / `1.5px solid rgba(196,98,45,0.4)` / terracotta text / hover: sand bg
- Hover: `translateY(-3px)` + `box-shadow` warms and deepens

**Cards:** White / `border-radius: 16px` / `1px solid rgba(196,98,45,0.12)` / warm shadow / optional terracotta left edge accent

**Inputs:** `#f7f0e6` bg / `1px solid rgba(196,98,45,0.2)` / `border-radius: 8px` / focus: `border-color: #c4622d`

**Badges:** Sand bg / `border-radius: 4px` / terracotta text / Outfit 600

## Motion & Interaction
- Entrance: `translateY(20px) opacity(0)` → normal / `0.65s ease` / stagger `0.1s`
- Decorative elements: slow parallax on scroll, `translateY(-15px)` at full scroll
- Hover cards: `translateY(-5px)` + `box-shadow` warms
- No sharp or snappy animations — everything drifts
- Transitions: `0.4s ease`

## Voice & Copy Tone
- **Tone:** Soulful, wandering, sensory-rich. Speaks in images and feelings.
- **Headlines:** Sentence case, poetic, tactile. 4–7 words.
- **CTAs:** "Explore", "Wander In", "Discover More", "Find Yours"
- **Avoid:** Urgency, tech language, anything fast or synthetic

**Examples:** "Crafted from the earth up." / "Follow the golden hour anywhere." / "Made for those who wander."

## CSS Starter
```css
:root {
  --bg:           #f7f0e6;
  --surface:      #ffffff;
  --surface-warm: #f2e4cc;
  --text:         #2d1a0e;
  --text-mid:     #8a5a3a;
  --text-light:   #b8895a;
  --terracotta:   #c4622d;
  --ochre:        #d4a84b;
  --sand:         #e8c98a;
  --rust:         #a0422a;
  --sage:         #8a9e7a;
  --border:       rgba(196,98,45,0.15);
  --shadow-soft:  0 6px 24px rgba(80,30,10,0.1);
  --shadow-lift:  0 16px 48px rgba(80,30,10,0.16);
  --radius:       12px;
  --font-display: 'Fraunces', serif;
  --font-body:    'Outfit', sans-serif;
  --transition:   0.4s ease;
}
```
