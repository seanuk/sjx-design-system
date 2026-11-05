import * as React from "react"
import { ArrowRightIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import css from "@/app/globals.css?raw"

type Layer = "Primitives" | "Semantic" | "Component" | "shadcn roles"

type Token = {
  name: string
  value: string
  layer: Layer
  group: string
}

// Reads the token declarations straight from globals.css, so this page lists
// whatever the theme holds. Only the light theme is read: `@theme static` and
// `:root`. Text styles have their own page.
function parseTokens(source: string) {
  const tokens: Token[] = []
  let block: "theme" | "root" | null = null
  let section = ""

  for (const raw of source.split("\n")) {
    const line = raw.trim()

    if (line.startsWith("@theme static")) block = "theme"
    else if (line.startsWith(":root")) block = "root"
    else if (line.startsWith("@") || line.startsWith(".") || line === "}") block = null
    if (!block) continue

    const comment = line.match(/^\/\*\s*(.+?)\s*\*\/$/)
    if (comment && /^(Primitives|Semantic|Components|shadcn)/.test(comment[1])) {
      section = comment[1]
    }

    const declaration = line.match(/^(--[\w-]+):\s*(.+);$/)
    if (!declaration) continue
    const [, name, value] = declaration
    const placed = place(name, value, block, section)
    if (placed) tokens.push({ name, value, ...placed })
  }

  return tokens
}

const statusGroups = ["info", "success", "warning", "error"]

function place(
  name: string,
  value: string,
  block: "theme" | "root",
  section: string
): Pick<Token, "layer" | "group"> | null {
  if (block === "theme") {
    if (name.startsWith("--text-") || name.startsWith("--tracking-")) return null
    if (name.startsWith("--breakpoint-")) return { layer: "Primitives", group: "Breakpoints" }
    if (name.startsWith("--shadow-")) return { layer: "Semantic", group: "Shadow" }

    const colour = name.replace("--color-", "")
    if (colour.startsWith("brand-")) return { layer: "Primitives", group: "Brand (alias of blue)" }
    if (!value.includes("var(")) {
      const palette = colour.match(/^([a-z]+)-\d+$/)?.[1]
      return {
        layer: "Primitives",
        group: palette ? `Colour: ${palette}` : "Colour: neutral",
      }
    }
    const first = colour.split("-")[0]
    const group = statusGroups.includes(first) ? "status" : first
    return { layer: "Semantic", group: `Colour: ${group}` }
  }

  if (name.startsWith("--grid-")) return { layer: "Primitives", group: "Grid" }
  if (name.startsWith("--number-")) {
    const kind = name.replace("--number-", "").replace(/-[a-z]+$/, "")
    return { layer: "Semantic", group: kind.replace(/-/g, " ") }
  }
  if (section.startsWith("Components:")) {
    return { layer: "Component", group: section.replace("Components:", "").trim() }
  }
  if (section.startsWith("shadcn")) {
    return { layer: "shadcn roles", group: name.startsWith("--chart-") ? "chart" : name.startsWith("--sidebar") ? "sidebar" : "core" }
  }
  return null
}

const tokens = parseTokens(css)
const byName = new Map(tokens.map((token) => [token.name, token]))

// The next token in the chain, when the value is a single var().
function reference(value: string) {
  return value.match(/^var\((--[\w-]+)\)$/)?.[1]
}

function chain(token: Token) {
  const steps: string[] = []
  let next = reference(token.value)
  // Stops on a token that points back into its own chain.
  while (next && !steps.includes(next)) {
    steps.push(next)
    next = byName.get(next) ? reference(byName.get(next)!.value) : undefined
  }
  return steps
}

function resolve(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

const looksLikeColour = (value: string) =>
  /^(#|rgb|oklch|hsl|transparent)/.test(value)

function Preview({ token, value }: { token: Token; value: string }) {
  if (token.name.startsWith("--shadow-")) {
    return (
      <span
        className="block size-(--grid-24) rounded-(--number-radius-xxs) bg-surface-primary"
        style={{ boxShadow: `var(${token.name})` }}
      />
    )
  }
  if (looksLikeColour(value)) {
    return (
      <span
        className="block size-(--grid-24) rounded-(--number-radius-xxs) border-(length:--number-border-width-sm) border-border"
        style={{
          background: `linear-gradient(var(${token.name}), var(${token.name})), repeating-conic-gradient(var(--color-slate-300) 0 25%, var(--color-white) 0 50%) 0 0 / var(--grid-8) var(--grid-8)`,
        }}
      />
    )
  }
  // Keeps the row height the same as rows with a swatch.
  return <span className="block size-(--grid-24)" />
}

function TokenTable({ rows }: { rows: Token[] }) {
  return (
    // Fixed columns, so the tables line up from one group to the next.
    <Table density="compact" className="table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead className="w-(--grid-48)">
            <span className="sr-only">Preview</span>
          </TableHead>
          <TableHead className="w-1/3">Token</TableHead>
          <TableHead className="w-1/3">Points to</TableHead>
          <TableHead>Resolves to</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((token) => {
          const steps = chain(token)
          const value = resolve(token.name) || token.value

          return (
            <TableRow key={token.name}>
              <TableCell>
                <Preview token={token} value={value} />
              </TableCell>
              <TableCell className="font-mono text-label-sm">{token.name}</TableCell>
              <TableCell className="font-mono text-label-sm text-content-secondary">
                {steps.length ? (
                  <span className="flex items-center gap-(--number-spacing-xxs)">
                    {steps.map((step, index) => (
                      <React.Fragment key={step}>
                        {index > 0 ? (
                          <ArrowRightIcon className="size-(--grid-12) shrink-0 text-content-tertiary" />
                        ) : null}
                        <span className={index > 0 ? "text-content-tertiary" : undefined}>
                          {step}
                        </span>
                      </React.Fragment>
                    ))}
                  </span>
                ) : (
                  <span className="text-content-tertiary">Raw value</span>
                )}
              </TableCell>
              <TableCell className="font-mono text-label-sm text-content-secondary">
                {value}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

const layers: { layer: Layer; summary: string }[] = [
  { layer: "Primitives", summary: "Raw values. No meaning." },
  { layer: "Semantic", summary: "A primitive with a job." },
  { layer: "Component", summary: "A semantic token for one component." },
  { layer: "shadcn roles", summary: "shadcn's names, mapped to semantic." },
]

function LayerDiagram() {
  return (
    <div className="grid grid-cols-1 gap-(--number-spacing-xs) tablet:grid-cols-4">
      {layers.map(({ layer, summary }) => (
        <div
          key={layer}
          className="flex flex-col gap-(--number-spacing-xxs) rounded-(--number-radius-xs) border-(length:--number-border-width-sm) border-border bg-surface-tertiary p-(--number-spacing-sm)"
        >
          <span className="text-heading-sm">{layer}</span>
          <span className="text-body-sm text-content-secondary">{summary}</span>
          <span className="text-label-xs text-content-tertiary">
            {tokens.filter((token) => token.layer === layer).length} tokens
          </span>
        </div>
      ))}
    </div>
  )
}

function Example() {
  const token = byName.get("--button-primary-surface")
  if (!token) return null
  const steps = [token.name, ...chain(token)]

  return (
    <div className="flex flex-wrap items-center gap-(--number-spacing-xs) rounded-(--number-radius-xs) border-(length:--number-border-width-sm) border-border p-(--number-spacing-sm)">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          {index > 0 ? <ArrowRightIcon className="size-(--grid-16) text-content-tertiary" /> : null}
          <span className="flex flex-col">
            <span className="text-label-xs text-content-tertiary">
              {byName.get(step)?.layer}
            </span>
            <span className="font-mono text-label-sm">{step}</span>
          </span>
        </React.Fragment>
      ))}
      <ArrowRightIcon className="size-(--grid-16) text-content-tertiary" />
      <span className="flex items-center gap-(--number-spacing-xxs)">
        <Preview token={token} value={resolve(token.name)} />
        <span className="font-mono text-label-sm">{resolve(token.name)}</span>
      </span>
    </div>
  )
}

export function TokenReference() {
  const [query, setQuery] = React.useState("")
  const deferredQuery = React.useDeferredValue(query)
  const search = deferredQuery.trim().toLowerCase()

  const matches = tokens.filter(
    (token) =>
      !search ||
      token.name.includes(search) ||
      chain(token).some((step) => step.includes(search))
  )

  return (
    <div className="flex flex-col gap-(--number-spacing-lg)">
      <section className="flex flex-col gap-(--number-spacing-sm)">
        <h2>Layers</h2>
        <LayerDiagram />
        <h3>One token, followed down</h3>
        <Example />
      </section>

      <div className="flex flex-col gap-(--number-spacing-xs) tablet:flex-row tablet:items-center tablet:gap-(--number-spacing-sm)">
        <Input
          aria-label="Search tokens"
          placeholder="Search tokens, such as brand-600"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="tablet:w-(--grid-320)"
        />
        <span className="text-label-sm text-content-secondary">
          {matches.length} of {tokens.length} tokens
        </span>
      </div>

      {layers.map(({ layer }) => {
        const rows = matches.filter((token) => token.layer === layer)
        if (!rows.length) return null
        const groups = [...new Set(rows.map((token) => token.group))]

        return (
          <section key={layer} className="flex flex-col gap-(--number-spacing-sm)">
            <h2>{layer}</h2>
            {groups.map((group) => (
              <div key={group} className="flex flex-col gap-(--number-spacing-xs)">
                <h3 className="capitalize">{group}</h3>
                <TokenTable rows={rows.filter((token) => token.group === group)} />
              </div>
            ))}
          </section>
        )
      })}
    </div>
  )
}
