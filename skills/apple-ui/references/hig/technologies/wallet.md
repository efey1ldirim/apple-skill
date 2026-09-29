# Wallet
Source: https://developer.apple.com/design/human-interface-guidelines/wallet · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, visionOS, watchOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, macOS, or visionOS. **Not supported in tvOS**", plus a long **watchOS** section on pass layout) · Ingested: 2026-09-29 · Apple last updated: **June 8, 2026** ("guidance for iOS 27 and the Pass Designer app"; earlier rows: Jan 17 2025 pass image dimensions; Dec 18 2024 poster event ticket style; Sep 12 2023 adding orders to Wallet; Feb 20 2023 order-tracking presentation and artwork; Nov 30 2022 carrier name in shipping status; Sep 14 2022 Verify with Wallet, shipping values, consolidated page). **Link-only ingestion: one DocC fetch, read in full (377 lines, in three chunks); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **pass image sizes (see Specs)**, **PNG @2x and @3x**, **order logo and product images 300 × 300 px (PNG or JPEG, nontransparent)**, **6 pass styles**, **6 pass field areas**, **4 Verify with Wallet button labels**, **order statuses (8)**.

## In one line
**Wallet stores cards, IDs, tickets, keys and more on iPhone and Apple Watch; your app can create passes, verify identity and give receipts and order tracking.** **Passes: offer to add them (one-tap system UI, or background adding after a one-time authorisation; a review view with "Add to Apple Wallet"), suggest adding passes created elsewhere (never ask twice after a decline), add related passes as a group, keep an Add to Apple Wallet button for later, link "View in Wallet", set expiration/relevant/voided dates, never delete passes without permission, provide relevance so the system surfaces passes (Lock Screen, Live Activities), keep passes current, and use change messages only for time-critical updates.** **Design: an uncluttered front with essentials in the header, brand colours and imagery, sufficient text contrast (solid or image backgrounds), text that works on every device, no essential info in elements missing on some devices, no text in images.** **Styles: boarding pass, coupon, event ticket (poster or non-poster), store card, poster generic, generic.** **Images: PNG @2x/@3x, logo 50–160 × 50 pt, primary logo 30–126 × 30, secondary logo 12–135 × 12, icon 38 × 38, strip 375 × 144, thumbnail 60–90 × 90, background 343 × 503 (non-poster) or artwork 358 × 448 (poster), footer 268 × 15.** **Order tracking: make it easy to add an order (automatic via Apple Pay order details; the Track with Apple Wallet button), show order data immediately, keep statuses current, a 300 × 300 px nontransparent logo and product images, brief localised text, a manage-order link, clear line items, contact methods, tracking help, specific carrier and status values.** **Identity verification: "Verify with Wallet" only when supported, at the moment of need, with a clear purpose string, only necessary data (thresholds), a stated retention, and the right button label.** **watchOS: carousel of cards, cropped strip image, fixed layout areas per style.** On the web: **Add to Apple Wallet badges and `.pkpass` links, Apple Pay on the web order details, the Digital Credentials API for identity, and the same pass, order and privacy principles for other wallet platforms.**

## Rules

### Framing (intro)
- **Wallet securely stores credit and debit cards, driver's licence or state ID, transit cards, event tickets, keys and more on iPhone and Apple Watch.** **People use them for Apple Pay purchases, order tracking, confirming identity, and to streamline boarding a plane, attending a concert or getting a discount.**
- **Integrating Wallet lets an app create custom passes and present them at the right moment, securely verify identity, and offer detailed receipts and tracking where it's most convenient.** (Developer: PassKit "Wallet".)

