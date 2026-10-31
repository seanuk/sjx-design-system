import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A window that sits above the page and holds focus until it closes. Always include a `DialogTitle`. Escape, the close button and clicking outside all close it.",
      },
    },
  },
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger render={<Button variant="outline" />}>
        Open dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share this page</DialogTitle>
          <DialogDescription>
            Anyone with the link can view this page.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  ),
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button />}>Edit profile</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Changes appear on your profile straight away.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-(--number-spacing-xs)">
          <Label htmlFor="dialog-name">Name</Label>
          <Input id="dialog-name" defaultValue="Sam Rivera" />
        </div>
        <div className="flex flex-col gap-(--number-spacing-xs)">
          <Label htmlFor="dialog-email">Email</Label>
          <Input id="dialog-email" type="email" defaultValue="sam@example.com" />
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
          <DialogClose render={<Button />}>Save changes</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="destructive" />}>
        Delete project
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Delete this project?</DialogTitle>
          <DialogDescription>
            This removes the project and its files for everyone. You can&apos;t
            undo this.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Keep project
          </DialogClose>
          <DialogClose render={<Button variant="destructive" />}>
            Delete project
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Read terms
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of use</DialogTitle>
          <DialogDescription>
            The dialog scrolls when its content is taller than the screen.
          </DialogDescription>
        </DialogHeader>
        {Array.from({ length: 12 }, (_, index) => (
          <p key={index}>
            Section {index + 1}. These placeholder terms show how a long
            dialog scrolls inside the space the screen allows.
          </p>
        ))}
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  ),
}
