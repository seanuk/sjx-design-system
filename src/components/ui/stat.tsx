import * as React from "react"
import { ArrowDownRightIcon, ArrowUpRightIcon, MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const directionIcons = {
  up: ArrowUpRightIcon,
  down: ArrowDownRightIcon,
  flat: MinusIcon,
}

const directionSentiments = {
  up: "positive",
  down: "negative",
  flat: "neutral",
} as const

type StatProps = React.ComponentProps<"div"> & {
  /** What's being measured, in sentence case with no colon. */
  label: React.ReactNode
  /** The number, already formatted. For example 1,284, 12.9K or $4.2M. */
  value: React.ReactNode
  /** The change, already signed. For example +12.4%. */
  delta?: React.ReactNode
  /** Which way the number moved. Sets the arrow. */
  direction?: keyof typeof directionIcons
  /** Whether the move is good. Sets the colour. Defaults to up being good, so set it when up is bad, as with costs. */
  sentiment?: "positive" | "negative" | "neutral"
  /** What the change is compared with. For example vs last month. */
  period?: React.ReactNode
}

function Stat({
  className,
  label,
  value,
  delta,
  direction = "flat",
  sentiment,
  period,
  ...props
}: StatProps) {
  const Icon = directionIcons[direction]

  return (
    <div
      data-slot="stat"
      className={cn(
        "flex flex-col gap-(--number-spacing-xxs) rounded-(--number-radius-sm) bg-card p-(--number-spacing-sm) text-card-foreground ring-(length:--number-border-width-sm) ring-(--color-border-secondary)",
        className
      )}
      {...props}
    >
      <p data-slot="stat-label" className="text-body-md text-muted-foreground">
        {label}
      </p>
      <p data-slot="stat-value" className="text-heading-xl">
        {value}
      </p>
      {delta !== undefined && (
        <p
          data-slot="stat-delta"
          data-sentiment={sentiment ?? directionSentiments[direction]}
          className="group/stat-delta flex flex-wrap items-center gap-x-(--number-spacing-xxs) text-body-sm text-muted-foreground"
        >
          <span className="flex items-center gap-(--number-spacing-xxs) font-(weight:--text-button-md--font-weight) group-data-[sentiment=negative]/stat-delta:text-(--color-error-content) group-data-[sentiment=positive]/stat-delta:text-(--color-success-content)">
            <Icon aria-hidden className="size-(--grid-16) shrink-0" />
            {delta}
          </span>
          {period}
        </p>
      )}
    </div>
  )
}

export { Stat }
