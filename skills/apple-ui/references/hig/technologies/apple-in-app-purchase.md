# Apple In-App Purchase
Source: https://developer.apple.com/design/human-interface-guidelines/apple-in-app-purchase · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data; the platform text: "No additional considerations for iOS, iPadOS, macOS, tvOS, or visionOS", plus a **watchOS** section) · Ingested: 2026-09-29 · Apple last updated: **September 17, 2026** (**rebranded as Apple In-App Purchase** and guidance refined; earlier rows: **September 12, 2023**, artwork and offer-code redemption guidance; **November 3, 2022**, added the rule to show the **total billing price for every in-app purchase** and consolidated the guidance). **Link-only ingestion: one DocC fetch, read in full (166 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **4 content types**, **up to 5 additional family members**, **48 hours** (refund status email), **5 refund reasons**, and example prices ($2.99, $4.99, $9.99, $14.99, $29.99).

## In one line
Apple In-App Purchase sells **digital goods and services inside an app** (premium content, subscriptions, game items), unlike Apple Pay, which is for **physical goods, services such as memberships, bookings and tickets, and donations**. **Let people try the app first; make the store look like your app; use short product names and descriptions; always show the total billing price; show the store only when payments are possible; never modify or copy the system confirmation sheet.** **Family Sharing** should be **mentioned and worded for buyer and family member alike**. **Help and refunds:** a **custom help screen that never blocks the system refund flow, a simple "Refund / Request a Refund" title, contextual purchase details, alternatives without hiding the refund, and no commentary on Apple's refund policy.** **Subscriptions:** **show the benefits at onboarding, offer a range of options and free access (freemium, metered paywall, free trial), prompt at relevant moments and never to current subscribers, state name, duration, price, intro price and renewal price clearly, ask for little at sign-up, disclose how a trial converts to a charge, include a sign-up entry in settings, support offer codes and in-app redemption, and make managing and cancelling easy.** **watchOS** sign-up must show the same terms, in a modal sheet, with options compared compactly. On the web this is **native-only**; **the same patterns apply to web paywalls and checkout, with a different payment provider**.

## Rules

### Framing (intro)
- People use **Apple In-App Purchase to pay for digital goods and services, like premium content and subscriptions, securely inside the app**. You can also **promote and offer items directly through the App Store**.
- **Tip:** **In-App Purchase and Apple Pay are different**: use **In-App Purchase for virtual goods** (premium content, subscriptions to digital content); use **Apple Pay in the app for physical goods** (groceries, clothing, appliances), **services such as club memberships, hotel reservations and event tickets, and donations** (→ Apple Pay).
- **Four content types:**
  - **Consumable:** e.g. lives or gems; **depletes with use** and **can be bought again**.
  - **Non-consumable:** e.g. premium features; **doesn't expire**.
  - **Auto-renewable subscription:** ongoing virtual content, services and premium features that **renews automatically each period until cancelled**.
  - **Non-renewing subscription:** limited-time service or content (e.g. an **in-game battle pass**); **bought again each time to extend access**.
