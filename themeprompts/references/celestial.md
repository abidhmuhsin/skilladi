# Celestial
> The cosmos as canvas — infinite depth, infinite wonder.

## Overview
Celestial draws from the visual language of space exploration, astronomy, and the sublime terror of the infinite universe. Deep indigo and near-black backgrounds punctuated by star fields, nebula gradients, and cosmic glow effects in purple, blue, and gold. Inspired by NASA imagery, science visualization, and luxury planetarium branding. Use for science and education platforms, space-related products, meditation and mindfulness apps, premium SaaS tools, and brands that want to feel vast, awe-inspiring, and limitless.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#06061a` | Deep space black-indigo |
| Surface | `#0d0d30` | Elevated cards |
| Surface light | `#141440` | Hover states, inputs |
| Text primary | `#e8e4ff` | Cool lavender white |
| Text mid | `#4a4880` | Secondary copy |
| Text muted | `#1e1c40` | Placeholders |
| Nebula purple | `#8b5cf6` | Primary accent |
| Star gold | `#fbbf24` | Secondary accent |
| Cosmic blue | `#3b82f6` | Tertiary accent |
| Stardust | `rgba(255,255,255,0.8)` | Star particles |
| Border | `rgba(139,92,246,0.2)` | Purple-tinted borders |
| Glow | `rgba(139,92,246,0.08)` | Ambient nebula glow |

**Gradient:** `radial-gradient(ellipse at top, #0d0d30, #06061a)` — depth and atmosphere.

## Typography
- **Display:** Cinzel — weight 400 for hero, 700 for emphasis. Roman inscriptions meet interstellar scales.
- **Body:** Raleway — weight 300 body, 500 UI. Elegant, precise, lightweight.
- **Eyebrows:** Raleway 600, `0.3em` letter-spacing, uppercase, `0.65rem`, nebula purple

**Scale:**
- Hero: `clamp(2.8rem, 5vw, 4.5rem)` Cinzel 400
- H2: `clamp(1.8rem, 3.5vw, 3rem)` Cinzel 700
- Body: `0.95rem` / `1.8` line-height / Raleway 300

## Visual Language
- **Star field:** Hundreds of 1–2px white dots at varying opacities — CSS or canvas based
- **Nebula blooms:** `radial-gradient(ellipse, rgba(139,92,246,0.15), rgba(59,130,246,0.08), transparent)` overlapping at section corners
- **Cosmic line art:** Thin constellation-style connecting lines between content elements
- **Gold starbursts:** `✦` `★` `⋆` in star gold at varying sizes and opacities
- **Glass panels:** `backdrop-filter: blur(20px)` on `rgba(13,13,48,0.7)` — looking through space station glass
- **Planetary rings:** CSS `border-radius: 50%` rings with gradient border for decorative orb elements

## Layout Principles
- Expansive, cinematic sections — `120–160px` vertical padding — as vast as space itself
- Content floats in deep backgrounds — use significant negative space
- Cards with subtle z-axis: slight overlap for dimensional depth
- Max-width `1280px` / `40px` side padding
- Images: processed with dark indigo overlay or desaturation + purple tint

## Component Patterns
**Buttons:**
- Primary: `linear-gradient(135deg, #7c3aed, #8b5cf6)` / white text / `border-radius: 6px` / `box-shadow: 0 0 24px rgba(139,92,246,0.4)`
- Ghost: transparent / `1px solid rgba(139,92,246,0.4)` / nebula purple text / hover: faint purple bg
- Hover: `box-shadow` blooms outward — nebula expanding

**Cards:** `rgba(13,13,48,0.7)` / `backdrop-filter: blur(20px)` / `1px solid rgba(139,92,246,0.15)` / `border-radius: 16px` / subtle purple top glow

**Inputs:** `#06061a` bg / `1px solid rgba(139,92,246,0.2)` / focus: `border-color: #8b5cf6` + `box-shadow: 0 0 0 3px rgba(139,92,246,0.1)`

**Dividers:** `linear-gradient(90deg, transparent, #8b5cf6, #3b82f6, transparent)` / 1px / animated shimmer

## Motion & Interaction
- Entrance: `translateY(20px) opacity(0)` → normal / `0.8s ease` / stagger `0.12s`
- Star twinkle: `opacity` pulse `0.4 → 1.0` / random `2–6s ease-in-out infinite`
- Nebula pulse: `scale(1 → 1.03) opacity` / very slow `8s ease-in-out infinite alternate`
- Hover glow: `box-shadow` nebula purple bloom over `0.4s ease`
- Transitions: `0.4s ease` — cosmic scale means nothing happens fast

## Voice & Copy Tone
- **Tone:** Awe-inspiring, visionary, vast. Speaks of scale and possibility.
- **Headlines:** Sentence case, poetic, conceptual. 3–6 words.
- **CTAs:** "Explore", "Begin", "Launch", "Discover the Universe"
- **Avoid:** Small thinking, casual language, urgency, emoji

**Examples:** "Beyond what you can see." / "Some questions are bigger than answers." / "Perspective changes everything."

## CSS Starter
```css
:root {
  --bg:           #06061a;
  --surface:      #0d0d30;
  --surface-hi:   #141440;
  --text:         #e8e4ff;
  --text-mid:     #4a4880;
  --text-muted:   #1e1c40;
  --nebula:       #8b5cf6;
  --star-gold:    #fbbf24;
  --cosmic-blue:  #3b82f6;
  --border:       rgba(139,92,246,0.2);
  --glow:         rgba(139,92,246,0.08);
  --shadow:       0 20px 60px rgba(0,0,0,0.6);
  --radius:       16px;
  --font-display: 'Cinzel', serif;
  --font-body:    'Raleway', sans-serif;
  --transition:   0.4s ease;
}
```
