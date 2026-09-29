# Apple Pay
Source: https://developer.apple.com/design/human-interface-guidelines/apple-pay · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, visionOS, watchOS** (page data; the page text: "No additional considerations for iOS, iPadOS, macOS, visionOS, or watchOS. **Not supported in tvOS**"; the abstract adds **"in any browser"**) · Ingested: 2026-09-29 · Apple last updated: **June 8, 2026** (guidance refined for the latest Apple Pay appearance and capabilities; earlier rows: **December 16, 2025**, supported platforms clarified (web browsers and Apple Vision Pro); **June 10, 2024**, links to web developer guidance; **September 12, 2023**, artwork; **May 2, 2023**, one consolidated page). **Link-only ingestion: one DocC fetch, read in full (331 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **128 characters** (error text), **1/10 of the button height** (margins and mark clear space), **100 × 30 pt** and **140 × 30 pt** (minimum button sizes), **60 × 60 pt** website icon (**@2x 120 px, @3x 180 px**), **3 button styles** (black, white with outline, white), **17 button types**, **90° / default / capsule** corner radii, and example amounts ($50, $25, $100).

## In one line
**Apple Pay** pays for **physical goods, services (memberships, reservations, tickets), donations and subscriptions, in apps and in any browser**; **virtual goods use Apple In-App Purchase.** **Offer it wherever supported (and only there), make it the primary (not sole) option when a card is available, put it first and larger or set apart, add single-item buttons on product pages and express checkout for the cart, accept coupons on the payment sheet, gather everything else (options, gift notes, multiple destinations, pickup locations) before the sheet, prefer Apple Pay's data, don't require an account before buying, report results in the sheet, then show an order confirmation.** **In the sheet:** only essential fields, the active coupon, shipping methods with cost and dates, **short line items for extras (not an itemised product list)**, **"Pay [Business]" beside the total (name both merchants for marketplaces)**, disclose **amount pending** costs, **no extra spinners**. **Errors:** specific, field-level, ≤ 128 characters, noun phrase, sentence case, no final period, correct status codes; **cancel in-progress payments when the sheet is dismissed.** **Subscriptions:** explain terms first, line items for frequency, discounts and fees, trial terms with a $0 total, sheet only for cost increases. **Donations:** approved nonprofits, a "Donation" line item, predefined amounts plus Other. **Buttons:** **only via Apple's API** (correct captions, fonts, colours, localisation, corner radius, VoiceOver), **17 types**, **3 styles by background contrast**, **at least as large as other payment buttons, visible without scrolling, right of or above Add to Cart**, minimum **100 × 30 pt** (**140** for long-title types), margins **1/10 of the height**. **Mark** = "we accept it", **never a button**, unaltered but for height, clear space **1/10**. **Wording:** "Apple Pay" in two words, not translated, not plural or possessive, ® on first use in US body text. **Web:** **Apple Pay on the Web / Payment Request API, the `<apple-pay-button>` element, capability checks, merchant validation, privacy statement, acceptable-use rules.**

## Rules

### Framing (intro)
- Apple Pay is a **secure, easy way to pay for physical goods and services, donations and subscriptions in apps and in any browser**. Use it for **groceries, clothing, appliances; club memberships, hotel reservations, event tickets; and donations.** Apps and sites that accept it **show it as an available payment option and include an Apple Pay button in the purchase flow** that opens **a payment sheet**. (A screenshot shows a payment sheet for a **food-truck purchase** with a payment method and total.)
- **During checkout** the sheet can show **the card linked to Apple Pay, the purchase amount (including tax and fees), shipping options, contact information and other details**; people **adjust, then authorise with credentials stored securely on the device**.
- **Authorisation:** **Face ID, Touch ID or Optic ID**, or **double-click on Apple Watch**; **in browsers** also **a nearby iPhone or Apple Watch, or scanning a code with an iPhone or iPad**.
- **Note:** use **Apple In-App Purchase** for **virtual goods (premium content, subscriptions for digital content)** (→ Apple In-App Purchase). A hands-on web demo exists on Apple's developer site.

### Offering Apple Pay
- **should** **Offer Apple Pay on all devices and browsers that support it.** **If the device doesn't support it, don't present it as a payment option** (developer: `PKPaymentAuthorizationController`, web `applePayCapabilities`).
- **must** **Make Apple Pay the primary (not necessarily sole) payment option when credentials are available.** If you **use the Apple Pay APIs to find out whether someone has an active card in Wallet**, you **must** make it primary **everywhere you use the APIs**. **Don't separate it into another step or flow**; e.g. **pre-select it** beside other options (developer: "Offering Apple Pay in Your App"; web "Checking for Apple Pay availability").
- **must** **Use Apple Pay buttons only to start payment or, when appropriate, Apple Pay setup.** If the device has no Apple Pay set up, choosing the button **offers setup**. **No other use of the button.**
- **must** **If you use a custom button to start payment, it must not show "Apple Pay" or the logo.** Tell people you accept Apple Pay with the **Apple Pay mark or a text reference on the same page as your button**. (Illustration: ✓ the **Apple Pay logo above a custom button titled "Order Now"**; ✗ the **logo above a custom button titled "Apple Pay"**.)
- **must** **Use the Apple Pay mark only to say you accept Apple Pay.** It **doesn't facilitate payment**: **never use it as a button or position it like one**. If the mark shows the selected method, create **a separate custom button** matching your design to start payment.
- **must not** **Hide the Apple Pay button or make it look unavailable.** If it can't be used yet (**size or colour not chosen**), **point out the problem gracefully after the tap or click**.
- **should** **Tell search engines Apple Pay is accepted.** If the site uses **semantic markup for product details**, **list Apple Pay as a payment option**.
- **Important:** **every website that offers Apple Pay must include a privacy statement and follow Apple's "Acceptable use guidelines for Apple Pay on the web"**.

