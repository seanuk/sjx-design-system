import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Slider } from "@/components/ui/slider"

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "No Figma component yet. Built from the `selection/*` tokens, with the input focus ring on the thumb.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-(--grid-320)">
        <Story />
      </div>
    ),
  ],
  args: { "aria-label": "Example slider", defaultValue: [40] },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Range: Story = {
  args: { "aria-label": "Example range", defaultValue: [25, 75] },
}

export const Focused: Story = {
  parameters: { pseudo: { focusVisible: true } },
}

export const Disabled: Story = {
  args: { disabled: true },
}
