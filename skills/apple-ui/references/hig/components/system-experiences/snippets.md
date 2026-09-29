# Snippets
Source: https://developer.apple.com/design/human-interface-guidelines/snippets · Section: Components › System experiences · Supported platforms: **iOS, iPadOS, macOS** ("No additional considerations for iOS, iPadOS, or macOS. Not supported in tvOS, visionOS, or watchOS"; the phone, tablet and Mac icons are dark on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 8, 2026** (new page; the only change-log row). One DocC fetch, read in full. **5 screenshots (hero → the "Design interactive snippets" video card)** were compared with the fetched text and image alt text line by line; they cover the whole page **except the Change log (fetch-only: the last screenshot ends on the video card)**. Everything visible matches the fetch. **Read from the fetch only (not in screenshots):** the Change log row, the alt text of every image and the dark variants; the single video link was read as a title only (video not watched, nothing from it is recorded). Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **one number** (custom view **≤ 400 pt** tall) and one default label ("Continue"). Short page: 4 best practices.

## In one line
A snippet is a **compact view shown in response to an action people run through Siri, Spotlight or the Shortcuts app**, defined together with an **app intent**. Two kinds: **confirmation** (confirm or cancel, may include options that change the result; optional step) and **result** (information, no further action; always shown). It is made of **spoken dialogue + a custom view (≤ 400 pt tall) + system buttons** (confirmation: secondary **Cancel** + primary with your label; result: one **Done**). Rules: **check contrast in light and dark and keep even margins**, **stay concise (fits 400 pt even with large text; deep-link for more)**, **label the primary button with a descriptive verb (Order, not OK/Proceed; default Continue)**, and **convey the purpose visually, leaving the spoken dialogue out of the visual**. Native feature; on the web the counterpart is the **inline result/confirmation card** of a command or assistant.

## Rules

### Framing (intro)
- Snippets are **compact views** that appear in response to an action taken via **Siri, Spotlight or the Shortcuts app**.
- You present one **by including it with an app intent** designed for the task (examples: **check the weather forecast**, **update progress toward a daily goal**).
- **Two types:**
  - **Confirmation:** lets people **confirm or cancel** an action and may include **options that affect the result**. Illustrated by an order summary with **Cancel** and **Order** buttons; "requires additional input to proceed".
  - **Result:** provides **information, possibly as the outcome of a confirmation**, that **doesn't require further action**. Illustrated by an order status with a shipping date and a **Done** button; "provides information without requiring further action".
- **An app intent that displays a snippet always shows a result; the confirmation step is optional.** (Developer: "Displaying static and interactive snippets".)

### Anatomy
- **Dialogue:** the **app-intent dialogue Siri speaks** to communicate the information; the system **includes the text by default and puts it above the custom view**.
- **Custom view:** a view that **visually communicates the information**; it can contain **one or more buttons** to **modify the snippet's content, get more information, or take another action**.
- **System-provided button(s):**
  - **Confirmation:** **two** buttons under the custom view: a **secondary Cancel** and a **primary button with a customisable label**.
  - **Result:** a **single Done** button that dismisses the view.
- **Layout (diagram):** dialogue at the **top**, custom view in the **middle** with **max height 400 pt**, then the two system buttons at the **bottom**, **secondary on the left, primary on the right**.

### Best practices
- **should** **Ensure legibility:** enough **contrast between the custom content and the system-provided background in both light and dark appearances**, and **consistent margins** inside the view; it clarifies the layout and lets people **interpret the snippet quickly and reliably**.
- **should** **Keep content concise.** Snippets serve **lightweight, quick interactions**: short, easy-to-read content. **Custom views must be no taller than 400 pt** so everything is visible; remember **fonts scale with the person's text-size setting**. For a **result** snippet needing more detail, **deep-link into the app** instead of adding it to the custom view.
- **should** **Choose a descriptive label for the confirmation snippet's primary button.** Pick from **the labels the system provides** (`ConfirmationActionName`) or **supply a custom one**. Example: for a coffee order, **"Order" is clearer than "OK" or "Proceed"**. If you don't specify a label the **default is "Continue"**.
- **should** **Communicate the snippet's purpose visually.** Don't depend on the dialogue text: the **spoken dialogue is essential when nobody is looking at the screen**, but **prefer to omit it from the visual representation** and let **the custom view** carry the information. (✗ a Calendar result snippet whose top dialogue **repeats event title, date, time and participants** already in the custom view / ✓ the same snippet **without the dialogue**, information **only in the custom view**.)

### Platform considerations
- **iOS, iPadOS, macOS:** no additional considerations. **tvOS, visionOS, watchOS:** not supported.

