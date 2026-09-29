# Text fields
Source: https://developer.apple.com/design/human-interface-guidelines/text-fields · Section: Components › Selection and input · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (all six icons lit on the platform strip **(from screenshot)**; "No additional considerations for tvOS or visionOS") · Ingested: 2026-09-29 · Apple last updated: **June 5, 2023** (updated guidance to reflect changes in watchOS 10; the only change-log row). One DocC fetch, read in full. 5 screenshots (hero → the change log row, with the Apple site footer just beginning at the bottom) were compared with the fetched text and image alt text line by line: everything matches, with **one mismatch between an image and its alt text** (see *Visual notes*). **Read from the fetch only (not in screenshots):** the dark variants of the pictures and the image alt texts; the page has **no videos**. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker, but its rules (labels, contrast, secure fields, validation) meet the **Color gate** and **Feedback gate**. The page has **no numeric thresholds** (only "four decimal places" in an alt text).

## In one line
A text field is a **rectangular area for entering or editing small, specific pieces of text** (a name, an email address; use a **text view** for more). **Show a hint (placeholder) and also keep a separate label**, **use secure fields for private data**, **size the field to the expected text**, **space and align multiple fields evenly (stacked vertically, consistent widths)**, keep **tab order logical**, **validate at the right moment** (email: when moving to another field; user name/password: before moving on), **use number formatters** (locale-aware), **choose clip / wrap / truncate deliberately** (with an **expansion tooltip**), **show the right keyboard** (iOS/iPadOS/tvOS/visionOS), and **minimise text entry on tvOS and watchOS**. iOS/iPadOS: a **trailing Clear button** and meaningful **leading/trailing images and buttons**. macOS: a **combo box** when text needs a list of choices.

## Rules

### Framing (intro)
- A text field is a **rectangular area in which people enter or edit small, specific pieces of text**.

### Best practices
- **should** **Use a text field to request a small amount of information**, such as a **name or an email address**. For **larger amounts** of text use a **text view**.
- **should** **Show a hint to communicate the field's purpose.** A field can contain **placeholder text** (e.g. "Email", "Password") **when there is no other text in it**. Because **placeholder text disappears when people start typing**, it can also help to include **a separate label** describing the field.
- **must** **Use secure text fields to hide private data.** **Always** use a secure field when the app asks for **sensitive data such as a password** (`SecureField`).
- **should** **Match the size of a text field to the quantity of anticipated text** as far as possible: the field's size **helps people visually gauge how much to provide**.
- **should** **Evenly space multiple text fields.** Leave **enough space so people can see which field belongs to each introductory label**; **stack multiple fields vertically when possible** and use **consistent widths** (e.g. first and last name fields one width, address and city another).
- **should** **Make tabbing between fields flow logically.** Move focus **in a logical sequence**; the system does this **automatically**, so custom order is rarely needed.
- **should** **Validate fields when it makes sense.** If the only legitimate value is a **string of digits**, **alert people** to other characters. **When to check depends on context:**
  - **Email address:** validate **when people switch to another field**.
  - **User name or password:** validate **before people switch to another field** (i.e. while typing/at the field).
- **should** **Use a number formatter for numeric data.** It **configures the field to accept only numeric values** and can **display them in a specific way** (decimal places, percentage, currency). **Don't assume the presentation**: formatting **varies significantly by locale**. (Picture "Formatted text": two stacked fields, **Number** and **Currency**.)
- **should** **Adjust line breaks to the needs of the field.** By default the system **clips** text extending beyond the field's bounds. Alternatively **wrap** at the **character or word** level, or **truncate with an ellipsis** at the **beginning, middle or end**. (Pictures: **Clipped**, **Wrapped**, **Truncated**.)
- **may** **Consider an expansion tooltip** to show the **full clipped or truncated text**; it behaves like a **regular tooltip** and appears when the **pointer is placed over the field**.
- **should** **In iOS, iPadOS, tvOS and visionOS apps, show the appropriate keyboard type** (numbers, URLs…) to **streamline data entry** (*Virtual keyboards*).
- **should** **Minimise text entry in tvOS and watchOS apps**: entering long text or filling many fields is **time-consuming on Apple TV and Apple Watch**; gather information more efficiently, **for example with buttons**.

### Platform considerations
- **tvOS, visionOS:** no additional considerations.

#### iOS, iPadOS
- **should** **Display a Clear button at the trailing end of a text field** so people can **erase their input** with one tap **instead of repeatedly tapping Delete**.
- **may** **Use images and buttons for clarity and functionality.** You can show **custom images at both ends** of a field, or add a **system-provided button** such as the **Bookmarks** button. In general the **leading end indicates the field's purpose** and the **trailing end offers additional features** (e.g. bookmarking).

