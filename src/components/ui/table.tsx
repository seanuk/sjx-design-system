import * as React from "react"

import { cn } from "@/lib/utils"

// Row height comes from the 24px line height plus the density's padding. The
// row's border sits inside that height, so the bottom padding subtracts it.
function Table({
  className,
  density = "comfortable",
  ...props
}: React.ComponentProps<"table"> & {
  density?: "compact" | "comfortable"
}) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        data-density={density}
        className={cn(
          "w-full caption-bottom text-body-md data-[density=comfortable]:[--table-cell-padding-t-b:var(--table-comfortable-padding-t-b)] data-[density=compact]:[--table-cell-padding-t-b:var(--table-compact-padding-t-b)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "[&_tr]:border-b-(length:--table-border-width) [&_tr]:hover:bg-transparent",
        className
      )}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "[&_tr:last-child]:border-b-(length:--number-border-width-none)",
        className
      )}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t-(length:--table-border-width) border-border bg-muted font-(weight:--text-button-md--font-weight) [&>tr]:border-b-(length:--number-border-width-none)",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b-(length:--table-border-width) border-border transition-colors hover:bg-accent has-aria-expanded:bg-accent data-[state=selected]:bg-(--color-surface-secondary)",
        className
      )}
      {...props}
    />
  )
}

function TableHead({
  className,
  numeric = false,
  ...props
}: React.ComponentProps<"th"> & {
  /** Right-aligns a column of numbers. Set it on the column's cells too. */
  numeric?: boolean
}) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "px-(--table-cell-padding-l-r) pt-(--table-cell-padding-t-b) pb-[calc(var(--table-cell-padding-t-b)-var(--table-border-width))] text-left align-middle font-(weight:--text-button-md--font-weight) text-label-sm whitespace-nowrap text-muted-foreground [&:has([role=checkbox])]:pr-(--number-spacing-none)",
        numeric && "text-right",
        className
      )}
      {...props}
    />
  )
}

function TableCell({
  className,
  numeric = false,
  ...props
}: React.ComponentProps<"td"> & {
  /** Right-aligns the value and gives its digits equal widths, so columns line up. */
  numeric?: boolean
}) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-(--table-cell-padding-l-r) pt-(--table-cell-padding-t-b) pb-[calc(var(--table-cell-padding-t-b)-var(--table-border-width))] align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-(--number-spacing-none)",
        numeric && "text-right tabular-nums",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "mt-(--number-spacing-sm) text-body-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
