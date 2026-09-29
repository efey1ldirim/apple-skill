# NFC
Source: https://developer.apple.com/design/human-interface-guidelines/nfc · Section: Technologies · Supported platforms: **iOS, iPadOS** (page data; the platform text: "No additional considerations for iOS or iPadOS. **Not supported in macOS, tvOS, visionOS, or watchOS**") · Ingested: 2026-09-29 · Apple last updated: **not shown** (the page has **no Change log** and no date in its data). **Link-only ingestion: one DocC fetch, read in full (36 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts only. Not marked critical: no token file, checker or gate. The page has **no measurements**; it names **2 reading modes** (in-app, background), **2 wording tables** (use / don't use; first scan / subsequent scans) and **1 developer framework** (Core NFC).

## In one line
**NFC lets an iPhone read electronic tags within a few centimetres.** **In-app reading** shows a **scanning sheet**; **background reading** lets the system detect a tag whenever the screen is on and show a **notification people tap to send the tag data to your app** (not available while a scanning sheet is visible, Wallet or Apple Pay is in use, cameras are in use, in Airplane Mode, or after a restart until unlock). **Say "scan" and "hold near", never "tap" or "touch"; drop the words NFC, Core NFC, near-field communication and tag in favour of the object's name; write the sheet text as one complete sentence in sentence case with ending punctuation (first scan: "Hold your iPhone near the [object name] to learn more about it."; next scans: "Now hold your iPhone near another [object name]."); support both background and in-app reading.** On the web: **Web NFC (`NDEFReader`) exists only in some Android browsers and not in iOS Safari, so treat NFC as an enhancement; QR codes or a manual code are the fallback; the wording rules carry over to any scan-a-physical-thing prompt.**

## Rules

### Framing (intro)
- **iOS apps on supported devices can use NFC scanning to read data from electronic tags attached to real-world objects.** Examples: **scan a toy to connect it with a video game, scan an in-store sign for coupons, scan products to track inventory.**