### Streamlining checkout
- **should** **Provide a cohesive checkout experience.** **Tightly integrated with your app or site, with your branding throughout**, and **don't open other pages or windows**: on a site, **new windows can make people think they were handed to another website**.
- **should** **If Apple Pay is available, assume people want it.** Consider **presenting the button first, larger than the other options, or separated by a line**.
- **should** **Speed up single-item purchases with buttons on product detail pages.** Besides the cart, offer **an Apple Pay button on product pages**; the purchase is **for that individual item only (excluding cart contents)**, and **if the cart contains the item, remove it from the cart after purchase**.
- **should** **Speed up multi-item purchases with express checkout**: **shows the payment sheet immediately** and lets people **buy the whole cart with one shipping method and destination**.
- **should** **Support coupons and promotional codes in the payment sheet.** Let people **enter them on the sheet rather than in a separate step**, especially in **express checkout** where people skip the standard checkout.
- **should** **Collect necessary information (colour, size) before the Apple Pay button.** If something is missing at checkout, **point it out gracefully, highlight or warn, and automatically navigate to the field**.
- **should** **Collect optional information before checkout begins** (gift messages, delivery instructions): **the sheet can't take optional data**; collect it **earlier or even after purchase**.
- **should** **Gather multiple shipping methods and destinations before the sheet** (it supports **one method and one destination per order**).
- **should** **For in-store pickup, let people choose the pickup location before the sheet**, then **show its address on the sheet** (developer: "Displaying a Read-Only Pickup Address").
- **should** **Prefer checkout information from Apple Pay.** **Assume it's complete and current**; even if you have contact, shipping and payment details, **consider fetching the latest during checkout** to reduce corrections.
- **should** **Avoid requiring an account before purchase.** **Ask on the order confirmation page**, **prepopulating registration fields from checkout data**. (Illustration: an **order confirmation screen with a create-account button, a Sign up with Apple button and existing-account login fields**.)
- **should** **Report transaction results in the payment sheet.** In failure cases (e.g. a **bad address**) **provide error messages** so people can fix the problem.
- **should** **Show an order confirmation or thank-you page** after the sheet shows the result: **thank people, say when the order ships, how to check its status**. **Listing Apple Pay there isn't necessary**; if you do, show it **after the last four digits** or **as a separate note**: **"1234 (Apple Pay)"** or **"Paid with Apple Pay"**.

#### Customizing the payment sheet
- **should** **Present and request only essential information.** Extra fields **confuse people or raise privacy concerns**: e.g. **an email but no shipping address for an electronically delivered gift card**, since **a shipping address suggests physical delivery**.
- **should** **Show the active coupon or promo code, or let people enter one.** If a code was entered before the sheet, **show it on the sheet** to reassure people; consider **entry on the sheet**, especially in express checkout.
- **should** **Let people choose the shipping method in the sheet.** **If space permits: a clear description, a cost and optionally an estimated delivery or pickup date or range** for each option; use **the shipping method's calendar and time-zone support** so dates are right wherever the person is (developer: `PKDateComponentsRange`).
- **may** **For in-store pickup, let people choose a pickup window** (a range of dates and times through the shipping method).
- **should** **Use line items to explain additional charges, discounts, pending costs, add-on donations, recurring payments and future payments.** A line item = **a label and a cost** (a recurring one may include a **frequency**). **Don't use line items for an itemised list of products** (developer: `paymentSummaryItems`). (Tabs **iOS / Web**: a sheet with **a gift-wrap charge and a coupon credit**.)
- **should** **Keep line items short:** **specific, understandable at a glance, on one line when possible.**
- **should** **Put a business name after "Pay" on the same line as the total** — **the name people will see on their bank or card statement** (e.g. **Pay [Business_Name]**).
- **must** **If you're not the end merchant, name both businesses** in the Pay line, e.g. **Pay [End_Merchant_Business_Name (via Your_Business_Name)]**, for **intermediaries such as marketplaces, App Clips or sites**.
- **must** **Clearly disclose costs that may occur after authorisation.** When the **total isn't known** (**a ride priced by distance or time**, **a tip after delivery**) and **local regulations allow**, **explain in the sheet with a subtotal marked "Amount Pending"**; when **pre-authorising a specific amount**, **the sheet must state it accurately**.
- **should** **Handle data-entry and payment errors gracefully** (→ *Data validation errors*).
- **should** **Defer to the sheet for progress information.** It already shows loading states; **extra spinners or progress indicators confuse people about the transaction state.**

