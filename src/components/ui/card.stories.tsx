import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Chip } from "@/components/ui/chip"

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A container for related content. Size `default` uses 16px spacing and `sm` uses 12px.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
      table: { type: { summary: '"default" | "sm"' } },
    },
  },
  args: { size: "default", className: "max-w-(--grid-360)" },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Summer campaign</CardTitle>
        <CardDescription>Sent to 2,400 subscribers.</CardDescription>
      </CardHeader>
      <CardContent>Opened by 41% of people in the first week.</CardContent>
    </Card>
  ),
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: "sm" },
}

export const WithAction: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Summer campaign</CardTitle>
        <CardDescription>Sent to 2,400 subscribers.</CardDescription>
        <CardAction>
          <Chip variant="status" state="active" size="sm">
            Active
          </Chip>
        </CardAction>
      </CardHeader>
      <CardContent>Opened by 41% of people in the first week.</CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Summer campaign</CardTitle>
        <CardDescription>Sent to 2,400 subscribers.</CardDescription>
      </CardHeader>
      <CardContent>Opened by 41% of people in the first week.</CardContent>
      <CardFooter className="justify-end gap-(--number-spacing-xs)">
        <Button size="sm" variant="secondary">
          Archive
        </Button>
        <Button size="sm">View report</Button>
      </CardFooter>
    </Card>
  ),
}