### In-app tag reading
- **The app can support single- or multiple-object scanning while active, and shows a scanning sheet whenever people are about to scan something.** (Illustration: **a scanning sheet on iPhone with "Ready to Scan", "Hold your device near the NFC tag" and a Cancel button**; that is the **system default text**, which the page's own wording rules improve on by naming the object.)
- **must not** **Encourage contact with physical objects.** **The device only needs to be close; it doesn't have to touch the tag.** **Use "scan" and "hold near", not "tap" and "touch".**
- **should** **Use approachable terminology.** **Avoid developer terms: "NFC", "Core NFC", "Near-field communication", "tag".** **Use friendly, conversational words.**

| Use | Don't use |
|---|---|
| Scan the [object name]. | Scan the NFC tag. |
| Hold your iPhone near the [object name] to learn more about it. | To use NFC scanning, tap your phone to the [object]. |

- **should** **Write succinct instructional text for the scanning sheet**: **a complete sentence, in sentence case, with ending punctuation**; **identify the object to scan and revise the text for subsequent scans**; **keep it short to avoid truncation.**

| First scan | Subsequent scans |
|---|---|
| Hold your iPhone near the [object name] to learn more about it. | Now hold your iPhone near another [object name]. |

### Background tag reading
- **People can scan tags quickly at any time, without opening the app or starting a scan.** **On supporting devices the system looks for compatible tags whenever the screen is on**; **after it detects a tag and matches it to an app, it shows a notification that people can tap to send the tag data to the app.** (Illustration: **a notification banner above the Home screen offering to open a specific app to process nearby tag data**.)
- **Not available when:** **an NFC scanning sheet is visible**, **Wallet or Apple Pay is in use**, **cameras are in use**, **the device is in Airplane Mode**, or **the device is locked after a restart.**
- **must** **Support both background and in-app reading**: **the app must still provide an in-app way to scan, for devices without background tag reading.**

### Platform considerations
- **iOS, iPadOS:** no additional considerations. **macOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
The page has **no numbers, sizes or timings** beyond "a few centimeters" (abstract). Its concrete content:

| Item | Value |
|---|---|
| Range | **a few centimetres**; no contact needed |
| Reading modes | **in-app** (scanning sheet; single or multiple objects) · **background** (system notification, needs a supporting device) |
| Sheet default text (illustration) | "Ready to Scan" · "Hold your device near the NFC tag" · Cancel |
| Wording | say **scan** / **hold near**; not tap/touch; not NFC, Core NFC, near-field communication, tag |
| Sheet text | one complete sentence, sentence case, ending punctuation, short; first vs subsequent wording |
| Background limits | scanning sheet visible · Wallet or Apple Pay in use · cameras in use · Airplane Mode · locked after restart |
| Support | in-app reading always available |
| Platforms | iOS, iPadOS only |
| Developer docs | **Core NFC** |
| Apple's Related list | none |
| Change log | none on the page |

## Visual notes (link-only: from alt texts)
- **Hero:** a sketch of **progressively larger curved lines extending to the right**, suggesting near-field communication, over grid lines, **tinted blue** (alt).
- **Scanning sheet (light and dark):** **"Ready to Scan", "Hold your device near the NFC tag", Cancel.**
- **Background notification (light and dark):** **a banner above the Home screen offering to open a specific app to process detected tag data.**
- **Mismatches / notes:**
  1. **The system's sample sheet text says "NFC tag"**, **while the wording rules say to avoid "NFC" and "tag"**; **the sheet's instructional line is the part you supply, so follow the rules there.**
  2. **The page says "tap and touch" are wrong**, **yet the background notification is something people "tap"** (the notification itself, not the object); **the rule concerns objects.**
  3. **The page gives no sizes, timings or haptic/sound guidance** for scanning.
  4. **No dark-pattern, accessibility or privacy guidance is included** (e.g. what happens with VoiceOver, who can read a tag); **those live in Core NFC docs and elsewhere.**
  5. **The page doesn't say how to show scan success or failure after the sheet closes**; **see `feedback.md`.**
  6. **There is no Change log, Related list or video**, so **its currency can't be checked.**
- **Catalog:** the script found **0 comparisons** (the sheet and notification are single illustrations; the two wording tables are text). Catalog stays **268**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**Core NFC is native and iOS/iPadOS-only.** **On the web, Web NFC (`NDEFReader.scan()` / `write()`) is available in some Android browsers behind a user gesture and HTTPS, and not in iOS Safari, so verify support per browser before relying on it.** **QR codes (camera, `BarcodeDetector`), a short code the person types, or a link** are the usual cross-platform fallbacks. Statements about Web NFC are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| In-app scan sheet with instructions and Cancel | **A modal or bottom sheet (`<dialog>`) opened from an explicit button ("Scan the toy")**, **with the instruction sentence, a live status and a Cancel button; `AbortController` cancels `NDEFReader.scan()`**; **Esc closes** (`sheets.md`, `modality.md`). |
| Say scan / hold near, not tap / touch | **Copy: "Hold your phone near the [object name]"**; **never "tap your phone to..."**; **also avoid "NFC", "tag" in user-facing text** (`writing.md`). |
| Approachable terminology | **Name the physical thing ("toy", "sign", "product"), not the technology**; **keep "NFC" only in developer docs or an "About" note.** |
| Sheet text: complete sentence, sentence case, ending punctuation, short | **One sentence, e.g. "Hold your phone near the toy to connect it."**; **second scan "Now hold your phone near another toy."**; **no truncation (wrap; ≤ 2 lines, CONV).** |
| Background tag reading | **No web equivalent** (**browsers don't scan in the background**); **use an installed native app or an OS-level tag/QR handler that opens a URL**; **NFC tags carrying an `https://` URL open the site directly** (**tag URL, universal link**). |
| Support both background and in-app | **Always offer an in-page way to scan (QR or manual code)** **when NFC isn't supported**; **feature-detect** (`"NDEFReader" in window`) **and hide the NFC button, offering QR/code entry instead.** |
| Scan state and result | **Status messages: "Looking for the toy…" → "Connected" / "Couldn't read it. Hold your phone closer and try again."**; **`aria-live="polite"`**; **specific, calm error copy** (`feedback.md`, `field-notes/principles.md` §16). |
| Privacy and safety | **Ask for permission on the user's action, state what will be read**; **treat tag data as untrusted input (validate/sanitise)**; **don't write to tags without a clear confirmation** (`privacy.md`). |
| Accessibility | **A visible text instruction plus the button as the only way to start**; **not gesture- or hardware-only**; **an alternative for people who can't position a phone** (`accessibility.md`). |
| Native-only | **Core NFC, the system scanning sheet, background tag notifications** are native; **Web NFC/QR/manual entry are the web routes.** |

Field-note cross-links:
- `field-notes/*`: **no NFC recipe**; nothing conflicts. **`field-notes/principles.md` §16** (calm, factual copy) **fits** the scan instructions and error messages.
- `hig/components/presentation/sheets.md` (✓) and `hig/patterns/modality.md` (✓): **the scanning sheet**; `hig/foundations/writing.md` (✓): **sentence case, plain terms**; `hig/patterns/feedback.md` (✓ CRITICAL): **scan status and errors**; `hig/patterns/loading.md` (✓): **"looking for" state**; `hig/foundations/privacy.md` (✓): **permission and data handling**; `hig/foundations/accessibility.md` (✓): **alternatives to positioning a device**; `hig/technologies/app-clips.md` (✓): **NFC tags and App Clip Codes as launch routes**; `hig/technologies/apple-pay.md` (✓) and `id-verifier.md` (✓): **NFC-based payment and ID contexts that suspend background reading**; `hig/technologies/carekit.md` (✓)/`homekit.md` (✓): **device pairing scenarios** (**check each page for its own setup flow**).
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **Instructions say "scan" and "hold near"**; **never "tap" or "touch" an object.**
- [ ] **User-facing text uses the object's name, not "NFC" or "tag".**
- [ ] **The scanning sheet has one short, complete sentence in sentence case with ending punctuation, and subsequent scans reword it ("Now hold ... near another ...").**
- [ ] **Scanning starts from an explicit action, can be cancelled, and reports success and failure clearly.**
- [ ] **An in-app way to scan always exists**; **the web fallback is QR or a manual code where NFC isn't supported.**
- [ ] **Tag data is treated as untrusted and privacy-scoped.**

## Related
- Ingested: Sheets (✓), Modality (✓), Writing (✓), Feedback (✓ CRITICAL), Loading (✓), Privacy (✓), Accessibility (✓), App Clips (✓), Apple Pay (✓), ID Verifier (✓), HomeKit (✓), CareKit (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: Core NFC.
