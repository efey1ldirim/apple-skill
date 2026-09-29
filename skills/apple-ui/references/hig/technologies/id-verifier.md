# ID Verifier
Source: https://developer.apple.com/design/human-interface-guidelines/id-verifier · Section: Technologies · Supported platforms: **iOS only** (page data; the platform text: "No additional considerations for iOS. **Not supported in iPadOS, macOS, tvOS, visionOS, or watchOS**"; needs **iOS 17 or later**) · Ingested: 2026-09-29 · Apple last updated: **September 12, 2023** (the only Change log row: new page; same date in the page's data). **Link-only ingestion: one DocC fetch, read in full (44 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts only. Not marked critical: no token file, checker or gate. Numbers on the page: **iOS 17**, **ISO 18013-5**, **2 request types** (Display Only, Data Transfer), **2 button labels** (Verify Age, Verify Identity), **2 feedback labels** (Matches Person, Doesn't Match Person).

## In one line
**ID Verifier** lets an **iPhone app read ISO 18013-5 mobile IDs in person with no external hardware** (e.g. venue staff verify ages). **Customers share only the minimum data needed, without handing over an ID or their device, and Apple provides the certificate issuance, management and validation** for a consistent, trusted experience. Two request types: **Display Only** (data appears in **system UI** on the requester's iPhone and **isn't sent to your app**) and **Data Transfer** (**only for a legal verification requirement**, needs an **extra entitlement**). **Ask only for what you need (an age threshold, not a birth date), register with Apple Business Register so people see your organisation's name and logo, provide a "Verify Age" or "Verify Identity" button (no NFC or QR symbol, never the Apple logo), and in Display Only requests let the verifier record "Matches Person" / "Doesn't Match Person".** On the web: **the Digital Credentials API (`navigator.credentials.get({ digital })`) for verifying credentials; the same minimum-data, labelling and disclosure principles apply.**

## Rules