## Specs & values
| Item | Value |
|---|---|
| Types | **confirmation** (Cancel + primary) and **result** (Done) |
| Custom view max height | **400 pt** |
| Buttons | confirmation: secondary **Cancel** (left) + primary (right, label customisable, default **Continue**); result: single **Done** |
| Elements top → bottom | dialogue · custom view · system buttons |
| Custom view content | may include one or more buttons (modify content, get information, other action) |
| Result snippet extra detail | deep link into the app |
| Contrast / margins | sufficient in light and dark; consistent margins |
| Text | scales with the person's preferred text size |
| Developer APIs named | App Intents, "Displaying static and interactive snippets", `ConfirmationActionName` |
| Videos (link only, not watched) | Design interactive snippets (WWDC25 281) |
| Apple's Related list | Siri, App Shortcuts (✓), Live Activities (✓) |
| Change log | June 8, 2026: new page |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** a soft-red gradient card with a **white rounded snippet** inside a lighter rounded frame: **"Tomorrow"** (red) at the left and **"April 23"** at the right, hour lines **"1 PM"** and **"2 PM"**, a **dashed-outline event block "Design Meeting / 1:00 - 2:00 PM / Juan Chavez, Mei Chen"**, and a wide red **"Done"** button underneath. **Measurement arrows** run along the top (width) and the right edge (height) of the snippet **(from screenshot)**. The alt text only says a snippet showing a proposed date and time for a Calendar event with a Done button; the names and text inside are **only in the image**.
- **Page chrome (from screenshot):** TOC = Snippets · Anatomy · Best practices · Platform considerations · Resources · Change log; side navigation shows **System experiences** open with **Snippets** ringed (browser focus, not page design).
- **Confirmation vs result on iPhone (screenshot 2):** two phone screens over the Home Screen. **Confirmation:** a **dark-red card** with a **coffee-cup picture**, **"Caffe Latte / Large / 2% Milk"**, a stepper row **"2 Shots"** with **− and +** buttons, then a grey **"Cancel"** and a blue **"Order"** button. **Result:** a **white card** headed **"Shipped"** and **"June 5"**, a **green progress bar** (about a third filled), **four round icon buttons** (message, document, phone, a grey **×**), and one blue full-width **"Done"** button **(from screenshot: all this text and the button icons are not in the alt text, which only speaks of an order summary/status)**. Captions read "A confirmation snippet requires additional input to proceed." and "A result snippet provides information without requiring further action."
- **Anatomy diagram (screenshot 3):** a rounded card, top label **"Dialogue"**, a **lavender rectangle "Custom view"**, and a footer with a **grey "Secondary"** and a **blue "Primary"** button; a **vertical bracket** at the left labelled **"Max height 400 pt"** spans the custom view **(from screenshot: the labels are baked into the picture; the alt names the same parts)**.
- **✗/✓ pair (screenshot 4):** ✗ a card whose **dialogue line at the top reads "Marisa and Duraid are available for archery practice tomorrow, from 1:00PM to 2:00PM."** over a **pink calendar icon** row **"Archery Practice / April 23 1:00 - 2:00 PM / Marisa Lu, Duraid Abdul"** and a blue **Done**; ✓ a timeline card **"Tomorrow · April 23"** with hour lines **1 PM / 2 PM**, a pink **dashed event block "Archery Practice / 1:00 - 2:00 PM / Marisa Lu, Duraid Abdul"** and a blue **Done**, **no dialogue text**. The dialogue sentence is **(from screenshot)** (the alt only says it repeats the information).
- **Videos (screenshot 5):** one card "Design interactive snippets" (WWDC25): a **collage of colourful snippet cards** (coffee order, a big "3", a price "$123.93", a garage door with an open button, a calendar block…). The screenshots stop at this card; the **Change log is fetch-only**.
- **Mismatches:** none. The hero uses example names (Juan Chavez, Mei Chen, "Design Meeting") different from the ✗/✓ pair (Marisa Lu, Duraid Abdul, "Archery Practice"); both are examples.

## Visual examples (catalog)
`visual-examples` gains **2 sets**: **snippets-01** neutral pair (confirmation vs result snippet on iPhone; the auto catalog has **no rule heading** for it) · **snippets-02** ✗/✓ dialogue repeated in the visual vs custom view only ("Communicate a snippet's purpose visually"). Both have light and dark variants. Not in the catalog: hero, anatomy diagram. Catalog total: **192** (was 190); existing IDs unchanged.

## Web translation
Snippets are **system UI shown by Siri/Spotlight/Shortcuts**, not a web component, and shouldn't be imitated. The pattern that transfers is the **compact card returned by a command or assistant**: a **result card** (information, one **Done/Close**) or a **confirmation card** (**Cancel + a verb-labelled primary**), with a **short visual** and a **separate spoken/screen-reader text**. Web equivalents: **command-palette results**, **assistant/chat replies with cards**, **inline confirmation popovers**, **share-target confirmations**, **rich link previews**.

