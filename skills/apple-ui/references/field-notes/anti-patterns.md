# Anti-patterns — tried, rendered, rejected

Each item was actually built, shown to the product owner, and rejected. Don't re-propose them
without a new reason.

| Rejected | Why | Do instead |
|---|---|---|
| Uppercase eyebrow section labels (11px, UPPERCASE, `.14em`, grey) — rejected **twice** | "Looks AI and cheap" — generic template feel | Sentence case 17–22px semibold, primary colour |
| Uppercase status badges ("MAKES CHANGES") | Same template feel; loudest thing on screen | Put the fact in the row's description sentence |
| Dark filled count badge next to a section title | Second dark blot on the title line | Quiet grey numeral |
| Value shown inside a grey badge (slider value, counter) | Two dark blots per row | Plain grey text on the right |
| Grey filled rounded input inside a white rounded group | Box inside a box — extra layer | Bare field; the row is the field |
| Each switch/option in its own bordered box | Two switches read as two cards | Rows in one group, hairlines between |
| Dashed-border drop zone inside a group | Box inside a box | The drop area *is* the group's content |
| Two-column desktop wizard (System-Settings sidebar) | Breaks the single top-to-bottom flow | Wider column (38rem), bigger type at `lg`, `my-auto` |
| Mobile sizes left unchanged on desktop | "Squeezed phone strip in the middle" | Step type and tiles up at `lg` |
| Summary list / dark hero card on the final wizard screen | Too much at the moment of completion | Giant headline + one button |
| Numbered step circles + "%38" pill + gradient bar together | Three indicators saying one thing; % drives no decision | Phase name + one thin filling bar |
| Selected segment as a filled black button | Competes with the one primary action | Grey rail + sliding white thumb |
| Boxed icon Back button | Competes with primary pill | "‹ Back" as text |
| Yellow warning box with icon and three sentences | Loudest element; generic security template | One-line trust line with a 5px amber dot |
| Square checkboxes in a consent list | Feels like a form | 21px circle marks, whole row tappable |
| Monochrome single glyph for third-party brands | Makes every brand look the same | Brand marks in their own colours |
| Cropping/isolating part of a supplied logo (e.g. just the "t") | "Use the logo I gave you" | Whole mark, sized by % of tile |
| Two different card grammars on one page | Page reads as stitched together | One surface constant shared by all cards |
| Rainbow-coloured bars / decorative greens | Colour carries no information | Tone hierarchy (opaque vs 35%) |
| Question-style section titles ("Which channel brings business?") | Title asks, content must answer | Noun title; the answer is the headline |
| Five-column table to answer "which is best?" | Leaves ranking to the reader | Answer first, then 4 widget tiles |
| Busy hero: kicker, intro, footnote, two CTAs, giant outline word | "Screen is too busy" | Headline + one object + one action |
| Full-page scrolling wizard with the CTA falling off-screen | Primary action disappears | Fixed header/footer, only the middle scrolls |
| Sticky footer with a hard top border | Looks like a second screen | Blur + gradient fade from content |
| Hard-coded `hour12:false` in time formatting (Node 20) | Midnight renders as "24" | `hourCycle: "h23"` |
| Concept hero: a thermal receipt printing and tearing off | "No need to be this creative" | One impressive object + one message |
| Hero: product screen on a reflective desk, or the composer as a thick ray-traced glass object | Interface-in-a-frame is what every SaaS page does; glass heroes rejected | The product's own brand object, born on black |
| Apple-Intelligence styling (orb, spectrum edge, colourful cards) on product UI | Liked as a mock-up, disliked live | Ask for a reference screenshot before a big visual change |
| Showing a plan-gated feature (e.g. voice mode) as if everyone has it | Promises what the customer can't use | Show the feature everyone has (dictation) |
| Lock-screen notification for something the product delivers in-app | Depicts a channel that doesn't exist | Draw where the result really lands |
| Unverifiable figures or claims in a trust section ("~70 tools", "never used for training") | One overstated line cheapens the whole page | Only numbers/claims checked in code or policy |
| AI-generated people in a real-life photo section | The exact "smells like AI" feeling | Real customer shoot, or locale-matching free stock with no identifiable face |
| Busy-shop photo under an "after closing" headline | Photo tells a different story | The photo states the headline literally |
| "We are X's official partner" as the card headline | Reads as boasting | User action as headline, partner status as a small badge |
| Highlights cards resetting to frame 0 while sliding out | Animation jumps mid-slide | Freeze the outgoing card where it is; reset off-screen |
| Card slides / device motion at ~30 fps | "Not smooth" | transform/opacity only, DOM writes per frame, measure on real hardware |

General smell test — if you see any of these, stop and fix:
gradients on buttons (except a deliberate brand CTA), coloured page backgrounds in app chrome,
thick borders, drop shadows with colour, emoji as icons, more than one filled button, centred
and left-aligned blocks mixed on one axis, badge soup, grey-on-grey low contrast body text.