### Framing (intro)
- **From iOS 17**, an app can integrate **ID Verifier so iPhone reads ISO 18013-5-compliant mobile IDs**, supporting **in-person ID verification** (e.g. **staff at a concert venue verify customers' ages with your app on iPhone**).
- **Advantages:**
  - **Customers present only the minimum data needed to prove age or identity, without handing over the ID card or showing their device.**
  - **Apple provides the key components of certificate issuance, management and validation**, **simplifying development** and **giving a consistent, trusted verification experience**.
- **Two request types** (choose by need):
  - **Display Only request:** **displays data (a name, or an age beside a photo portrait) in system-provided UI on the requester's iPhone** so the requester **visually confirms identity**. **The customer's data stays within the system UI and isn't sent to your app** (developer: `MobileDriversLicenseDisplayRequest`).
  - **Data Transfer request:** **only when you have a legal verification requirement and must store or process data such as an address or date of birth.** **It needs an additional entitlement** (developer: "Get started with ID Verifier", `MobileDriversLicenseDataRequest`, `MobileDriversLicenseRawDataRequest`).

### Best practices
- **must** **Ask only for the data you need.** **Asking for more than needed loses trust.** E.g. **to confirm a minimum age, use a request with an age threshold; don't request the current age or birth date** (developer: `ageAtLeast(_:)`).
- **should** **If the app qualifies for Apple Business Register, register for ID Verifier** so people **can see essential information about your organisation** during a request: **your official organisation name and logo appear on customers' devices as part of the ID verification UI.**
- **should** **Provide a button that starts verification.** **Label: "Verify Age"** (simple age check) **or "Verify Identity"** (more detailed identity data request). **Avoid a symbol that names a communication type such as NFC or QR codes.** **Never include the Apple logo in a button label.**
| Button | Use for |
|---|---|
| Verify Age | **checking whether people are old enough to attend an event or enter a venue** (e.g. a concert hall) |
| Verify Identity | **verifying that identity information matches expected values** (e.g. **name and birth date when picking up a rental car**) |
- **should** **In a Display Only request, help the verifier give feedback on the visual confirmation.** E.g. **when the reader shows the customer's portrait, offer buttons "Matches Person" and "Doesn't Match Person"** so the app **receives an approved or rejected value in the response.**

### Platform considerations
- **iOS:** no additional considerations. **iPadOS, macOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
| Item | Value |
|---|---|
| Availability | **iOS 17 and later**; iPhone (no external hardware) |
| Standard | **ISO/IEC 18013-5** mobile IDs |
| Request types | **Display Only** (system UI, no data to your app) · **Data Transfer** (legal need, extra entitlement) |
| Minimum data | ask for a **threshold** (`ageAtLeast`), not birth date or current age |
| Organisation identity | **Apple Business Register**: official name and logo shown to the customer |
| Button labels | **Verify Age** · **Verify Identity**; no NFC/QR symbol; no Apple logo |
| Visual-confirmation feedback | **Matches Person** · **Doesn't Match Person** |
| Developer docs | ProximityReader **"Adopting the Verifier API in your iPhone app"** · `MobileDriversLicenseDisplayRequest` · `MobileDriversLicenseDataRequest` · `MobileDriversLicenseRawDataRequest` · `ageAtLeast(_:)` |
| Video (link only, not watched) | What's new in Wallet and Apple Pay (WWDC23 10114) |
| Apple's Related list | Apple Business Register · IDs in Wallet · Identity verification (Wallet page) |
| Change log | Sep 12 2023: new page |

## Visual notes (link-only: from alt texts)
- **Hero:** a sketch of **progressively larger curved lines emerging from the bottom corner of an ID card**, suggesting ID Verifier, over grid lines, **tinted blue** (alt).
- **Button illustrations (two images in a table, light and dark variants):** a **"Verify Age" button** and a **"Verify Identity" button**; **no other detail beyond the alt**.
- **Mismatches / notes:**
  1. **The page says Data Transfer needs an extra entitlement**, but **only "Display Only" is described from a UI point of view**; **the Data Transfer UI is system-owned and not shown**.
  2. **The rule "avoid a symbol that specifies NFC or QR" appears in the button guidance only**; **the page doesn't say what symbols are acceptable** (**the button illustrations have text only**).
  3. **"Apple Business Register" is a qualification-based programme**; **the page doesn't say what happens when an app doesn't qualify** (the system shows less organisation information).
  4. **The page doesn't cover the customer side** (**presenting a mobile ID is in Wallet's guidance**, see Related **Identity verification**).
  5. **"Matches Person" / "Doesn't Match Person" are examples**, **not required strings**.
  6. **The page is about in-person verification only**; **remote/online identity verification isn't covered.**
- **Catalog:** the script found **0 comparisons** (the two button images are table cells; the hero is a single image). Catalog stays **261**, existing IDs unchanged (headings diffed).

## Visual examples (catalog)
No catalog entries (no comparison images). The script reports **0 comparisons** for this page.

## Web translation
**ID Verifier itself is native (iPhone reader for in-person checks).** **The web has the Digital Credentials API** (`navigator.credentials.get({ digital: { requests: [...] } })`, **ISO 18013-7-style presentation of mobile IDs in browsers**; **browser and OS support varies, so verify per browser**) for **online verification**, and **in-person web kiosks** usually rely on native readers. **The design and privacy principles apply to any identity or age check.** Legal points are background knowledge, not from the page; **check age-verification, data-protection and retention laws with a specialist**.