| HIG rule | Web implementation |
|---|---|
| Two types: confirmation and result | Model the card as **`type: 'confirm' \| 'result'`**; results always show, confirmation is **optional** per action (skip it for safe, reversible actions and offer **Undo** instead: `undo-and-redo.md`). |
| Confirmation = secondary Cancel + primary with a custom label | Footer of **two buttons**: **secondary "Cancel"** (left/leading) and **primary with the result verb** ("Order", "Send", "Book"); one prominent button (Buttons GATE); default label **"Continue"** only when nothing better exists; **Title Case** labels (`writing.md`). `role="alertdialog"` **only if it blocks** (`alerts.md`); otherwise an inline region with focus moved to the primary/first field. |
| Result = single Done | A result card ends with **one "Done"/"Close"** (or auto-dismiss after a delay if purely informational, CONV ≥ 5 s and pause on hover/focus), plus a **deep link** for detail. |
| Descriptive primary label (Order, not OK/Proceed) | Never "OK/Yes/Proceed"; **verb + object** ("Order Caffè Latte", "Delete 3 Files"); localise; keep to **≤ 2 words** (CONV). |
| Custom view ≤ 400 pt | Cap the card body at **≈ 400 CSS px** (`max-height: 25rem; overflow: auto`) so nothing is clipped, and test at **200 % text** and 320 px width (Layout gate); if it needs scrolling, it's too big: **deep-link instead**. |
| Contrast and margins in light and dark | Card on a **system surface** with **≥ 4.5:1** text, **≥ 3:1** graphics in both themes (Color gate); **one consistent padding** (e.g. 16 px), no edge-to-edge content. |
| Concise, quick interaction | **One glanceable answer** (a number, a status, an event block) + at most **one or two controls** inside the view (stepper, toggle); no long text. |
| Buttons inside the custom view modify the snippet | Stepper/toggle controls **update the card in place** and the **result preview** (price, quantity) before confirming; each control has an accessible name and value (`steppers.md`, `toggles.md`). |
| Detail via deep link for results | "View order" link to the exact page (`/orders/123`), not the home page. |
| Communicate purpose visually; omit dialogue from the visual | **Don't repeat the same sentence as heading and body.** The card shows **data visually** (icon, timeline, progress); the **spoken/screen-reader summary** is a **separate `aria-label`/`aria-live` text** ("Archery practice tomorrow 1:00 to 2:00 PM with Marisa and Duraid") and is **not printed as duplicate visible text**; this also keeps voice assistants and screen readers complete. |
| Dialogue essential when nobody looks | Always provide the **text alternative** for voice/screen-reader users (`role="status"`, `aria-live="polite"`); for assistant products return **both** a spoken sentence and a card. |
| Text scales with user size | Use **`rem`/`em`**, no fixed pixel heights for text containers, allow wrapping (Layout gate). |
| Siri/Spotlight/Shortcuts surfaces | Native only; the web analogue of the **entry points** is the command palette and manifest shortcuts (`app-shortcuts.md`). |

Field-note cross-links:
- `hig/components/system-experiences/app-shortcuts.md` (✓): snippets are its **"custom views for static information or dialog options"** response type (weather, order confirmation); **consistent**; that note's "not yet ingested: Snippets" is now updated. `live-activities.md` (✓): the sibling response for **timers/progress**; snippet = one-shot answer, Live Activity = ongoing status.
- `hig/components/presentation/alerts.md` (✓): descriptive button verbs, cancel/primary structure; `hig/patterns/feedback.md` (✓ CRITICAL): result vs confirmation feedback and `alertdialog`; `hig/patterns/undo-and-redo.md` (✓): prefer Undo to confirmation for reversible actions; `hig/components/menus/buttons.md` (✓ CRITICAL) and **Buttons GATE**; `hig/foundations/color.md` (✓ CRITICAL) and **Color gate**; `hig/foundations/layout.md` (✓ CRITICAL) and **Layout gate**; `hig/foundations/writing.md` (✓): button labels Title Case.
- `field-notes/*`: no snippet/confirmation-card recipe; **no conflict**.
- Ingested since: Siri (✓ `technologies/siri.md`). Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] Each action declares **result** (always) and, only if needed, **confirmation**; reversible actions use Undo instead of a confirm.
- [ ] Confirmation has **Cancel (secondary)** + **one primary with a verb-plus-object label**, never OK/Proceed.
- [ ] Result has **one Done/Close** and a **deep link** for detail.
- [ ] The card body is **≤ ≈ 400 px**, readable at **200 % text**, with **consistent padding** and **≥ 4.5:1** contrast in light and dark.
- [ ] Interactive controls inside the card update it in place and have accessible names and values.
- [ ] The **visual carries the information** (no duplicated sentence); a **separate text alternative** serves voice and screen-reader users.
- [ ] No fake Siri/Spotlight chrome is drawn.

## Related
- Ingested: App Shortcuts (✓), Live Activities (✓), Alerts (✓), Feedback (✓ CRITICAL), Undo and redo (✓), Buttons (✓ CRITICAL), Color (✓ CRITICAL), Layout (✓ CRITICAL), Writing (✓), Steppers (✓), Toggles (✓).
- Ingested since: Siri (✓ `technologies/siri.md`). Not yet ingested (linked from this page): none in the HIG.
- Developer docs: App Intents, "Displaying static and interactive snippets", `ConfirmationActionName`.
- Videos: Design interactive snippets (WWDC25 281).
