# Neon Rave
> The grid is the dance floor. Every pixel pulses.

## Overview

Neon Rave is a cyberpunk-influenced, rave-energy design system built for the darkest substrates. It lives in pure black and speaks in light: electric cyan, hot magenta, and acidic lime. The UI chrome is deliberately hard-edged and technical — this is not a soft digital world, it is infrastructure. But the neon accents make that infrastructure glow.

Use this theme for nightlife and events platforms, music production tools, gaming interfaces, creative developer tools, streaming dashboards, and any context where energy, intensity, and a sense of being-at-the-frontier are the primary emotional goals. This system demands confidence — it will overpower timid content.

## Color Palette

| Role          | Name          | Hex       | Usage Ratio |
|---------------|---------------|-----------|-------------|
| Background    | Void Black    | `#080808` | ~60%        |
| Surface       | Dark Panel    | `#111111` | ~18%        |
| Surface Alt   | Elevated      | `#1a1a1a` | ~8%         |
| Border/Grid   | Grid Line     | `#222222` | ~3%         |
| Text Primary  | Bright White  | `#f0f0f0` | ~7%         |
| Text Body     | Off White     | `#c0c0c0` | ~2%         |
| Text Muted    | Dim           | `#606060` | ~1%         |
| Primary Neon  | Cyan          | `#00f5d4` | ~2%         |
| Primary Glow  | Cyan Deep     | `#00c4aa` | trace        |
| Secondary Neon| Magenta       | `#f706cf` | ~1.5%       |
| Secondary Glow| Magenta Deep  | `#c004a4` | trace        |
| Tertiary Neon | Acid Lime     | `#b5ff00` | ~1%         |
| Danger        | Hot Red       | `#ff2244` | trace        |

**Usage notes:**
- Neon colors are not fills for large areas — they are light sources. Apply them as borders, text, glow halos, and thin accent lines.
- Backgrounds and surfaces occupy the vast majority of the screen. Black is the canvas; neon is the paint.
- Never use all three neons simultaneously on the same component. Pick one primary neon per context and use it consistently within that view. Use a second neon only for contrast or state change.
- Glow versions (slightly darker/desaturated) are used for inner shadow and text-shadow base layers.
- `#f0f0f0` text on `#080808` background achieves contrast without using pure `#ffffff`, which would feel too stark against neon accents.

## Typography

**Display font:** Syncopate — futuristic, spaced capitals, strong geometric structure
**Body font:** Share Tech Mono (monospaced, technical) or Rajdhani for more readable body
**Fallback stack (display):** `'Syncopate', 'Orbitron', 'Courier New', monospace`
**Fallback stack (body):** `'Share Tech Mono', 'Fira Code', 'Courier New', monospace`

| Scale Token   | Size     | Weight | Transform  | Tracking    | Usage                          |
|---------------|----------|--------|------------|-------------|--------------------------------|
| `--t-hero`    | 4.5rem   | 700    | uppercase  | 0.12em      | Hero/splash headlines          |
| `--t-h1`      | 3rem     | 700    | uppercase  | 0.1em       | Page titles                    |
| `--t-h2`      | 1.875rem | 400    | uppercase  | 0.12em      | Section headers                |
| `--t-h3`      | 1.25rem  | 700    | uppercase  | 0.1em       | Card titles, panel labels      |
| `--t-body`    | 0.9rem   | 400    | none       | 0.05em      | Body copy (monospaced)         |
| `--t-data`    | 1.1rem   | 400    | none       | 0.04em      | Numbers, stats, dashboard data |
| `--t-label`   | 0.65rem  | 700    | uppercase  | 0.2em       | Button text, badge labels      |
| `--t-micro`   | 0.6rem   | 400    | uppercase  | 0.25em      | Metadata, timestamps, ids      |

**Rules:**
- ALL CAPS for all headings and labels — always, without exception.
- Syncopate at large sizes has poor lowercase, so uppercase-only is functionally required.
- Body text uses a monospaced font to reinforce the technical, terminal-like aesthetic.
- Glow text-shadow on primary headings: `0 0 8px #00f5d4, 0 0 20px #00f5d480`.
- Line height for display: 1.1. Body: 1.6 (monospaced needs more space). Labels: 1.
- Avoid italics. Syncopate has no italic form and the aesthetic doesn't warrant one.

## Visual Language

**Primary motifs:**
- **CSS grid overlay** — a visible grid of thin lines (`1px solid #222222`) running horizontally and vertically across the background, creating an infinite-grid impression. Applied via `background-image: repeating-linear-gradient`.
- **Scanline texture** — alternating 1px transparent / 1px semi-transparent black bands over the entire surface at 6% opacity, mimicking a CRT monitor. Applied via repeating-linear-gradient overlay.
- **Neon glow borders** — 1px solid neon color + `box-shadow: 0 0 8px #00f5d4, 0 0 16px #00f5d440` on active panels, selected states, and key UI components.
- **Hard cut corners** — CSS clip-path to shear a 10–12px corner (octagon-like), applied to cards, buttons, and panels. Example: `clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)`.
- **Data bar / progress track** — thin 2px horizontal bars filled with neon gradients, used for loading, progress, and decorative structure.
- **Crosshair reticle marks** — small `+` marks in grid-line color placed at corners or intersections as decorative positional markers.
- **Glitch artifact lines** — occasional 1–2px horizontal displaced bars in a neon accent color, animated briefly on hover or at intervals. Use sparingly.

