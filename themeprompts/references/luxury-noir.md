# Luxury Noir
> Dark elegance where gold whispers in the shadows.

## Overview
Luxury Noir is a high-end dark aesthetic built on near-black backgrounds, champagne text, and restrained gold accents. It draws from premium editorial design, private-label branding, and five-star hospitality. Every element earns its place. Silence and negative space are as important as the content itself. The mood is aspirational, mysterious, and timeless.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0d0d0d` | 80% of all surfaces |
| Surface / card | `#161616` | Elevated panels, cards |
| Surface raised | `#1e1e1e` | Modals, dropdowns |
| Text primary | `#f5efe0` | All body and heading copy |
| Text secondary | `#888880` | Captions, metadata |
| Text muted | `#444440` | Disabled, placeholders |
| Accent — gold | `#c9a84c` | CTAs, highlights, icons |
| Accent — pale gold | `#e8d08a` | Hover states |
| Accent — deep gold | `#a8883c` | Active, pressed |
| Border | `rgba(201,168,76,0.15)` | All borders |
| Ambient glow | `rgba(201,168,76,0.08)` | Radial bg decorations |

**Ratio:** 80% near-black / 15% champagne / 5% gold.

## Typography
- **Display:** Playfair Display — italic variant preferred, weight 400. For all hero and section headings.
- **Body / UI:** Cormorant Garamond — weight 300 body, weight 500 labels. Letter-spacing `0.04em`.
- **Eyebrows:** Cormorant 500, `0.22em` letter-spacing, uppercase, `0.65rem`.

**Scale:**
- Hero: `clamp(3rem, 6vw, 5rem)` italic Playfair
- H2: `clamp(2rem, 4vw, 3.2rem)` Playfair
- H3: `1.4rem` Cormorant 500
- Body: `1rem` / `1.8` line-height / Cormorant 300

## Visual Language
- **Gold rule lines:** `linear-gradient(90deg, transparent, #c9a84c, transparent)` — 1px, never solid
- **Radial glows:** One per section max, `rgba(201,168,76,0.08)` at corners
- **Diamond ornaments:** `✦` or `◆` at 0.3 opacity for section breaks
- **Thin circle frames:** `border: 1px solid rgba(201,168,76,0.2); border-radius: 50%`
- **Zero rounded buttons** — `border-radius: 2px` maximum on all elements
- **No background gradients** — flat dark surfaces only
- **Padding feels excessive** — min `120px` vertical per section

## Layout Principles
- Asymmetric editorial grid — offset content intentionally, never perfectly centered heroes
- Column gaps `48px+`, content max-width `1200px` with `48px` side padding
- Alternate `#0d0d0d` and `#161616` sections for perceived depth
- Sticky nav: dark + `backdrop-filter: blur(20px)` + hairline gold bottom border
- Decorative elements layered behind content with strict `z-index` discipline

## Component Patterns
**Buttons:**
- Primary: `linear-gradient(135deg, #c9a84c, #a8883c)` / black text / `border-radius: 2px` / uppercase Cormorant `0.15em` spacing
- Ghost: transparent / `1px solid rgba(201,168,76,0.4)` / gold text
- Text: gold color / animated underline on hover

**Cards:** `#161616` bg / `1px solid rgba(201,168,76,0.1)` border / 1px gold gradient top edge / hover lifts `translateY(-6px)`

**Inputs:** `#0d0d0d` bg / `1px solid #2a2a2a` border / focus turns border `#c9a84c` — no glow, just color

**Badges:** `rgba(201,168,76,0.1)` bg / `1px solid rgba(201,168,76,0.25)` / sharp corners

**Dividers:** Always the gradient rule — never a solid `<hr>`

## Motion & Interaction
- Entrance: `translateY(20px) opacity(0)` → normal, `0.8s ease`, stagger `0.1s`
- All transitions: `0.3s ease` — consistent, never faster
- Hover buttons: `translateY(-2px)` + deeper shadow. Never scale.
- Gold pulse: `opacity 0.6→1.0`, `3s infinite ease-in-out` on decorative gold elements
- No bouncing, no spring — only `ease` or `cubic-bezier(0.4,0,0.2,1)`

## Voice & Copy Tone
- **Tone:** Understated, precise, authoritative, exclusive. No exclamation marks. No emoji.
- **Headlines:** Sentence case, 2–5 words. Declarative.
- **CTAs:** "Begin", "Discover", "Reserve", "Explore the Collection"
- **Avoid:** Superlatives, urgency ("limited time!"), casual contractions

**Examples:** "Crafted for the discerning." / "Where detail becomes distinction." / "Fewer things. Better."

## CSS Starter
```css
:root {
  --bg:           #0d0d0d;
  --surface:      #161616;
  --surface-hi:   #1e1e1e;
  --text:         #f5efe0;
  --text-mid:     #888880;
  --text-muted:   #444440;
  --gold:         #c9a84c;
  --gold-light:   #e8d08a;
  --gold-dark:    #a8883c;
  --border:       rgba(201,168,76,0.15);
  --glow:         rgba(201,168,76,0.08);
  --radius:       2px;
  --shadow:       0 20px 60px rgba(0,0,0,0.5);
  --font-display: 'Playfair Display', serif;
  --font-body:    'Cormorant Garamond', serif;
  --transition:   0.3s ease;
}
```
