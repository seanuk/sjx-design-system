import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { BarChart3Icon, LifeBuoyIcon, PlugIcon, UsersIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { clearForcedFocus } from "@/stories/clear-forced-focus"

const products = [
  {
    href: "#analytics",
    icon: BarChart3Icon,
    title: "Analytics",
    description: "See how your pages perform.",
  },
  {
    href: "#teams",
    icon: UsersIcon,
    title: "Teams",
    description: "Work together in one place.",
  },
  {
    href: "#integrations",
    icon: PlugIcon,
    title: "Integrations",
    description: "Connect the tools you use.",
  },
  {
    href: "#support",
    icon: LifeBuoyIcon,
    title: "Support",
    description: "Get help from our team.",
  },
]

const meta = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Site navigation, with panels of links that open on hover or click. Give each panel's content a width, as the popup sizes itself from it. Use `navigationMenuTriggerStyle()` on a top-level link so it matches the triggers. For app commands, use Menubar instead.",
      },
    },
  },
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-(--grid-320) gap-(--number-spacing-xxs) tablet:w-(--grid-480) tablet:grid-cols-2">
              {products.map(({ href, icon: Icon, title, description }) => (
                <li key={title}>
                  <NavigationMenuLink href={href} className="items-start">
                    <Icon />
                    <span className="flex flex-col gap-(--number-spacing-xxs)">
                      <span className="font-(weight:--text-button-md--font-weight) text-label-md">
                        {title}
                      </span>
                      <span className="text-body-sm text-muted-foreground">
                        {description}
                      </span>
                    </span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-(--grid-200) flex-col">
              <li>
                <NavigationMenuLink href="#about">About</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#careers">Careers</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#contact">Contact</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#pricing"
            className={navigationMenuTriggerStyle()}
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Focused: Story = {
  decorators: [clearForcedFocus],
  parameters: {
    pseudo: {
      focusVisible: [
        '[data-slot="navigation-menu-item"]:first-child > [data-slot="navigation-menu-trigger"]',
      ],
    },
  },
}
