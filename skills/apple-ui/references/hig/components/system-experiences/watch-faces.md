# Watch faces
Source: https://developer.apple.com/design/human-interface-guidelines/watch-faces · Section: Components › System experiences · Supported platforms: **watchOS only** ("Not supported in iOS, iPadOS, macOS, tvOS, or visionOS"; only the Watch icon is dark on the platform strip **(from screenshot)**) · Ingested: 2026-09-29 · Apple last updated: **not shown: the page has no Change log** (the table of contents ends with Resources **(from screenshot)**), and no videos. One DocC fetch, read in full. **3 screenshots (hero → the start of Apple's site footer)** were compared with the fetched text and image alt text line by line; they cover the **whole page**. Everything visible matches the fetch. **Read from the fetch only (not in screenshots):** the alt text of the hero and its dark variant. Text that exists only inside pictures is marked **(from screenshot)**. Not marked critical: no token file, checker or gate. The page has **no measurements**; only device-availability facts (Series 4/3 and later). Short page: 4 best practices.

## In one line
A watch face is **the view people pick as their primary view in watchOS**, the heart of the experience: they choose it to see **every time they raise their wrist**, fill it with **favourite complications**, and use **different faces for different activities**. Since **watchOS 7** people can **share configured faces**. For developers this is a **discovery channel**: **share faces that feature your complications** (ideally several), **show a preview of each shared face**, **aim to offer a shareable face for every Apple Watch model** (label which devices each supports) and **fall back gracefully with an alternative configuration if someone picks an incompatible face**. watchOS only; on the web the transferable idea is the **shareable, preconfigured layout with a preview and a compatibility fallback**.

## Rules

### Framing (intro)
- The watch face is **at the heart of the watchOS experience**: people **choose the face they want to see each time they raise their wrist** and **customise it with favourite complications**; they can keep **different faces for different activities** and switch to **the one that fits the current context**.
- **watchOS 7 and later:** people **can share the watch faces they configure.** Example: a **fitness instructor** picks the **Gradient** face, customises the **colour**, adds **favourite health and fitness complications**, and shares it; students who add it to their Watch (or the **Watch app on iPhone**) **get a custom experience without configuring it**.
- You can also **configure a watch face to share from within your app, on your website, or through Messages, Mail or social media**; shareable faces **introduce more people to your complications and your app**.

### Best practices
- **should** **Help people discover your app by sharing watch faces that feature your complications.** Ideally support **several complications** so a shareable face can showcase them and give **a curated experience**. For some faces you can also specify **a system accent colour, images or styles**. If people add your face **without having your app installed**, **the system prompts them to install it**.
- **should** **Display a preview of each watch face you share**: a preview that **highlights the face's advantages** helps people visualise the benefits. Get one by **emailing the face to yourself from the iOS Watch app**; the preview includes **an illustrated device bezel** suitable for **websites and watchOS/iOS apps**; you may **replace the bezel with a high-fidelity hardware bezel** from Apple Design Resources (Product Bezels) **composited onto the preview** (developer: "Sharing an Apple Watch face").
- **should** **Aim to offer shareable faces for all Apple Watch devices.** Some faces need **Series 4 or later**: **California, Chronograph Pro, Gradient, Infograph, Infograph Modular, Meridian, Modular Compact, Solar Dial**; **Explorer** needs **Series 3 (with cellular) or later**. If your configuration uses one of them, **also offer a similar configuration on a face available on Series 3 and earlier**, and **clearly label each shareable face with the devices it supports**.
- **should** **Respond gracefully to an incompatible face.** The system **sends your app an error** when people try to use an incompatible face on **Series 3 or earlier**. Instead of showing it, **immediately offer an alternative configuration that uses a compatible face**; and, next to the previews, **tell people they may receive an alternative face** if theirs isn't compatible.

### Platform considerations
- **watchOS only.** Not supported in iOS, iPadOS, macOS, tvOS, visionOS.