### Passes
**Passes are digital representations of information people add to Wallet** (**event tickets, boarding passes, membership reward cards, coupons**). (Illustration: **three passes side by side: a museum membership pass with a dinosaur-skull background, a donut coupon with a food-truck illustration, a gym pass with equipment background**.)
- **should** **Offer to add new passes to Wallet.** **When an action creates a pass (buying a ticket, joining a rewards programme), present system UI that adds it in one tap.** **For frequent, predictable actions such as flight check-in, add passes in the background after a one-time authorisation**, so people needn't tap "Add to Apple Wallet" each time; **Wallet notifies the person whenever a pass is added.** **If someone wants to review first, show a custom view with an "Add to Apple Wallet" button.** (Developer: `addPasses`, `backgroundAddPasses`, `PKAddPassesViewController`.)
- **should** **Help people add a pass created outside the app** (**website or another device**): **suggest adding it the next time they open the app**; **if they decline, don't ask again.**
- **should** **Add related passes as a group** (**all boarding passes for a multi-connection flight at once; a bundle of event tickets from a website**).
- **should** **Display an "Add to Apple Wallet" button so people can add an existing pass not yet in Wallet** (**they declined or removed it earlier**), **wherever the pass information appears**; **a badge exists for emails and web pages** (`PKAddPassButton`; Add to Apple Wallet guidelines). (Illustration: **a food-truck app showing a 20 % off a dozen donuts coupon with an Add to Apple Wallet button below the pass**.)
- **should** **Let people jump from the app to the pass in Wallet**: **a link labelled something like "View in Wallet".**
- **must** **Tell the system when passes expire**: **Wallet automatically hides expired passes and offers a button to revisit them**; **set the expiration date, relevant date and voided properties correctly.**
- **must** **Always get permission before deleting passes from Wallet** (e.g. **an in-app setting for manual or automatic removal; an alert before deleting if necessary**).
- **should** **Help the system suggest a pass when relevant**: **provide when and where the pass is relevant so the system can show a Lock Screen link** (**a gym card appears on entering the gym**); **for some types (event tickets) the system can start a Live Activity.** (Illustrations: **a Lock Screen banner from a Gym app: "Get ready for today's workout! Open your membership pass to badge in."**; **a Live Activity for a soccer ticket showing level 3, row 12, seat 5**.)
- **should** **Keep passes up to date**: **digital passes can reflect changes (an airline boarding pass updates for delays and gate changes).**
- **must** **Use change messages only for time-critical updates**: **they interrupt people**; **a gate change qualifies, a support phone number change doesn't**; **never for marketing or other noncritical communication**; **available per field.**

### Pass anatomy
**A pass's content and structure come from pass fields and semantic tags.** **Pass fields define what appears and how it's arranged. Semantic tags describe content to the system, enabling features such as surfacing a pass when needed and featured actions (quick links to venue directions or event guides).** **For poster event and semantic boarding passes, semantic tags are required and enable automatic layout**; **still include pass fields alongside them so the passes display correctly on older iOS versions.** **Supplemental information can live in sheets linked from the front of the pass**; **the back holds rarely needed settings and information such as legal text.**

#### Pass field types
| Area | Content |
|---|---|
| **Logo and logo text** | brand icon and name; **visible when the pass is collapsed in Wallet** |
| **Header fields** | critical information that **stays visible when collapsed** |
| **Primary field** | the most important information |
| **Secondary and auxiliary fields** | useful but less critical information |
| **Footer fields** | supplemental information such as pass category ("Family", "Annual") |
| **Back fields** | supplemental details shown in pass details in Wallet |

**Layout varies by pass style.**

### Designing passes
**Wallet's consistent visual style builds familiarity and trust.** **Don't merely replicate the physical counterpart: design a clean, simple pass that feels at home in Wallet.** (Illustration: **a museum membership pass in Wallet with a full-art dinosaur-skull background, a QR code, member details and two featured actions: "View Membership Benefits" and "Go to Location"**.)
- **Pass Designer** (Mac app) **designs and previews passes from Apple templates or a blank pass: boarding passes, coupons, event tickets, store cards, generic passes and poster generic passes.** (Illustration: **Pass Designer previewing a museum poster generic pass**.)
- **must** **Design a pass that looks good and works on all devices**: **an Apple Watch pass shows less information and fewer images**; **don't put essential information in elements that may be unavailable on some devices**; **avoid padding on images (watchOS crops white space from some images).**
- **should** **Keep the front uncluttered**: **essential information (event date, account balance) in the header so it shows when collapsed**; **the rest for what people need quickly**; **rarely needed details on the additional information sheet.**
- **should** **Make the pass instantly identifiable**: **brand colours, images, icons and full-art backgrounds.**
- **must** **Ensure sufficient contrast between background and text colours** (**both solid and image backgrounds**). (Illustrations: **✓ a gym pass with white labels on solid purple; ✗ labels hard to distinguish on purple; ✓ a concert ticket with white labels on an image; ✗ labels hard to distinguish on an image**.)
- **should** **Use language that works on any device** ("Slide to view" is meaningless on Apple Watch).

