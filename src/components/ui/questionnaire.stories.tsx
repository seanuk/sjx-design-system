import * as React from "react"
import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

const items = [
  {
    name: "goal",
    required: true,
    choices: [{ value: "launch" }, { value: "grow" }, { value: "both" }],
  },
  {
    name: "updates",
    choices: [{ value: "email" }, { value: "chat" }, { value: "report" }],
  },
  {
    name: "timing",
    required: true,
    choices: [{ value: "week" }, { value: "month" }, { value: "later" }],
  },
] as const

function Navigation() {
  return (
    <QuestionnaireActions>
      <QuestionnairePrevious />
      <QuestionnaireSkip />
      <QuestionnaireNext />
      <QuestionnaireSubmit />
    </QuestionnaireActions>
  )
}

function Strong({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-(weight:--text-button-md--font-weight)">
      {children}
    </span>
  )
}

function Questions() {
  return (
    <>
      <QuestionnaireItem name="goal" required>
        <QuestionnaireTitle>What are you working towards?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Choose one, or write your own answer.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="launch">
            <Strong>Launch a product</Strong>
            <QuestionnaireChoiceDescription>
              Get something new in front of people.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="grow">
            <Strong>Grow an audience</Strong>
            <QuestionnaireChoiceDescription>
              Reach more people with what you have.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="both">
            <Strong>Both</Strong>
            <QuestionnaireChoiceDescription>
              Plan the launch and the growth together.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireInput
            aria-label="Another goal"
            placeholder="Type another goal"
          />
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="updates" multiple>
        <QuestionnaireTitle>How should we keep you updated?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Select all that apply, or skip this question.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="email">Email</QuestionnaireChoice>
          <QuestionnaireChoice value="chat">Chat</QuestionnaireChoice>
          <QuestionnaireChoice value="report">Monthly report</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="timing" required>
        <QuestionnaireTitle>When do you want to start?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="week">This week</QuestionnaireChoice>
          <QuestionnaireChoice value="month">This month</QuestionnaireChoice>
          <QuestionnaireChoice value="later">Later</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
    </>
  )
}

function useAnswers() {
  const [answers, setAnswers] = React.useState<string | null>(null)
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setAnswers(
      [...data.keys()]
        .filter((key, index, keys) => keys.indexOf(key) === index)
        .map((key) => `${key}: ${data.getAll(key).join(", ")}`)
        .join(" · ")
    )
  }
  return { answers, onSubmit }
}

function Answers({ answers }: { answers: string | null }) {
  if (!answers) return null
  return (
    <p role="status" className="text-body-md text-muted-foreground">
      Submitted. {answers}
    </p>
  )
}

function StandaloneExample() {
  const { answers, onSubmit } = useAnswers()
  return (
    <div className="flex flex-col gap-(--number-spacing-sm)">
      <Questionnaire defaultItem="goal" items={items} onSubmit={onSubmit}>
        <QuestionnaireProgress />
        <Questions />
        <Navigation />
      </Questionnaire>
      <Answers answers={answers} />
    </div>
  )
}

function ShortcutsExample({ mode }: { mode: "letters" | "numbers" }) {
  const { answers, onSubmit } = useAnswers()
  return (
    <div className="flex flex-col gap-(--number-spacing-sm)">
      <Questionnaire
        defaultItem="goal"
        items={items}
        shortcuts={mode}
        onSubmit={onSubmit}
      >
        <QuestionnaireProgress />
        <Questions />
        <Navigation />
      </Questionnaire>
      <Answers answers={answers} />
    </div>
  )
}

const meta = {
  title: "Components/Questionnaire",
  component: Questionnaire,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Asks a short series of questions, one at a time. List every question in `items`, then add a `QuestionnaireItem` with the same `name` for each. Mark an item `required` to stop people skipping it, and `multiple` to let them select several answers. It submits as a normal form, so read the answers in `onSubmit`. Include `QuestionnaireError` in each item, as it shows the message when an answer is missing.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-(--grid-480)">
        <Story />
      </div>
    ),
  ],
  args: { items, defaultItem: "goal" },
  render: () => <StandaloneExample />,
} satisfies Meta<typeof Questionnaire>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const KeyboardShortcuts: Story = {
  render: () => <ShortcutsExample mode="letters" />,
}

const planItems = [
  {
    name: "plan",
    required: true,
    choices: [
      { value: "plus" },
      { value: "pro" },
      { value: "enterprise", disabled: true },
    ],
  },
] as const

export const DisabledChoice: Story = {
  render: () => (
    <Questionnaire defaultItem="plan" items={planItems}>
      <QuestionnaireItem name="plan" required>
        <QuestionnaireTitle>Choose a plan</QuestionnaireTitle>
        <QuestionnaireDescription>
          Enterprise isn&apos;t available on your account.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="plus">
            <Strong>Plus</Strong>
            <QuestionnaireChoiceDescription>
              For individuals and small teams.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="pro">
            <Strong>Pro</Strong>
            <QuestionnaireChoiceDescription>
              For growing businesses.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
          <QuestionnaireChoice value="enterprise" disabled>
            <Strong>Enterprise</Strong>
            <QuestionnaireChoiceDescription>
              For large organisations.
            </QuestionnaireChoiceDescription>
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <Navigation />
    </Questionnaire>
  ),
}

const singleItem = [
  {
    name: "timing",
    required: true,
    choices: [{ value: "week" }, { value: "month" }, { value: "later" }],
  },
] as const

export const InCard: Story = {
  render: () => (
    <Questionnaire defaultItem="timing" items={singleItem}>
      <QuestionnaireItem name="timing" required>
        <Card>
          <CardHeader>
            <QuestionnaireTitle render={<CardTitle />}>
              When do you want to start?
            </QuestionnaireTitle>
            <QuestionnaireDescription render={<CardDescription />}>
              You can change this later.
            </QuestionnaireDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-(--number-spacing-xs)">
            <QuestionnaireChoices>
              <QuestionnaireChoice value="week">This week</QuestionnaireChoice>
              <QuestionnaireChoice value="month">This month</QuestionnaireChoice>
              <QuestionnaireChoice value="later">Later</QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </CardContent>
          <CardFooter>
            <Navigation />
          </CardFooter>
        </Card>
      </QuestionnaireItem>
    </Questionnaire>
  ),
}

export const InDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open questionnaire
      </DialogTrigger>
      <DialogContent>
        <Questionnaire defaultItem="goal" items={items}>
          <DialogHeader>
            <DialogTitle className="sr-only">Plan your project</DialogTitle>
            <DialogDescription className="sr-only">
              Answer three questions about your project.
            </DialogDescription>
            <QuestionnaireProgress />
          </DialogHeader>
          <Questions />
          <DialogFooter>
            <Navigation />
          </DialogFooter>
        </Questionnaire>
      </DialogContent>
    </Dialog>
  ),
}
