import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { icons, SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import colourGuidelines from "./foundations/colour.guidelines.md?raw"
import typeGuidelines from "./foundations/type.guidelines.md?raw"
import spacingGuidelines from "./foundations/spacing-and-corners.guidelines.md?raw"
import elevationGuidelines from "./foundations/elevation.guidelines.md?raw"
import layoutGuidelines from "./foundations/layout.guidelines.md?raw"
import iconsGuidelines from "./foundations/icons.guidelines.md?raw"
import tokensGuidelines from "./foundations/tokens.guidelines.md?raw"
import { TokenReference } from "./foundations/tokens"

const meta = {
  title: "Foundations",
  parameters: {
    layout: "padded",
    controls: { disable: true },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// First, because every other foundation page shows one slice of these tokens.
export const Tokens: Story = {
  parameters: { docs: { description: { story: tokensGuidelines } } },
  render: () => <TokenReference />,
}

const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const neutrals = [
  [
    "white",
    "white-t75",
    "white-t50",
    "white-t25",
    "white-t15",
    "white-t05",
    "neutral-transparent",
  ],
  ["black", "black-t75", "black-t50", "black-t25", "black-t15", "black-t05"],
]

const palettes = [
  "brand",
  "slate",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "purple",
  "pink",
]

const semanticColours = [
  {
    group: "Surface",
    tokens: [
      "surface-primary",
      "surface-secondary",
      "surface-tertiary",
      "surface-inverted",
      "surface-hover",
      "surface-neutral",
      "transparent",
    ],
  },
  {
    group: "Content",
    tokens: [
      "content-primary",
      "content-secondary",
      "content-tertiary",
      "content-on-inverted",
      "content-error",
    ],
  },
  {
    group: "Border",
    tokens: [
      "border-primary",
      "border-secondary",
      "border-focus",
      "border-focus-error",
    ],
  },
  {
    group: "Action",
    tokens: [
      "action-primary",
      "action-primary-hover",
      "action-destructive",
      "action-destructive-hover",
      "content-on-action",
    ],
  },
  { group: "Disabled", tokens: ["disabled"] },
  { group: "Info", tokens: ["info-surface", "info-default", "info-content", "info-border"] },
  {
    group: "Success",
    tokens: ["success-surface", "success-default", "success-content", "success-border"],
  },
  {
    group: "Warning",
    tokens: ["warning-surface", "warning-default", "warning-content", "warning-border"],
  },
  {
    group: "Error",
    tokens: ["error-surface", "error-default", "error-content", "error-border"],
  },
  { group: "Data", tokens: ["data-1", "data-2", "data-3", "data-4", "data-5"] },
]

const textStyles = [
  { name: "heading-xl", spec: "Figtree Bold, 32 / 40" },
  { name: "heading-lg", spec: "Figtree Bold, 20 / 24" },
  { name: "heading-md", spec: "Figtree Bold, 16 / 24" },
  { name: "heading-sm", spec: "Figtree Bold, 14 / 24" },
  { name: "body-lg", spec: "Figtree Regular, 16 / 24" },
  { name: "body-md", spec: "Figtree Regular, 14 / 24" },
  { name: "body-sm", spec: "Figtree Regular, 12 / 24" },
  { name: "button-lg", spec: "Figtree Medium, 16 / 24, uppercase, 1px tracking" },
  { name: "button-md", spec: "Figtree Medium, 14 / 24, uppercase, 1px tracking" },
  { name: "button-sm", spec: "Figtree Medium, 12 / 24, uppercase, 1px tracking" },
  { name: "link-lg", spec: "Figtree Regular, 16 / 24, underlined" },
  { name: "link-md", spec: "Figtree Regular, 14 / 24, underlined" },
  { name: "link-sm", spec: "Figtree Regular, 12 / 24, underlined" },
  { name: "label-lg", spec: "Figtree Regular, 16 / 16" },
  { name: "label-md", spec: "Figtree Regular, 14 / 16" },
  { name: "label-sm", spec: "Figtree Regular, 12 / 16" },
  { name: "label-xs", spec: "Figtree Regular, 10 / 16" },
]

const spacing = [
  { name: "none", value: 0 },
  { name: "xxs", value: 4 },
  { name: "xs", value: 8 },
  { name: "sm", value: 16 },
  { name: "md", value: 24 },
  { name: "lg", value: 32 },
  { name: "xl", value: 40 },
  { name: "xxl", value: 48 },
  { name: "xxxl", value: 64 },
  { name: "section", value: 128 },
]

const radii = [
  { name: "none", value: "0" },
  { name: "xxxs", value: "2" },
  { name: "xxs", value: "4" },
  { name: "xs", value: "8" },
  { name: "sm", value: "16" },
  { name: "md", value: "24" },
  { name: "lg", value: "32" },
  { name: "xl", value: "40" },
  { name: "xxl", value: "48" },
  { name: "xxxl", value: "64" },
  { name: "full", value: "9999" },
]

const borderWidths = [
  { name: "none", value: 0 },
  { name: "sm", value: 1 },
  { name: "md", value: 2 },
  { name: "lg", value: 4 },
  { name: "xl", value: 8 },
]

const breakpoints = [
  { name: "watch", value: 160 },
  { name: "mobile-sm", value: 320 },
  { name: "mobile", value: 400 },
  { name: "tablet", value: 768 },
  { name: "desktop-sm", value: 1024 },
  { name: "desktop-md", value: 1280 },
  { name: "desktop", value: 1440 },
  { name: "tv", value: 1920 },
]

const shadows = [
  { name: "shadow-sm", variable: "--shadow-sm" },
  { name: "shadow-md", variable: "--shadow-md" },
  { name: "shadow-lg", variable: "--shadow-lg" },
  { name: "focus ring / primary", variable: "--shadow-focus-primary" },
  { name: "focus ring / error", variable: "--shadow-focus-error" },
]

// Transparent colours are stored as rgb(r g b / a%). Show them as hex + opacity.
function formatColour(value: string) {
  const match = value.match(/rgb\((\d+) (\d+) (\d+) \/ (\d+)%\)/)
  if (!match) return value.trim()

  const [, red, green, blue, alpha] = match
  const hex = [red, green, blue]
    .map((channel) => Number(channel).toString(16).padStart(2, "0"))
    .join("")

  return `#${hex} ${alpha}%`
}

function Swatch({ name }: { name: string }) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    `--color-${name}`
  )

  return (
    <div className="flex flex-col gap-(--number-spacing-xxs)">
      <div
        className="h-(--grid-48) overflow-hidden rounded-(--number-radius-xs) border-(length:--number-border-width-sm) border-border"
        style={{
          background:
            "repeating-conic-gradient(var(--color-slate-300) 0 25%, var(--color-white) 0 50%) 0 0 / 16px 16px",
        }}
      >
        <div
          className="size-full"
          style={{ backgroundColor: `var(--color-${name})` }}
        />
      </div>
      <span className="text-label-xs text-content-primary">{name}</span>
      <span className="font-mono text-label-xs text-content-secondary">
        {formatColour(value)}
      </span>
    </div>
  )
}

export const Colour: Story = {
  parameters: { docs: { description: { story: colourGuidelines } } },
  render: () => (
    <div className="flex flex-col gap-(--number-spacing-lg)">
      <section className="flex flex-col gap-(--number-spacing-sm)">
        <h2>Semantic</h2>
        {semanticColours.map(({ group, tokens }) => (
          <div key={group} className="flex flex-col gap-(--number-spacing-xs)">
            <h3>{group}</h3>
            <div className="grid grid-cols-2 gap-(--number-spacing-sm) tablet:grid-cols-4 desktop-sm:grid-cols-5">
              {tokens.map((name) => (
                <Swatch key={name} name={name} />
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-(--number-spacing-sm)">
        <h2>Primitives</h2>
        <div className="flex flex-col gap-(--number-spacing-xs)">
          <h3>Neutral</h3>
          {neutrals.map((row) => (
            <div key={row[0]} className="grid grid-cols-4 gap-(--number-spacing-xs) tablet:grid-cols-11">
              {row.map((name) => (
                <Swatch key={name} name={name} />
              ))}
            </div>
          ))}
        </div>
        {palettes.map((palette) => (
          <div key={palette} className="flex flex-col gap-(--number-spacing-xs)">
            <h3 className="capitalize">{palette}</h3>
            <div className="grid grid-cols-4 gap-(--number-spacing-xs) tablet:grid-cols-11">
              {steps.map((step) => (
                <Swatch key={step} name={`${palette}-${step}`} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  ),
}

export const Type: Story = {
  parameters: { docs: { description: { story: typeGuidelines } } },
  render: () => (
    <div className="flex flex-col gap-(--number-spacing-sm)">
      {textStyles.map(({ name, spec }) => (
        <div
          key={name}
          className="flex flex-col gap-(--number-spacing-xxs) border-b-(length:--number-border-width-sm) border-border pb-(--number-spacing-sm) tablet:flex-row tablet:items-baseline tablet:justify-between tablet:gap-(--number-spacing-lg)"
        >
          <span
            style={{
              fontSize: `var(--text-${name})`,
              lineHeight: `var(--text-${name}--line-height)`,
              fontWeight: `var(--text-${name}--font-weight)`,
              letterSpacing: name.startsWith("button")
                ? "var(--tracking-button)"
                : undefined,
              textTransform: name.startsWith("button")
                ? "uppercase"
                : undefined,
              textDecoration: name.startsWith("link") ? "underline" : undefined,
            }}
          >
            {name}
          </span>
          <span className="text-label-sm text-content-secondary">{spec}</span>
        </div>
      ))}
    </div>
  ),
}

export const SpacingAndCorners: Story = {
  parameters: { docs: { description: { story: spacingGuidelines } } },
  name: "Spacing & Corners",
  render: () => (
    <div className="flex flex-col gap-(--number-spacing-lg)">
      <section className="flex flex-col gap-(--number-spacing-sm)">
        <h2>Spacing</h2>
        {spacing.map(({ name, value }) => (
          <div key={name} className="flex items-center gap-(--number-spacing-sm)">
            <span className="w-(--grid-96) shrink-0 text-label-sm text-content-secondary">
              {name}, {value}px
            </span>
            <div
              className="h-(--grid-16) bg-brand-600"
              style={{ width: `var(--number-spacing-${name})` }}
            />
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-(--number-spacing-sm)">
        <h2>Corners</h2>
        <div className="flex flex-wrap gap-(--number-spacing-sm)">
          {radii.map(({ name, value }) => (
            <div key={name} className="flex flex-col gap-(--number-spacing-xxs)">
              <div
                className="size-(--grid-128) border-(length:--number-border-width-sm) border-border-primary bg-surface-tertiary"
                style={{ borderRadius: `var(--number-radius-${name})` }}
              />
              <span className="text-label-xs text-content-secondary">
                {name}, {value}px
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-(--number-spacing-sm)">
        <h2>Border width</h2>
        <div className="flex flex-wrap gap-(--number-spacing-sm)">
          {borderWidths.map(({ name, value }) => (
            <div key={name} className="flex flex-col gap-(--number-spacing-xxs)">
              <div
                className="size-(--grid-80) border-solid border-border-primary"
                style={{ borderWidth: `var(--number-border-width-${name})` }}
              />
              <span className="text-label-xs text-content-secondary">
                {name}, {value}px
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
}

export const Elevation: Story = {
  parameters: { docs: { description: { story: elevationGuidelines } } },
  render: () => (
    <div className="flex flex-wrap gap-(--number-spacing-xxl) p-(--number-spacing-lg)">
      {shadows.map(({ name, variable }) => (
        <div key={name} className="flex flex-col gap-(--number-spacing-sm)">
          <div
            className="size-(--grid-128) rounded-(--number-radius-xs) bg-surface-primary"
            style={{ boxShadow: `var(${variable})` }}
          />
          <span className="text-label-sm text-content-secondary">{name}</span>
        </div>
      ))}
    </div>
  ),
}

export const Layout: Story = {
  parameters: { docs: { description: { story: layoutGuidelines } } },
  render: () => (
    <div className="flex flex-col gap-(--number-spacing-sm)">
      <h2>Breakpoints</h2>
      {breakpoints.map(({ name, value }) => (
        <div key={name} className="flex items-center gap-(--number-spacing-sm)">
          <span className="w-(--grid-128) shrink-0 text-label-sm text-content-secondary">
            {name}, {value}px
          </span>
          <div
            className="h-(--grid-16) max-w-full bg-brand-200"
            style={{ width: value }}
          />
        </div>
      ))}
    </div>
  ),
}

const iconNames = Object.keys(icons) as (keyof typeof icons)[]

function IconGallery() {
  const [query, setQuery] = React.useState("")
  const deferredQuery = React.useDeferredValue(query)
  const matches = iconNames.filter((name) =>
    name.toLowerCase().includes(deferredQuery.trim().toLowerCase().replace(/[\s-]/g, ""))
  )

  return (
    <div className="flex flex-col gap-(--number-spacing-lg)">
      <section className="flex flex-col gap-(--number-spacing-sm)">
        <h2>Sizes</h2>
        <div className="flex items-end gap-(--number-spacing-lg)">
          <div className="flex flex-col items-center gap-(--number-spacing-xxs)">
            <SearchIcon strokeWidth={2} className="size-(--grid-16)" />
            <span className="text-label-xs text-content-secondary">16, strokeWidth 2</span>
          </div>
          <div className="flex flex-col items-center gap-(--number-spacing-xxs)">
            <SearchIcon strokeWidth={2} className="size-(--grid-24)" />
            <span className="text-label-xs text-content-secondary">24, strokeWidth 2</span>
          </div>
          <div className="flex flex-col items-center gap-(--number-spacing-xxs)">
            <SearchIcon strokeWidth={2} className="size-(--grid-32)" />
            <span className="text-label-xs text-content-secondary">32, strokeWidth 2</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-(--number-spacing-sm)">
        <h2>Lucide</h2>
        <div className="flex flex-col gap-(--number-spacing-xs) tablet:flex-row tablet:items-center tablet:gap-(--number-spacing-sm)">
          <Input
            aria-label="Search icons"
            placeholder="Search icons"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="tablet:w-(--grid-320)"
          />
          <span className="text-label-sm text-content-secondary">
            {matches.length} of {iconNames.length} icons
          </span>
        </div>
        <div className="grid grid-cols-2 gap-(--number-spacing-xs) tablet:grid-cols-5 desktop-sm:grid-cols-8">
          {matches.map((name) => {
            const Icon = icons[name]

            return (
              <div
                key={name}
                className="flex flex-col items-center gap-(--number-spacing-xs) rounded-(--number-radius-xs) border-(length:--number-border-width-sm) border-border p-(--number-spacing-xs)"
              >
                <Icon className="size-(--grid-24)" />
                <span className="w-full text-center text-label-xs break-words text-content-secondary">
                  {name}Icon
                </span>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export const Icons: Story = {
  parameters: { docs: { description: { story: iconsGuidelines } } },
  render: () => <IconGallery />,
}
