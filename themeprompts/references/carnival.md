# Carnival
> Roll up, roll up — the greatest show on earth.

## Overview
Carnival is the visual energy of vintage circus posters, fairground banners, and travelling big-top showmanship. **Warm cream and white canvas punched with bold crimson and black** — the aesthetic is print-first, poster-loud, and festively tactile. Gold and electric yellow are reserved for accent moments: star bursts, highlights, and CTAs. Inspired by 1920s American circus lithographs, Venetian street theatre, and hand-lettered fairground signage. Use for entertainment platforms, event companies, gaming brands, ticketing apps, and any product that needs to deliver excitement and theatre from the very first pixel.

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Background | `#fdf0e0` | Warm circus cream (paper canvas) |
| Surface | `#ffffff` | Cards, elevated panels |
| Surface tint | `#fae4c8` | Warm cream tint sections |
| Text | `#1a0808` | Near-black — ink on paper |
| Text mid | `#8b1a1a` | Deep crimson secondary copy |
| Text light | `#b05030` | Captions, metadata |
| Crimson | `#c42040` | Primary accent — headlines, banners |
| Crimson dark | `#8b1530` | Hover, deep crimson moments |
| Gold | `#f0c040` | Secondary accent — stars, CTAs, highlights |
| Gold dark | `#c48820` | Hover gold |
| Royal purple | `#8040c0` | Tertiary accent — chips, tags |
| Electric yellow | `#f8e840` | Spotlight highlight — use sparingly |
| Black | `#1a0808` | Strong borders, bold type, stripe colour |
| Border | `rgba(196,32,64,0.2)` | Crimson outlines |

**Ratio:** 65% warm cream / 20% crimson + black type and banners / 15% gold + purple accents.

## Typography
- **Display:** Alfa Slab One — massive, theatrical, impossible to ignore. The barker's voice in type form.
- **Body:** Libre Baskerville — weight 400. Classical legibility under the big top.
- **Eyebrows:** Libre Baskerville 700 italic, `0.15em` letter-spacing, uppercase, `0.72rem`, crimson

**Scale:**
- Hero: `clamp(3rem, 6vw, 6rem)` Alfa Slab One — deep crimson or near-black
- H2: `clamp(2rem, 4vw, 3.5rem)` Alfa Slab One
- Body: `1rem` / `1.8` line-height / Libre Baskerville 400

## Visual Language
- **Circus stripe banner:** Bold alternating red/white or red/cream horizontal stripes at `8–12px` band height — the defining motif. Used in hero backgrounds, section headers, card tops, and nav accents.
- **Star bursts:** Eight-pointed gold star SVGs at section transitions and headlines — `★` ornaments in gold, used as dividers and decorations.
- **Vintage poster border:** Double-rule frame `border: 3px solid var(--crimson)` with inner `1px solid var(--gold)` offset — poster mount aesthetic.
- **Halftone texture:** Dot pattern at `opacity: 0.04` over cream backgrounds — aged lithograph feel.
- **Gold ribbon dividers:** `border-top: 3px solid var(--gold)` with `★` ornaments centred — velvet rope aesthetic.
- **Dramatic shadows:** `0 8px 32px rgba(196,32,64,0.2)` on cards — warm crimson cast.
- **Ticket stub shape:** Cards with a circular notch cutout on the left edge via `clip-path` or `border-radius` trick.

## Layout Principles
- Stage-like sections — everything feels like a reveal or an act
- Generous vertical padding: `100–120px` — each act needs its moment
- Center-stage layouts for hero content; asymmetric for supporting sections
- Max-width `1200px` / `32px` side padding
- **Hero background:** Wide circus stripe block (crimson/cream alternating), not a solid or dark fill
- Bold, full-width stripe banner at the very top of the page — 40–60px tall, red/white stripes, acts as a pageant ribbon

## Component Patterns
**Buttons:**
- Primary: `#c42040` bg / `#fdf0e0` cream text / `border-radius: 4px` / Alfa Slab One / `box-shadow: 0 4px 16px rgba(196,32,64,0.35)`
- Gold: `linear-gradient(135deg, #f0c040, #c48820)` / dark text / same treatment
- Ghost: `transparent` / `2px solid var(--crimson)` / crimson text / hover fills crimson
- Hover: `box-shadow` intensifies + `translateY(-2px)` — theatrical

**Cards:** White bg / `1px solid rgba(196,32,64,0.18)` / `border-radius: 8px` / crimson top stripe (4–6px) / warm shadow

**Inputs:** `#fdf0e0` bg / `1px solid rgba(196,32,64,0.25)` / focus: `border-color: #c42040` + light crimson glow

**Dividers:** Gold rule or alternating `★` ornaments on cream — always decorative, never minimal

**Nav:** Cream background with a thin top stripe in crimson or stripe pattern. Logo in Alfa Slab One crimson.

## Motion & Interaction
- Entrance: `scale(0.94) opacity(0)` → normal / `0.6s cubic-bezier(0.4,0,0.2,1)` / stagger `0.1s`
- Hover: `translateY(-3px)` + shadow warms and deepens — theatrical amplification
- Button hover: `box-shadow` blooms + `scale(1.02)` — the crowd cheers
- Transitions: `0.35s ease`
- No dark overlays or glow effects — light canvas stays light

## Voice & Copy Tone
- **Tone:** Showman energy — bold, theatrical, full of promise. Step right up!
- **Headlines:** Title Case or ALL CAPS. Short, punchy, declarative. 3–5 words.
- **CTAs:** "STEP RIGHT IN!", "GET YOUR TICKETS", "ENTER THE SHOW", "CLAIM YOUR SEAT", "START NOW"
- **Avoid:** Understatement, dark/gothic language, anything that whispers when it should shout

**Examples:** "The Show Must Go On." / "Greatest Show on Earth." / "Roll Up. Roll Up." / "Tonight, everything changes."

## CSS Starter
```css
:root {
  --bg:           #fdf0e0;
  --surface:      #ffffff;
  --surface-tint: #fae4c8;
  --text:         #1a0808;
  --text-mid:     #8b1a1a;
  --text-light:   #b05030;
  --crimson:      #c42040;
  --crimson-dark: #8b1530;
  --gold:         #f0c040;
  --gold-dark:    #c48820;
  --purple:       #8040c0;
  --electric:     #f8e840;
  --border:       rgba(196,32,64,0.2);
  --shadow:       0 8px 32px rgba(196,32,64,0.18);
  --shadow-lift:  0 16px 48px rgba(196,32,64,0.25);
  --radius:       8px;
  --font-display: 'Alfa Slab One', serif;
  --font-body:    'Libre Baskerville', serif;
  --ease:         0.35s ease;

  /* Stripe pattern — use as background-image on banners */
  --stripe: repeating-linear-gradient(
    90deg,
    var(--crimson)    0px,
    var(--crimson)    24px,
    var(--bg)         24px,
    var(--bg)         48px
  );
}
```

## Common Mistakes to Avoid
- **Do not** use `#1a0a10` or any dark color as the page background — the canvas is always cream/white
- **Do not** make body text light/cream — text is dark ink (`#1a0808`) on a light background
- **Do not** omit the stripe motif — it is the single most recognisable element of this theme
- **Do not** build a dark-mode or gothic interpretation — Carnival is festive and bright