### Pass styles
**Each style defines appearance and layout.**
| Style | For | Notes |
|---|---|---|
| **Boarding pass** | travel tickets: airline boarding passes, train, bus, boat tickets, generic transit; usually one trip with a start and end | **Semantic tags for airline boarding passes; pass fields for other transit types** |
| **Coupon** | coupons, special offers, discounts | strip image supported |
| **Event ticket** | entry to sporting events, concerts, movies, plays; one event, or several (season ticket) | **poster style: full-art background; non-poster: standard pass fields with a background image and thumbnail** |
| **Store card** | store loyalty, discount, points and gift cards; shows a balance when the account has one | strip image supported |
| **Poster generic pass** | a full background image and a distinct field layout; not tied to a category; use when another style doesn't fit | flexible |
| **Generic pass** | passes that fit no other category (gym card, coat-check claim ticket) | thumbnail supported |

(Illustrations: **an airline boarding pass on blue (SFO to NRT) with a QR code**; **a food truck coupon with a strip image and a solid blue background**; **a soccer poster event ticket with a full-art illustration**; **non-poster event tickets: one with a blurred full-image background, one on solid dark blue with a thumbnail**; **a coffee-shop store card with a strip illustration on dark red**; **a museum poster generic pass**; **a gym generic pass on purple with a dumbbell thumbnail**.)

### Pass images
- **must** **Create pass images as PNG in @2x and @3x.**
- **should** **Reserve images for visual content**: **embedded text isn't accessible and may not be visible if images don't display on all devices**; **use text fields and semantic tags for text**; **add barcodes with Pass Designer or the APIs, not in images.**
- **should** **Keep image file sizes small** (**passes arrive by email or web page**).
- **must** **Provide a pass icon** (**lock screen, Mail, passes in Wallet**; **app icon or a separate design**).

| Image | Supported styles | Filename | Width | Height | Placement / notes |
|---|---|---|---|---|---|
| **Logo** | non-semantic airline boarding, other boarding, coupons, non-poster event tickets, generic, store cards | `logo.png` | **min 50 pt, max 160 pt** | **50 pt** | top-leading corner; typically a horizontal text logo, optionally with a graphic; **avoid inner drop shadows** (legibility) |
| **Primary logo** | airline boarding passes, poster event tickets, poster generic passes (semantic passes only) | `primaryLogo.png` | **min 30 pt, max 126 pt** | **30 pt** | top-leading corner; square with logo text, or rectangular text-based without |
| **Secondary logo** | poster event ticket | `secondaryLogo.png` | **min 12 pt, max 135 pt** | **12 pt** | bottom-trailing corner; issuer or organiser |
| **Icon** | all | `icon.png` | **38 pt** | **38 pt** | square; the system rounds the corners; Lock Screen, Mail, passes in Wallet |
| **Strip image** | coupon, store card | `strip.png` | **375 pt** | **144 pt** | keep areas behind text uncluttered, **contrast** with text, important elements toward the **bottom or trailing edge**, **no embedded text** |
| **Thumbnail** | event ticket, generic pass | `thumbnail.png` | **min 60 pt, max 90 pt** | **90 pt** | square; rounded-corner artwork, **transparent PNG** (e.g. movie poster) |
| **Background (non-poster)** | event tickets | `background.png` | **343 pt** | **503 pt** | blurred behind content on older event tickets |
| **Poster background (artwork)** | poster event tickets, poster generic passes | `artwork.png` | **358 pt** | **448 pt** | unblurred; **a material strip covers the bottom edge**; keep content in the **safe area**; account for a barcode; preview in Pass Designer (`footerBackgroundColor`) |
| **Footer** | airline boarding passes | `footer.png` | **268 pt** | **15 pt** | boarding passes only |

- (Illustrations: **the logo position in the top-left corner of a coupon**; **a flat brown paper-bag icon ✓ vs one with an inner drop shadow ✗**; **square primary logo with logo text; rectangular primary logo with no logo text**; **the secondary logo bottom-trailing on a poster ticket**; **the icon in a Lock Screen banner ("Get ready for flight AP 1042 to Tokyo!") and on a pass with featured actions "Go to Terminal I" and "Track Luggage"**; **strip image with a primary-field callout**; **thumbnail in the upper-trailing area of a gym pass**; **poster backgrounds with pass layout and blue safe-area overlays for a QR-code and a barcode layout**.)

