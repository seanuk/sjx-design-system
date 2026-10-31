import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  BellIcon,
  CircleCheckIcon,
  InboxIcon,
  SparklesIcon,
  StarIcon,
  TagIcon,
  TriangleAlertIcon,
} from "lucide-react"

import { Chip } from "@/components/ui/chip"

const tones = [
  "default",
  "primary",
  "info",
  "success",
  "warning",
  "error",
  "neutral",
  "solid",
  "outline",
] as const

const meta = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The single labelling and interaction token. `variant` sets the behaviour: `input` is a label that becomes removable with `onRemove`, `filter` is a toggle (`aria-pressed`), `suggestion` is a clickable action and `status` shows a named state. `tone` sets the colour, separately from the behaviour. `count`, `max` and `dot` cover counts and indicators.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["input", "filter", "suggestion", "status"],
      table: { type: { summary: '"input" | "filter" | "suggestion" | "status"' } },
    },
    tone: {
      control: "select",
      options: tones,
      table: { type: { summary: tones.map((tone) => `"${tone}"`).join(" | ") } },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      table: { type: { summary: '"sm" | "default" | "lg"' } },
    },
    state: {
      control: "select",
      options: ["active", "enabled", "paused", "disabled", "processing"],
      table: {
        type: {
          summary: '"active" | "enabled" | "paused" | "disabled" | "processing"',
        },
      },
    },
    icon: { control: false },
    onRemove: { control: false },
    onSelect: { control: false },
    children: { control: "text" },
  },
  args: {
    children: "Newsletter",
    variant: "input",
    size: "default",
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-(--number-spacing-xs)">
      <span className="text-label-sm text-content-secondary">{label}</span>
      <div className="flex flex-wrap items-center gap-(--number-spacing-xs)">
        {children}
      </div>
    </div>
  )
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-(--number-spacing-sm) rounded-(--number-radius-xs) border-(length:--number-border-width-sm) border-border p-(--number-spacing-sm)">
      <h3 className="text-heading-sm">{title}</h3>
      {children}
    </section>
  )
}

function FilterBar() {
  const [selected, setSelected] = React.useState(["Active", "Paused"])

  return (
    <div className="flex flex-wrap items-center gap-(--number-spacing-xs)">
      <span className="text-label-md text-content-secondary">Show:</span>
      {["Active", "Paused", "Draft", "Archived"].map((name) => (
        <Chip
          key={name}
          variant="filter"
          tone="neutral"
          selected={selected.includes(name)}
          onSelect={() =>
            setSelected((current) =>
              current.includes(name)
                ? current.filter((item) => item !== name)
                : [...current, name]
            )
          }
        >
          {name}
        </Chip>
      ))}
    </div>
  )
}

function TagEditor() {
  const [tags, setTags] = React.useState(["Newsletter", "VIP", "Prospect"])

  return (
    <div className="flex flex-wrap items-center gap-(--number-spacing-xs)">
      {tags.map((tag) => (
        <Chip
          key={tag}
          onRemove={() =>
            setTags((current) => current.filter((item) => item !== tag))
          }
        >
          {tag}
        </Chip>
      ))}
    </div>
  )
}

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-(--number-spacing-sm)">
      <Row label="input">
        <TagEditor />
      </Row>
      <Row label="filter">
        <Chip variant="filter" selected>
          Active
        </Chip>
        <Chip variant="filter">Paused</Chip>
      </Row>
      <Row label="suggestion">
        <Chip variant="suggestion" icon={SparklesIcon}>
          Summarize
        </Chip>
        <Chip variant="suggestion">Draft a reply</Chip>
      </Row>
      <Row label="status">
        <Chip variant="status" state="active">
          Active
        </Chip>
      </Row>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-(--number-spacing-xs)">
      <Chip size="sm" onRemove={() => {}}>
        Small
      </Chip>
      <Chip onRemove={() => {}}>Default</Chip>
      <Chip size="lg" onRemove={() => {}}>
        Large
      </Chip>
    </div>
  ),
}

export const Tones: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-(--number-spacing-xs)">
      {tones.map((tone) => (
        <Chip key={tone} tone={tone} className="capitalize">
          {tone}
        </Chip>
      ))}
    </div>
  ),
}

