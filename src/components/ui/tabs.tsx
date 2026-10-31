"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn(
        "group/tabs flex gap-(--number-spacing-xs) data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-(--number-radius-xs) p-(--grid-4) group-data-horizontal/tabs:h-(--grid-40) group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-(--number-radius-none)",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-(--number-spacing-xxs) bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-full flex-1 items-center justify-center gap-(--number-spacing-xs) rounded-(--number-radius-xxs) px-(--grid-12) text-body-md font-(weight:--text-button-md--font-weight) whitespace-nowrap text-(--color-content-secondary) transition-all outline-none group-data-vertical/tabs:h-(--grid-32) group-data-vertical/tabs:w-full group-data-vertical/tabs:flex-none group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:shadow-(--shadow-focus-primary) disabled:pointer-events-none disabled:text-(--color-disabled) aria-disabled:pointer-events-none aria-disabled:text-(--color-disabled) [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-(--grid-16)",
        "data-active:text-foreground group-data-[variant=default]/tabs-list:data-active:bg-background group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=default]/tabs-list:data-active:focus-visible:shadow-(--shadow-focus-primary)",
        "after:absolute after:bg-primary after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-(--grid-0) group-data-horizontal/tabs:after:-bottom-(--grid-4) group-data-horizontal/tabs:after:h-(--grid-2) group-data-vertical/tabs:after:inset-y-(--grid-0) group-data-vertical/tabs:after:-right-(--grid-4) group-data-vertical/tabs:after:w-(--grid-2) group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 rounded-(--number-radius-xxs) text-body-md outline-none focus-visible:shadow-(--shadow-focus-primary)", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
