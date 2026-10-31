"use client"

import * as React from "react"
import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire"
import { CheckIcon } from "lucide-react"

import { buttonVariants, type Button } from "@/components/ui/button"
import { inputStyles } from "@/lib/input-styles"
import { cn } from "@/lib/utils"

function Questionnaire({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Root>) {
  return (
    <QuestionnairePrimitive.Root
      data-slot="questionnaire"
      className={cn("flex w-full min-w-(--grid-0) flex-col gap-(--number-spacing-sm)", className)}
      {...props}
    />
  )
}

function QuestionnaireProgress({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Progress>) {
  return (
    <QuestionnairePrimitive.Progress
      data-slot="questionnaire-progress"
      className={cn(
        "min-h-(--grid-16) w-fit min-w-(--grid-96) font-(weight:--text-button-md--font-weight) text-label-sm text-muted-foreground tabular-nums",
        className
      )}
      {...props}
    />
  )
}

function QuestionnaireItem({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Item>) {
  return (
    <QuestionnairePrimitive.Item
      data-slot="questionnaire-item"
      className={cn(
        "flex min-w-(--grid-0) flex-col gap-(--number-spacing-sm) border-(length:--number-border-width-none) p-(--number-spacing-none) outline-none",
        className
      )}
      {...props}
    />
  )
}

function QuestionnaireTitle({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Title>) {
  return (
    <QuestionnairePrimitive.Title
      data-slot="questionnaire-title"
      className={cn(
        "text-heading-md text-pretty [&:not(:has(~[data-slot=questionnaire-description]))]:mb-(--number-spacing-sm)",
        className
      )}
      {...props}
    />
  )
}

function QuestionnaireDescription({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Description>) {
  return (
    <QuestionnairePrimitive.Description
      data-slot="questionnaire-description"
      className={cn("text-body-md text-pretty text-muted-foreground", className)}
      {...props}
    />
  )
}

function QuestionnaireChoices({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Choices>) {
  return (
    <QuestionnairePrimitive.Choices
      data-slot="questionnaire-choices"
      className={cn(
        "group/questionnaire-choices grid min-w-(--grid-0) gap-(--number-spacing-xs)",
        className
      )}
      {...props}
    />
  )
}

function QuestionnaireChoice({
  children,
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Choice>) {
  return (
    <QuestionnairePrimitive.Choice
      data-slot="questionnaire-choice"
      className={cn(
        "group/questionnaire-choice relative flex cursor-pointer items-start gap-(--number-spacing-xs) rounded-(--number-radius-xs) border-(length:--number-border-width-sm) border-(--selection-primary-border) bg-(--selection-primary-surface-unselected) p-[calc(var(--grid-12)-var(--number-border-width-sm))] text-start text-body-md transition-colors outline-none select-none hover:bg-(--input-primary-surface-hover) has-[>input:focus-visible]:border-(--color-border-focus) has-[>input:focus-visible]:shadow-(--shadow-focus-primary) data-invalid:border-(--color-border-focus-error) data-checked:border-(--selection-primary-surface-selected) data-checked:bg-(--color-surface-tertiary)",
        "data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:border-(--selection-disabled-border) data-disabled:text-(--selection-disabled-label)",
        className
      )}
      {...props}
    >
      <QuestionnairePrimitive.ChoiceInput
        data-slot="questionnaire-choice-input"
        className="absolute inset-(--grid-0) z-10 size-full cursor-pointer opacity-0"
      />
      <span
        aria-hidden="true"
        data-slot="questionnaire-choice-indicator"
        className="pointer-events-none relative mt-(--grid-4) flex size-(--grid-16) shrink-0 items-center justify-center rounded-(--input-default-corner) border-(length:--number-border-width-sm) border-(--selection-primary-border) bg-(--selection-primary-surface-unselected) group-data-[type=radio]/questionnaire-choice:rounded-(--number-radius-full) group-data-checked/questionnaire-choice:border-(--selection-primary-surface-selected) group-data-checked/questionnaire-choice:bg-(--selection-primary-surface-selected) group-data-checked/questionnaire-choice:text-(--selection-primary-content) group-data-disabled/questionnaire-choice:border-(--selection-disabled-border)"
      >
        <span
          data-slot="questionnaire-choice-indicator-dot"
          className="hidden size-(--grid-8) rounded-(--number-radius-full) bg-(--selection-primary-content) group-data-[type=checkbox]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block"
        />
        <CheckIcon
          data-slot="questionnaire-choice-indicator-check"
          className="hidden size-(--grid-16) group-data-[type=radio]/questionnaire-choice:hidden group-data-checked/questionnaire-choice:block"
        />
      </span>
      <QuestionnairePrimitive.ChoiceLabel
        data-slot="questionnaire-choice-label"
        className="flex min-w-(--grid-0) flex-1 flex-col"
      >
        {children}
      </QuestionnairePrimitive.ChoiceLabel>
      <QuestionnairePrimitive.ChoiceShortcut
        data-slot="questionnaire-choice-shortcut"
        className="pointer-events-none ms-auto hidden size-(--grid-24) shrink-0 items-center justify-center rounded-(--number-radius-xxs) border-(length:--number-border-width-sm) border-(--selection-primary-border) bg-background font-(family-name:--font-mono) font-(weight:--text-button-md--font-weight) text-label-xs text-muted-foreground group-data-[shortcut]/questionnaire-choice:inline-flex"
      />
    </QuestionnairePrimitive.Choice>
  )
}

function QuestionnaireChoiceDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="questionnaire-choice-description"
      className={cn(
        "text-muted-foreground group-data-disabled/questionnaire-choice:text-(--selection-disabled-description)",
        className
      )}
      {...props}
    />
  )
}

function QuestionnaireInput({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Input>) {
  return (
    <div
      data-slot="questionnaire-input-wrapper"
      className="group/questionnaire-input relative w-full min-w-(--grid-0)"
    >
      <QuestionnairePrimitive.Input
        data-slot="questionnaire-input"
        className={cn(
          inputStyles,
          "h-(--grid-48) w-full min-w-(--grid-0) rounded-(--number-radius-xs) py-(--number-spacing-none) text-(length:--text-body-lg) leading-(--text-body-md--line-height) disabled:pointer-events-none aria-invalid:shadow-none tablet:text-(length:--text-body-md)",
          className
        )}
        {...props}
      />
    </div>
  )
}

function QuestionnaireError({
  className,
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Error>) {
  return (
    <QuestionnairePrimitive.Error
      data-slot="questionnaire-error"
      className={cn(
        "text-body-sm text-(--selection-primary-description-error)",
        className
      )}
      {...props}
    />
  )
}

function QuestionnaireActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="questionnaire-actions"
      className={cn(
        "grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-(--number-spacing-xs)",
        className
      )}
      {...props}
    />
  )
}

function QuestionnairePrevious({
  children,
  className,
  size = "default",
  variant = "outline",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Previous> &
  Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
  return (
    <QuestionnairePrimitive.Previous
      data-slot="questionnaire-previous"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-1 row-start-1 justify-self-start",
        className
      )}
      {...props}
    >
      {children ?? "Previous"}
    </QuestionnairePrimitive.Previous>
  )
}

function QuestionnaireSkip({
  children,
  className,
  size = "default",
  variant = "outline",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Skip> &
  Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
  return (
    <QuestionnairePrimitive.Skip
      data-slot="questionnaire-skip"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-2 row-start-1 justify-self-end",
        className
      )}
      {...props}
    >
      {children ?? "Skip"}
    </QuestionnairePrimitive.Skip>
  )
}

function QuestionnaireNext({
  children,
  className,
  size = "default",
  variant = "default",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Next> &
  Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
  return (
    <QuestionnairePrimitive.Next
      data-slot="questionnaire-next"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-3 row-start-1 justify-self-end",
        className
      )}
      {...props}
    >
      {children ?? "Next"}
    </QuestionnairePrimitive.Next>
  )
}

function QuestionnaireSubmit({
  children,
  className,
  size = "default",
  variant = "default",
  ...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Submit> &
  Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
  return (
    <QuestionnairePrimitive.Submit
      data-slot="questionnaire-submit"
      data-size={size}
      data-variant={variant}
      className={cn(
        buttonVariants({ size, variant }),
        "col-start-3 row-start-1 justify-self-end",
        className
      )}
      {...props}
    >
      {children ?? "Submit"}
    </QuestionnairePrimitive.Submit>
  )
}

export {
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
}
