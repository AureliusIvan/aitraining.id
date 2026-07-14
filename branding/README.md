# AI Training Indonesia logo system

Source lockup delivered 2026-07-15: `ai-training-indonesia-7a-transparent.png` (charcoal + crimson on transparent).

The mark: geometric caret **A** + solid crimson **I**, with the same A/I treatment echoed inside TRAINING and a caret A closing INDONESIA. Crimson rule under INDONESIA locks the lockup width.

## Live site wiring

| Placement | Asset |
|-----------|-------|
| Nav wordmark (dark header) | `/assets/brand/logo-ondark.png` |
| Light backgrounds | `/assets/brand/logo.png` |
| Favicon / `icon.png` / `apple-icon.png` | AI mark on black (from left cluster of the lockup) |
| Open Graph | `src/app/opengraph-image.tsx` embeds `logo-ondark.png` |

## Files

| File | Use |
|------|-----|
| `png/ai-training-indonesia-7a-transparent.png` | Master source (unchanged upload) |
| `png/lockup-red-1600.png` | Horizontal lockup, light backgrounds |
| `png/lockup-red-ondark-1600.png` | Horizontal lockup, dark backgrounds (white + crimson) |
| `png/mark-ai.png` / `mark-ai-ondark.png` | AI mark only |
| `png/icon-red-512.png` / `icon-red-1024.png` | Square AI mark, transparent |
| `public/assets/brand/*` | Same assets copied for Next.js static serving |

Older amber-tile SVG lockups in this folder (`lockup.svg`, `icon.svg`, …) are superseded by this crimson system for the live site. Keep them only as archive unless you deliberately revive that direction.

## Palette

- Crimson `#B3282D` (approx; sample from master PNG `#B3282D` / `#B01E23`)
- Charcoal `#111111` (light-bg lockup), White `#FFFFFF` (dark-bg lockup)
- Medium grey `#555555` (secondary stems in light lockup)

## Usage

1. **Dark surfaces (site default):** use `logo-ondark` / `icon-ondark`.
2. **Light surfaces / print on white:** use `logo` / `icon` (charcoal + crimson).
3. **Minimum lockup height ~28 px.** Below that, switch to the square AI mark.
4. **Do not recolor the crimson accents.** The red A/I in TRAINING and the red I in the mark are brand-critical.
