# Coastal Breeze
> Sun-warmed, salt-aired, open to the horizon.

## Overview

Coastal Breeze translates the sensory experience of a clear day at the shore into a UI design language. It is airy, optimistic, and quietly elegant — not kitschy nautical cosplay, but the genuine feeling of light bouncing off water, bleached driftwood, and soft sea grass. The palette is drawn from the sea itself: bleached blue-whites, the warm gold of sand, and deep ocean blue as the primary action color.

This theme is appropriate for lifestyle products, travel and hospitality interfaces, wellness platforms, productivity tools that want a calm and approachable feel, and any context where openness and trust are the primary emotional goals.

## Color Palette

| Role          | Name           | Hex       | Usage Ratio |
|---------------|----------------|-----------|-------------|
| Background    | Sea Foam White | `#f0f8ff` | ~50%        |
| Surface       | Pale Shore     | `#e8f4fd` | ~20%        |
| Surface Alt   | Mist           | `#d4ecf7` | ~10%        |
| Text Primary  | Deep Navy      | `#1a3a52` | ~10%        |
| Text Body     | Slate          | `#3d6478` | ~5%         |
| Text Muted    | Fog            | `#7a9fb3` | ~3%         |
| Primary       | Ocean Blue     | `#4a9ede` | ~4%         |
| Primary Dark  | Deep Current   | `#2d7ab8` | ~1%         |
| Secondary     | Sandy Gold     | `#f4d06f` | ~3%         |
| Secondary Dark| Amber Sand     | `#c9a030` | ~1%         |
| Accent        | Coral          | `#f47c5a` | trace        |

**Usage notes:**
- Ocean Blue is the primary action color: buttons, links, active states, key UI chrome.
- Sandy Gold is the secondary accent: highlight borders, badges, warm counterpoints to the blue.
- Background and surfaces are very close in value — differentiate containers through soft box shadows and subtle borders, not heavy color contrast.
- Coral is a rare accent for alerts, notifications, or emphasis only. Avoid overuse.
- Keep text in Deep Navy for headings; Slate for body; Fog for placeholder and disabled states.

## Typography

**Display font:** Raleway — geometric, humanist, elegant at light weights
**Body font:** Raleway or Lato for readability at smaller sizes
**Fallback stack:** `'Raleway', 'Nunito', 'Segoe UI', sans-serif`

| Scale Token   | Size     | Weight | Transform | Tracking   | Usage                     |
|---------------|----------|--------|-----------|------------|---------------------------|
| `--t-hero`    | 4rem     | 200    | none      | -0.01em    | Hero/splash headlines     |
| `--t-h1`      | 2.75rem  | 300    | none      | -0.005em   | Page titles               |
| `--t-h2`      | 2rem     | 400    | none      | 0          | Section headers           |
| `--t-h3`      | 1.375rem | 600    | none      | 0          | Card titles               |
| `--t-h4`      | 1.1rem   | 600    | none      | 0.02em     | Sub-labels                |
| `--t-body`    | 1rem     | 300    | none      | 0.01em     | Body copy                 |
| `--t-small`   | 0.875rem | 400    | none      | 0.02em     | Captions, metadata        |
| `--t-label`   | 0.75rem  | 600    | uppercase | 0.08em     | Button text, tags         |

**Rules:**
- Hero and H1 headings exploit Raleway's beautiful ultra-light weight (200–300). The contrast between featherweight headlines and medium-weight body is the typographic signature of this system.
- Line height for display: 1.2. Body: 1.75. Short UI strings: 1.3.
- Sentence case for all headings and labels. This theme is approachable, not ceremonial.
- Avoid bold (700+) except for numeric data, emphasis inline, and navigation active states.

## Visual Language