### Order tracking
**Wallet can show information about an order placed through your app or website and update it as the status changes.** **In iOS 17 and later you can help people start tracking from your app or website and offer more ways to add an order to Wallet.** **Wallet presents a dashboard of active and completed orders (with a search field, active orders and orders this month); people open an order for items and shipping or pickup fulfilment.** (Illustrations: **an order fulfilment screen (status bar, shipping address, items, details), a "delivered today" variant, the dashboard, and callouts naming the merchant logo and display name, order status and description, tracking link and line items**.)
- **The Wallet Orders schema defines properties** (**product descriptions, status, contact information, shipping and pickup details including estimated arrival dates, addresses, tracking numbers, pickup instructions**); **Wallet displays them in consistent system interfaces**; **supply as much as you can, with properties that match your order processes.**
- **should** **Make it easy to add an order to Wallet**: **after an Apple Pay transaction, use `PKPaymentOrderDetails` (app) or `ApplePayPaymentOrderDetails` (web) to add it automatically**; **from iOS 17, `AddOrderToWalletButton` shows the system "Track with Apple Wallet" button on order confirmation, status or tracking pages or in emails**; **adding an order already in Wallet opens Wallet and shows the order.**
- **must** **Make order information available immediately after the order**: **people need confirmation even when payment, processing and fulfilment are pending**; **if details come later, provide what you have and a status description such as "Check back later for full order details."**
- **should** **Provide fulfilment information as soon as available and keep status current**: **the system updates the order and can notify customers**; **statuses: Order Placed, Processing, Ready for Pickup, Picked Up, Out for Delivery, Delivered, and, if something goes wrong, Issue or Canceled.**
- **must** **Supply a high-resolution logo: PNG or JPEG, 300 × 300 px, nontransparent background** (**shown in the dashboard and detail view at various sizes**).
- **should** **Supply distinct, high-resolution product images: PNG or JPEG, 300 × 300 px, straightforward depiction on a solid, nontransparent background**; **no "lifestyle" or busy backgrounds** (hard to distinguish small). (Illustration: **a donut labelled 300 px wide by 300 px high**.)
- **should** **Keep text brief** (**the system can truncate**); **use clear, approachable language and localise it**; **the price must match the final price the customer confirmed.**

#### Displaying order and fulfillment details
- **should** **Provide a link to where people manage the order**: **a universal link so it opens even without the app installed.**
- **should** **Describe each item clearly** (**`LineItem`: price, name, image**); **an order lists all items; a fulfilment lists only its own**; **optionally attach a PDF receipt to a transaction.**
- **should** **Supply a prioritised list of your apps** that may be installed: **the system links to the installed app highest on the list, or the first if none are installed.**
- **should** **Avoid duplicate notifications** (e.g. **tell the system not to send order notifications through Wallet when an associated app is installed**).
- **should** **Make it easy to contact the merchant**: **multiple contact methods**; **at minimum a link to the merchant's website or landing page**; **optionally a Messages for Business link, phone number, email, support page**; **the Contact button shows a menu of what you supply.** (Illustration: **an overlay with buttons to message or email the merchant, get online support or call customer service**.)
- **should** **Help people track**: **a multi-item order can have multiple fulfilments, each shipping or pickup**; **supply enough for people to know where items are and when they arrive**; **plus an estimated arrival time, particularly:**
  - **a direct link to the carrier's tracking page (in addition to a tracking number), also on any intermediate tracking page;**
  - **a scannable barcode when one is required for pickup, offered from within Wallet;**
  - **clear, detailed instructions for receiving or picking up.**
  - (Illustration: **one order arriving tomorrow with a tracking link, another ready for pickup with a "Barcode" button and a pickup address**.)
- **should** **Keep the fulfilment screen centred on order tracking**: **prioritise tracking information over app or service recommendations.**
- **should** **Choose shipping-fulfilment values that match what you know**: **name the carrier in `carrier`, else leave the default "Track Shipment"**; **with access to interim steps use specific statuses (`onTheWay`, `outForDelivery`, `delivered`); without it use `shipped`**; **always give a tracking link when available.**
- **should** **Use approachable, accurate status descriptions clearly related to the status**, **in your brand's voice.**
- **must** **Be direct and thorough for Issue or Canceled**: **say why and what people can do.**

