import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Not a separate component in Figma. It uses the same tokens and states as `Text input`.",
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
    "aria-label": "Example text area",
    placeholder: "Placeholder",
  },
} satisfies Meta<typeof Textarea>

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
