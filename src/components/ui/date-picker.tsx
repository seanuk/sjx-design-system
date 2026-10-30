"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { inputStyles } from "@/lib/input-styles"
import { cn } from "@/lib/utils"

type DatePickerProps = {
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date) => void
  defaultOpen?: boolean
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

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        data-slot="date-picker-trigger"
        data-empty={selected ? undefined : ""}
        id={id}
        disabled={disabled}
        aria-label={ariaLabel && `${ariaLabel}: ${text}`}
        aria-invalid={ariaInvalid}
        className={cn(
          inputStyles,
          "flex h-(--grid-40) w-full items-center justify-between gap-(--number-spacing-xs) py-(--number-spacing-none) text-(length:--text-body-md) leading-(--text-body-md--line-height) whitespace-nowrap select-none disabled:pointer-events-none data-empty:text-(--input-primary-placeholder) disabled:data-empty:text-(--input-disabled-placeholder) data-popup-open:bg-(--input-primary-surface-hover) [&>svg]:pointer-events-none [&>svg]:size-(--grid-16) [&>svg]:shrink-0 [&>svg]:stroke-3 [&>svg]:text-(--input-primary-content) disabled:[&>svg]:text-(--input-disabled-content)",
          className
        )}
      >
        {text}
        <CalendarIcon />
      </PopoverTrigger>
      <PopoverContent
        ref={contentRef}
        className="w-auto p-(--number-spacing-none)"
        align="start"
        aria-label="Choose a date"
        initialFocus={() =>
          contentRef.current?.querySelector<HTMLElement>(
            'button[data-day][tabindex="0"]'
          ) ?? true
        }
      >
        <Calendar
          mode="single"
          required
          selected={selected}
          defaultMonth={selected}
          onSelect={(date) => {
            setInternalValue(date)
            onValueChange?.(date)
            setOpen(false)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
