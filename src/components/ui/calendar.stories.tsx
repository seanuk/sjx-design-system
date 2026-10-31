import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Calendar } from "@/components/ui/calendar"

const month = new Date(2026, 9, 1)

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Days are 40px to match `Button` and use the Primary button colours when selected.",
      },
    },
  },
  args: { defaultMonth: month },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: { mode: "single", selected: new Date(2026, 9, 15) },
}

export const Range: Story = {
  args: {
    mode: "range",
    selected: { from: new Date(2026, 9, 12), to: new Date(2026, 9, 16) },
  },
}

export const DisabledDays: Story = {
  args: {
    mode: "single",
    disabled: { before: new Date(2026, 9, 12) },
  },
}

export const MonthAndYearDropdowns: Story = {
  args: { mode: "single", captionLayout: "dropdown" },
}
