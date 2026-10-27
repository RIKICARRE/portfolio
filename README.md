# PORTFOLIO 2026

```
 ┌──────────────────────────────────────────────────────────────┐
 │ ▶ PLAY                                              SP  00:00 │
 │                                                              │
 │   RICARDO CARREÑO MARIÑO                                     │
 │   Ciberseguridad · Ingeniería de software · Frontend         │
 │                                                              │
 │   > GET /ricardo                                             │
 │   > 200 OK  ·  rikicm.dev                                    │
 │                                                              │
 └──────────────────────────────────────────────────────────────┘
```

[![CI](https://github.com/RIKICARRE/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/RIKICARRE/portfolio/actions/workflows/ci.yml)
[![CodeQL](https://github.com/RIKICARRE/portfolio/actions/workflows/codeql.yml/badge.svg)](https://github.com/RIKICARRE/portfolio/actions/workflows/codeql.yml)

**Live:** <https://rikicm.dev> · **English:** <https://rikicm.dev/en/>

Personal portfolio of Ricardo, built to be read by recruiters in under a minute. It is a cybersecurity-first profile (master's degree in progress) that also shows software engineering and frontend craft, and the site is part of that evidence.

*Portfolio personal de Ricardo, bilingüe (ES/EN). Perfil orientado a ciberseguridad, con ingeniería de software y frontend. Resumen en español al final.*

---

## ▌THE IDEA

The page is a **green-phosphor VHS monitor**. One data packet travels down the TCP/IP stack as you scroll, and each section adds a layer:

```
  LAYER   PDU        SECTION
  ─────   ────────   ───────────────────────────────
   5      Message    Home          (Aplicación)
   4      Segment    Learning      (Transporte)
   3      Packet     Projects      (Red)
   2      Frame      Experience    (Enlace)
   1      Bits       Contact       (Física)
```

Education and certifications are a single record of learning, not two sections, so new certifications are added in one place.

## ▌FEATURES

- **Bilingual, both first-class.** Spanish at `/`, English at `/en/`, with a keyboard and screen-reader accessible toggle.
- **CRT / VHS interface.** Scanlines, phosphor glow, a layered backdrop drawn on canvas, and a power-on / power-off sequence with its own sound.
- **Sound, opt-in.** Nothing plays until you press the gate. Background music, volume and PLAY / PAUSE controls follow.
- **Smooth scrolling** with [Lenis](https://github.com/darkroomengineering/lenis).
- **A terminal.** Powering the system off opens a shell with commands such as `help`, `cv -es | -en`, `projects`, `contact` and `exit`. There are a few hidden extras for whoever goes looking.
- **CV download** in Spanish or English from the CV menu.
- **Static output.** No server, no runtime, very little client JavaScript.

## ▌STACK

| | |
|---|---|
| Framework | [Astro 7](https://astro.build), static output, built-in i18n routing |
| Language | TypeScript, plain CSS |
| Scroll | Lenis |
| Type | [Silkscreen](https://fontsource.org/fonts/silkscreen) (display) · [VT323](https://fontsource.org/fonts/vt323) (body), self-hosted via Fontsource |
| Hosting | Netlify, deployed from `main` |
| Automation | GitHub Actions, Dependabot |

## ▌RUN IT

Requires **Node ≥ 22.23.4** (CI and Netlify use Node 24).

```bash
npm install
npm run dev
```

Open <http://localhost:4321>. Other scripts:

```bash
npm run build
```

```bash
npm run preview
```

`build` writes the site to `dist/`, which is what Netlify publishes.

## ▌PROJECT MAP

```
src/
├── content.ts            All copy, ES and EN. One place to edit text.
├── components/
│   ├── Home.astro        The whole page: monitor, layers, sections
│   └── CvMenu.astro      CV download menu
├── pages/
│   ├── index.astro       Spanish  (/)
│   └── en/index.astro    English  (/en/)
├── scripts/backdrop.ts   Canvas backdrop
└── styles/global.css     Design tokens and CRT styling
public/
├── audio/                Music, VHS load and TV-off sounds
└── favicon.svg
PRODUCT.md                Audience, purpose, constraints
DESIGN.md                 Design system: colour, type, components
```

### Editing content

Everything the visitor reads lives in [`src/content.ts`](src/content.ts), with the same shape for `es` and `en`. To add a certification or a project, add one entry to the matching list in **both** languages. Do not invent employers, dates or metrics: anything in `[square brackets]` is a placeholder for real data.

## ▌DESIGN TOKENS

The full system is in [`DESIGN.md`](DESIGN.md). The core palette:

| Token | Hex | Use |
|---|---|---|
| `ground` | `#070c05` | Page background |
| `panel` | `#0d1608` | Slabs, nav |
| `text` | `#bfe83a` | Body text |
| `muted` | `#7fa83a` | Secondary text |
| `phosphor-1` | `#c3f23b` | Primary accent, buttons |
| `phosphor-5` | `#e9ffa8` | Highlights |
| `lit-screen` | `#3b7f1d` | Lit CRT surface |

Display type is Silkscreen, everything else VT323. Corners are square on purpose; only the monitor bezel is rounded.

## ▌AUTOMATION

| Workflow | Runs | Does |
|---|---|---|
| `ci.yml` | push to `main`, PRs | `npm ci`, `npm run build`, `npm audit` on production dependencies |
| `codeql.yml` | push, PRs, weekly | CodeQL static analysis for JavaScript / TypeScript |
| `dependency-review.yml` | PRs | Blocks new dependencies with high-severity vulnerabilities |
| Dependabot | weekly | Updates npm packages and GitHub Actions |

## ▌DEPLOY

Netlify builds from `main`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node:** 24 (`NODE_VERSION=24`)

## ▌ACCESSIBILITY

Targets WCAG AA. The language toggle and CV menu work with the keyboard and screen readers, there is a skip link to the content, and audio never starts on its own.

## ▌CONTACT

- **Web:** <https://rikicm.dev>
- **LinkedIn:** [ricardo-carreno-marino](https://www.linkedin.com/in/ricardo-carreno-marino)
- **GitHub:** [RIKICARRE](https://github.com/RIKICARRE)
- **Email:** ricardocarremar@icloud.com

---

## ▌RESUMEN EN ESPAÑOL

Portfolio bilingüe (ES en `/`, EN en `/en/`) hecho con **Astro** y desplegado en **Netlify**. La estética es un monitor VHS de fósforo verde en el que un paquete de datos gana una capa del modelo TCP/IP en cada sección. Para ejecutarlo: `npm install` y `npm run dev`. Todo el texto está en `src/content.ts`; para añadir una certificación o un proyecto, añade una entrada en ambos idiomas. El CI compila el sitio en cada cambio, y CodeQL, la revisión de dependencias y Dependabot vigilan la seguridad.

```
  > EOF
  > ■ STOP
```
