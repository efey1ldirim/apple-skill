# Action sheets
Source: https://developer.apple.com/design/human-interface-guidelines/action-sheets · Section: Components › Presentation · Supported platforms: **iOS, iPadOS, macOS, tvOS, watchOS** ("No additional considerations for macOS or tvOS. Not supported in visionOS"; the visionOS icon is dimmed on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: not shown (the page has **no change log**; the TOC ends at Resources **(from screenshot)**). One DocC fetch, read in full. 5 screenshots (light-mode page, hero → the page footer) were compared with the fetched text and image alt text line by line: everything matches; they are contiguous and cover the whole page. **Read from the fetch only:** the dark variants of the images (the watchOS illustration has none). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker. The page has **one number** (at most **four buttons**, Cancel included).

## In one line
An action sheet is a **modal view of choices tied to an action the person just started** (cancel a draft → *Delete Draft* / *Save Draft*). Use it **instead of an alert** when the interruption is intentional and there are **real choices**, and **instead of a menu** when the choices are a **reaction to an action**, not something people asked to reveal. Keep it **rare, short (title on one line, message only if needed), non-scrolling, ≤ 4 buttons**, with the **destructive choice on top and styled as such**, and a **Cancel at the bottom** when data could be lost.

## Rules

### Framing (intro)
- An action sheet is a **modal view** presenting **choices related to an action people initiate**.
- **Developer note:** SwiftUI offers this on **all platforms** through a **confirmation dialog** presentation modifier; UIKit uses `UIAlertController.Style.actionSheet` in **iOS, iPadOS and tvOS**.

### Best practices
- **must** **Use an action sheet, not an alert, for choices related to an intentional action.** Example: cancelling a message in Mail on iPhone opens a sheet with **two choices, delete or save the draft**. An alert can also confirm or cancel a destructive action, but it **offers no extra choices** and it is **usually unexpected**: it reports a **problem or a change in the situation** that may need a response (see *Alerts*).
- **should** **Use action sheets sparingly.** They carry important choices but **interrupt the task**; **overuse** lowers attention.
- **should** **Keep the title short enough for one line.** A long title is slow to read and may be **truncated or force scrolling**.
- **should** **Give a message only if necessary.** Usually the **title plus the context of the current action** is enough.
- **should** **Provide a Cancel button if needed, so people can reject an action that might destroy data.** Put it **at the bottom** of the sheet (**upper-left corner in watchOS**). A SwiftUI confirmation dialog **includes Cancel by default**.
- **should** **Make destructive choices visually prominent**: use the **destructive style** for buttons that perform destructive actions and put them **at the top** of the sheet, where they are most noticeable.

### Platform considerations
- **macOS, tvOS:** no additional considerations. **visionOS:** not supported.

#### iOS, iPadOS
- **should** **Use an action sheet, not a menu, for choices related to an action.** People are used to a sheet appearing when an action **may need clarifying choices**; by contrast they expect a **menu when they choose to reveal it**.
- **should** **Avoid letting an action sheet scroll.** More buttons cost **time and effort**, and scrolling a sheet is hard without **accidentally tapping a button**.

#### watchOS
- The **system-defined style** has **a title, an optional message, a Cancel button and one or more additional buttons**; its appearance **varies by device**.
- Each button has a **style** describing its effect. **Three system styles:**

| Style | Meaning |
|---|---|
| Default | no special meaning |
| Destructive | destroys user data or performs a destructive action in the app |
| Cancel | dismisses the view **without taking any action** |

- **should** **Show no more than four buttons, Cancel included.** Fewer buttons let people **see all options at once**; since **Cancel is required**, offer **at most three additional choices**.

## Specs & values
The page has **one hard number**. Concrete facts:

| Item | Value |
|---|---|
| Purpose | choices related to an **intentional** action; modal |
| vs alert | alert = unexpected problem/change, no extra choices; sheet = intentional action, multiple choices |
| vs menu | menu = revealed on request; sheet = appears in response to an action needing clarification |
| Title | one line |
| Message | only if necessary |
| Buttons (watchOS) | **≤ 4 including Cancel** (Cancel + ≤ 3 more); Cancel required |
| Cancel placement | **bottom** of the sheet · **upper-left** in watchOS |
| Destructive placement | **top** of the sheet, destructive style |
| Scrolling | avoid (iOS/iPadOS) |
| Button styles | default · destructive · cancel |
| SwiftUI | `confirmationDialog(_:isPresented:titleVisibility:actions:)` (all platforms; Cancel by default) |
| UIKit | `UIAlertController.Style.actionSheet` (iOS, iPadOS, tvOS), `UIAlertAction.Style.destructive` |
| Not supported | visionOS |
| Related HIG pages | Modality ✓ · Sheets ✓ · Alerts ✓ |

