"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import { inputStyles } from "@/lib/input-styles"
import { cn } from "@/lib/utils"

type DatePickerProps = {
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date) => void
  defaultOpen?: boolean
  /** Earliest month in the month and year dropdowns. Defaults to 100 years ago. */
  startMonth?: Date
  /** Latest month in the month and year dropdowns. Defaults to 10 years from now. */
  endMonth?: Date
  placeholder?: string
  disabled?: boolean
  id?: string
  className?: string
  "aria-label"?: string
  "aria-invalid"?: boolean
}

function DatePicker({
  value,
  defaultValue,
  onValueChange,
  defaultOpen = false,
  startMonth,
  endMonth,
  placeholder = "Pick a date",
  disabled,
  id,
  className,
  "aria-label": ariaLabel,
  "aria-invalid": ariaInvalid,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(defaultOpen)
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const selected = value ?? internalValue
  const text = selected ? format(selected, "d MMM yyyy") : placeholder
  const year = new Date().getFullYear()

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger
        data-slot="date-picker-trigger"
        data-empty={selected ? undefined : ""}
        id={id}
        disabled={disabled}
        aria-label={ariaLabel && `${ariaLabel}: ${text}`}
        aria-invalid={ariaInvalid}
        className={cn(
          inputStyles,
          "flex h-(--grid-40) w-full items-center justify-between gap-(--number-spacing-xs) py-(--number-spacing-none) text-(length:--text-body-md) leading-(--text-body-md--line-height) whitespace-nowrap select-none disabled:pointer-events-none data-empty:text-(--input-primary-placeholder) disabled:data-empty:text-(--input-disabled-placeholder) data-popup-open:bg-(--input-primary-surface-hover) [&>svg]:pointer-events-none [&>svg]:size-(--grid-16) [&>svg]:shrink-0 [&>svg]:text-(--input-primary-content) disabled:[&>svg]:text-(--input-disabled-content)",
          className
        )}
      >
        {text}
        <CalendarIcon />
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Positioner align="start" sideOffset={4} className="isolate z-50">
          <PopoverPrimitive.Popup
            ref={contentRef}
            data-slot="date-picker-content"
            aria-label="Choose a date"
            initialFocus={() =>
              contentRef.current?.querySelector<HTMLElement>(
                'button[data-day][tabindex="0"]'
              ) ?? true
            }
            className="z-50 origin-(--transform-origin) rounded-(--input-default-corner) bg-popover text-popover-foreground shadow-md ring-(length:--number-border-width-sm) ring-(--color-border-secondary) outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"
          >
            <Calendar
              mode="single"
              required
              captionLayout="dropdown"
              startMonth={startMonth ?? new Date(year - 100, 0)}
              endMonth={endMonth ?? new Date(year + 10, 11)}
              selected={selected}
              defaultMonth={selected}
              onSelect={(date) => {
                setInternalValue(date)
                onValueChange?.(date)
                setOpen(false)
              }}
            />
          </PopoverPrimitive.Popup>
        </PopoverPrimitive.Positioner>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

export { DatePicker }
