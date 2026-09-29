# App Clips
Source: https://developer.apple.com/design/human-interface-guidelines/app-clips · Section: Technologies · Supported platforms: **iOS and iPadOS** (page data; the platform section says "No additional considerations for iOS or iPadOS. **Not supported in macOS, tvOS, visionOS, or watchOS**") · Ingested: 2026-09-29 · Apple last updated: **June 9, 2025** (updated guidance to include **demo App Clips**; earlier row: **May 2, 2023**, guidance consolidated into one page). **Link-only ingestion: one DocC fetch, read in full (245 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the downloaded catalog images. Not marked critical: no token file, checker or gate. Numbers on the page: **8 hours** of notifications, **30 / 56 characters** (card title / subtitle), **1800 × 1200 px** card image, **3/4 in (1.9 cm)** and **256 × 256 px** minimum code sizes, **35 mm** NFC tag, **1.37 in (3.48 cm)** NFC-integrated code, **1/6 of a cylinder (60°)**, **20:1 / 10:1** distance-to-size ratios, **600 ppi / 300 dpi**, **Delta E 2.5**, **3 code colours**, **2 code variants** (scan-only, NFC-integrated), **2 designs** (badge, no logo), **iOS 17**.

## In one line
An **App Clip** is a **lightweight, instantly available slice of an app or game** for **one task on the go, or a demo**, reached by **App Clip Codes, NFC tags, QR codes, Maps, Siri Suggestions, Smart App Banners, Safari App Clip cards and shared links in Messages**. **Let people finish the task or the demo without installing, keep it small, linear and native (no web views, tab bars, settings, splash screens, ads or marketing), open on the most relevant screen, make it shareable, support Apple Pay and Sign in with Apple, don't force an account, never rely on stored data, and make the full app feel familiar after install** (no second login). **Recommend the full app politely, at a natural pause, with `SKOverlay`.** **Notifications last 8 hours by default, only task-related and user-initiated.** **The card** needs a **1800 × 1200 image (no text, photo or graphic), a title ≤ 30 and a subtitle ≤ 56 characters, and one verb: View, Play or Open.** **App Clip Codes must be the Apple-generated design, never altered, upright, unobstructed, large enough, well spaced and well printed.** The web analogue: **instant, install-free, linear task pages / PWAs launched by QR or NFC, with Apple Pay on the Web, passkeys, and QR-code print rules**.

## Rules

### Framing (intro)
- App Clips deliver **part of an app or game without a full App Store download**. They **solve a task fast or contain a demo of the full app**, **stay on the device for a limited time** and **preserve privacy**.
- **Launch routes:** at a **physical location** by scanning an **App Clip Code, NFC tag or QR code** (the **App Clip Code is usually best**: recognisable design, trusted as a fast, secure way); on the device from **location-based suggestions people permit** (**Siri Suggestions, Maps**), **Smart App Banners on websites, App Clip cards in Safari**, and **links shared in Messages**. **Since iOS 17**, an app can include **links and App Clip previews** that launch **another app's App Clip**.
- (Two screenshots show a food-truck example: the **App Clip card** at the bottom of the Lock Screen, then the **App Clip** listing donuts to order.)
- **When to create one (in-the-moment tasks over finite time):** **rent a bike** (tap/scan a code); **fast advance coffee orders** (Smart App Banner or Safari card, shareable via Messages); **food truck poster** with a code scanned by Camera; **restaurant payment** from Maps, Siri Suggestions or holding the device near a code or NFC tag at the table; **museum labels** with codes launching **AR content or audio commentary**.
- **When to create one (try before buying):** a **game demo with tutorial and first level**; a **fitness app with a free workout and guided meditation**; a **text editor** where people **create and save a document**. Focus on letting people **experience and understand** the app.

