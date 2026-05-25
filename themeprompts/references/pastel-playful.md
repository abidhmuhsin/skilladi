# Pastel Playful
> Joy is a design system too.

## Overview
Pastel Playful is warm, energetic, and unapologetically cheerful. Inspired by toyshop branding, Gen Z social apps, and artisan bakery packaging. Soft peach, mint, and blush tones paired with rounded typography and springy animations. Perfect for consumer apps, creative tools, community platforms, and anything that needs to lower the barrier to entry with a smile.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#fffbf5` | Warm cream canvas |
| Surface | `#ffffff` | Cards, panels |
| Primary | `#ff9f43` | Main CTAs, highlights |
| Primary dark | `#e8832a` | Hover states |
| Mint | `#b5ead7` | Success, secondary |
| Blush | `#ffd6e0` | Tags, soft accent |
| Purple | `#a29bfe` | Feature highlights |
| Yellow | `#ffeaa7` | Fun callouts |
| Text | `#2d2d2d` | Near-black |
| Text mid | `#6b6b6b` | Secondary |
| Text light | `#aaaaaa` | Captions |

**Ratio:** 60% cream / 25% white surfaces / 15% colour accents.

## Typography
- **Display:** Nunito — weight 900 for hero, 800 for H2. Rounded terminals convey friendliness.
- **Body / UI:** Nunito — weight 500 body, 700 labels. Keep in-family for cohesion.
- **Script accent:** Pacifico — sparingly for product names or logo only.
- **Eyebrows:** Nunito 800, `0.14em` letter-spacing, uppercase, `0.72rem`

**Scale:**
- Hero: `clamp(2.8rem, 5vw, 4rem)` Nunito 900
- H2: `clamp(2rem, 3.5vw, 3rem)` Nunito 900
- H3: `1.2rem` Nunito 800
- Body: `1rem` / `1.7` line-height / Nunito 500

## Visual Language
- **Blob shapes:** Organic `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%` as background decoration
- **Confetti:** Small coloured dots absolutely positioned at low opacity in hero zones
- **Emoji as design elements:** First-class in headings and CTAs
- **Pill everything:** `border-radius: 100px` on buttons, badges, inputs
- **Soft multi-blob gradients:** `radial-gradient` clusters of mint, blush, orange at section corners
- **Coloured shadows:** Tinted to match their element — `0 8px 24px rgba(255,159,67,0.35)`

## Layout Principles
- Friendly centred or gently offset grids
- Staggered card grids feel natural
- Section padding: `80–96px` vertical — cozy not cavernous
- Max content width `1200px` / `24px` side padding

## Component Patterns
**Buttons:**
- Primary: `linear-gradient(135deg, #ff9f43, #ff7675)` / white text / `border-radius: 100px` / Nunito 800
- Secondary: white bg / `border-radius: 100px` / dark text / soft shadow
- Hover: `translateY(-3px) scale(1.02)` + stronger coloured shadow

**Cards:** White / `border-radius: 20px` / `box-shadow: 0 8px 32px rgba(0,0,0,0.07)` / hover `translateY(-8px)` / coloured top accent strip

**Inputs:** White / `border-radius: 12px` / `border: 1.5px solid rgba(0,0,0,0.08)` / focus: `border-color: #ff9f43` + soft orange ring

**Chips:** Tinted bg + tinted border / `border-radius: 100px` / Nunito 700

## Motion & Interaction
- Entrance: `translateY(30px) opacity(0)` → normal / `0.6s ease` / stagger `0.1s`
- Hover cards: `translateY(-8px) scale(1.01)` — bouncy
- Active press: `scale(0.97)` — tactile feedback
- Feature icons: gentle `translateY` bob, `1.5s infinite ease-in-out`

## Voice & Copy Tone
- **Tone:** Warm, encouraging, fun, zero-jargon. Like a helpful friend.
- **Headlines:** Title case, upbeat, often include emoji
- **CTAs:** "Get Started Free 🎉", "Try It Now", "Let's Go!", "Create Something"
- **Avoid:** Technical language, corporate speak, anything intimidating

**Examples:** "Make something amazing today!" / "It's easier than you think." / "Your ideas, beautifully made."

## CSS Starter
```css
:root {
  --bg:           #fffbf5;
  --surface:      #ffffff;
  --orange:       #ff9f43;
  --orange-dark:  #e8832a;
  --mint:         #b5ead7;
  --blush:        #ffd6e0;
  --purple:       #a29bfe;
  --yellow:       #ffeaa7;
  --text:         #2d2d2d;
  --text-mid:     #6b6b6b;
  --shadow-soft:  0 8px 32px rgba(0,0,0,0.07);
  --shadow-lift:  0 20px 60px rgba(0,0,0,0.12);
  --shadow-warm:  0 8px 24px rgba(255,159,67,0.35);
  --radius-md:    20px;
  --radius-pill:  100px;
  --font-display: 'Nunito', sans-serif;
  --font-body:    'Nunito', sans-serif;
  --transition:   0.25s ease;
}
```