### Identity verification
**On iPhone with iOS 16 and later, people can store an ID card in Wallet and let an app or App Clip read information from it to verify identity without leaving their context** (e.g. **applying for a credit card in a banking app**). (In-person mobile ID reading: `id-verifier.md`.) **Developer note:** **Apple doesn't create or see the ID documents; when people share identifying information you receive only encrypted data that isn't readable on the device.**
- **Apple provides a "Verify with Wallet" button; it opens a sheet that describes your request and lets people agree to share or cancel.**
- **must** **Show a Wallet verification option only when the device supports it**: **if it can't return the requested identity information, don't display the button**; **prepare a fallback view offering another verification method** (`VerifyIdentityWithWalletButton`).
- **should** **Ask for identity information only at the moment you need it**: **not before people are ready to start the process, or when simply creating an account.**
- **must** **Describe the reason clearly and succinctly (a purpose or usage description string)**, **shown in the verification sheet.** Examples:

| To verify… | To support… | Example purpose string |
|---|---|---|
| Identity | Opening an account where proof of identity is legally required to prevent fraud | "Federal law requires this information to verify your identity and also to help [App Name] prevent fraud." |
| Driving privilege | Renting a vehicle that requires legal driving privileges | "Applicable state law requires [App Name] to verify your driving privileges." |

  - **Each string: a brief, complete sentence, direct, specific, easy to understand, sentence case, active voice, with a period.**
- **must** **Ask only for the data you need**: **e.g. an age threshold rather than current age or birth date** (`age(atLeast:)`).
- **must** **Say whether you'll keep the data and for how long**: **a period, indefinitely, or only as long as the verification takes; the system shows explanatory content when you specify a duration** (`PKIdentityIntentToStore`).
- **should** **Choose the button label that matches the use case and app design:**

| Button label | Use when |
|---|---|
| **Verify Age with Apple Wallet** | the app can complete the current transaction after verifying age (e.g. leasing a car) |
| **Verify Identity with Apple Wallet** | the app can complete the transaction after verifying identity (e.g. a car rental) |
| **Continue with Apple Wallet** | Verify with Wallet is one part of a process that also needs other information (Social Security number, phone number), e.g. opening a financial account or a background check |
| **Verify with Apple Wallet** | the flow completes without further steps but "Verify Age", "Verify Identity" and "Continue" don't fit (e.g. signing up for a government service) |

  - **All labels have a multiline variant used automatically when horizontal space is tight** (`PKIdentityButton.Label`).
  - **The button always uses white letters on black**; **a style with a light outline helps on dark backgrounds** (`PKIdentityButton.Style.blackOutline`); **adjust the corners with `cornerRadius` to match related buttons.**

### Platform considerations
- **iOS, iPadOS, macOS, visionOS:** no additional considerations. **tvOS:** not supported.

#### watchOS
- **Wallet shows passes in a scrolling carousel of cards.** **People can add a pass to Apple Watch even without a watch app**, **so know how it looks.** (Illustrations: **a selected SFO–LGA flight pass in the list, the next pass a gym card with a barcode**; **the flight pass above a QR code**.) **Tapping a pass opens a scrolling details screen; some transactions can be tapped for more.**
- **Each style specifies the fields and images that fit the basic layout areas:** **top row: logo image + essential field area; second row: primary field area; third row: secondary and auxiliary fields area.** **Information that doesn't fit goes to the scrolling details screen.**
- **Important:** **in every style watchOS crops the strip image to fit the card's aspect ratio and may crop white space from other images.**

| Style | Row 1 | Row 2 | Row 3 |
|---|---|---|---|
| **Boarding** | logo + departure or boarding time | origin and destination | passenger name and seat |
| **Coupon** | logo + expiration date | strip image | unused |
| **Store card** | logo (other area unused) | strip image | member name and number |
| **Event ticket** | logo + event start date | event information | attendee name and seat location |
| **Generic** | logo + expiration date | strip image | name and number |