## Specs & values
| Item | Value |
|---|---|
| Sharing available since | **watchOS 7** |
| Faces needing Series 4 or later | California, Chronograph Pro, Gradient, Infograph, Infograph Modular, Meridian, Modular Compact, Solar Dial |
| Face needing Series 3 (with cellular) or later | Explorer |
| Face named as the sharing example | Gradient (with customised colour and health/fitness complications) |
| Where a face can be shared | inside your app · on your website · Messages, Mail, social media |
| Preview | emailed to yourself from the iOS Watch app; includes an **illustrated device bezel**, replaceable with a **high-fidelity hardware bezel** (Apple Design Resources › Product Bezels) |
| Configurable per shared face | complications, and for some faces a **system accent colour, images or styles** |
| Missing app | the system **prompts to install** it when someone adds your face |
| Incompatible face (Series 3 or earlier) | the system sends your app **an error**; respond with an alternative configuration |
| Developer docs | Sharing an Apple Watch face (ClockKit) |
| Apple's Related list | Apple Design Resources — Product Bezels |
| Change log / Videos | none on this page |
| Numbers | none (no sizes or spacings) |

## Visual notes (from screenshots)
- **Hero (screenshot 1):** the red-orange card shows **three watch faces** with **dashed rounded outlines** and monospaced labels underneath **(from screenshot)**:
  - **Left, "Solar Graph":** a face with **"FRI 23"**, a large **"10:09"**, a **sun-position curve** (a bell-shaped arc with a glowing sun dot near its left rise) and **"72° PARTLY CLOUDY"** at the bottom.
  - **Centre, "GMT":** a **square-cased watch in full frame** (dark red bezel with a cream border): a **running-figure complication** at the upper left, an analogue dial with **numerals 1–12**, hour and minute hands and a red seconds hand, a **rotating bezel scale** around the dial (values such as **64**, **72°**, **88**, **123.45 +1.23**, **500**, **10**, **30**, **12**), a **"23 3"** date window and a **target-ring complication** at the lower right.
  - **Right, "Unity Lights":** only part of the face is visible, cropped at the card edge: **"74"**, a **dB** scale, **"22 23 FRI"**, **"15:00"**, **"64"** and **"72°"** on a **light pink-white radiating pattern**.
  The alt text only says a stylized series of Apple Watch faces: **the names and the on-face text are only in the image**.
