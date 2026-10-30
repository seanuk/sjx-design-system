"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex size-(--grid-16) shrink-0 items-center justify-center rounded-(--input-default-corner) border-(length:--number-border-width-sm) border-(--selection-primary-border) bg-(--selection-primary-surface-unselected) transition-colors outline-none group-has-[:focus-visible]/field-label:shadow-none after:absolute after:-inset-x-(--grid-12) after:-inset-y-(--grid-8) focus-visible:shadow-(--shadow-focus-primary) aria-invalid:border-(--color-border-focus-error) aria-invalid:shadow-(--shadow-focus-error) data-checked:border-(--selection-primary-surface-selected) data-checked:bg-(--selection-primary-surface-selected) data-checked:text-(--selection-primary-content) data-disabled:cursor-not-allowed data-disabled:border-(--selection-disabled-border) data-disabled:bg-(--selection-disabled-surface-unselected) data-disabled:data-checked:bg-(--selection-disabled-surface-selected) data-disabled:data-checked:text-(--button-primary-content-disabled)",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none [&>svg]:size-(--grid-16)"
      >
        <CheckIcon
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