### Displaying a website icon
- Many sites have an **icon shown with bookmarks, in URL fields and on the Home Screen**. Sites that support Apple Pay can also use it **during payment authorisation, notably during Handoff** (authorising on a connected device), for **visual reassurance**; **for subscription flows the icon can also appear in Wallet**.
- **should** **Provide the icon in these sizes:** **60 × 60 pt**: **120 × 120 px @2x** and **180 × 180 px @3x**. (A screenshot shows a payment sheet on iPhone with **the website icon above the payment details**.)

### Handling problems
- Give **clear, actionable guidance** when checkout or payment processing fails, so people can resolve it fast.

#### Data validation errors
- The app or site **can respond to input when the sheet appears, when people change certain fields, and after they authenticate** — **use these moments to check the data and give clear, consistent messages**. (Tabs: **an iOS sheet with a shipping-address error**; **web: the sheet error, and a custom detail-view overlay saying the postal code doesn't match the country, with options to choose a different address or edit it**.)
- **System error messages highlight the relevant fields** on the sheet; people **choose a field to see details**. **Provide customised messages for the detail view** that opens then (developer: `PKPaymentAuthorizationViewControllerDelegate`; web: Apple Pay on the Web).
- **Note:** **for privacy, before authorisation only the card type and a redacted shipping address are available.** **Show errors when authorisation fails**, but **also validate what you can and report problems before authorisation**.
- **should** **Avoid forcing compliance with your business logic.** Be **intelligent: ignore irrelevant data and infer missing data**: e.g. **if you need a five-digit zip code and someone enters Zip+4, ignore the extra digits**; **accept phone numbers in several formats** (with/without dashes, with/without a country code) **without an error**.
- **must** **Report problems accurately to the system.** Give **a custom message and the correct status code** so the system shows **the most relevant error** (developer: `PKPaymentError`; web "Apple Pay Status Codes").
- **should** **Explain the problem clearly and briefly:** **name the field and say exactly what is expected**: not "Address is invalid" but **"Zip code doesn't match city"**; for an unserviceable address **"Shipping not available for this state"**. **Noun phrases, sentence-style capitalisation, no ending punctuation, and 128 characters or fewer** to avoid truncation.

#### Payment processing problems
- **must** **Handle interruptions correctly.** A **cancellation or timeout** can dismiss the sheet; **you must cancel any in-progress payment**. **After dismissal, people restart by choosing the Apple Pay button again** (developer: `PKPaymentAuthorizationViewControllerDelegate`; web `oncancel`).

### Supporting subscriptions
- The app or site can **request authorisation for recurring payments**: **fixed** (a monthly movie-ticket subscription) or, **when local regulations allow, variable** (a weekly grocery order). The **initial authorisation can include discounts and extra fees**. (Tab screenshots: **fixed subscription with a monthly amount (iOS and Web)**; **variable subscription with "Amount Pending" (iOS)**.)
- **should** **Clarify subscription details before showing the sheet:** people must **fully understand the billing frequency and other terms**; you can **show the frequency on the sheet**.
- **should** **Include line items that repeat billing frequency, discounts and extra upfront fees.** **If no payment is due at authorisation, clearly say when billing will occur.** (Screenshots: **a fixed subscription with no payment until after a three-month trial: the total shows a zero-dollar amount**.)
- **should** **Communicate trial terms** with line items: **the trial amount (including $0 if free)**, **the regular amount after the trial**, and **the date regular billing begins**.
- **should** **Make the total line show the amount billed now.**
- **should** **Show the sheet for a subscription change only when it results in extra fees**: **no authorisation if the cost drops or stays the same**.
- **Important:** **treat the billing-agreement field as a plain-language summary, not a substitute for formal terms**; **concise, don't duplicate** what's elsewhere; **when in doubt, leave it blank**.

### Supporting donations
- **Approved nonprofits** can accept donations with Apple Pay.
- **should** **Use a line item to identify a donation** (e.g. **"Donation $50.00"**).
- **should** **Offer predefined amounts** (e.g. **$25, $50, $100**) **plus an "Other Amount" option**.

### Using Apple Pay buttons
- Apple Pay buttons **come in several types and styles**; **use the Apple-provided APIs**. Benefits: **Apple-approved captions, fonts, colours and styles; content that scales proportionally at any size; automatic localisation to the device language; corner-radius customisation; built-in VoiceOver with automatic alternative text.**
- **must** **Always use the Apple-provided API to show Apple Pay buttons.** **API buttons always have the correct look and are localised**; **don't create custom Apple Pay button designs or replicate Apple's** (developer: `PKPaymentButtonType`, `PKPaymentButtonStyle` (iOS, macOS), `WKInterfacePaymentButton` (watchOS), Apple Pay on the Web).
- **Tip:** use the **Apple Pay mark** wherever you **highlight payment options** to show availability.

#### Button types
- Choose the type **that fits your purchase or payment flow's wording**. In some contexts **the system shows an image of the default card on the button**, signalling **Apple Pay is set up and ready**.
- The **17 types with their usage:**
| Payment button | Use for |
|---|---|
| **Buy with Apple Pay** | an area where people **purchase** (product detail page, cart) |
| **Pay with Apple Pay** | **paying bills or invoices** (utilities, plumbing, car repair) |
| **Check Out with Apple Pay** | a cart or purchase flow whose **other payment buttons start with "Check Out"** |
| **Continue with Apple Pay** | a cart or purchase flow whose **other payment buttons start with "Continue"** |
| **Book with Apple Pay** | **booking flights, trips or other experiences** |
| **Donate with Apple Pay** | **approved nonprofits** taking donations |
| **Subscribe with Apple Pay** | **purchasing a subscription** (gym, meal-kit) |
| **Reload with Apple Pay** | an app that uses **"Reload"** to add money to a card, account or payment system (transit, prepaid phone) |
| **Add Money with Apple Pay** | same, using **"Add Money"** |
| **Top Up with Apple Pay** | same, using **"Top Up"** |
| **Order with Apple Pay** | **ordering meals or flowers** |
| **Rent with Apple Pay** | **renting cars or scooters** |
| **Support with Apple Pay** | giving money to **projects, causes, organisations** using **"Support"** |
| **Contribute with Apple Pay** | same, using **"Contribute"** |
| **Tip with Apple Pay** | **tipping** for goods or services |
| **Apple Pay** (plain) | **stylistic reasons for a smaller minimum width or no call to action**; **the system may substitute it** when a chosen type isn't supported by the OS version |
| **Set Up Apple Pay** | **the device supports Apple Pay but the person hasn't set it up**: show acceptance and an **explicit chance to set up**, in **Settings, a user profile or an interstitial page** |
- (The **16 payment buttons plus Set Up** are shown as images; the count above is **15 named "with" types + the plain button + Set Up = 17**.)

#### Button styles
- **Automatic** style: **the current system appearance decides** (developer: `PKPaymentButtonStyle.automatic`, web `ApplePayButtonStyle`). To control it, choose:
  - **Black:** on **white or light backgrounds with enough contrast**; **not on black or dark backgrounds**. (✓ black on light; ✗ black on dark.)
  - **White with outline:** on **white or light backgrounds that don't give enough contrast**; **not on dark or saturated backgrounds**. (✓ light; ✗ dark.)
  - **White:** on **dark backgrounds with enough contrast**. (✓ on dark; ✗ on light.)

#### Button size and position
- **should** **Display the button prominently:** **no smaller than other payment buttons** and **without requiring scrolling**. (✓ same size, Apple Pay above a custom Add to Cart; ✗ smaller Apple Pay above a larger Add to Cart.)
- **should** **Position it correctly relative to Add to Cart.** **Side by side: Apple Pay to the right** of Add to Cart. **Stacked: Apple Pay above** Add to Cart. (✓ right; ✗ left; ✓ above; ✗ below.)
- **should** **Match the corner radius to your other buttons.** **Default: rounded**; you can make it **square (90° corners) or capsule-shaped** (developer: `cornerRadius`). (Three illustrations: **minimum, default and maximum radius**, each with a matching Add to Cart button.)
- **must** **Keep the minimum size and margins.** Titles **vary in length by locale**. **If the size can't fit the translated title, the system swaps in the plain Apple Pay button** (**no automatic replacement for Set Up Apple Pay**). (Illustrations: **Apple Pay: margins 1/10 of the height, minimum width 100 pt, minimum height 30 pt**; **Donate with Apple Pay: 140 pt wide, 30 pt high**.)

#### Apple Pay mark
- The **mark** shows Apple Pay is **an available payment option** among others; **it isn't a button**. (An image shows **four card logos of the same size and shape; the leftmost is the Apple Pay mark**.)
- **must** **Use only Apple's artwork, changing only its height.** The height **must be equal to or larger than other payment marks** in the flow. **Don't change the width, corner radius or aspect ratio; add a trademark symbol or other content; remove the border; add shadows, glows or reflections; flip, rotate or animate it.**
- **must** **Keep clear space of 1/10 of its height**, and **don't share its border with another graphic or button**.
- **Download the mark and the full rules from Apple's Apple Pay Marketing Guidelines page.**

### Referring to Apple Pay
- Plain text may promote Apple Pay and show it as an option. **Use it exactly as in Apple's Trademark List: never plural or possessive**, following Apple's trademark guidelines.
- **must** **Capitalise as in the list:** **two words, uppercase A and P, all other letters lowercase**; **all-uppercase only when an established all-caps typographic style requires it.**
- **must** **Never use the Apple logo in place of the name "Apple" in text.** **In the US use ® the first time Apple Pay appears in body text**; **no ® when it appears as a checkout selection option.** ✓ "Purchase with Apple Pay" · ✓ "Purchase with Apple Pay®" · ✗ "Purchase with ApplePay" · ✗ "Purchase with Pay" (Apple dropped) · ✗ "Purchase with APPLE PAY" (when not in an all-caps style).
- **should** **Coordinate the font and size with your app or site**: **don't mimic Apple's typography.**
- **must** **Don't translate "Apple Pay" or other Apple trademarks**; **keep them in English inside non-English text.**
- **must** **In a payment selection context, use a text-only description only if all options are text-only.** If **any other option has an icon or logo**, **use the Apple Pay mark**.
- **should** **When promoting Apple Pay in an app, follow the App Store marketing guidelines.**

### Platform considerations
- **iOS, iPadOS, macOS, visionOS, watchOS:** no additional considerations. **tvOS:** not supported.

## Specs & values
| Item | Value |
|---|---|
| Use for | physical goods, services, donations, subscriptions (virtual goods → In-App Purchase) |
| Authorisation | Face ID / Touch ID / Optic ID; double-click on Apple Watch; on the web also nearby iPhone or Apple Watch, or scanning a code |
| Error text | noun phrase, sentence case, **no final period**, **≤ 128 characters**, names the field and what's expected |
| Website icon | **60 × 60 pt**: **120 × 120 px @2x**, **180 × 180 px @3x** |
| Button styles | **automatic** · **black** (light backgrounds) · **white with outline** (light, low-contrast backgrounds) · **white** (dark backgrounds) |
| Corner radius | default rounded · minimum (square, 90°) · maximum (capsule) |
| Minimum button size | **Apple Pay 100 × 30 pt** (100 × 30 px @1x, 200 × 60 px @2x); **Book with Apple Pay 140 × 30 pt** (140 × 30 px @1x, 280 × 60 px @2x); margins **1/10 of the button's height**; the table's rows for **Buy, Check Out, Donate, Set Up and Subscribe** have **blank cells** (the Donate illustration shows **140 pt**) |
| Mark | Apple artwork only, height only; **≥ other payment marks' height**; clear space **1/10 of its height** |
| Position | side by side: **Apple Pay right of Add to Cart**; stacked: **above** |
| Donations | line item "Donation $50.00"; predefined **$25 / $50 / $100** + Other Amount |
| Subscription line items | frequency · discounts · upfront fees · trial amount (incl. $0) · regular amount · date billing begins; total = amount now |
| Wording | "Apple Pay" (two words); ® once in US body text; never translated, plural or possessive; no ® on a checkout option |
| Privacy | sites must have a privacy statement and follow the acceptable-use guidelines |
| Developer docs | PassKit **Apple Pay** · **Apple Pay on the Web** · `WKInterfacePaymentButton` · `PKPaymentAuthorizationController` · `applePayCapabilities` · `paymentSummaryItems` · `PKPaymentError` · Apple Pay Status Codes · `PKPaymentButtonType/Style` · `ApplePayButtonStyle` · `PKDateComponentsRange` |
| Video (link only, not watched) | What's new in Apple Pay (WWDC25 201) |
| Apple's Related list | Apple Pay Marketing Guidelines |
| Change log | Jun 8 2026 · Dec 16 2025 (web browsers, Apple Vision Pro) · Jun 10 2024 · Sep 12 2023 · May 2 2023 |

## Visual notes (link-only: from alt text, captions and the catalog list)
- **Hero:** a sketch of a **dollar sign** over grid lines, **tinted blue** (alt).
- **Payment sheet screenshot:** a **food-truck purchase** with a payment method and total.
- **Sheet tabs:** **iOS and Web** versions of the **line-item sheet** (gift-wrap charge, coupon credit), the **error sheet**, the **web detail-view overlay** (postal code doesn't match the country; choose or edit the address), the **fixed** and **variable ("Amount Pending") subscription sheets**, and the **$0 total for a three-month trial**.
- **Button illustrations:** **17 button images** (each with its "… with Apple Pay" caption), a **default-card-on-button** image, **black / white-outline / white** ✓ and ✗ backgrounds, **same-size vs smaller**, **right vs left** (Check Out with Apple Pay beside Add to Cart), **above vs below**, **three corner radii**, and **two minimum-size drawings** with 1/10-height margins.
- **Mark:** a **row of four same-size card logos with the Apple Pay mark first**.
- **Mismatches / notes:**
  1. **The minimum-size table has blank cells** for **Buy, Check Out, Donate, Set Up and Subscribe**; only **Apple Pay (100 pt)** and **Book (140 pt)** have values, while the illustration for **Donate** shows **140 pt**. It is unclear whether the blank rows share the Book row's values; **treat 140 × 30 pt as the safe minimum for the long-title types (verify)**.
  2. **The abstract says "in any browser"**, the intro says **"Apps and websites"**, and the platform section lists **five platforms plus tvOS unsupported**; the **web** details sit in **developer links**, not in a separate section.
  3. **The 128-character limit and the capitalisation style** are given for **error text**; **line items** have **no stated character limit** (only "fit on one line").
  4. **"Purchase with Pay"** in the wrong-usage example has **a double space where "Apple" was dropped** (source formatting).
  5. **"Apple Pay button" is also the name of the generic type** (not only the family), so "Apple Pay buttons" is ambiguous in places.
  6. **"Not supported in tvOS"** while the **Related resources for tvOS** aren't mentioned; the sign-up flows on tvOS (`apple-in-app-purchase.md`) use **another device**.
- **Catalog:** the script found **12 comparisons** (below). **Not catalogued:** the hero, the sheet screenshot, the 17 button types (table cells), the default-card button, the side-by-side right/left pair (single images inside the flow), the mark image and the confirmation illustration. Catalog total **243** (was 231); the 231 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **apple-pay-01 … apple-pay-12**:
- **-01** (✓/✗, light + dark): **custom button** must not say **"Apple Pay"** (✓ logo above **"Order Now"**, ✗ logo above **"Apple Pay"**).
- **-02** (tabs iOS / Web): **line items** (gift wrap, coupon credit).
- **-03** (tabs iOS / Web): **data-validation error** sheets (web adds the **custom detail overlay**).
- **-04** (tabs): **fixed** and **variable** subscription sheets.
- **-05** (tabs): **no payment at authorisation** (three-month trial, $0 total).
- **-06 / -07 / -08** (✓/✗, light only): **button style vs background**: **black** (✓ light / ✗ dark), **white with outline** (✓ light / ✗ dark), **white** (✓ dark / ✗ light).
- **-09** (✓/✗, light + dark): **prominence**: ✓ **same size** / ✗ **smaller** than Add to Cart.
- **-10** (✓/✗, light + dark): **stacked placement**: ✓ **above** / ✗ **below** Add to Cart.
- **-11** (three neutral, light + dark): **corner radius**: minimum / default / maximum.
- **-12** (pair, light + dark): **minimum size and margins**: Apple Pay (**100 × 30 pt**) and Donate (**140 × 30 pt**), margins **1/10 of the height**.
The script reports **12 comparisons** for this page.

## Web translation
**Apple Pay works on the web** (Safari on Apple devices, and other browsers via a nearby iPhone or a scanned code): **Apple Pay on the Web (JS)**, the **Payment Request API**, and Apple's **`<apple-pay-button>`** custom element (Apple Pay JS SDK). **Most of this page maps directly.** Implementation names beyond the page's own links are background knowledge; **verify against Apple's Apple Pay on the Web documentation and your payment provider's docs**.

| HIG rule | Web implementation |
|---|---|
| Offer only where supported | **Feature-detect:** **`window.ApplePaySession && ApplePaySession.canMakePayments()`** (and **`applePayCapabilities`** for `paymentCredentialsAvailable` / `paymentCredentialStatusUnknown` / `paymentCredentialsUnavailable`); **Payment Request** `new PaymentRequest([{supportedMethods: "https://apple.com/apple-pay", data}])` + `canMakePayment()`. **Don't render the button when unsupported**; show other methods. |
| Primary (not sole) option; not a separate flow | **Render it first/pre-selected** in the same payment section as cards; **never a separate step, page or tab** for Apple Pay. |
| Buttons only to start payment or setup | The **button element only starts `ApplePaySession`/`PaymentRequest.show()`**; **setup** uses the **"Set Up Apple Pay" type** (`type="set-up"`) in **settings, profile or an interstitial**. |
| Custom button must not say "Apple Pay" or show the logo | **A branded custom button** ("Order now") is fine, **without Apple's name or logo on it**, **plus the Apple Pay mark or text elsewhere on the same page** ("We accept Apple Pay"). Prefer the **official element**. |
| Use the mark only to say "accepted"; never as a button | **Non-interactive `<img alt="Apple Pay">`/SVG in the payment-methods strip**; **`<a>`/`<button>` never wraps the mark**; **height ≥ other payment marks**, **same-size row**; **clear space ≥ 1/10 of the mark's height**; **artwork from Apple's marketing page, unmodified** (no CSS filters/shadows/rotation/animation; scale by height only). |
| Never hide or disable-look the button | **Keep the button enabled**; **on click without a required choice** (size/colour) **scroll to and highlight the missing field with a message**. |
| Tell search engines Apple Pay is accepted | **schema.org markup** `acceptedPaymentMethod`/`paymentAccepted` on `Offer`/`Organization` (background; **verify the accepted values**). |
| Privacy statement and acceptable-use guidelines | **Link a privacy statement near checkout**; **register and validate the domain** (**merchant validation**, domain verification file `/.well-known/apple-developer-merchantid-domain-association`); **follow the acceptable-use guidelines**. |
| Cohesive checkout; no new windows | **Same-page checkout (modal sheet or inline)**; **no `target="_blank"` or pop-ups**; **your branding** on cart and confirmation. |
| Button first, larger, or separated | **Apple Pay button at the top of the payment section, full width (or at least as large as other buttons)**, **a "or pay with card" divider** below it. |
| Single-item button on product pages; express checkout | **Buy-now `<apple-pay-button type="buy">` on product pages** (**item only, cart untouched; remove from cart if present after success**); **express checkout in the cart/mini-cart** that **opens the sheet immediately** with **one shipping method and destination**. |
| Coupons on the sheet | Use **`onpaymentmethodselected`/`oncouponcodechanged`** (**Apple Pay JS coupon code support**, background) to **validate and update line items and totals**; **show the active code**. |
| Collect required options first; navigate to the missing field | **Validate before showing the sheet**: **highlight, warn and `focus()` the field** (`aria-invalid`, `aria-describedby`; `feedback.md`). |
| Optional info before or after | **Gift message / delivery notes** earlier in the flow or **on the confirmation page**. |
| Multiple methods/destinations first | **Collect per-item shipping choices before the sheet.** |
| Pickup location first | **Pickup picker before the sheet**, **pass the location as the read-only shipping contact/address**. |
| Prefer Apple Pay's data | **Request only needed fields** (`requiredShippingContactFields` / `requiredBillingContactFields`), **use the returned contact and address as the source of truth**, **don't re-ask**. |
| No account before purchase | **Guest checkout; create an account on the confirmation page**, **prefilled**, with **Sign in with Apple / passkeys** (`sign-in-with-apple.md` ✓). |
| Report results in the sheet; confirmation page | **Complete the session with `ApplePaySession.STATUS_SUCCESS`/`STATUS_FAILURE`** (or **`PaymentResponse.complete("success" | "fail")`**); **then an order confirmation**: **thanks, ship date, status link, "Paid with Apple Pay" or "1234 (Apple Pay)"**. |
| Essential information only in the sheet | **Only the needed contact/shipping fields**: **no shipping address for a digital gift card**. |
| Shipping methods with cost and dates | **`shippingMethods`** with **label, detail, amount**, **`dateComponentsRange`** for **delivery estimates**. |
| Line items: short, not an itemised product list | **`lineItems`** for **extras (gift wrap, discount, tax, fees, donation)**; **`total` label = business name** (**"Pay [Business]"**); **one line each**. |
| Marketplace: name both businesses | **Total label:** **"End Merchant (via Marketplace)"**. |
| Amount pending | **`type: "pending"`** line item/**total** for **unknown costs** (tips, distance-priced rides), **where regulations allow**. |
| Don't add spinners over the sheet | **No page loaders while the sheet is open**; show progress **only after dismissal**. |
| Website icon | **A 180 × 180 px (or 120 px) PNG "apple-touch-icon"** (`<link rel="apple-touch-icon" sizes="180x180" href="…">`, **60 × 60 pt**) for **Handoff and Wallet**. |
| Data validation: respond during the sheet; be forgiving; accurate status codes | **`onshippingcontactselected` / `onshippingmethodselected` / `onpaymentauthorized`** (or Payment Request `shippingaddresschange`/`shippingoptionchange`) **validate**; **return `errors: [new ApplePayError("shippingContactInvalid", "postalCode", "Zip code doesn't match city")]`** (Payment Request: `addressErrors`); **normalise input** (**strip Zip+4 down to 5 digits, accept phone formats**); **only redacted address and card type are available before authorisation**, so **validate the rest after**. |
| Error text style | **Noun phrase, sentence case, no final period, ≤ 128 characters, field-specific** ("Shipping not available for this state") (`writing.md`). |
| Cancel in-progress payments on dismissal | **`oncancel` (Apple Pay JS) / `PaymentRequest.abort()` and promise rejection**: **release inventory and cancel pending orders**; **the button restarts the flow.** |
| Subscriptions | **`recurringPaymentRequest`** / **Payment Request `recurring`**: **describe billing frequency, discounts, upfront fees**, **`trialBilling`** with **$0 total**, **billing agreement text short or blank** (**plain-language summary, not legal terms**); **show terms before the sheet**; **use the sheet only for cost increases** on a plan change. |
| Donations | **Nonprofits only**: **"Donation $50.00" line item**, **$25 / $50 / $100 + Other**, **`type="donate"` button**. |
| Buttons: API only; 17 types; localisation; radius; VoiceOver | **`<apple-pay-button buttonstyle="black" type="buy" locale="en-US">`** (JS SDK) **or the CSS `-apple-pay-button-style` / `-apple-pay-button-type` with `-webkit-appearance: -apple-pay-button` on Safari** (background); **set radius with `--apple-pay-button-border-radius`, size with `--apple-pay-button-width/height`, padding with `--apple-pay-button-padding`, box-sizing `--apple-pay-button-box-sizing`**; **the element is localised and exposes an accessible name automatically**. **Types** map to `type` values: `plain`, `buy`, `set-up`, `donate`, `check-out`, `book`, `subscribe`, `reload`, `add-money`, `top-up`, `order`, `rent`, `support`, `contribute`, `tip`, `continue`, `pay` (background; **verify**). |
| Styles by background contrast | **`buttonstyle="black"` on light, `white-outline` on light-low-contrast, `white` on dark**; **or `-apple-pay-button-style: black`** with **theme-aware switching** (`prefers-color-scheme` **not** applied automatically on the web: **pick per background**). **Never a custom-drawn Apple Pay button.** |
| Size and position | **Button ≥ other payment buttons, no scroll**, **right of / above Add to Cart**; **radius matches your buttons (0 … capsule)**; **minimum size (px/pt equal on web CSS): 100 × 30 (Apple Pay), 140 × 30 for long-title types; margins 1/10 of the height**; **verify the translated title fits** (**the button falls back to the plain button if not**). **Touch target still ≥ 44 px** (`buttons.md` GATE), so **use ≥ 44 px height** on touch layouts. |
| "Apple Pay" wording | **Copy deck:** **"Apple Pay"** (two words), **not translated, not plural/possessive**, **® once in US body text** only, **no ® on the checkout option label**, **your fonts**, **text-only only if every method is text-only**, **else the mark**. |
| Native-only | **`PKPaymentAuthorizationController/ViewController`, `PKPaymentButton`, `WKInterfacePaymentButton`, Wallet passes, Apple Pay in apps** are native; **the web uses Apple Pay JS / Payment Request / the `<apple-pay-button>` element**. |

**Conflicts and decisions (for you):** `tokens/apple-buttons.css` and the **Buttons GATE** cover **your own buttons** (idle/hover/pressed/disabled, ≥ 44 px); **an Apple Pay button is Apple's element** and **isn't restyled by the token file** (except **radius, size and margin** as above). **Nothing in the token file changes.**

Field-note cross-links:
- `field-notes/*`: **no checkout/payment recipe**; nothing conflicts. **The skill's Buttons gate:** the Apple Pay element is **exempt from custom styling** but **must meet the ≥ 44 px touch height and visible focus** (the element supports focus styling via the browser).
- `hig/technologies/apple-in-app-purchase.md` (✓): **the split** (virtual goods vs physical/services/donations) and the **subscription sign-up copy**; `hig/technologies/app-clips.md` (✓): **Apple Pay for express checkout in App Clips and marketplaces (naming both businesses)**; `hig/patterns/entering-data.md` (✓): **minimal fields, forgiving input, validation timing**; `hig/patterns/feedback.md` (✓ CRITICAL): **clear, specific error messages next to the problem**; `hig/patterns/managing-accounts.md` (✓): **no forced account before purchase**; `hig/patterns/loading.md` (✓): **no extra spinners over a system progress state**; `hig/components/menus/buttons.md` (✓ CRITICAL): **button sizes, radius and placement conventions**; `hig/foundations/writing.md` (✓): **error text style and trademark wording**; `hig/foundations/privacy.md` (✓): **privacy statement, redacted data before authorisation**; `hig/foundations/branding.md` (✓): **partner marks**; `hig/technologies/airplay.md` (✓): **same "icon vs button" and wording structure**.
- Not yet ingested (linked from this page): none in the HIG (Apple Pay Marketing Guidelines, Trademark List and App Store marketing guidelines are external).

## Checklist
- [ ] **The button appears only where Apple Pay works**, is **primary (not sole)**, **first/larger or separated**, **no smaller than other payment buttons**, **visible without scrolling**, **right of or above Add to Cart**.
- [ ] **The button is Apple's element** (or the official CSS), **correct style for its background (black on light, white-outline on light-low-contrast, white on dark)**, **type matching the flow**, **radius matched to your buttons**, **≥ 100 × 30 pt (140 × 30 for long titles) and ≥ 44 px on touch**.
- [ ] **Custom buttons never say "Apple Pay" or show the logo**; **the mark is unaltered, non-interactive, ≥ other marks' height, with 1/10 clear space**.
- [ ] **Single-item and express-checkout buttons** exist; **cart is untouched by single-item purchases**.
- [ ] **Required options are validated first** (focus + message); **optional info and multiple destinations/pickup are collected before the sheet**.
- [ ] **Sheet shows only essential fields; "Pay [Business]" (marketplace: "… via …"); short line items for extras; shipping methods with cost/dates; active coupon; Amount Pending disclosed.**
- [ ] **Errors are field-specific, ≤ 128 chars, noun phrase, sentence case, no final period; inputs are forgiving; correct error codes; no spinner over the sheet.**
- [ ] **Dismissal/timeout cancels the in-progress payment**; **the button restarts it.**
- [ ] **Subscriptions: terms explained before the sheet; line items for frequency, discounts, fees, trial ($0) and start date; sheet only for cost increases; billing-agreement text short or blank.**
- [ ] **Donations (approved nonprofits): "Donation" line item, predefined amounts + Other.**
- [ ] **No account required before purchase; order confirmation follows** ("Paid with Apple Pay" optional).
- [ ] **Web: privacy statement, domain/merchant validation, acceptable-use compliance, apple-touch-icon 180 px, schema.org payment markup.**
- [ ] **Copy: "Apple Pay" spelled, not translated, no plural/possessive, ® once in US body text.**

## Related
- Ingested: Apple In-App Purchase (✓), App Clips (✓), Entering data (✓), Feedback (✓ CRITICAL), Managing accounts (✓), Loading (✓), Buttons (✓ CRITICAL), Writing (✓), Privacy (✓), Branding (✓), AirPlay (✓).
- Not yet ingested (linked from this page): none (external: Apple Pay Marketing Guidelines, Apple Trademark List, Guidelines for Using Apple Trademarks, App Store marketing guidelines, Approved nonprofits, Acceptable use guidelines for Apple Pay on the web).
- Developer docs: PassKit "Apple Pay" · "Apple Pay on the Web" · `WKInterfacePaymentButton`.
- Videos: What's new in Apple Pay (WWDC25 201).
