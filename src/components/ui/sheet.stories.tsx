import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const meta = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A panel that slides in from an edge of the screen and holds focus until it closes. Sidebar uses it on phones. Always include a `SheetTitle`.",
      },
    },
  },
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger render={<Button variant="outline" />}>Open sheet</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Share this page</SheetTitle>
          <SheetDescription>
            Anyone with the link can view this page.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          <SheetClose render={<Button />}>Copy link</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-(--number-spacing-xs)">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Sheet key={side}>
          <SheetTrigger
            render={<Button variant="outline" className="capitalize" />}
          >
            {side}
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Share this page</SheetTitle>
              <SheetDescription>
                This sheet opens from the {side}.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button />}>Edit profile</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Changes appear on your profile straight away.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-(--number-spacing-sm) px-(--number-spacing-md)">
          <div className="flex flex-col gap-(--number-spacing-xs)">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" defaultValue="Sam Rivera" />
          </div>
          <div className="flex flex-col gap-(--number-spacing-xs)">
            <Label htmlFor="sheet-email">Email</Label>
            <Input id="sheet-email" type="email" defaultValue="sam@example.com" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
          <SheetClose render={<Button />}>Save changes</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
