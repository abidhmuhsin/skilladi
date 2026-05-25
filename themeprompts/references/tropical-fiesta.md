# Tropical Fiesta
> Sun-soaked, salt-kissed, and bursting at the seams with colour.

## Overview
Tropical Fiesta is unapologetic celebration — the visual equivalent of a mango smoothie by the ocean with carnival music in the background. Vibrant turquoise, hot coral, lime green, and mango yellow collide in a maximalist tropical explosion. Inspired by Latin American graphic design, Caribbean festival culture, and tropical resort branding at its most exuberant. Use for travel brands, food and beverage, event platforms, leisure apps, and any brand that needs to radiate joy and warmth.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#fff8f0` | Warm cream canvas |
| Surface | `#ffffff` | Cards, panels |
| Text | `#1a2010` | Deep forest green-black |
| Text mid | `#4a6040` | Secondary copy |
| Coral | `#ff5a3c` | Primary accent |
| Turquoise | `#00c4b4` | Secondary accent |
| Mango | `#ffb830` | Feature highlight |
| Lime | `#78d438` | Fresh accent |
| Deep teal | `#008a80` | Dark supporting |
| Papaya | `#ff8a60` | Soft warm accent |
| Border | `rgba(255,90,60,0.15)` | Coral-tinted borders |

**Ratio:** 40% white, 30% teal/turquoise, 20% coral, 10% mango + lime accents.

## Typography
- **Display:** Lobster Two — weight 400 italic. Festive, curvy, instantly warm.
- **Body:** Nunito — weight 400 body, 700 UI. Approachable and reads beautifully in tropical contexts.
- **Eyebrows:** Nunito 800, `0.18em` letter-spacing, uppercase, `0.72rem`, coral

**Scale:**
- Hero: `clamp(3rem, 6vw, 5rem)` Lobster Two italic
- H2: `clamp(2rem, 3.5vw, 3.2rem)` Lobster Two
- Body: `1.02rem` / `1.75` line-height / Nunito 400

## Visual Language
- **Tropical leaf shapes:** Bold tropical leaf SVG silhouettes at `opacity: 0.12` at section corners
- **Organic blobs:** `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%` shapes in turquoise or coral at 10% opacity
- **Zigzag pattern strips:** CSS zigzag or wavy border between sections in coral or turquoise
- **Fruit motifs:** Decorative pineapple, palm, and flower icons at accent color
- **Color block backgrounds:** Full-section turquoise or coral backgrounds for feature sections
- **Coloured shadows:** `0 10px 32px rgba(255,90,60,0.3)` — warm, vivid, no grey

## Layout Principles
- Energetic, layered layouts with intentional visual density
- Section padding: `80–96px` — energetic pacing
- Staggered card grids; some cards rotated `1–2deg`
- Max-width `1200px` / `24px` side padding
- Images: vivid, saturated, `border-radius: 20px` with colourful shadow
- Alternate section backgrounds between cream, turquoise, and coral

## Component Patterns
**Buttons:**
- Primary: `linear-gradient(135deg, #ff5a3c, #ff8a60)` / white text / `border-radius: 100px` / Nunito 800 / `box-shadow: 0 8px 24px rgba(255,90,60,0.4)`
- Turquoise: `#00c4b4` bg / white text / `border-radius: 100px` / same shadow in teal
- Hover: `translateY(-4px) scale(1.02)` + shadow intensifies

**Cards:** White / `border-radius: 20px` / `box-shadow: 0 8px 32px rgba(0,0,0,0.08)` / colourful top stripe rotating through coral/teal/mango

**Inputs:** White / `border-radius: 12px` / `border: 1.5px solid rgba(255,90,60,0.2)` / focus: `border-color: #ff5a3c` + coral ring

**Tags:** Turquoise or coral bg / white text / `border-radius: 100px` / Nunito 700

## Motion & Interaction
- Entrance: `translateY(30px) opacity(0)` → normal / `0.6s ease` / stagger `0.1s`
- Leaf elements: gentle sway `rotate(-3deg) → rotate(3deg)` / `4s ease-in-out infinite alternate`
- Hover cards: `translateY(-8px)` + shadow brightens in color
- Button hover: springy `scale(1.05)` with bouncy cubic-bezier
- Transitions: `0.3s ease`

## Voice & Copy Tone
- **Tone:** Warm, welcoming, bursting with energy. Like a hug from a friend on a beach.
- **Headlines:** Title case, expressive, sensory. 4–7 words.
- **CTAs:** "Dive In", "Explore Now", "Get the Vibe", "Let's Go"
- **Avoid:** Formality, restraint, monochrome thinking, corporate speak

**Examples:** "Life's too short for boring." / "Colour your world differently." / "Where every day feels like a festival."

## CSS Starter
```css
:root {
  --bg:           #fff8f0;
  --surface:      #ffffff;
  --text:         #1a2010;
  --text-mid:     #4a6040;
  --coral:        #ff5a3c;
  --turquoise:    #00c4b4;
  --mango:        #ffb830;
  --lime:         #78d438;
  --teal:         #008a80;
  --papaya:       #ff8a60;
  --border:       rgba(255,90,60,0.15);
  --shadow-coral: 0 8px 24px rgba(255,90,60,0.3);
  --shadow-teal:  0 8px 24px rgba(0,196,180,0.3);
  --radius:       20px;
  --radius-pill:  100px;
  --font-display: 'Lobster Two', serif;
  --font-body:    'Nunito', sans-serif;
  --transition:   0.3s ease;
}
```
