import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

type ExampleProps = {
  disabled?: boolean
  invalid?: boolean
  defaultValue?: string
  activeSlot?: number
}

function Example({
  invalid,
  activeSlot,
  defaultValue = "",
  ...props
}: ExampleProps) {
  const [value, setValue] = useState(defaultValue)
  // The Focused story forces the ring on load. Real focus takes over from it.
  const [forcedSlot, setForcedSlot] = useState(activeSlot)
  const slot = (index: number) => (
    <InputOTPSlot
      index={index}
      aria-invalid={invalid}
      {...(index === forcedSlot && { "data-active": true, "data-focus-ring": true })}
    />
  )

  return (
    <InputOTP
      maxLength={6}
      aria-label="Verification code"
      value={value}
      onChange={setValue}
      onFocus={() => setForcedSlot(undefined)}
      {...props}
    >
      <InputOTPGroup>
        {slot(0)}
        {slot(1)}
        {slot(2)}
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        {slot(3)}
        {slot(4)}
        {slot(5)}
      </InputOTPGroup>
    </InputOTP>
  )
}

const meta = {
  title: "Components/InputOTP",
  component: Example,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Slots are 40px high to match `Text input`, with the same tokens. The focus ring only shows for keyboard focus, not when a slot is clicked or tapped.",
      },
    },
  },
  argTypes: {
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
    activeSlot: { table: { disable: true } },
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Filled: Story = {
  args: { defaultValue: "123456" },
}

export const Focused: Story = {
  args: { defaultValue: "12", activeSlot: 2 },
}

export const Error: Story = {
  args: { invalid: true, defaultValue: "123" },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: "123" },
}
