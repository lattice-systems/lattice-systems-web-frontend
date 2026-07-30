# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Lattice Systems** is the corporate/commercial site for the software studio behind SpaceIA. Single public-facing marketing page — no auth, no admin/client portals, no backend of its own.

This project is independent from the SpaceIA monorepo's MVP-phase rules and approval gates (own repo, own scope) — same status as `../spaceai-landing-web-frontend`, which it is cross-linked with: that project's footer already links out to `https://latticesystems.dev`, and this site's Proyectos section links back to the SpaceIA product.

## Tech Stack

- **Framework:** Angular 22 (standalone components, signals)
- **Styling:** Tailwind CSS v4
- **Icons:** `@ng-icons/lucide`
- **Component library:** spartan/ui (shadcn port for Angular), vendored locally under `libs/ui/` — same setup as `spaceai-landing-web-frontend`

## Architecture

Single-page site, one route (`/`):

```
src/app/
├── layouts/public-layout/    # navbar + router-outlet + footer
└── features/home/            # hero, nosotros, servicios, proyectos, proceso, contacto
```

Each section is a standalone component, assembled in `features/home/home.ts`.

## Design tokens

Brand navy (`--ls-navy: #193447`, sampled from the logo) replaces the blue accent used in `spaceai-landing-web-frontend` — same shadcn-style token structure (`--background`, `--foreground`, `--primary`, `--muted`, `--border`, etc.) defined in `src/styles.css`.

## Commands

```bash
npm install
ng serve                 # dev server at localhost:4200
ng build --configuration production
```

## Contact form

The Contacto section is a client-only demo (no backend call) — on submit it shows a "Gracias" success state. If a real backend is added later, wire it the same way `spaceai-landing-web-frontend`'s `contacto.ts` calls `ContactMessagesService`.

## Known placeholder

The "Ver SpaceAI" link in the Proyectos section points to `https://latticesystems.dev/spaceai` as a placeholder — update it once the real production URL for the SpaceIA landing site is known.
