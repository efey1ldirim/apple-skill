# Tokens — exact values

All values below shipped in production and were visually approved. Tailwind arbitrary values
first, CSS equivalents after. Every light value has a dark pair — never ship one without the
other.

## Canvas
| Role | Light | Dark |
|---|---|---|
| Page background | `#F5F5F7` | `#08080A` |
| Raised group surface | `#FFFFFF` | `rgba(255,255,255,0.055)` |
| Soft inset group (consent list) | `rgba(0,0,0,0.035)` | `rgba(255,255,255,0.055)` |
| Floating tile surface | `#FFFFFF` | `#1C1C1F` |
| Quiet fill (secondary pill, segmented rail, input outside group) | `rgba(0,0,0,0.04–0.06)` | `rgba(255,255,255,0.07–0.12)` |
| Segmented thumb | `#FFFFFF` | `#48484A` |
| Row hover | `rgba(0,0,0,0.025)` | `rgba(255,255,255,0.035)` |

## Ink (text) — tones by opacity
| Role | Light | Dark |
|---|---|---|
| Primary | `#000` | `#FFF` |
| Sub-line under a headline | `black/45` | `white/45` |
| Row description / field label | `black/40`–`/45` | `white/40`–`/45` |
| Footnote / hint / min-max labels | `black/30`–`/35` | `white/30`–`/35` |
| Placeholder | `black/25`–`/30` | `white/25` |
| Chevron / dots | `black/20`–`/25` | `white/25` |

(Tailwind `text-gray-500` / `dark:text-zinc-400` is an acceptable equivalent for "secondary"
in codebases that use the gray scale.)

## System colours (Apple)
| Name | Light | Dark |
|---|---|---|
| Blue | `#007AFF` | `#0A84FF` |
| Indigo | `#5856D6` | `#5E5CE6` |
| Green | `#34C759` | `#30D158` |
| Red | `#FF3B30` | `#FF453A` |
| Orange | `#FF9500` | `#FF9F0A` |
| Purple | `#AF52DE` | `#BF5AF2` |
| Grey | `#8E8E93` | `#8E8E93` |
Status tints used for dots/checks: emerald-600 / emerald-400 (ok), amber-500 (unknown).

## Lines
- Hairline separator: `h-px bg-black/[0.06] dark:bg-white/[0.07]`.
- Inset: starts at text. With 28px icon tile: `ml-14` (16 pad + 28 tile + 12 gap).
  With 36–40px leading element: `ml-[3.25rem]`. Without icon: `ml-4`.
- Card hairline (when a card needs an edge): `border-black/[0.07] dark:border-white/[0.09]`.
- Tile ring: `ring-1 ring-black/[0.04] dark:ring-white/[0.08]`.

## Radii
| Element | Radius |
|---|---|
| 28px icon tile | 8px |
| 36px store/app tile | 11px |
| 60px hero tile | 14px |
| 72px hero tile | 17px |
| Row group / panel | 18px |
| Soft inset list / card | 20px |
| Row inside inset list (hover shape) | 14px |
| Input outside group | 12px |
| Buttons, segmented, filter chips, selection marks | full |

## Shadows
| Use | Light | Dark |
|---|---|---|
| Row group | `0 1px 2px rgba(0,0,0,0.05)` | none (surface is translucent white) |
| Floating tile | `0 10px 30px -12px rgba(0,0,0,0.35)` + blurred puddle `bg-black/10…/25 blur-xl` under it | `0 10px 30px -12px rgba(0,0,0,0.8)` + `ring-white/[0.08]`, puddle `bg-black/60` |
| Card | `0 1px 2px rgba(0,0,0,0.04), 0 10px 28px -18px rgba(0,0,0,0.35)` | `0 1px 2px rgba(0,0,0,0.5), 0 10px 28px -18px rgba(0,0,0,0.9)` |
| Card hover | `0 1px 2px rgba(0,0,0,0.05), 0 18px 40px -20px rgba(0,0,0,0.45)` + `-translate-y-px` | `…rgba(0,0,0,0.6)…rgba(0,0,0,1)` |
| Segmented thumb | `0 1px 3px rgba(0,0,0,0.12)` | same |
| Slider thumb | `0 2px 6px rgba(0,0,0,0.25)` | same |
| Badge halo (badge floats over card edge) | `0 0 0 3px #F5F5F7` (canvas colour ring) | `0 0 0 3px #000` |
| Coloured CTA glow (upgrade only) | `0 8px 22px -12px rgba(37,99,235,0.9)` | same |

