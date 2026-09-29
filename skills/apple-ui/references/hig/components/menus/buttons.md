# Buttons ⚠️ CRITICAL
Source: https://developer.apple.com/design/human-interface-guidelines/buttons · Section: Components › Menus and actions · Supported platforms: all six on the platform strip ("No additional considerations for tvOS"; specific guidance for iOS/iPadOS, macOS, visionOS, watchOS) · Ingested: 2026-09-29 · Apple last updated: 2025-12-16 (updated guidance for Liquid Glass). Change log (six rows, read from the fetch because the screenshots stop at the "Change log" heading): **2025-12-16** Liquid Glass · **2025-06-09** button styles and content · **2024-02-02** visionOS buttons don't support custom hover effects · **2023-12-05** terminology/guidance for visionOS · **2023-06-21** visionOS · **2023-06-05** watchOS. One DocC fetch, read in full. 16 screenshots (light-mode page, hero → the "Change log" heading) were compared with the fetched text and image alt text line by line: everything matches; the sixteen screenshots are contiguous. Text that exists only inside pictures (hero, alert example, watch screens, state tiles) is marked **(from screenshot)**. The two visionOS **videos** (button styles with hover/selection, and the dwell tooltip) are shown in the screenshots only as still frames with a "Play" link; they were **not downloaded or measured** because motion is not what the page is about (only their alt text is recorded). Screenshots 7–16 also show a macOS system notification banner ("Pil Azaldı", a low-battery notice) overlapping the browser chrome; it is OS noise and was ignored.

**⚠️ CRITICAL — declared by the user.** Every button the skill produces must pass the **BUTTONS GATE** in `SKILL.md`: tokens `tokens/apple-buttons.{css,json}`, static checker `tools/check-buttons.mjs`, live probe `tools/run-buttons-probe.mjs`, fixtures `tools/fixtures/buttons/{bad,good}.html`.

## In one line
A button **starts one instantaneous action**, and it is defined by **style, content and role**. Make it **easy to hit (≥ 44 × 44 hit region; 60 in visionOS)** and **always show a press state**; give the most likely action **one prominent button (one or two per view)** and mark preference by **style, not size**; say what it does with **a symbol, a short verb-led label, or both**; give it the right **role** and **never make a destructive action the primary one**; and follow the platform's own button types (activity indicator on iOS; push, square, help and image buttons on macOS; shapes, states and spacing on visionOS; capsule and full-width on watchOS).

## Rules

### Framing (intro)
- Buttons are **versatile and highly customisable**; they give people **simple, familiar ways to do tasks**. A button combines **three attributes** to communicate its function:
  - **Style:** visual style from **size, colour and shape**.
  - **Content:** a **symbol (icon), a text label, or both**.
  - **Role:** a **system-defined role** with semantic meaning that **can affect appearance**.
- Many **button-like components** have their own look and behaviour: **toggles, pop-up buttons, segmented controls** (separate pages).

### Best practices
- When buttons are **instantly recognisable and easy to understand**, an app feels intuitive and well designed.
- **must** **Make buttons easy to use.** Leave **enough space around a button** so people can **visually distinguish** it from surrounding components, and so they can **select or activate it with any input method**. General rule: a **hit region of at least 44 × 44 pt** (**60 × 60 pt in visionOS**) so it can be chosen easily with a **fingertip, pointer, eyes or remote**.
- **must** **Always include a press state for a custom button.** Without one the button **feels unresponsive** and people wonder whether input is accepted.

### Style
- System buttons offer **a range of styles** that support customisation while providing **built-in interaction states, accessibility and appearance adaptation**. Platforms define styles that **communicate hierarchies of actions**.
- **should** **Use a prominent style for the most likely action in a view.** A prominent button lets the system **apply the accent colour to the background**; colour makes it the most distinctive. **Keep prominent buttons to one or two per view**: too many raise **cognitive load** and slow the choice.
- **should** **Use style, not size, to mark the preferred choice.** **Same-size** buttons tell people the options are **a coherent set**; **different sizes near each other look confusing and inconsistent**. To highlight the preferred option, give it a **more prominent style** and the others a **less prominent** one.
- **should** **Avoid a similar colour on button labels and content-layer backgrounds.** If the content layer is already **bright and colourful**, prefer the **default monochromatic** label appearance (see *Liquid Glass colour*).

