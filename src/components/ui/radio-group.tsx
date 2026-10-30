"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "@/lib/utils"

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("grid w-full gap-(--number-spacing-xs)", className)}
      {...props}
    />
  )
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      className={cn(
        "group/radio-group-item peer relative flex aspect-square size-(--grid-16) shrink-0 rounded-(--number-radius-full) border-(length:--number-border-width-sm) border-(--selection-primary-border) bg-(--selection-primary-surface-unselected) outline-none group-has-[:focus-visible]/field-label:shadow-none after:absolute after:-inset-x-(--grid-12) after:-inset-y-(--grid-8) focus-visible:shadow-(--shadow-focus-primary) aria-invalid:border-(--color-border-focus-error) aria-invalid:shadow-(--shadow-focus-error) data-checked:border-(--selection-primary-surface-selected) data-checked:bg-(--selection-primary-surface-selected) data-disabled:cursor-not-allowed data-disabled:border-(--selection-disabled-border) data-disabled:bg-(--selection-disabled-surface-unselected) data-disabled:data-checked:bg-(--selection-disabled-surface-selected)",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex size-(--grid-16) items-center justify-center"
      >
        <span className="absolute top-1/2 left-1/2 size-(--grid-8) -translate-x-1/2 -translate-y-1/2 rounded-(--number-radius-full) bg-(--selection-primary-content)" />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  )
}

export { RadioGroup, RadioGroupItem }
