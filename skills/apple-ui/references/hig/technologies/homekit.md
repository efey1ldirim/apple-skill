# HomeKit
Source: https://developer.apple.com/design/human-interface-guidelines/homekit · Section: Technologies · Supported platforms: **iOS, iPadOS, macOS, tvOS, visionOS, watchOS** (page data and platform text: "No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS"; the intro says **iOS, tvOS or watchOS apps** integrate with HomeKit and the **Home app is in iOS**) · Ingested: 2026-09-29 · Apple last updated: **May 2, 2023** (the only Change log row: guidance consolidated into one page; same date in the page's data). **Link-only ingestion: one DocC fetch, read in full (243 lines); no screenshots were supplied**, so nothing is marked "(from screenshot)"; the Visual notes come from alt texts, captions and the catalog list. Not marked critical: no token file, checker or gate. Numbers on the page: **3 naming rules**, **1/1 hierarchy root ("home")**, **6 object levels** (home, room, zone, accessory, service, characteristic) plus service group, action, scene and automation, **17 Siri example phrases**, **3 icon colours**, **6 trademark rules**.

## In one line
**HomeKit** lets people **securely control connected home accessories with Siri or the Home app**. An app can **help set up, name and organise accessories, offer fine-grained control and custom accessory features, teach hands-free automations and provide support.** **Use HomeKit's object model and vocabulary exactly (home → rooms, zones, accessories → services → characteristics; service groups, actions, scenes, automations), show related HomeKit details in an accessory detail view, expect several homes, and never duplicate home settings: defer to the Home app.** **Setup:** **use the system setup flow first, give a purpose string for Home data access, no account or personal information, honour the HomeKit choice (no forced cross-platform setup), custom post-setup experience afterwards.** **Names:** **suggest good service names, enforce the rules (alphanumeric, spaces, apostrophes; start and end alphanumeric; no emoji), keep room and zone words out of service names.** **Siri:** **show example commands after setup, teach richer phrases later, suggest zones and service groups, use shortcuts only for functionality HomeKit lacks.** **Custom functionality:** **say what to do in your app vs the Home app, defer on database conflicts, ask before writing to HomeKit.** **Cameras:** **never cover the image, show a microphone button only for two-way audio.** **Branding:** **the HomeKit icon and Apple Home app icon: Apple artwork only, non-interactive, consistent with other technology icons, not in text; name beside the icon; app emphasised over HomeKit; correct spelling, no descriptor or agent use of "HomeKit".** On the web: **no HomeKit API**; **the model and naming rules guide any smart-home dashboard (Matter/Thread ecosystems, MQTT, Home Assistant-style UIs) and voice-control copy**.

## Rules

### Framing (intro)
- **HomeKit lets people securely control connected accessories in their homes using Siri or the Home app on iPhone, iPad, Apple Watch and Mac.** **In iOS the Home app also lets people manage and configure accessories.**
- An **iOS, tvOS or watchOS app** can integrate with HomeKit (and the Home app) to provide **a custom or accessory-specific experience**. You can:
  - **Help people set up, name and organise accessories.**
  - **Allow fine-grained accessory configuration and control.**
  - **Provide access to custom accessory features.**
  - **Show people how to create powerful, hands-free automations.**
  - **Provide support.**
- (Developer: HomeKit. **MFi licensees** get guidance on **naming and messaging for accessory packaging** on the MFi portal.)

### Terminology and layout
- **HomeKit models the home as a hierarchy of objects with a defined vocabulary**; **the Home app uses it to give intuitive control by voice, app and automation.** **It's crucial to use HomeKit's terminology and object model** so people understand and home automation feels approachable.
- **The home object is the root** of a hierarchy containing rooms, accessories, zones and more; **with several homes, each is the root of its own hierarchy.**
- **should** **Acknowledge the hierarchical model.** Even if the app doesn't organise by rooms and zones in its UI, **reference the HomeKit model when helping people set up or control accessories**: people need to know **where accessories are** to use Siri and HomePod (e.g. **"Siri, turn on the lights upstairs"**, **"It's dark in here"**) (→ Siri interactions).
- **should** **Make an accessory's related HomeKit details easy to find.** If the app is organised by accessory, **don't hide the accessory's zone or room in a hard-to-find settings screen**; **put it in an accessory detail view.**
- **should** **Recognise that people can have more than one home.** Even if the app doesn't support multiple homes, **consider showing the relevant home in an accessory detail view.**
- **must not** **Present duplicate home settings.** If your app organises a home differently, **don't ask people to set up all or part of their home again or show a duplicate settings view**: **always defer to the settings made in the Home app and find an intuitive way to show those details.**