export const Status: Story = {
  render: () => (
    <div className="flex flex-col gap-(--number-spacing-sm)">
      <Row label="Named states">
        <Chip variant="status" state="active">
          Active
        </Chip>
        <Chip variant="status" state="enabled">
          Enabled
        </Chip>
        <Chip variant="status" state="paused">
          Paused
        </Chip>
        <Chip variant="status" state="disabled">
          Disabled
        </Chip>
        <Chip variant="status" state="processing">
          Processing
        </Chip>
      </Row>
      <Row label="Tones, with no named state">
        <Chip variant="status" tone="neutral">
          Inactive
        </Chip>
        <Chip variant="status" tone="info">
          In review
        </Chip>
        <Chip tone="success" icon={CircleCheckIcon}>
          Verified
        </Chip>
        <Chip tone="warning" icon={TriangleAlertIcon}>
          Needs review
        </Chip>
      </Row>
      <Row label="Without a dot">
        <Chip variant="status" state="active" dot={false}>
          Active
        </Chip>
        <Chip variant="status" state="paused" dot={false}>
          Paused
        </Chip>
        <Chip variant="status" state="disabled" dot={false}>
          Disabled
        </Chip>
      </Row>
    </div>
  ),
}

export const WithCount: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-(--number-spacing-xs)">
      <Chip count={3} />
      <Chip count={120} max={99} />
      <Chip tone="primary" count={7}>
        Messages
      </Chip>
      <Chip tone="outline" dot>
        Beta
      </Chip>
      <Chip tone="neutral" dot>
        Updated
      </Chip>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-(--number-spacing-xs)">
      <Chip icon={TagIcon}>Newsletter</Chip>
      <Chip tone="success" icon={StarIcon}>
        VIP
      </Chip>
      <Chip tone="primary" icon={SparklesIcon} onRemove={() => {}}>
        AI suggestion
      </Chip>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-(--number-spacing-xs)">
      <Chip disabled onRemove={() => {}}>
        Input
      </Chip>
      <Chip variant="filter" disabled>
        Filter
      </Chip>
      <Chip variant="suggestion" disabled>
        Suggestion
      </Chip>
    </div>
  ),
}

export const Focused: Story = {
  args: { variant: "suggestion", children: "Draft a reply" },
  parameters: { pseudo: { focusVisible: true } },
}

export const InContext: Story = {
  render: () => (
    <div className="grid gap-(--number-spacing-sm) tablet:grid-cols-2">
      <Panel title="Static labels">
        <div className="flex flex-col gap-(--number-spacing-xs)">
          <Row label="Status">
            <Chip variant="status" state="active">
              Active
            </Chip>
          </Row>
          <Row label="Category">
            <Chip tone="neutral">Newsletter</Chip>
            <Chip tone="neutral">Promotional</Chip>
          </Row>
          <Row label="Tags">
            <Chip size="sm" tone="primary">
              VIP
            </Chip>
            <Chip size="sm" tone="neutral">
              Q2
            </Chip>
          </Row>
          <Row label="Marker">
            <Chip size="sm" tone="solid">
              New
            </Chip>
          </Row>
        </div>
      </Panel>
      <Panel title="Filter bar">
        <FilterBar />
      </Panel>
      <Panel title="Tag editor">
        <TagEditor />
      </Panel>
      <Panel title="Count indicators">
        <div className="flex flex-wrap items-center gap-(--number-spacing-sm)">
          <span className="flex items-center gap-(--number-spacing-xs) text-body-md">
            <InboxIcon className="size-(--grid-16)" />
            Messages
            <Chip count={12} max={9} size="sm" />
          </span>
          <span className="flex items-center gap-(--number-spacing-xs) text-body-md">
            <BellIcon className="size-(--grid-16)" />
            Notifications
            <Chip count={3} size="sm" />
          </span>
          <span className="flex items-center gap-(--number-spacing-xs) text-body-md">
            <TriangleAlertIcon className="size-(--grid-16)" />
            Alerts
            <Chip size="sm" tone="neutral" dot>
              2 new
            </Chip>
          </span>
        </div>
      </Panel>
    </div>
  ),
}
