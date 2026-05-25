# Art Deco Glam
> Sharp geometry, gilded symmetry, the architecture of luxury.

## Overview

Art Deco Glam draws from the visual vocabulary of 1920s–30s design: rigid geometry, bilateral symmetry, and the unapologetic use of gold against deep cream and ink. Every interface built in this system should feel like the lobby of a grand hotel — structured, ceremonial, and self-assured. There is no softness here. Edges are hard, ornament is earned, and every element occupies its place with intention.

Use this theme for interfaces that demand gravitas and distinction. It suits premium products, editorial platforms, high-end commerce, and any context where the aesthetic itself signals value.

## Color Palette

| Role        | Name          | Hex       | Usage Ratio |
|-------------|---------------|-----------|-------------|
| Background  | Warm Cream    | `#f8f4e8` | ~55%        |
| Surface      | Ivory         | `#f0ead0` | ~15%        |
| Surface Alt  | Parchment     | `#e8dfc0` | ~10%        |
| Text Primary | Ink Black     | `#1a1408` | ~12%        |
| Text Muted   | Sepia         | `#5c4a1e` | ~5%         |
| Accent Gold  | Antique Gold  | `#c9a84c` | ~2%         |
| Accent Light | Pale Gold     | `#e8cc88` | ~1%         |
| Rule/Border  | Deep Gold     | `#9c7a28` | trace        |

**Usage notes:**
- Gold is reserved for borders, rules, ornamental marks, and interactive highlights. It should never fill large areas.
- Ink Black is used at full weight for headings and critical text. Body text may use Sepia at 80% opacity for a softer, aged-paper feel.
- Surfaces are differentiated by very slight tonal shifts — avoid strong contrast between background and surface.
- Never use white (`#ffffff`). The warmest near-white in the palette is Warm Cream.

## Typography

**Display font:** Josefin Sans — geometric, elegant, evenly spaced
**Body font:** Josefin Sans (lighter weight) or EB Garamond for long-form body text
**Fallback stack:** `'Josefin Sans', 'Gill Sans', 'Trebuchet MS', sans-serif`

| Scale Token  | Size      | Weight | Transform  | Tracking       | Usage                    |
|--------------|-----------|--------|------------|----------------|--------------------------|
| `--t-hero`   | 4.5rem    | 300    | uppercase  | 0.25em         | Hero/splash headlines    |
| `--t-h1`     | 3rem      | 700    | uppercase  | 0.15em         | Page titles              |
| `--t-h2`     | 2rem      | 300    | uppercase  | 0.2em          | Section headers          |
| `--t-h3`     | 1.25rem   | 700    | uppercase  | 0.12em         | Card titles, labels      |
| `--t-body`   | 1rem      | 300    | none       | 0.04em         | Body copy                |
| `--t-caption`| 0.75rem   | 300    | uppercase  | 0.18em         | Captions, metadata       |
| `--t-label`  | 0.7rem    | 700    | uppercase  | 0.22em         | Button text, badges      |

**Rules:**
- All headings set in uppercase. This is non-negotiable in this system.
- Pair a light-weight heading with a bold subheading, or vice versa, for the signature deco weight contrast.
- Line height for display: 1.1. Body: 1.7. Labels: 1.
- Never use italic type. Deco is a roman tradition.

## Visual Language

**Primary motifs:**
- **Double-line rectangle borders** — two concentric rectangular strokes inset from the edges of panels, cards, and page frames. Inner line thinner (1px), outer line thicker (2px), separated by 6–8px of space.
- **Chevron bands** — repeating V-shapes used as horizontal dividers, header backgrounds, or footer accents. Always in gold on cream, or cream on deep gold.
- **Sunburst / fan rays** — radiating straight lines emanating from a center point, used decoratively in corners or as hero backgrounds at low opacity.
- **Diamond ornaments** — solid or outlined rotated squares (45°) used as bullet points, section markers, and list separators.
- **Stepped trapezoid shapes** — layered rectangular steps used in corners of cards and hero sections.
- **Rule hierarchy** — triple rules (thick-thin-thick) used to bracket section titles, always in gold.

**Textures:**
- Subtle linen/paper grain on background surfaces (CSS noise filter or SVG filter at 4% opacity).
- No photography crops or organic shapes. All imagery should be framed within geometric masks (rectangle, hexagon rotated to diamond).

**Prohibited:**
- Rounded corners of any kind. `border-radius: 0` everywhere.
- Gradients (except extremely subtle vignette in hero backgrounds).
- Drop shadows (use border rules instead to create depth).
- Organic or freehand shapes.

## Layout Principles

**Grid:** 12-column grid, 80px gutters on large screens, 40px on tablet, 24px mobile. All columns align to the same geometric skeleton. Columns collapse 12 → 8 → 4.

**Spacing scale (in px, base-8):**
`4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192`

**Symmetry:** Bilateral symmetry is the default for hero sections, modal dialogs, and decorative panels. Asymmetry is only introduced intentionally to create tension.

**Layering:** Use the double-line border inset to define content containers rather than box-shadows or elevation. Panels sit on the page as formal objects, not floating cards.

