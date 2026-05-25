# Cottagecore
> Handcrafted, unhurried, and rooted in the earth.

## Overview
Cottagecore is a whimsical, earthy aesthetic inspired by old English country cottages, botanical illustration, and handmade craft culture. Warm browns, sage greens, mushroom beiges, and terracotta tones pair with serif typography that feels hand-set rather than digital. Use for artisan brands, food and lifestyle blogs, small-batch e-commerce, wellness platforms, and any product that values slowness, warmth, and authenticity.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#fdf6ee` | Warm parchment canvas |
| Surface | `#ffffff` | Cards, elevated panels |
| Surface tint | `#f5ead8` | Warm cream tint sections |
| Text | `#3b2410` | Deep warm brown |
| Text mid | `#9b7d5a` | Secondary copy |
| Text light | `#c4a07a` | Captions, metadata |
| Brown | `#8b5e3c` | Primary accent |
| Brown light | `#b07840` | Hover states |
| Sage | `#7a9c5a` | Secondary accent |
| Sage light | `#c8d8b0` | Sage tint surfaces |
| Mushroom | `#c4a882` | Neutral warm |
| Border | `rgba(139,94,60,0.15)` | Subtle outlines |

**Ratio:** 70% warm parchment / 20% white / 10% brown + sage accents.

## Typography
- **Display:** Crimson Pro — italic weight 400 for hero. Feels hand-set and literary.
- **Body:** Crimson Pro — weight 400 body, 600 labels. Keep in-family.
- **Eyebrows:** Crimson Pro 600 italic, `0.12em` letter-spacing, `0.78rem`

**Scale:**
- Hero: `clamp(2.8rem, 5vw, 4.2rem)` Crimson Pro italic
- H2: `clamp(2rem, 3.5vw, 3rem)` Crimson Pro 600
- Body: `1.05rem` / `1.85` line-height / Crimson Pro 400

## Visual Language
- **Botanical line art:** Thin stroke leaf, mushroom, and herb silhouettes at `opacity: 0.1` in section backgrounds
- **Handmade texture:** Subtle paper grain overlay `opacity: 0.3` on hero sections
- **Organic borders:** `border-radius: 4px` on cards — slightly imperfect, not perfectly geometric
- **Warm brown rules:** `1px solid rgba(139,94,60,0.2)` horizontal dividers
- **Nature motifs:** `🌿` `🍂` `🌾` `🍄` used decoratively at low opacity
- **Warm shadows:** `0 6px 24px rgba(80,40,10,0.1)` — rich, earthy

## Layout Principles
- Organic asymmetry — avoid perfect grids, prefer editorial layouts
- Generous breathing room: `96px` vertical padding
- Images: slightly desaturated, warm-toned, with soft `border-radius: 8px`
- Max-width `1100px` / `32px` side padding — slightly narrower for coziness

## Component Patterns
**Buttons:**
- Primary: `#8b5e3c` bg / `#fdf6ee` text / `border-radius: 4px` / Crimson Pro 600
- Ghost: transparent / `1px solid rgba(139,94,60,0.35)` / brown text
- Hover: `translateY(-2px)` + deeper warm shadow

**Cards:** White / `1px solid rgba(139,94,60,0.12)` / `border-radius: 8px` / warm shadow / thin brown top edge

**Inputs:** `#fdf6ee` bg / `1px solid rgba(139,94,60,0.2)` / `border-radius: 6px` / focus: `border-color: #8b5e3c`

## Motion & Interaction
- Entrance: `translateY(20px) opacity(0)` → normal / `0.7s ease` / stagger `0.1s`
- No fast or sharp animations — everything unhurried
- Hover: `translateY(-4px)` / shadow warms slightly
- Transitions: `0.35s ease`

## Voice & Copy Tone
- **Tone:** Gentle, grounded, poetic. Speaks of craft, slowness, and care.
- **Headlines:** Lowercase or sentence case. Evocative imagery. 4–8 words.
- **CTAs:** "Gather & Explore", "Find Your Thing", "Shop the Collection", "Begin"
- **Avoid:** Tech language, startup energy, anything rushed or aggressive

**Examples:** "Made with unhurried care." / "From the garden to your door." / "Good things, grown slowly."

## CSS Starter
```css
:root {
  --bg:           #fdf6ee;
  --surface:      #ffffff;
  --surface-tint: #f5ead8;
  --text:         #3b2410;
  --text-mid:     #9b7d5a;
  --text-light:   #c4a07a;
  --brown:        #8b5e3c;
  --brown-light:  #b07840;
  --sage:         #7a9c5a;
  --sage-light:   #c8d8b0;
  --mushroom:     #c4a882;
  --border:       rgba(139,94,60,0.15);
  --shadow-soft:  0 6px 24px rgba(80,40,10,0.1);
  --shadow-lift:  0 16px 48px rgba(80,40,10,0.15);
  --radius:       8px;
  --font-display: 'Crimson Pro', serif;
  --font-body:    'Crimson Pro', serif;
  --transition:   0.35s ease;
}
```
