---
name: Portfolio 2026
description: A green-phosphor VHS monitor where one data packet gains a TCP/IP layer per section as you scroll.
colors:
  ground: "#070c05"
  panel: "#0d1608"
  bezel: "#12150e"
  on-phosphor: "#0a1205"
  lit-screen: "#3b7f1d"
  lit-screen-mid: "#2c6516"
  lit-screen-deep: "#1f4a10"
  text: "#bfe83a"
  muted: "#7fa83a"
  phosphor-1: "#c3f23b"
  phosphor-2: "#a2d935"
  phosphor-3: "#86bb2d"
  phosphor-4: "#6a9c28"
  phosphor-5: "#e9ffa8"
typography:
  display:
    fontFamily: "Silkscreen, Courier New, monospace"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Silkscreen, Courier New, monospace"
    fontSize: "2.4rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Silkscreen, Courier New, monospace"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "VT323, Courier New, monospace"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: "VT323, Courier New, monospace"
    fontSize: "1.25rem"
    fontWeight: 400
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  bezel: "9vmin / 11vmin"
  round: "50%"
spacing:
  xs: "4px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "36px"
  section-y: "100px"
components:
  button-primary:
    backgroundColor: "{colors.phosphor-1}"
    textColor: "{colors.on-phosphor}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.phosphor-1}"
    textColor: "{colors.on-phosphor}"
  nav-pill:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
    padding: "5px"
  nav-pill-active:
    backgroundColor: "{colors.phosphor-3}"
    textColor: "{colors.on-phosphor}"
  badge-live:
    backgroundColor: "{colors.phosphor-1}"
    textColor: "{colors.on-phosphor}"
    padding: "2px 10px"
  slab:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.phosphor-1}"
    rounded: "{rounded.none}"
---

# Design System: Portfolio 2026

## Overview

**Creative North Star: "The Phosphor Packet Deck"**

The whole page is the screen of a green-phosphor CRT fed by a VHS deck. One hue carries everything; hierarchy is brightness and halftone dot density, never a second color. A single dot-matrix packet sits in a fixed stage and gains one slab per section, one per TCP/IP layer (Aplicacion, Transporte, Red, Enlace, Fisica), brightening as it lands. Scroll is the cable: Lenis smoothing writes progress into CSS custom properties and everything on the stage reads them.

The mood is warm, lo-fi and instrument-like: scanlines, vignette, tape grain, a rounded bezel, a tape OSD (PLAY/PAUSE, block volume meter, SP timecode tied to scroll). Text glows and carries a faint red/cyan fringe. Motion is stepped (`steps()` easing) where it imitates hardware and eased (`cubic-bezier(0.16, 1, 0.3, 1)`) only for the packet's arrival.

Binding commitments: five-layer structure and the retro VHS / green-phosphor look.

**Key Characteristics:**
- Monochrome phosphor green on near-black olive; five brightness steps stand in for five layers.
- Pixel faces only: Silkscreen for display, VT323 for everything else.
- Hard square corners on all UI; the only large curve is the monitor bezel.
- Glow and scanlines are the depth system; there are no soft drop shadows.
- Entry is a ritual: PLAY gate (when autoplay is blocked), then a randomized 4 s VHS insert-tape loader.

## Colors

One phosphor hue (yellow-green, roughly 75 degrees) on a graphite-olive ground, stepped in brightness.

