# Drag and drop
Source: https://developer.apple.com/design/human-interface-guidelines/drag-and-drop · Section: Patterns · Supported platforms: iOS, iPadOS, macOS, visionOS (**not tvOS, not watchOS**: the page says so, and the platform strip shows both dimmed **(from screenshot)**) · Ingested: 2026-09-28 · Apple last updated: 2023-10-24 (artwork added). Change log: 2023-06-21 visionOS guidance · 2023-10-24 artwork. One DocC fetch, read in full. 9 screenshots (dark-mode page, hero → Videos) were compared with the fetched text line by line: the body text matches, including two typos that are on Apple's page ("feel in control the process", "it it doesn't"). Text that exists only inside images is marked **(from screenshot)**. Not marked critical: no gate, token file or checker.

## In one line
Make picking up, carrying and putting down content feel **controlled**: a translucent drag image after ~3 pt, clear yes/no feedback at every destination, sensible move-vs-copy defaults, multi-item support, undo, and a non-drag alternative for everything drag can do.

## Rules

### Framing (intro)
- Drag and drop moves or duplicates selected content (photos, text, other content) from a **source** to a **destination**.
- Source and destination can be in the same container (a text view), in different containers (opposite sides of a split view) or in different apps.
- The result is a **move** or a **copy**:
  - after a move the content exists only at the destination; after a copy it exists in both;
  - **within the same container → move**; **into a different container → copy**;
  - **between apps → always a copy**.
- The interaction differs by platform:
  - **visionOS:** pinch and hold a virtual object and drag it in any direction, including along the **z-axis**.
  - **iOS / iPadOS:** touch gestures, pointing-device interaction, and **full keyboard access** mode.
  - **Universal Control:** drag content between a Mac and an iPad.
  - **macOS:** pointing device, full keyboard access, or **VoiceOver**.

### Best practices
- **should** **Support drag and drop throughout the app** as far as possible: people know it and try it everywhere. System components such as text fields and text views already support it.
- **must** **Offer alternative ways to do the same thing.** Drag can be inconvenient or impossible for some people.
  - Example: menu commands to copy an item and move it elsewhere.
  - iOS / iPadOS: use the accessibility APIs that identify drag sources and drop points (`accessibilityDragSourceDescriptors`, `accessibilityDropPointDescriptors`) so assistive technologies can drag and drop in the app.
- **should** **Decide when a drop inside the app moves and when it copies.**
  - Default: move when source and destination containers are the same (text within a document); copy when they differ (an image from one document to another).
  - Before changing a default, weigh what people expect and choose the behaviour **least likely to cause frustration or data loss**.
- **should** **Support multi-item drag when it makes sense**, so people don't move items one at a time.
  - iOS, iPadOS, macOS, visionOS: select several items and drag them as a group.
  - macOS: also select items from **several apps** and drag them together.
  - iPadOS: start dragging one item, then **add more items without stopping the drag**.
- **should** **Prefer letting people undo a drop.**
  - People drop things in the wrong place by accident and value being able to get back to the earlier state.
  - When the drop can't be undone, consider asking for **confirmation** first. Example: the macOS Finder asks before a file is dragged into a write-only folder, because the person could not open the folder to remove it.
  - Sometimes offer a way to reverse the result instead. Example: Photos lets people cancel photo sharing after dropping a photo into a shared photo stream.
- **may** **Offer several versions of dragged content, ordered from highest to lowest fidelity**, so the destination picks the best it can accept.
  - Line drawing: PDF vector → lossless PNG with transparency → lossy JPEG without transparency.
  - Rich object such as a chart: the native chart object first, then a simpler image of it.
- **may** **Support spring loading**: dragging content over a control (button, segmented control) activates it.
  - Example: Calendar lets people drag an event over the day, week, month or year segment of the toolbar to move it to a different date.
  - Mac with a Magic Trackpad: force-click the control while still holding the content. iPad: **hover** over the control while holding the content.

### Providing feedback
- **must** Provide **clear, continuous feedback** throughout. Drag and drop has several possible outcomes, and feedback keeps people feeling in control.
- **should** **Show a drag image as soon as the selection has been dragged about 3 points.**
  - Make it a **translucent** copy of the content. Translucency tells it apart from the original and lets people see destinations as they pass over them.
  - Keep it until the content is dropped.
