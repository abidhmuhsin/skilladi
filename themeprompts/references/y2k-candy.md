# Y2K Candy
> The internet before it grew up — chrome, candy, and dial-up dreams.

## Overview
Y2K Candy resurrects the chaotic optimism of early-2000s web aesthetics — chrome gradients, candy-colored translucent plastic, shiny buttons, and a sense that the future was going to be neon and beautiful. Influenced by early social media, flip phone interfaces, and pop stars in platform boots. Use for music and entertainment brands, nostalgia products, fashion labels, Gen Z-targeted apps, and any brand chasing playful, ironic, hyper-stylized energy.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#f0e8ff` | Soft lavender canvas |
| Surface | `#ffffff` | Cards, panels |
| Surface chrome | `rgba(255,255,255,0.6)` | Glossy glass panels |
| Text | `#1a0a2e` | Deep purple-black |
| Text mid | `#6a3a8a` | Secondary copy |
| Hot pink | `#ff48c4` | Primary accent |
| Cyber blue | `#48c8ff` | Secondary accent |
| Lime | `#88ff48` | Tertiary accent |
| Chrome | `linear-gradient(135deg, #e8e8e8, #ffffff, #c8c8c8)` | Metallic surface |
| Purple | `#a848ff` | Feature highlight |
| Border | `rgba(255,72,196,0.2)` | Pink-tinted borders |

**Vibe:** Chrome + candy transparency + hot pink + blue neon. Maximum gloss.

## Typography
- **Display:** Boogaloo — friendly, bouncy, unapologetically Y2K. For hero and section titles.
- **Body:** Quicksand — weight 500. Rounded terminals feel era-appropriate.
- **Eyebrows:** Quicksand 700, `0.15em` letter-spacing, uppercase, `0.72rem`

**Scale:**
- Hero: `clamp(3rem, 6vw, 5.5rem)` Boogaloo
- H2: `clamp(2rem, 4vw, 3.5rem)` Boogaloo
- Body: `1rem` / `1.7` line-height / Quicksand 500

## Visual Language
- **Chrome gradients:** `linear-gradient(135deg, #e8e8f0, #ffffff, #d0d0e8, #ffffff)` — metallic sheen on surfaces
- **Candy glass:** `backdrop-filter: blur(12px)` on `rgba(255,255,255,0.35)` — translucent plastic feel
- **Glossy buttons:** `linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 50%)` overlay on buttons
- **Star sparkles:** `✦` `⋆` scattered at low opacity, hot pink and cyber blue
- **Pixel borders:** `2px solid` outlines with slight shimmer on hover
- **Iridescent sheen:** `background: linear-gradient(90deg, #ff48c4, #48c8ff, #88ff48, #a848ff)` / `background-size: 200%` animated shimmer
- **Drop shadows:** Pink-tinted `0 8px 24px rgba(255,72,196,0.35)` on feature elements

## Layout Principles
- Cheerful, slightly overloaded layouts — negative space is underused
- Centered hero content with radiating decorative elements
- Rounded everything: cards `border-radius: 24px`, inputs `border-radius: 100px`
- Section padding: `80px` — energetic, not contemplative
- Max-width `1200px` / `24px` side padding
- Layer transparency: glass panels stacked over gradient backgrounds

## Component Patterns
**Buttons:**
- Primary: `linear-gradient(135deg, #ff48c4, #a848ff)` / white text / `border-radius: 100px` / glossy overlay / `box-shadow: 0 6px 20px rgba(255,72,196,0.4)`
- Chrome: `linear-gradient(135deg, #e8e8e8, #ffffff, #c8c8c8)` / dark text / `border: 1px solid rgba(255,255,255,0.8)`
- Hover: `scale(1.04)` + shadow intensifies + shimmer speeds up

**Cards:** `backdrop-filter: blur(16px)` / `rgba(255,255,255,0.5)` / `border: 1px solid rgba(255,255,255,0.7)` / `border-radius: 24px` / pink bottom glow

**Inputs:** `rgba(255,255,255,0.6)` bg / `border: 1.5px solid rgba(255,72,196,0.3)` / `border-radius: 100px` / focus: pink glow ring

**Tags/Chips:** Candy-pink or cyber-blue bg / white text / `border-radius: 100px` / glossy overlay

## Motion & Interaction
- Entrance: `scale(0.9) opacity(0)` → normal / `0.5s cubic-bezier(0.34,1.56,0.64,1)` — bouncy pop
- Shimmer: iridescent gradient `background-position` shift / `2s linear infinite`
- Hover cards: `translateY(-6px) scale(1.02)` + glow blooms
- Star sparkle: random `rotate` and `scale` pulses / `2–4s ease-in-out infinite`
- Transitions: `0.25s ease`

## Voice & Copy Tone
- **Tone:** Fun, ironic, energetic, with a knowing wink. Nostalgia + forward motion.
- **Headlines:** Mixed case or all-lowercase for extra casual energy. 3–6 words.
- **CTAs:** "omg yes", "let's go!!", "get it now", "ok I want this"
- **Avoid:** Corporate polish, minimalist restraint, anything that takes itself seriously

**Examples:** "the future looked like this." / "gloss. chrome. you." / "dial up the vibe."

## CSS Starter
```css
:root {
  --bg:           #f0e8ff;
  --surface:      #ffffff;
  --surface-glass:rgba(255,255,255,0.5);
  --text:         #1a0a2e;
  --text-mid:     #6a3a8a;
  --hot-pink:     #ff48c4;
  --cyber-blue:   #48c8ff;
  --lime:         #88ff48;
  --purple:       #a848ff;
  --chrome:       linear-gradient(135deg, #e8e8f0, #ffffff, #d0d0e8);
  --border:       rgba(255,72,196,0.2);
  --glow-pink:    rgba(255,72,196,0.35);
  --shadow:       0 8px 24px rgba(255,72,196,0.2);
  --radius:       24px;
  --radius-pill:  100px;
  --font-display: 'Boogaloo', sans-serif;
  --font-body:    'Quicksand', sans-serif;
  --transition:   0.25s ease;
}
```
