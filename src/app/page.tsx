import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const variants = ["default", "secondary", "ghost", "destructive"] as const

const sizes = [
  { name: "Small", text: "sm", icon: "icon-sm" },
  { name: "Medium", text: "default", icon: "icon" },
  { name: "Large", text: "lg", icon: "icon-lg" },
] as const

function ButtonRow({
  variant,
  size,
  disabled,
}: {
  variant: (typeof variants)[number]
  size: (typeof sizes)[number]
  disabled?: boolean
}) {
  const shared = { variant, disabled }
  const hasIconOnly = variant === "default" || variant === "secondary"

  return (
    <div className="flex flex-wrap items-center gap-(--number-spacing-sm)">
      <Button {...shared} size={size.text}>
        <ArrowLeft data-icon="inline-start" />
        Button label
        <ArrowRight data-icon="inline-end" />
      </Button>
      <Button {...shared} size={size.text}>
        Button label
      </Button>
      <Button {...shared} size={size.text}>
        <ArrowLeft data-icon="inline-start" />
        Button label
      </Button>
      <Button {...shared} size={size.text}>
        Button label
        <ArrowRight data-icon="inline-end" />
      </Button>
      {hasIconOnly && (
        <Button {...shared} size={size.icon} aria-label="Back">
          <ArrowLeft />
        </Button>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col gap-(--number-spacing-xxl) p-(--number-spacing-xl)">
      <section className="flex flex-col items-start gap-(--number-spacing-sm)">
        <h1>Heading 1 uses heading-xl</h1>
        <h2>Heading 2 uses heading-lg</h2>
        <h3>Heading 3 uses heading-md</h3>
        <h4>Heading 4 uses heading-sm</h4>
        <p>
          Body text uses body-md, with <a href="#">a link inside it</a>.
        </p>
        <small>Small text uses body-sm</small>
        <label>Label uses label-md</label>
        <p className="text-body-lg text-muted-foreground">
          Larger body text with text-body-lg, and a muted colour
        </p>
      </section>

      {sizes.map((size) => (
        <section key={size.name} className="flex flex-col gap-(--number-spacing-sm)">
          <h2>Button / {size.name}</h2>
          {variants.map((variant) => (
            <ButtonRow key={variant} variant={variant} size={size} />
          ))}
          <ButtonRow variant="default" size={size} disabled />
          <ButtonRow variant="secondary" size={size} disabled />
        </section>
      ))}

      <section className="flex flex-col items-start gap-(--number-spacing-lg)">
        <h2>Input</h2>
        <Input className="w-(--grid-320)" placeholder="Placeholder" />
        <Input className="w-(--grid-320)" defaultValue="Entered text" />
        <Input className="w-(--grid-320)" placeholder="Placeholder" aria-invalid />
        <Input className="w-(--grid-320)" placeholder="Placeholder" disabled />
      </section>
    </main>
  )
}
