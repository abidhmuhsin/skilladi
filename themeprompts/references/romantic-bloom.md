# Romantic Bloom
> Where softness is a strength and beauty lives in every detail.

## Overview
Romantic Bloom is a warm, botanical-inspired aesthetic rooted in blush, ivory, and dusty rose. It draws from editorial florals, fine stationery, and cottage garden light. The mood is tender, elegant, and emotionally warm — never saccharine. It works equally well for lifestyle brands, creative portfolios, beauty products, and content-rich editorial sites.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#fdf6f0` | Primary canvas |
| Surface | `#ffffff` | Cards, panels |
| Surface tint | `#fde8e8` | Blush wash panels |
| Text primary | `#3d2b2b` | Headings, body |
| Text mid | `#8c6b6b` | Secondary copy |
| Text light | `#b89898` | Captions, metadata |
| Accent — rose | `#c47a7a` | Primary interactive |
| Accent — blush | `#e8a0a0` | Hover, highlights |
| Accent — sage | `#c8d8c0` | Secondary accent |
| Accent — champagne | `#f5e6d0` | Warm surface tint |
| Border | `rgba(196,122,122,0.15)` | Subtle outlines |

**Ratio:** 70% ivory-cream / 20% blush surfaces / 10% rose accents.

## Typography
- **Display:** DM Serif Display — italic preferred for hero headings, weight 400. Conveys warmth without being heavy.
- **Editorial accent:** Cormorant Garamond — italic, weight 300. For pull quotes, captions, decorative labels.
- **Body / UI:** Lato — weight 300 (body), 700 (UI labels). Clean contrast to the editorial serifs.
- **Eyebrows:** Lato 700, `0.18em` letter-spacing, uppercase, `0.7rem`

**Scale:**
- Hero: `clamp(2.8rem, 5vw, 4.5rem)` DM Serif italic
- H2: `clamp(2rem, 3.5vw, 3rem)` DM Serif
- Accent quote: `1.6rem` Cormorant italic 300
- Body: `1rem` / `1.8` line-height / Lato 300

## Visual Language
- **Floral ornaments:** `✿` `✾` `🌸` used as section breaks and decorative dividers at low opacity
- **Gradient blush washes:** `radial-gradient(ellipse at top right, rgba(232,160,160,0.2), transparent)`
- **Botanical watermarks:** Large faint floral shapes (opacity `0.06–0.1`) behind hero sections
- **Petal dividers:** `✿ · ✾ · ✿` centered text dividers between sections
- **Thin rose borders:** `1px solid rgba(196,122,122,0.15)` — never solid dark borders
- **Soft shadows:** `0 8px 32px rgba(100,50,50,0.08)` — warm-tinted, never cold grey

## Layout Principles
- Centered, symmetrical layouts feel natural — but use intentional asymmetry for hero images
- Generous whitespace: `96px` vertical section padding minimum
- Cards: `border-radius: 24px` — soft, rounded, never sharp
- Images: always with soft `border-radius: 16px+`, slight rotation (`rotate(-1deg)`) for organic feel
- Max content width `1200px` / side padding `28px`
- Let text breathe — never compress line heights

## Component Patterns
**Buttons:**
- Primary: `linear-gradient(135deg, #e8a0a0, #c47a7a)` / white text / `border-radius: 100px` / Lato 700
- Ghost: white bg / `1.5px solid rgba(196,122,122,0.3)` / rose text / `border-radius: 100px`
- Hover: `translateY(-3px)` + warmer shadow

**Cards:** White bg / `1px solid rgba(196,122,122,0.1)` / `border-radius: 24px` / warm shadow / thin rose top-edge accent line

**Inputs:** White bg / `1.5px solid rgba(196,122,122,0.2)` / `border-radius: 12px` / focus: `border-color: #c47a7a` + `box-shadow: 0 0 0 3px rgba(196,122,122,0.1)`

**Dividers:** `✿ · ✾ · ✿` text ornament, centered, color `#c47a7a` at 50% opacity

## Motion & Interaction
- Entrance: gentle `translateY(24px) opacity(0)` → normal, `0.7s ease`, stagger `0.12s`
- Hover cards: `translateY(-8px)` / shadow deepens from `soft` to `lift`
- Petal animations: absolute positioned decorative florals with `translateY` float cycles, `5–7s infinite ease-in-out`
- Button hover: `translateY(-3px)` + `box-shadow` warms
- No sharp or jarring motion — all curves, all softness

## Voice & Copy Tone
- **Tone:** Warm, personal, poetic, genuine. Speaks like a close friend with taste.
- **Headlines:** Sentence case, emotionally resonant. 4–8 words.
- **CTAs:** "Begin your story", "Explore", "Let's create something beautiful"
- **Avoid:** Corporate language, urgency, bold claims, anything clinical

**Examples:** "For the moments that matter most." / "Beauty in every considered detail." / "Where your story begins."

## CSS Starter
```css
:root {
  --bg:           #fdf6f0;
  --surface:      #ffffff;
  --surface-tint: #fde8e8;
  --text:         #3d2b2b;
  --text-mid:     #8c6b6b;
  --text-light:   #b89898;
  --rose:         #c47a7a;
  --rose-light:   #e8a0a0;
  --sage:         #c8d8c0;
  --champagne:    #f5e6d0;
  --border:       rgba(196,122,122,0.15);
  --shadow-soft:  0 8px 32px rgba(100,50,50,0.08);
  --shadow-lift:  0 20px 60px rgba(100,50,50,0.14);
  --radius-sm:    12px;
  --radius-md:    24px;
  --radius-pill:  100px;
  --font-display: 'DM Serif Display', serif;
  --font-accent:  'Cormorant Garamond', serif;
  --font-body:    'Lato', sans-serif;
  --transition:   0.3s ease;
}
```
