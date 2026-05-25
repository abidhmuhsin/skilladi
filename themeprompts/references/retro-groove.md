# Retro Groove
> Far out. Warm. Alive with color and curve.

## Overview

Retro Groove is a 1970s-influenced design system rooted in warmth, optimism, and expressive organic form. It pulls from the era's record covers, magazine layouts, and furniture catalogues: wide bold typefaces, oversized circular shapes, earthy-but-saturated palettes, and a general sense that things should feel handmade and joyful without being careless.

This system does not imitate — it translates. The 70s aesthetic has been refined for contemporary screen interfaces while preserving its funky, tactile energy. Use it for creative tools, music or podcast platforms, community spaces, food and lifestyle brands, and any product that wants to radiate warmth and personality.

## Color Palette

| Role          | Name           | Hex       | Usage Ratio |
|---------------|----------------|-----------|-------------|
| Background    | Warm Cream     | `#f5f0e0` | ~48%        |
| Surface       | Antique White  | `#ede6ce` | ~18%        |
| Surface Dark  | Biscuit        | `#d9ceaf` | ~8%         |
| Text Primary  | Dark Espresso  | `#2a1f0e` | ~12%        |
| Text Body     | Brown          | `#4a3520` | ~5%         |
| Text Muted    | Tan            | `#8a7050` | ~3%         |
| Primary       | Burnt Orange   | `#d4550a` | ~4%         |
| Primary Light | Terracotta     | `#e87840` | ~1%         |
| Secondary     | Mustard Yellow | `#e8b84b` | ~3%         |
| Tertiary      | Avocado Green  | `#6b7c2f` | ~2%         |
| Tertiary Light| Sage           | `#9aab58` | ~1%         |

**Usage notes:**
- Burnt Orange is the hero action color. It draws the eye and defines the brand moment.
- Mustard Yellow is the warm complement — great for highlights, badge fills, and decorative shapes.
- Avocado Green grounds the palette and prevents it from reading as Halloween. Use it for secondary actions, success states, and tertiary decorative elements.
- The creams dominate. The palette is warm from background up, so accents read as vivid even at moderate saturation.
- Avoid cool colors entirely. No blues, purples, or grays. Any neutrals must be warm-toned.

## Typography

**Display font:** Syne — modern but with a 70s-inflected geometry, slightly condensed at heavy weights
**Body font:** Syne or DM Sans for accessibility at body sizes
**Fallback stack:** `'Syne', 'Barlow', 'Arial Narrow', sans-serif`

| Scale Token   | Size     | Weight | Transform | Tracking    | Usage                      |
|---------------|----------|--------|-----------|-------------|----------------------------|
| `--t-hero`    | 5rem     | 800    | none      | -0.02em     | Hero/splash headlines      |
| `--t-h1`      | 3.5rem   | 700    | none      | -0.015em    | Page titles                |
| `--t-h2`      | 2.25rem  | 700    | none      | -0.01em     | Section headers            |
| `--t-h3`      | 1.5rem   | 700    | none      | 0           | Card titles                |
| `--t-body`    | 1.05rem  | 400    | none      | 0.01em      | Body copy                  |
| `--t-small`   | 0.875rem | 400    | none      | 0.02em      | Captions, metadata         |
| `--t-label`   | 0.75rem  | 700    | uppercase | 0.1em       | Button text, tags          |

**Rules:**
- Syne at 800 weight is the defining typographic moment — use it big. Hero text can go to 5–7rem on wide screens.
- Body text uses Syne at 400 or switches to DM Sans for long-form readability.
- Line height for display: 1.05–1.1 (tight, confident). Body: 1.7. Labels: 1.2.
- Sentence case for headings. ALL CAPS reserved for very short label strings only.
- Avoid thin weights. This system is full-bodied — weight 400 is the minimum.

## Visual Language

