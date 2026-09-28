# Engineering gotchas — what breaks these designs in real browsers

## Viewport height
- Use `100dvh`, not `100vh`. Mobile Safari's `vh` includes the area under the address bar, so a
  "fits on one screen" layout pushes its button off-screen.
- Fixed-height flows: header/actions `shrink-0`, list `min-h-0 flex-1 overflow-y-auto`
  (`min-h-0` is required or the flex child refuses to shrink).
- Bottom padding for the home indicator: `pb-[max(1.25rem,env(safe-area-inset-bottom))]`.

## Grid / flex min-content overflow
Symptom: on mobile every card is wider than the viewport (e.g. 594px on a 375px screen) but
there is no horizontal scroll — content is silently clipped.
Cause: grid/flex items default to `min-width: auto`; one wide child (heatmap, table,
`min-w-[560px]`) grows the whole track.
Fix — all three, one alone doesn't work:
1. `min-w-0` on the scroll container (`overflow-x-auto` alone is not enough).
2. `min-w-0` on the grid **cell** wrapper too.
3. Explicit `grid-cols-1` on the grid (turns the implicit `auto` track into `minmax(0,1fr)`).
Diagnose by cloning each item into a hidden `width:min-content` box and reading its width.

## Bento grids
- `items-start` on the grid, otherwise cells stretch to the tallest card.
- Don't `justify-between` inside tiles — it spreads content into stretched space.
- Tailwind breakpoints read the **viewport**, not the container: a card in a narrow slot needs
  explicit grid classes; `sm:grid-cols-4` won't react to the slot. (Or use container queries.)

## Inputs on iOS
- iOS zooms on focus if input font-size < 16px. A global rule
  `@media (max-width:768px){input,textarea,select{font-size:16px!important}}` is common — which
  means `text-[15px]` on an input does nothing on mobile; size inputs for both breakpoints and
  use `md` (768) as the threshold, not `sm`.
- Autogrow textareas: `scrollHeight` counts the **placeholder**. Measuring an empty box while
  the container is narrow locks it at two lines. Don't write a JS height on an empty textarea —
  clear the inline height and let CSS `min-h` rule; re-measure on `resize`,
  `visualViewport.resize`, `focusin`, and `document.fonts.ready`.

## Tailwind class conflicts
Two utilities setting the same property: the winner is **CSS source order**, not order in the
class string. `BTN_GHOST + " text-red-500"` may stay grey. Make a separate constant.

## Dark mode
- Every light colour needs a `dark:` pair. Inline `style={{color:…}}`, SVG attributes (charts)
  and `prose` blocks escape class-based audits — route them through CSS variables
  (`--ink-*`, `--surface-*`, `--cta`, `--chart-series-*`, `--tooltip-*`).
- When introducing a token, its light value must equal the old hard-coded value exactly.
- Shadows vanish on black: switch to translucent-white surfaces or inset highlight rings.
- A black slider fill / black progress bar disappears on dark — theme it via variables.
- Badge halo rings must use the **canvas** colour of each theme (`#F5F5F7` / `#000`).
- Avoid `*:focus{outline:none}` globally; if present, give interactive primitives their own
  `focus-visible` ring — dark mode makes the missing focus much worse.
- Watch low-contrast "Active" badges (`bg-emerald-500 text-white` ≈ 2.5:1).

## Dates / time (for UI strings)
- Node 20 + `en-US`/`en-CA` with `hour12:false` renders midnight as "24". Use `hourCycle:"h23"`.
- Postgres `timestamptz` may arrive as `"2026-08-15 15:09:28+00"` — normalise the space **and**
  `+00` before `new Date()`.

## Locale
- Lower/upper-casing labels mid-sentence: use `toLocaleLowerCase(locale)` (Turkish I/ı/İ/i).

## Verifying
- Every design decision was measured on a temporary `/__preview` route rendering the pure view
  component with fixture data: no auth, no network, both themes, 375px and desktop.
- If an animation looks frozen in an embedded preview pane, the pane may be hidden (rAF paused) —
  bring it to front before debugging.
- Vite in some setups serves stale CSS after edits; restart the dev server before concluding a
  style "doesn't work".
