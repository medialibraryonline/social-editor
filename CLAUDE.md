# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page React app that lets users build MLOL social-media post images from predefined templates and download them as JPEGs. Originally exported from Figma Make ("Customizable Figma Editor"), so the `src/imports/` directory and `figma:asset/` imports are machine-generated Figma output.

## Commands

```bash
npm i                 # install deps
npm run dev           # dev server (vite.config.ts)
npm run build         # plain build (vite.config.ts) — NOT used for deployment

# Deployment build (resolves figma:asset/ imports). Set --base per host:
npx vite build --config vite.config.figma.ts --base /          # release zip / root host
npx vite build --config vite.config.figma.ts --base /<repo>/   # GitHub Pages
```

There are no tests, linter, or typecheck script configured.

## Two Vite configs (important)

- `vite.config.ts` — base config used by `npm run dev`/`npm run build`. Does **not** handle `figma:asset/` imports.
- `vite.config.figma.ts` — adds a custom `figma-asset-resolver` plugin that rewrites `figma:asset/<file>` imports to `src/assets/<file>`. **Required for any real build**, since `src/imports/*` reference assets via the `figma:asset/` protocol. Always use this config when producing deployable output.

`@` is aliased to `src/` in both configs.

## Deployment

`.github/workflows/release-and-pages.yml` (manual `workflow_dispatch`) does everything: builds twice (base `/` for a release zip, base `/<repo>/` for Pages), creates a GitHub release with the zip, and deploys to Pages. The base path is configurable via workflow input. Node install uses `rm -f package-lock.json && npm install --include=optional --no-package-lock` to work around an npm optional-deps bug — keep that if editing the workflow.

## Architecture

- `src/main.tsx` → `App.tsx` → `TemplateEditor` — that's the whole app shell.
- `src/app/components/TemplateEditor.tsx` (~1100 lines) is the core: holds all editor state (`EditorState`), the form controls, portal data fetching, and the image export logic. Adding a new template or field happens here.
- `src/app/components/templates/` — the visual template components (`RisorsaTemplate`, `ListaEbookTemplate`, `ListaAudiolibriTemplate`, `ComunicazioneTemplate`, plus `compositions/`). `TemplateType` in `TemplateEditor.tsx` selects which one renders.
- `src/app/components/ui/` — shadcn/ui (Radix-based) primitives. Generated; generally don't hand-edit.
- `src/imports/` — raw Figma export (SVG path data + component scaffolds). Treat as generated; new work should live in `templates/` instead.
- `src/styles/index.css` is the single entry, importing `fonts`, `tailwind`, `theme`, `template` CSS in order. Tailwind v4.

### Key mechanisms

- **Image export**: `html2canvas` renders the canvas to a `1080×1350` JPEG at scale 2. Before capture, the element gets `data-download-mode="true"` (some CSS in `template.css` keys off this), is cloned into an off-screen container with reset styles, captured, then cleaned up. The fixed `1080×1350` dimensions are hardcoded in the export path and in `CanvasIsolator`.
- **CanvasIsolator** (`CanvasIsolator.tsx`) wraps the render target and overrides every theme CSS variable with plain hex/rgb values, because html2canvas cannot parse `oklch()` colors that Tailwind/theme.css use. If a color renders wrong only in the downloaded image, this is why — add the missing variable override here.
- **Portal data**: fetched at runtime from `https://mlol.link/api/v1/enti.json` (name/url/logo per portal), populating the searchable portal selector. Logos load cross-origin (`useCORS`/`allowTaint` set for export).
