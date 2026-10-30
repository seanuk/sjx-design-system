import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "No Figma component yet. Built from the `selection/*` tokens, with the input corner and focus rings.",
      },
    },
  },
  argTypes: {
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
  args: { "aria-label": "Example checkbox" },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const Focused: Story = {
  parameters: { pseudo: { focusVisible: true } },
}

export const Error: Story = {
  args: { "aria-invalid": true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
}

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-(--number-spacing-xs)">
      <Checkbox {...args} id="terms" aria-label={undefined} />
      <Label htmlFor="terms">Accept the terms</Label>
    </div>
  ),
}
