import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Input } from "@/components/ui/input"

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A single-line text field. Set `aria-invalid` for the error state.",
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
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    "aria-invalid": { control: "boolean" },
  },
  args: {
    "aria-label": "Example input",
    placeholder: "Placeholder",
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Filled: Story = {
  args: { defaultValue: "Entered text" },
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
