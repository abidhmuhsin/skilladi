# Japanese Zen
> Silence is the container. One mark is enough.

## Overview

Japanese Zen translates the principles of wabi-sabi, ma (negative space), and kanso (simplicity) into a UI design language. The screen is mostly empty. This is not a failure of design — it is the design. Every element that remains has survived a ruthless process of reduction. What is left carries maximum weight precisely because of what surrounds it.

The only color accent is a single vermillion red — the red of a torii gate, a hanko stamp, an ink drop. It appears once per composition, at most twice. The typography is a single typeface in two weights. The layout has no decoration — only proportion.

Use this theme for writing tools, meditation or mindfulness applications, portfolios, premium content publishing platforms, developer documentation with an editorial sensibility, and any context where the content itself is sacred and the interface must not compete with it.

## Color Palette

| Role          | Name          | Hex       | Usage Ratio |
|---------------|---------------|-----------|-------------|
| Background    | Washi White   | `#fafafa` | ~80%        |
| Surface       | Ink Fog       | `#f3f3f3` | ~12%        |
| Text Primary  | Sumi Black    | `#1a1a1a` | ~6%         |
| Text Muted    | Ash           | `#9a9a9a` | ~1.5%       |
| Accent        | Vermillion    | `#c6392e` | ~0.5%       |

**Usage notes:**
- There are five colors. Five. Do not add a sixth.
- Vermillion is a mark, not a fill. It appears on one element per view: one button, one border, one active indicator, one dot. If two elements compete for it, remove one element.
- Text muted (Ash) is for secondary information, timestamps, labels, and captions. Never use it for body copy — that is always Sumi Black.
- Surface (Ink Fog) differentiates a container from the background by the smallest perceptible step. It is not a color — it is a shadow without shadow.
- Never use pure `#ffffff` or `#000000`. The near-white and near-black preserve warmth and humanity.

## Typography

**Display & body font:** Noto Serif JP — the single typeface of this system.
**Fallback stack:** `'Noto Serif JP', 'Hiragino Mincho Pro', 'Yu Mincho', Georgia, serif`

| Scale Token   | Size     | Weight | Transform | Tracking    | Usage                        |
|---------------|----------|--------|-----------|-------------|------------------------------|
| `--t-hero`    | 3.5rem   | 300    | none      | -0.01em     | Hero/primary heading         |
| `--t-h1`      | 2.25rem  | 400    | none      | 0           | Page titles                  |
| `--t-h2`      | 1.5rem   | 400    | none      | 0           | Section headers              |
| `--t-h3`      | 1.125rem | 400    | none      | 0           | Sub-headers, card titles     |
| `--t-body`    | 1rem     | 300    | none      | 0.015em     | Body copy                    |
| `--t-small`   | 0.875rem | 300    | none      | 0.02em      | Captions, metadata           |
| `--t-label`   | 0.75rem  | 400    | none      | 0.04em      | Minimal labels               |

**Rules:**
- One typeface. One. Resist the impulse to introduce a second.
- Weight 300 is the default. Weight 400 for headings and emphasis. Weight 700 is not used — the hierarchy is established through size and space, not boldness.
- Line height for display: 1.2. Body: 1.9 — exceptionally generous, like the margins of a fine book. Labels: 1.4.
- No uppercase transforms, no letter-spacing beyond the subtle values in the scale. The typography speaks quietly.
- Sentence case for all text. Even headlines.
- If supporting Japanese characters, ensure `font-feature-settings: "palt" 1` is set for proportional glyph spacing.

## Visual Language

**Primary motifs:**
- **Single vertical red accent line** — a 2px wide, full-height (or section-height) line in Vermillion positioned at the far left edge of the primary content column (or at 64px from the left viewport edge). This is the defining visual mark of the system. It appears once per page, as a structural element, not a decoration.
- **Red dot** — a single 8px circle in Vermillion used as a list marker, active state indicator, or focal punctuation mark. It replaces any other bullet, icon, or indicator in contexts where one is needed.
- **Ink wash borders** — where a border is needed, it is a single 1px line in `#e0e0e0`. Borders exist to define, not to decorate.
- **Asymmetric placement** — content is not centered. It lives in the left 60–70% of the available width, with the right side open. This asymmetry is intentional and creates the sense of space found in Japanese ink painting composition.
- **Ruled paper lines** — optional, very faint horizontal lines (1px, `#f0f0f0`) at a consistent 40px rhythm across the background, like the lines of a journal. Applied via CSS background pattern at 4% opacity.

