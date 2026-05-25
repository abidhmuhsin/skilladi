---
name: themeprompts
description: "Use this skill when the user wants to apply a visual design theme, choose a Theme Prompts aesthetic, use themes from themeprompts.abid.dev, fetch a theme.md prompt, create a new custom theme prompt, or style a site/app/page with a named theme such as Luxury Noir, Romantic Bloom, Brutalist, Dark Academia, Y2K Candy, or another Theme Prompts theme. Trigger phrases include: themeprompts, theme prompts, themes, use a theme, apply a theme, create a theme, custom theme, pick a vibe, theme.md, themeprompts.abid.dev."
---

# Theme Prompts

Use Theme Prompts as the source of truth for visual style guidance. Theme prompts are bundled in `references/<slug>.md` so the skill works without network access. The website remains the public preview and latest hosted source:

```text
https://themeprompts.abid.dev/themes/<slug>.md
```

## Workflow

1. Identify the requested theme by name, slug, or aesthetic. If the user asks you to choose, pick the closest match from the catalog below.
2. For implementation, load the bundled Markdown from `references/<slug>.md`. Fetch from `https://themeprompts.abid.dev/themes/<slug>.md` only when the user asks for the latest version, raw Markdown, or prompt links.
3. When the user asks what themes are available, asks for a theme recommendation, or asks about a specific theme, include the single preview/gallery link: `https://themeprompts.abid.dev/`. Do not show `theme.md` links unless the user explicitly asks for prompt links or raw Markdown.
4. Before implementation, ask whether to apply only the visual style or both the visual style and the theme's written voice. If the user already specified writing/tone expectations, follow that instead of asking.
5. Apply the theme as design direction for the user's actual deliverable. Do not paste the whole theme prompt back unless the user asks for the prompt itself.
6. Preserve product/domain usability over decorative fidelity. Use the theme's palette, typography, layout principles, component patterns, and motion while still following any repo design system and frontend constraints. Apply the theme's written voice only when the user chooses it or has already requested it.
7. If the user asks to create a new custom theme, follow the Custom Theme Creation workflow below.
8. If the named theme is not in the catalog, check the site or manifest first:

```bash
curl -L https://themeprompts.abid.dev/themes-config.js
```

Fetch the latest hosted version of a specific theme:

```bash
curl -L https://themeprompts.abid.dev/themes/luxury-noir.md
```

Open the public preview/gallery:

```text
https://themeprompts.abid.dev/
```

## Theme Catalog

| Theme | Slug | Best fit |
|---|---|---|
| Luxury Noir | `luxury-noir` | Dark luxury, gold accents, premium editorial presence |
| Romantic Bloom | `romantic-bloom` | Soft botanical, blush/ivory warmth, gentle emotional brands |
| Bold Editorial | `bold-editorial` | Stark contrast, oversized type, loud campaigns |
| Pastel Playful | `pastel-playful` | Cheerful pastel products, friendly consumer apps |
| Midnight Garden | `midnight-garden` | Moody botanical luxury, emerald and gold |
| Art Deco Glam | `art-deco-glam` | 1920s geometric glamour, cream and gold |
| Coastal Breeze | `coastal-breeze` | Airy nautical freshness, ocean blues and white space |
| Retro Groove | `retro-groove` | 70s warmth, mustard/orange, funky energy |
| Neon Rave | `neon-rave` | Electric dark UI, cyan/magenta/lime, nightlife or gaming |
| Japanese Zen | `japanese-zen` | Serene minimalism, ink/vermillion, intentional white space |
| Tropical Fiesta | `tropical-fiesta` | Bright coral/turquoise/mango, celebratory travel or events |
| Celestial | `celestial` | Cosmic elegance, indigo, stars, mystical depth |
| Old Money | `old-money` | Understated authority, navy/ivory, traditional prestige |
| Kawaii | `kawaii` | Cute Japanese pop, pastel bubbles, playful sweetness |
| Brutalist | `brutalist` | Raw functional UI, hard borders, black and white |
| Rose Gold Marble | `rose-gold-marble` | Feminine luxury, marble, rose gold, aspirational brands |
| Carnival | `carnival` | Vintage circus spectacle, crimson/gold, theatrical energy |
| Cottagecore | `cottagecore` | Earthy cottage warmth, botanical, handmade charm |
| Crystal Noir | `crystal-noir` | Dark holographic luxury, prismatic futuristic surfaces |
| Desert Boho | `desert-boho` | Terracotta, ochre, artisan canyon warmth |
| Nordic Frost | `nordic-frost` | Scandinavian minimalism, glacier blue, crisp restraint |
| Velvet Luxe | `velvet-luxe` | Burgundy-black opulence, champagne, sensual luxury |
| Memphis Pop | `memphis-pop` | 80s geometry, clashing primaries, playful boldness |
| Dark Academia | `dark-academia` | Gothic literary, parchment, old wood, scholarly mood |
| Y2K Candy | `y2k-candy` | Chrome gradients, candy pastels, early-2000s optimism |

## Applying a Theme

