# Midnight Garden
> Rare beauty that only blooms in the dark.

## Overview
Midnight Garden is moody, botanical luxury — deep forest greens, emerald glows, and gold accents against near-black backgrounds. Drawn from botanical illustration, dark academia, and high-end perfume branding. Use it for premium lifestyle products, exclusive memberships, editorial content, and any brand that wants to feel rare and sophisticated without the coldness of pure black.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#071a0f` | Deep forest canvas |
| Surface | `#0d2818` | Elevated cards |
| Surface light | `#122e1c` | Hover states, inputs |
| Text primary | `#e8f5e0` | Pale green-white |
| Text mid | `#3d6b4a` | Secondary copy |
| Text muted | `#1e3d28` | Placeholders |
| Accent emerald | `#6ee7a0` | Primary highlight |
| Accent gold | `#c9a84c` | Secondary accent |
| Border | `rgba(110,231,160,0.15)` | Subtle green borders |
| Glow | `rgba(110,231,160,0.08)` | Ambient decoration |

**Ratio:** 80% deep green-black / 15% pale text / 5% emerald + gold accents.

## Typography
- **Display:** Cormorant Garamond — weight 300 italic. Fragile, rare, beautiful.
- **Body:** Cormorant Garamond — weight 300 for copy, 500 for labels.
- **Eyebrows:** Cormorant 500 italic, `0.2em` letter-spacing, uppercase, `0.68rem`

**Scale:**
- Hero: `clamp(2.5rem, 5vw, 4.5rem)` Cormorant italic 300
- H2: `clamp(2rem, 3.5vw, 3.2rem)` Cormorant 300
- Body: `1rem` / `1.9` line-height / Cormorant 300

## Visual Language
- **Botanical silhouettes:** Faint vine/leaf shapes at `opacity: 0.07` at section corners
- **Emerald glow:** `radial-gradient(ellipse at corner, rgba(110,231,160,0.08), transparent)` — one per section
- **Gold hairline borders:** `1px solid rgba(201,168,76,0.15)` — never solid
- **Leaf scatter:** Unicode leaf characters `🍃` `✦` at very low opacity as ambient texture
- **Dark layering:** Use 3–4 shades of green-black to create depth: `#071a0f` → `#0d2818` → `#122e1c`
- **No bright whites** — `#e8f5e0` is the lightest surface used

## Layout Principles
- Asymmetric and organic — botanical forms rarely align perfectly
- Large hero sections with significant padding: `120px` vertical
- Cards slightly overlap their background sections for layered depth
- Max-width `1200px` / `32px` side padding
- Use `border-radius: 16px` on cards — organic, not geometric

## Component Patterns
**Buttons:**
- Primary: transparent / `1px solid rgba(110,231,160,0.4)` / emerald text / hover: `rgba(110,231,160,0.1)` bg
- Gold accent: transparent / `1px solid rgba(201,168,76,0.35)` / gold text
- Hover: `box-shadow: 0 0 20px rgba(110,231,160,0.15)` — glowing, atmospheric

**Cards:** `#0d2818` bg / `1px solid rgba(110,231,160,0.1)` / `border-radius: 16px` / top gold hairline

**Inputs:** `#071a0f` bg / `1px solid rgba(110,231,160,0.15)` / focus: border turns `#6ee7a0`

**Dividers:** Gold gradient rule `linear-gradient(90deg, transparent, #c9a84c, transparent)` / 1px height

## Motion & Interaction
- Entrance: `translateY(20px) opacity(0)` → normal / `0.8s ease` / stagger `0.15s`
- Botanical elements: slow parallax drift on scroll — `translateY(-20px)` at full scroll
- Hover glow: `box-shadow` emerald glow appears on hover over interactive elements
- Transitions: `0.4s ease` — unhurried, natural

## Voice & Copy Tone
- **Tone:** Poetic, rare, evocative. Speaks in images, not features.
- **Headlines:** Lowercase or sentence case. Metaphorical. 4–7 words.
- **CTAs:** "Enter the Garden", "Discover", "Explore", "Begin"
- **Avoid:** Superlatives, urgency, casual language, emoji

**Examples:** "Where rare things are found." / "Grown in darkness, revealed in light." / "For those who look closer."

## CSS Starter
```css
:root {
  --bg:           #071a0f;
  --surface:      #0d2818;
  --surface-hi:   #122e1c;
  --text:         #e8f5e0;
  --text-mid:     #3d6b4a;
  --text-muted:   #1e3d28;
  --emerald:      #6ee7a0;
  --gold:         #c9a84c;
  --border-green: rgba(110,231,160,0.15);
  --border-gold:  rgba(201,168,76,0.15);
  --glow-green:   rgba(110,231,160,0.08);
  --glow-gold:    rgba(201,168,76,0.08);
  --radius:       16px;
  --shadow:       0 20px 60px rgba(0,0,0,0.5);
  --font-display: 'Cormorant Garamond', serif;
  --font-body:    'Cormorant Garamond', serif;
  --transition:   0.4s ease;
}
```