#### macOS
- **may** **Consider a combo box to pair text input with a list of choices** (*Combo boxes*).

#### watchOS
- **should** **Present a text field only when necessary**; whenever possible **prefer a list of options** to requiring text entry.

## Specs & values

| Item | Value |
|---|---|
| Use for | small, specific text (name, email); larger text → text view |
| Hint | placeholder ("Email", "Password") **plus a separate label** (placeholder disappears on typing) |
| Sensitive data | **always** a secure field |
| Size | matches the expected amount of text |
| Multiple fields | stacked vertically, consistent widths, spacing that ties each field to its label; logical tab order |
| Validation timing | email: on moving to another field; user name / password: before moving on |
| Numbers | formatter for decimals / percentage / currency; **locale-dependent** presentation |
| Overflow | clip (default) · wrap (character or word) · truncate (ellipsis at beginning, middle or end); expansion tooltip on hover |
| iOS/iPadOS | trailing **Clear** button; leading image = purpose, trailing image/button = extras |
| macOS | combo box for text + list of choices |
| tvOS / watchOS | minimise entry; watchOS: list of options when possible |
| Keyboards | right keyboard type on iOS, iPadOS, tvOS, visionOS |
| Sizes, spacing, hit regions | **none given on this page** |
| Developer docs | SwiftUI `TextField`, `SecureField` · UIKit `UITextField` · AppKit `NSTextField` |
| Video | none |
| Apple's Related list | Text views ✓ · Combo boxes ✓ · Entering data ✓ |
| Change log | June 5, 2023: updated guidance to reflect changes in watchOS 10 |

## Visual notes (from screenshots and downloaded pictures)
- **Hero (screenshot):** a red-to-orange card with a **wide light-pink rounded field** containing the text **"Value"** followed by a **red text cursor** and a **dotted underline** running on to the right (the text area), and a **round red ✕ Clear button at the trailing end**; a **width arrow above** the field and a **height I-beam to its right** (a sized, single-line control). The alt text: *a stylised representation of a text field containing a value* **(from screenshot)**.
- **Formatted text (screenshot):** a light-grey card with two **stacked labelled fields, right-aligned values**: **"Number:" `100000.00`** and **"Currency:" `$100,000.00`**. **Image/alt mismatch:** the alt text says the top field contains a number **with four decimal places**, the picture shows **two** (`100000.00`); Apple's picture is the source of what is seen, and the rule itself ("decimal places, percentage, currency") holds either way **(from screenshot)**. The label column uses **title-style words followed by a colon**.
- **Clip / wrap / truncate (catalog `text-fields-01`, screenshots):** one-line field with **"The quick brown fox jumps ove"** cut off at the right edge (**Clipped text**); a **two-line field "The quick brown fox jumps / over the lazy dog."** (**Wrapped text**); a one-line field **"The quick brown fox jumps…"** (**Truncated text**, ellipsis at the end). Fields are white with a thin grey border on a light-grey card **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Text fields · Best practices · Platform considerations · Resources · **Change log**; side navigation shows **Selection and input** open with **Text fields** ringed after Steppers and before Toggles; the last screenshot shows the change-log row **"June 5, 2023 · Updated guidance to reflect changes in watchOS 10."**
- **Fetch script run:** 1 new comparison group (`text-fields-01`: clipped / wrapped / truncated); existing catalog IDs unchanged; total **158**. The hero and the *Formatted text* picture are not comparison images.

## Web translation
The web control is **`<input>`** (single line) with a **visible `<label>`**; **`<textarea>`** for larger text (see `text-views.md`).

