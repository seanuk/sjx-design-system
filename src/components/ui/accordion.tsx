import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "@/lib/utils"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b-(length:--number-border-width-sm) not-last:border-border", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-start justify-between gap-(--number-spacing-sm) rounded-(--number-radius-xxs) py-(--grid-12) text-left text-body-md font-(weight:--text-button-md--font-weight) transition-all outline-none hover:underline focus-visible:shadow-(--shadow-focus-primary) aria-disabled:pointer-events-none aria-disabled:text-(--color-disabled) **:data-[slot=accordion-trigger-icon]:mt-(--grid-4) **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-(--grid-16) **:data-[slot=accordion-trigger-icon]:text-(--color-content-tertiary) aria-disabled:**:data-[slot=accordion-trigger-icon]:text-(--color-disabled)",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon data-slot="accordion-trigger-icon" className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" />
        <ChevronUpIcon data-slot="accordion-trigger-icon" className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-body-md text-(--color-content-secondary) data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--accordion-panel-height) pt-(--number-spacing-none) pb-(--grid-12) data-ending-style:h-(--grid-0) data-starting-style:h-(--grid-0) [&_a]:underline [&_a]:underline-offset-(--grid-4) [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-(--number-spacing-sm)",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
