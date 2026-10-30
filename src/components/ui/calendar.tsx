"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Locale,
} from "react-day-picker"

import { Button, buttonVariants } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  weekStartsOn = 1,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      weekStartsOn={weekStartsOn}
      className={cn(
        "group/calendar bg-background p-(--number-spacing-xs) [--cell-radius:var(--button-default-corner)] [--cell-size:var(--grid-40)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-(--number-spacing-sm) md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-(--number-spacing-sm)", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-(--grid-0) top-(--grid-0) flex w-full items-center justify-between gap-(--number-spacing-xxs)",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-(--number-spacing-none) select-none aria-disabled:text-(--color-disabled)",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-(--number-spacing-none) select-none aria-disabled:text-(--color-disabled)",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-(--number-spacing-xs) text-heading-sm",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-(--cell-radius)",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-(--grid-0) bg-popover opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "text-heading-sm select-none",
          captionLayout !== "label" &&
            "flex items-center gap-(--number-spacing-xxs) rounded-(--cell-radius) [&>svg]:size-(--grid-16) [&>svg]:stroke-3",
          defaultClassNames.caption_label
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-(--cell-radius) text-label-sm text-(--color-content-tertiary) select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-(--number-spacing-xxs) flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-label-sm text-(--color-content-tertiary) select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-(--number-spacing-none) text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)",
          props.showWeekNumber
            ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)"
            : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          defaultClassNames.day
        ),
        range_start: cn(
          "relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-(--grid-0) after:right-(--grid-0) after:w-(--grid-16) after:bg-muted",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-(--number-radius-none)", defaultClassNames.range_middle),
        range_end: cn(
          "relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-(--grid-0) after:left-(--grid-0) after:w-(--grid-16) after:bg-muted",
          defaultClassNames.range_end
        ),
        today: cn(
          "rounded-(--cell-radius) bg-(--color-surface-secondary) data-[selected=true]:rounded-(--number-radius-none)",
          defaultClassNames.today
        ),
        outside: cn(
          "text-(--color-content-tertiary)",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-(--color-disabled)",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-(--grid-16)", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon className={cn("size-(--grid-16)", className)} {...props} />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-(--grid-16)", className)} {...props} />
          )
        },
        DayButton: ({ ...props }) => (
          <CalendarDayButton locale={locale} {...props} />
        ),
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-(--number-spacing-xxs) rounded-(--cell-radius) border-(length:--number-border-width-none) text-(length:--text-body-md) leading-(--text-body-md--line-height) font-(weight:--text-body-md--font-weight) tracking-normal text-inherit normal-case focus-visible:z-20 disabled:text-(--color-disabled) data-[range-end=true]:bg-(--button-primary-surface) data-[range-end=true]:text-(--button-primary-content) data-[range-end=true]:hover:bg-(--button-primary-surface-hover) data-[range-middle=true]:rounded-(--number-radius-none) data-[range-middle=true]:bg-(--color-surface-tertiary) data-[range-start=true]:bg-(--button-primary-surface) data-[range-start=true]:text-(--button-primary-content) data-[range-start=true]:hover:bg-(--button-primary-surface-hover) data-[selected-single=true]:bg-(--button-primary-surface) data-[selected-single=true]:text-(--button-primary-content) data-[selected-single=true]:hover:bg-(--button-primary-surface-hover) [&>span]:text-label-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
