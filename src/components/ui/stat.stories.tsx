import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Stat } from "@/components/ui/stat"

const meta = {
  title: "Components/Stat",
  component: Stat,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A single headline number for a dashboard, with an optional change against an earlier period. Format the number and the change before passing them in. The arrow shows which way it moved and the colour shows whether that's good, so set `sentiment` when up is bad.",
      },
    },
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["up", "down", "flat"] },
    sentiment: {
      control: "inline-radio",
      options: ["positive", "negative", "neutral"],
    },
  },
  args: {
    className: "max-w-(--grid-280)",
    label: "Revenue",
    value: "$48,290",
    delta: "+12.4%",
    direction: "up",
    period: "vs last month",
  },
} satisfies Meta<typeof Stat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const GoingDown: Story = {
  args: {
    label: "Subscribers",
    value: "2,184",
    delta: "-3.1%",
    direction: "down",
  },
}

export const UpIsBad: Story = {
  args: {
    label: "Support tickets",
    value: "312",
    delta: "+18",
    direction: "up",
    sentiment: "negative",
  },
}

export const NoChange: Story = {
  args: {
    label: "Open rate",
    value: "41%",
    delta: "0%",
    direction: "flat",
  },
}

export const ValueOnly: Story = {
  args: {
    label: "Active projects",
    value: "12",
    delta: undefined,
    period: undefined,
  },
}

export const InARow: Story = {
  render: () => (
    <div className="grid max-w-(--grid-1024) gap-(--number-spacing-sm) tablet:grid-cols-2 desktop-sm:grid-cols-4">
      <Stat
        label="Revenue"
        value="$48,290"
        delta="+12.4%"
        direction="up"
        period="vs last month"
      />
      <Stat
        label="Subscribers"
        value="2,184"
        delta="-3.1%"
        direction="down"
        period="vs last month"
      />
      <Stat
        label="Support tickets"
        value="312"
        delta="+18"
        direction="up"
        sentiment="negative"
        period="vs last month"
      />
      <Stat
        label="Open rate"
        value="41%"
        delta="0%"
        direction="flat"
        period="vs last month"
      />
    </div>
  ),
}