## Visual notes (from screenshots)
- **Hero:** a red-to-orange card with a **pale pink rounded card** in the centre: a bold **"Action Title"**, the line **"A short description of the action."**, then **three full-width capsule buttons "Action 1 / Action 2 / Action 3"** in a deeper pink with red labels, each crossed by a **dashed horizontal guide line**; a **horizontal double arrow above** the card (its width) and a **vertical bracket at its right** (its height): the illustration is about **width, height and equal button rows**, no numbers **(from screenshot)**.
- **Developer note callout:** grey outlined card headed "Developer note" **(from screenshot)**.
- **Mail example (catalog `action-sheets-01`, light):** two iPhones side by side. **Left:** the **New Message** compose sheet: a **grabber** at the top, a round **X** (close) at the top-left, a **blue circular send arrow** at the top-right, the large **"New Message"** title, then rows **To: meichen3@icloud.com** with a **+**, **Cc/Bcc, From: chavez4@icloud.com**, **Subject:** and the body **"Hello!"**. **Right:** the same screen after tapping the X: the send arrow is **greyed**, and a **small rounded glass panel appears at the top-left, right where the X was**, with **two full-width grey pills: "Delete Draft" in red text on top and "Save Draft" in black below** **(from screenshot)**. Notable: **no Cancel button** in this example, and the sheet is **anchored to the control that opened it**, not a full-width bottom sheet.
- **watchOS illustration (light only):** an Apple Watch showing **10:09**, a **round X (cancel) at the upper-left**, a two-line **"Headline / Description"** text block in the upper half, and **two stacked full-width capsule buttons**: a **green "Action"** and, below, a **purple-to-magenta "Cancel"**; the background is a dark purple-blue gradient **(from screenshot)**.
- **Style table** on the page: three rows Default / Destructive / Cancel with the meanings above; hyphenation in the screenshot is a rendering artefact (`destruc-tive`, `ac-tion`) **(from screenshot)**.
- **Page chrome (from screenshot):** platform strip with visionOS dimmed; TOC Action sheets · Best practices · Platform considerations · Resources (**no Change log**); side navigation shows **Presentation** open with **Action sheets** in bold (Alerts, Page controls, Panels, Popovers, Scroll views, Sheets, Windows) and the **Selection and input** group below it (Color wells, Combo boxes, Digit entry views, Image wells, Pickers, Segmented controls…). Resources: **Related Modality, Sheets, Alerts**; **Developer documentation** with two items; the last screenshot shows the **page footer** (breadcrumb and link directory).
- The page has **1 neutral pair** (catalog `action-sheets-01`: compose screen vs with the sheet open), **no ✗/✓ pairs and no videos**. Fetch script run; existing catalog IDs unchanged, total 137. Nothing is measured.

## Web translation
The web version is a **confirmation dialog / choice sheet** for an action the person just triggered: "Discard draft?" with *Delete Draft* / *Save Draft*, "Remove from…", "Publish as…" choices. It is **neither a menu** (dropdown the person opens) **nor an alert** (`alertdialog` for problems).

