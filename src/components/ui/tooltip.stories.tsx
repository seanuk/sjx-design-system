import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A short label shown on hover or keyboard focus. `TooltipProvider` wraps the app in `layout.tsx`. Don't put anything essential or interactive inside one.",
      },
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger
        render={
          <Button size="icon" variant="secondary" aria-label="Add">
            <PlusIcon />
          </Button>
        }
      />
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  ),
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Open: Story = {
  args: { defaultOpen: true },
  parameters: { docs: { story: { height: "160px" } } },
  decorators: [
    (Story) => (
      <div className="flex justify-center p-(--number-spacing-xxl)">
        <Story />
      </div>
    ),
  ],
}

export const Sides: Story = {
  parameters: { docs: { story: { height: "240px" } } },
  render: () => (
    <div className="flex justify-center gap-(--grid-128) p-(--number-spacing-xxxl)">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} defaultOpen>
          <TooltipTrigger
            render={<Button variant="secondary">{side}</Button>}
          />
          <TooltipContent side={side}>On the {side}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}

export const Focused: Story = {
  parameters: { pseudo: { focusVisible: true } },
}