### Designing your App Clip
- **must** **Let people complete a task or the demo in the App Clip.** **Don't require installing the full app** to finish the demo, the task or a game level.
- **should** **Focus on essential features.** Interactions are **quick and focused**; keep **only what the task needs**, **reserve advanced features for the app**; a demo should show **the essentials that convey the app's feel**.
- **must not** **Use App Clips solely for marketing.** They must **give real value**; **no advertising services or products and no ads inside the App Clip**.
- **should** **Avoid web views.** App Clips use **native components for an app-quality experience**; if you only have web content, **offer a quick link to the website instead of an App Clip**.
- **should** **Design a linear, easy, focused UI.** **No tab bars, complex navigation or settings**; **minimum screens and entry forms**; **strip extra information**.
- **should** **On launch, show the most relevant part.** **Skip unnecessary steps** and go **straight to what fits the context**.
- **must** **Be usable immediately.** **Bundle all required assets, no splash screens, never make people wait on launch.**
- **should** **Keep the App Clip small.** **Smaller launches faster**, especially on **limited bandwidth**; **reduce code, remove unused assets, avoid downloading extra data** (it breaks the sense of immediacy).
- **should** **Make it shareable.** **Links to an App Clip shared in Messages launch it inside Messages**; **offer sharing links to specific points** and **encourage sharing**.
- **should** **Make paying easy.** Card entry is long and error-prone; **consider Apple Pay** for **express checkout** and **shipping details without typing** (→ Apple Pay).
- **should** **Avoid requiring an account first.** Account creation takes time and effort: **don't require one, or ask after the task**; if the value truly needs one, **limit the information** and **offer Sign in with Apple** (→ Sign in with Apple).
- **should** **Give a familiar, focused experience in the full app.** **Installing the full app replaces the App Clip**, and **later invocations launch the app**. Keep it **focused and familiar** for App Clip users: **no extra steps, e.g. don't ask them to log in again** when moving from the App Clip to the app.

#### Preserving privacy
- The system **limits App Clips to protect privacy**: e.g. **no background operations** (developer: "Choosing the right functionality for your App Clip").
- **should** **Limit the data you store and handle yourself.** If you must store people's data (e.g. login information), **store it securely**; **don't rely on previously stored data being there**, because **the system may remove the App Clip between launches and delete its data**; **store login information securely off the device**.
- **should** **Consider Sign in with Apple** (retains login information **off the device**, preserves privacy).
- **should** **Offer a secure, privacy-respecting payment**, e.g. **Apple Pay**.

#### Showcasing your app
- People **don't manage App Clips** and they **don't appear on the Home Screen**; the system **removes an App Clip after a period of inactivity**. Because apps keep people engaged, **the system helps them find and install the full app**:
  - On the **App Clip card**, people can **launch the App Clip or visit the app's App Store page**.
  - On **first launch** the system shows an **app banner at the top** that also links to the App Store page.
  - You can show **an overlay in the App Clip** that lets people **download the full app from within the App Clip**.
- **should not** **Compromise the experience by asking people to install the full app.** For an **on-the-go** App Clip, **ask whether the card and system banner are enough incentive**; for a **demo**, **let people experience the whole demo first**.
- **should** **Pick the right moment to recommend the app.** **After a task completes or at a natural pause**, show an **`SKOverlay`** to start the download **in context** (developer: "Recommending your app to App Clip users").
- **should** **Recommend the app politely.** **Don't ask repeatedly or interrupt a task**; **push notifications aren't a good way to ask for an install**; **clearly communicate the app's additional features**.

#### Limiting notifications
- App Clips can **schedule and receive notifications for up to 8 hours after launch**, enough to follow up on most tasks.
- **should** **Ask for extended notification permission only if truly needed.** If the App Clip's functionality **spans more than a day**, **explicitly request permission** (e.g. a **car-rental** App Clip reminding people to **return the car**).
- **should** **Keep notifications focused.** **No purely promotional notifications; only in response to an explicit user action**; if the task ends inside the App Clip, **you may need none**.
- **should** **Use notifications to help finish the task**, tied to the task (e.g. **scheduled-delivery** updates for a food-ordering App Clip) (developer: "Enabling notifications in App Clips").

#### Creating App Clips for businesses
- A **platform provider serving several businesses** can create **many App Clip experiences in App Store Connect powered by one App Clip**; people see **the individual business's or location's branding, not the provider's**.
- **should** **Use consistent branding.** On the business's card **the business brand is front and centre**; **tone down your own branding** and **make the business's clearly visible**.
- **should** **Consider multiple businesses.** One App Clip may serve **many businesses or several locations** and people may use it for **more than one at a time**: **the UI must handle that**, e.g. **switch between recent businesses or locations** and **verify the person's location at launch** (developer: "Configuring App Clip experiences").