| HIG rule | Web implementation |
|---|---|
| Customers share only the minimum data | **Request only attribute proofs** (**`age_over_18`, `age_over_21`** or similar), **not full date of birth, address or document number**; **selective disclosure**; **never ask for a photo of the ID when a credential proof suffices**. |
| Ask only for the data you need; age threshold | **Configure the request per purpose** (**age gate → threshold only**; **rental pickup → name + date of birth match**); **state the purpose next to the button** ("We only check that you're 21 or older."). |
| Display Only vs Data Transfer | **Prefer verification results (boolean/threshold) over raw data**; **don't store returned attributes unless legally required**; **if you must store, say what, why, how long** and **protect it (encryption, retention limit, access control)** (`privacy.md`). |
| Register your organisation (name and logo shown to customers) | **Verifier identity must be clear**: **a verified organisation name/logo in the consent UI** (**wallet/browser shows the requesting origin**), **your site's legal name in the page** before the request; **don't imitate another organisation's branding**. |
| Verify button labels; no NFC/QR symbol; no Apple logo | **Button text "Verify Age" / "Verify Identity"** (Title Case per the skill's table), **no protocol icon (NFC/QR)**, **no wallet-brand logos on the button** (**Lucide `shield-check`/`badge-check` icon optional**); **feature-detect** (`"DigitalCredential" in window`) **and hide the button otherwise**, offering **another verification route**. |
| Visual confirmation feedback (Matches / Doesn't Match) | **In staff-facing web tools (kiosk, door app)** show **the credential's portrait/name in a protected view** with **two large buttons, "Matches Person" / "Doesn't Match Person"**; **record only the decision (approved/rejected), not the image**; **≥ 44 px targets**. |
| Alternatives | **Never make a mobile ID the only way**: **offer a manual check by staff, another ID method, or an alternative service** (accessibility, no compatible device). |
| Transparency to the customer | **Explain before the request**: **what will be checked, by whom, what is stored**; **no dark patterns**; **allow cancel without penalty**. |
| Native-only | **ProximityReader `MobileDriversLicense*Request` APIs, Apple Business Register, the system ID verification UI, NFC/QR transports** are native/Apple services; **the web uses the Digital Credentials API, or a verification provider's SDK**. |

Field-note cross-links:
- `field-notes/*`: **no identity-verification recipe**; nothing conflicts.
- `hig/technologies/apple-pay.md` (✓): **Wallet payment neighbour (Apple's Related "Wallet page")**; `hig/foundations/privacy.md` (✓): **minimum data, purpose statements, retention**; `hig/patterns/entering-data.md` (✓): **ask only for what you need**; `hig/patterns/managing-accounts.md` (✓): **identity and sign-in**; `hig/foundations/writing.md` (✓): **button labels in Title Case, verb-led**; `hig/technologies/healthkit.md` (✓) and `carekit.md` (✓): **sensitive-data handling and consent**; `hig/technologies/app-clips.md` (✓): **on-the-go flows with minimal data**; `hig/foundations/accessibility.md` (✓): **non-digital alternatives**.
- Ingested since: Wallet (✓ `technologies/wallet.md`, Identity verification section). Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **Requests use attribute proofs or thresholds** (e.g. **age over 21**) and **never more data than the check needs.**
- [ ] **The purpose is stated next to the button**; **the requester's organisation is clearly identified.**
- [ ] **Buttons say "Verify Age" or "Verify Identity"**; **no NFC/QR icon, no wallet-brand logo**; **hidden when unsupported, with another route offered.**
- [ ] **Raw credential data is not stored unless legally required**; **any storage has a stated purpose, retention limit and protection.**
- [ ] **Staff-facing views show the portrait in a protected view with "Matches Person" / "Doesn't Match Person" buttons and record only the decision.**
- [ ] **A non-digital alternative exists.**

## Related
- Ingested: Apple Pay (✓), Privacy (✓), Entering data (✓), Managing accounts (✓), Writing (✓), HealthKit (✓), CareKit (✓), App Clips (✓), Accessibility (✓).
- Ingested since: Wallet (✓ `technologies/wallet.md`, Identity verification section). Not yet ingested (linked from this page): none in the HIG.
- Developer docs: ProximityReader "Adopting the Verifier API in your iPhone app". External: Apple Business Register, IDs in Wallet, Get started with ID Verifier.
- Videos: What's new in Wallet and Apple Pay (WWDC23 10114).