**Primary motifs:**
- **Wave lines** — gentle sinusoidal curves used as section dividers, decorative borders, and header/footer accents. The wave amplitude is shallow (not cartoonish) — think ripple, not surf.
- **Horizontal stripe accents** — thin bands of Sandy Gold or Mist running full-width, 4–8px tall, used to mark the boundary of hero sections or feature rows.
- **Rope/cable borders** — an optional CSS-rendered braided border effect (via repeating-linear-gradient) applied to image frames or featured cards.
- **Horizon line** — a clean 1px Ocean Blue line used as a visual anchor element, often running below a hero headline.
- **Compass rose marks** — minimal geometric compass point used as a decorative bullet or section marker.

**Shapes and roundness:**
- Buttons: large border-radius (24–28px pill shape or 8px rounded rectangle).
- Cards: 12px border-radius.
- Images and avatars: circular or 12px radius, never sharp-cornered.
- Badges and tags: fully pill-shaped (border-radius: 999px).

**Textures:**
- Very subtle sandy grain texture on hero backgrounds (SVG noise at 3% opacity).
- Wave SVG dividers between sections (white or mist-colored, organic curve).
- Light watercolor-wash backgrounds are appropriate for feature panels at 5–8% opacity.

**Photography direction:**
- Images should feature natural light, open skies, and horizontal compositions.
- Crop to landscape ratios (16:9 or 3:1 for banners, 4:3 for cards).

## Layout Principles

**Grid:** 12-column grid. Large screens: 1200px max-width, 32px gutters. Tablet: 16px gutters. Mobile: single column, 24px horizontal padding.

**Spacing scale (in px, base-8):**
`4 / 8 / 16 / 24 / 32 / 48 / 72 / 96 / 128`

**Whitespace philosophy:** This theme breathes. Section padding is generous (80–128px top/bottom). Hero areas extend edge-to-edge. Content containers are centered and max-width constrained, surrounded by open air. Crowding is antithetical to the aesthetic.

**Layering:**
- Cards float above the background with a soft, diffuse shadow: `0 4px 24px rgba(74, 158, 222, 0.1)`.
- No hard drop shadows. Elevation is expressed through shadow blur and very slight opacity.
- Overlapping elements (e.g., a card overlapping a hero image by 40px) create depth without darkness.

**Section rhythm:**
- Alternate between full-bleed colored sections (Mist or Pale Shore) and white/Sea Foam sections to create a flowing rhythm down the page.
- Wave SVG dividers transition between section colors.

## Component Patterns

**Buttons:**
- Primary: Ocean Blue background, white text, 24px border-radius. Padding: 14px 32px.
- On hover: background shifts to Deep Current, slight upward translate (-2px), shadow deepens.
- Secondary: Ocean Blue 1.5px border, transparent background, Ocean Blue text. Hover: fills lightly.
- Ghost/soft: Sandy Gold background at 20% opacity, Sandy Gold border, Deep Navy text.
- All button text: 0.75rem, weight 600, uppercase, letter-spacing 0.08em.

**Cards:**
- White or Pale Shore background, 12px border-radius.
- Shadow: `0 2px 16px rgba(26, 58, 82, 0.08)`.
- Optional: 3px top border in Ocean Blue or Sandy Gold for category differentiation.
- Internal padding: 32px. Title in Deep Navy, body in Slate.

**Inputs:**
- Full rectangular border (1.5px solid `#d4ecf7`), 8px border-radius.
- On focus: border color becomes Ocean Blue, subtle `box-shadow: 0 0 0 3px rgba(74, 158, 222, 0.15)`.
- Label above input, Slate color, 0.75rem, weight 600.
- Placeholder text in Fog color.

**Navigation:**
- Horizontal bar with Sea Foam White background, 1px bottom border in Mist.
- Logo left, links center or right. Links in Slate, active link in Ocean Blue with a 2px bottom border.
- Mobile: full-height slide-out drawer from the left.