### Content
- **must** **Make each button's purpose clear.** By platform a button holds a **symbol/icon, a text label, or both**.
  - **Note (macOS, visionOS):** the system shows a **tooltip** after the pointer hovers a moment: a **brief phrase** explaining what the button does (see *Offering help*).
- **should** **Pair familiar actions with familiar icons.** A button with `square.and.arrow.up` is understood as **share**. Prefer an **existing or customised symbol**; see *Standard icons*.
- **may** **Use text when a short label is clearer than an icon:** **a few words**, **title-style capitalisation**, and **start with a verb**: e.g. **"Add to Cart"**.

### Role
- A system button has one **role**: **Normal** (no specific meaning) · **Primary** (the **default** button, the one most likely chosen) · **Cancel** (cancels the current action) · **Destructive** (an action that **can destroy data**).
- A role **can change appearance**: a **primary** button uses the app's **accent colour**; a **destructive** button uses the **system red**. *(Alert example: Primary = solid blue with white label; Destructive = red label on a neutral fill; Secondary = neutral fill, standard label.)*
- **should** **Give the primary role to the button people are most likely to choose.** A primary button that **responds to Return** lets people **confirm quickly**; in a **temporary view** (sheet, editable view, alert) the primary role also lets the view **close automatically on Return**.
- **must not** **Give the primary role to a destructive button, even if it is the most likely choice.** Because of its **prominence**, people **choose primary buttons without reading them**; **protect content** by giving the primary role to **non-destructive** buttons.

### Platform considerations
- **tvOS:** no additional considerations.
#### iOS, iPadOS
- **should** **Configure a button to show an activity indicator for an action that doesn't complete instantly.** It **saves space** and **states the reason for the delay**. You may **change the label** while it shows (**"Checkout" → "Checking out…"**). After a click/tap on a configured button that hits a delay, the system shows the **indicator next to the original or alternative label**, **hiding the button's image**, if any. (Illustration: the same pill twice, the second with a **spinner on the leading side** of the label.)
#### macOS
- Several button types are **unique to macOS**.
- **Push buttons:** the **standard** button; can show **text, a symbol, an icon, an image, or text plus image**; can be the **default** button in a view; can be **tinted**.
  - **should** **Use a flexible-height push button only for tall or variable-height content** (two lines of text, a tall icon); it keeps the **same corner radius and padding** as a regular push button. Otherwise use a standard one (`NSButton.BezelStyle.flexiblePush`).
  - **should** **Append a trailing ellipsis to the title when a push button opens another window, view or app**: an ellipsis in a control title **signals that more input can be given** (Safari Settings › AutoFill › Edit…).
  - **may** **Support spring loading** (on Magic Trackpad: drag selected items over the button and **force click** to activate without dropping them, then keep dragging).
- **Square (gradient) buttons:** initiate an action **related to a view**, e.g. **add or remove rows** in a table; contain **symbols or icons, not text**; can behave like **push buttons, toggles or pop-up buttons**; sit **close to their view** (usually **within or beneath it**).
  - **must** **Use them in a view, not the window frame** (not in toolbars or status bars: use a **toolbar item**).
  - **should** **Prefer a symbol** (SF Symbols colour automatically by state); **avoid labels that introduce them** (their purpose is clear from the view).
- **Help buttons:** appear **within a view**, open **app-specific help**; **circular, consistently sized, with a question mark**.
  - **should** **Use the system help button**; **open the topic for the current context** when possible, otherwise the **top level** of your help (Mail Rules pane → the Mail User Guide topic about rules).
  - **must not** **Use more than one help button per window.**
  - **should** **Position it where people expect it:** *dialog with dismissal buttons (OK/Cancel)* → **lower corner opposite the dismissal buttons, vertically aligned with them**; *dialog without dismissal buttons* → **lower-left or lower-right corner**; *settings window or pane* → **lower-left or lower-right corner**.
  - **must not** **Put it in the window frame** (toolbar or status bar); **avoid text that introduces it**.
- **Image buttons:** appear in a view and show an **image, symbol or icon**; can behave like **push buttons, toggles or pop-up buttons**.
  - **must** **Use them in a view, not the window frame** (use a toolbar item in a toolbar).
  - **should** **Include about 10 pixels of padding** between the image edges and the button edges (the **edges define the clickable area** even if invisible); **avoid the system border** (`isBordered`).
  - **should** **Put any label below the image button.**