- **Page chrome (from screenshot):** TOC = Watch faces · Best practices · Platform considerations · Resources (**no Change log**); the platform strip has **only the Watch icon dark**; side navigation shows **System experiences** with **Watch faces** bold (the blue ring is on Top Shelf: the browser's keyboard focus, not page design) and the **Inputs** group beneath (Action button … Remotes).
- **Resources (screenshot 3):** one **Related** link (**Apple Design Resources — Product Bezels**) and one developer link (**Sharing an Apple Watch face — ClockKit**); then Apple's site footer. No video card.
- **Mismatches:** none between text and images.
- **No catalog images:** the page has only the hero; the fetch script reports **0 comparisons**; the catalog is unchanged (**193**, existing IDs unchanged).

## Web translation
Watch faces exist **only on watchOS** and can't be built on the web. The pattern that transfers is **the shareable, pre-configured layout**: a person (or the product) **assembles a curated set of widgets/complications**, others **add it in one step** and **get a working setup without configuring it**. It also teaches **device/plan compatibility labelling** and **graceful fallback**.

| HIG rule | Web implementation |
|---|---|
| Faces are chosen as the primary view and tailored per activity | Offer **saved views/workspaces** ("Focus", "Sales day", "On call"), switchable in one click, optionally **auto-selected by context** (time, device, role); each has its own **widget set** (`complications.md`, `controls.md`). |
| Share a configured face (instructor → students) | **Shareable configuration = a link** (`/layouts/abc123` or a short code) that stores **layout + widget list + accent** server-side; **opening the link previews it, then "Add to my workspace"** applies it in one step; support **copy link, QR, email, social** (`collaboration-and-sharing.md`). |
| Share from your app, website, Messages, Mail, social | Provide a **"Share this layout" action inside the app** and **OG/Twitter meta tags** with the preview image on the shared page (`og:image`), so links **unfurl with a picture** in Messages, Mail and social. |
| Feature your complications to help discovery | Ship **starter layouts** that **showcase your widgets** ("Marketing dashboard", "Support desk") as **onboarding options** (`onboarding.md`: optional, tips over tours) and as **marketing pages**. |
| Support several complications so a curated face works | Provide **multiple widgets per size class** so a shared layout can be **rich and curated** rather than empty. |
| System accent colour, images, styles per face | A shared layout carries **only design tokens the recipient's theme can honour** (accent, density, background image) and **falls back to the recipient's theme** for the rest; never override their light/dark preference. |
| Prompt to install the app if missing | If the layout needs a **missing widget/app/integration or a PWA install**, show **one clear prompt to install/connect** with the reason; don't apply a broken layout silently. |
| Preview of each shared face; device bezel | Show a **rendered preview** (screenshot or live sandbox) inside a **device frame (CSS/SVG bezel)** on the share page; **swap the illustrated frame for a hi-fi photo** only when it helps (`images.md`); **`alt` text describes the layout**; keep previews **lightweight and lazy-loaded**. |
| Offer faces for all devices; label supported devices | Label each layout with **what it needs** (plan, role, integration, screen size: "Requires Pro plan", "Best on ≥ 1024 px"); provide **a lighter variant** for constrained devices (mobile) and **don't hide the fact** that a variant exists. |
| Graceful response to an incompatible face | If the recipient's plan/device **can't run** the layout, **don't show an error page**: **immediately offer the closest compatible layout** (swap the unsupported widgets for equivalent ones), **say what changed** ("2 widgets replaced"), and let them **preview before applying**; log the mismatch server-side (Apple: "the system sends your app an error"). |
| Tell people they may get an alternative | Next to the preview, add a **one-line note**: "If your plan doesn't include X, we'll use Y instead." |
| watchOS only | No web API for watch faces; **don't imitate the Apple Watch face chrome**; the analogue on a smartwatch companion is the **widget layout of the native app**. |

Field-note cross-links:
- `hig/components/system-experiences/complications.md` (✓): the complications that a shared face features (**several per family**, deep links); this page is where its **"shareable watch faces"** advice lands; **consistent**. `hig/getting-started/designing-for-watchos.md` (✓): the face as the most-used surface; `hig/patterns/collaboration-and-sharing.md` (✓): share by link, previews, permissions; `hig/patterns/onboarding.md` (✓): starter configurations and optional setup; `hig/foundations/images.md` (✓): previews and frames.
- `field-notes/*`: no shareable-layout recipe; **no conflict**.
- Not yet ingested (linked from this page): none (Apple Design Resources is an external download).

## Checklist
- [ ] Each shareable layout **features several of your widgets** and opens **already configured**, in **one step**.
- [ ] Every shared layout has a **preview image** (device frame optional) with **alt text**, and **unfurls** with a picture when the link is shared.
- [ ] Layouts are **labelled with what they require** (plan, device, integration) and have a **lighter compatible variant**.
- [ ] An **incompatible** recipient gets **an alternative configuration immediately**, told plainly what changed, **not an error**.
- [ ] A **missing app/integration** triggers **one clear install/connect prompt**.
- [ ] A shared layout carries **tokens, not overrides**: the recipient's **theme and light/dark preference win**.
- [ ] **Different layouts per context** can be saved and switched quickly.

## Related
- Ingested: Complications (✓), Designing for watchOS (✓), Collaboration and sharing (✓), Onboarding (✓), Images (✓), Controls (✓).
- Not yet ingested (linked from this page): none; Apple Design Resources — Product Bezels is external.
- Developer docs: "Sharing an Apple Watch face" (ClockKit).
