import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BellIcon, UserIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { clearForcedFocus } from "@/stories/clear-forced-focus"

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Switches between panels in the same place. `TabsList` has a `default` and a `line` variant, and `Tabs` can be horizontal or vertical.",
      },
    },
  },
  args: { defaultValue: "account" },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="team" disabled>
          Team
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Change your name and email.</TabsContent>
      <TabsContent value="billing">Update your payment details.</TabsContent>
    </Tabs>
  ),
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Line: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList variant="line">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="team" disabled>
          Team
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Change your name and email.</TabsContent>
      <TabsContent value="billing">Update your payment details.</TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  args: { orientation: "vertical" },
}

export const WithIcons: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="account">
          <UserIcon />
          Account
        </TabsTrigger>
        <TabsTrigger value="alerts">
          <BellIcon />
          Alerts
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">Change your name and email.</TabsContent>
      <TabsContent value="alerts">Choose what you hear about.</TabsContent>
    </Tabs>
  ),
}

export const Focused: Story = {
  parameters: { pseudo: { focusVisible: "[data-slot=tabs-trigger][data-active]" } },
  decorators: [clearForcedFocus],
}
