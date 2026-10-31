import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  ChevronDownIcon,
  CopyIcon,
  LogOutIcon,
  PencilIcon,
  Trash2Icon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Trigger({ children = "Options" }: { children?: React.ReactNode }) {
  return (
    <DropdownMenuTrigger render={<Button variant="outline" />}>
      {children}
      <ChevronDownIcon data-icon="inline-end" />
    </DropdownMenuTrigger>
  )
}

const meta = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A list of actions opened from a button. A `DropdownMenuLabel` must sit inside a `DropdownMenuGroup`. Use Select instead when choosing a form value.",
      },
    },
  },
  render: (args) => (
    <DropdownMenu {...args}>
      <Trigger />
      <DropdownMenuContent>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuItem disabled>Move</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIconsAndShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <Trigger />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Document</DropdownMenuLabel>
          <DropdownMenuItem>
            <PencilIcon />
            Edit
            <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Duplicate
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2Icon />
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu>
      <Trigger />
      <DropdownMenuContent>
        <DropdownMenuItem>New file</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Email</DropdownMenuItem>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>Download</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

function CheckboxItemsExample() {
  const [status, setStatus] = React.useState(true)
  const [activity, setActivity] = React.useState(false)

  return (
    <DropdownMenu>
      <Trigger>View</Trigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Panels</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={status}
            onCheckedChange={setStatus}
          >
            Status bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={activity}
            onCheckedChange={setActivity}
          >
            Activity
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const CheckboxItems: Story = {
  render: () => <CheckboxItemsExample />,
}

function RadioItemsExample() {
  const [sort, setSort] = React.useState("newest")

  return (
    <DropdownMenu>
      <Trigger>Sort</Trigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
            <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="oldest">Oldest</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const RadioItems: Story = {
  render: () => <RadioItemsExample />,
}

export const InsetItems: Story = {
  render: () => (
    <DropdownMenu>
      <Trigger>Account</Trigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem inset>Billing</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const Open: Story = {
  render: () => (
    <div className="h-(--grid-200)">
      <DropdownMenu defaultOpen modal={false}>
        <Trigger />
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Duplicate</DropdownMenuItem>
          <DropdownMenuItem disabled>Move</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}
