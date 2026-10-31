import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Built from the `--selection-*` tokens, with the input focus rings.",
      },
    },
  },
  args: { defaultValue: "one", "aria-label": "Example options" },
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center gap-(--number-spacing-xs)">
        <RadioGroupItem value="one" id="radio-one" />
        <Label htmlFor="radio-one">Option one</Label>
      </div>
      <div className="flex items-center gap-(--number-spacing-xs)">
        <RadioGroupItem value="two" id="radio-two" />
        <Label htmlFor="radio-two">Option two</Label>
      </div>
    </RadioGroup>
  ),
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Focused: Story = {
  parameters: { pseudo: { focusVisible: "[data-checked]" } },
}

export const Disabled: Story = {
  args: { disabled: true },
}
