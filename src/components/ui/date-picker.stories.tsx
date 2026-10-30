import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { DatePicker } from "@/components/ui/date-picker"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "No Figma component yet. The trigger uses the Figma `Text input` styles and opens a `Calendar` in a `Popover`.",
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
    value: { control: false },
    defaultValue: { control: false },
    onValueChange: { control: false },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    "aria-invalid": { control: "boolean" },
  },
  args: { "aria-label": "Date" },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Selected: Story = {
  args: { defaultValue: new Date(2026, 9, 15) },
}

export const Focused: Story = {
  parameters: { pseudo: { focusVisible: true } },
}

export const Open: Story = {
  args: { defaultOpen: true, defaultValue: new Date(2026, 9, 15) },
  parameters: { docs: { disable: true } },
  tags: ["!autodocs"],
}

export const Error: Story = {
  args: { "aria-invalid": true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const WithField: Story = {
  args: { "aria-label": undefined },
  render: (args) => (
    <Field>
      <FieldLabel htmlFor="date-of-birth">Date of birth</FieldLabel>
      <DatePicker {...args} id="date-of-birth" aria-invalid />
      <FieldError>Choose a date.</FieldError>
    </Field>
  ),
}