#### visionOS
- A visionOS button typically has a **visible background** to help people see it, and **plays a sound** as feedback.
- **Three standard shapes:** an **icon-only** button uses a **circle**; a **text-only** button uses a **rounded rectangle** or **capsule**; a button with **icon and text** uses the **capsule**.
- **Four interaction states** with different visual styles: **idle, hover, selected, unavailable**. **Buttons don't support custom hover effects** (Note). A button can also reveal a **tooltip when people look at it briefly**; **text buttons generally don't need one**.
- **Sizes:** mini **28 pt**, small **32**, regular **44**, large **52**, extra large **64**. Availability: **circular** all five; **capsule (text only)** small, regular, large; **capsule (text and icon)** regular, large; **rounded rectangle** small, regular, large.
- **should** **Prefer a discernible background shape and fill** (a **contrasting fill** is easier to see). Exception: buttons in a **toolbar, context menu, alert or ornament**, where the larger component's shape and material make them visible. On a **glass window** use the **thin** material as the button background; when **floating in space** use the **glass** material.
- **must not** **Make a custom button with a white background and black text/icon**: the system **reserves that look for the toggled state**.
- **should** **Prefer circular or capsule buttons**: eyes are drawn to **corners**, so **rounder shapes are easier to look at steadily**; a button **alone** → **capsule**.
- **should** **Leave enough space to look at a button.** Place buttons so their **centres are at least 60 pt apart**; if buttons are **60 pt or larger**, add **4 pt of padding** so hover effects don't overlap; usually **avoid small or mini buttons in a vertical stack or horizontal row**.
- **should** **Choose the shape for text-labelled stacks/rows:** **rounded rectangle** in a **vertical stack**, **capsule** in a **horizontal row**.
- **should** **Use standard controls to get the known audible feedback**: sound matters because **visionOS doesn't play haptics**.
#### watchOS
- All **inline** buttons use the **capsule** shape; placed inline with content a button **gains a material effect** that contrasts with the background for legibility. *(Illustration: a green **Primary** and a purple **Secondary** capsule full width under a headline and body text.)*
- **should** **Use a toolbar to place buttons in the corners**: the system **moves the time and title** and applies **Liquid Glass** to toolbar buttons. *(Illustration: corner toolbar buttons and three across the bottom.)*
- **should** **Prefer full-width buttons for primary actions** (better looking, easier to tap). If two buttons must **share the horizontal space**, give both the **same height** and use **images or short text titles**.
- **should** **Use toolbar buttons for navigation to related areas or contextual actions** for the view's content.
- **should** **Use the same height for vertical stacks of one- and two-line text buttons.**

