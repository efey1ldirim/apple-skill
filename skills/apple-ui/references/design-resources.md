# Apple Design Resources, brand rules and design news
Sources (all read 2026-09-29, text only, link-only ingestion; no files downloaded):
- `developer.apple.com/design/resources/` (Design Resources)
- `developer.apple.com/wallet/add-to-apple-wallet-guidelines/` (Add to Apple Wallet badge)
- `developer.apple.com/apple-pay/marketing/` (Apple Pay marketing)
- `developer.apple.com/tap-to-pay/marketing-guidelines/` (Tap to Pay on iPhone marketing)
- `developer.apple.com/app-store/marketing/guidelines/` (App Store marketing resources and identity guidelines)
- `developer.apple.com/design/whats-new/` (What's new in design) and `developer.apple.com/design/get-started/` (Design pathway)

Everything below is written in this repo's own words; **no Apple artwork, templates, fonts or legal text are stored here.** Numbers are Apple's. Statements marked *(background)* are general knowledge, not from those pages. **This is design guidance, not legal advice.**

## In one line
**Apple Design Resources are downloads for designing Apple-platform apps (UI kits, icon templates, fonts, SF Symbols, Icon Composer, bezels, technology logos and templates); they're licensed for that purpose, so this skill links to them but never redistributes them, and never copies Apple logos, marks or SF Symbols artwork into a web UI.** **When a web page shows an Apple badge or mark (Add to Apple Wallet, Apple Pay, App Store, Sign in with Apple), use only Apple's own artwork or code, at the size and clear space Apple gives, and follow Apple's naming rules.**

## 1. What Design Resources offers (and how this skill relates)
| Resource group | What's there (as listed on the page) | Formats | Use with this skill |
|---|---|---|---|
| **UI kits** | iOS and iPadOS 27, macOS 27, watchOS 26, visionOS 26 (and visionOS 2), tvOS 18 | Figma, Sketch (tvOS and older visionOS: Sketch only) | Look up exact component sizes and colours in Apple's kit when a HIG note is silent; the kits are Apple's files, so **reference, don't copy**. |
| **App icon templates** | iOS and iPadOS app icon template | Figma, Sketch, Photoshop, Illustrator | `hig/foundations/app-icons.md`; web icons still need favicon/PWA sizes (see that note). |
| **Production templates** | tvOS production templates | Sketch, Photoshop | `hig/getting-started/designing-for-tvos.md`, `hig/components/system-experiences/top-shelf.md`. |
| **Technology logos, glyphs, templates** | Add Apple Watch Face, AirPlay, Apple Health icon, Apple Pay design template, ARKit badge and glyph, Camera Control, Games and Game Center, HomeKit icon and glyph, Live Activities, Messages, Sign in with Apple logo and buttons, Siri icons and App Shortcuts template, Tap to Pay on iPhone template, TipKit, Wallet template | PNG, PDF, SVG, Figma, Sketch | The matching technology notes below; these are the **only** legal source for those marks. |
| **Fonts** | SF Pro, SF Compact, SF Mono, New York, SF Arabic, SF Armenian, SF Georgian, SF Hebrew | downloads (dmg) | `hig/foundations/typography.md`; for the web use the CSS system stack unless you hold a licence *(background: check the font licence before embedding on a website)*. |
| **SF Symbols** (version 27) and **Icon Composer** | a large symbol library (over 7,000, nine weights, three scales, animations, localisation); layered Liquid Glass icons made from a single design | macOS apps | `hig/foundations/sf-symbols.md` (**never ship SF Symbols artwork in a web UI; use Lucide, Phosphor or Ionicons**). |
| **Parallax Previewer** | previews parallax layered images for tvOS and visionOS | macOS app | `hig/components/system-experiences/top-shelf.md`. |
| **Product bezels** | current iPhone, iPad, Mac, Apple Watch, Apple TV, Studio Display device frames | Photoshop, PNG; Keynote live-video bezel | Marketing only; see App Store marketing rules (section 5). |
| **Badges and logos** | pointer to Apple's badge and logo pages (Health, Wallet, Music, Apple Pay…) | — | Sections 2–5. |

| Resource | HIG note here |
|---|---|
| Apple Pay template · Apple Pay mark | `hig/technologies/apple-pay.md` |
| Wallet template · Pass Designer | `hig/technologies/wallet.md` |
| Sign in with Apple logo and buttons | `hig/technologies/sign-in-with-apple.md` |
| Siri icons · Siri and App Shortcuts template | `hig/technologies/siri.md`, `hig/components/system-experiences/app-shortcuts.md` |
| Tap to Pay on iPhone template | `hig/technologies/tap-to-pay-on-iphone.md` |
| Live Activities template | `hig/components/system-experiences/live-activities.md` |
| Messages template | `hig/technologies/imessage-apps-and-stickers.md` |
| App Clips design template | `hig/technologies/app-clips.md` |
| AirPlay glyph · ARKit badge · HomeKit icon · Apple Health icon · Game Center icon | `hig/technologies/airplay.md`, `augmented-reality.md`, `homekit.md`, `healthkit.md`, `game-center.md` |
| Camera Control | `hig/inputs/camera-control.md` |
| Add Apple Watch Face glyph | `hig/components/system-experiences/watch-faces.md` |
| TipKit template | (no HIG page here; developer resource) |

## 2. Add to Apple Wallet badge (web pages, email, print)
- **Purpose:** a visual cue for adding passes, tickets, coupons and similar to Wallet. Use it **only next to a Wallet-compatible pass.**
- **In apps** use the system button (`PKAddPassButton`, one-line or two-line style), not the badge.
- **Artwork:** **use Apple's badge files only; never draw your own.** SVG for web and email; EPS for print (with a QR code). Available in **45 locales**.
- **Background:** white or light backgrounds with enough contrast; on very dark backgrounds use the outline version.
- **Clear space:** on screen **0.1 × the badge height**; print has its own rule.
- **Placement:** near the pass; also tell people how to open the page or email on an iPhone or Mac, since they may be on another device.
- **Don'ts:** don't let the badge dominate the layout (it stays secondary); don't obstruct it; don't dim it to show "not chosen"; don't use the Wallet icon alone; don't flip, rotate or animate it; no shadows, glows or reflections; don't reuse Apple website graphics; don't imitate Apple communications.
- **Naming:** "Wallet" or "Apple Wallet" (two words, capital W); the first mention may be "the Wallet app from Apple"; later "Wallet". All-caps headlines may capitalise it. In US body copy, put the registered symbol after "Apple" on first mention.
- **Legal:** don't suggest an association with Apple; add the trademark credit line wherever legal text appears (list only the marks used); the badge itself gets no trademark symbol. **Use of the artwork is governed by a click-through licence tied to your developer membership** (not reproduced here).
- **Web implementation:** an `<a>` linking to the signed `.pkpass` (correct MIME type) *(background)*, using Apple's SVG; see `wallet.md` for the pass side.

## 3. Apple Pay marketing (mark, messaging, offers)
- **Announce availability** in app, on the App Store page, in email (within the first week), on social and in web banners; keep copy short, stress ease, security and privacy, and **show only what customers actually see** (screenshots of the real payment flow). Show the message only to devices that can pay (`canMakePayments`).
- **Encourage use:** keep messaging consistent through the year; an **Apple Pay-only incentive** (discount, free delivery, gift) must apply only to Apple Pay purchases, be explained in your app or site, **and appear as a line item in the payment sheet**. If Apple Pay isn't set up on the device, offer the "Set up Apple Pay" button; if it is, make it quick to choose Apple Pay as the default.
- **Mark rules:** the marketing mark exists **only in white with an outline**; don't alter it or make your own. **Clear space ≥ ¼ of the mark's height**; keep it out of shared borders with other buttons. White or light backgrounds are preferred (dark layouts allowed). Use the mark **only when the message is about Apple Pay** (not general company promotion), and keep it **secondary** to your main message. Don't combine it with the App Store badge in one layout space (separate tiles are fine on a large page).
- **Mark don'ts:** no own version, no changes, no width or aspect-ratio changes, not smaller than other payment marks in the same row, no corner-radius change, **don't translate "Pay"**, no added messages, no effects, no flipping, rotating or animation.
- **Order tracking:** tell customers they can see receipt and tracking in Wallet after an Apple Pay purchase.
- **Naming:** "Apple Pay" is two words with capitals; never use the Apple logo in place of the word "Apple"; keep Apple trademarks in English in every language; typeset trademarks exactly as Apple lists them (e.g. iPhone with a lowercase i even at the start of a sentence; Face ID as two words with capital ID); match your own typography, don't imitate Apple's. US body copy: registered symbol on first mention; **no symbol on Apple's UI assets**.
- **Web note:** the payment button itself is Apple's (see `apple-pay.md` for the button and `sign-in-with-apple.md` for the equivalent brand-element handling).

## 4. Tap to Pay on iPhone marketing
- **Use only Apple-approved marketing assets and templates** from the Tap to Pay on iPhone Marketing Toolkit (banners, in-app banners, social tiles, lifecycle emails, website banners, product pages, animations); templates allow brand colours, fonts, card art and your logo.
- **Access:** integrate with a supported PSP and hold the entitlement; the account holder then gets the regional toolkit by email.
- **Do:** read the Marketing Guide first; use imagery for your region; launch marketing only when the feature is generally available in your app; use the Merchant Education API for in-app education; read the Merchant Incentive Guide before offering incentives; **send press releases, blog posts and investor communications that mention the feature to Apple for approval** (can take weeks).
- **Don't:** make your own videos, illustrations, photos or stock imagery of the feature; draw icons or illustrations of iPhone or the feature; **shorten the name to "Tap to Pay" or put "Apple" in it in marketing** (the HIG allows "Tap to Pay" for a tight in-app button label; marketing keeps the full name).

## 5. App Store marketing and identity (badges, product images, names)
- **Badges:** use one App Store badge per layout or video, **secondary** to the main message; **preferred = black badge** (with its grey border), the white alternative only when it's the sole badge and fits; use the pre-order badge before release, then swap to download. **Never translate "App Store"**; use Apple's localised badges (about 50 locales); don't modify, angle or animate; don't use the standalone Apple logo. **Clear space ¼ of the badge height** (⅒ in very tight banner space); **minimum height 40 px on screen, 10 mm in print**; print may be one colour when black and white aren't used.
- **Product images:** use Apple's bezels **as is**, latest devices your app supports, alone (no competing products next to them); **no reflections, shadows, cropping, tilting, animation or overlaid buttons; copy goes beside, not on, the image.** **Minimum device height 200 px on screen, 25 mm in print.** No 3D re-renders, no illustrations of Apple products (except instructional), no die-cuts, packaging or vehicle decals. Generic device illustrations mustn't show Apple-specific details (Home button, switches, sensor housing).
- **Screen content:** show your app exactly as it runs on the latest OS, with **fictional account data**; status bar with full network, Wi-Fi and battery icons; **one** lock-screen push notification at most; no Home Screen unless it's your widget with no third-party content; no blank screens.
- **Photography and video:** authentic, straight-on shots; accurate colour, shape and size; don't cover or feature the Apple logo; simple transitions (fade, dissolve); **don't use native device sounds or Apple gestures as scene transitions**; disclose shortened sequences.
- **Writing:** focus on your app, not on Apple product features; always include a call to download; name products, not OS versions (say "for iPhone", not "iOS app"); list only compatible products; company name first, then app name, then products; product names singular, correct capitalisation, never all caps; **don't call Apple devices "smartphones" or "tablets"**; don't put an Apple trademark at the start of a URL; **don't translate Apple trademarks** (App Store, Apple Pay, Apple Pencil, Apple TV, Apple Vision Pro, Apple Watch, iMac, iPad, iPhone, iPod touch, MacBook Air/Pro, Siri).
- **Product-name specifics:** Apple Vision Pro is three words, no "the", don't split it across lines, and call apps **spatial computing** apps (not AR/VR/XR/MR); Apple Watch is two words, no "the", and no puns on "watch" or "time"; Apple TV has capital TV; "App Store" is capitalised and takes the article "the" only with App Store and Mac App Store; iMessage has a lowercase i; Apple In-App Purchase is title case with no "the" and has its own artwork (English artwork is provided in multiple languages, black and white; never make localised versions).
- **Legal:** US-only copy puts the trademark symbol after the first body-copy mention (not in headlines, not on Apple's badge art); credit lines wherever legal notes appear (US and international wordings exist); don't imply association with Apple; **artwork is licensed through a click-through agreement tied to your developer membership.**

## 6. What's new in design (through 2026-09-18)
- **Newest items:** new product bezels for iPhone Duo and iPhone 18 (Sep 18 2026); iOS/iPadOS 27 and macOS 27 UI kits for Figma (Sep 17 2026); Apple In-App Purchase rebranded (Sep 17 2026); **Designing for iPhone Duo** (new page), Layout, Branding (brand colour) and SharePlay updated (Sep 9 2026); WWDC-era updates on Jun 8 2026 (Pass Designer, Icon Composer 2 beta, SF Symbols 8 beta, Design principles reintroduced, Snippets new, Siri AI, App Shortcuts app schemas, Menus, Sidebars, Scroll views, App icons, Search fields, Searching, Tab bars, Generative AI, Machine learning, Apple Pay, Wallet).
- **Currency check against this repo:** every guidance page in that list has a note here (`getting-started/designing-for-iphone-duo.md`, `getting-started/design-principles.md`, `components/system-experiences/snippets.md`, etc.). The only titles on that page without a note are older entries that aren't in the HIG's current page list here (In-app purchase, now Apple In-App Purchase; Messages for Business; Navigation bars; Touch Bar); **none needed ingesting.**
- **Use:** re-check the What's new page when Apple ships an OS release, and re-fetch pages whose date is newer than the note's "Apple last updated".

## 7. Design pathway (Get started)
A learning route, not rules: **principles videos** (qualities of great design, design foundations), **the HIG's six areas** (Getting started, Foundations, Patterns, Components, Inputs, Technologies), **Design Resources as the toolbox**, **prototyping** (tutorials and short prototyping talks), **community** (Apple Design Awards, designer Q&As, prototyper profiles) and further pages (videos, workshops, WWDC). This skill's INDEX already mirrors the HIG structure.

## Web translation
| Situation | What to do |
|---|---|
| Need an Apple logo, badge or button on a web page | **Use Apple's official code or artwork for that specific mark** (Sign in with Apple JS/button, Apple Pay button, Add to Apple Wallet SVG, App Store badge generator); never redraw or approximate it; don't put marks inside your design system's icon set. |
| Need generic icons | **Lucide, Phosphor or Ionicons** (`SKILL.md`); not SF Symbols artwork. |
| Need Apple system fonts on the web | **CSS system stack** (`-apple-system`, `system-ui`) *(background)*; embed only if your licence allows. |
| Marketing page mentioning Apple products | **Follow sections 2–5**: names, clear space, no modified product images, trademark credit line, no false association. |
| Mock-ups for designers | **Use Apple's UI kits directly in Figma or Sketch**; export tokens into `tokens/` only through the existing token workflow (Apple values are in the HIG notes; kit values aren't copied here). |
| Contrast, size, spacing questions | **HIG notes first, kits second**; the kits are visual references, not rules. |

## Checklist
- [ ] **Every Apple mark on a page is Apple's own artwork or code**, at the right size and clear space, on a background it's approved for.
- [ ] **Marks stay secondary** to the main message and never share a space with a different Apple badge.
- [ ] **Apple names are typeset and untranslated as Apple lists them**; no OS names or generic device words in marketing copy.
- [ ] **Screens in marketing show the real app with fictional data**; product images are unmodified.
- [ ] **Trademark credit line is in the legal area**; no implied association with Apple.
- [ ] **No Apple templates, fonts, symbol artwork or legal text are committed to this repo.**

## Related
- `hig/foundations/sf-symbols.md`, `hig/foundations/typography.md`, `hig/foundations/app-icons.md`, `hig/foundations/branding.md` (Apple's own guidance on marks and brand).
- `hig/technologies/apple-pay.md`, `wallet.md`, `sign-in-with-apple.md`, `tap-to-pay-on-iphone.md`, `apple-in-app-purchase.md`, `siri.md`.
- Sources are external Apple pages listed at the top; Apple's Trademark List and "Guidelines for Using Apple Trademarks and Copyrights" are the authority for names and credit lines.
