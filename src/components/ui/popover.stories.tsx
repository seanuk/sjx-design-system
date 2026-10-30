import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

type ExampleProps = { defaultOpen?: boolean }

function Example(props: ExampleProps) {
  return (
    <Popover {...props}>
      <PopoverTrigger render={<Button variant="secondary" />}>
        Open popover
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Popover title</PopoverTitle>
          <PopoverDescription>Supporting text for the popover.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

const meta = {
  title: "Components/Popover",
  component: Example,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "No Figma component yet. Matches the `Select` list: input corner, `shadow-md` and a secondary border.",
      },
    },
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Open: Story = {
  args: { defaultOpen: true },
  parameters: { docs: { disable: true } },
  tags: ["!autodocs"],
}