| HIG rule | Web implementation |
|---|---|
| Small, specific text; larger text elsewhere | `<input type="text | email | tel | url | search | password | number">` for one-line values; **`<textarea>`** for multi-line/long text; don't stretch an input into a paragraph editor (`text-views.md`). |
| Hint (placeholder) + separate label | A **visible `<label for>`** is required; the **placeholder is only a hint/example** (`placeholder="name@example.com"`) that **disappears on input**, never the label (`entering-data.md`, `writing.md`); the placeholder colour meets the field-note token (**`black/45` ≈ 3.3:1**, always with a visible label: `field-notes/tokens.md`); floating labels are allowed only if the label stays visible when filled. **Compatible with the field notes.** |
| Secure text fields for private data | `type="password"` with `autocomplete="current-password" / "new-password"`, **a show/hide toggle** (`aria-pressed`, eye icon from Lucide), **no logging/analytics of the value**, `autocapitalize="off" autocorrect="off" spellcheck="false"`; PINs/CVV masked too (`digit-entry-views.md`); paste allowed (don't block password managers). |
| Size to anticipated text | Set the **width by expected length** (`size`, `ch`-based `width`, or grid spans: zip ≈ 10 ch, name ≈ 24 ch, address full width), **not a uniform 100 %** for everything; multi-line text → `<textarea rows>`; keep `max-width` for readability. |
| Evenly space multiple fields; stack vertically; consistent widths | **One column** by default, **consistent vertical rhythm** (label above the field, 8 px label-to-field, 16–24 px between fields: CONV), **paired short fields side by side only when logically paired** (first/last name); **label-to-field proximity** larger than field-to-field gap so grouping is clear (Layout gate: reflow at 320 px and 200 % text). |
| Logical tab order | Use **DOM order = visual order**, no positive `tabindex`; **Enter** submits in single-field forms, **Next** via `enterkeyhint="next"`; visible **focus ring** (`:focus-visible`, ≥ 3:1, Color gate). |
| Validate at the right time | **Email/format:** validate **on blur** (`change`/`blur`), **user name / password / availability:** validate **while typing (debounced) and before leaving the field**; show the error **next to the field** with `aria-describedby`, `aria-invalid="true"`, `role="alert"` for live errors, **no blame, one fix** ("Enter an email like name@example.com"; **Feedback gate**); use `pattern`, `type`, `minlength`, `required` for native constraint validation and the **Constraint Validation API** (`setCustomValidity`, `reportValidity`); don't validate empty fields on first focus. |
| Number formatter / locale | `inputmode="decimal|numeric"` (not `type="number"` for IDs/phone/card), **format for display with `Intl.NumberFormat`** (currency, percent, fraction digits) and **parse with the locale's separators**; keep the raw value separate; right-align numeric values (CONV, as the picture); `type="number"` for true quantities (`step`, `min`, `max`). |
| Clip / wrap / truncate | **Default: clip** (`overflow:hidden`; the input scrolls horizontally when focused); for **display-only** text use `text-overflow: ellipsis` (end) or a **start-ellipsis** via `direction: rtl` trick (CONV) / middle-ellipsis with JS; **wrap** in a `<textarea>` or an auto-growing multi-line control (`field-sizing: content`, `engineering-gotchas.md`: measure `scrollHeight` after accounting for the placeholder). |
| Expansion tooltip for clipped/truncated text | On hover **and keyboard focus**, show the **full value** in an accessible tooltip (`aria-describedby` to a `role="tooltip"`; `title` alone is not enough: `offering-help.md`); on touch, let the field **expand or scroll** instead of relying on hover. |
| Right keyboard (iOS/iPadOS/tvOS/visionOS) | `type` (`email`, `tel`, `url`, `search`), **`inputmode`** (`numeric`, `decimal`, `tel`, `email`, `url`), **`enterkeyhint`** (`next`, `done`, `go`, `search`, `send`), `autocomplete` tokens (`name`, `email`, `tel`, `street-address`, `postal-code`, `one-time-code`), `autocapitalize`/`autocorrect`/`spellcheck` per field (`entering-data.md`); `virtual-keyboards.md` not yet ingested. |
| Clear button at the trailing end (iOS/iPadOS) | **`type="search"`** gives a native ✕ in many browsers; otherwise a **trailing clear button** (Lucide `x-circle`/`x`) shown **only when the field has content**, `aria-label="Clear"`, **≥ 44 px** hit region, returns **focus to the field**, `Esc` also clears search-like fields (CONV); mirrors in RTL. |
| Leading/trailing images and buttons | **Leading icon = purpose** (mail, key, search: `aria-hidden`, the label still names the field) and **trailing = extra features** (clear, show password, bookmarks/paste): each trailing button has its **own accessible name and ≥ 44 px target**, sits **inside the field's border** without overlapping the text (`padding-inline-end`), and the field's contrast/focus ring wraps the whole control. Icons: Lucide/Phosphor/Ionicons, **never SF Symbols artwork**. |
| macOS: combo box for text + list | Use a **combobox** pattern (`combo-boxes.md`) or `<input list>` + `<datalist>` when suggestions accompany free text. |
| tvOS/watchOS: minimise text entry | On TV/wearable-size web views **replace typing with lists, buttons or pickers** (`pickers.md`), autofill and dictation; reduce the number of fields; **long forms split into short steps** (`onboarding.md`). |
| Accessibility and states | Visible label, **`aria-describedby` for hints and errors**, `required`/`aria-required`, disabled vs read-only (`readonly` stays focusable), **fields ≥ 44 px tall on touch**, **font-size ≥ 16 px** on iOS Safari to avoid zoom-on-focus (CONV), `prefers-reduced-motion` for validation animations, **200 % text** reflow (Layout gate). |

Field-note cross-links:
- `field-notes/tokens.md` (placeholder `black/45`, ~3.3:1, **always with a visible label**) and `field-notes/components.md` (input recipe `h-11 rounded-[12px] bg-black/[0.04] px-3.5 … placeholder:text-black/30 focus:ring-2`; the note-box recipe with `placeholder:text-black/25`): **compatible** with Apple's "hint plus separate label"; the recipe's lower placeholder contrast (`/25`–`/30`) is below the token's **3.3:1** and is the one to keep away from required fields (token table already flags it). `engineering-gotchas.md` (autogrow `scrollHeight` counts the placeholder): applies to wrapped/auto-growing fields.
- `hig/patterns/entering-data.md` (✓): the interaction patterns (defaults, live validation, secure entry, keyboards); this page supplies the **timing rule per field type** (email on field switch; user name/password before leaving). **No conflict**: `entering-data.md` says "live validation", which fits the user name/password case; email may wait for blur.
- `hig/components/content/text-views.md` (✓): larger text; `hig/components/selection-and-input/combo-boxes.md` (✓), `token-fields.md` (✓), `digit-entry-views.md` (✓), `steppers.md` (✓), `sliders.md` (✓): related entry controls; `hig/components/navigation/search-fields.md` (✓): the search variant.
- `hig/components/layout/labels.md` (✓) and `hig/foundations/writing.md` (✓): label wording and the **Capitalisation table** (form labels follow the product's convention, combo box labels are Title Case + colon; the Number:/Currency: picture uses Title Case with a colon, a macOS form); `hig/patterns/feedback.md` (✓ CRITICAL) and **Feedback gate**: inline errors; `hig/patterns/managing-accounts.md` (✓): sign-in fields.
- `hig/foundations/privacy.md` (✓): never prefill passwords; `hig/foundations/right-to-left.md` (✓): mirrored icons/clear button, numerals; `hig/foundations/color.md` (✓ CRITICAL): field boundary and placeholder contrast; `hig/foundations/layout.md` (✓ CRITICAL): reflow.
- Virtual keyboards (✓ `virtual-keyboards.md`). Toggles (✓ `toggles.md`).

## Checklist
- [ ] Every input has a **visible `<label for>`**; the **placeholder is only a hint** and meets **≥ 3:1** (token ≈ 3.3:1); floating labels keep the label visible.
- [ ] **Private data uses `type="password"`** (or masked digits) with the right `autocomplete`, a **show/hide toggle**, no logging, paste allowed.
- [ ] Field **widths match the expected text**; multiple fields are **stacked with consistent widths and spacing** that ties each label to its field.
- [ ] **DOM order = tab order**, visible focus ring, `enterkeyhint` set.
- [ ] **Validation timing per field type** (email on blur; user name/password while typing and before leaving); errors sit **next to the field**, **no blame, one fix**, `aria-invalid`/`aria-describedby`.
- [ ] **Numbers use `Intl.NumberFormat`** for display and locale-aware parsing; `inputmode` chosen per field.
- [ ] Overflow is **deliberate** (clip, wrap or ellipsis) with a **hover/focus expansion tooltip** for clipped or truncated values.
- [ ] Keyboards match the content (`type`, `inputmode`, `autocomplete`, `autocapitalize`).
- [ ] A **Clear button** (≥ 44 px, `aria-label`) appears when there is content; **leading = purpose, trailing = extras**; icons are Lucide/Phosphor/Ionicons.
- [ ] Combos of text + choices use a **combobox**; TV/wearable views **avoid typing**.
- [ ] Touch fields are **≥ 44 px tall**, **font-size ≥ 16 px** on iOS Safari, and reflow at **200 % text**.

## Related
- Ingested: Text views (✓), Combo boxes (✓), Entering data (✓), Token fields (✓), Search fields (✓), Digit entry views (✓), Steppers (✓), Sliders (✓), Pickers (✓), Labels (✓), Writing (✓), Feedback (✓ CRITICAL), Managing accounts (✓), Privacy (✓), Right to left (✓), Color (✓ CRITICAL), Layout (✓ CRITICAL), Offering help (✓).
- Virtual keyboards (✓ `virtual-keyboards.md`). Toggles (✓ `toggles.md`).
- Developer docs: SwiftUI `TextField`, `SecureField`; UIKit `UITextField`; AppKit `NSTextField`.