#### Homes
- **Home** = **a physical home, office or other location of relevance**; **one person may have several.**

#### Rooms
- **Room** = **a physical room in a home**. **Rooms have no attributes like size or location**; **they're names that mean something to people (Bedroom, Office).** Assigning accessories to a room enables voice commands such as **"Siri, turn on all the lights except the bedroom"** or **"Siri, turn on the kitchen and hallway lights."**

#### Accessories, services, and characteristics
- **Accessory** = **a physical, connected home accessory (ceiling fan, lamp, lock, camera).** **Category** = **a type of accessory (thermostat, fan, light)**; usually **assigned by the manufacturer**, but **your app can help when needed** (e.g. **a switch wired to a fan or lamp must share that accessory's category**).
- **Service** = **a controllable feature of an accessory (the switch on a connected light)**; **some accessories have several** (**garage door: light and door separately**; **outlet: top and bottom separately**). **Apps don't use the word "service" in the UI**: **use descriptive names such as "garage door opener" and "ceiling fan light"**. **With Siri people say the service name, not the accessory name** (→ Help people choose useful names).
- **Characteristic** = **a controllable attribute of a service** (a fan service's **speed**, a light service's **brightness**). **Apps don't use the word "characteristic" in the UI**: **use "speed", "brightness"**.
- **Service group** = **a group of services controlled as a unit** (e.g. **a floor lamp and two table lamps in one corner named "reading lamps"**, controllable independently of other lights in the room).

#### Actions and scenes
- **Action** = **changing a service's characteristic** (fan speed, light brightness); **people and automations can start actions.**
- **Scene** = **a group of actions across one or more services in one or more accessories** (e.g. **"Movie Time": lower shades, dim living-room lights**; **"Good Morning": lights on, shades up, coffee maker on**).
- **Tip:** **the HomeKit API says "action set"; the UI must always say "scene".**

#### Automations
- **Automations make accessories react** to **location changes, a time of day, another accessory turning on or off, or a sensor detecting something** (e.g. **house lights at sunset or when people arrive home**).

#### Zones
- **Zone** = **an area containing several rooms (upstairs, downstairs)**; **optional**, but **lets people control many accessories at once** (e.g. **"Siri, turn off all the lights downstairs"**).

### Setup
- **should** **Use the system-provided setup flow.** It's **faster than traditional flows**: **name the accessory, join networks, pair with HomeKit, assign room and service categories, choose favourites in a few steps.** You **concentrate on promoting the custom functionality that makes your accessory unique** (developer: `performAccessorySetup(using:completionHandler:)`).
- **must** **Provide context for why you need access to Home data** with **a purpose string**, e.g. **"Lets you control this accessory with the Apple Home app and Siri across your Apple devices."**
- **must not** **Require an account or personal information.** **Defer to HomeKit for what you need.** If the app has **services that need an account (cloud)**, **make account setup optional and offer it after the initial HomeKit setup.**
- **should** **Honour people's setup choices.** If people choose HomeKit, **don't force setup on other platforms during the HomeKit flow**: **cross-platform setup delays use of the accessory and adds confusing control options.**
- **should** **Think carefully about custom setup.** **Always begin with the system flow**; **then, once basic functions work, offer a custom post-setup experience** that **highlights unique features** (e.g. **a light maker's app builds personalised light scenes from key colours scanned from photos**).

#### Help people choose useful names
- **should** **Suggest service names that suit your accessory.** If the app **detects a suboptimal name for Siri voice control, recommend alternatives that work well**; **never suggest company names or model numbers as service names.**
- **must** **Check that names follow HomeKit naming rules** if the app lets people rename services (**the system setup flow checks the original names**). **If a name breaks a rule, briefly explain and suggest alternatives.** **The rules:**
  - **Use only alphanumeric, space and apostrophe characters.**
  - **Start and end with an alphabetic or numeric character.**
  - **Don't include emoji.**
| Example service name | |
|---|---|
| Reading lamp | ✓ |
| 📚 lamp | ✗ (emoji) |
| 2nd garage door | ✓ |
| #2 garage door | ✗ (starts with a symbol) |
- **should** **Help people avoid location information in names.** "Kitchen light" is natural, but **the room name inside the service name can lead to unpredictable voice results**; **detect duplicated location words and help fix them**, e.g. **a post-setup step that removes the room or zone from a name and encourages assigning the accessory to that room or zone instead.**

### Siri interactions
- HomeKit supports **hands-free voice control** of **accessories, services and zones**; help people use Siri **quickly and efficiently.**
- **should** **Present example voice commands during setup**: **right after setup completes, use the service name the person chose in a few example phrases and encourage them to try them.**
- **should** **After setup, teach more complex commands** in **useful places across the app**; **people may not know the range of natural phrases** with Siri and HomePod (e.g. in a scene detail view: **You can say "Hey Siri, set 'Movie Time.'"**).
- **Siri understands more than names:** it recognises **home, room, zone, service, scene names** and **uses accessory category and characteristic** to identify a service (e.g. **"brighter"** or **"dim"** refers to a service with a brightness characteristic). Examples of what it resolves:
| Phrase | Siri understands |
|---|---|
| "Turn on the floor lamp" | Service (floor lamp) |
| "Show me the entryway camera" | Service (entryway camera) |
| "Turn on the light" | Accessory category (light) |
| "Turn off the living room light" | Room (living room) + category (light) |
| "Make the living room a little bit brighter" | Room + category (implied) + brightness characteristic (brighter) |
| "Turn on the recessed lights" | Service group (recessed lights) |
| "Turn off the lights upstairs" | Category (lights) + zone (upstairs) |
| "Dim the lights in the bedroom and nursery" | Category + brightness (dim) + rooms (bedroom, nursery) |
| "Run Good night" | Scene (Good night) |
| "Is someone in the living room?" | Category (implied) + occupancy detection characteristic (implied) |
| "Is my security system tripped?" | Category (security system) |
| "Did I leave the garage door open?" | Category (garage door) + open characteristic |
| "Did I forget to turn off the lights in the Tahoe House?" | Category (lights) + home (Tahoe House) |
| "It's dark in here" | Current home (here) + current room (via HomePod) + category (implied) |
- **should** **Recommend zones and service groups when they make sense for your accessory**: e.g. **for a light, switch or thermostat suggest a zone "upstairs" or a service group "media center"** to support **"Siri, turn off the upstairs lights"** or **"Siri, activate the media center."**
- **should** **Offer shortcuts only for accessory-specific functionality HomeKit doesn't support.** HomeKit already handles **natural language control with no extra configuration**, so **duplicating it confuses**; **shortcuts suit complementary functions (e.g. "Order AC filters")**.
- **should** **If the app supports both HomeKit and shortcuts, explain the difference** between the two kinds of voice control; **never encourage a shortcut for a scene or action HomeKit already supports.**

### Custom functionality
- The app is a place to **show the unique functionality of your accessory** (e.g. **a colour-light app helps people create HomeKit scenes from colours imported from photos**).
- **should** **Be clear about what people can do in your app and when to use the Home app.** E.g. **an app that supports only lights can encourage a "Movie Time" scene that also closes shades and turns on the TV**: **first guide people to a scene containing only your accessory's actions (dimming), then suggest opening the Home app to add their HomeKit-compatible shades and TV** (→ *Referring to HomeKit* for naming the Home app).
- **must** **Defer to HomeKit if your database differs.** **Reflect changes made in the Home app or other HomeKit apps automatically.** **If you must ask people to manage conflicts, present them visually so the choice is clear**, e.g. **show both names side by side when the service name was changed in the Home app.**
- **must** **Ask permission before updating the HomeKit database from your app.** **Don't surprise people by changing the Home app**; **get permission or an indication of intent before writing**, and **never overwrite HomeKit settings without explicit direction.**

#### Cameras
- The app can show **still images or streaming video from a connected HomeKit IP camera.**
- **must not** **Block camera images.** **You may supplement with useful features (an alert about interesting activity), but don't cover portions of the image with other content.**
- **should** **Show a microphone button only if the camera supports bidirectional audio**: **a non-functioning button wastes space and confuses.**

### Using HomeKit icons
- **Use the HomeKit icon in setup or instructional communications about HomeKit.** **You may also use the Apple Home app icon when referencing the Apple Home app, or in a button that opens the Home app's App Store product page.** (The Apple Home app icon: **a stylised house with a chimney on the right side of its roof, in graduated shades of orange**.)
- **must** **Use only Apple-provided icons.** **Don't create your own HomeKit or Home app icon or mimic Apple's**; **download from Apple's Resources page.**

#### Styles
- **Black icon:** **on white or light backgrounds when other technology icons are black.** **White icon:** **on black or dark backgrounds when others are white.** **Custom colour icon:** **when other technology icons use the same colour** (illustrated in blue). (Each is **an outlined HomeKit icon**.)
- **should** **Position the icon consistently with other technology icons**: **if others sit inside shapes, treat HomeKit the same way.** (An illustration: **three app icons in a row under the text "Integrate with": the HomeKit icon in a circle above "Apple HomeKit", and two dashed squares in circles above "Technology"**.)
- **must not** **Use the icon or the name HomeKit in custom interactive elements or buttons** (**noninteractive use only**); **the Apple Home app icon may open the app's product page in the App Store.** (✗ examples: **the icon in a circular button with a chrome look**; **a button titled "HomeKit" with a custom gradient background**.)
- **must not** **Use the icon within text or as a replacement for the word "HomeKit."** (Examples of "Lights set with HomeKit.": ✓ **icon first in the line, then the text**; ✗ **icon after the word "with"**; ✗ **icon at the end of the line "Lights set with"**.)
- **should** **Pair the icon with the name "HomeKit" correctly**: **name below or beside the icon if other technologies are shown that way**, **in the same font as your layout.** (Illustrations: **a "Setup" view with rows: HomeKit icon + "HomeKit", other rows with dashed squares + "Name"** — caption "Using the icon and name in setup or instructional content"; **an "Apps" grid where the first button is the Apple Home app icon above "Apple Home"** — caption "Using the icon and name referencing the Apple Home app".)

### Referring to HomeKit
- **should** **Emphasise your app over HomeKit**: **references to HomeKit or Apple Home are less prominent than your app name or main identity.**
- **must** **Follow Apple's trademark guidelines.** **Apple trademarks can't appear in your app name or images**; in text **use Apple product names exactly as in the Apple Trademark List**:
  - **Singular only; never possessive.**
  - **Don't translate Apple, Apple Home, HomeKit or other Apple trademarks.**
  - **No category descriptors** (**"iPad", not "tablet"**).
  - **Don't imply any sponsorship, partnership or endorsement from Apple.**
  - **Attribute Apple, HomeKit and other Apple trademarks with the correct credit lines wherever legal information appears in your app.**
  - **Refer to Apple devices and operating systems only in technical specifications or compatibility descriptions.**
  ✓ "Use HomeKit to turn on your lights from your iPhone or iPad." · ✗ "Use HomeKit to turn on your lights from your iOS devices."

#### Referencing HomeKit and the Home app
- **must** **Capitalise correctly:** **HomeKit = one word, capital H and K**; **Apple Home = two words, capital A and H**; **all uppercase only if the layout uses only all-caps designations.**
- **must not** **Use "HomeKit" as a descriptor**: **use "works with", "use", "supports", "compatible".** ✓ "[Brand] lightbulbs work with HomeKit." · ✓ "HomeKit-enabled thermostat." · ✓ "You can use HomeKit with [App Name]." · ✗ "HomeKit lightbulbs."
- **must not** **Suggest that HomeKit is performing an action.** ✓ "Back door is unlocked with HomeKit." · ✗ "HomeKit unlocked the back door."
- **may** **Use "Apple" with "HomeKit"** ✓ "Compatible with Apple HomeKit."
- **may** **Use the name "HomeKit" for setup, configuration and instructions** ✓ "Open HomeKit settings."
- **must** **Use the app name "Apple Home" whenever referring specifically to the app**: **the first mention in body copy uses the full name "Apple Home"; later mentions may say "the Home app".** ✓ "Open the Apple Home app." · ✓ "Open the Apple Home app. Your accessory and room will now appear in the Home app." · ✗ "Open Home."

### Platform considerations
- **iOS, iPadOS, macOS, tvOS, visionOS, watchOS:** no additional considerations.

## Specs & values
| Item | Value |
|---|---|
| Object hierarchy | **home** (root) → **rooms**, **zones**, **accessories** → **services** → **characteristics**; **service groups**, **actions**, **scenes**, **automations** |
| UI vocabulary | say **scene** (not "action set"); never show "service" or "characteristic" to people |
| Naming rules | alphanumeric, space, apostrophe only · start and end alphanumeric · no emoji |
| Names to avoid | company names, model numbers, room/zone words inside service names |
| Setup | system flow first; purpose string for Home data; no account or personal info; honour HomeKit choice; custom post-setup |
| Purpose string example | "Lets you control this accessory with the Apple Home app and Siri across your Apple devices." |
| Camera | never overlay the image; microphone button only with two-way audio |
| Icon | Apple's artwork; colour: black on light, white on dark, custom to match other technology icons; non-interactive; not in text; name beside it; app more prominent |
| Wording | HomeKit (one word), Apple Home (two words); "works with / use / supports / compatible"; never "HomeKit does X"; first mention "Apple Home" |
| Trademark | singular, not possessive, not translated, no descriptors, no endorsement claims, credit lines, devices only in specs |
| Developer docs | **HomeKit** · `performAccessorySetup(using:completionHandler:)` · MFi portal |
| Video (link only, not watched) | Add support for Matter in your smart home app (WWDC21 10298) |
| Apple's Related list | Apple Design Resources · Guidelines for Using Apple Trademarks and Copyrights |
| Change log | May 2 2023: consolidated into one page |

## Visual notes (link-only: from alt text, captions and the catalog list)
- **Hero:** a sketch of the **HomeKit icon** over grid lines, **tinted blue** (alt).
- **Icons:** **an outlined HomeKit icon in black, white and blue** (custom colour, with a dark variant); the **Apple Home app icon** (a house with a chimney on the right, **graduated orange**).
- **Icon placement illustrations:** a row of **three app icons under "Integrate with"** (HomeKit in a circle above **"Apple HomeKit"**, two dashed squares above **"Technology"**); a **"Setup" list** (HomeKit icon + "HomeKit", dashed squares + "Name", disclosure buttons); an **"Apps" grid** (Apple Home icon above "Apple Home", three dashed squares above "App Name").
- **✗ examples (catalog `homekit-01`):** **a HomeKit icon inside a circular chrome button**; **a button labelled "HomeKit" with a custom gradient.**
- **Text examples (catalog `homekit-02`):** ✓ **icon first, then "Lights set with HomeKit."**; ✗ **icon after "with"**; ✗ **icon at the end of the line.**
- **Pairing examples (catalog `homekit-03`):** **the setup list** and **the Apple Home apps grid**.
- **Wording tables:** **four small tables with ✓/✗ text examples** (text, not images).
- **Mismatches / notes:**
  1. **The intro names iOS, tvOS and watchOS apps** and says **the Home app is in iOS**, while **the platform section lists all six with "no additional considerations"** and **the abstract mentions Mac**.
  2. **"Custom color HomeKit icon" is the catalog heading** for **three unrelated rules** (non-interactive use, icons in text, pairing) because **the script labels each pair with the nearest preceding heading** (the page's later rules sit under that heading's level in the data).
  3. **The page tells apps never to say "service" or "characteristic"** yet **teaches those exact words**; **they are developer terms**.
  4. **"Action set" (API) vs "scene" (UI)** is called out; **the page doesn't list other API-vs-UI term differences**.
  5. **The Siri table's blank first cells** (continuation rows) **belong to the previous phrase**.
  6. **Naming rule "#2 garage door" (✗) and "2nd garage door" (✓)** show that **a leading symbol is invalid but a digit is fine**.
  7. **The Change log's only row is May 2023**; **the only video (Matter, WWDC21)** is **older than the log**.
- **Catalog:** the script found **3 comparisons** (below). **Not catalogued:** the hero, the icon-style images, the placement illustrations (single images) and the text tables. Catalog total **261** (was 258); the 258 existing IDs are unchanged (headings diffed).

## Visual examples (catalog)
`visual-examples` gains **homekit-01 … homekit-03**:
- **homekit-01** (✗ ✗, light only): **"Use the HomeKit icon noninteractively"**: ✗ **icon in a circular chrome button**; ✗ **a "HomeKit" button with a gradient**.
- **homekit-02** (✓/✗ ✗, light only): **"Don't use the HomeKit icon within text"**: ✓ **icon first in the line**; ✗ **after "with"**; ✗ **at the end of the line**.
- **homekit-03** (neutral pair, light only): **"Pair the icon with the name HomeKit correctly"**: **setup list** and **Apple Home apps grid**.
The script reports **3 comparisons** for this page.

## Web translation
**HomeKit has no web API** (native frameworks and the Home app). **The model, naming rules, setup principles and voice guidance still guide any smart-home web dashboard or companion site** (for **Matter**, **Thread**, **MQTT**, **Home Assistant-style** UIs, or a manufacturer's cloud console). **Apple's marks and wording rules apply when your page mentions HomeKit or Apple Home.** Statements about web APIs are background knowledge, not from the page.

| HIG rule | Web implementation |
|---|---|
| Use HomeKit's model and terms | **Data model and UI copy:** **Home → Rooms/Zones → Accessories → Services → Characteristics; Service groups; Scenes; Automations**; **UI words: "scene", "light", "speed", "brightness"**, **never "service" or "characteristic"**; **mirror the same hierarchy in URLs and breadcrumbs** (`/homes/:id/rooms/:id/accessories/:id`). |
| Acknowledge hierarchy; detail view with room/zone/home | **Accessory detail page** showing **room, zone, home, category, connectivity**, **not buried in settings**; **breadcrumbs** and **"Move to another room"**. |
| Multiple homes | **A home switcher** (`<select>`/menu) **even when there's one home; the current home is always visible**; **remember the last home**. |
| No duplicate settings; defer to the platform's Home | **Single source of truth (the home's own hub or the Home app)**: **read-through**, **no re-entry of rooms/zones**; **show a "Managed in Apple Home" note with a link** rather than a duplicate editor. |
| System-provided setup first | **Use the platform's onboarding flow (Matter commissioning/QR pairing) before custom steps**; **a QR/code screen for pairing** (Web NFC/camera for scanning); **custom features after basics work.** |
| Purpose string for Home data | **A short sentence beside the "Connect" button**: "Lets you control this accessory from your home app and voice assistant." (`privacy.md`). |
| No account/personal info; optional cloud account | **Local-first pairing without registration**; **cloud sign-in offered after setup** (`managing-accounts.md`). |
| Honour setup choices | **Don't force a second ecosystem's setup** during pairing; **one path, then optional extras.** |
| Service names; naming rules; no location words | **Client validation with regex** `^[\p{L}\p{N}](?:[\p{L}\p{N} ']*[\p{L}\p{N}])?$` (**letters/digits/space/apostrophe, alphanumeric at both ends, no emoji**), **inline message + suggestions** ("Try 'Reading lamp'"), **detect room/zone words in the name and offer "Remove 'Kitchen' and assign this light to the Kitchen room"**; **never suggest brand names or model numbers.** |
| Siri examples after setup; teach richer phrases | **A "Try saying…" panel** with **the chosen name inserted into 2–3 phrases** (copyable), **scene detail hints** ("You can say 'Hey Siri, set Movie Time.'"); **voice UI on the web via Web Speech API (`SpeechRecognition`) where available**, **always with a typed/tap alternative**. |
| Suggest zones and service groups | **Onboarding suggestions** ("Group your upstairs lights?"), **service-group and zone editors** with **clear names.** |
| Shortcuts only for extra functionality | **Voice/automation rules for what the platform lacks** ("Order filters"); **no duplicate of built-in control.** |
| Custom features; scenes; permission before writing | **Guide people to build a scene from your accessory's actions first, then link to the platform's app to add others**; **confirm before writing to the shared home database** (**preview → Apply**); **never overwrite settings silently**; **show conflicts side by side** ("Name changed in Apple Home: use 'Porch light' here too?"). |
| Cameras: don't block the image; mic only for two-way audio | **`<video>`/WebRTC live view with controls outside the image area** (overlay only **small badges at edges, never over the subject**); **feature-detect two-way audio** (**capabilities from the device**) **before rendering the microphone button** (`getUserMedia` on user action, **permission explained**); **`aria-label` and captions where available.** |
| HomeKit icon and name (Apple's artwork; non-interactive; not in text) | **Only when you truly support HomeKit/Home**: **artwork from Apple Resources, unaltered, black/white/custom colour to match other partner logos, same shape treatment as others**; **`<img alt="Apple HomeKit">` inside a non-interactive strip (never inside `<a>`/`<button>` except the Apple Home app icon linking to its App Store page)**; **icon first, not mid-sentence**; **caption in the layout font**; **app more prominent**. **Otherwise use a generic icon (Lucide `home`)**, **never SF Symbols artwork.** |
| Wording | **Copy deck:** **"HomeKit" (one word), "Apple Home" (two words)**, **"works with / use / supports / compatible"**, **never "HomeKit lightbulbs", "HomeKit unlocked the door", or "Open Home"**; **first mention "Apple Home"**; **no translation**, **no descriptors ("iOS devices")**, **credit lines in legal text**, **no endorsement implied** (`airplay.md` has the same pattern). |
| Native-only | **HomeKit framework (`HMHomeManager`, accessory setup, characteristics), the Home app, HomePod/Siri integration, MFi/Matter certification** are native; **the web uses the vendor cloud, local hub APIs (Matter controllers, Home Assistant REST/WebSocket, MQTT) and your own UI.** |

Field-note cross-links:
- `field-notes/*`: **no smart-home recipe**; nothing conflicts.
- `hig/technologies/airplay.md` (✓) and `apple-pay.md` (✓): **same "icon is not a button", "name in copy", "works with" structures**; `hig/technologies/healthkit.md` (✓): **same "Apple mark and name" rules**; `hig/foundations/privacy.md` (✓): **purpose strings**; `hig/patterns/managing-accounts.md` (✓): **optional account after setup**; `hig/patterns/onboarding.md` (✓): **setup and teaching moments**; `hig/patterns/entering-data.md` (✓): **naming inputs and validation with helpful suggestions**; `hig/foundations/writing.md` (✓): **terminology and capitalisation**; `hig/foundations/branding.md` (✓): **partner marks**; `hig/components/system-experiences/app-shortcuts.md` (✓): **shortcuts vs built-in voice control**; `hig/patterns/playing-video.md` (✓): **camera/live video behaviour**; `hig/components/system-experiences/controls.md` (✓) and `widgets.md` (✓): **quick control surfaces for accessories**.
- Not yet ingested (linked from this page): none in the HIG (Apple Design Resources and trademark pages are external).

## Checklist
- [ ] **UI uses the HomeKit vocabulary** (home, room, zone, accessory, scene, automation); **never "service" or "characteristic"**; **"scene", not "action set"**.
- [ ] **An accessory detail view shows its room, zone and home**; **multiple homes are handled**; **no duplicate home settings** (defer to the Home app).
- [ ] **The system setup flow comes first; a purpose string explains Home data access; no account or personal information is required; no forced second-platform setup.**
- [ ] **Naming rules are enforced** (alphanumeric/space/apostrophe, alphanumeric ends, no emoji) **with suggestions**; **no brand names, model numbers or room words in service names.**
- [ ] **Example voice commands are shown after setup** (with the chosen name); **richer phrases are taught later**; **zones and service groups are suggested.**
- [ ] **Shortcuts exist only for accessory-specific extras**, **and are explained apart from HomeKit voice control.**
- [ ] **Conflicts with the Home database are shown side by side; writes need permission.**
- [ ] **Camera images are never covered; the microphone button appears only for two-way audio.**
- [ ] **HomeKit/Apple Home icons: Apple artwork, unaltered, non-interactive, not in text, consistent with other technology icons, name beside, app more prominent** (or a generic home icon instead).
- [ ] **Copy: "HomeKit"/"Apple Home" spelled and cased right, "works with/compatible", never as an actor or descriptor, first mention "Apple Home", not translated, credit lines present.**

## Related
- Ingested: AirPlay (✓), Apple Pay (✓), HealthKit (✓), Privacy (✓), Managing accounts (✓), Onboarding (✓), Entering data (✓), Writing (✓), Branding (✓), App Shortcuts (✓), Playing video (✓), Controls (✓), Widgets (✓).
- Not yet ingested (linked from this page): none in the HIG.
- Developer docs: HomeKit · MFi portal. External: Apple Design Resources, Guidelines for Using Apple Trademarks and Copyrights, Apple Trademark List.
- Videos: Add support for Matter in your smart home app (WWDC21 10298).