### Creating content for an App Clip card
- The **system-provided card is the first interaction**, so its **images and copy** matter.
- **should** **Be informative.** The **image clearly conveys the features, tasks or content**.
- **should** **Prefer photography and graphics.** **Avoid a screenshot of your UI** (it rarely shows the purpose); use **an image that conveys the App Clip's value, or a photo of the business location or point of interest**.
- **should** **Avoid text in the image.** It **isn't localisable**, **can be hard to read** and **makes the card less attractive**.
- **must** **Meet the image requirements:** **1800 × 1200 px PNG or JPEG, no transparency.**
- **should** **Use concise copy.** **A title and a subtitle are both required**; the title **≤ 30 characters**, the subtitle **≤ 56 characters**; express the purpose **at a glance**.
- **should** **Pick the action-button verb that fits: View, Play or Open.** **View** for **media or informational/educational content**; **Play** for **games**; **Open** for **everything else**. (An image shows two cards side by side: a game card with **Play**, an app card with **Open**.)

### App Clip Codes
- App Clip Codes are **the best way to be discovered**: **recognisable design, fast and secure launch**.
- Two designs: the **badge design with the App Clip logo** and, **when space is tight, a design without it**. Codes use a **default colour pair** or **custom foreground and background colours**. **Always use the Apple-provided designs and follow the size, placement and printing rules** (developer: "Creating App Clip Codes").

#### Interacting with App Clip Codes
- **Two variants:** **scan-only** and **NFC-integrated**.
- **Scan-only:** a **camera icon in the centre** tells people to use **the Camera app or the Code Scanner in Control Center**. **NFC-integrated:** an **iPhone icon in the centre** tells people to **hold the device near the code** or use the **NFC Tag Reader in Control Center**; **it can also be scanned with Camera or Code Scanner**. (An illustration labels the **centre icon, visual code and App Clip logo**.)
- Examples: a **coffee shop menu** (hold the device near the code to order a drink), a **gas-station pump** with an NFC-integrated code (launch and pay for fuel), a **game creator's event handout** (scan for a playable demo). (An illustration shows two people at a café table with a placard code, one scanning it.)

#### Displaying App Clip Codes
- **Choose the variant by access:** **NFC-integrated if people can physically reach the code** (restaurant tabletop, near a register, in a storefront window, on signage, on a gift card or coupon); **scan-only if the place is unreachable or digital** (posters and printed ads, signage behind a counter or out of reach, digital displays, emails, social images). **Place it where scanning is reliable either way.**
- **should** **Include the App Clip logo when space allows.** It signals that the code launches an App Clip. **Use the version without the logo** when **clear-space rules can't be met**, on **disposable paper or plastic items**, or on **items tied to gambling or drinking** (playing cards, poker chips, bar coasters). **The logo is always part of the badge design (below the code); never use the logo on its own.**
- **must** **Place the code on flat or cylindrical surfaces only.** On a **cylinder** (e.g. a scooter handlebar) **the code's width must not exceed one-sixth of the circumference (60°)**. (An illustration divides a circle into six equal segments, one holding the code.)
- **should** **Keep the code as flat as possible.** **Avoid deformable materials that fold or crumple (paper, plastic, fabric)**; on **a bag, flexible box or other deformable object** use **a rigid card attached to it**; **stickers must adhere well to flat surfaces**.
- **should** **Place the code where scanning is reliable:** **enough light** for a scan-only code, **no need to scan from a wide angle**.
- **must not** **Obstruct the code:** **no text, logos or images over it; never animate or dim it.**
- **must** **Display it upright:** **don't rotate it or tilt the centre glyph.** (Three examples: ✓ upright; ✗ rotated **90° left**; ✗ rotated **135° right**.)
- **must** **Not make it too small** (table below). (Two images show the badge and no-logo designs at the **3/4 inch (1.9 cm) minimum diameter**.)
- **should** **Size by distance:** a **distance-to-size ratio of no more than 20:1**, **preferably 10:1** for reliable scanning. Example: scanned from **40 in (101 cm)** the code needs **at least 4 in (10.16 cm)** diameter.
- **should** **Make it at least as large as any nearby QR code or other scannable item.** (An illustration shows an App Clip Code and a QR code at the same size.)
- **must** **Leave clear space:** **at least the distance between the centre glyph and the circular code** on all sides; **more space next to another App Clip Code or machine-readable code**. (An illustration shows red guides around a badge code and a no-logo code.)

#### Using clear messaging
- **Add clear messaging** on how to launch the App Clip, **especially with the no-logo design** (e.g. a **call to action beside a code in an email or on a poster**), in **simple, clear** words. (A café placard shows the code with "Place your order. Hold your iPhone near the menu to place your food order.")
- **Scan-only** calls to action: "Scan to [what people can do]" · "Scan using the camera on your iPhone or iPad to [what people can do]".
- **NFC-integrated:** "Scan to [what people can do]" · "Hold your iPhone near the [object name] to launch an App Clip that [what a person can do]". (→ NFC)
- **must** **Follow Apple's trademark guidelines** when naming the App Clip and codes: **no Apple trademarks in your app name or images; always Title Case for "App Clips" and "App Clip Code"**, etc. (see Legal requirements).