**What is not here:**
- No gradient, no shadow (with one narrow exception below), no texture, no pattern, no icon set, no illustration, no decorative border, no ornament.
- No color other than the five specified.
- The only permitted shadow is a single very subtle one on a focused input: `0 1px 4px rgba(0,0,0,0.06)`.

**Photography and imagery:**
- If imagery is used, it should be black-and-white, or very desaturated. A single color photograph is acceptable only if it is the subject of the page (e.g., a product photo, a portrait).
- Images are contained in precisely proportioned rectangles. No circles, no irregular crops, no frames.
- Images never bled to the edge — they always have defined margins.

## Layout Principles

**Grid:** Not a 12-column grid. A single content column, 640px wide maximum, left-aligned with a 64px left margin on desktop. The right side of the screen is intentionally empty. On wide screens (>1400px), the content column may shift to the center, but it never spans the full width.

**Spacing scale (in px, base-8):**
`8 / 16 / 24 / 40 / 64 / 96 / 160 / 240`

**Whitespace philosophy:** Ma — the intentional emptiness. The space between elements is as meaningful as the elements themselves. Between sections: 160px. Between a heading and its body: 24px. Between paragraphs: 24px top-margin. The top of the page has 96px of empty space before the first element.

**The vertical red line:**
- Positioned `64px` from the left of the viewport (or `calc(50% - 360px)` on centered layouts).
- Height: the full content area height, or just the height of a specific panel.
- CSS: `position: absolute; left: 64px; top: 0; width: 2px; height: 100%; background: #c6392e;`
- It anchors the eye. Everything to the right of it is content space.

**Asymmetry rules:**
- Headlines: left-aligned.
- Pull quotes: indented by 48px from the left, right margin left open.
- Decorative element (red dot): placed once, typically at the top of the primary content column.
- The only element that may be centered is a single short statement used as a section epigraph.

**Page structure:**
- No visible navigation chrome on first load if possible. Minimal top bar that recedes.
- Footer: 4–6 lines of text, left-aligned, minimal. Nothing decorative.

## Component Patterns

**Buttons:**
- Primary: Vermillion text, no background, no border. The text is the button. Underlined on hover with a 1px Vermillion line.
- Alternative primary (when a visible container is necessary): Vermillion background, white (`#fafafa`) text, 0 border-radius, padding 12px 28px. This is used at most once per page.
- Secondary: Sumi Black text, no background, `1px solid #d0d0d0` border, 0 border-radius, padding 10px 24px.
- On hover: secondary button border transitions to `1px solid #1a1a1a`.
- No rounded corners. No shadows. No icons inside buttons unless the icon is the button.

**Cards:**
- Surface background (`#f3f3f3`), `1px solid #e0e0e0` border, 0 border-radius.
- Internal padding: 40px 48px (generous).
- No shadow. The 1px border is sufficient to define the container.
- Card title: Noto Serif JP, weight 400, `--t-h3`. A 24px space below the title before body content.
- If a card requires accent treatment: a single 2px Vermillion left border (full card height).

**Inputs:**
- White (`#fafafa`) background, `1px solid #d0d0d0` border, 0 border-radius.
- On focus: border becomes `1px solid #1a1a1a`. Shadow: `0 1px 4px rgba(0,0,0,0.06)`.
- Label above input: 0.75rem, weight 400, Ash color, sentence case. No uppercase.
- Placeholder: Ash color, 300 weight. No icon in input.
- Error state: left border becomes 2px Vermillion. Error message in Vermillion below.

**Navigation:**
- Minimal top bar: Logo or site name (left), 2–4 navigation links (right). Both in Sumi Black at `--t-label` size, weight 400.
- Active link: Vermillion text color. Nothing else — no underline, no background.
- Navigation line: a single `1px solid #e0e0e0` bottom border on the nav bar.
- Mobile: hamburger icon (3 thin lines, 1px stroke, Sumi Black). Full-screen overlay in Washi White.

**Badges:**
- Used only when absolutely necessary (status indicators, counts).
- Rectangular, 0 border-radius, `1px solid #d0d0d0`, Ash text. Padding 2px 8px.
- Active/selected badge: `1px solid #c6392e`, Vermillion text.
- Font: 0.7rem, weight 400. Never uppercase.