**Primary motifs:**
- **Large circles and arcs** — the signature shape of this system. Oversized circular forms (often bled off the edge of the layout) act as background shapes, section anchors, and decorative fills. They are never small or subtle.
- **Groovy curved dividers** — wavy freeform SVG paths (3–5 humps) in warm surface colors, used to transition between sections. More exaggerated than the Coastal Breeze wave — closer to a 70s blob.
- **Vinyl record motif** — concentric circles in dark espresso on cream, or cream on dark, at very low opacity as a watermark or background texture. Optional narrow radial lines reinforce the groove.
- **Half-circle cards and panels** — rectangular containers with one fully rounded end (border-radius on top or bottom at 50% of width). Used for feature callouts and profile cards.
- **Thick ruled underlines** — 6–8px solid color underlines on selected headings, in Mustard Yellow or Avocado Green. Not full-width — just under the text itself.
- **Starburst/badge shapes** — multi-point star or burst shapes (12–16 points) used as "feature" or "new" stamps. CSS clip-path or inline SVG.

**Textures:**
- Grain/noise at 6–8% opacity over all surfaces — heavier than other themes. Creates the impression of paper or fabric.
- Optional Risograph-style color overlapping (two shapes in different colors slightly offset, with multiply blend mode) for a printed-ink feel.

**Shapes:**
- Heavy border-radius throughout. Cards: 20–24px. Buttons: 12px or full pill.
- Circles are primary; rectangles are secondary.
- Avoid sharp corners on visible containers. The 70s had no sharp corners.

## Layout Principles

**Grid:** Loose 12-column grid, but this theme actively breaks grid constraints for decorative elements. Large circle shapes and section backgrounds intentionally bleed into gutters and across columns.

**Content columns:** Max-width 1080px, centered. On large screens, 48px gutters. Tablet: 24px.

**Spacing scale (in px, base-8):**
`8 / 16 / 24 / 40 / 64 / 88 / 120 / 160`

**Whitespace philosophy:** Generous but warm. Unlike the austere whitespace of minimalist themes, Retro Groove fills its whitespace with color and shape. A section might be "empty" of text but filled with a large mustard circle bled off the right edge. The page never feels cold or sparse.

**Layering:**
- Background shapes (circles, blobs) sit at z-index 0 behind content at z-index 10.
- Cards have a solid warm shadow in a darker cream: `4px 4px 0px #d9ceaf` — a flat offset shadow, not a Gaussian blur. This is the 70s print aesthetic.
- Overlap is encouraged: a card or heading can overlap a background circle by 20–40px for depth.

**Section transitions:**
- Use groovy blob/wave SVG dividers between sections, filled with the destination section's background color.
- Alternate sections between Warm Cream and Antique White backgrounds.

## Component Patterns

**Buttons:**
- Primary: Burnt Orange background, Warm Cream text, 12px border-radius. Padding: 16px 36px.
- Flat offset shadow: `4px 4px 0 #2a1f0e`. On hover: shadow collapses to `2px 2px 0 #2a1f0e`, element shifts 2px down-right.
- Secondary: Warm Cream background, 2.5px solid Burnt Orange border, Burnt Orange text. Same hover treatment.
- Mustard variant: Mustard Yellow background, Dark Espresso text. Used for secondary actions.
- Text: 0.75rem, weight 700, uppercase, tracking 0.1em.

**Cards:**
- Antique White background, 20px border-radius, flat offset shadow: `4px 4px 0 #d9ceaf`.
- Optional: a Mustard Yellow or Avocado Green left border (5px wide, full card height).
- Title in Burnt Orange, body in Brown.
- Internal padding: 32–40px.

**Inputs:**
- Cream background with a 2.5px solid bottom border in Dark Espresso.
- On focus: full rectangular border in Burnt Orange, `border-radius: 8px`.
- Label above, Brown color, 0.75rem weight 700 uppercase.
- No rounded ends on input fields. Keep them grounded.

**Navigation:**
- Horizontal bar with Warm Cream background. Logo in Burnt Orange (bold, large).
- Nav links in Dark Espresso weight 700, with a thick Mustard Yellow underline on hover/active (not a CSS underline — a pseudo-element bar below the link).
- Mobile: a full-width slide-down drawer with Antique White background.

**Badges:**
- Pill-shaped (border-radius 999px), padding 5px 14px.
- Filled options: Mustard Yellow / Avocado Green / Burnt Orange, all with Dark Espresso text.
- Font: 0.7rem, weight 700, uppercase, tracking 0.1em.
- Optional starburst shape for "New" or "Featured" badges.

