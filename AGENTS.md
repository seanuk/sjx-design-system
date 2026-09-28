<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# SJX Design System

## Purpose
A personal design system. Storybook is the reference for all components.

## Stack
- Next.js (App Router, TypeScript, `src/` directory)
- Tailwind CSS
- shadcn/ui, built on Base UI
- Storybook (planned, not yet installed)
- Import alias: `@/*`

## Style decisions
- Font: Figtree (`--font-figtree`). Mono: Geist Mono.
- Theme lives in `src/app/globals.css`. Change colours there only.
- Radius: set in `--radius`. Keep it consistent.
- Avoid the default shadcn look. Do not use Inter or Space Grotesk.

## Rules for new components
- Add with `npx shadcn@latest add <name>`.
- Use theme variables. No hard-coded colours.
- Every component gets a matching `.stories.tsx` file.

## Status
- Done: project, shadcn, theme, Figtree font, GitHub repo.
- Next: install Storybook, write button stories, publish.
