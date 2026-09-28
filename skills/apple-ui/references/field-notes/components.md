# Components — validated recipes (React + Tailwind)

These are the exact recipes from approved production screens. Put them in ONE shared module
per project (e.g. `surface.tsx`) and import everywhere — a copied class string drifts on the
first tweak and two screens silently stop matching. Presentation must be separable from data
(export the pure view component) so each screen can be rendered on a preview route without
auth/network and checked by eye.

---

## Page shell (settings / in-app screen)
```tsx
<div className="min-h-screen bg-[#F5F5F7] text-black antialiased dark:bg-[#08080A] dark:text-white">
  <div className="mx-auto w-full max-w-[38rem] px-5 py-8 sm:py-10">…</div>
</div>
```
Page title: `text-[34px] font-semibold leading-[1.1] tracking-[-0.022em] mb-2`.
Lede: `text-[17px] leading-[1.5] text-black/45 max-w-[34em]`.

## Settings list (iOS "Settings" grammar)

**Group** — inserts its own separators so conditional rows never produce double or trailing lines:
```tsx
function Group({ children, inset = true, footnote }) {
  const rows = Children.toArray(children).filter(isValidElement);
  return (
    <div>
      <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] dark:bg-white/[0.055] dark:shadow-none">
        {rows.map((row, i) => (
          <div key={i}>
            {i > 0 && <div className={`${inset ? "ml-14" : "ml-4"} h-px bg-black/[0.06] dark:bg-white/[0.07]`} />}
            {row}
          </div>
        ))}
      </div>
      {footnote && <p className="mt-2 px-4 text-[13px] leading-[1.45] text-black/40 dark:text-white/40">{footnote}</p>}
    </div>
  );
}
```
**Row** — link, button, or static; whole row is the target:
```tsx
const ROW = "flex w-full min-h-[52px] items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-black/[0.025] dark:hover:bg-white/[0.035]";
// leading: 28px coloured squircle  → <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] text-white bg-[#007AFF] dark:bg-[#0A84FF]">{icon}</span>
// title:   text-[16px] leading-[1.3] tracking-[-0.01em]   (danger: text-[#FF3B30] dark:text-[#FF453A])
// desc:    mt-0.5 text-[13px] leading-[1.4] text-black/40
// detail:  quiet value on the right ("Plus", "3 apps") text-[15px] text-black/40
// trailing: ChevronRight h-4 w-4 text-black/25 — only when the row navigates and has no custom control
```
**Identity row** (top of settings, like the Apple Account card): own group, 72px tall,
52px initials circle `bg-black/[0.06] text-[19px] font-semibold text-black/70`, name
`text-[18px] font-semibold tracking-[-0.018em]`, e-mail `text-[13.5px] text-black/45`,
chevron; **tappable** → account details (the first thing people tap is their name).

**Centred action row** (iOS "Sign Out"): `min-h-[52px] justify-center text-[16px] font-medium`, red when destructive.

**Panel** (form/explanation block): same surface as Group (same radius, same shadow) so list
and form never look like two card languages. Title `17/600/-0.015em`, description
`13.5px /45`, body `p-5`. `PanelRow`: label left, control right, `py-3.5`; `PanelDivider` = hairline.

## Buttons
```tsx
// Primary — ONE per screen
"flex h-[46px] items-center justify-center rounded-full bg-black px-6 text-[15px] font-medium tracking-[-0.01em] text-white transition-[opacity,transform] duration-200 active:scale-[0.985] disabled:opacity-30 dark:bg-white dark:text-black"
// Primary full-width footer
"flex h-[50px] w-full … text-[16px] … active:scale-[0.99] disabled:opacity-25"
// Secondary grey pill (outside groups)
"flex h-[38px] items-center justify-center rounded-full bg-black/[0.06] px-5 text-[15px] font-medium tracking-[-0.01em] text-black active:scale-[0.985] disabled:opacity-30 dark:bg-white/[0.12] dark:text-white"
// Text action (Cancel / Back / Close)
"h-10 w-full text-[15px] text-black/45 hover:text-black/70 dark:text-white/45 dark:hover:text-white/70"
// Inline action inside a group (e.g. "Optimise with AI"): a row, not a box
"flex min-h-[48px] w-full items-center gap-2 px-4 py-2.5 text-left text-[15px] tracking-[-0.01em] hover:bg-black/[0.025] disabled:opacity-30"
```
Card-level action set (list of integration cards), base `h-9 px-[18px] rounded-full text-sm font-medium active:scale-[0.97]`:
- FILLED black pill (the heavy action) · QUIET grey text, `px-1` (healthy state — a door, not a task)
- DANGER filled red `#FF3B30/#FF453A` (broken → repair) · DANGER_QUIET red text, no fill ("Disconnect")
- SECONDARY transparent + `shadow-[inset_0_0_0_1px_rgba(0,0,0,0.07)]` · GHOST grey text
- COMPACT variant `h-[30px] px-3.5 text-[13px]` for dense request cards
- SOON: non-interactive `span` grey pill `bg-black/[0.045] text-gray-500 cursor-default`
- Fixed action column `flex-[0_0_130px] justify-end` so every card's right edge aligns.
- ⚠️ Don't make a red variant by appending `text-red` to a class that already has `text-gray-500` —
  CSS source order, not class order, wins. Give the red variant its own constant.