## Type scale (px / weight / tracking / leading)
| Role | Spec |
|---|---|
| Hero ending | `lg:104px` semibold |
| Page title | 34 / 600 / −0.022em / 1.1 |
| Wizard step title | 26 → `sm:30` → `lg:36` / 600 / −0.026em / 1.12 |
| Compact screen title (consent) | 24 / 600 / −0.022em / 1.15 |
| Section title | 22 / 600 / −0.021em / 1.2 (page) · 17 / 600 / −0.015em (in-flow group title) |
| Identity name | 18 / 600 / −0.018em |
| Card name | 17 / 600 / −0.01em / 1.3 |
| Lede under page title | 17 / 400 / 1.5, max-width 34em |
| Row title | 16 / 400 / −0.01em / 1.3 (settings) · 15 / 500 (consent list) |
| Button | 15–16 / 500 / −0.01em |
| Sub-line / body small | 15 / 400, tone `/45` |
| Description | 13 / 400 / 1.4–1.45, tone `/40` |
| Footnote | 12.5 / 400, tone `/30` |
| Big stat | 28–34 tabular-nums |
Font: system stack (`-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
"Helvetica Neue", Arial, sans-serif`) + `antialiased`.

## Sizing
| Element | Size |
|---|---|
| Row min-height | 52px (identity row 72px) |
| Primary button | `h-[46px]` inline / `h-[50px]` full-width footer |
| Secondary grey pill | 38px |
| Card action pill | 36px (`h-9 px-[18px]`), compact 30px (`px-3.5 text-[13px]`) |
| Filter chip | 27px, 12.5px text |
| Segmented control | 44px rail, 4px padding |
| Selection circle | 21px, ring 1.5px `black/15` / `white/20`; check 12–13px stroke 3 |
| Icon tiles | 28 (settings) · 36 (store) · 60 / `lg:72` (hero) |
| Avatar in identity row | 52px circle, initials 19px |
| Separator dots (A · · · B) | 4px dots, 5px gap, `black/20` |
| Header bar | 52px |
| Progress bar | 3px tall, 64px wide per phase |

## Layout widths
| Context | Max width |
|---|---|
| Consent / focused card | 25rem |
| Notice / error | 22rem |
| Wizard / settings column | 38rem (was 30rem — rejected as "squeezed") |
| Wide wizard content (maps) | 46rem |
| Dashboard | 1400px, 12-col bento |
| Hint text under title | 26rem |
Page padding: `px-5`/`px-6`; vertical `py-8 sm:py-10`; header→content `mb-8 lg:mb-11`;
group spacing `mb-5`; footnote `mt-2 px-4`.

## Motion
| Use | Spec |
|---|---|
| Press | `active:scale-[0.985]` (buttons), `0.99` (full-width), `0.97` (small pills) |
| Button transitions | `transition-[opacity,transform] duration-200` |
| Segmented thumb slide | `duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]` (Apple's sheet curve) |
| Progress fill | `duration-500 ease-out` |
| Card hover lift | `duration-[250ms]`, `-translate-y-px` |
| Hover opacity on filled buttons | `hover:opacity-85` |
| Disabled | `disabled:opacity-25`–`/30` (primary), `/40` (small) |
Always add `motion-reduce:transform-none` on scale/translate effects.

## CSS variables version (non-Tailwind projects)
```css
:root {
  --canvas: #F5F5F7;
  --surface: #FFFFFF;
  --surface-inset: rgba(0,0,0,.035);
  --tile: #FFFFFF;
  --fill-quiet: rgba(0,0,0,.05);
  --hover: rgba(0,0,0,.025);
  --ink: #000;
  --ink-2: rgba(0,0,0,.45);
  --ink-3: rgba(0,0,0,.40);
  --ink-4: rgba(0,0,0,.30);
  --hairline: rgba(0,0,0,.06);
  --cta: #000; --cta-ink: #fff;
  --shadow-group: 0 1px 2px rgba(0,0,0,.05);
  --shadow-tile: 0 10px 30px -12px rgba(0,0,0,.35);
  --radius-group: 18px; --radius-tile: 14px;
  --ease-apple: cubic-bezier(.32,.72,0,1);
  --font: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
}
@media (prefers-color-scheme: dark) {
  :root {
    --canvas: #08080A;
    --surface: rgba(255,255,255,.055);
    --surface-inset: rgba(255,255,255,.055);
    --tile: #1C1C1F;
    --fill-quiet: rgba(255,255,255,.08);
    --hover: rgba(255,255,255,.035);
    --ink: #fff;
    --ink-2: rgba(255,255,255,.45);
    --ink-3: rgba(255,255,255,.40);
    --ink-4: rgba(255,255,255,.30);
    --hairline: rgba(255,255,255,.07);
    --cta: #fff; --cta-ink: #000;
    --shadow-group: none;
    --shadow-tile: 0 10px 30px -12px rgba(0,0,0,.8), inset 0 0 0 1px rgba(255,255,255,.08);
  }
}
```