## Specs & values
| Item | Value | Tag |
|---|---|---|
| Hit region | **≥ 44 × 44 pt** (visionOS **60 × 60**) | HIG |
| Web hit region | **44 × 44 CSS px** at touch widths (FAIL below); **24 px** floor everywhere (WCAG 2.5.8; FAIL below); 24–43 on desktop = WARN | HIG / WCAG / CONV |
| Prominent buttons per view | **1–2** | HIG |
| Preferred choice | marked by **style, not size**; same-size sets | HIG |
| Roles | normal · primary · cancel · destructive; primary = accent + Return; destructive = system red; **never primary + destructive** | HIG |
| Press state | required for a custom button | HIG |
| Label | few words, verb-led, title-style capitalisation (product convention flagged below); familiar icon for familiar action | HIG |
| iOS | activity indicator inside the button; label can change ("Checking out…") | HIG |
| macOS ellipsis | trailing "…" when the button opens another window/view/app | HIG |
| macOS help button | circular "?"; ≤ 1 per window; lower corner placement table above | HIG |
| macOS image button padding | **about 10 px**; label below | HIG |
| macOS square button | symbol only; in/under its view; never in toolbar/status bar | HIG |
| visionOS sizes | mini 28 · small 32 · regular 44 · large 52 · extra large 64 pt | HIG |
| visionOS shapes | circle (icon) · rounded rectangle/capsule (text) · capsule (icon + text) | HIG |
| visionOS spacing | centres ≥ 60 pt apart; +4 pt padding when ≥ 60 pt | HIG |
| visionOS states | idle · hover · selected · unavailable; no custom hover | HIG |
| watchOS | capsule; full-width primary; equal heights; toolbar corners | HIG |
| Label contrast | ≥ 4.5 : 1 (3 : 1 large/bold); icon ≥ 3 : 1 | WCAG |
| Prominent fill | white on system blue #0088FF is 3.52 : 1 → use #1E6EF4 (4.57) / #0040DD (7.6) or a black/white pill | FN / color.md |
| Spacing | ≥ 8 px between standalone buttons (attached groups exempt) | CONV |
| Developer docs | SwiftUI `Button` · UIKit `UIButton` · AppKit `NSButton` (`BezelStyle.flexiblePush`, `.smallSquare`, `.disclosure`…) · SwiftUI `ButtonBorderShape` (`circle`, `roundedRectangle`, `capsule`) | — |
| Related HIG pages | Pop-up buttons · Pull-down buttons · Toggles · Segmented controls · Privacy › Location button (not yet ingested) · Labels ✓ · Offering help ✓ · Alerts/Sheets/Toolbars/Ornaments (not yet ingested) | — |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with **two capsule buttons labelled "Button"** side by side, with dimension arrows for the **width** of the first, the **gap** between them and the **space above and below** **(from screenshot)**: size, spacing and shape are the subject.
- **Roles alert (catalog `buttons-01`):** a light alert card with a bold title **"A Short Title Is Best"** and a body line **"A message should be a short, complete sentence."**, then three full-width **capsule** buttons stacked: **Primary Button** (solid **blue** fill, white label), **Destructive Button** (**red label** on a light-grey fill), **Secondary Button** (light-grey fill, black label) **(from screenshot)**. All three are the **same width and height**: preference is shown by fill, not size.
- **iOS activity indicator (`buttons-02`):** a light-grey capsule with a blue **"Checkout"** label; the second is the same capsule with a blue **spinner on the leading side** and the label **"Checking out"** **(from screenshot)**: same size, label changes, indicator replaces any image.
- **visionOS states (`buttons-03`):** four tiles with a **circular icon button** (a dashed rounded-square glyph) on a taupe backdrop: **Idle** (dark translucent disc, white glyph), **Hover** (lighter disc, white glyph), **Selected** (**white disc, black glyph**), **Unavailable** (very dark disc, dim glyph) **(from screenshot)**.
- **visionOS pictures/videos:** a still frame of a window's top corner with **four circular buttons** (person-check, share, "…" and compose) on glass, and a large centred **share** button on a soft grey background; both are the videos' poster frames, **"Play"** below each. The button-size table has the five sizes across the top and the four shapes down the left with check marks **(from screenshot)**.
- **watchOS:** a black watch face **"10:09"** with a close (✕) toolbar button at the top-leading corner, **"Headline / Body Text"**, a full-width green **Primary** capsule and a purple **Secondary** capsule; a second watch with corner toolbar buttons (✕ and "…"), a media tile and **rewind / play / fast-forward** buttons across the bottom **(from screenshot)**.
- **Notes:** two grey outlined cards (neutral, not warning colours) for the macOS/visionOS tooltip and the visionOS no-custom-hover statements.
- **Page chrome (from screenshot):** the platform strip lights all six devices; the TOC reads Buttons · Best practices · Style · Content · Role · Platform considerations · Resources · Change log. The side navigation shows **Menus and actions** with **Buttons** second (after Activity views).
- The fetch script found **3 catalog entries**: `buttons-01` (roles alert, single image), `buttons-02` (Checkout vs Checking out), `buttons-03` (four visionOS states). Catalog total is now **116**; existing ids unchanged (this page's ids are new). No ✗/✓ pairs. Nothing is measured; videos not downloaded.
- **Text that is not in the fetch:** the strings inside the hero, the alert, the two watch faces and the state tiles, and the chrome above.

## Web translation
Web buttons are `<button>` elements (and `<a href>` for navigation). Everything above maps to **semantics, hit region, states, hierarchy and roles**; the platform sections map to **breakpoints and input modes**. Use `tokens/apple-buttons.css`.

| HIG rule | Web implementation |
|---|---|
| A button starts one instantaneous action | **`<button type="button">`** for actions (a `<form>` submit button for form submission), **`<a href>`** for navigation. Never a clickable `<div>`/`<span>`/heading: it has no role, no keyboard activation (Enter/Space), no focus (**gate: `pointer-not-button`, static `clickable-non-button` = FAIL**). |
| Hit region ≥ 44 × 44 (visionOS 60) | Give every control a **44 × 44 CSS px hit region** (`min-block-size: 44px` or padding). If the design needs a smaller **visible** size (Nonplo pills are 36 px, compact 30 px, icon buttons 24–28 px) **keep the visuals and extend the hit region** with `::after { content:""; position:absolute; inset:-4px }` (the `btn-compact`/`btn-icon` classes do it). The probe measures **element box ∪ absolutely positioned pseudo-elements**: FAIL < 44 at 375 px, FAIL < 24 anywhere, WARN 24–43 on desktop (HIG's number is general; dense desktop UIs need a reason). Spatial/gaze UIs: 60 px. |
| Space so buttons are distinguishable and hittable | ≥ **8 px** between standalone buttons; **overlapping** hit regions = FAIL (**`buttons-overlap`**), 0–7 px = WARN (**`buttons-crowded`**); segmented controls, toolbars, tablists and pagination are attached groups and exempt. visionOS/gaze analogue: centres ≥ 60 px apart, +4 px when ≥ 60 px. |
| Always a press state | Style `:active` (and `[aria-pressed]`): a visible change in background, filter, transform or shadow; also **hover** (pointer only) and **`:focus-visible`**. The runner forces `:active`/`:hover` with the DevTools protocol and compares computed styles: **no visible `:active` change = FAIL (`no-press-state`)**, no hover change = WARN. Don't rely on `-webkit-tap-highlight-color` alone. |
| Visible focus | **`:focus-visible`** outline or ring, ≥ 3 : 1 against neighbours (WCAG 2.4.7/1.4.11); **never `outline: none` without a replacement**. The runner presses Tab through the page: **no indicator = FAIL (`no-focus-indicator`)**; static `outline-removed` flags removal on buttons (ERROR if the file has no `:focus-visible` at all). |
| Style: one or two prominent buttons per view | **Prominent** = solid fill that stands out (contrast ≥ 3 : 1 with the page or saturated): the probe counts them in the viewport (or the open dialog) and **FAILS above two** (`too-many-prominent`). **Nonplo is stricter (principle 4): exactly one filled button per screen**, black pill on light / white pill on dark; secondary = plain text or quiet grey; the gate only enforces HIG's ceiling of two, the field note's "one" is the default. |
| Use style, not size, to mark the preferred choice | In a row all option buttons share **one height**, in a stack **one width**; the preferred one differs by **fill/weight only** (`option-set-size-mismatch` = FAIL: heights differ > 2 px in a row, widths > 4 px in a stack). |
| Avoid label colour like colourful content | Labels in the default (monochrome) colour on neutral/black/white fills; don't tint labels with the content layer's brand colour; if the page background is vivid use a black/white pill (color.md gate). |
| Content: icon, text, or both; familiar icons | **Icon-only** button → **accessible name** (`aria-label` or visually hidden text) **and a tooltip** (`title` or `data-tooltip`; macOS/visionOS show one): missing name = FAIL (**`button-no-name`**, static **`icon-button-no-name`**), missing tooltip = WARN. Use familiar glyphs (share = box + up arrow, trash = delete): Lucide/Phosphor/Ionicons **never SF Symbols artwork on the web** (`icons.md`). |
| Label: few words, verb-led, title case | Verb + object ("Add to cart", "Save changes"), no "Click here", no "OK" alone where a verb fits. **Capitalisation:** Apple says **title-style**; Nonplo/`writing.md` default to **sentence case**: **flagged difference** (same as lists-and-tables/tab-views): choose **one convention per product** and use it on every button. |
| Role: normal / primary / cancel / destructive | Encode roles in `data-role` or classes: **primary** = the form's **default submit** (Enter activates it; dialogs close on Enter); **cancel** = normal look, `Esc`; **destructive** = **red label on a neutral fill** (`btn-destructive`, `#C4132A` ≥ 4.9 : 1 on the neutral fill; a red *filled* pill only when repair is the action, FN). |
| Never primary + destructive | **FAIL `primary-destructive`** when a prominent, non-red button's label is destructive (delete, remove, erase, discard, reset, disconnect, revoke…, English and Turkish); **FAIL `destructive-autofocus`** for `autofocus` on a destructive button; WARN when the default (Enter) submit of a form/dialog is destructive. Put a **safe** action first/default, ask confirmation only for unexpected irreversible loss (`feedback.md`) and offer Undo for the rest. |
| iOS: activity indicator in the button | While work runs: `aria-busy="true"`, **spinner** (`aria-hidden`, `btn__spinner`) on the leading side, **changed label** ("Checking out…"), and **`aria-disabled="true"`** so it can't fire twice (keep focus; not `disabled`). WARN `busy-not-blocked` if busy but still clickable; the spinner is decorative because the text carries the status (Feedback gate). Reduced motion: no spin. |
| macOS: trailing ellipsis | If the button **opens a dialog/window/another view that needs input**, end the label with "…" (`Delete account…`, `Rename…`); WARN **`opens-view-no-ellipsis`** for `aria-haspopup="dialog"` buttons without it. |
| macOS: flexible-height push, square, image buttons | Standard buttons keep one radius/padding; a taller two-line button uses the same radius and padding. **Square/icon buttons live next to the list/table they change** (Add/Remove under a list) and carry an icon + `aria-label`, not visible text; in a toolbar use toolbar items (`toolbars` page not yet ingested). **Image buttons**: about **10 px** padding around the image inside the button, label **below** it. |
| macOS: help button | At most **one** "?" help button per view (WARN `help-button-count`), circular, consistent size, `aria-label="Help"`, opens the **relevant** help topic (deep link) else the help home, positioned in the **lower corner** of dialogs/settings panes (opposite the dismissal buttons in a dialog), never in the header/toolbar, no intro text. |
| macOS: spring loading | Optional: while dragging items over a button (`dragenter` + hold ~700 ms, CONV) activate it (open a folder/tab) without dropping (`drag-and-drop.md`). |
| visionOS/gaze: shapes, sizes, materials | For spatial/large-target UIs: circle for icon-only, capsule for text (rounded rectangle in vertical stacks), sizes from **28 to 64 pt** (mini avoided in stacks/rows), **glass/thin material** backgrounds on glass surfaces (`materials.md` gate), **no custom white-fill/black-text buttons** (reserved for the toggled state), centres ≥ 60 px apart, audible feedback via standard controls (the web has no haptics guarantee: `navigator.vibrate` is optional, `playing-haptics.md`). |
| watchOS: capsule, full width, corner toolbar | For narrow/glanceable UIs: **capsule** buttons, **full-width** primary action (`btn-block`), two side-by-side buttons share one height and use icons or short labels, stacks share one height; corner actions in a toolbar. |
| Contrast | Label vs button fill ≥ **4.5 : 1** (3 : 1 for ≥ 24 px or ≥ 18.66 px bold), icon-only ≥ 3 : 1 (**FAIL `button-contrast`**): white on system blue #0088FF is 3.52 : 1, so use **#1E6EF4** (4.57), **#0040DD**, or a **black/white pill**; white on system green/red fails: dark label or a deeper fill (color.md gate). |
| Disabled/unavailable | `disabled` or `aria-disabled="true"` with a **visibly different look** (opacity/tone) and **a reason** next to it (`feedback.md`); WARN `disabled-looks-enabled` if it renders like its enabled sibling. Prefer `aria-disabled` for buttons that should stay focusable and explain themselves. |
| Toggles, pop-ups, segmented controls | Different components: **toggle** = `aria-pressed`/switch; **pop-up/pull-down** = `aria-haspopup` + `aria-expanded`; **segmented** = tabs/radiogroup (`tab-views.md`); don't style a toggle as a plain action button. |

**BUTTONS GATE (how to run it):**
1. `node tools/check-buttons.mjs <changed files>` → **0 errors** (WARNs fixed or justified with `// buttons-ok: <reason>`).
2. `node tools/run-buttons-probe.mjs <url> [--click "<selector>"]` → **PASS** at 375 and 1440, light and dark (open dialogs first with `--click` so their buttons are counted per dialog).
3. Fixtures prove the tools: `tools/fixtures/buttons/bad.html` **must FAIL** (15 different rules fire), `good.html` **must PASS** with 0 failures.

Field-note cross-links:
- `field-notes/principles.md` § 4 "One filled button per screen": **stricter than, and compatible with,** HIG's "one or two prominent buttons"; back/close as text, destructive secondary as red text, a filled red pill only when repair is the action: all consistent with the roles rules.
- **Conflict (HIG wins):** `field-notes/components.md` card action pills are **36 px (h-9) and compact 30 px**, icon buttons 24–28 px: below HIG's **44 × 44 hit region**. Resolution: **keep the visual size, extend the hit region** (`::after` inset, padding, or `min-h-11` on a transparent wrapper); the gate measures the real region. Not extending it fails at 375 px.
- `field-notes/tokens.md` (filled-button colours: white on #0088FF = 3.52 : 1; #1E6EF4, #0040DD, black/white pills; red #E9152D 4.56 : 1 on white): used for `--btn-prominent-bg` and the destructive label colour (`#C4132A` on the neutral fill).
- `field-notes/engineering-gotchas.md` and `components.md` (`active:scale-[0.97]` on card actions): a valid press state; the gate accepts any visible `:active` change.
- `hig/patterns/feedback.md` (CRITICAL): disabled buttons explain why, busy buttons announce status via their label, destructive flows use Undo or one alert; `hig/foundations/color.md` (CRITICAL), `typography.md` (CRITICAL), `layout.md` (CRITICAL), `materials.md` (CRITICAL): contrast, label sizes, hit regions and gaps, glass buttons.
- `hig/patterns/modality.md`, `undo-and-redo.md`, `entering-data.md`, `managing-accounts.md`: default buttons in dialogs, delete-with-Undo, submit/validation, account deletion flows; `hig/patterns/offering-help.md` (help button, tooltips), `icons.md`/`sf-symbols.md` (icon-only buttons), `workouts.md` (big session controls), `drag-and-drop.md` (spring loading), `lists-and-tables.md` (square/add-remove buttons), `tab-views.md`/`disclosure-controls.md` (button-like components).

## Checklist
- [ ] Every action is a `<button>` (or `<a href>` for navigation); no clickable div/span/heading; Enter/Space work.
- [ ] Hit region ≥ 44 × 44 on touch widths (≥ 60 for gaze UIs), never < 24; small visuals extend the hit region with `::after`/padding.
- [ ] ≥ 8 px between standalone buttons; no overlapping hit regions.
- [ ] Every custom button has a visible `:active` (press), a `:hover` (pointer) and a visible `:focus-visible` state; no `outline: none` without a replacement.
- [ ] One or two prominent buttons per view/dialog (Nonplo default: one); the preferred option differs by style, never by size; option sets share one height (row) or width (stack).
- [ ] Each button says what it does: a familiar icon, a short verb-led label, or both; icon-only buttons have an accessible name and a tooltip; one capitalisation convention.
- [ ] Roles: the primary button is the default (Enter) action of its form/dialog; cancel is normal; destructive = red label on a neutral fill; **no destructive primary, no autofocus on a destructive button**.
- [ ] Long actions show an in-button indicator with a changed label and are blocked from double submit (`aria-busy` + `aria-disabled`).
- [ ] Buttons that open another dialog/view end with "…"; at most one help button per view, placed in the lower corner; square/image buttons sit with their view, not in the toolbar.
- [ ] Label contrast ≥ 4.5 : 1 (3 : 1 large), icon-only ≥ 3 : 1 in light and dark; disabled buttons look unavailable and say why.
- [ ] On narrow/glanceable surfaces: capsule buttons, full-width primary, equal heights in stacks and rows.
- [ ] **BUTTONS GATE passed:** checker 0 errors, probe PASS in every run, fixtures behave (bad FAILS, good PASSES).

## Related
- Ingested: Feedback (✓ CRITICAL), Color (✓ CRITICAL), Typography (✓ CRITICAL), Layout (✓ CRITICAL), Materials (✓ CRITICAL), Labels (✓), Offering help (✓), Icons (✓), SF Symbols (✓), Modality (✓), Undo and redo (✓), Entering data (✓), Drag and drop (✓), Lists and tables (✓), Tab views (✓), Disclosure controls (✓), Activity views (✓), Image views (✓), Workouts (✓), Playing haptics (✓).
- Ingested since: Context menus (✓). Not yet ingested: **Pop-up buttons**, **Pull-down buttons**, **Toggles**, **Segmented controls**, **Location button** (Privacy), Alerts, Sheets, Toolbars, Ornaments.
- Developer docs: see Specs & values.
