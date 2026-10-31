import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  CircleCheckIcon,
  InfoIcon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A message that stays on the page. `destructive`, `info`, `success` and `warning` use the matching status colours.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "info", "success", "warning"],
      table: {
        type: {
          summary: '"default" | "destructive" | "info" | "success" | "warning"',
        },
      },
    },
  },
  args: { variant: "default", className: "max-w-(--grid-480)" },
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Your plan renews soon</AlertTitle>
      <AlertDescription>
        We&apos;ll charge your card on 1 December.
      </AlertDescription>
    </Alert>
  ),
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex max-w-(--grid-480) flex-col gap-(--number-spacing-xs)">
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>A new version is available.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CircleCheckIcon />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes have been saved.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlertIcon />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Your storage is almost full.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <OctagonXIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>We couldn&apos;t take your payment.</AlertDescription>
      </Alert>
    </div>
  ),
}

export const WithAction: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>Restart to finish installing.</AlertDescription>
      <AlertAction>
        <Button size="sm" variant="secondary">
          Restart
        </Button>
      </AlertAction>
    </Alert>
  ),
}

export const WithoutIcon: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Scheduled maintenance</AlertTitle>
      <AlertDescription>The service will be down on Sunday.</AlertDescription>
    </Alert>
  ),
}