**Dividers:**
- The default divider is empty space: 96–160px of vertical margin.
- When a visual separator is needed: `1px solid #e8e8e8`, full column width, with 64px vertical margin on each side.
- Never use decorative dividers, ruled ornaments, or anything that draws attention to itself.

## Motion & Interaction

**Philosophy:** The interface is still. When motion occurs, it should be almost imperceptible — a breath, not a gesture. Duration is long, easing is slow in and slow out. Motion should never surprise or startle.

**Hover states:**
- Links: color fades from Sumi Black to Ash over 200ms ease. (Inverse: primary links fade toward Vermillion.)
- Buttons: opacity shifts from 1 to 0.75 over 200ms ease. No translate, no shadow change.
- Cards: no hover animation. Stillness is the correct state for a container.
- Nav links: color shift to Vermillion over 150ms ease.

**Transitions:**
- Default: 200ms ease.
- Focus ring: 150ms ease for border color.
- All color transitions: 200ms ease.
- Page transitions (if SPA): fade out 200ms, new content fades in 300ms. No slide, no scale.

**Scroll effects:**
- None. Absolutely none. No parallax, no animation on scroll, no sticky elements sliding in. The page is a scroll of paper.
- Exception: the navigation bar may fade its bottom border when scrolled to the top of the page (border-opacity 0 at top, 1 after 50px scroll).

**Loading states:**
- No spinner. A single sentence: "Loading." in Ash, centered in the content area.
- If a progress indicator is required: a thin 1px line at the very top of the viewport (full width), transitioning from Washi White to Sumi Black (left to right) over the load duration.

**Micro-interactions:**
- Form submission success: the submit button text changes from the action word to "Done" with a fade transition over 200ms. A red dot appears to the left of the text.
- Error: the input left border transitions to Vermillion over 150ms. The error message fades in below.
- No bounce, no spring, no scale on any element.

## Voice & Copy Tone

**Tone words:** Still. Precise. Considered. Unhurried. Honest.

**Language style:**
- Write the minimum. Every word removed strengthens what remains.
- Sentences are short. Paragraphs are short. If a thought needs three sentences, three short ones.
- The model is haiku: compression, concrete imagery, a moment of clarity.
- No filler, no hedging, no corporate padding.

**Headlines:** Often a single noun or a very short phrase. Not a promise or a pitch — a statement. "Stillness." / "Write here." / "Your work." / "Begin."

**CTAs:** One word, or two. Lowercase preferred. "Start" / "Read" / "Continue" / "Save"

**Body copy:** Spare and precise. Describe what something does. Avoid why it is great. Trust the reader.

**Error messages:** Honest and direct. "Not found." / "Try again." / "Access required." No apology. No emoji. No explanation unless one is truly necessary.

**Avoid:** Enthusiasm. Hyperbole. Long sentences. Lists (use prose instead). Exclamation marks. Questions. Anything that fills space.

## CSS Starter

```css
:root {
  /* Color */
  --color-bg:       #fafafa;
  --color-surface:  #f3f3f3;
  --color-text:     #1a1a1a;
  --color-muted:    #9a9a9a;
  --color-accent:   #c6392e;
  --color-border:   #e0e0e0;
  --color-border-strong: #d0d0d0;

  /* Typography */
  --font-primary: 'Noto Serif JP', 'Hiragino Mincho Pro', Georgia, serif;
  --t-hero:       3.5rem;
  --t-h1:         2.25rem;
  --t-h2:         1.5rem;
  --t-h3:         1.125rem;
  --t-body:       1rem;
  --t-small:      0.875rem;
  --t-label:      0.75rem;
  --lh-display:   1.2;
  --lh-body:      1.9;

  /* Spacing */
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  40px;
  --space-lg:  96px;
  --space-xl:  160px;
  --space-2xl: 240px;

  /* Layout */
  --content-width:  640px;
  --content-offset: 64px;
  --accent-line-w:  2px;

  /* Shape */
  --border-radius: 0;

  /* Shadow (single permitted use) */
  --shadow-focus: 0 1px 4px rgba(0, 0, 0, 0.06);

  /* Motion */
  --transition-base: 200ms ease;
  --transition-fast: 150ms ease;
}
```