#### Customizing your App Clip Code
- Create codes with **App Store Connect** or the **App Clip Code Generator** command-line tool. (An image shows four badges in different colours: two badge designs, two without the logo.)
- **must** **Always use the generated code.** **Never make your own design or modify a generated one**: **no filters, colour changes, glows, shadows, gradients or reflections**; **when scaling, keep the aspect ratio and scale every attribute (e.g. stroke widths)**. (Three ✗ examples: **changed aspect ratio**, **colour gradient instead of a solid background**, **drop shadow**.)
- **must** **Choose colours with enough contrast.** **Each code has 3 colours: foreground, background and a third one generated from them.** Both tools offer **default colour pairs** or **custom foreground/background**; **a poor combination produces no code**, and the tools **suggest a different foreground for a custom background**. (An image labels **background, foreground and generated colours**.)

### Printing guidelines
- Print for **reliable scanning over a long time**, either yourself or with a **professional printing service** (Apple names RR Donnelley). **Always test printed codes** for scanning **from a variety of angles** before distributing.
- **should** **Use high-quality, non-textured materials:** **matte finishes**; **no shine, gloss, reflective or holographic overlays, thin laminates or thin materials**; **matte laminate** if laminating; **UV-resistant materials or coatings outdoors**; professionally **flexographic printing**; on a desktop printer **inkjet**.
- **should** **Use high resolution:** when rasterising the SVG **at least 600 ppi**, print **at a minimum 300 dpi**; **level and calibrate the printer**, avoid **poor colour channel alignment, wrong gamma, artefacts, elliptical or distorted codes**; with **receipt printers** print **as close to the paper's maximum bounds as possible**.
- **should** **Convert sRGB SVG to CMYK correctly:** the tools produce **SVG files in the sRGB colour space**; convert with a **relative colorimetric (media-relative) intent**, using the **"Generic CMYK ICC profile" on CMYK printers** or **"Gracol 2013 ICC profile" on CMYKOV printers**, allowing **CIELab Delta E 2.5**.
- **should** **On grayscale-only printers, generate grayscale codes** (colour codes printed in grayscale may work less reliably).
- **must** **For NFC-integrated codes use Type 5 NFC tags**, **at least 35 mm in diameter or equivalent size**.
- **should** **For large batches, test the whole workflow and verify the prints:** **small, cheap test runs**; print on **templates with padded regions showing the encoded invocation URL and SVG filename** for checking. **With many codes you can't tell which encodes which URL by looking**, so keep **a file mapping each SVG to its invocation URL** and use **careful file management, versioning and change tracking** (developer: "Preparing multiple App Clip Codes for production").

#### Verifying your printer's calibration
- Apple offers **printer calibration test sheets**: **one shows a text box for each default colour pair** (print at the right scale and verify quality); **one shows two grayscale bars**: **if any grays are light or missing, the printer needs calibration or isn't suitable**.

### Legal requirements
- **Only the Apple-provided codes made in App Store Connect or with the Generator, following these rules, are approved.** Codes are approved **to show that an App Clip is available**; **Apple may change the design at its discretion**.
- **If the App Clip is no longer active, stop displaying its code.**
- **Don't use the App Clip Code (Apple logo, App Clip mark, code designs) in your company or product name**, and **don't seek copyright or trademark registration** for the codes or their elements.
- **Don't use the codes** in a way likely to **harm Apple's or App Clips' goodwill, value or reputation**, **infringe third parties' rights**, or **cause confusion about the source** of products or services. **Apple keeps all rights.**
- **Don't add a symbol to generated codes.**
- **Don't translate Apple trademarks**: they **stay in English even inside other-language text**; with Apple's approval, the legal notice and credit lines (not the trademarks) may be translated for materials **distributed outside the U.S.**

### Platform considerations
- **iOS, iPadOS:** no additional considerations. **macOS, tvOS, visionOS, watchOS:** not supported.