- **may** **Modify the drag image to help people predict the result**, when that adds clarity.
  - Example: dragging a photo into a document, the drag image can grow to the photo's default size in the document.
  - **Flocking** visually groups several dragged items (so people can see they haven't missed one) and ungroups them on drop.
  - **should not** let the drag image change constantly and radically; that distracts.
- **should** **Show whether a destination can accept the content.**
  - Accepting: show an insertion point or highlight the containing view **only when** the destination can accept the item.
  - Not accepting: show **nothing**, or an explicit "not allowed" image such as SF Symbols `circle.slash`.
  - Show highlights and cues **only while the content is above the destination**; remove them when it moves away.
  - With several possible destinations, give cues that identify **one at a time**.
- **should** **Give visual feedback for a drop on an invalid destination, and when a drop fails.**
  - The item can travel back to its source (if the source is still visible), or scale up and fade out so it seems to evaporate rather than land.

### Accepting drops
- **should** **Scroll the destination when needed.** In a scrolling container with a lot of content, let it auto-scroll while the item is over it, so people can reach the drop position. Stop auto-scrolling once the drag leaves the container. System text views and text fields do this by default.
- **should** **Choose the richest version of dropped content the app can accept.** If a chart object comes with a simple image, use the native chart if the app supports charts; otherwise use the image.
- **should** **Extract only the relevant part of dropped content.** Example: dropping a contact on an email's recipient field shows only the name and email address, not the postal address.
- **should** **Check the Option key at drop time when a physical keyboard is attached.**
  - Holding Option while dragging forces a drop within the **same container** to behave as a **copy**.
  - If Option is released before the drop, it results in a **move**.
- **should** **Show feedback while dropped content is transferring.**
  - Progress indicator so people can estimate the time.
  - In collections, lists and tables: a **placeholder** at the drop location, so they know where the content will appear when the transfer finishes.
  - The system can show an alert for a long transfer between apps.
- **should** **Show feedback when a drop starts a task or action.** Dropping content onto a control that starts a task (printing) should show that the task has begun and keep people informed of progress.
- **should** **Style dropped text correctly.** If source and destination support the same text styles, keep the original font, typeface, size and other attributes; otherwise apply the destination's style.
- **should** **Maintain selection state after a drop, updating the source when needed.**
  - People expect dropped content to stay **selected** so they can act on it immediately.
  - Same container + move: the content disappears from its original location.
  - Same container + copy: remove the selection state from the content left at the original location.
  - Different container: **deselect** the content in the source.

### Platform considerations
- **Not supported in tvOS or watchOS.**
- **iOS, iPadOS:** **let people run several drag activities at once.**
  - In iPadOS people can add items one after another to a drag in progress, as many as their fingers can hold. Example: pick up an app icon on the Home Screen, start dragging it, tap more icons to add them, then drop all of them on another Home Screen or in a folder.
  - To support this, allow adding items during a drag (with flocking as visual feedback) and accept **multiple, simultaneous drops**.
- **macOS:**
  - **may** Let people drag content from the app into the **Finder**, in a format the app can open later. Example: Calendar drags an event out as an `.ics` file that can be shared or dragged back into Calendar.
  - When needed, output the dragged content as a **clipping**: a temporary container for dragged content. Example: most system apps let people drag text to the Finder, where it appears as a clipping that can later be dragged into a text field. A clipping is **not** related to the Clipboard.
  - **should** Let people drag selected content from an **inactive window** without making it active first. Selected content in an inactive window is a **background selection** and looks different from selection in the active window; people expect to drag it to the active window without bringing the inactive window forward.
  - **should** When possible, let people drag an individual item from an inactive window **without disturbing its existing background selection** (drag an unselected Finder file without deselecting the selected ones).
  - **may** Show a **badge** during multi-item drags: a small filled oval containing a number for how many items are being dragged. If the destination accepts only a subset, **update the number**.
  - **may** Change the **pointer** to say what will happen on drop: the *copy* pointer, plus *drag link*, *disappearing item* and *operation not allowed* depending on the situation (Apple links Pointing devices § Pointers).
  - **should** Let people **select and drag in one motion**, without a pause between selecting and dragging (except when selecting multiple items).
- **visionOS:** **launch the app to handle content dropped into empty space** when possible.
  - Associate a **user activity** with the draggable content so the app can open a window or scene when the content is dropped (`NSUserActivity`).
  - Examples: dropping a URL into empty space launches Safari; dropping Quick Look-supported content launches Quick Look to show it.
  - (Video: a wearer drags a 3D file named "meteor" out of a Finder window into empty space near a table; the file opens and a 3D meteor appears to float above the table.)

## Specs & values
| Item | Value |
|---|---|
| Drag image appears | after the selection has moved about **3 pt** |
| Drag image style | translucent; stays until drop |
| Default result | same container → **move** · different container → **copy** · between apps → **always copy** |
| Force copy in the same container | hold **Option** (checked at drop time; release before dropping → move) |
| Fidelity order example | PDF vector → lossless PNG with transparency → lossy JPEG without transparency |
| "Not allowed" symbol | SF Symbols `circle.slash` (or no feedback) |
| macOS pointers | copy · drag link · disappearing item · operation not allowed |
| macOS multi-item badge | small filled oval with a number; update when only a subset is accepted |
| Spring loading triggers | force-click while holding (Mac + Magic Trackpad) · hover while holding (iPad) |
| Failed-drop feedback | fly back to the source (if visible) · or scale up and fade out |
| Selection after drop | stays selected in the destination; source updated per move / copy / other container |
| File formats named | `.ics` (Calendar event dragged to the Finder) · PDF · PNG · JPEG |
| Developer docs | UIKit *Drag and drop* · AppKit *Drag and Drop* · File Provider · `NSUserActivity` · `accessibilityDragSourceDescriptors` · `accessibilityDropPointDescriptors` |
| Related | Universal Control (support article) |
| Videos | *What's new in UIKit* (WWDC21 10059) · *SwiftUI on the Mac: The finishing touches* (WWDC21 10289) · *Designed for iPad* (WWDC20 10206) |

The page has **no other numbers** (no durations, no distances, no sizes).

## Visual notes (from screenshots)
- **Hero:** an orange grid card with two overlapping rounded squares (the back one with a dashed, gap-broken outline and the front one solid; the page does not label them, so reading them as source and drag image is an interpretation) and a pointer arrow at its lower trailing corner, over construction circles.
- **visionOS video poster (from screenshot):**
  - A living room; a translucent glass **Files** window floats over a rug and coffee table.
  - Its sidebar shows Recents, Shared, Locations, Favorites, Tags; two file tiles "meteor.usdz Today, 3:07 PM 50 MB" and "telescope.usdz Today, 2:38 PM 18.6 MB".
  - A tall context menu lists Remove Download, Get Info, Rename, Compress, Duplicate, Quick Look, Tags, Copy, Move, Share, Open in New Window, each with a trailing glyph.
  - A blue "Play ⊙" link sits under the poster.
  - The page uses it as a **concept** illustration (dropping into empty space opens the content); the motion itself is not the point, so it was **not measured**.
- **Video thumbnails (from screenshot):** *What's new in UIKit*: an iPad Mail-like screen; *SwiftUI on the Mac: The finishing touches*: a 3 × 3 grid of Mac windows on a purple wallpaper; *Designed for iPad*: a row of iPad app screens.
- **Page chrome (from screenshot):** TOC = Drag and drop · Best practices · Providing feedback · Accepting drops · Platform considerations · Resources · Change log. The page has **no ✗/✓ image pairs** and no side-by-side comparison images; there is no `drag-and-drop-*` entry in the visual-examples catalog.
- **Text that is not in the fetch:** only the file names, sizes and menu items inside the visionOS poster, the video thumbnails and the page chrome above. Every heading, bold lead-in, bullet, body sentence and link in screenshots 21–29 is in the fetched text.

## Web translation
The HIG describes native behaviour, but all of the pattern except the platform APIs applies to web apps (file managers, boards, sortable lists, editors, uploaders).

| HIG rule | Web implementation |
|---|---|
| Support drag throughout; system components come free | Native inputs/`contenteditable` already accept text and file drops; don't break them. Add drop targets where people expect them: file upload areas, boards, lists, folders. |
| **Always offer an alternative** | Every drag action has a button/menu/keyboard path: "Move to…" menu, "Move up/down" buttons, keyboard reordering (Space to pick up, arrows, Space to drop, Esc to cancel, with live-region announcements), Cut/Paste, and `<input type="file">` beside a drop zone. This is also WCAG 2.5.7 Dragging Movements (`accessibility.md`). |
| Move vs copy defaults | Reorder inside one list = move; drag between lists/documents = copy (or an explicit menu choice); files from the desktop = copy. Set `event.dataTransfer.effectAllowed` / `dropEffect` (`move`, `copy`, `link`, `none`) to match; when unsure choose the option with no data loss. |
| Option key forces copy | Read `event.altKey` (Option on macOS; Ctrl is the usual copy modifier on Windows/Linux, and browsers already map the platform modifier to `dropEffect = "copy"` in native DnD). Decide at `drop` time. Show the copy affordance (a `+` badge/cursor) while the key is down. |
| Multi-item | Select with Shift/Cmd(Ctrl) click and checkboxes, then drag the whole selection as one payload; show a **count badge** on the drag image (macOS badge: small filled oval with the number). Update the count if the target accepts only a subset. |
| Undo or confirm | After drop, show a toast with **Undo** (and support Cmd/Ctrl+Z); for irreversible drops (delete, share publicly, drop into a write-only/unowned place) confirm first. Offer "Cancel sharing" style reversal where undo isn't possible. |
| Multiple fidelity versions | Put several MIME types in `dataTransfer.setData` in order of richness (`application/x-yourapp+json`, then `text/html`, then `text/plain`; `image/svg+xml` before `image/png`). On drop, read the richest type you support (`dataTransfer.types`). |
| Spring loading | While dragging, `dragenter` over a button/tab/folder for a short dwell triggers it (open the folder, switch the tab, change the view). The HIG gives **no delay**; pick one by testing (start around half a second) and cancel on `dragleave`. Never activate destructive controls this way. |
| Drag image after ~3 pt | Native HTML5 DnD starts after the browser's own threshold; with Pointer Events (touch or custom drag) start the drag only after the pointer has moved ≈ **3 px**, so a click isn't a drag. The drag image is a **translucent** clone (`opacity ≈ .7`, `dataTransfer.setDragImage` or a fixed-position clone that follows the pointer), removed on drop or cancel. Follow `field-notes/principles.md` depth (soft shadow, no border). |
| Predictive drag image, flocking | Show the size/shape the item will have at the drop (thumbnail grows to its in-document size); for multi-item, stack the clones with a slight offset and fan them out into place on drop. Keep changes calm (no constantly morphing image). |
| Show whether the target accepts | On `dragenter`/`dragover` call `preventDefault()` **only** if the target accepts the payload (that is also how the browser knows); highlight only that target, only while the pointer is over it, and remove on `dragleave`/`drop`. For refusal show nothing, or `cursor: not-allowed` / `dropEffect = "none"` (and a `circle.slash`-style icon in the drag image). One target highlighted at a time. |
| Failed or invalid drop | Animate the clone back to its origin, or scale up + fade out; skip the animation under `prefers-reduced-motion` (just snap back). |
| Autoscroll | Native DnD scrolls near container edges in most browsers; for custom drags implement edge-triggered scrolling (speed rises near the edge) and stop when the pointer leaves the container. |
| Richest version / relevant portion | On drop parse the richest MIME type; from a contact/card object insert only the fields the target needs (name + email into a recipient field). |
| Transfer feedback | Show progress for uploads (progress bar, see Loading), a placeholder row/tile at the drop position in lists/grids that becomes the real item, and a clear started/finished state for task drops (drop a file on "Print"/"Import" → visible "Started" then progress). |
| Dropped text styling | Paste/drop as plain text by default into inputs; keep formatting only when both sides support it (rich-text editors) - otherwise adopt the destination's style. |
| Selection after drop | Dropped items are selected in the destination and the source clears its selection (different container) or removes/deselects the original (move / copy in same container); focus moves to the dropped item. |
| Pointers | CSS `cursor`: `grab`/`grabbing` while carrying, `copy`, `alias` (link), `no-drop` / `not-allowed`, `move`. Match the operation that will happen. |
| Touch | Native HTML5 DnD is unreliable on touch: use Pointer Events (with `touch-action: none` on the handle) or a library built for it (e.g. dnd-kit); long-press to lift on touch, and keep scrolling working. Give visual lift feedback on pickup. |
| Keyboard / screen reader | Announce pickup, target ("over Inbox, position 3 of 12"), drop and cancel via `aria-live`; handles are focusable buttons with names ("Reorder Task 4"). |
| visionOS Safari / WebXR | Eyes + pinch acts as pointer; keep targets large and spaced (`spatial-layout.md`); dropping into empty space launching an app has no web equivalent. |
| Dragging out to the OS | Support dragging items out as a file (`DownloadURL` in Chromium, or `dataTransfer.items.add(file)` where available) in a format the receiver opens later (e.g. `.ics` for events). |

Field-note cross-links:
- `field-notes/anti-patterns.md` "Dashed-border drop zone inside a group": **compatible and refined.** The rule bans a permanent dashed frame inside a group; the HIG says to show destination cues **only while a drag is over an accepting target**. So: no dashed frame at rest; when a drag is active, highlight the target (tone/outline change), then remove it.
- `hig/foundations/accessibility.md` (Simple gestures + alternatives, WCAG 2.5.7 Dragging Movements): **confirmed** and made concrete (menu commands, accessibility descriptors).
- `hig/foundations/motion.md` (gesture-following UIs track the pointer 1:1, then settle): **consistent** with the drag image following the pointer and the fly-back/fade-out failure feedback.
- `hig/getting-started/designing-for-ipados.md` (drag and drop between apps, multi-item add-during-drag) and `designing-for-macos.md` (file management: drag files in and out): **consistent**; this page supplies the detailed rules.
- `hig/foundations/materials.md` (CRITICAL): the translucent drag image is a **content-layer** clone, not glass; it must not use `.glass` (glass is for the functional layer).
- No conflict with a field note.

## Checklist
- [ ] Every drag action also has a non-drag path (menu/button/keyboard, and file-picker next to a drop zone).
- [ ] Move vs copy defaults follow the container rule (same → move, different → copy, external → copy) and never risk data loss; Option/Alt forces copy.
- [ ] A translucent drag image appears after ≈ 3 px of movement and lasts until drop or cancel; it doesn't keep changing.
- [ ] Only accepting targets highlight, only while the pointer is over them, one at a time; refusal shows nothing or a clear "not allowed".
- [ ] Failed or invalid drops give visible feedback (fly back or scale-up-and-fade), and reduced motion snaps back.
- [ ] Multi-item drags carry a count badge (updated for partial acceptance), when multi-select exists.
- [ ] Drops can be undone (toast + Cmd/Ctrl+Z) or are confirmed first when irreversible.
- [ ] Long transfers show progress and a placeholder at the drop location; task drops show "started" and progress.
- [ ] Dropped content stays selected in the destination; the source selection is updated correctly.
- [ ] The richest supported MIME type is read; only the relevant portion is inserted; text styling is preserved only when compatible.
- [ ] Scrolling containers auto-scroll during a drag and stop when the pointer leaves.
- [ ] Touch, keyboard and screen-reader paths work (Pointer Events, arrows + Space, live announcements).
- [ ] The dashed drop-zone frame is not shown at rest (anti-pattern); cues appear only during a drag.

## Related
- Ingested: Accessibility (✓), Motion (✓), Materials (✓ CRITICAL), Spatial layout (✓), Designing for iPadOS (✓), Designing for macOS (✓), Designing for visionOS (✓), SF Symbols (✓: `circle.slash`).
- Ingested since: Entering data (✓), Feedback (✓ CRITICAL).
- Not yet ingested: Pointing devices (§ Pointers), Undo and redo, Loading, File management, Multitasking, Keyboards, Gestures, Toolbars, Segmented controls, Progress indicators, Collections, Lists and tables.
- External: Universal Control (support article).
