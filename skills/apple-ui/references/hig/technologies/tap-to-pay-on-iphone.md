# Tap to Pay on iPhone
Source: https://developer.apple.com/design/human-interface-guidelines/tap-to-pay-on-iphone · Section: Technologies · Supported platforms: **iOS only** (page data; the platform text: "No additional considerations for iOS. **Not supported in iPadOS, macOS, tvOS, visionOS, or watchOS**") · Ingested: 2026-09-29 · Apple last updated: **January 17, 2025 per the page's data ("Updated merchant education guidance")**; the visible Change log lists the same text under **January 17, 2024** (see Visual notes for the mismatch); other rows: May 7 2024 enabling and merchant education guidance, Mar 3 2023 enhanced merchant education, Sep 14 2022 refined preparation guidance. **Link-only ingestion: one DocC fetch, read in full (139 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **2 button labels** ("Tap to Pay on iPhone", "Tap to Pay"), **2 SF Symbols names** for icons, **3 fallback options** for failed taps, **4 tutorial delivery routes**, **3 tutorial must-shows**, **4 example generic labels** (Look Up, Store Card, Verify, Refund).

## In one line
**Tap to Pay on iPhone lets merchants accept contactless payments (cards and digital wallets) with an iPhone app, with no external hardware; you need a supported PSP, the entitlement and ProximityReader (via the PSP's SDK or directly).** **Enable it by getting terms and conditions accepted (administrators only, before device configuration, in onboarding or in-app messaging; update iOS first if required), educate merchants (a tutorial: Learn More, after acceptance, for new users, and in help/settings; use Apple-approved assets or the ProximityReaderDiscovery API), and make checkout smooth: always show a Tap to Pay button (whether or not enabled), prepare the feature at launch and each time the app returns to the foreground, let merchants select it while configuration runs with a progress indicator (determinate if the API reports progress, else indeterminate), keep the button findable, make switching to hardware readers easy, label it "Tap to Pay on iPhone" ("Tap to Pay" if space is tight) with the wave symbols if you use an icon and never the Apple logo, settle the final amount before opening the Tap to Pay screen, and show pre-payment options first.** **Results: start processing as early as possible, show "Authorizing" progress after the tap animation, clearly show approved or declined (plus receipt options such as QR code or text), offer alternatives when a tap fails (cash, hardware, payment link, retry), handle SCA and offline-PIN markets with the PSP, explain fixable errors and offer help.** **Non-payment card reads (look up, store, verify, refund) use generic labels, never "Tap to Pay"; loyalty cards get a separate, clearly labelled button.** On the web: **no equivalent of the iPhone reader; the merchant checkout patterns (terms acceptance, tutorial, progress, results, fallbacks, labelling) carry over to any point-of-sale web app using a PSP's hosted terminal or Web NFC/Payment Request where supported.**

## Rules

### Framing (intro)
- **Tap to Pay on iPhone lets merchants accept contactless payments with an app on their iPhone, without connecting external hardware.** **Supporting it in your iOS payment app helps merchants present a consistent, trusted payment experience.** **It works alongside existing payment-acceptance hardware and accessories.**
- **Prerequisites:** **work with a supported payment service provider (PSP)**, **request the Tap to Pay on iPhone entitlement**, **use ProximityReader APIs (through the PSP's SDK or by adopting the framework directly).** (Apple's Tap to Pay page has marketing recommendations; developer guidance: "Setting up Tap to Pay on iPhone".)
- **Note:** **if your PSP's SDK supplies UI (such as a tap result), follow the PSP's documentation.**

### Enabling Tap to Pay on iPhone
- **Before enabling the feature and configuring a merchant's device, the merchant must accept the terms and conditions.** **Use the ProximityReader API to get the current status and show an acceptance flow only when necessary.**
- **should** **Help merchants accept terms and conditions before they begin interacting with customers**: **acceptance must precede the initial device configuration**, **so let them do it before a checkout or other customer-facing flow** (e.g. **buttons in in-app messaging or onboarding**). (Illustrations: **a screen that describes the feature with an "Enable Tap to Pay on iPhone" button**; **a screen showing the feature is enabled with a "Try a test transaction" button**.)
- **must** **Present the terms only to an administrative user**: **if a non-administrator tries to activate, explain that administrator access is required**; **for enterprise or nonadministrative primary users, an administrator can accept through a web interface or a different app (including one that runs on other devices)** (ask your PSP).
- **should** **Help merchants update their device if your PSP requires specific iOS versions**: **present the terms only after they update.**

### Educating merchants
**Some merchants are unfamiliar with the feature: give a quick, easy way to get started.**
- **should** **Provide a tutorial describing supported payment types and how to accept each.** Offer it by:
  - **a Learn More option in in-app messaging;**
  - **automatically after merchants accept the terms;**
  - **automatically for new users of the app;**
  - **a consistent, easy-to-find place such as help content or Settings.**
- **Build it from Apple-approved assets (Tap to Pay on iPhone marketing guidelines) or use the `ProximityReaderDiscovery` API for a pre-built, localised, up-to-date merchant education experience.** (Illustrations: **a Settings "Tutorials" screen with a link to the merchant education experience**; **the ProximityReaderDiscovery tutorial sheet with an image of the tap behaviour and instructions for a first payment**.)
- **If you design your own tutorial, show how to:** **launch checkout for each payment type**; **help a customer position a contactless card or digital wallet on the merchant's device**; **handle PIN entry for a card, including accessibility mode.**
- **should** **At the end, let merchants who haven't accepted the terms do so.**

### Checking out
**Checkout is time-sensitive and must work smoothly.** **Be prepared to** offer other payment options, **respond quickly if checkout starts before enabling**, **let checkout proceed while configuration is in progress**, and **present pre-payment actions that change the total before completion.**
- **should** **Offer Tap to Pay on iPhone as a checkout option whether or not it's enabled**: **the button lets merchants use it without leaving checkout**; **when tapped, show the terms if necessary and automatically display the Tap to Pay screen when configuration completes.**
- **should** **Avoid making merchants wait**: **configure once per device and again each time the app comes to the foreground**; **prepare the feature at app start and right after every foreground transition** (`prepare(using:)`).
- **must** **Keep the option available while configuration continues in the background**: **let merchants select it, then show a progress indicator**; **in most cases indeterminate; determinate when the API reports ongoing configuration** (`PaymentCardReader.Event.updateProgress(_:)`; `progress-indicators.md`). (Illustrations: **an app screen with a determinate/indeterminate progress indicator and "Preparing Tap to Pay on iPhone" above a purchase total**.)
- **should** **With multiple acceptance methods, make the Tap to Pay button easy to find**: **no scrolling to reach it**; **if it's the only method, open Tap to Pay automatically when checkout begins.**
- **should** **Make it easy to switch between Tap to Pay and supported hardware accessories** (Bluetooth chip-and-PIN readers): **set up both together if you can**; **let merchants choose the method during checkout, not in Settings.**
- **must** **Label the activating button "Tap to Pay on iPhone" or, if space is tight, "Tap to Pay"**; **exception: if it's your only method, reuse your existing Charge or Checkout button.** **If you use icons on several method buttons, use `wave.3.right.circle` or `wave.3.right.circle.fill` (SF Symbols) on the Tap to Pay button.** **Never include the Apple logo in Tap to Pay buttons.** (Illustrations: **✓ a wave symbol followed by "Tap to Pay on iPhone"**; **✗ the Apple logo followed by "Tap to Pay on iPhone"**.)
- **Important:** **use the label only for payment actions**; **non-payment labels are in "Additional interactions".**
- **may** **Style the button (colour and shape) to match your other buttons**, **but keep the required label.**
- **should** **Settle the final amount before opening the Tap to Pay screen**: **tips or other customer interactions that change the total come first**; **aim to show the final amount on the Tap to Pay screen.**
- **should** **Show pre-payment options before the Tap to Pay screen** (e.g. **payment-type selection on the checkout screen after the merchant taps the button**).

### Displaying results
**Customers pay by tapping a contactless card or digital wallet near the Tap to Pay screen.** **After a successful tap (and PIN entry if required), the screen shows a checkmark and gives your app an object with encrypted payment information to send to the PSP.** **After a failed tap it shows an error screen.** **Your app shows transaction results after a success or offers alternatives after a failure.**
- **should** **Start processing as soon as possible**: **you can request the result before the checkmark animation finishes** (`returnReadResultImmediately`).
- **should** **Show a progress indicator while payment authorises, before the result screen**: **authorisation can take seconds** (connectivity of the PSP and the device); **show your indicator after the Tap to Pay animation ends** (`PaymentCardReader.Event.readyForTap`). (Illustration: **an indeterminate indicator and "Authorizing" above a purchase total**.)
- **must** **Clearly display the result, declined or successful**: **declines can come from insufficient funds, suspected fraud or a wrong PIN**; **give merchants ways to offer a digital receipt (QR code, text message).** (Illustrations: **a green check in a green circle above the total with "Select receipt option" and three buttons**; **a red X in a red circle, same layout**.)
- **should** **Help complete checkout when a tap can't complete** (**card unreadable, unsupported network, amount not allowed, online PIN not allowed**):
  - **a new or reused checkout screen to accept another form of payment, like cash;**
  - **a different method (external hardware, a payment link);**
  - **relaunch Tap to Pay if the customer has another card.**
  - (Illustration: **a red X, "Payment not completed", the total, "Select payment option" and four buttons including Tap to Pay on iPhone**.)
- **Scenarios to raise with your PSP:** **Strong Customer Authentication (SCA) regions: the issuer may request a PIN after processing even if the tap didn't need one, so your app may need to show the PIN entry screen instead of the result**; **markets with Offline PIN limitations may need extra requirements; some PSPs support PIN fallback (partial data from the tap, then continue via a payment link).**
- **should** **If the system returns an error the merchant must fix, describe the problem clearly and recommend a resolution** (**e.g. an alert recommending an iOS update**) (`PaymentCardReaderSession.ReadError`; `alerts.md`).
- **should** **Make it easy to get help**: **help content in the app or on your site, plus an action to contact support.**

### Additional interactions
**Tap to Pay can read a payment card when there's no transaction amount** (look up a past transaction, retain card information for future payment, issue refunds, verify customer information).
- **must** **Use a generic label on a button that opens the Tap to Pay screen when there's no amount**: **not "Tap to Pay on iPhone" or "Tap to Pay"**; **use "Look Up", "Store Card", "Verify" or "Refund".**
- **Other NFC cards or passes in Apple Wallet** (**loyalty, discount, points cards**) **can be read together with a payment card or independently.**
- **should** **If you support an independent loyalty card transaction, separate it from payment acceptance**: **a separate, clearly labelled button**; **no "Tap to Pay on iPhone", "Tap to Pay" or payment terms in the label** (so merchants don't pick the wrong one). (Illustrations: **✓ "Loyalty Card"**; **✗ "Tap to Pay on iPhone - Loyalty"**.)

### Platform considerations
- **iOS:** no additional considerations. **iPadOS, macOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
| Item | Value |
|---|---|
| Prerequisites | supported PSP · Tap to Pay on iPhone entitlement · ProximityReader (PSP SDK or direct) |
| Terms and conditions | accepted by an **administrator**, before initial device configuration; only when needed; after any required iOS update |
| Tutorial routes | Learn More · after acceptance · for new users · help or settings |
| Tutorial content | launch checkout per payment type · positioning card or wallet · PIN entry incl. accessibility mode · final chance to accept terms |
| Education source | Apple-approved marketing assets or `ProximityReaderDiscovery` (pre-built, localised) |
| Configuration | initial per device + each time the app becomes frontmost; prepare at start and after each foreground transition |
| Progress | indeterminate by default; determinate if the API reports progress; text "Preparing Tap to Pay on iPhone" |
| Button label | **"Tap to Pay on iPhone"** or **"Tap to Pay"** (tight space) · reuse Charge/Checkout only if the sole method |
| Icon | SF Symbols `wave.3.right.circle` / `wave.3.right.circle.fill`; never the Apple logo |
| Amount order | tips and other total-changing steps before the Tap to Pay screen |
| Result flow | tap → (optional immediate read result) → "Authorizing" progress → success or decline screen with receipt options (QR, text) |
| Failure options | cash / other method · external hardware or payment link · retry with another card |
| Non-payment reads | generic labels: **Look Up · Store Card · Verify · Refund**; loyalty: separate "Loyalty Card" button |
| Developer docs | ProximityReader: Adding support for Tap to Pay on iPhone to your app · `ProximityReaderDiscovery` · `PaymentCardReader` events · `PaymentCardReaderSession.ReadError` |
| Apple's Related list | Tap to Pay on iPhone Marketing guidelines |
| Change log | Jan 17 (2024 in text; 2025 in page data) updated merchant education; May 7 2024 enabling and education; Mar 3 2023 enhanced education; Sep 14 2022 refined preparation and learning |

## Visual notes (link-only: from alt texts, captions and the catalog list)
- **Hero:** a sketch of **progressively larger curved lines extending right within a circle**, suggesting Tap to Pay on iPhone, over grid lines, **tinted blue** (alt).
- **Enabling pair (catalog `tap-to-pay-on-iphone-01`, light and dark):** **an intro screen with "Enable Tap to Pay on iPhone"** and **a confirmation screen with "Try a test transaction".**
- **Education pair (`-02`, light and dark):** **the app's Settings "Tutorials" screen with a link**, and **the ProximityReaderDiscovery tutorial sheet.**
- **Progress pair (`-03`, light and dark):** **determinate vs indeterminate progress above "Preparing Tap to Pay on iPhone" and the total.**
- **Button do/don't (`-04`, light and dark):** **✓ wave symbol + "Tap to Pay on iPhone" / ✗ Apple logo + the same text.**
- **Results pair (`-05`, light and dark):** **success (green check) vs decline (red X), each with "Select receipt option" and three buttons.**
- **Loyalty do/don't (`-06`, light and dark):** **✓ "Loyalty Card" / ✗ "Tap to Pay on iPhone - Loyalty".**
- **Not catalogued:** **the "Authorizing" screen, the "Payment not completed" screen with four payment options, and the hero.**
- **Mismatches / notes:**
  1. **Date mismatch:** **the Change log's first row reads "January 17, 2024" but the page's own metadata says 2025-01-17 (and it lists May 7, 2024 below it)**; **the page order suggests 2025 is right**, **treat the latest update as January 17, 2025.**
  2. **The SF Symbols wave icons are named on the page**; **this skill doesn't use SF Symbols artwork on the web**, **so a Lucide/Phosphor icon (`nfc`, `radio`, `wifi`-like waves) stands in and the exact symbol isn't reproduced.**
  3. **"Tap to Pay on iPhone" is a required label for payment buttons**, **but the page permits reusing Charge or Checkout when it's the sole method**; **both are allowed.**
  4. **The page says "Customers pay by tapping" while the earlier NFC page says to avoid "tap" for objects**; **NFC's rule concerns scan instructions for objects, whereas this is the named product and payment action.**
  5. **"Avoid making merchants wait" gives no timing** (e.g. no seconds for configuration).
  6. **SCA and Offline PIN scenarios are only listed**, **with details deferred to the PSP.**
  7. **The page is merchant-facing**: **customer-side receipt and consent aren't covered beyond receipt options.**
- **Catalog:** the script found **6 comparisons** (enabling pair, education pair, progress pair, button do/don't, result pair, loyalty do/don't). Catalog total **282** (was 276); the 276 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **tap-to-pay-on-iphone-01** (neutral pair: enable screen vs enabled-with-test-transaction screen), **-02** (neutral pair: Settings Tutorials link vs the ProximityReaderDiscovery tutorial), **-03** (neutral pair: determinate vs indeterminate configuration progress), **-04** (do/don't: wave symbol vs Apple logo in the button), **-05** (neutral pair: success vs decline result screen) and **-06** (do/don't: "Loyalty Card" vs "Tap to Pay on iPhone - Loyalty"). The script reports **6 comparisons** for this page.

## Web translation
**Tap to Pay on iPhone is native (iOS app, entitlement, PSP, ProximityReader).** **A web point-of-sale can't read cards with an iPhone**; **it can use a PSP's hosted terminal, a Bluetooth reader through a native wrapper, or a payment link/QR.** **The merchant-flow design principles carry over.** Statements about payment technology are background knowledge, not from the page; **check the PSP's documentation and card-scheme rules for any real implementation.**

| HIG rule | Web implementation |
|---|---|
| Terms and conditions before configuration; administrators only | **A merchant onboarding step before any customer-facing checkout**; **"Enable card-present payments" button; role check: a non-admin sees "Ask an administrator to enable this"**; **admin acceptance via the web console** (`onboarding.md`, `managing-accounts.md`). |
| Update requirements first | **Detect unsupported browser/OS/device and explain the update before showing the terms.** |
| Merchant education | **A "How it works" tutorial (Learn More link, first-run, and a permanent Help/Settings entry)** covering **each payment type, positioning the card/device, PIN entry incl. an accessible mode, and final "Accept terms"** (`offering-help.md`, `sheets.md`). |
| Always offer the option; prepare early | **Show the card-present button whether or not it's enabled**; **initialise the reader/SDK at page load and on `visibilitychange` back to visible**; **the button never disappears while configuring** (`loading.md`). |
| Configuration progress | **`<progress>` (determinate when the SDK reports it) or a spinner, "Preparing…" text, `aria-live="polite"`** (`progress-indicators.md`). |
| Button label and icon | **"Tap to Pay on iPhone" only where it is actually that Apple feature; otherwise a neutral "Card reader" / "Tap card" label**; **no Apple logo**; **a Lucide `nfc`/`radio` icon, not SF Symbols artwork**; **match the site's button styles** (`buttons.md`). |
| Switch methods easily | **Payment-method buttons in the checkout, not in Settings; remember the last method** (`pickers.md`, `segmented-controls.md`). |
| Final amount first | **Tips, discounts and taxes computed before opening the card screen; the card screen shows the final total prominently.** |
| Start processing early; authorising progress | **Send the read result to the PSP as soon as it arrives**; **"Authorizing…" indeterminate indicator after the tap animation**; **disable duplicate submits (idempotency key)**. |
| Clear success/decline; receipts | **A full-screen result with icon, text and total (not colour alone)**; **receipt options: email, SMS, QR (`navigator.share` where useful), print** (`feedback.md`, `printing.md`, `collaboration-and-sharing.md`). |
| Failed-tap alternatives | **After a failure: "Try another card", "Use a card reader", "Send a payment link", "Cash"**; **keep the order and total intact.** |
| SCA / offline PIN | **Follow the PSP's SCA flows** (**PIN entry screen when requested after processing**); **don't invent your own.** |
| Actionable errors and help | **Specific messages ("This device needs an update to accept taps.")** with **a next step and a support action** (`alerts.md`, `field-notes/principles.md` §16). |
| Generic labels for non-payment reads | **"Look up", "Store card", "Verify", "Refund"; never the payment label**; **separate "Loyalty card" button** (`buttons.md`). |
| Native-only | **ProximityReader (`PaymentCardReader`, `ProximityReaderDiscovery`), the entitlement, the system Tap to Pay screen and Apple Wallet pass reads** are native; **the web uses a PSP's SDK or hosted flow.** |

Field-note cross-links:
- `field-notes/*`: **no point-of-sale recipe**; nothing conflicts. **`field-notes/principles.md` §16** (calm, factual copy) **fits** decline and error messages.
- `hig/technologies/apple-pay.md` (✓): **customer-side contactless payments and the Apple Pay button/label rules**; `hig/technologies/nfc.md` (✓): **"hold near" wording for scanning objects vs this page's named payment action**; `hig/technologies/id-verifier.md` (✓): **merchant-side reader experiences and the minimum-data principle**; `hig/technologies/apple-in-app-purchase.md` (✓): **payment terms and receipts (different context)**; `hig/components/status/progress-indicators.md` (✓): **determinate vs indeterminate**; `hig/components/presentation/alerts.md` (✓): **fixable errors**; `hig/patterns/feedback.md` (✓ CRITICAL) and `hig/patterns/loading.md` (✓): **states and progress**; `hig/components/menus/buttons.md` (✓ CRITICAL) with `tokens/apple-buttons.css`: **button labels and styling**; `hig/patterns/onboarding.md` (✓), `managing-accounts.md` (✓) and `offering-help.md` (✓): **terms, roles, tutorials, help**; `hig/foundations/sf-symbols.md` (✓): **the named symbols (not reproduced on the web)**; `hig/foundations/accessibility.md` (✓): **accessible PIN entry**; `hig/technologies/carplay.md` (✓)/`app-clips.md` (✓): **on-the-go payment and checkout contexts**.
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **Terms are accepted by an administrator before initial device configuration**, **in onboarding or in-app messaging, after any required update.**
- [ ] **A tutorial exists (Learn More, after acceptance, for new users, and in Help or Settings), covering each payment type, card/device positioning and accessible PIN entry.**
- [ ] **The Tap to Pay option is always in checkout**, **prepared at start and on return to foreground**, **selectable during configuration with a progress indicator.**
- [ ] **The button is labelled "Tap to Pay on iPhone" (or "Tap to Pay") without the Apple logo**, **or reuses Charge/Checkout when it's the only method**; **non-payment reads use generic labels; loyalty has its own button.**
- [ ] **The final amount (tips etc.) is settled before the Tap to Pay screen; pre-payment options come first.**
- [ ] **Processing starts as soon as possible; "Authorizing" progress shows; success and decline are unmistakable with receipt options.**
- [ ] **Failed taps offer alternatives (cash, hardware, payment link, retry); fixable errors are explained; help is one action away.**
- [ ] **SCA and Offline-PIN behaviour follows the PSP's guidance.**

## Related
- Ingested: Apple Pay (✓), NFC (✓), ID Verifier (✓), Apple In-App Purchase (✓), Progress indicators (✓), Alerts (✓), Feedback (✓ CRITICAL), Loading (✓), Buttons (✓ CRITICAL), Onboarding (✓), Managing accounts (✓), Offering help (✓), SF Symbols (✓), Accessibility (✓), CarPlay (✓), App Clips (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: ProximityReader "Adding support for Tap to Pay on iPhone to your app". External: Tap to Pay on iPhone Marketing guidelines.