## Segmented control (sliding thumb)
One white thumb slides; selection is **position**, not a filled black button (which would
compete with the primary).
```tsx
<div className="relative flex h-11 rounded-full bg-black/[0.05] p-1 dark:bg-white/[0.08]">
  <span aria-hidden className="pointer-events-none absolute inset-y-1 left-1 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] dark:bg-[#48484A]"
        style={{ width: `calc((100% - 0.5rem) / ${n})`, transform: `translateX(${index * 100}%)` }} />
  {options.map(o => <button className={`relative z-10 flex-1 rounded-full px-3 text-[15px] tracking-[-0.01em] ${sel ? "text-black dark:text-white" : "text-black/45 dark:text-white/45"}`} aria-pressed={sel}>…</button>)}
</div>
```
Place it **above** a group or as a stacked row (`StackedRow`: title, description, control `mt-2.5`).

## Choice row (single/multi select)
Whole row is the button; mark is a **21px circle** on the right (settings) or left (consent list).
```tsx
<span className={`flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-full transition-colors ${
  selected ? "bg-black text-white dark:bg-white dark:text-black" : "ring-[1.5px] ring-inset ring-black/15 dark:ring-white/20"}`}>
  {selected && <Check className="h-3 w-3" strokeWidth={3} />}
</span>
```
Real `disabled` (not just faded) when a precondition is unmet (e.g. agreement not opened yet).

## Fields
- **Inside a group — bare:**
  `w-full bg-transparent text-[16px] leading-[1.35] tracking-[-0.01em] outline-none placeholder:text-black/25`;
  textarea same with `resize-none leading-[1.5]`. Field row: `block min-h-[52px] px-4 py-3`,
  optional label above `text-[13px] text-black/45 mb-0.5`, hint below `text-[12.5px] text-black/35 mt-1`.
- **Outside a group — filled:**
  `h-11 w-full rounded-[12px] bg-black/[0.04] px-3.5 text-[15px] outline-none placeholder:text-black/30 focus:ring-2 focus:ring-black/10 dark:bg-white/[0.07] dark:focus:ring-white/15`.