### Primary
- **Hot Phosphor** (`phosphor-1`, #c3f23b): H1, links, CV button fill, live badge, the Aplicacion layer and hero section.
- **Bloom White-Green** (`phosphor-5`, #e9ffa8): the brightest step. OSD text, focus rings, stamp, bit stream, hover states, the Fisica layer (overexposed).

### Secondary
- **Phosphor Steps 2 to 4** (`phosphor-2` #a2d935, `phosphor-3` #86bb2d, `phosphor-4` #6a9c28): the Transporte, Red and Enlace layers and their sections' `--c`. `phosphor-3` is also the nav border and active tab; `phosphor-4` is the scrollbar thumb and hover borders.

### Neutral
- **Dead Screen Olive** (`ground`, #070c05): page ground.
- **Tube Glass** (`panel`, #0d1608): slab faces, nav bar.
- **Bezel Plastic** (`bezel`, #12150e): the frame outside the rounded screen.
- **Body Phosphor** (`text`, #bfe83a) and **Faded Phosphor** (`muted`, #7fa83a): body copy and secondary copy (orgs, dates, stack lists, section leads).
- **Ink on Glow** (`on-phosphor`, #0a1205): text on any solid phosphor fill.

### Named Rules
**The One Hue Rule.** No second accent color; the `lit-screen` greens are the same hue at lower lightness and belong to the loader only. Importance is a brighter step or a denser dot pattern. The only off-hue color is the faint magenta/cyan text fringe, which is a lens artifact, not a palette member.

**The Ink-On-Glow Rule.** Solid phosphor fills always take `on-phosphor` text with text-shadow removed.

## Typography

**Display Font:** Silkscreen (Courier New, monospace), weights 400 and 700 shipped
**Body Font:** VT323 (Courier New, monospace)
**Label/Mono Font:** VT323, uppercase with 0.05 to 0.12em tracking

**Character:** Bitmap type from a video-game console and a tape OSD. Silkscreen is all caps and blocky for headings and buttons; VT323 is a tall terminal face that reads comfortably at 1.375rem and up.

### Hierarchy
- **Display** (700, clamp(2.5rem, 6vw, 4.5rem), 0.95): the H1 name, uppercase, with layered offset glow shadow.
- **Headline** (700, clamp(1.5rem, 3.2vw, 2.4rem), 1): H2 per section, colored by the section's phosphor step.
- **Title** (700, clamp(1rem, 1.5vw, 1.125rem), 1.3): row and project H3; also button labels at 0.9375rem.
- **Body** (400, 1.375rem, 1.35): paragraphs; lede grows to clamp(1.375rem, 1.8vw, 1.625rem), measure about 34rem.
- **Label** (400, 1.25rem, 0.06 to 0.1em, uppercase): OSD, legend, layer notes, nav links (1.3125rem), stack names.

### Named Rules
**The Pixel Face Rule.** Only Silkscreen and VT323. Font smoothing is turned off (`-webkit-font-smoothing: none`) so edges stay crisp.

**The Glow Rule.** Body text carries a three-part text-shadow (red fringe, cyan fringe, 8px green glow). Headings add a stepped offset shadow whose horizontal split scales with scroll speed (`--g`). Text on solid fills drops it.

## Layout

A fixed stage sits behind a scrolling text column. Text is a single left column (`min(540px, 44vw)`) inside five full-height sections (`min-height: 100svh`, padding `100px clamp(28px, 6vw, 96px) 120px`, content vertically centered); the last section is 110svh. The stage's 3D scene occupies the right 58vw. Each section fades and rises as it enters (`opacity` 0.12 to 1, 48px translate) from the `--a` variable.

Rhythm is loose and airy: 16 to 36px gaps between items, 18px row padding, 1.5 to 2.5rem between blocks. Container edges follow the bezel: OSD and tape strip inset 7vmin.

Responsive (max-width 820px): the packet becomes a fixed top window (46svh, gradient-faded into the ground), text scrolls beneath (`padding-top: 47svh`), the section column goes full width, the legend and rings hide, the nav keeps only brand, language and CV (links hidden), OSD timecode and now-playing hide, volume meter narrows to 96px.

## Elevation & Depth

Depth is optical, not structural: scanlines, a vignette, an inner bezel glow and tape grain sit above the page; the packet's slabs stack in real 3D (perspective 1500px, rotateX about 58deg, rotateZ about -34deg) and brighten via `filter: brightness` and a phosphor glow when a layer lands. Fixed UI uses a green halo.

### Shadow Vocabulary
- **Bezel** (`box-shadow: 0 0 0 200vmax var(--bezel), inset 0 0 110px rgb(0 0 0 / 0.75), inset 0 0 40px rgb(195 242 59 / 0.07)`): the monitor frame and inner vignette.
- **Phosphor halo** (`0 0 18px rgb(195 242 59 / 0.18)` on the nav, `0 0 20px rgb(195 242 59 / 0.35)` on the CV button): glow that says the element emits light.
- **Slab bloom** (`0 0 calc(var(--W) * (0.1 + 0.3 * var(--l))) color-mix(...)`): the packet layer glow, strongest at landing.

### Named Rules
**The Emits-Light Rule.** Elevation means luminance. Raise importance by brightening and haloing, not by adding gray shadow.

## Shapes

Hard, square, pixel-edged: every button, bar, badge and slab has 0 radius with 2px solid or dashed borders. The only large curve is the bezel (`9vmin / 11vmin`). Circles are reserved for the sent-signal rings (dashed 2px, 50%). Play and pause marks are drawn with `clip-path` triangles and bar gradients, not icon glyphs. Dashes are the structural stroke: timeline rows (2px dashed `--line`), stamp (3px dashed), focus ring (3px dashed `phosphor-5`, 4px offset), nav language separators (1px dashed).

Surfaces use dot-matrix: slabs carry a radial-dot halftone whose dot size shrinks per layer (dot radius `W*(0.012 - i*0.0018)`, spacing `W*0.034`), plus a 32-tick ruler and a tiny uppercase band label.

## Components

### Buttons
- **Shape:** Square, 2px `phosphor-5` border, min-height 52px (60px large, 40px in the nav).
- **Primary (CV):** `phosphor-1` fill, `on-phosphor` Silkscreen uppercase label 0.9375rem, padding-inline 22px, plus a green halo.
- **Hover / Active:** hover lifts (-2px, -2px) and the halo intensifies; active presses (3px, 3px). Transitions use `steps(3)` over 0.2s. In the nav the small variant brightens to `phosphor-5` on hover.

### Links
Inherit color (`phosphor-1` default), 2px dotted underline offset 0.25em; hover goes `phosphor-5` and the underline turns solid.

### Navigation (tape menu bar)
Fixed bottom center, `panel` fill, 2px `phosphor-3` border, 5px inner padding. Brand in Silkscreen, section links in VT323 uppercase `muted`, hover `phosphor-1`, current section a solid `phosphor-3` block with `on-phosphor` text. Language toggle between dashed rules, small CV button at the end. Hidden links on mobile.

### Tape OSD
Fixed under the bezel top edge: PLAY/PAUSE button (CSS-drawn triangle or twin bars in `phosphor-5`, transparent 2px border that shows `phosphor-4` on hover and inverts on press), a volume meter made of ten masked blocks (0 to 10, tabular numerals), a now-playing label, and the SP timecode driven by scroll.

### Timeline rows and live badge
Rows are flex baseline pairs (title and org left, date right) between 2px dashed `--line` rules. The "en curso" badge is a solid `phosphor-1` block with `on-phosphor` uppercase text that blinks in `steps(2)`.

### Packet slabs and layer legend
Slabs are `panel`-filled with a 2px border in the layer color, inner double-line inset, halftone dots, ruler and band label. The payload slab (core) is solid layer color with `on-phosphor` dots and the name centered in Silkscreen. The legend (top right) lists the five layers as small square swatches that fill as each becomes active, with a muted sub-line.

### Sent stamp and bit stream
On the final section, the packet shakes, launches up-right, with streaks and dashed expanding rings; a rotated (-7deg) stamp with a 3px dashed `phosphor-5` border, Silkscreen "ENVIADO/SENT", timestamp, and a scrolling bit stream fade in on `steps(3)`.

### Entry screens (gate and loader)
Gate: full-screen dark phosphor vignette, interference strip at top, tape head-switch strip, the single word PLAY with a play triangle in `phosphor-5` at clamp(4rem, 15vw, 9.5rem) with split red/green fringe. Loader: VHS green screen (radial `lit-screen` to `lit-screen-deep`, the lit-tube green used only here) with randomized tracking bars, tear lines and glitch jitter, OSD in VT323 at clamp(2.6rem, 8vw, 5.5rem) showing PLAY, a blinking --:-- clock and an SLP counter, ~4s, then a stepped fade out.

### Backdrop
A pixelated canvas (`image-rendering: pixelated`) behind the stage: stars, three parallax lunar ridges, drifting invader-style bugs and data packets, all in the phosphor palette.

### Motion grammar
Smooth scroll (Lenis, lerp 0.085) drives `--v1..--v4` (layer arrival), `--a0..--a4` (section focus), `--l1..--l4` (landing flash), `--f` and `--s` (overall and sent progress). Hardware effects use stepped easing; the packet's initial fly-in uses `cubic-bezier(0.16, 1, 0.3, 1)`. Fast scroll adds a tracking strip and a wave warp filter on the text; pointer movement tilts the packet by a few degrees.

Reduced motion: the loader is hidden, boot, flicker, grain, roll bar, head-switch, packet float, launch, streaks, rings, bit scroll and live-badge blink are all disabled; the stamp appears without a transition.

## Do's and Don'ts

### Do:
- **Do** express hierarchy with the five phosphor steps and halftone density; the brightest step marks the final layer and focus.
- **Do** put `on-phosphor` (#0a1205) text on every solid phosphor fill.
- **Do** keep all corners square (0 radius) except the bezel.
- **Do** use the dashed 3px `phosphor-5` focus ring (4px offset) on every interactive element.
- **Do** use `steps()` easing for any glitch, tape, press or stamp motion.
- **Do** draw controls (play, pause, meters) in CSS shapes; keep Silkscreen and VT323 as the only faces.
- **Do** honor `prefers-reduced-motion` by disabling every looped or launched animation.

### Don't:
- **Don't** add a second hue or a gray; step brightness instead.
- **Don't** use soft gray drop shadows, rounded cards, or gradients as decoration; depth is glow, scanline and vignette.
- **Don't** use system or serif faces, or icon fonts and emoji glyphs.
- **Don't** let section copy sit on the stage side; text stays in the left column (full width, beneath the packet window, at 820px and below).
- **Don't** drop the five-layer packet structure or the VHS/CRT skin; they are binding commitments.
