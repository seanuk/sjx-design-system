import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Lays out a label, control, description and error. Colours come from the `input/*/label`, `description` and `description-error` tokens.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-(--grid-392)">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="field-email">Email</FieldLabel>
      <Input id="field-email" type="email" placeholder="Placeholder" />
      <FieldDescription>We will only use this to sign you in.</FieldDescription>
    </Field>
  ),
}

export const Error: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel htmlFor="field-error">Email</FieldLabel>
      <Input id="field-error" type="email" defaultValue="not-an-email" aria-invalid />
      <FieldError>Enter a valid email address.</FieldError>
    </Field>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Field data-disabled="true">
      <FieldLabel htmlFor="field-disabled">Email</FieldLabel>
      <Input id="field-disabled" type="email" placeholder="Placeholder" disabled />
      <FieldDescription>We will only use this to sign you in.</FieldDescription>
    </Field>
  ),
}

export const Form: Story = {
  render: () => (
    <form>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Your details</FieldLegend>
          <FieldDescription>Tell us how to reach you.</FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="form-name">Name</FieldLabel>
              <Input id="form-name" placeholder="Placeholder" />
            </Field>
            <Field>
              <FieldLabel htmlFor="form-message">Message</FieldLabel>
              <Textarea id="form-message" placeholder="Placeholder" />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend variant="label">Contact method</FieldLegend>
          <RadioGroup defaultValue="email" aria-label="Contact method">
            <Field orientation="horizontal">
              <RadioGroupItem value="email" id="form-email" />
              <FieldLabel htmlFor="form-email">Email</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="phone" id="form-phone" />
              <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            </Field>
          </RadioGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Checkbox id="form-updates" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="form-updates">Send me updates</FieldLabel>
            <FieldDescription>About once a month.</FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <Switch id="form-public" />
          <FieldLabel htmlFor="form-public">Make my profile public</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Button type="button">Submit</Button>
          <Button type="button" variant="secondary">
            Cancel
          </Button>
        </Field>
      </FieldGroup>
    </form>
  ),
}
