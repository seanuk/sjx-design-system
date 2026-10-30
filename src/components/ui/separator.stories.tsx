import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Separator } from "@/components/ui/separator"

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A thin line using the `colour/border/secondary` token.",
      },
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  decorators: [
    (Story) => (
      <div className="w-(--grid-320)">
        <Story />
      </div>
    ),
  ],
}

export const Vertical: Story = {
  args: { orientation: "vertical" },
  decorators: [
    (Story) => (
      <div className="flex h-(--grid-40)">
        <Story />
      </div>
    ),
  ],
}
