"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "cn-input-otp group/input-otp flex items-center gap-(--number-spacing-xs)",
        containerClassName
      )}
      spellCheck={false}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        "flex items-center rounded-(--input-default-corner) has-aria-invalid:shadow-(--shadow-focus-error)",
        className
      )}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex size-(--grid-40) items-center justify-center border-y-(length:--number-border-width-sm) border-r-(length:--number-border-width-sm) border-(--input-primary-border) bg-(--input-primary-surface) text-(length:--text-body-md) leading-(--text-body-md--line-height) text-(--input-primary-content) transition-all outline-none first:rounded-l-(--input-default-corner) first:border-l-(length:--number-border-width-sm) last:rounded-r-(--input-default-corner) group-has-disabled/input-otp:border-(--input-disabled-border) group-has-disabled/input-otp:bg-(--input-disabled-surface) group-has-disabled/input-otp:text-(--input-disabled-content) aria-invalid:border-(--color-border-focus-error) data-[active=true]:z-10 data-[active=true]:border-(--color-border-focus) data-[active=true]:bg-(--input-primary-surface-hover) data-[active=true]:shadow-(--shadow-focus-primary) data-[active=true]:aria-invalid:border-(--color-border-focus-error) data-[active=true]:aria-invalid:bg-(--input-primary-surface) data-[active=true]:aria-invalid:shadow-(--shadow-focus-error)",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-(--grid-0) flex items-center justify-center">
          <div className="h-(--grid-16) w-(--grid-1) animate-caret-blink bg-(--input-primary-content) duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      className="flex items-center [&_svg:not([class*='size-'])]:size-(--grid-16)"
      role="separator"
      {...props}
    >
      <MinusIcon
      />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