## Specs & values
| Item | Value |
|---|---|
| Card image | **1800 × 1200 px**, PNG or JPEG, **no transparency**; photo/graphic; no text |
| Card title / subtitle | **≤ 30 / ≤ 56 characters** (both required) |
| Card action verb | **View** (media, informational/educational) · **Play** (games) · **Open** (everything else) |
| Notifications | **up to 8 hours after launch**; longer only with explicit permission (needed for functionality > 1 day) |
| Code variants | **scan-only** (camera icon in centre) · **NFC-integrated** (iPhone icon; tag ≥ **35 mm**, **Type 5**) |
| Code designs | **badge (App Clip logo below the code)** · **without logo** |
| Code colours | **3**: foreground, background, generated third |
| Minimum size, printed | diameter **3/4 in (1.9 cm)** |
| Minimum size, digital | **256 × 256 px**, PNG or SVG |
| Minimum size, NFC-integrated | tag **≥ 35 mm**; printed code with a 35 mm tag **≥ 1.37 in (3.48 cm)** |
| Distance to size | ratio **≤ 20:1**, prefer **10:1** (40 in / 101 cm → ≥ 4 in / 10.16 cm) |
| Near a QR code | App Clip Code **≥ the QR code's size** |
| Clear space | **≥ the gap between centre glyph and circular code**, more beside other codes |
| Cylindrical surface | code width **≤ 1/6 of the circumference (60°)** |
| Orientation | **upright** only (✗ 90° left, ✗ 135° right) |
| Print | **matte**, non-textured, UV-resistant outdoors; **600 ppi** raster / **300 dpi** print; sRGB → CMYK, **relative colorimetric**, **Generic CMYK** or **Gracol 2013** profile, **Delta E 2.5**; grayscale printer → grayscale code |
| Test aids | calibration sheets (colour pairs, grayscale bars) |
| iOS 17 | apps can include links and previews that launch another app's App Clip |
| Callable APIs | `SKOverlay` (recommend the app) |
| Developer docs | App Clips (+ "Choosing the right functionality", "Recommending your app to App Clip users", "Enabling notifications in App Clips", "Configuring App Clip experiences", "Creating App Clip Codes", "…with the App Clip Code Generator", "…with App Store Connect", "Preparing multiple App Clip Codes for production") · App Store Connect |
| Videos (links only, not watched) | What's new in App Clips (WWDC21 10012) · Build light and fast App Clips (WWDC21 10013) |
| Apple's Related list | Apple Pay · Sign in with Apple · Guidelines for Using Apple Trademarks and Copyrights |
| Change log | Jun 9 2025: demo App Clips added · May 2 2023: consolidated into one page |