**Whitespace philosophy:** Generous internal padding (min 48px inside panels). Margins between sections are large (96–128px). The page should breathe, but every area of whitespace is bounded by visible geometric structure.

**Page frame:** The entire page is optionally framed by a double-line border running 24px inside the viewport edge — a hallmark deco architectural detail.

## Component Patterns

**Buttons:**
- Rectangular, 0 border-radius, 2px solid gold border.
- Primary: gold border + ink black text on cream background. On hover: background fills to gold, text inverts to cream.
- Secondary: double-line border (inset with 2px gap), text in sepia.
- Text is uppercase, weight 700, letter-spacing 0.18em.
- Padding: 14px 40px. No rounded ends.

**Cards:**
- Flat cream surface (`#f0ead0`), framed with a double-line gold border (outer 2px, inner 1px, 6px apart).
- No shadow. Content padded 40px internally.
- Card titles in all-caps Josefin Sans bold.
- A thin gold horizontal rule separates the title from body content.

**Inputs:**
- Flat, no fill background (`#f8f4e8`), 2px solid bottom border in gold only (not full border).
- On focus: full rectangular gold border appears (1px).
- Label sits above, uppercase, small, tracked.
- No placeholder text. Use floating labels instead.

**Navigation:**
- Horizontal nav bar with double-line top and bottom border.
- Items in uppercase, light weight, tracked widely.
- Active item marked by a gold diamond ornament below the link text.
- No hover underline — use gold color shift instead.

**Badges:**
- Sharp rectangles with 1px gold border. Uppercase label text at 0.65rem, weight 700, tracking 0.2em.
- Filled variants use gold background with ink black text.

**Dividers:**
- Use a triple-rule structure: `2px / 8px gap / 1px / 8px gap / 2px` lines in gold.
- OR a chevron band at 24px tall in a gold-tinted surface color.
- A centered diamond ornament can anchor a divider at its midpoint.

## Motion & Interaction

**Philosophy:** Transitions are stately, not playful. Nothing bounces. Easing is ease-in-out. Duration is measured.

**Hover states:**
- Buttons: background fill transition over 200ms ease-in-out.
- Links: color shift from sepia to gold over 150ms.
- Cards: a subtle inward scale of the inner border rule (CSS transform on a pseudo-element) over 300ms — the frame tightens slightly.

**Transitions:**
- All color/background transitions: 200ms ease-in-out.
- Border and opacity changes: 150ms linear.

**Page animations:**
- Sections enter with a vertical slide-up of 20px + fade-in over 400ms on scroll. Stagger delay of 80ms per child element.
- No spring physics, no bounce easing.

**Scroll effects:**
- Hero text can parallax at 0.3 scroll speed relative to background.
- The page-frame border (if used) should remain fixed while content scrolls inside it.

**Loading states:**
- Skeleton screens use alternating cream/parchment bars with a shimmer traveling left-to-right in gold at low opacity.

## Voice & Copy Tone

**Tone words:** Authoritative. Refined. Assured. Direct. Celebratory without excess.

**Language style:**
- Headlines are declarative and brief. Verbs are strong. No questions.
- Copy is formal but never stiff. Economy of words is a virtue.
- Every word earns its place, like every ornament in a deco facade.

**Headlines:** Short, powerful, uppercase-rendered. Three to five words preferred for hero headlines. Example cadence: "FORM AS FUNCTION." / "THE STANDARD, ELEVATED."

**CTAs:** Action verbs, uppercase, no punctuation. "BEGIN" / "ENTER" / "DISCOVER" / "RESERVE YOUR PLACE"

**Body copy:** Short paragraphs (2–3 sentences max per block). Dense copy is broken with pull-quotes or ruled dividers. Sentences are complete and grammatically precise.

**Avoid:** Casual contractions in formal contexts. Slang. Exclamation marks. Emoji.

## CSS Starter

```css
:root {
  /* Color */
  --color-bg:           #f8f4e8;
  --color-surface:      #f0ead0;
  --color-surface-alt:  #e8dfc0;
  --color-text:         #1a1408;
  --color-text-muted:   #5c4a1e;
  --color-accent:       #c9a84c;
  --color-accent-light: #e8cc88;
  --color-accent-deep:  #9c7a28;

  /* Typography */
  --font-display:       'Josefin Sans', 'Gill Sans', sans-serif;
  --font-body:          'EB Garamond', Georgia, serif;
  --t-hero:             4.5rem;
  --t-h1:               3rem;
  --t-h2:               2rem;
  --t-h3:               1.25rem;
  --t-body:             1rem;
  --t-label:            0.7rem;
  --tracking-wide:      0.15em;
  --tracking-wider:     0.22em;

  /* Spacing */
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  32px;
  --space-lg:  64px;
  --space-xl:  96px;
  --space-2xl: 128px;

  /* Borders */
  --border-accent:       2px solid #c9a84c;
  --border-accent-thin:  1px solid #c9a84c;
  --border-radius:       0;

  /* Motion */
  --transition-fast:   150ms linear;
  --transition-base:   200ms ease-in-out;
  --transition-slow:   400ms ease-in-out;
}
```