## Specs & values
| Item | Value |
|---|---|
| Pass styles | boarding · coupon · event ticket (poster / non-poster) · store card · poster generic · generic |
| Pass field areas | logo and logo text · header · primary · secondary and auxiliary · footer · back |
| Semantic tags | required for poster event and semantic boarding passes; keep pass fields for older iOS |
| Image format | PNG, @2x and @3x; small files |
| Logo | logo.png · 50–160 × 50 pt |
| Primary logo | primaryLogo.png · 30–126 × 30 pt |
| Secondary logo | secondaryLogo.png · 12–135 × 12 pt |
| Icon | icon.png · 38 × 38 pt |
| Strip | strip.png · 375 × 144 pt |
| Thumbnail | thumbnail.png · 60–90 × 90 pt |
| Background (non-poster) | background.png · 343 × 503 pt |
| Poster artwork | artwork.png · 358 × 448 pt |
| Footer | footer.png · 268 × 15 pt |
| Order logo and product images | PNG or JPEG · 300 × 300 px · nontransparent |
| Order statuses | Order Placed · Processing · Ready for Pickup · Picked Up · Out for Delivery · Delivered · Issue · Canceled |
| Shipping values | `carrier` (default "Track Shipment"); `onTheWay` · `outForDelivery` · `delivered`; `shipped` without interim data |
| Verify with Wallet labels | Verify Age · Verify Identity · Continue · Verify (with Apple Wallet); multiline variants |
| Verify button | white text on black; optional light outline; adjustable corner radius |
| Purpose string | one complete sentence, sentence case, active voice, period |
| watchOS layout | 3 rows; strip image cropped; scrolling details screen |
| Developer docs | FinanceKitUI · FinanceKit · PassKit · Wallet Passes · Wallet Orders |
| Videos (link only, not watched) | What's new in Wallet (WWDC26 209) |
| Apple's Related list | Apple Pay · ID Verifier |
| Change log | Jun 8 2026 iOS 27 and Pass Designer; Jan 17 2025 image dimensions; Dec 18 2024 poster event tickets; Sep 12 2023 adding orders; Feb 20 2023 order tracking presentation; Nov 30 2022 carrier name; Sep 14 2022 Verify with Wallet, shipping values, consolidation |

## Visual notes (link-only: from alt texts, captions and the catalog list)
- **Hero:** a sketch of **the Wallet icon** over grid lines, **tinted blue** (alt).
- **Suggestions pair (catalog `wallet-01`, light and dark):** **a Lock Screen banner from a Gym app and a Live Activity for a soccer ticket.**
- **Contrast do/don't pairs (`wallet-02` solid background, `wallet-03` image background; light only):** **✓ white text legible / ✗ label text hard to distinguish.**
- **Event ticket pair (`wallet-04`, light only):** **with a blurred background and thumbnail vs on solid dark blue with a thumbnail.**
- **Logo do/don't (`wallet-05`, light only):** **✓ a flat brown paper-bag icon / ✗ the same with an inner drop shadow.**
- **Primary logo pair (`wallet-06`, light and dark):** **square logo with logo text / rectangular logo with no logo text.**
- **Icon pair (`wallet-07`, light and dark):** **in a Lock Screen banner / on a pass in Wallet.**
- **Background pairs (`wallet-08` blurred vs unblurred, `-09` and `-10` pass layout vs safe areas for a QR code and a barcode layout; light only).**
- **Order tracking pair (`wallet-11`, light and dark):** **order placed vs delivered fulfilment screens.**
- **watchOS layout tabs (`wallet-12`, light and dark):** **Boarding, Coupon, Store, Event, Generic.**
- **Not catalogued:** **the passes hero, the add-to-Wallet screen, Pass Designer, the style illustrations, the strip and thumbnail callouts, the order dashboard, product image, contacts overlay and pickup illustrations, the four Verify with Wallet buttons and the watchOS card images.**
- **Mismatches / notes:**
  1. **"Logo" and "Primary logo" have different sizes and applicability** (**non-semantic vs semantic passes**); **the page says the primary logo is "used exclusively for semantic passes" and the table also lists poster generic passes**, **so poster passes count as semantic here.**
  2. **Poster passes require semantic tags but the page says to include pass fields too**, **for older iOS**; **this doubles the content but avoids blank passes.**
  3. **The Generic style's developer link is titled "Creating a Poster Generic Pass" (the poster style's guide) and the Poster generic section has no link of its own**; **treat the developer documentation, not the link titles, as the source.**
  4. **The order-logo size is in pixels (300 × 300 px) while pass images are in points**; **the page doesn't mention the density for order images.**
  5. **"Thumbnails are square — use rounded corners on your artwork and export as a transparent PNG"**: **the shape is square yet the artwork carries rounded corners**; **the system doesn't round it.** **In contrast the icon: "the system applies rounded corners."**
  6. **The Verify with Wallet buttons are white text on black only**, **with an optional outline for dark backgrounds**; **no colour choice.**
  7. **Passes on watchOS crop strips and white space**, **but the page gives no aspect ratio**.
  8. **`tokens/apple-buttons.css` doesn't cover the Add to Apple Wallet, Track with Apple Wallet or Verify with Wallet buttons**: **they're Apple-provided brand elements.** **The skill contains no Apple artwork.**
