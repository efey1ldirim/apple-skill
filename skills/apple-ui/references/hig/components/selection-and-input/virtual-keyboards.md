# Virtual keyboards
Source: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards · Section: Components › Selection and input · Supported platforms: **iOS, iPadOS, tvOS, visionOS, watchOS** ("Not supported in macOS"; the Mac icon is dimmed on the platform strip, the other five are lit **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **June 9, 2025** (added guidance for custom controls above the keyboard, updated for virtual keyboard availability in watchOS; earlier rows: February 2, 2024 visionOS gestures clarified, December 5, 2023 visionOS artwork, June 21, 2023 page renamed from "Onscreen keyboards" and visionOS guidance added). One DocC fetch, read in full. **Screenshots compared:** 20 (hero → the change-log table, all four rows visible): all 12 keyboard tabs, the Return-key paragraph, Custom input views, Custom keyboards, the iOS/iPadOS layout-guide pictures and accessory-controls rule, the tvOS text and Note, the visionOS text and video poster, the watchOS text, Resources and the change log, compared with the fetched text, tab names, captions and image alt text line by line: everything matches. **Read from the fetch only:** the image alt texts, the dark variants of the pictures and the **video's content** (the screenshot shows only its still frame and the "Play" link; the video was not played or downloaded); the two catalog image sets were read directly from the downloaded pictures. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no gate, token file or checker, but its layout rules meet the **Layout gate** and its accessory-bar rule the **Materials GATE**. The page has **no numeric thresholds**.

## In one line
On devices without physical keyboards the system offers **virtual keyboards** whose **key set is optimised for the task** (an email keyboard has "@", a period or ".com"); they **don't support keyboard shortcuts**. **Choose the keyboard type that matches the content** (and set the text content type so corrections adapt), **customise the Return key** when it clarifies the action (a search Return key for search), and on iOS/iPadOS **use the keyboard layout guide** so fields and buttons aren't hidden and **place custom accessory controls above the keyboard thoughtfully** (Liquid Glass to match). A **custom input view** must make sense and **play the standard keyboard sound**; a **custom keyboard** (app extension on iOS/iPadOS/tvOS) needs an obvious way to switch keyboards, must not duplicate system keys and should come with a tutorial. visionOS: the keyboard is a **movable separate window**; watchOS: **dictation/Scribble or a keyboard on large screens**, set the **content type**.

## Rules

### Framing (intro)
- On devices **without physical keyboards** the system offers **various types** of virtual keyboards.
- A virtual keyboard can provide **a specific set of keys optimised for the current task**; e.g. an **email** keyboard includes **"@", a period or even ".com"**.
- **A virtual keyboard doesn't support keyboard shortcuts.**
- Where it makes sense you can **replace the system keyboard with a custom view** supporting app-specific entry; in **iOS, iPadOS and tvOS** you can also build an **app extension** that offers a **custom keyboard** people install and use **in place of the standard keyboard**.

### Best practices
- **should** **Choose a keyboard that matches the type of content people are editing.** E.g. help with numeric data by providing the **numbers and punctuation** keyboard. When you **specify a semantic meaning** for a text input area, the system can **automatically provide the matching keyboard** and may use it to **refine keyboard corrections** (`keyboardType(_:)`, `textContentType(_:)`, `UIKeyboardType`, `UITextContentType`).
- **Keyboard types shown (iPhone tab set):** **ASCII capable**, **ASCII capable number pad**, **Decimal pad**, **Default**, **Email address**, **Name phone pad**, **Number pad**, **Numbers and punctuation**, **Phone pad**, **Twitter**, **URL**, **Web search**.
- **may** **Consider customising the Return key type if it clarifies the text-entry experience.** The Return key type **follows the keyboard type** but can change: e.g. an app that **initiates a search** can use a **search Return key** so the experience is **consistent with other places people start search** (`submitLabel(_:)`, `UIReturnKeyType`).

### Custom input views
- You can create an **input view** for **custom functionality that enhances data entry** (Numbers has a custom input view for numeric values in a spreadsheet). It **replaces the system keyboard while people are in your app** (`ToolbarItemPlacement`, `inputViewController`).
- **should** **Make sure the custom input view makes sense in the context of the app**: make entry **simple and intuitive**, and let people **understand the benefit**; otherwise they may **wonder why they can't regain the system keyboard**.
- **should** **Play the standard keyboard sound while people type**: it is **familiar feedback**, so people expect it in your custom input view. People can **turn keyboard sounds off in Settings › Sounds** (`playInputClick()`).

### Custom keyboards
- In **iOS, iPadOS and tvOS** you can provide a custom keyboard that **replaces the system keyboard** via an **app extension** (code people install to extend a specific area of the system).
- After people choose it in **Settings**, they can use it **in any app**, **except in secure text fields and phone number fields**; they can **choose several custom keyboards and switch between them at any time**.
- Custom keyboards make sense to expose **unique keyboard functionality systemwide** (a novel way of inputting text, a language the system doesn't support). For use **only inside your app**, consider a **custom input view** instead.
- **should** **Provide an obvious and easy way to switch between keyboards.** People know the **Globe key** (which **replaces the Emoji key** when multiple keyboards are available) switches keyboards, and expect a **similarly intuitive experience**.
- **should not** **Duplicate system keyboard features.** On some devices the **Emoji/Globe key and the Dictation key automatically appear beneath the keyboard**, even with custom keyboards; your app **can't affect them**, and repeating them is **confusing**.
- **may** **Consider a keyboard tutorial in your app**: usage instructions (how to **choose** the keyboard, **activate** it during text entry, **use** it, and **switch back** to the standard keyboard); **avoid showing help content within the keyboard itself**.

### Platform considerations
- **macOS:** not supported.

#### iOS, iPadOS
- **should** **Use the keyboard layout guide** so the keyboard feels **like an integrated part of the interface** and **important parts of the UI stay visible** while the keyboard is up (`Adjusting your layout with keyboard layout guide`). (Pictures: **✓** two stacked text fields and a button all above the keyboard; **✗** the keyboard **covers part of the bottom text field**; **✗** the keyboard **covers part of the button**.)
- **should** **Place custom controls above the keyboard thoughtfully.** An **input accessory view** offers app-specific functionality related to the data (Numbers shows calculation controls for spreadsheet data). Controls must be **relevant to the current task**. **If other views use Liquid Glass, or the view looks out of place above the keyboard, apply Liquid Glass to the view holding your controls**; **a standard toolbar adopts Liquid Glass automatically**. Use the **keyboard layout guide and standard padding** so the system positions controls as expected (`ToolbarItemPlacement`, `inputAccessoryView`, `UIKeyboardLayoutGuide`).

#### tvOS
- tvOS shows a **linear virtual keyboard** when people select a text field with the **Siri Remote**.
- **Note:** a **grid keyboard screen** appears when people use **devices other than the Siri Remote**, and the **content layout adapts automatically**.
- When people activate a **digit entry view**, tvOS shows a **digit-specific keyboard** (*Digit entry views*).

#### visionOS
- The system virtual keyboard supports **both direct and indirect gestures** and appears **in a separate window people can move anywhere**. **You don't need to account for its location in your layouts.** (Video: a person typing on the visionOS virtual keyboard.)

#### watchOS
- A text field can show a **keyboard if the screen is large enough**; otherwise the system offers **dictation or Scribble**. You **can't change the keyboard type** in watchOS, but you **can set the text field's content type** so the system **makes entry easier (e.g. offers suggestions)** (`textContentType(_:)`).
- People can also use a **nearby paired iPhone** to enter text on Apple Watch.

## Specs & values

| Item | Value |
|---|---|
| Keyboard types (iPhone) | ASCII capable · ASCII capable number pad · Decimal pad · Default · Email address · Name phone pad · Number pad · Numbers and punctuation · Phone pad · Twitter · URL · Web search |
| What differs | key set (letters vs digits; extra "@", ".", ".com", "/", "#", "+*#", period on the decimal pad), suggestions bar, Emoji/Globe and Dictation buttons |
| Number pads | 10 digits + Delete; keys 2–9 show their phone letters (3 or 4 each); decimal pad adds a period; phone pad adds a "+ * #" key |
| Return key | follows the keyboard type; customise (e.g. search) when it clarifies the action |
| Custom input view | replaces the system keyboard in-app; must make sense; **play the standard keyboard sound** |
| Custom keyboard | app extension (iOS, iPadOS, tvOS); **not used in secure text or phone number fields**; obvious switching (Globe), no duplicated system keys, in-app tutorial (not inside the keyboard) |
| Layout | iOS/iPadOS keyboard layout guide; accessory controls above the keyboard, Liquid Glass to match |
| tvOS | linear keyboard (Siri Remote), grid keyboard (other devices), digit keyboard for digit entry views |
| visionOS | separate movable window; direct and indirect gestures; don't account for its position |
| watchOS | keyboard on large screens, else dictation/Scribble; content type settable, keyboard type not |
| Sizes, spacing, hit regions | **none given on this page** |
| Developer docs | SwiftUI `keyboardType(_:)`, `textContentType(_:)`, `submitLabel(_:)`, `ToolbarItemPlacement` · UIKit `UIKeyboardType`, `UITextContentType`, `UIReturnKeyType`, `inputViewController`, `inputAccessoryView`, `UIKeyboardLayoutGuide`, `playInputClick()` |
| Video | visionOS virtual keyboard (recording of typing) |
| Apple's Related list | Entering data ✓ · Keyboards (not yet ingested) · Layout ✓ |
| Change log | June 9, 2025 (accessory controls above the keyboard; watchOS keyboard availability) · Feb 2, 2024 (visionOS gestures) · Dec 5, 2023 (visionOS artwork) · June 21, 2023 (renamed from *Onscreen keyboards*; visionOS) |

## Visual notes (from screenshots and downloaded pictures)
- **Hero (screenshot):** a red-to-orange card filled with a **phone-style numeric keypad** on a faint grid: keys **1, 2 ABC, 3 DEF, 4 GHI, 5 JKL, 6 MNO, 7 PQRS, 8 TUV, 9 WXYZ**, an empty slot at bottom-left, **0** at the centre and a **delete (⌫ with ✕) key** at bottom-right; the alt text says it sits *on top of a grid that suggests the canvas of a design tool* **(from screenshot)**.
- **Keyboard tab set (catalog `virtual-keyboards-01`, 12 tabs; screenshots so far show the first four):** each tab is a **partial iPhone screenshot** with a small caption naming the type (**"asciiCapable"**, **"asciiCapableNumberPad"**, **"decimalPad"**, **"default"** …), a text field with the placeholder **"Placeholder"** (blue caret) and the keyboard: **ASCII capable**: QWERTY, shift, delete, **123**, space, return, suggestions **"I · The · I'm"**, a **Dictation (mic)** button below (no emoji); **ASCII capable number pad** and **Decimal pad**: the phone-letter number pad (the decimal pad has a **"." key** at bottom-left, the ASCII pad an empty slot); **Default**: like ASCII capable but with both an **Emoji (smiley)** and a **Dictation** button under the keys. From the downloaded pictures: **Phone pad** adds a **"+ * #"** key; **Numbers and punctuation** shows **1–0**, **- / : ; ( ) $ & @ "**, **#+=**, **. , ? ! '**, **ABC**, space, return and a **mic** (with suggestions) **(from screenshot and picture)**. The right-hand list highlights the selected tab **(from screenshot)**.
- **Keyboard layout guide (catalog `virtual-keyboards-02`, downloaded pictures):** an iPhone "Account" screen with **Email** and **Password** fields and a **"Sign In"** button: **✓** all three above the keyboard (keyboard shows **"Design" · Designs · Designed** suggestions, a **blue return key**, Emoji and mic), **✗** the keyboard **covering the bottom of the button** ("Sign In" clipped) and **✗** covering the lower text field **(from picture)**.
- **Layout guide, tvOS and visionOS (screenshots):** three small iPhone "Account" screens side by side with the captions *"The keyboard layout guide helps ensure that app UI and the keyboard work well together."* (**green ✓ circle**; Email, Password and "Sign In" all above the keyboard), *"Without the layout guide, the keyboard could make entering text more difficult."* (**grey ✕ circle**; the Password field partly hidden) and *"Without the layout guide, the keyboard could make tapping a button more difficult."* (**grey ✕ circle**; "Sign In" clipped). The tvOS text is followed by a **grey outlined "Note" callout** about the grid keyboard screen. The visionOS video poster shows a **dark, rounded keyboard window floating over a rug in a living room**: a **"Text preview" line with a mic**, three suggestion pills **"I · I'm · We"**, QWERTY keys, **123, emoji, space, return** and a small grab bar beneath, with a blue **"Play ⊙"** link under it **(from screenshot)**.
- **Page chrome (from screenshot):** TOC Virtual keyboards · Best practices · **Custom input views** · **Custom keyboards** · Platform considerations · Resources · Change log; platform strip lights all but the Mac; side navigation shows **Selection and input** open with **Virtual keyboards** last of the group.
- **Fetch script run:** 2 new comparison groups (`virtual-keyboards-01` the 12-tab keyboard set, `virtual-keyboards-02` the layout-guide do/don't set); existing catalog IDs unchanged; total **164**. The watchOS/tvOS pictures don't exist; the visionOS video is **not downloaded**.

## Web translation
Browsers choose the **on-screen keyboard from input attributes**; the web can't build system keyboards, but it can select the right one and lay the page out around it. **No system-level shortcuts:** the on-screen keyboard doesn't need shortcuts (`entering-data.md`).

| HIG rule | Web implementation |
|---|---|
| Choose the keyboard type for the content | **`type`** (`email`, `tel`, `url`, `search`, `number` only for true quantities) + **`inputmode`** (`text`, `numeric`, `decimal`, `tel`, `email`, `url`, `search`, `none`) per field; the mapping below is **CONV** (Apple gives no web mapping): ASCII capable/Default → `inputmode="text"`; **Number pad / ASCII capable number pad** → `inputmode="numeric"` (+ `pattern="[0-9]*"`); **Decimal pad** → `inputmode="decimal"`; **Email address** → `type="email"` (`inputmode="email"`); **Phone pad / Name phone pad** → `type="tel"` (`inputmode="tel"`); **URL** → `type="url"`; **Web search** → `type="search"` (`inputmode="search"`); **Twitter (@ and #)** and **Numbers and punctuation** have **no inputmode**: use `text` and let people switch. |
| Text content type refines corrections | **`autocomplete`** tokens (`name`, `email`, `tel`, `street-address`, `postal-code`, `cc-number`, `one-time-code`, `current-password`, `new-password`, `username`) so the OS offers suggestions, AutoFill and passkeys; **`autocapitalize`** (`none` for emails/usernames, `words` for names, `sentences` default), **`autocorrect`/`spellcheck` off** for codes, IDs and usernames (`entering-data.md`, `text-fields.md`). |
| Customise the Return key | **`enterkeyhint`** = `enter`, `done`, `go`, `next`, `previous`, `search`, `send`; pick the verb that matches the action ("search" for a search field, "next" inside a multi-field form, "done" for the last field, "send" for chat); keep it **consistent with the action the form performs** (`search-fields.md`). |
| No keyboard shortcuts on the virtual keyboard | Don't rely on Ctrl/Cmd shortcuts for **touch-only flows**; give **visible buttons** for every action reachable only by shortcut (`the-menu-bar.md`, `keyboards` not yet ingested). |
| Custom input view (in-app replacement) | A **custom keypad/number editor** rendered in the page (`inputmode="none"` **on the field** so the native keyboard stays closed, plus an **on-page keypad** with real `<button>`s, **≥ 44 px**, key repeat for delete, `aria-label`s); it must **make sense** (numeric calculators, PIN pads, unit steppers) and **always offer a way to type with the normal keyboard** (a toggle or long-press) because `inputmode="none"` blocks assistive keyboards and dictation (CONV: use rarely; **accessibility risk**). `digit-entry-views.md` is the tvOS/PIN analogue. |
| Play the standard keyboard sound in a custom input view | **No web API for the system key click**; the OS plays it only for the **native** keyboard. **Don't synthesise fake system click sounds** (a Web Audio click demo was declined for this repo); keep custom keypads **silent unless the person opts in**, and respect the device's silent/mute switch; provide a **haptic** only where a real API exists and the product opts in (`playing-haptics.md`). |
| Custom keyboards (app extension) | **No web equivalent** (iOS/iPadOS/tvOS only). On the web the analogues are **IMEs / browser extensions / OS keyboards**, outside the page's control; expose **`lang`** on inputs so the right keyboard/IME and spellcheck load (`right-to-left.md`); keep the note that **secure fields (`type="password"`) and phone fields may not accept third-party keyboards**. |
| Obvious way to switch keyboards; don't duplicate system keys; tutorial | Don't add a fake **Globe/Emoji/Dictation** row: the OS provides them; for custom keypads provide a clear **"ABC/123" switch** and **in-page help outside the keyboard**, not inside it. |
| Keyboard layout guide (fields and buttons stay visible) | Use **`visualViewport`** (`resize`/`scroll` events) and **`interactive-widget`** in the viewport meta (`resizes-content` so `dvh` shrinks; or `overlays-content` + **`env(keyboard-inset-height)`** with the **VirtualKeyboard API**: `navigator.virtualKeyboard.overlaysContent = true`); scroll the focused field into view (`scrollIntoView({block:"center"})` after the resize); keep the **primary button above the keyboard** (a sticky bottom action bar sized to `100dvh`, safe-area insets; **Layout gate**); never let a fixed footer sit **behind** the keyboard. Test: two stacked fields + a button (Apple's ✓/✗ pictures) on a **320 × 568 px** viewport. |
| Custom controls above the keyboard (input accessory view) | A **sticky accessory bar** attached to the keyboard's top edge (`position: sticky/fixed; bottom: env(keyboard-inset-height)` or the `visualViewport` offset), containing **only controls relevant to the task** (e.g. formatting, calculation shortcuts, next/previous field, Done), each **≥ 44 px**; if the rest of the UI uses glass, give the bar a **`backdrop-filter` material with a solid fallback** and **≥ 4.5:1 text** (**Materials GATE**, `materials.md`), padding via standard tokens and safe areas. |
| tvOS: linear/grid keyboard; digit keyboard | For **TV/D-pad web UIs** use a **large focusable on-screen keyboard** (linear or grid) with clear focus and **minimal typing** (`text-fields.md`, `digit-entry-views.md`). |
| visionOS: separate movable keyboard window | Don't assume the **keyboard's position**; rely on the browser's viewport change events and **don't pin UI to where a keyboard "should" be**. |
| watchOS: dictation/Scribble; content type but not keyboard type | For wearable-size web views prefer **lists/buttons/dictation-friendly fields** and set `autocomplete`/`inputmode` (**the keyboard type is the OS's choice**); allow **paste/handoff** from a phone. |
| Accessibility | Every field keeps a **visible `<label>`**; the on-screen keyboard changes must not hide **errors/focus rings**; **don't lock scroll** while the keyboard is open; respect **200 % text** (Layout gate); `prefers-reduced-motion` for accessory-bar animation. |

Field-note cross-links:
- `hig/components/selection-and-input/text-fields.md` (✓) and `hig/patterns/entering-data.md` (✓): the `type`/`inputmode`/`enterkeyhint`/`autocomplete` rows there were written **before** this page and are **consistent** with it; this page adds **the type-by-type list, the Return-key rule, the layout-guide/accessory-bar rules and the custom-input-view caveats**. `digit-entry-views.md` (✓): the tvOS digit keyboard.
- `hig/foundations/layout.md` (✓ CRITICAL) and **Layout gate**: `dvh`/`visualViewport`, safe areas, 200 % text; `hig/foundations/materials.md` (✓ CRITICAL) and **Materials GATE**: glass accessory bar with a solid fallback; `hig/patterns/playing-haptics.md` (✓): no synthesised system click; `hig/components/menus/the-menu-bar.md` (✓): shortcuts live on hardware keyboards.
- `hig/components/navigation/search-fields.md` (✓): the search Return key; `hig/foundations/right-to-left.md` (✓): `lang`/`dir` for keyboards; `hig/foundations/privacy.md` (✓): secure and phone fields, passkeys/AutoFill.
- `field-notes/engineering-gotchas.md`: no keyboard-specific note; **no conflict**.
- Not yet ingested: **Keyboards** (Apple's Related: physical keyboards and shortcuts), Focus and selection.

## Checklist
- [ ] Every input has the **right `type`/`inputmode`** for its content; **numeric IDs use `inputmode="numeric"`** (not `type="number"`), decimals `decimal`, phones `tel`, emails `email`, URLs `url`, search `search`.
- [ ] **`autocomplete`** tokens, **`autocapitalize`** and **`autocorrect`/`spellcheck`** are set per field (AutoFill, passkeys, one-time codes).
- [ ] **`enterkeyhint`** matches the action (search/next/done/go/send) and is consistent across the product.
- [ ] With the on-screen keyboard open, **every field, error and the primary button stay visible** (`visualViewport`/`interactive-widget`/`env(keyboard-inset-height)`; scroll focused field into view); tested at **320 × 568 px**.
- [ ] Accessory bars above the keyboard hold **only task-relevant controls (≥ 44 px)** and use **glass with a solid fallback** where the UI uses glass.
- [ ] A custom keypad (`inputmode="none"`) is **rare, justified, keyboard-operable, silent by default** and **always leaves a way to use the normal keyboard**.
- [ ] No fake Globe/Emoji/Dictation row; no synthesised system click sounds; no help text inside a custom keypad.
- [ ] TV/wearable web UIs **minimise typing** and use large focusable keys, lists or buttons.
- [ ] `lang` is set on inputs whose language differs from the page so the right keyboard/IME loads.

## Related
- Ingested: Entering data (✓), Text fields (✓), Digit entry views (✓), Search fields (✓), Layout (✓ CRITICAL), Materials (✓ CRITICAL), Playing haptics (✓), The menu bar (✓), Privacy (✓), Right to left (✓).
- Not yet ingested: Keyboards, Focus and selection.
- Developer docs: SwiftUI `keyboardType(_:)`, `textContentType(_:)`, `submitLabel(_:)`; UIKit `UIKeyboardType`, `UITextContentType`, `UIReturnKeyType`, `UIKeyboardLayoutGuide`.
- Video: visionOS virtual keyboard recording (on the page).
