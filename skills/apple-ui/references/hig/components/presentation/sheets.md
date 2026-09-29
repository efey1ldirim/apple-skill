# Sheets
Source: https://developer.apple.com/design/human-interface-guidelines/sheets · Section: Components › Presentation · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (all six icons on the platform strip **(from screenshot)**; "No additional considerations for tvOS") · Ingested: 2026-09-29 · Apple last updated: **March 24, 2026** (button placement; earlier rows: March 29, 2024 iPadOS form/page sheet styles, December 5, 2023 split view for visionOS supplementary items, June 21, 2023 visionOS, June 5, 2023 watchOS). One DocC fetch, read in full. 15 screenshots (light-mode page, hero → the fourth change-log row) were compared with the fetched text and image alt text line by line: everything matches; they are contiguous and cover the whole page. **Read from the fetch only:** the **last change-log row** (June 5, 2023, below the last screenshot), the **visionOS video's motion** (only its poster frame is in the screenshots) and the dark variants of the images; the seven catalog image sets were also read directly from the downloaded pictures. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **one relative size** (medium detent ≈ half of large).

## In one line
A sheet is a **scoped task or a request for specific information that's closely tied to the current context** (attach a file, choose where to save). It is **always modal on macOS, tvOS, visionOS and watchOS**, and **modal or nonmodal on iOS/iPadOS**. Keep **one sheet at a time**, use **Cancel (leading) / Done (trailing) / Back (previous step, never a dismissal)** and **never all three together**, always **pair Done with Cancel or Back**, give iPhone sheets a **grabber, a medium detent where content can disclose progressively, and swipe-to-dismiss (with an action sheet if there are unsaved changes)**, and use **another presentation** (full-screen view, window, panel, split view) for **complex or long flows**.

## Rules

### Framing (intro)
- A sheet is for **requesting specific information** or **presenting a simple task people finish before returning to the parent view**: e.g. **supplying what an action needs** (attach a file, choose a save location).

### Anatomy
- **macOS, tvOS, visionOS, watchOS:** a sheet is **always modal**: a **targeted experience** that **blocks the parent view until dismissed** (see *Modality*).
- **iOS, iPadOS:** **modal or nonmodal.** A **nonmodal sheet stays onscreen while people use it to affect the parent view** (Notes on iPhone/iPad: a **Format** sheet applies formatting to the current text selection; **people can make new selections without dismissing it**).
- **Common buttons:**
  - **Cancel (or Close)** dismisses **without saving changes**; common in most sheets.
  - **Done** dismisses **after completing a task or explicitly saving**.
  - **Back** goes to a **previous step in a multi-step flow or to a parent view in a hierarchy**; it **isn't for dismissing** the sheet.
- **Placement varies by platform** (see below).

### Best practices
- **should** **For complex or prolonged flows, consider alternatives.** iOS/iPadOS: a **full-screen modal style** (`UIModalPresentationStyle.fullScreen`) suits **videos, photos, camera, or multistep tasks like document/photo editing**. macOS: a **new window** (self-contained tasks like editing a document) or **full-screen mode** (viewing media). visionOS: a way to move to a **Full Space** (see *Immersive experiences*).
- **must** **Show only one sheet at a time from the main interface.** People expect closing a sheet to **return to the parent**; returning to **another sheet** loses their place. If something in a sheet leads to another sheet, **close the first before showing the new one**; **you may reopen the first after the second is dismissed**.
- **should** **Use a nonmodal view for supplementary items that affect the main task**: **split view (visionOS)**, **panel (macOS)**, **nonmodal sheet (iOS/iPadOS)**.
- **must** **Provide an alternative to Done.** If there's a Done button, **pair it with Cancel** (dismiss without confirming/saving) **or Back** (previous step). **Relying only on Done** implies finishing is the **only** way out (restrictive or misleading). ✗ Done alone; ✓ Cancel + Done (catalog `sheets-02`).
- **must not** **Show Cancel, Done and Back together.** ✗ Back on the leading side with **Cancel and Done both on the trailing side** (catalog `sheets-03`).

### Platform considerations
- **tvOS:** no additional considerations.

#### iOS, iPadOS
- **Single-view sheet:** **Cancel on the leading edge** of the top toolbar; **Done (if present) on the trailing edge**.
- **Multi-step flow:** placement **varies by step**:
  - **First step:** **Cancel leading**; **Done trailing, inactive** (task not complete).
  - **Subsequent steps:** **Back replaces Cancel** on the leading side; Done stays trailing and **inactive**.
  - **Final confirmation step:** **Back leading**, **Done becomes active** to acknowledge completion and dismiss.