- **Catalog:** the script found **12 comparisons** (`wallet-01`…`wallet-12`, see above). Catalog total **295** (was 283); the 283 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **wallet-01** (pair: Lock Screen banner vs Live Activity; rule "Help the system suggest a pass when relevant"), **wallet-02** and **wallet-03** (do/don't: text contrast on solid and image backgrounds), **wallet-04** (pair: event ticket with background vs with thumbnail), **wallet-05** (do/don't: flat logo vs inner drop shadow), **wallet-06** (pair: square vs rectangular primary logo), **wallet-07** (pair: icon in a Lock Screen banner vs on a pass), **wallet-08** (pair: blurred vs unblurred backgrounds), **wallet-09** and **wallet-10** (pairs: poster layout vs safe areas), **wallet-11** (pair: order placed vs delivered) and **wallet-12** (5 watchOS layout tabs). The script reports **12 comparisons** for this page.

## Web translation
**Wallet passes, orders and identity verification are Apple services; the web supports them through files and APIs**: **`.pkpass` files linked from pages or emails with Apple's "Add to Apple Wallet" badge; Apple Pay on the web order details (`ApplePayPaymentOrderDetails`); the "Track with Apple Wallet" button (for web too); the Digital Credentials API for identity verification (browser support varies).** **Other wallets (Google Wallet, Samsung Wallet) have their own pass APIs**; **the principles carry over.** Statements about non-Apple wallets and browser support are background knowledge, not from the page; **check Apple's Add to Apple Wallet guidelines for badge use and don't recreate the badge.**

