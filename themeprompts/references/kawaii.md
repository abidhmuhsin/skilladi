# Kawaii
> Soft, sweet, and too cute to resist.

## Overview
Kawaii (Japanese: cute) takes the visual language of Japanese pop culture, Harajuku fashion, and plushie aesthetics to its delightful extreme. Pastel bubble-gum colours, rounded-to-the-point-of-melting corners, chibi character motifs, and type that feels hand-drawn with a felt-tip pen. Use for children's products, gifting platforms, character merchandise, creative apps for young audiences, and any brand that wants to feel completely irresistible and emotionally warming.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#fff5fa` | Blush white canvas |
| Surface | `#ffffff` | Cards, panels |
| Text | `#3a2040` | Deep warm purple-black |
| Text mid | `#8a607a` | Secondary copy |
| Bubble pink | `#ff80b4` | Primary accent |
| Lavender | `#c4a0ff` | Secondary accent |
| Mint | `#80e8c0` | Fresh accent |
| Baby blue | `#80c8ff` | Cool accent |
| Peach | `#ffb880` | Warm accent |
| Yellow | `#ffe880` | Sunny accent |
| Border | `rgba(255,128,180,0.2)` | Pink-tinted borders |

**Vibe:** Cotton candy pastels. Everything is soft. Nothing has sharp edges. Pure sugary sweetness.

## Typography
- **Display:** Boogaloo — weight 400. Looks hand-drawn, bouncy, like a friend wrote it.
- **Body:** Nunito — weight 400–600. Rounded terminals are essential to the kawaii aesthetic.
- **Eyebrows:** Nunito 700, `0.1em` letter-spacing, `0.75rem`, bubble pink

**Scale:**
- Hero: `clamp(2.8rem, 5.5vw, 4.5rem)` Boogaloo
- H2: `clamp(2rem, 3.5vw, 3rem)` Boogaloo
- Body: `1.02rem` / `1.8` line-height / Nunito 400

## Visual Language
- **Bubble borders:** `border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%` — cloud and bubble shapes
- **Star and heart accents:** `♡` `✦` `★` `◦` in pink or lavender, scattered lightly
- **Cloud shapes:** CSS `clip-path` or `border-radius` clouds as section dividers or card backgrounds
- **Pastel polka dots:** `radial-gradient(circle, #ff80b4 2px, transparent 2px)` / `24px 24px` at 8% opacity
- **Character spaces:** Designated areas for mascot or character illustrations (placeholder circles with pastel fills)
- **Soft shadows:** `0 8px 24px rgba(255,128,180,0.25)` — pink-tinted, never grey

## Layout Principles
- Round, friendly, impossibly soft layouts
- Generous padding: `80–96px` — kawaii needs room to breathe and smile
- Cards: heavy `border-radius: 32px` — never angular
- Staggered grid with slight rotation (`rotate(1deg)` alternating) for handmade feel
- Max-width `1100px` / `28px` side padding
- Emojis as first-class design elements alongside text

## Component Patterns
**Buttons:**
- Primary: `linear-gradient(135deg, #ff80b4, #c4a0ff)` / white text / `border-radius: 100px` / Nunito 800 / `box-shadow: 0 6px 20px rgba(255,128,180,0.4)`
- Secondary: `#80e8c0` bg / deep text / `border-radius: 100px` — mint variant
- Hover: `scale(1.06) translateY(-3px)` — bouncy pop

**Cards:** White / `border-radius: 32px` / `2px solid rgba(255,128,180,0.15)` / pink shadow / colourful pastel top strip

**Inputs:** White / `border-radius: 100px` / `border: 2px solid rgba(255,128,180,0.2)` / focus: `border-color: #ff80b4` + pink glow ring

**Tags:** Pastel fill (rotate through all palette) / `border-radius: 100px` / Nunito 700 / no border

## Motion & Interaction
- Entrance: `scale(0.85) opacity(0)` → normal / `0.5s cubic-bezier(0.34,1.56,0.64,1)` — springy, bouncy
- Hover elements: gentle `translateY(-6px) scale(1.03)` with spring easing
- Decorative elements: `translateY(0) → translateY(-8px)` float / `2s ease-in-out infinite alternate`
- Button press: `scale(0.94)` — squish feedback
- Transitions: `0.25s cubic-bezier(0.34,1.56,0.64,1)` — always bouncy

## Voice & Copy Tone
- **Tone:** Sweet, enthusiastic, warm, encouraging. Like getting a hug from a plush toy.
- **Headlines:** Lowercase or sentence case. Include emoji freely. 3–6 words.
- **CTAs:** "let's go! ✨", "yes please! 🌸", "gimme gimme", "so cute, I want it"
- **Avoid:** Formality, darkness, anything intimidating or cold

**Examples:** "so soft, so good ♡" / "everything is cuter here ✨" / "made with maximum love"

## CSS Starter
```css
:root {
  --bg:           #fff5fa;
  --surface:      #ffffff;
  --text:         #3a2040;
  --text-mid:     #8a607a;
  --pink:         #ff80b4;
  --lavender:     #c4a0ff;
  --mint:         #80e8c0;
  --baby-blue:    #80c8ff;
  --peach:        #ffb880;
  --yellow:       #ffe880;
  --border:       rgba(255,128,180,0.2);
  --shadow-soft:  0 8px 24px rgba(255,128,180,0.2);
  --shadow-lift:  0 20px 48px rgba(255,128,180,0.3);
  --radius:       32px;
  --radius-pill:  100px;
  --font-display: 'Boogaloo', sans-serif;
  --font-body:    'Nunito', sans-serif;
  --transition:   0.25s cubic-bezier(0.34,1.56,0.64,1);
}
```