**Shapes and structure:**
- Zero border-radius on all elements. Hard edges define this system.
- Clipped corners (clip-path) are the only shape modification allowed.
- Shapes are rectangular, angular, and grid-aligned.

**Textures:**
- Grid lines: `background-image: linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px); background-size: 40px 40px`.
- Scanlines: `background-image: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.06) 1px, rgba(0,0,0,0.06) 2px)`.
- Both applied as layered CSS backgrounds on `<body>` or section containers.

## Layout Principles

**Grid:** Strict 12-column grid, 24px gutters, 1440px max-width. The grid aligns with the visual grid overlay — column boundaries should ideally coincide with grid lines.

**Spacing scale (in px, base-8):**
`4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128`

**Whitespace philosophy:** Purposeful density. This is a tool interface, not a brochure. White space (black space here) is used to separate functional zones, not as decoration. Padding is tighter than lifestyle themes: 24px inside panels, 48px between sections. The grid lines provide visual structure that replaces what whitespace does in lighter themes.

**Layering:**
- Background (void black + grid/scanlines) at z-index 0.
- Panel surfaces (dark panel) at z-index 10. No box shadows — elevation is expressed via border glow and color differentiation.
- Active/focused elements at z-index 20, with a neon border glow.
- Modals and overlays at z-index 100 with a `rgba(8,8,8,0.9)` backdrop.

**Panel structure:**
- All content panels have hard rectangular borders: `1px solid #222222`.
- Active or selected panels glow: `1px solid #00f5d4; box-shadow: 0 0 12px #00f5d440`.
- Header rows inside panels use a `1px solid #222` bottom border.
- No card "elevation" through shadow — only through border brightness.

## Component Patterns

**Buttons:**
- Primary: transparent background, `1px solid #00f5d4`, Cyan text, clip-path cut corners.
- On hover: background fills with Cyan at 15% opacity, `box-shadow: 0 0 12px #00f5d460`.
- On active/press: background fills to Cyan at 25%, glow intensifies.
- Secondary/Magenta variant: magenta border, magenta text, magenta glow on hover.
- Danger: Hot Red border, Hot Red text, red glow.
- All text: uppercase, 0.65rem, weight 700, tracking 0.2em. Padding: 12px 28px. No border-radius.

**Cards / Panels:**
- Dark Panel background (`#111111`), `1px solid #222222` border, 0 border-radius.
- Optional neon-colored 2px top border for category coding (cyan = primary, magenta = events, lime = status).
- Header row: slightly lighter background (`#1a1a1a`), bottom border.
- Internal padding: 24px.
- Selected/active state: full border switches to `1px solid #00f5d4` + glow.

**Inputs:**
- Dark Panel background, `1px solid #333333`, 0 border-radius.
- On focus: border becomes `1px solid #00f5d4`, `box-shadow: 0 0 0 2px #00f5d420, 0 0 12px #00f5d430`.
- Text: `#f0f0f0`, monospaced font, 0.9rem.
- Label: uppercase, 0.65rem, weight 700, tracking 0.2em, `#c0c0c0` color.
- Placeholder: `#606060`.
- No rounded ends. Optionally apply clip-path to input corners for consistency.

**Navigation:**
- Dark Panel background, `1px solid #222` bottom border.
- Logo in Cyan, all caps, Syncopate font.
- Nav links: uppercase, tracking 0.15em, `#c0c0c0`. On hover: color becomes Cyan, a 1px Cyan bottom border slides in.
- Active link: Cyan color + `1px solid #00f5d4` bottom border permanently.
- Optional: a full-height `2px solid #00f5d4` left border on a side navigation panel.

**Badges:**
- Hard-edged rectangles, 0 border-radius (or clip-path cut corners).
- Outlined: neon color border + neon text. Filled: neon color background at 20% + neon text.
- Glow on filled: `box-shadow: 0 0 8px currentColor`.
- Font: 0.6rem, uppercase, weight 700, tracking 0.2em.

**Dividers:**
- Primary: `1px solid #222222` horizontal rule — the grid line made explicit.
- Accent: a full-width 1px line in Cyan at 40% opacity, with a 200px wide bright Cyan center segment at 100% opacity.
- Section break: a repeating short-dash pattern in Cyan: `border-top: 1px dashed #00f5d460`.

## Motion & Interaction

**Philosophy:** Motion is sharp, precise, and electrical. No smooth organic eases. Transitions snap. Glitch and flicker are intentional tools. The interface feels like it is processing — calculating, outputting, responding.

