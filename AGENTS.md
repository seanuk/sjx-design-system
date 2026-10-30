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
- Storybook (`npm run storybook`, port 6006)
- Import alias: `@/*`

## Style decisions
- Font: Figtree (`--font-sans`). Mono: Geist Mono (`--font-geist-mono`).
- Theme lives in `src/app/globals.css`. Change colours there only.
- Radius: set in `--radius`. Keep it consistent.
- Grid: 8px, plus 1, 2, 4 and 12. Off-grid values round up to the next `--grid-*` value.
- Avoid the default shadcn look. Do not use Inter or Space Grotesk.

## Rules for new components
- Add with `npx shadcn@latest add <name>`.
- Follow the token rules below. Convert everything `shadcn add` generates before finishing.
- Every component gets a matching `.stories.tsx` file.
- `shadcn add` generates `import { cn } from "cn"`. Change it to `@/lib/utils`, which knows the Figma text styles.
- Form controls built on a native element share `inputStyles` from `@/lib/input-styles`. Change input styling there.

## Token rules
Every visual value in components, stories and pages links to a token in `src/app/globals.css`. Do not use Tailwind's number scale (`gap-2`, `size-4`, `h-10`, `p-0`), its type scale (`text-sm`, `font-medium`, `leading-none`), raw values (`[3px]`, `#fff`) or palette colours from outside the theme.

Use the most specific token that exists: component, then semantic, then grid.

| Value | Token | Example |
|---|---|---|
| Gap, padding, margin | `--number-spacing-*` for 0, 4, 8, 16, 24, 32, 40, 48, 64, 128. `--grid-*` for 1, 2, 12 | `gap-(--number-spacing-xs)`, `gap-(--grid-12)` |
| Width, height, size, position | `--grid-*` | `size-(--grid-16)`, `-inset-x-(--grid-12)` |
| Corners | Component token, else `--number-radius-*` | `rounded-(--input-default-corner)` |
| Border width | Component token, else `--number-border-width-*` | `border-(length:--number-border-width-sm)` |
| Colour | Component token, else semantic `--color-*`, else a shadcn role, which points at the semantic tokens | `bg-(--button-primary-surface)`, `text-(--color-content-tertiary)` |
| Type | `text-<style>` from the Figma text styles, or its parts when the colour or size varies | `text-body-md`, `text-(length:--text-body-md)`, `font-(weight:--text-button-md--font-weight)` |
| Shadow | `shadow-sm`, `shadow-md`, `shadow-lg`, or a focus ring token | `shadow-(--shadow-focus-primary)` |

- Keyword values with no token are fine: `w-full`, `h-auto`, `flex-1`, `top-1/2`, `tracking-normal`. So is `stroke-3`, which draws 2px icon lines at 16px.
- If a value has no token, add it to Figma and `globals.css` first, or ask. Do not invent a one-off value.
- Figma strokes sit inside the frame, so subtract the border from padding: `px-[calc(var(--input-default-padding-l-r)-var(--input-default-border-width))]`.
- In `cn()`, put the line height after the text size. `cn` drops a line height that comes first.
- New Figma text styles must be added to the `font-size` group in `src/lib/utils.ts`, or `cn` treats them as colours.

## Status
- Done: project, shadcn, Figma tokens, text styles, Button, Input, form components, date picker, Storybook, GitHub repo.
- Published: https://sjx-design-system.vercel.app. Vercel deploys `main` automatically and gives other branches a preview.
- Not built yet: Icons and Logos foundation pages.