- Load the whole bundled `references/<slug>.md` file for implementation work, then translate it into concrete design decisions in CSS, components, copy, spacing, and interaction.
- Use the theme's CSS starter when creating new styles, but adapt variable names and tokens to the existing codebase.
- If the project already has a design system, map theme values into existing tokens/classes instead of bypassing local conventions.
- For frontend work, verify the result visually when possible. Check responsive layouts and ensure themed typography, spacing, buttons, cards, and states are coherent on mobile and desktop.
- For generated copy, follow the theme's voice and writing guidance only when the user chooses "visual style and written voice" or explicitly asks for writing changes.

## Custom Theme Creation

When the user wants to create a new theme, generate a complete `theme.md` style prompt following the same structure as the bundled references.

Use this workflow:

1. Ask for the desired vibe, audience/use case, and any must-use or must-avoid colors/fonts if they are not already clear.
2. Read 2-3 bundled references that are closest to the requested vibe to match the expected depth and section structure.
3. Create an original theme with a clear name and slug. Avoid copying a bundled theme with only superficial color changes.
4. Include these sections: `Overview`, `Color Palette`, `Typography`, `Visual Language`, `Layout Principles`, `Component Patterns`, `Motion & Interaction`, `Voice & Copy Tone`, and `CSS Starter`.
5. Make the palette practical: define background, surface, primary/secondary text, muted text, accent(s), border, glow/shadow, and a ratio such as `70% base / 20% surface / 10% accent`.
6. Make component guidance implementation-ready for buttons, cards, inputs, badges, and dividers.
7. After generating the theme prompt, ask what to do next unless the user already specified the next action. Do not edit files before this confirmation.
8. If the user chooses to try/use it now, apply the generated theme to their current project without saving it to the skill catalog unless they also choose saving.
9. If the user confirms saving, write it to `references/<slug>.md` and add it to the Theme Catalog in `SKILL.md`. Otherwise, return the generated Markdown only.

Use this next-step prompt:

```text
What would you like to do with this theme?

1. Try it now in the current project
2. Save it to the local Theme Prompts catalog
3. Do both
```

For custom themes, do not claim the theme exists on `themeprompts.abid.dev` unless it has been published there. Use local references for saved custom themes.

## Contributing Custom Themes

When the user wants to contribute a custom theme back to the skill repo, help prepare a small, reviewable change.

Contribution checklist:

1. Save the theme prompt at `references/<slug>.md`.
2. Add one Theme Catalog row in `SKILL.md` with the theme name, slug, and a concise mood/fit description.
3. Check that the theme Markdown follows the required custom theme sections.
4. Verify the slug is lowercase kebab-case and does not conflict with an existing bundled reference.
5. Prepare a branch, commit, and PR summary if the user asks.

Suggested commands:

```bash
git checkout -b add-theme-<slug>
git add themeprompts/SKILL.md themeprompts/references/<slug>.md
git commit -m "Add <Theme Name> theme prompt"
```

Suggested PR body:

```markdown
## Summary
- Add the <Theme Name> theme prompt
- Register it in the Theme Prompts catalog

## Notes
- This adds the prompt to the skill repo only; website publication is separate.
```

Do not push branches, open PRs, or publish to the website unless the user explicitly asks. Do not say a contributed theme is available on `themeprompts.abid.dev` until it has been deployed there.

## Implementation Scope

Before changing files, ask a concise question unless the user already made the scope clear:

```text
Should I apply just the visual style, or also adjust the wording to match the theme's written voice?
```

- Just the visual style: apply palette, typography, spacing, layout, components, imagery direction, and motion without rewriting product text.
- Visual style and written voice: apply the visual style and revise generated or existing UI text to match the theme's voice.

## Answering Theme Queries

When the user is browsing, comparing, or asking for links, use one overall gallery/preview link and a compact two-column table with theme name and mood/fit. Do not repeat the preview link for each theme, and do not show direct `theme.md` links unless the user explicitly asks for prompt links or raw Markdown.

```markdown
Preview gallery: https://themeprompts.abid.dev/

| Theme | Mood |
|---|---|
| Luxury Noir | Dark luxury, gold accents, premium editorial presence |
```

For a full list, include all catalog themes only when the user asks for all themes. For recommendations, include only the recommended themes. Use the single gallery link for visual preview because theme selection happens on the site. Fetch direct `theme.md` links internally for implementation; show them to the user only when they ask for prompt links or raw Markdown.

## Choosing a Theme

When the user gives only a broad vibe, choose conservatively:

- Premium, luxury, jewelry, hospitality: `luxury-noir`, `velvet-luxe`, `old-money`, or `art-deco-glam`
- Calm, wellness, minimal, thoughtful: `japanese-zen`, `nordic-frost`, or `coastal-breeze`
- Fun, kids, creator, casual consumer: `pastel-playful`, `kawaii`, `memphis-pop`, or `y2k-candy`
- Editorial, portfolio, fashion, culture: `bold-editorial`, `dark-academia`, or `retro-groove`
- Futuristic, nightlife, gaming, music: `neon-rave`, `crystal-noir`, or `celestial`
- Handmade, nature, travel, lifestyle: `cottagecore`, `desert-boho`, `tropical-fiesta`, `romantic-bloom`, or `midnight-garden`