**Hover states:**
- Buttons: glow materializes over 100ms linear. No translate — elements don't move, they activate.
- Cards/panels: border brightens from `#222` to neon color over 150ms linear.
- Links: color snaps to Cyan on hover (no transition delay needed, or 80ms linear).
- Nav items: bottom border slides in from left (width 0% → 100%) over 150ms linear.

**Transitions:**
- Default UI transitions: 100–150ms linear.
- Glow transitions: 150ms linear for box-shadow.
- Modals: fade in over 200ms linear with a 3px vertical translate.

**Scroll effects:**
- Minimal parallax. Content panels enter at `translateY(16px) → 0`, `opacity 0 → 1` over 300ms linear on viewport entry.
- No stagger (or very tight 30ms stagger). Information should feel like it loads all at once.
- Grid overlay scrolls at the same speed as content — no parallax on the grid itself.

**Glitch animation:**
```css
@keyframes glitch {
  0%   { transform: translateX(0); clip-path: inset(0 0 100% 0); }
  20%  { transform: translateX(-2px); clip-path: inset(20% 0 60% 0); }
  40%  { transform: translateX(2px); clip-path: inset(50% 0 30% 0); }
  60%  { transform: translateX(0); clip-path: inset(0 0 100% 0); }
  100% { transform: translateX(0); clip-path: inset(0 0 100% 0); }
}
```
Apply as a pseudo-element duplicate on hero text, triggered on hover or on a slow interval (every 5–8s).

**Loading states:**
- A progress bar: full-width 2px bar in Cyan, animated from left (width 0% → 100%) over the load duration.
- Spinner: a single Cyan arc rotating 360° with a `box-shadow: 0 0 8px #00f5d4` at 600ms linear infinite.
- Skeleton: dark panel bars with a Cyan shimmer traveling left-to-right.

## Voice & Copy Tone

**Tone words:** Terse. Direct. Technical. Confident. No waste.

**Language style:**
- Minimal words. The interface should not narrate itself. Give the user data and let them act.
- No fluff, no softening, no excuses. Short declarative statements.
- Technical terminology is fine — the audience knows the tools.
- Second person ("you") only when necessary. Often can be omitted: "Access denied" not "You don't have access."

**Headlines:** Sharp, often verb-first or noun-only. Uppercase by default. "ACTIVATE." / "SIGNAL LOST." / "ENTER THE GRID." / "QUEUE LOADED."

**CTAs:** Single-word imperatives are preferred. "EXECUTE" / "LOAD" / "CONNECT" / "SCAN" / "LAUNCH". Two-word max: "ENTER SYSTEM" / "JOIN STREAM."

**Body copy:** Minimal. UI should be mostly self-explanatory. When copy is needed: short, factual, precise. 1–2 sentences. No metaphors, no warmth. Data is the message.

**System messages (errors, confirmations):** Exact. "Connection failed. Retry in 3s." Not "Something went wrong, please try again later."

**Avoid:** Exclamation marks. Emoji. Warmth. Personality. Filler phrases. Anything that slows the user down.

## CSS Starter

```css
:root {
  /* Color */
  --color-bg:              #080808;
  --color-surface:         #111111;
  --color-surface-alt:     #1a1a1a;
  --color-grid-line:       #222222;
  --color-text:            #f0f0f0;
  --color-text-body:       #c0c0c0;
  --color-text-muted:      #606060;
  --color-cyan:            #00f5d4;
  --color-cyan-deep:       #00c4aa;
  --color-magenta:         #f706cf;
  --color-magenta-deep:    #c004a4;
  --color-lime:            #b5ff00;
  --color-danger:          #ff2244;

  /* Typography */
  --font-display: 'Syncopate', 'Orbitron', monospace;
  --font-body:    'Share Tech Mono', 'Fira Code', monospace;
  --t-hero:       4.5rem;
  --t-h1:         3rem;
  --t-h2:         1.875rem;
  --t-h3:         1.25rem;
  --t-body:       0.9rem;
  --t-label:      0.65rem;
  --t-micro:      0.6rem;

  /* Spacing */
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  24px;
  --space-lg:  48px;
  --space-xl:  96px;
  --space-2xl: 128px;

  /* Borders */
  --border-default:  1px solid #222222;
  --border-active:   1px solid #00f5d4;
  --border-radius:   0;

  /* Glow */
  --glow-cyan:    0 0 8px #00f5d4, 0 0 20px #00f5d440;
  --glow-magenta: 0 0 8px #f706cf, 0 0 20px #f706cf40;
  --glow-lime:    0 0 8px #b5ff00, 0 0 20px #b5ff0040;

  /* Grid texture */
  --grid-bg: repeating-linear-gradient(#222 1px, transparent 1px),
             repeating-linear-gradient(90deg, #222 1px, transparent 1px);
  --grid-size: 40px 40px;

  /* Motion */
  --transition-snap: 100ms linear;
  --transition-base: 150ms linear;
}
```
