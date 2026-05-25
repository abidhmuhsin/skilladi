---
name: themeprompts
description: "Use this skill when the user wants to apply a visual design theme, choose a Theme Prompts aesthetic, use themes from themeprompts.abid.dev, fetch a theme.md prompt, or style a site/app/page with a named theme such as Luxury Noir, Romantic Bloom, Brutalist, Dark Academia, Y2K Candy, or another Theme Prompts theme. Trigger phrases include: themeprompts, theme prompts, themes, use a theme, apply a theme, pick a vibe, theme.md, themeprompts.abid.dev."
---

# Theme Prompts

Use Theme Prompts as the source of truth for visual style guidance. Each theme is a Markdown design prompt served from:

```text
https://themeprompts.abid.dev/themes/<slug>.md
```

## Workflow

1. Identify the requested theme by name, slug, or aesthetic. If the user asks you to choose, pick the closest match from the catalog below.
2. Fetch the theme Markdown before applying it, because the hosted `theme.md` files may change.
3. Apply the theme as design direction for the user's actual deliverable. Do not paste the whole theme prompt back unless the user asks for the prompt itself.
4. Preserve product/domain usability over decorative fidelity. Use the theme's palette, typography, layout principles, component patterns, motion, and copy tone while still following any repo design system and frontend constraints.
5. If the named theme is not in the catalog, check the site or manifest first:

```bash
curl -L https://themeprompts.abid.dev/themes-config.js
```

Fetch a specific theme:

```bash
curl -L https://themeprompts.abid.dev/themes/luxury-noir.md
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

- Load the whole `theme.md` for implementation work, then translate it into concrete design decisions in CSS, components, copy, spacing, and interaction.
- Use the theme's CSS starter when creating new styles, but adapt variable names and tokens to the existing codebase.
- If the project already has a design system, map theme values into existing tokens/classes instead of bypassing local conventions.
- For frontend work, verify the result visually when possible. Check responsive layouts and ensure themed typography, spacing, buttons, cards, and states are coherent on mobile and desktop.
- For generated copy, follow the theme's voice and copy tone section.

## Choosing a Theme

When the user gives only a broad vibe, choose conservatively:

- Premium, luxury, jewelry, hospitality: `luxury-noir`, `velvet-luxe`, `old-money`, or `art-deco-glam`
- Calm, wellness, minimal, thoughtful: `japanese-zen`, `nordic-frost`, or `coastal-breeze`
- Fun, kids, creator, casual consumer: `pastel-playful`, `kawaii`, `memphis-pop`, or `y2k-candy`
- Editorial, portfolio, fashion, culture: `bold-editorial`, `dark-academia`, or `retro-groove`
- Futuristic, nightlife, gaming, music: `neon-rave`, `crystal-noir`, or `celestial`
- Handmade, nature, travel, lifestyle: `cottagecore`, `desert-boho`, `tropical-fiesta`, `romantic-bloom`, or `midnight-garden`
