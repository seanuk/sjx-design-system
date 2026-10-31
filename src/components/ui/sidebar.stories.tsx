import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import {
  BarChart3Icon,
  ChevronsUpDownIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const navigation = [
  { title: "Home", href: "#home", icon: HomeIcon, active: true },
  { title: "Inbox", href: "#inbox", icon: InboxIcon },
  { title: "Reports", href: "#reports", icon: BarChart3Icon },
  { title: "Team", href: "#team", icon: UsersIcon },
]

function Navigation() {
  return (
    <SidebarMenu>
      {navigation.map(({ title, href, icon: Icon, active }) => (
        <SidebarMenuItem key={title}>
          <SidebarMenuButton
            isActive={active}
            tooltip={title}
            render={<a href={href} />}
          >
            <Icon />
            <span>{title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

function AccountFooter() {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" tooltip="Sam Rivera">
            <span className="flex size-(--grid-32) shrink-0 items-center justify-center rounded-(--number-radius-xxs) bg-primary text-label-sm text-primary-foreground">
              SR
            </span>
            <span className="flex min-w-(--grid-0) flex-1 flex-col gap-(--grid-2)">
              <span className="truncate font-(weight:--text-button-md--font-weight)">
                Sam Rivera
              </span>
              <span className="truncate text-label-sm text-muted-foreground">
                sam@example.com
              </span>
            </span>
            <ChevronsUpDownIcon className="ml-auto" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}

function Page({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarInset>
      <header className="flex h-(--grid-56) shrink-0 items-center gap-(--number-spacing-xs) border-b-(length:--number-border-width-sm) border-border px-(--number-spacing-sm)">
        <SidebarTrigger />
        <Separator orientation="vertical" className="my-(--number-spacing-sm)" />
        <h1 className="text-heading-md">Home</h1>
      </header>
      <div className="flex flex-1 flex-col gap-(--number-spacing-xs) p-(--number-spacing-sm) text-body-md text-muted-foreground">
        {children ?? (
          <p>Press the button in the header, or Cmd or Ctrl + B, to toggle the sidebar.</p>
        )}
      </div>
    </SidebarInset>
  )
}

type Args = React.ComponentProps<typeof Sidebar>

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "App navigation down one side of the page. Wrap the page in `SidebarProvider` and put the page's content in `SidebarInset`. `collapsible` sets how it closes: `offcanvas` slides away, `icon` shrinks to icons, and `none` stays open. Below the tablet breakpoint it opens as a Sheet. Pass `tooltip` to `SidebarMenuButton` so icons still have a label when collapsed, and include a `SidebarTrigger` so it can be reopened.",
      },
      story: { inline: false, iframeHeight: 560 },
    },
  },
  argTypes: {
    side: { control: "inline-radio", options: ["left", "right"] },
    variant: {
      control: "inline-radio",
      options: ["sidebar", "floating", "inset"],
    },
    collapsible: {
      control: "inline-radio",
      options: ["offcanvas", "icon", "none"],
    },
  },
  args: {
    side: "left",
    variant: "sidebar",
    collapsible: "offcanvas",
  },
  render: (args: Args) => (
    <SidebarProvider>
      <Sidebar {...args}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" tooltip="Acme">
                <span className="flex size-(--grid-32) shrink-0 items-center justify-center rounded-(--number-radius-xxs) bg-primary text-label-sm text-primary-foreground">
                  A
                </span>
                <span className="truncate font-(weight:--text-button-md--font-weight)">
                  Acme
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <Navigation />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <AccountFooter />
        <SidebarRail />
      </Sidebar>
      <Page />
    </SidebarProvider>
  ),
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CollapsesToIcons: Story = {
  args: { collapsible: "icon" },
}

export const Floating: Story = {
  args: { variant: "floating" },
}

export const Inset: Story = {
  args: { variant: "inset" },
}

export const RightSide: Story = {
  args: { side: "right" },
}

export const GroupsAndBadges: Story = {
  render: (args: Args) => (
    <SidebarProvider>
      <Sidebar {...args}>
        <SidebarHeader>
          <div className="relative">
            <SidebarInput
              aria-label="Search"
              placeholder="Search"
              className="pl-(--number-spacing-xl)"
            />
            <SearchIcon className="pointer-events-none absolute top-(--grid-8) left-(--grid-12) size-(--grid-16) text-muted-foreground" />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive render={<a href="#home" />}>
                    <HomeIcon />
                    <span>Home</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton render={<a href="#inbox" />}>
                    <InboxIcon />
                    <span>Inbox</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>12</SidebarMenuBadge>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupAction aria-label="Add project">
              <PlusIcon />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton render={<a href="#website" />}>
                    <FolderIcon />
                    <span>Website</span>
                  </SidebarMenuButton>
                  <SidebarMenuAction aria-label="Website options" showOnHover>
                    <MoreHorizontalIcon />
                  </SidebarMenuAction>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#overview" isActive>
                        <span>Overview</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton href="#pages">
                        <span>Pages</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton render={<a href="#settings" />}>
                    <SettingsIcon />
                    <span>Settings</span>
                  </SidebarMenuButton>
                  <SidebarMenuAction aria-label="Settings options" showOnHover>
                    <MoreHorizontalIcon />
                  </SidebarMenuAction>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <Page />
    </SidebarProvider>
  ),
}

export const Loading: Story = {
  render: (args: Args) => (
    <SidebarProvider>
      <Sidebar {...args}>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Array.from({ length: 5 }, (_, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuSkeleton showIcon />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <Page />
    </SidebarProvider>
  ),
}