## Visual notes (link-only: from alt text, captions and catalog images)
- **Hero:** a sketch of **an app icon surrounded by a dashed line** (an App Clip), over grid lines, **tinted blue** (alt).
- **Two-screenshot pair (catalog `app-clips-01`):** left, a **Lock Screen (Tue April 1, 9:41, four widgets: temperature range, a world clock, a 50 % weather ring, a time widget) with the App Clip card at the bottom**: a **wide illustrated photo of a teal food truck on a flowery hillside**, a **round close (×) button at the top right of the picture**, the title **"Food Truck"** and subtitle **"Find food truck locations and shop for sweet treats"**, a blue **"Open"** pill, and a footer **"Powered by Food Truck (4+)"** with **App Store ›** on the right. Right, the **App Clip itself** listing donuts to order.
- **Card pair:** two App Clip cards, **one for a game with "Play"**, **one for an app with "Open"**.
- **Code designs (catalog `app-clips-02`):** the **badge design (code with the App Clip logo below)** and the **design without the logo**.
- **Code anatomy:** a **scan-only code** with callouts for the **centre icon, visual code and App Clip logo**; the catalog codes are **circular, made of concentric dashed rings in three tones (white, light lavender, and a dark indigo background)** with **an iPhone glyph in a white disc at the centre** (NFC-integrated look).
- **Placement examples (catalog `app-clips-03`):** ✓ **upright code**; ✗ **rotated 90° left**; ✗ **rotated 135° right**.
- **Size examples (catalog `app-clips-04`):** two codes with the **3/4 in (1.9 cm)** minimum diameter labelled, **badge and no-logo**.
- **Customising (catalog `app-clips-05`):** three ✗ examples: **a code squashed into a tall oval (aspect ratio changed)**, **a code over a blue-to-purple gradient with grey and black rings (colour treatment)**, **a code with a drop shadow**.
- **Other illustrations:** a **café table scene with a placard code**, a **circle split into six segments with one holding a code (cylindrical placement)**, a **code beside a same-size QR code with red guides**, a **row of two codes with red clear-space guides**, **four coloured badges**, a **badge with callouts for background, foreground and generated colours**, a **clear-messaging placard**.
- **Mismatches / notes:**
  1. **The page mentions "App Clip Codes" as best but also lists QR codes and NFC tags as launch routes**; NFC is treated in its own page (→ NFC).
  2. **"NFC-integrated" minimum sizes appear twice** with different quantities (**35 mm tag**; **1.37 in / 3.48 cm** printed code), so **the printed diameter depends on the tag**.
  3. **"CMYKOV"** appears in the print-profile rule (source wording).
  4. **"Relative calorimetric"** is spelled with an extra r in the source (a typo for *colorimetric*).
  5. **The intro says App Clips remain on the device for a limited time**, but **the page never says how long**.
  6. **Two "Legal requirements" statements overlap** (approved use; don't use the marks in your name) with the trademark rule in *Using clear messaging*; the page repeats the trademark link in three places.
- **Catalog:** the script found **5 comparisons**: 2 neutral groups and 3 rule groups with ✓/✗ (below). **Not catalogued:** the hero, the illustrations listed above (single images). Catalog total **225** (was 220); the 220 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **app-clips-01 … app-clips-05**:
- **app-clips-01** (neutral pair, light + dark for the card): the **App Clip card on the Lock Screen and the App Clip after launch**.
- **app-clips-02** (neutral pair, light only): the **badge App Clip Code (with logo)** vs the **code without the logo**.
- **app-clips-03** (do/don't): **"Display the App Clip Code in an upright position"**: ✓ upright · ✗ rotated 90° left · ✗ rotated 135° right.
- **app-clips-04** (neutral pair, light + dark): **"Don't create App Clip Codes that are too small"**: the **badge** and **no-logo** codes at the **3/4 in minimum**.
- **app-clips-05** (don'ts): **"Always use the generated App Clip Code"**: ✗ changed **aspect ratio** · ✗ **gradient background** · ✗ **drop shadow**.
The script reports **5 comparisons** for this page.

## Web translation
Web pages **can't be App Clips**, but the **web is the natural counterpart**: an **instant, install-free, one-task page** reached by **QR code, NFC tag, link or a Safari banner**, with a **prompt to install the app or PWA** afterwards. The design rules carry over directly; the **App Clip Code itself is Apple-only** (a web page can't create one), while **QR-code and print rules** are a close match. Statements about browser behaviour are background knowledge, not from the page; **verify per browser**.

| HIG rule | Web implementation |
|---|---|
| Complete the task or demo without installing | **Full flow in the browser** (no "download the app to continue" wall); a **demo** page/level runs entirely in the page. |
| Essentials only; no marketing or ads | **One task per page**; **no ads, no upsell banners inside the task flow**; advanced features behind **"Open the app"**. |
| Avoid web views (native components) | On the web this is **the point**; **when a native App Clip exists, link to it** (a **Smart App Banner** `<meta name="apple-itunes-app" content="app-id=…, app-clip-bundle-id=…">` on Safari), otherwise **serve a fast native-feeling web page**. |
| Linear, focused UI (no tab bars, no settings) | **Single-column, step-by-step layout**, **no global nav, no settings**, minimal forms (`entering-data.md`, `onboarding.md`). |
| Most relevant screen on launch; no splash; immediate | **Deep-link the invocation URL to the exact step** (`/order?table=12`); **no splash or loading screens** (`launching.md`, `loading.md`); **inline critical CSS, small JS, preload assets**; **performance budget (CONV: LCP < 2.5 s on 4G, < 100 KB critical path)**. |
| Small size | **Small bundle** (route-level code splitting, no unused assets, no extra data fetches before first interaction), **works on poor bandwidth** (`Save-Data` respect). |
| Shareable | **Every state has a shareable URL**; **Web Share API** (`navigator.share`) and **Open Graph / Twitter card meta** so a link pasted in Messages shows a **1200 × 630-style card image, title and subtitle** (CONV; the App Clip card's own image is **1800 × 1200**). |
| Easy payment (Apple Pay) | **Apple Pay on the Web / Payment Request API** (✓ `technologies/apple-pay.md`), **Google Pay**, **saved cards via autofill**; **shipping address from the payment sheet** (`apple-pay.md`). |
| No forced account; ask after the task; Sign in with Apple | **Guest checkout**; **create an account after completion**; **passkeys / Sign in with Apple JS / Google Identity** for the account step; **collect the minimum fields** (`managing-accounts.md`, `privacy.md`). |
| Familiar full app; no second login | **Handoff continuity**: keep **the same account/session via a shared login token or Universal Link + Sign in with Apple** so the **app opens in the same state**, **no re-login**; Universal Links / Smart App Banner open the app directly at the same route. |
| Don't rely on stored data; store login off-device | **Treat `localStorage` and cookies as disposable** (Safari's **ITP** clears script-writable storage after 7 days without interaction, background knowledge); **keep the source of truth on the server** and **use HttpOnly, Secure, SameSite cookies** for sessions. |
| Recommend the app politely (`SKOverlay`) | **A single, dismissible "Get the app" prompt after task completion or at a natural pause**; **no repeated nags, no interstitial before the task, no notifications asking for installs**; remember dismissal (`localStorage`, CONV: don't show again for 30 days); **Smart App Banner** or **`beforeinstallprompt` (Chromium PWA)** triggered **after** the task. |
| Notifications: ≤ 8 h, only if needed, task-related, user-initiated | **Web Push permission only after the person opts in on the relevant step** ("Notify me when it's ready"), **task-related payloads**, **no promotions**, **expire the subscription/notification after the task (TTL)** (`notifications.md`, `managing-notifications.md`). |
| Businesses: consistent branding, multiple locations | **Theme the page from the invocation context** (business logo/colour from the URL/tenant); **let people switch recent businesses/locations** and **confirm the location** (Geolocation only with a user gesture). |
| Card content (image, title, subtitle, verb) | **Open Graph / share preview:** `og:image` **photo or graphic, no text (not localisable)**, `og:title` **≤ 30 characters** and `og:description` **≤ 56 characters (CONV, borrowing the App Clip limits)**, and the **call-to-action verb**: **View** (media/info), **Play** (games), **Open** (else) on the launch button. |
| App Clip Codes (Apple-only) | **Not creatable on the web.** For web launches use **QR codes** (see below) and **Web NFC** (`NDEFReader`, Chrome/Android) or **NFC tags with URLs**; **for an App Clip, generate the code in App Store Connect and place the SVG unmodified**. |
| Never alter, upright, unobstructed, no shadows/gradients | **When you render an Apple-generated App Clip Code SVG on a page:** **use the file as is** (`<img src>`, **no CSS filters, opacity, `mix-blend-mode`, gradients, drop shadows, rotation or non-uniform scaling; `aspect-ratio` locked; `image-rendering` untouched**), **don't overlay text or animate it**, **keep it ≥ 256 × 256 px (PNG/SVG)**, and **keep a quiet zone equal to the centre-glyph gap**. |
| Size by distance (20:1 / 10:1); ≥ nearby QR | **CSS sizing for screens shown at a distance** (kiosk, signage): **diameter ≥ distance ÷ 10 (preferred) and ≥ distance ÷ 20 (maximum)**; **same size as a neighbouring QR code**. **Generic QR-code rules on web:** **high contrast (dark on light), quiet zone ≥ 4 modules, error correction M–Q, don't style dots beyond what still scans, test on real devices**. |
| Clear call to action next to a code | **Text beside every QR/code on a page or email**: **"Scan to [action]"** / **"Hold your iPhone near the [object] to [action]"**; **never a code without a caption** (`writing.md`; sentence case or Apple's Title Case per the capitalisation table for headlines). |
| Trademark: Title Case "App Clips" / "App Clip Code", no translation, no Apple trademarks in names | **Copy-deck rules:** "App Clip", "App Clips", "App Clip Code" **in Title Case**, **never translated**, **never inside your product or company name**, **don't use the Apple logo or App Clip mark yourself**; link to **Apple's trademark guidelines**. |
| Stop showing codes for an inactive App Clip | **Retire the invocation URL and remove the code from pages/emails/print inventory**; **redirect the URL** to the web page or app page. |
| Printing (matte, ppi/dpi, colour, tags) | **QR/code print specs:** **matte, non-reflective, UV-resistant outdoors; ≥ 300 dpi**; **convert sRGB → CMYK with a relative colorimetric intent and verify a test print**; **grayscale printers get grayscale codes**; **keep an SVG ↔ URL mapping file** and **print URL labels on proofs**. **Web NFC / NFC tags: Type 5 for App Clip Codes; NTAG216 etc. for plain URLs are background knowledge, not from the page.** |
| Native-only | **`SKOverlay`, App Clip invocation and launch experiences, App Store Connect App Clip cards, the App Clip Code Generator, `NSUserActivity` invocation URLs, notification (ephemeral) permission (8 h)** are native iOS/iPadOS; on the web use **URLs, Smart App Banner, Open Graph, Web Share, Payment Request, Web Push, Web NFC**. |

Field-note cross-links:
- `field-notes/*`: **no instant-launch or QR recipe**; nothing conflicts. **Web note:** the skill's **capitalisation table** (Title Case for buttons, action labels; sentence case for descriptions) applies to the **card verbs (View / Play / Open)**, which are **Title Case single words** in both.
- `hig/patterns/launching.md` (✓): **launch straight to content, no splash, restore state**; `hig/patterns/loading.md` (✓): **immediate content and progress**; `hig/patterns/onboarding.md` (✓): **minimal onboarding, ask for accounts later**; `hig/patterns/managing-accounts.md` (✓) and `hig/foundations/privacy.md` (✓): **sign-in and data minimisation**; `hig/patterns/entering-data.md` (✓): **fewer forms and inputs**; `hig/components/system-experiences/notifications.md` (✓) and `hig/patterns/managing-notifications.md` (✓): **task-related, consented notifications**; `hig/foundations/branding.md` (✓): **branding of the business vs the platform**; `hig/foundations/writing.md` (✓): **copy and capitalisation**; `hig/patterns/collaboration-and-sharing.md` (✓): **shareable links** and **Messages**; `hig/components/content/web-views.md` (✓): **avoid web views** in native; `hig/technologies/airplay.md` (✓): same **trademark-wording** structure as this page.
- Ingested since: Apple Pay (✓ `technologies/apple-pay.md`), NFC (✓ `technologies/nfc.md`), Sign in with Apple (✓ `technologies/sign-in-with-apple.md`). Not yet ingested (linked from this page): none in the HIG.

## Checklist
- [ ] **The task or demo completes without installing**; **no ads and no marketing-only content** in the flow.
- [ ] **One linear flow, no tab bar/settings, minimal forms**; **deep link goes to the right step**; **no splash**; **small and fast** (budget stated).
- [ ] **Every meaningful state has a shareable URL and a good share preview** (**photo/graphic, no text, short title and subtitle**).
- [ ] **Apple Pay / wallet and passkeys or Sign in with Apple** offered; **account created after the task**, **no second login** in the full app.
- [ ] **No reliance on stored data**; sessions live on the server; **login info is never stored insecurely**.
- [ ] **App recommendation**: **once, after completion or a natural pause**, dismissible; **not via push**, **not repeatedly**, **not mid-task**.
- [ ] **Notifications**: **opt-in, task-related, no promotions**, **short-lived**.
- [ ] **Multi-business**: **branding from context**, **switching and location verification** handled.
- [ ] **Card verb**: **View / Play / Open** chosen correctly.
- [ ] **App Clip Code (if shown)**: **generated by Apple's tools, unmodified**, **upright, unobstructed, not animated/dimmed**, **≥ 256 px digital / 3/4 in printed**, **quiet zone**, **not smaller than a nearby QR code**, **caption beside it** ("Scan to…" / "Hold your iPhone near…").
- [ ] **Printed codes**: **matte, ≥ 300 dpi, CMYK-converted with a relative colorimetric intent, tested** from several angles; **NFC-integrated: Type 5 tag ≥ 35 mm**.
- [ ] **Legal/copy**: **"App Clip(s)" and "App Clip Code" in Title Case, untranslated, not in your names**; **inactive App Clips lose their codes**.

## Related
- Ingested: Launching (✓), Loading (✓), Onboarding (✓), Managing accounts (✓), Privacy (✓), Entering data (✓), Notifications (✓), Managing notifications (✓), Branding (✓), Writing (✓), Collaboration and sharing (✓), Web views (✓), AirPlay (✓).
- Ingested since: Apple Pay (✓ `technologies/apple-pay.md`), NFC (✓ `technologies/nfc.md`), Sign in with Apple (✓ `technologies/sign-in-with-apple.md`). Not yet ingested (linked from this page): none in the HIG.
- Developer docs: App Clips (and its guides, see Specs) · App Store Connect · `SKOverlay`. External: App Clip resources (Code Generator, printer calibration test sheets), RR Donnelley, Guidelines for Using Apple Trademarks and Copyrights.
- Videos: What's new in App Clips (WWDC21 10012), Build light and fast App Clips (WWDC21 10013).