**Badges and tags:**
- Pill shape (border-radius 999px), padding 4px 12px.
- Filled: Sandy Gold background, Deep Navy text.
- Outlined: Ocean Blue border, Ocean Blue text.
- Font: 0.7rem, weight 600, uppercase, tracking 0.08em.

**Dividers:**
- Wave SVG in Mist or white placed between sections.
- Inline: 1px solid `#d4ecf7` horizontal rule, with 48px vertical margin.
- Optional: a 4px Sandy Gold horizontal bar (full width or 120px centered) as a section opener accent.

## Motion & Interaction

**Philosophy:** Movement is gentle and natural, like water. Nothing snaps. Transitions are fluid and slightly elastic but never overdone. The feel is effortless.

**Hover states:**
- Buttons: translate Y by -2px + shadow increase over 180ms ease-out.
- Cards: translate Y by -4px + shadow increase over 220ms ease-out.
- Links: color fade to Ocean Blue over 150ms ease.
- Images in cards: scale to 1.03 with overflow hidden over 300ms ease-in-out.

**Transitions:**
- Default: 200ms ease.
- Card lift: 220ms cubic-bezier(0.25, 0.46, 0.45, 0.94).
- Accordion/expand: 300ms ease-in-out for height.

**Scroll animations:**
- Content sections fade up (translateY 24px → 0, opacity 0 → 1) over 500ms as they enter the viewport.
- Stagger delay: 60ms per item in a grid.
- Wave dividers: parallax at 0.15x scroll speed for a gentle floating effect.

**Loading states:**
- Skeleton screens using Pale Shore as the base with a shimmer of Ocean Blue at 8% moving left-to-right.
- Spinner: a thin 2px Ocean Blue arc rotating 360°, 800ms linear infinite.

## Voice & Copy Tone

**Tone words:** Warm. Optimistic. Clear. Conversational. Unhurried.

**Language style:**
- Friendly and direct. Speaks like a trusted guide, not a brand manager.
- Sentence case everywhere. No shouting.
- Contractions are welcome. "You're" not "You are."
- Short sentences. No jargon.

**Headlines:** Evocative but grounded. Describe a feeling or outcome, not a feature list. "Find your next great thing." / "Everything in one place, finally."

**CTAs:** Conversational verbs. "Get started" / "See how it works" / "Let's go" / "Explore now"

**Body copy:** Relaxed and informative. 2–4 sentences per block. Use whitespace generously — never pack copy.

**Avoid:** Corporate-speak. Superlatives ("best-in-class," "world-leading"). Urgency pressure tactics. Heavy passive voice.

## CSS Starter

```css
:root {
  /* Color */
  --color-bg:             #f0f8ff;
  --color-surface:        #e8f4fd;
  --color-surface-alt:    #d4ecf7;
  --color-text:           #1a3a52;
  --color-text-body:      #3d6478;
  --color-text-muted:     #7a9fb3;
  --color-primary:        #4a9ede;
  --color-primary-dark:   #2d7ab8;
  --color-secondary:      #f4d06f;
  --color-secondary-dark: #c9a030;
  --color-accent:         #f47c5a;

  /* Typography */
  --font-display: 'Raleway', 'Nunito', 'Segoe UI', sans-serif;
  --font-body:    'Raleway', 'Lato', sans-serif;
  --t-hero:       4rem;
  --t-h1:         2.75rem;
  --t-h2:         2rem;
  --t-h3:         1.375rem;
  --t-body:       1rem;
  --t-small:      0.875rem;
  --t-label:      0.75rem;

  /* Spacing */
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  32px;
  --space-lg:  72px;
  --space-xl:  96px;
  --space-2xl: 128px;

  /* Shape */
  --radius-sm:   8px;
  --radius-md:   12px;
  --radius-pill: 999px;

  /* Shadow */
  --shadow-card: 0 2px 16px rgba(26, 58, 82, 0.08);
  --shadow-lift: 0 8px 32px rgba(26, 58, 82, 0.14);

  /* Motion */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-lift: 220ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```
