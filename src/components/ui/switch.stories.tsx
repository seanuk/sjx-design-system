import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Switch } from "@/components/ui/switch"

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "No Figma component yet. Built from the `selection/*` tokens, sized to the 4px grid.",
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["sm", "default"] },
    disabled: { control: "boolean" },
  },
  args: { "aria-label": "Example switch", size: "default" },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Off: Story = {}

export const On: Story = {
  args: { defaultChecked: true },
}

export const Small: Story = {
  args: { size: "sm", defaultChecked: true },
}

export const Focused: Story = {
  parameters: { pseudo: { focusVisible: true } },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledOn: Story = {
  args: { disabled: true, defaultChecked: true },
}