| HIG rule | Web implementation |
|---|---|
| Offer to add new passes in one tap | **After a purchase/registration, an "Add to Apple Wallet" badge (Apple's official asset) linking to the signed `.pkpass`** (`Content-Type: application/vnd.apple.pkpass`); **also offer other wallets** (Google Wallet) **or a PDF/QR fallback.** |
| Background adding for frequent actions | **No web equivalent**; **use email or notification with the badge link.** |
| Suggest passes created elsewhere; don't ask twice | **On next login, offer "Add to Wallet"; store a dismissal flag** (`onboarding.md`, `settings.md`). |
| Add related passes as a group | **Bundle multiple passes in one `.pkpasses` download** (verify format) **or a single "Add all" action.** |
| Add to Apple Wallet button later; View in Wallet | **Keep the badge wherever pass info appears, including account pages**; **a "View in Wallet" link isn't available on the web** (use "Add" or the pass detail page). |
| Expiration and voided | **Set `expirationDate`, `relevantDate`, `voided` in pass.json and update passes when they change.** |
| Never delete passes without permission | **Pass removal happens only via Wallet or an explicit user setting**; **never programmatically remove.** |
| Relevance and surfacing | **`relevantDate`, `locations`, semantic tags in the pass**; **notifications only when useful** (`managing-notifications.md`). |
| Keep passes current; change messages only for time-critical updates | **Pass web service updates (`webServiceURL`, `authenticationToken`, push updates)**; **`changeMessage` only for gate/time changes**, **never marketing.** |
| Pass design: uncluttered front, header essentials, brand identity, contrast, device-agnostic text | **Design in Pass Designer or your own templates**: **≥ 4.5:1 text contrast on solid and image backgrounds (WCAG 1.4.3)**, **essentials in header fields**, **no text in images**, **wording that works without "swipe" or "slide" instructions** (`color.md`, `accessibility.md`, `writing.md`). |
| Pass image formats and sizes | **PNG @2x/@3x at the listed point sizes** (**logo 50–160 × 50 pt, icon 38 pt, strip 375 × 144 pt…**); **compress; keep downloads small**; **generate assets server-side per pass style.** |
| Order tracking | **Apple Pay on the web: include `ApplePayPaymentOrderDetails` in the payment response**; **show the "Track with Apple Wallet" button on confirmation, status and tracking pages and in emails**; **serve order data through the Wallet Orders web service (immediately after purchase, status updates, tracking links)**; **300 × 300 px logo and product images with opaque backgrounds** (`apple-pay.md`). |
| Order text and statuses | **Brief localised copy; specific status descriptions; Issue/Canceled say why and what to do**; **matching final price** (`writing.md`, `feedback.md`, `field-notes/principles.md` §16). |
| Manage-order link, line items, contact methods | **A universal link/URL that works signed-out or without the app**; **line items with name, price, image**; **contact menu: website, chat, phone, email, support** (`menus.md`, `pull-down-buttons.md`). |
| Identity verification | **Digital Credentials API (`navigator.credentials.get({ digital })`) where supported**; **request only attributes (`age_over_21`), state purpose and retention next to the button, ask at the moment of need, fall back to another method when unsupported** (`id-verifier.md`, `privacy.md`). |
| Verify with Wallet buttons | **Use Apple's button where available**; **otherwise a neutral "Verify age" / "Verify identity" button** (**no Apple logo**); **white on black with an outline on dark surfaces; radius matching your buttons.** |
| Purpose strings | **One complete sentence, sentence case, active voice, ending period** ("Federal law requires this information to verify your identity."). |
| watchOS pass layout | **Assume small displays**: **essential info in the first two rows; strip images cropped**; **test the pass at Watch sizes.** |
| Native-only | **PassKit (`PKPassLibrary`, `PKAddPassesViewController`, `PKIdentityButton`), FinanceKit, Wallet UI, Live Activities for tickets, pass Lock Screen surfacing and Apple Watch cards** are native; **the web uses files, badges and web APIs.** |

Field-note cross-links:
- `field-notes/*`: **no wallet-pass recipe**; nothing conflicts. **`field-notes/principles.md` §16** (calm, factual copy) **fits** status and purpose-string wording.
- `hig/technologies/apple-pay.md` (✓): **Apple's Related page; Apple Pay payments, order details for tracking (web and app)**; `hig/technologies/id-verifier.md` (✓): **Apple's Related page; in-person reading (its "Wallet not yet ingested" line is now updated) and the identity data principles**; `hig/technologies/nfc.md` (✓) and `tap-to-pay-on-iphone.md` (✓): **Wallet cards and passes read by NFC; loyalty cards**; `hig/technologies/app-clips.md` (✓): **passes and payments in on-the-go flows**; `hig/components/system-experiences/live-activities.md` (✓) and `notifications.md` (✓): **Live Activity and Lock Screen banners for passes**; `hig/patterns/managing-notifications.md` (✓): **change messages**; `hig/foundations/color.md` (✓ CRITICAL) and `accessibility.md` (✓): **contrast**; `hig/foundations/app-icons.md` (✓) and `branding.md` (✓): **pass icons and brand**; `hig/foundations/writing.md` (✓): **status text, purpose strings, sentence case**; `hig/foundations/privacy.md` (✓): **identity data, retention**; `hig/patterns/collaboration-and-sharing.md` (✓) and `hig/components/menus/activity-views.md` (✓): **sharing passes**; `hig/technologies/icloud.md` (✓): **passes across devices**; `hig/components/menus/buttons.md` (✓ CRITICAL): **generic buttons (Apple-provided buttons are separate)**.
- Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **New passes are offered at the moment they're created (one tap)**, **with an "Add to Apple Wallet" badge or button available later**, **and declined suggestions aren't repeated.**
- [ ] **Related passes are added or downloaded together.**
- [ ] **Expiration, relevance and voided data are set**; **passes stay current**; **change messages are only for time-critical updates.**
- [ ] **The pass front is uncluttered**, **essentials are in header fields**, **text has sufficient contrast on its background**, **and no essential information sits in images or device-specific elements.**
- [ ] **Images use the right sizes, PNG @2x/@3x, small files; logos have no inner shadows; strip text areas stay clear; poster content stays in the safe area.**
- [ ] **Orders are added easily (Apple Pay order details, Track with Apple Wallet), shown immediately, kept current, with a manage-order link, line items, contact methods, and specific carrier and status values.**
- [ ] **Order logo and product images are 300 × 300 px with opaque backgrounds; text is brief, localised and accurate.**
- [ ] **Identity verification is offered only where supported, at the moment of need, with a clear purpose string, minimal data, a stated retention, and a fallback method.**
- [ ] **Passes are checked at Apple Watch layout (three rows, cropped strip).**

## Related
- Ingested: Apple Pay (✓), ID Verifier (✓), NFC (✓), Tap to Pay on iPhone (✓), App Clips (✓), Live Activities (✓), Notifications (✓), Managing notifications (✓), Color (✓ CRITICAL), Accessibility (✓), App icons (✓), Branding (✓), Writing (✓), Privacy (✓), Collaboration and sharing (✓), Activity views (✓), iCloud (✓), Buttons (✓ CRITICAL), Complications (✓), Watch faces (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: FinanceKitUI · FinanceKit · PassKit (Apple Pay and Wallet) · Wallet Passes · Wallet Orders. External: Add to Apple Wallet guidelines.
- Videos: What's new in Wallet (WWDC26 209).