- (An iPad screenshot shows a game's store: a **row of five boosts** (lighthouse repairs, a power surge) above a **row of five maps** with names like World Canals, The Great Lakes, Famous Bays.)
- **Where the rules live:** marketing/business guidance (Apple In-App Purchase, Auto-renewable subscriptions pages); **what you can and can't sell** in the **App Review Guidelines**; developer guidance in **StoreKit**.
- **Note (Advanced Commerce API):** for apps with **exceptionally large, frequently updated catalogs** of one-time purchases or subscription content **from multiple creators**, or **subscriptions with optional add-on content as one in-app purchase**, the **Advanced Commerce API** lets you **manage the catalog directly**.

### Best practices
- **should** **Let people experience the app before buying.** People **invest more after they've enjoyed the app and seen its value**; for auto-renewable subscriptions **consider limited free access**.
- **should** **Design an integrated shopping experience.** People shouldn't feel they **entered a different app** when browsing and buying: **present products and handle transactions in your app's style**.
- **should** **Use simple, succinct product names and descriptions.** **Titles that don't truncate or wrap** and **plain, direct language** help people **find products quickly**.
- **must** **Display the total billing price for every in-app purchase, whatever the type.** People **need the total billing amount for every purchase they consider**.
- **should** **Show the store only when people can pay.** If someone **can't make payments** (e.g. **parental restrictions**), **hide the store or show UI explaining why it isn't available** (developer: `canMakePayments`).
- **must** **Use the default confirmation sheet.** The system shows a **confirmation sheet to prevent accidental purchases**; **don't modify or replicate it**.

#### Supporting Family Sharing
- People can **share purchased content (auto-renewable subscriptions and non-consumable purchases) with up to five additional family members across all their Apple devices**.
- **should** **Mention Family Sharing prominently where people learn about the content.** E.g. **"Family" or "Shareable" in a subscription or item name** and a **reference on the sign-up screen**.
- **should** **Explain the benefits and how to take part.** When you turn Family Sharing on, **people may be notified depending on their settings**: an **existing subscriber whose sharing is off (the default) gets an invitation from Apple to share**, and **a family member can get a notification about content shared with them**.
- **should** **Word in-app messaging so it makes sense to both purchasers and family members.** E.g. welcome a family member viewing shared content for the first time with **"Your family subscription includes…"**.

#### Providing help
- People sometimes need **help with a purchase or a refund**. You can show **custom UI that assists, offers alternatives and helps people start the system refund flow** (developer: `beginRefundRequest(for:in:)`; for subscriptions see *Helping people manage their subscriptions*).
- **should** **Provide help that people can read before requesting a refund.** Besides **a link to the system refund flow**, tailor **help for your app**: **resolve missing purchases, FAQs about your in-app purchases, ways to submit feedback or contact support**. (A screenshot shows a help screen titled **"How can we help?"** with five rows: **Missing a Purchase, Frequently Asked Questions, Request a Refund, Submit Feedback, Contact Us**.)
- **should** **Use a simple title for the refund action, like "Refund" or "Request a Refund".** The system flow already makes clear that the request goes to Apple.
- **should** **Help people find the problem purchase.** For each recent purchase show **context: an image, name, description and the original purchase date**. (A screenshot shows a **Request a Refund** screen with a **"Help" Back button** and a **Purchases** list of three items.)
- **should** **Consider alternative solutions.** E.g. **immediate fulfilment or a conciliatory item** if the item didn't arrive; **always make it clear that a refund can still be requested**.
- **must** **Make it easy to request a refund.** **Don't let help content become a barrier**: **avoid making people scroll or open another screen to reach the refund button**. Choosing the item takes people **straight into the system refund flow**. (Two screenshots: the **request sheet** (title **Request Refund**, close button, item image, name, **$2.99**, purchase date, account, **five reasons: I didn't mean to buy this · A child/minor made purchase without permission · My purchase does not work as expected · Purchase not received · Other**, the line **"You may lose access to refunded items"**, a **Request Refund** button) and the **confirmation** (**"Your request has been submitted."**, an email with a status update **within 48 hours**, a link to Apple's report-a-problem site, a **Done** button).)
- **must not** **Characterise or advise on Apple's refund policies.** **Don't speculate whether people will get the refund**; you may **link to Apple's "Request a refund for apps or content that you bought from Apple" support page**.

### Auto-renewable subscriptions
- **should** **Call attention to subscription benefits during onboarding.** **Show the value at first launch** to teach how the app works and what subscribing gives; include **a strong call to action and a clear summary of terms** (→ Onboarding, *Making signup effortless*). (A screenshot: an onboarding sheet in the lower half of an iPhone with **five benefit pages**, a **Try It Free** button and a **Sign In** button.)
- **should** **Offer a range of content choices, service levels and durations** (flexibility).
- **should** **Consider free trials of content:** **limited free access lets people sample** and **encourages engaged people to sign up**. Three models (tabs):
  - **Freemium app:** an **"Upgrade to Pro"** page with pro features, a close button, **two options: Annual Plan $29.99/year with a 1-week free trial and a "50 % saving over monthly"**, and **Monthly Plan $4.99/month**, the annual plan checked, a **Try It Free** button.
  - **Metered paywall:** **limited free articles per month**; at the limit a **message and a "See Your Options" button**, and a **sign-in option for existing subscribers**.
  - **Free trial:** a **highlighted "Try It Free" button**.
- **should** **Prompt at relevant times** (e.g. **approaching the monthly free limit**) and **make it possible to subscribe from relevant points at any time**.
- **should** **Encourage a new subscription only if the person isn't already a subscriber**, or they may think **their subscription lapsed**. If the **same subscription is offered in several apps or on your website**, **provide a sign-in option** so people don't think they pay several times.

#### Making signup effortless
- A **simple, informative sign-up** helps people act **in the app or on the App Store product page**.
- **should** **Provide clear, distinguishable subscription options.** **Short, self-explanatory names** that differ from each other; **price and duration for each**; with an **introductory price** list **the intro price, its duration and the standard price afterwards**.
- **should** **Ask only for necessary information at sign-up.** **Long sign-up lowers conversion**; **ask for more after they've subscribed**.
- **should** **In a tvOS app, let people sign up or authenticate on another device**: **send a code to another device** instead of asking for input on the TV.
- **must** **Give more information on the in-app sign-up screen.** Besides **links to your Terms of Service and Privacy Policy** in the app and in App Store metadata, the sign-up screen must include:
  - **The subscription name, its duration and the content or services in each period.**
  - **The billing amount, correctly localised** for the territories and currencies where it is sold.
  - **A way for existing subscribers to sign in or restore purchases.**
  - Example (Forest Explorer): **billing totals for monthly, biannual and annual in the most prominent positions**, **breakdowns of the biannual and annual prices in subordinate positions** for comparison, and a **restore purchases** button. (A screenshot: a forest photo (first of three) and **three buttons: Intrepid Pro $14.99/month, Intrepid Pro with Ads $9.99/month, Redeem Code**.)
- **must** **Describe clearly how a free trial works.** **Say that when the trial ends, payment starts automatically for the next period**; state **the trial length and the amount billed afterwards** (Ocean Journal example; the illustration is a **watchOS modal with a "Subscribe Now" button and terms below**).
- **should** **Include a sign-up opportunity in the app's settings** (app and account settings are common places to look).

#### Supporting offer codes
- In **iOS and iPadOS**, **subscription offer codes** give **new, existing and lapsed subscribers free or discounted access** through **online and offline channels** (email, handed out at a store or event, printed on a physical product). Two types:
  - **One-time use code:** **unique, generated in App Store Connect**; redeemed via a **redemption URL (shareable link)**, **in the app (if you support it)** or **in the App Store (prompting to install the app if needed)**. Use when **distribution is small or you must restrict access**.
  - **Custom code:** **one you create (e.g. NEWYEAR, SPRINGSALE)**; redeemed via a **redemption URL** or **in the app (if supported)**. Use for **large campaigns with mass distribution**.
- **should** **Explain offer details clearly** with **a straightforward, succinct description in your marketing materials**.
- **must** **Follow custom-code rules:** **only alphanumeric ASCII characters; no special characters, including Chinese and Arabic characters.**
- **should** **Tell people how to redeem a custom code**: it **can't be redeemed by entering it in App Store account settings**, so say that people can redeem it **through the redemption URL or in your app**.
- **should** **Consider supporting in-app redemption.** The system **provides the redemption screens**, in the app or in the App Store; with the StoreKit API **the only custom UI you need is a control that starts the system flow** (developer: `presentOfferCodeRedeemSheet(from:options:)`, `offerCodeRedemption(options:isPresented:onCompletion:)`). **Natural places:** a **"Redeem Code" button on the paywall, in onboarding or in settings**. (Screenshots: the **sign-up page with the Redeem Code button highlighted** and a **subscription settings screen with app name, level, price, next billing date and three buttons: Manage Subscription, Restore Purchase, Redeem Code**.)
- **The system redemption screens** (illustrations): **a large icon area above "Redeem Code" with an "Enter Code" field and a Terms and Conditions link**, then **a photo area with a small icon overlapping its lower-left corner, the offer name, "1 month free, then $4.99 per month", a "Redeem Offer" button and a Terms link**.
- **should** **Supply an engaging, informative promotional image** (optional); **without it the redemption screens use your app icon**.
- **should** **Let people benefit from unlocked content immediately after redemption.** **Align the post-redemption experience with the new status**: a **welcome experience for new subscribers or a brief tour of newly unlocked features for existing ones**; **be ready to welcome people who subscribe before they open the app for the first time**, and **make any account creation or sign-in smooth** for them.

#### Helping people manage their subscriptions
- **Subscription management in the app** lets people **upgrade, downgrade or cancel without leaving the app**, and gives **a natural place to help with common issues and present alternative offers**.
- **should** **Provide summaries of the customer's subscriptions**, especially **the next renewal date**, **in a settings or account screen near the manage option** (developer: `Product.SubscriptionInfo`).
- **should** **Consider the system-provided subscription-management UI** (StoreKit `showManageSubscriptions(in:)`) for **consistency** and to **manage or cancel without leaving**.
- **should** **Encourage keeping or resubscribing later.** When someone tries to cancel: **remind them what they'd lose, suggest a different plan or offer a discount**; if they cancel anyway, **reach out later with a personalised, discounted offer to resubscribe** (developer: Retention Messaging API, Win-back offers).
- **must** **Always make it easy to cancel an auto-renewable subscription.** **If the manage action is deep in the app or hard to recognise, subscribers feel discouraged or prevented from cancelling.**

### Platform considerations
- **iOS, iPadOS, macOS, tvOS, visionOS:** no additional considerations.

#### watchOS
- **must** **Show the same subscription information** on the watchOS sign-up screen **as in other versions** (the list under *Making signup effortless*), in a form that fits Apple Watch.
- **should** **Clearly describe differences between versions on different devices.** If the watchOS app has **different functionality or a subset of the content**, say so; **state the advantages of watchOS access** **without implying it's identical to other versions**. (Illustration: ✗ **"Unlock 90,000 topographic maps, advanced GPS features, and offline access…"** (may suggest 90,000 maps on the watch) → ✓ **"Use advanced GPS features for trail guidance on Apple Watch. Unlock 90,000 topographic maps for use on iPhone and other devices."**)
- **should** **Consider a modal sheet for the required information.** After the call to action, show **all required items in one scrollable view**, keeping the UI concise; the **default Close button returns to free content in one tap**. **With a custom sign-up view, design a complete, efficient flow with a Close or Cancel button back to free content.**
- **should** **Make options easy to compare on a small screen:** **duration and discount compact and scannable**. Two layouts:
  - **One option per button:** **one-tap start**; **lock each button up with its description** so the relation stays clear while scrolling. (Illustration: **$4.99 per month** and **$29.99 per year** buttons.)
  - **A list with one option per row, then a button** whose **title updates to the chosen option**. (Illustration: **$4.99 billed monthly** / **$29.99 billed yearly** (selected), a **"$29.99 per year"** button.)

## Specs & values
| Item | Value |
|---|---|
| Content types | **consumable · non-consumable · auto-renewable subscription · non-renewing subscription** |
| In-App Purchase vs Apple Pay | virtual goods → In-App Purchase · physical goods, memberships, bookings, tickets, donations → Apple Pay |
| Family Sharing | subscriptions and non-consumables; **up to 5 additional family members**; sharing setting off by default |
| Refund flow | system sheet, **5 reasons**, status email **within 48 hours**; custom help must not add a barrier |
| Refund action title | "Refund" or "Request a Refund" |
| Required on sign-up screen | subscription **name, duration, what is provided**; **localised billing amount**; **sign in / restore purchases**; **Terms of Service and Privacy Policy links** |
| Trial disclosure | trial length + amount billed after it; automatic charge |
| Free-access models | freemium · metered paywall · free trial |
| Offer codes | **one-time use** (App Store Connect-generated, URL / in-app / App Store redemption) · **custom** (alphanumeric ASCII only; URL / in-app; not in App Store settings) |
| Redemption UI | system-provided; custom part = a button (paywall, onboarding, settings) |
| Manage subscriptions | in-app summary (renewal date), system UI, retention messaging, win-back offers, easy cancel |
| watchOS | same info; clarify differences; modal sheet with Close; buttons or list to compare |
| Developer docs | StoreKit **Apple In-App Purchase** · `canMakePayments` · `beginRefundRequest(for:in:)` · `Product.SubscriptionInfo` · `showManageSubscriptions(in:)` · `presentOfferCodeRedeemSheet` · `offerCodeRedemption` · Retention Messaging API · Advanced Commerce API |
| Video (link only, not watched) | What's new in Apple In-App Purchase (WWDC26 210) |
| Apple's Related list | Apple In-App Purchase (developer site) · Offering Subscriptions · App Review Guidelines |
| Change log | Sep 17 2026: rebrand + refined guidance · Sep 12 2023: artwork and offer-code redemption · Nov 3 2022: total billing price rule, single page |

## Visual notes (link-only: from alt text, captions and the catalog list)
- **Hero:** a sketch of an **add (plus) button** for buying extra digital assets, over grid lines, **tinted blue** (alt).
- **Store screenshot (iPad):** a game store: **five boosts** above **five maps**.
- **Help and refund (iPhone):** a **"How can we help?"** list of five rows; a **Request a Refund** screen listing **Power Surge, Les Cheneaux Islands, Cape Cod** with a **"Help" back button**; the **system request sheet and confirmation** (catalog `apple-in-app-purchase-01`).
- **Subscriptions:** an onboarding sheet with **five benefit pages**, **Try It Free** and **Sign In**; **three tabs** (freemium **Upgrade to Pro** with Annual $29.99 + 1-week trial + "50 %" and Monthly $4.99, metered paywall with **See Your Options**, free trial with **Try It Free**) (catalog `-02`); **Forest Explorer** sign-up with three buttons; **Ocean Journal** on Apple Watch with a **Subscribe Now** button.
- **Offer codes:** the sign-up page with **Redeem Code highlighted** and the **subscription settings** screen (catalog `-03`); two **system redemption screens** (catalog `-04`).
- **watchOS (catalog `-05`, `-06`):** description **before/after** clarifying the 90,000 maps, and **buttons vs list** for options.
- **Mismatches / notes:**
  1. **The page was renamed** (from "In-App Purchase" to **"Apple In-App Purchase"**, Sep 2026); **several fetch links still carry the old anchors** (e.g. `#Auto-renewable-subscriptions`).
  2. **Consumable, non-consumable and non-renewing types get no design rules**; the design guidance is about **subscriptions, help and refunds**.
  3. **"Restore purchases" is required on the sign-up screen**, but **the page shows it as a button only in the settings screenshot**, not in the sign-up screenshots.
  4. **The refund sheet screenshot shows a personal-looking account address** (the alt spells out an iCloud address); it is **sample data**, not recorded here.
  5. **Two example prices show different annual/monthly maths** ($29.99/year vs "a saving of 50 % over the monthly plan" at $4.99/month = $59.88/year): the **saving is roughly 50 %**.
  6. **The note that custom codes can't be redeemed in App Store account settings** sits **after** the description of the two code types, and **the redeem-in-App-Store option is listed for one-time codes only**.
- **Catalog:** the script found **6 comparisons** (below). **Not catalogued:** the hero, the store screenshot, the onboarding and sign-up screenshots (single images). Catalog total **231** (was 225); the 225 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **apple-in-app-purchase-01 … 06** (all neutral pairs or sets):
- **-01** (light + dark): **"Make it easy for people to request a refund"**: the **system refund-request sheet** and **its confirmation**.
- **-02** (tabs, light + dark): **"Consider letting people try your content for free"**: **Freemium app**, **Metered paywall**, **Free trial**.
- **-03** (pair): **"Consider supporting offer redemption within your app"**: **Redeem Code on the sign-up page** and **in subscription settings** (the second has light + dark).
- **-04** (pair, light + dark): the **system redemption screens** (enter code; offer confirmation).
- **-05** (pair, light only): **"Clearly describe the differences between versions of your app on different devices"**: **before** (implies 90,000 maps on the watch) vs **after** (clarified).
- **-06** (pair, light only): **"Make subscription options easy to compare on a small screen"**: **one option per button** vs **a list plus an updating button**.
The script reports **6 comparisons** for this page.

## Web translation
**Apple In-App Purchase itself is native-only** (StoreKit, the App Store, the system confirmation and refund flows). **A web checkout uses a different payment provider**, and **what you may sell and how you may steer people between an app and a website is governed by the App Review Guidelines**, not by this page. What transfers is **the commerce UX**: **paywalls, subscription terms, trials, help and refunds, offer codes, and cancellation**. Legal statements below are background knowledge, not from the page; **check the rules for your jurisdictions and stores**.

| HIG rule | Web implementation |
|---|---|
| Virtual goods vs physical goods | On the web **both are ordinary checkout**; keep the **distinction in copy and receipts** (digital vs shipped) and **use Apple Pay on the Web / Payment Request** (→ Apple Pay) for either. |
| Try before buying | **Free tier, metered paywall or trial** first; **don't gate the first-run value**. |
| Integrated shopping experience | **Same design system and tone in the store and checkout** as the rest of the site; **no visual break at payment** (embedded/hosted fields styled to match). |
| Short product names and descriptions | **One-line, non-wrapping plan names** (`text-overflow` avoided; test at 320 px), **plain descriptions** (`writing.md`). |
| Total billing price for every item | **Show the full amount charged (incl. tax where applicable) next to each option**, **the billing period**, and **the renewal price**; **no "from $x" without the total**. |
| Show the store only when payments are possible | **Feature-detect** (`PaymentRequest.canMakePayment()`, Apple Pay `ApplePaySession.canMakePayments()`); **if the region, account or payment method isn't supported**, **hide or explain** instead of a dead button. |
| Default confirmation sheet; don't copy it | **Use the payment provider's hosted/native sheet** (Apple Pay sheet, Payment Request UI, Stripe Checkout) **for the final confirmation**; **don't recreate a fake system sheet**; show **one clear "Pay" or "Start trial" confirmation with the total**. |
| Family Sharing | **Household/team plans**: **name the sharing in the plan** ("Family", "Team"), **explain who can join and how**, **invite by email/link**, **welcome copy that fits invitees** ("Your family plan includes…"). |
| Purchase help and refunds | A **help page reachable before checkout and from the account**: **missing purchase (restore/recheck), FAQ, refund request, feedback, contact**; **the refund button never buried** (no extra screens or scrolling); **title: "Request a refund"**; **show each purchase with image, name, description, date, amount**; **offer alternatives without hiding the refund**; **don't editorialise about the payment provider's or the store's refund policy**; **link the official policy**. |
| Subscription benefits at onboarding | **A benefits step early**, **call to action + terms summary** (`onboarding.md`). |
| Range of options; trials; paywalls | **Plans by level and duration**, **annual vs monthly with the saving stated correctly**, **freemium / metered / trial** models; **prompt near limits**, **not to current subscribers** (**detect the subscription** and **offer "Sign in"** for those who already pay elsewhere (app, website)). |
| Sign-up: clear options, price and duration, intro price | **Option cards/rows**: **name, price, billing period**, **intro price + duration + price after**; **legal terms links (Terms, Privacy)**; **restore = "Sign in"**. |
| Ask only necessary information | **Email + payment first**, the rest **after** subscribing (`entering-data.md`). |
| tvOS: sign up on another device | **Show a short code + URL/QR on the big screen**; **complete on the phone**. |
| Trial disclosure | **"Free for 7 days, then $X per year. Cancel anytime before [date]."** in the **same view as the button**; **reminder email before the trial ends** (**required by consumer rules in many places, background**). |
| Sign-up opportunity in settings | **"Plan" / "Subscription" row in account settings** with an **upgrade action**. |
| Offer codes | **Promo codes**: **single-use (generated, unique) vs reusable (custom, e.g. NEWYEAR)**; **redemption by link (`/redeem?code=…`) and by an in-app/site field**; **alphanumeric ASCII only, case-insensitive, no ambiguous characters (CONV: avoid 0/O, 1/I)**; **explain how to redeem**; **redemption screens show the offer name, terms and price after the offer ("1 month free, then $4.99 per month")**; **welcome new/existing/lapsed subscribers after redeeming**, **including people who redeem before ever signing in**. |
| Promotional image | **An image or brand illustration on the offer page**; **fall back to the logo**. |
| Manage subscriptions in app | **Account page with plan, price, next renewal date, and Manage / Cancel / Change plan**; **use the provider's customer portal (e.g. Stripe Billing Portal) for consistency**; **retention: remind of what they lose, suggest another plan or a discount**, **win-back offer later**; **one-click cancel, no dark patterns** (**click-to-cancel rules exist in several jurisdictions, background**). |
| Easy to cancel | **Cancel reachable in ≤ 2 clicks from the account, plainly labelled**, **confirmation and end date shown**. |
| watchOS: same info, clarify differences, modal sheet, compact compare | **Small-screen (phone) paywalls**: **same terms as desktop**, **state platform differences honestly**, **sheet with Close**, **stacked option buttons or a list + summary button** whose **label updates** ("$29.99 per year"). |
| Native-only | **StoreKit, `SKOverlay`-style App Store surfaces, the system confirmation and refund sheets, Family Sharing infrastructure, offer-code redemption sheets, Retention Messaging and Advanced Commerce APIs** are native; use **Payment Request / Apple Pay on the Web / your provider's SDK and customer portal**. |

Field-note cross-links:
- `field-notes/*`: **no commerce recipe**; nothing conflicts.
- `hig/patterns/onboarding.md` (✓): **benefits at first launch**; `hig/patterns/settings.md` (✓): **a sign-up entry and plan in settings**; `hig/patterns/managing-accounts.md` (✓): **sign-in, restore, subscriptions and accounts**; `hig/patterns/entering-data.md` (✓): **ask only what's necessary**; `hig/patterns/offering-help.md` (✓): **contextual help and support entry points**; `hig/components/presentation/sheets.md` (✓) and `hig/patterns/modality.md` (✓): **modal sign-up sheets with Close**; `hig/getting-started/designing-for-games.md` (✓): **in-app purchases in games**; `hig/foundations/writing.md` (✓): **plain product names and honest terms**; `hig/foundations/privacy.md` (✓): **Terms/Privacy links**; `hig/technologies/app-clips.md` (✓): **Apple Pay and Sign in with Apple for quick payment**; `hig/patterns/loading.md` (✓) and `feedback.md` (✓): **purchase progress and confirmation**.
- Ingested since: Apple Pay (✓ `technologies/apple-pay.md`). Not yet ingested (linked from this page): none.

## Checklist
- [ ] **People can try before paying** (free tier, metered paywall or trial).
- [ ] **The store looks like the rest of the product**; **names and descriptions are short and plain**.
- [ ] **Every option shows the total billing price and period**; **intro offers show intro price, duration and the price after**.
- [ ] **The store is hidden or explained** when **payments aren't possible**.
- [ ] **Confirmation uses the provider's sheet** (never a fake system sheet).
- [ ] **Sign-up shows plan name, duration, what's included, localised price, Terms/Privacy links and a sign-in/restore path**; **asks only necessary details**.
- [ ] **Trial copy states length and the amount charged afterwards** (**automatic renewal stated**).
- [ ] **A plan/sign-up entry exists in settings**; **current subscribers aren't prompted to subscribe**.
- [ ] **Promo codes** are **ASCII-alphanumeric**, **have a redeem link and a field**, **explain how to redeem**, and **welcome the redeemer** (even before first sign-in).
- [ ] **Refunds**: **help page before refund**, **refund button one click away**, **contextual purchase details**, **alternatives don't hide the refund**, **no commentary on the provider's policy**.
- [ ] **Subscription management**: **renewal date shown, manage/cancel easy, retention offers optional and respectful**.
- [ ] **Household/team plans** are **named and explained**, **with wording for invitees**.
- [ ] **Small screens**: **the same terms**, **options compact and comparable**, **Close/back to free content in one tap**.

## Related
- Ingested: Onboarding (✓), Settings (✓), Managing accounts (✓), Entering data (✓), Offering help (✓), Sheets (✓), Modality (✓), Designing for games (✓), Writing (✓), Privacy (✓), App Clips (✓), Loading (✓), Feedback (✓ CRITICAL).
- Ingested since: Apple Pay (✓ `technologies/apple-pay.md`). Not yet ingested (linked from this page): none.
- Developer docs: StoreKit "Apple In-App Purchase"; Advanced Commerce API; Retention Messaging API. External: Apple In-App Purchase and Offering Subscriptions (developer site), App Review Guidelines, Apple Support refund article.
- Videos: What's new in Apple In-App Purchase (WWDC26 210).
