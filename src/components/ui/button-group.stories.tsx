import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { clearForcedFocus } from "@/stories/clear-forced-focus"

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Joins related buttons and inputs into one control. Outer corners follow each child's own size. Add `ButtonGroupSeparator` between filled buttons, which have no visible border.",
      },
    },
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Day</Button>
      <Button variant="outline">Week</Button>
      <Button variant="outline">Month</Button>
    </ButtonGroup>
  ),
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Vertical: Story = {
  args: { orientation: "vertical" },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-(--number-spacing-sm)">
      {(["xs", "sm", "default", "lg"] as const).map((size) => (
        <ButtonGroup key={size}>
          <Button variant="outline" size={size}>
            Day
          </Button>
          <Button variant="outline" size={size}>
            Week
          </Button>
          <Button variant="outline" size={size}>
            Month
          </Button>
        </ButtonGroup>
      ))}
    </div>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Align left">
        <AlignLeftIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align centre">
        <AlignCenterIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align right">
        <AlignRightIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button>Save</Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="More save options">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroupText>Quantity</ButtonGroupText>
      <Button variant="outline" size="icon" aria-label="Decrease quantity">
        <MinusIcon />
      </Button>
      <Button variant="outline" size="icon" aria-label="Increase quantity">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const WithInput: Story = {
  render: () => (
    <ButtonGroup className="w-(--grid-320)">
      <Input aria-label="Search" placeholder="Search" />
      <Button variant="outline" size="icon" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  ),
}

export const Nested: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label="Zoom out">
          <MinusIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Zoom in">
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Fit</Button>
        <Button variant="outline">Fill</Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
}

export const Focused: Story = {
  decorators: [clearForcedFocus],
  parameters: {
    pseudo: { focusVisible: ['[data-slot="button"]:nth-child(2)'] },
  },
}
