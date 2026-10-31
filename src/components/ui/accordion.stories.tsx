import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { clearForcedFocus } from "@/stories/clear-forced-focus"

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Vertically stacked sections that expand and collapse. Set `multiple` to let more than one stay open.",
      },
    },
  },
  args: {
    className: "max-w-(--grid-480)",
    defaultValue: ["shipping"],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="shipping">
        <AccordionTrigger>How long does shipping take?</AccordionTrigger>
        <AccordionContent>
          Most orders arrive within three to five working days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>Can I return an item?</AccordionTrigger>
        <AccordionContent>
          Yes, within 30 days. <a href="#returns">Read the returns policy</a>.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support" disabled>
        <AccordionTrigger>Is phone support available?</AccordionTrigger>
        <AccordionContent>Not yet.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Multiple: Story = {
  args: { multiple: true, defaultValue: ["shipping", "returns"] },
}

export const Focused: Story = {
  args: { defaultValue: [] },
  parameters: {
    pseudo: {
      focusVisible: "[data-slot=accordion-item]:first-child [data-slot=accordion-trigger]",
    },
  },
  decorators: [clearForcedFocus],
}
