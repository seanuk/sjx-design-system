"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "@/lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-(--number-radius-full) border-(length:--number-border-width-sm) transition-all outline-none group-has-[:focus-visible]/field-label:shadow-none after:absolute after:-inset-x-(--grid-12) after:-inset-y-(--grid-8) focus-visible:shadow-(--shadow-focus-primary) aria-invalid:border-(--color-border-focus-error) aria-invalid:shadow-(--shadow-focus-error) data-[size=default]:h-(--grid-24) data-[size=default]:w-(--grid-40) data-[size=sm]:h-(--grid-16) data-[size=sm]:w-(--grid-32) data-checked:border-(--selection-primary-surface-selected) data-checked:bg-(--selection-primary-surface-selected) data-unchecked:border-(--selection-primary-border) data-unchecked:bg-(--selection-primary-surface-unselected) data-disabled:cursor-not-allowed data-disabled:border-(--selection-disabled-border) data-disabled:data-checked:bg-(--selection-disabled-surface-selected) data-disabled:data-unchecked:bg-(--selection-disabled-surface-unselected)",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none ml-[calc(var(--grid-4)-var(--number-border-width-sm))] block rounded-(--number-radius-full) bg-(--selection-primary-content) transition-transform group-data-[size=default]/switch:size-(--grid-16) group-data-[size=sm]/switch:size-(--grid-8) data-checked:translate-x-(--grid-16) data-unchecked:translate-x-(--grid-0) data-unchecked:bg-(--selection-primary-border) data-disabled:data-unchecked:bg-(--selection-disabled-content)"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