| HIG rule | Web implementation |
|---|---|
| Choices tied to an intentional action; modal | Open it **from the action's handler** (e.g. the Close button on a dirty compose form) as a **`<dialog>`** (`showModal()`) or `role="dialog"` + `aria-modal="true"`, `aria-labelledby` = the title, background **`inert`**, focus trapped, **focus returns to the trigger** on close, scroll locked (`modality.md`). Ask only when the choice matters (dirty data, irreversible act); otherwise just do it and offer **Undo** (`undo-and-redo.md`, `feedback.md`). |
| Action sheet, not alert | Alerts (`alertdialog`) are for **problems/changes**; if the person needs **extra choices about their own action**, use this sheet. Don't use the native `confirm()`/`alert()` (FEEDBACK GATE), they can't carry roles, three choices or localised labels. |
| Action sheet, not menu (iOS/iPadOS) | If the person **clicked "⋯/Sort/Share"**, that's a **menu** (`pull-down-buttons.md`, `menus.md`); if the **system asks a follow-up after an action** (Close, Delete, Discard), that's a **sheet**. |
| Use sparingly | One per flow; **never chain** sheet → alert → sheet; don't confirm reversible actions (**Undo instead**). |
| Short one-line title; message only if needed | Title = the question or action ("Discard this draft?") in **sentence-style question or Title Case action**, ≤ ~40 characters (CONV) and **no wrap**; **omit the message** unless it adds a fact (`aria-describedby` only when present). Follow `writing.md` (capitalisation table). |
| Cancel at the bottom when data could be destroyed | A visible **Cancel** as the **last** button (normal role), **also bound to Esc, the backdrop click and (mobile) drag-down**; in a small popover anchored to the trigger, Cancel may be omitted when outside-click/Esc dismiss it and nothing is destroyed (as in Apple's Mail screenshot), but **always include it when data can be lost**. |
| Destructive on top, destructive style | **First** button = the destructive one, **red text (system red token) + an explicit verb label** ("Delete Draft", never colour alone), `data-role="destructive"`; **never make it the primary/default button** (**Buttons GATE: `primary-destructive` FAIL**); **initial focus on the safest option** (Save/Cancel), not on Delete (CONV). |
| Button styles: default / destructive / cancel | Map to the **Buttons GATE roles** (`normal`, `destructive`, `cancel`): `data-role` attributes, hit region **≥ 44 px** at touch widths, visible **press and focus** states (`hig/components/menus/buttons.md`, `tokens/apple-buttons.json`). |
| ≤ 4 buttons incl. Cancel; don't scroll | **At most 3 choices + Cancel**; a sheet that would need more becomes a **menu, list or page**. `max-height: min(100dvh - safe areas, …)` and **no inner scrolling**; if it must overflow, the design is wrong (`layout.md`). |
| iOS/iPadOS look | **Mobile web:** a **bottom sheet** with rounded top corners and `env(safe-area-inset-bottom)` padding, or (as in current iOS) a **compact panel anchored to the trigger** (Popover API + CSS anchor positioning where supported); **desktop web:** an anchored popover/small centred dialog. Glass fill with a **solid fallback** for Reduce Transparency/Increase Contrast (`materials.md`). |
| watchOS | **Small-screen web:** a **full-screen dialog** with a **Cancel (✕) at the upper-left**, title, optional line, and **stacked full-width buttons** (destructive on top); same ≤ 4 rule. |
| macOS/tvOS | No extra rules: desktop uses the same dialog; **10-foot UIs** need large focusable buttons and Back/Menu = Cancel. |
| Motion | Slide/fade in ~200–300 ms (CONV), **`prefers-reduced-motion`** → fade only; no bounce on a destructive prompt. |

Field-note cross-links:
- `hig/patterns/modality.md` (✓): modal discipline (one at a time, obvious dismissal, data-loss guard); the action sheet is its **choice-bearing** variant.
- `hig/components/menus/buttons.md` (✓ CRITICAL): roles, destructive styling, hit regions; `hig/patterns/feedback.md` (✓ CRITICAL): dialogs vs alerts, no `alert()`/`confirm()`.
- `hig/components/menus/pull-down-buttons.md` (✓): destructive items in a menu (red, last, confirmed apart) vs the sheet's **destructive on top**; the two rules differ by component, follow each.
- `hig/patterns/undo-and-redo.md` (✓): the better answer for reversible actions.
- `hig/foundations/materials.md` (✓ CRITICAL): glass sheets and fallbacks; `writing.md` (✓): button labels.
- Ingested since: Sheets (✓ `sheets.md`).
- No conflict with a field note.

## Checklist
- [ ] The dialog is a **response to an action the person just took** and offers **real choices** (else an alert, a menu or just Undo).
- [ ] Used **sparingly**: no chained dialogs; reversible actions use Undo.
- [ ] Title fits **one line**; **no message** unless it adds a fact.
- [ ] **Destructive button on top**, red **and** verb-labelled, **never primary**, not focused first.
- [ ] **Cancel** at the bottom (✕ upper-left on tiny screens) when data can be lost; **Esc/backdrop** also cancel.
- [ ] **≤ 4 buttons including Cancel**; the sheet **doesn't scroll**.
- [ ] Buttons follow **roles** (normal/destructive/cancel), ≥ 44 px at touch widths, with press and focus states.
- [ ] Modal mechanics: `<dialog>`/`aria-modal`, inert background, focus trap, focus restored, scroll lock.
- [ ] Glass fill has a solid fallback; safe-area padding on mobile; reduced-motion respected.

## Related
- Ingested: Modality (✓), Buttons (✓ CRITICAL), Feedback (✓ CRITICAL), Materials (✓ CRITICAL), Pull-down buttons (✓), Menus (✓), Undo and redo (✓), Layout (✓ CRITICAL), Writing (✓).
- Ingested since: **Alerts** (✓ `alerts.md`: its Mail example has **three** choices, this page's has **two**). Sheets (✓ `sheets.md`).
- Developer docs: SwiftUI `confirmationDialog(_:isPresented:titleVisibility:actions:)`; UIKit `UIAlertController.Style.actionSheet`.