**Dividers:**
- Groovy wavy SVG path between sections (primary use).
- Inline: a 4px thick line in Mustard Yellow, 80px wide, centered — not full-width. Followed by 40px vertical space.
- Decorative: a vinyl record concentric circle motif at 80px diameter, Dark Espresso at 10% opacity.

## Motion & Interaction

**Philosophy:** Motion here is playful and bouncy — but structured. Springs are welcome. Micro-interactions should feel fun without being chaotic. The wiggle of a button on hover, the satisfying thump of a card lifting.

**Hover states:**
- Buttons: flat shadow collapses + element translates 2px down and right over 120ms. On release: spring back over 200ms.
- Cards: translate Y by -6px, shadow becomes larger, over 200ms ease-out. Back to rest on 300ms spring.
- Nav links: thick Mustard Yellow bar slides in from left to right under link text over 200ms ease-out.

**Transitions:**
- Default: 200ms ease.
- Spring back: 300ms cubic-bezier(0.34, 1.56, 0.64, 1) (gentle overshoot).
- Section fade-in: 500ms ease-out.

**Scroll animations:**
- Cards and content blocks fade in from below (translateY 32px → 0, opacity 0 → 1) on viewport entry, 500ms ease-out.
- Stagger: 80ms per grid child.
- Large decorative circles can scale from 0.9 → 1 on page load over 600ms — a slow exhale.

**Loading states:**
- A spinning vinyl record icon (concentric circles, rotating) at 1200ms linear infinite.
- Skeleton bars in Antique White with a warm amber shimmer.

**Micro-interactions:**
- On form submit success: a Mustard Yellow starburst badge "pops" in at scale 0 → 1.1 → 1 over 400ms.
- Toggle switches use a Burnt Orange track with a cream thumb, animating over 200ms ease.

## Voice & Copy Tone

**Tone words:** Warm. Confident. Playful. Unpretentious. Real.

**Language style:**
- Conversational but not juvenile. Has personality. Doesn't try too hard.
- Contractions are natural. Sentences vary in length — short punchy ones mix with fuller ones.
- Occasional rhetorical question or exclamation, but used sparingly and genuinely.

**Headlines:** Bold, punchy, often conversational. Use sentence case. "Right on. Let's get into it." / "Big ideas. Small learning curve." / "Your kind of vibe."

**CTAs:** Direct and energetic. "Get into it" / "Start grooving" / "Join the scene" / "Fire it up"

**Body copy:** Warm and plain-spoken. 2–4 sentences per block. Conversational flow. Uses "you" naturally.

**Avoid:** Corporate-speak. Passive voice. Buzzwords. Cold precision. Anything that sounds like a quarterly report.

## CSS Starter

```css
:root {
  /* Color */
  --color-bg:              #f5f0e0;
  --color-surface:         #ede6ce;
  --color-surface-dark:    #d9ceaf;
  --color-text:            #2a1f0e;
  --color-text-body:       #4a3520;
  --color-text-muted:      #8a7050;
  --color-primary:         #d4550a;
  --color-primary-light:   #e87840;
  --color-secondary:       #e8b84b;
  --color-tertiary:        #6b7c2f;
  --color-tertiary-light:  #9aab58;

  /* Typography */
  --font-display: 'Syne', 'Barlow', sans-serif;
  --font-body:    'DM Sans', 'Syne', sans-serif;
  --t-hero:       5rem;
  --t-h1:         3.5rem;
  --t-h2:         2.25rem;
  --t-h3:         1.5rem;
  --t-body:       1.05rem;
  --t-small:      0.875rem;
  --t-label:      0.75rem;

  /* Spacing */
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  40px;
  --space-lg:  64px;
  --space-xl:  120px;
  --space-2xl: 160px;

  /* Shape */
  --radius-sm:   8px;
  --radius-md:   20px;
  --radius-lg:   24px;
  --radius-pill: 999px;

  /* Shadow (flat offset, not blurred) */
  --shadow-card: 4px 4px 0px #d9ceaf;
  --shadow-btn:  4px 4px 0px #2a1f0e;
  --shadow-lift: 4px 8px 0px #d9ceaf;

  /* Motion */
  --transition-fast:   120ms ease;
  --transition-base:   200ms ease;
  --transition-spring: 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```