- Control row: label left, narrow control (swatch, icon picker, logo, switch) right, `min-h-[52px] px-4 py-3`.
- Switch row: same, `py-2`, controls in `flex gap-2` on the right.
- Slider row: title left + current value right as quiet grey text (never inside a badge);
  6px track, 20px white thumb with `0 2px 6px rgba(0,0,0,.25)`, fill colour via CSS var
  (`--fill` % inline, colours from theme vars so the black fill doesn't vanish on dark);
  min/max labels `text-[12px] /30` under it.
- Required-fields note: "Name and sector required" — join labels, lowercase all but the first
  with the **locale** (`toLocaleLowerCase("tr")` — plain `toLowerCase` breaks Turkish I/ı).

## Wizard shell
- Container: `flex h-[100dvh] flex-col` (dvh, not vh — mobile Safari).
- Header 52px: **Back** as text + chevron (`text-[15px] text-black/45`, hidden via `opacity-0` on
  step 1 to keep layout), centred **phase progress**, **Close** as text.
- Phase progress: per phase a name (`13px`; only the active phase's name on narrow screens) +
  one 3px × 64px bar filling with `duration-500`. No numbered circles, no "%38" pill, no gradient
  bar — three indicators saying the same thing were collapsed into one.
- Main: `flex-1 overflow-y-auto`, inner `mx-auto my-auto w-full max-w-[38rem] px-5 py-8` —
  `my-auto` centres short steps vertically and auto-collapses on long ones.
- Step header, centred: 60/`lg:72`px floating tile (white, radius 14/`lg:17`, tile shadow,
  blurred puddle below), title 26/30/36px, hint `15`/`lg:17` `/45` max-w 26rem. One-line title
  says *what*; fields say *how*.
- Group title (in-flow): `mb-2 px-1 text-[17px] font-semibold tracking-[-0.015em]`.
- Footer: sticky, `bg-[#F5F5F7]/85 backdrop-blur-xl`, a 32px gradient fade **above** it
  (`-top-8 bg-gradient-to-t from-[#F5F5F7] to-transparent`) — no top border. Full-width primary
  pill, optional note `12.5px /30` centred, `pb-[max(1.25rem,env(safe-area-inset-bottom))]`.
- Embedded mode: when steps render inside an already-white surface, groups drop their own
  background and use negative margins (`-mx-4 sm:-mx-5`) so row padding aligns with the outer
  edge — no box in a box. Pass it via context, not a prop on every group.
- Final screen: giant headline (`lg:104px`) + one button. Nothing else.

## Consent / connect screen (the reference implementation — "exactly what I wanted")
- Stage: `flex min-h-[100dvh] items-center justify-center bg-[#F5F5F7] dark:bg-[#08080A]`.
- Column: `flex max-h-[100dvh] w-full max-w-[25rem] flex-col px-6 py-6`; header and actions
  `shrink-0`; list `min-h-0 flex-1 overflow-y-auto overscroll-contain` with hidden scrollbar.
- Anchor: **two 60px tiles with three 4px dots between** — `[app] · · · [product]`, order
  matching the sentence ("App wants to connect to your account"). Explains the relationship
  before reading.
- App tile priority: verified brand mark → the client's own `logo_uri` → monogram initial
  (23px semibold). Brand marks only for **verified** clients (a self-declared name must not get
  a real logo — impersonation risk). Full-bleed marks fill the tile; others sit in 30px.
- Two-tone title: app name `24/600/-0.022em` primary; sentence below `15px /45`.
- Trust line, one line, `13px /40`: verified → green check + "recognises this app"; unverified →
  5px amber dot + "doesn't recognise this app · it named itself". No yellow warning box.
- List: soft inset block `rounded-[20px] bg-black/[0.035]`, `px-1 py-1`; rows
  `rounded-[14px] px-3 py-2 gap-3 items-start`, circle tick on the left, title `15/500`,
  detail `13px /40`; hairline `ml-[3.25rem]`. Row role `switch` with `aria-checked`.
- Actions: full-width black pill "Allow" (disabled when nothing selected; spinner when busy),
  text "Cancel" under it (`mt-0.5 h-10`), one-line footnote "You can remove this in Account".
- Loading = same stage + a tiny spinner `/25`. Errors = same stage, `22px` title + `15px /45`
  body, `max-w-[22rem]` — never a different visual language for edge states.

## Integration / platform cards
- Card = one per **platform** (not per connection). Horizontal, `rounded-[20px]`, hairline +
  card shadow, `px-[18px] py-4 min-h-[92px]`, hover lift 1px.
- States → action weight: not connected = black pill · connected = quiet grey text · broken =
  red pill + thin red outline (`border-[#ff3b30]/50`) + red "!" badge top-left with canvas-colour
  halo · coming soon = grey `span` pill. Healthy = 8px green dot in the same corner as the "!".
- Logos: brand's own vector, whole, uncropped. Square marks sized by glyph box; wide wordmarks
  sized as % of tile (`w-[84%] h-auto` — 88% touches the edges, 80% looks weak). Clean SVGs
  (add missing `viewBox`, strip Illustrator DOCTYPE/ENTITY junk).
- The first/only actionable platform goes at the top.

## Dashboard tiles (bento)
- 12-column grid, `max-w-[1400px]`, `items-start` (otherwise short cards stretch and show empty
  bottoms). Ask each card its **natural width** first, then compose; density is a result, not a goal.
- `TILE` (vertical stat tile): label, big tabular number 28px, support line — packed to the top
  (no `justify-between`, which spreads contents and misaligns neighbours).
- `TILE_ACCENT`: the winner is distinguished by **tone** (black surface), not colour.
- Section headline answers first: grey "Top channel" + 34px black "Website." + one proof line;
  comparisons by tone ("was 28.4% last period").
- Status colour only in small elements (support line "12 cancellations · high"), numbers neutral.
- Bars: one neutral colour; largest opaque, rest ~35%; fixed max bar width (`max-w-[72px]`) so a
  full-width chart doesn't turn into 190px slabs.
- No verdict when data is thin ("Too early to say.").