- **Resizable sheets:** a sheet **expands when people scroll its content or drag the grabber** (a small horizontal indicator at the top edge). Heights where it rests are **detents**. **Two system detents: *large* = fully expanded; *medium* ≈ half the fully expanded height.** Sheets **support large automatically**; **adding medium** lets it rest at both; **medium only** prevents expanding to full height; **custom detents** are possible (`detents`).
  - **should** **On iPhone, consider a medium detent for progressive disclosure**: a **share sheet shows the most relevant items in medium**, more on scroll/expand. **Skip medium when content works best full height** (compose sheets in Messages and Mail).
  - **should** **Include a grabber in a resizable sheet**: it shows resizability, **dragging resizes**, **tapping cycles detents**, and it **works with VoiceOver** (`prefersGrabberVisible`).
  - **should** **Support swiping to dismiss**: people expect **vertical swipes**; with **unsaved changes**, show an **action sheet** to confirm.
  - **should** **On iPadOS prefer the page or form sheet presentation styles**: each has a **default size**, **centres content on a dimmed background**, giving consistency.

#### macOS
- A sheet is a **cardlike view with rounded corners floating on the parent window**; the **parent is dimmed** (can't be used until dismissed), yet **people expect to use other app windows** first.
- **should** **Use a reasonable default size**: people don't expect to resize sheets, so **fit the content**; **support resizing** where expanding helps.
- **should** **Let people interact with other app windows without dismissing the sheet**: on open, **bring the parent window forward** (for a document window also its **modeless panels**) and **let other windows be brought forward** meanwhile.
- **should** **Use a panel instead of a sheet when people repeatedly provide input and watch results** (a **find and replace** panel: replace individually and verify) (see *Panels*).

#### visionOS
- A visible sheet **floats in front of its parent window, dims it and takes the interaction** (video: a sheet opening above a blank window).
- **should** **Avoid a sheet that emerges from the bottom edge of a window**; prefer **centring it in the person's field of view**.
- **should** **Default to a size that helps people keep context**: **don't cover most or all of the window**; allow **resizing** if useful.

#### watchOS
- A sheet is a **full-screen view sliding over the current content**, **semi-transparent** with a **system material that blurs and desaturates** what's beneath.
- **should** **Use a sheet only when the modal task needs a custom title or custom content.** For **important information or a set of choices**, use an **alert or action sheet**.
- **should** **Keep sheet interactions brief and occasional**: a **temporary interruption for an important task**, **not for navigating content**.
- **should** **If you change the default label, prefer an SF Symbol for the action**; avoid labels that suggest **hierarchical navigation** (a custom **Back**), and avoid **text in the top-leading corner that looks like a page/app title** (people won't know how to dismiss). ✗ custom Back button; ✗ a "Page title" pill; ✓ the default **Cancel (✕)** (catalog `sheets-06`, `-07`).

## Specs & values
The page has **no fixed sizes**. Concrete facts:

| Item | Value |
|---|---|
| Purpose | scoped task / request for specific info, tied to the current context |
| Modality | modal on macOS, tvOS, visionOS, watchOS; modal **or nonmodal** on iOS/iPadOS |
| Buttons | **Cancel/Close** (no save) · **Done** (complete/save) · **Back** (previous step; not a dismissal) |
| Never | Cancel + Done + Back together; Done alone |
| iOS/iPadOS single view | Cancel leading, Done trailing |
| iOS multi-step | first: Cancel + inactive Done · middle: Back replaces Cancel, inactive Done · final: Back + active Done |
| Detents | **large** (full) · **medium ≈ ½ of large** · custom; large automatic; medium-only blocks full height |
| Grabber | shows resizability; drag to resize, tap cycles detents; VoiceOver-accessible |
| Dismiss | swipe down (action sheet if unsaved changes) |
| iPadOS styles | page sheet / form sheet (default size, centred, dimmed backdrop) |
| macOS | rounded card on the dimmed parent; reasonable default size; other windows stay usable; panel for repeated input |
| visionOS | in front of the window, dims it; centre in field of view, not from the bottom; don't cover the window |
| watchOS | full-screen semi-transparent sheet with blur/desaturation; default Cancel ✕; brief and occasional |
| Simultaneous sheets | one at a time |
| Developer docs | SwiftUI `sheet(item:onDismiss:content:)` · UIKit `UISheetPresentationController` (`detents`, `prefersGrabberVisible`), `UIModalPresentationStyle` · AppKit `presentAsSheet(_:)` |
| Related HIG pages | Modality ✓ · Action sheets ✓ · Popovers ✓ · Panels ✓ · Going full screen ✓ · Immersive experiences ✓ · Split views ✓ · Icons ✓ |

## Visual notes (from screenshots and downloaded pictures)
- **Hero (screenshot):** a red-to-orange card with a **pale window with three red traffic-light dots** at the top-left and a **lighter rounded sheet card** inset in it, from the title-bar line downward; **double arrows** on **all four sides** (above and below the sheet, and at its left and right) show the **equal margins** around it: a centred card with margin on every side, no numbers **(from screenshot)**.
- **Nonmodal Notes pair (catalog `sheets-01`, screenshots):** two iPhones with the note **"Monday Morning Meeting"**, hashtags **#Policy #Housing #Art**, "Thesis: Public Art's Development Benefits for Kids" plus bullet lines; the top bar has a **round Back**, **undo, share, "⋯"** and a **yellow round ✓**. **Left:** words "First draft under review" are **highlighted with selection handles**; the **Format sheet** covers the lower third: **"Format" heading with a ✕**, text styles **Title · Heading · Subheading · Body (Body selected, yellow pill)**, a row **B I U S, highlighter, colour dot**, and a list/indent row. **Right:** a **different selection ("Nisha Kumar")**, the sheet **still open**, **Italic (I) now highlighted yellow** **(from screenshot)**. Captions are page text.
- **Done ✗/✓ (catalog `sheets-02`, screenshots + pictures):** ✗ a sheet top with the **grabber**, **title "Title"** and a **blue round ✓ (Done) alone** at the top-right; ✓ the same with a **grey round ✕ (Cancel) at the top-left** and the **blue ✓ at the top-right**. **Note:** the illustrations draw **Cancel as a ✕ icon** and **Done as a ✓ icon** in **round glass buttons**, not as words.
- **Three buttons ✗ (catalog `sheets-03`):** **round Back (‹) at the top-left** and a **round ✕ next to the blue ✓ at the top-right**, all in one bar **(from screenshot)**.
- **Multi-step tabs (catalog `sheets-04`, downloaded pictures):** **First step:** ✕ at the left, **grey (inactive) ✓** at the right; **Subsequent:** **‹ at the left**, **grey ✓**; **Final:** **‹ at the left**, **blue (active) ✓**. All show the **grabber** and centred **"Title"** on a rounded sheet top over a grey dimmed screen.
- **Detents (catalog `sheets-05`):** **Large:** a sheet **filling almost the whole screen** (rounded **top** corners, grabber, a **round ✕ at the top-left**); **Medium:** a **half-height card inset from the screen edges with fully rounded corners**, grabber, ✕ at the top-left, over a dimmed background.
- **watchOS (catalog `sheets-06`/`-07`, light only):** dark blue-to-plum gradient with **10:09** at the right. **✗ custom Back "‹"** in a glass circle at the top-left; **✗ a "Title" pill** at the top-left; **✓ the default ✕ Cancel** in a glass circle.
- **macOS Notes sheet (screenshot, not in the catalog):** a Notes window (traffic-light dots, toolbar, note "Nature Walks" with plant illustrations) **dimmed**; a **white rounded card centred over it, its top tucked under the toolbar**: **"What's New in Notes"** with three feature rows (**Notes on Apple Watch**, **Call Transcripts**, **Markdown Export & Import**, each with a yellow icon, a bold title and a small grey description) and a **yellow "Continue" capsule at the bottom-right** **(from screenshot)**.
- **visionOS video poster:** a living room with a **frosted, blurred glass panel floating in front** (no content yet), a small dot and pill under it, and a **"Play ▷" link** **(from screenshot)**.
- **watchOS in the page (screenshots):** a watch **10:09** with a **✕ glass circle at the top-left** and a **wide purple-to-magenta "Action" capsule at the bottom**; then the **✗ ✗ ✓ trio** (custom **‹ Back** circle, a **"Title" pill**, the default **✕**) with the grey ✗ / green ✓ badges **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Sheets · Anatomy · Best practices · Platform considerations · Resources · Change log; side navigation shows **Presentation** open with **Sheets** in bold; Resources: **Related** Modality, Action sheets, Popovers, Panels; **Developer documentation** `sheet(item:onDismiss:content:)`, `UISheetPresentationController`, `presentAsSheet(_:)`; **Change log** first four rows visible (March 24, 2026 · March 29, 2024 · December 5, 2023 · June 21, 2023). The first screenshot shows the **address bar** (`…/human-interface-guidelines/sheets`) selected.
- The page has **7 image sets in the catalog** (`sheets-01 … 07`): 1 neutral pair, 2 ✗/✓ sets (Done alone; three buttons), 2 tab sets/pairs (multi-step, detents), 2 watchOS sets (✗✗ / ✓). Plus **1 video** (visionOS sheet opening; not measured) and the macOS Notes "What's New" screenshot (not in the catalog; described in alt text: a sheet centred on a dimmed Notes document). Fetch script run; existing catalog IDs unchanged, total 149.

## Web translation
Sheets are the web's **modal dialogs, bottom sheets and side sheets**. The HIG mostly adds *button discipline*, *one at a time*, *detents* and *when not to use one*.

| HIG rule | Web implementation |
|---|---|
| Scoped task closely tied to context | A **`<dialog>`** (`showModal()`) with `aria-labelledby` (title); background **`inert`**, focus trap, **focus returns to the trigger**, scroll lock, `Esc` = Cancel (`modality.md`). Use it for **short, self-contained tasks** (attach a file, choose a folder, edit one item), not for browsing. |
| Modal everywhere; nonmodal on iOS/iPadOS | **Modal by default.** A **nonmodal sheet** = `role="dialog" aria-modal="false"`, **no scrim, no trap**, the parent stays interactive (rich-text **Format bar**, filters, map results drawer); selection in the parent **updates the sheet live**. |
| Cancel / Done / Back roles | **Cancel/Close** = normal role (**Esc**); **Done** = **primary role** (accent), commits and closes; **Back** = previous **step**, never closes. **Buttons GATE**: roles via `data-role`, hit region **≥ 44 px** (touch), press/focus states (`hig/components/menus/buttons.md`). Icon-only ✕/✓ need accessible names "Cancel"/"Done" (Title Case per `writing.md`); text labels are fine and clearer on the web. |
| Never Cancel + Done + Back together; never Done alone | Lint idea (CONV): a sheet header with **all three** or with **Done and no Cancel/Back** → WARN. Single view: **Cancel leading (start), Done trailing (end)** (flip in RTL: `right-to-left.md`). |
| Multi-step flows | Step 1: **Cancel + inactive Done**; steps 2…n−1: **Back replaces Cancel**, Done **inactive**; final step: **Back + active Done**. Inactive Done uses **`aria-disabled="true"`** (stays focusable) **with a visible reason** ("Complete the previous steps"), never a silently dead button (`feedback.md`); progress is shown as text ("Step 2 of 4"). For **long** flows use a **full page or full-screen dialog** instead. |
| One sheet at a time | A single overlay root; opening a second sheet **closes the first** (or replaces it) and **can reopen it after**; never stack dialogs; an **alert** may sit above (`alerts.md`). |
| Alternatives for complex flows | **Route/page** or **full-screen dialog** for editors and long wizards; a **new window/tab** for self-contained documents; the **Fullscreen API** for media (`going-full-screen.md`); immersive (WebXR) only for real spatial content. |
| Nonmodal for supplementary items | **Docked pane** (split view: `split-views.md`), **floating panel** (macOS-style: `panels.md`) or **nonmodal bottom sheet** on touch. |
| Detents (large / medium ≈ ½ / custom) | **Bottom sheet** `height: calc(100dvh - safe-top - gap)` for **large**, `50dvh` for **medium** (CONV), plus optional custom heights (e.g. `min-content`); **snap points** on drag release (velocity-aware), animated with **`transform`/`height` ~250–350 ms** (CONV), **`prefers-reduced-motion`** → instant; large-only for **compose/editor** sheets (Messages/Mail example), **medium first** for **share/pick lists** (progressive disclosure). |
| Grabber | A **~36 × 5 px pill** (CONV) at the sheet's top, wrapped in a **button with ≥ 44 px hit area**: **drag** (`pointerdown/move/up`, `setPointerCapture`, `touch-action: none`), **tap cycles detents**, and **keyboard/AT**: `aria-label="Resize sheet"`, Enter/Space cycles, or arrow keys with `role="slider"` semantics; announce the new size ("Sheet expanded"). |
| Swipe to dismiss | **Swipe down from the header/grabber** (not from scrollable content unless at `scrollTop === 0`); if the form is **dirty**, **cancel the dismissal and ask** with an **action sheet** ("Discard Changes", "Save Draft", "Keep Editing": `action-sheets.md`); never lose input silently. |
| iPadOS page/form sheet | On **wide screens**: a **centred dialog** on a **dimmed backdrop** (`max-width` ~ **540–640 px** form, **640–800 px** page: CONV), rounded corners, **default size fitting content**; below ~640 px switch to the bottom/full-height sheet (`popovers.md` compact rule). |
| macOS: card floating on a dimmed parent; other windows usable | In **multi-window/PWA shells**, scope the modality to **its own window/panel**: dim and inert **only the parent**, keep sibling windows interactive, **bring the parent forward** when the sheet opens; reasonable default size, **resizable** when expanding helps (CSS `resize` or handles). |
| Panel instead of sheet for repeated input | **Find & replace, inspectors, filters you tweak repeatedly** → **non-modal panel/side sheet** (`panels.md`), not a modal. |
| visionOS: centred in the field of view; don't cover the window | For immersive/gaze contexts centre the sheet in the viewport (not from the bottom) at a **default size well under the window**; on flat web, **don't cover the whole parent** on desktop unless it's a full-screen flow. |
| watchOS: brief, custom-content only, default ✕ | **Tiny screens:** a **full-screen dialog** with a **✕ at the top-leading corner**, **not** a custom "Back" chevron or a **page-title-looking label** there; use **alert/action-sheet** patterns for choices; keep it occasional and brief; blur/desaturate (`backdrop-filter`) the covered content with a solid fallback (`materials.md`). |
| Accessibility | `role="dialog"` + title; **first focus** on the first field (or the dialog title for read-only), **`Esc`** cancels, visible focus, **`prefers-reduced-motion`**, **scroll lock without layout shift** (`scrollbar-gutter: stable`), safe-area padding (`env(safe-area-inset-*)`), `100dvh` (Layout gate), touch targets ≥ 44 px. |

Field-note cross-links:
- `hig/patterns/modality.md` (✓): modal discipline; **`action-sheets.md`** (✓): the **unsaved-changes confirmation** on swipe-dismiss; **`alerts.md`** (✓): the only overlay allowed above.
- `hig/components/presentation/popovers.md` (✓): **compact-view fallback is a sheet**; `panels.md` (✓): **repeated input** and **nonmodal supplementary tools**.
- `hig/components/menus/activity-views.md` (✓): the **share sheet** uses a medium detent; `toolbars.md` (✓): sheet header buttons; `buttons.md` (✓ CRITICAL): roles and hit regions.
- `hig/patterns/going-full-screen.md` (✓) and `immersive-experiences.md` (✓): alternatives to sheets for long flows/media/spatial content.
- `hig/foundations/materials.md` (✓ CRITICAL), `layout.md` (✓ CRITICAL): glass, safe areas, `dvh`; `writing.md` (✓): Title Case button labels.
- `field-notes/components.md` § wizards/consent screens: multi-step flows already recorded there; this page's **button placement per step** refines them (Cancel → Back, inactive Done until final).
- No conflict with a field note.

## Checklist
- [ ] The task is **short, scoped and tied to the current context**; long/complex flows use a **page, full-screen dialog or window**.
- [ ] **Only one sheet open**; second sheets replace the first (and may reopen it); only alerts sit above.
- [ ] Buttons: **Cancel leading, Done trailing**, **Back for steps**, **never all three**, **Done never alone**; roles set (Done primary, Cancel normal).
- [ ] Multi-step: **inactive Done until the final step**, **Back replaces Cancel after step 1**, reason for inactivity is visible.
- [ ] Modal mechanics: `<dialog>`, inert parent, focus trap/restore, `Esc` cancels, scroll lock; **nonmodal** variants have no scrim or trap.
- [ ] Resizable sheets have **detents** (medium for progressive disclosure, large for compose/editor), a **grabber** with a button name, drag, tap-cycle and keyboard support.
- [ ] **Swipe-down dismiss** works and **confirms via an action sheet when dirty**.
- [ ] Wide screens use a **centred, dimmed, default-sized** dialog; narrow screens use a bottom/full-height sheet.
- [ ] Repeated-input tools use a **panel/non-modal** presentation.
- [ ] Tiny-screen sheets use a **✕ at the top-leading corner** (no fake Back, no title-like label).
- [ ] Glass/blur has a solid fallback; safe areas and `dvh` respected; reduced motion respected.

## Related
- Ingested: Modality (✓), Action sheets (✓), Alerts (✓), Popovers (✓), Panels (✓), Activity views (✓), Toolbars (✓), Buttons (✓ CRITICAL), Split views (✓), Going full screen (✓), Immersive experiences (✓), Materials (✓ CRITICAL), Layout (✓ CRITICAL), Icons (✓), Writing (✓), Spatial layout (✓).
- Not yet ingested: none linked beyond the above.
- Developer docs: SwiftUI `sheet(item:onDismiss:content:)`; UIKit `UISheetPresentationController`, `UIModalPresentationStyle`; AppKit `presentAsSheet(_:)`.
