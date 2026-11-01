import * as React from 'react'
import {
  Controls,
  Description,
  Markdown,
  Primary,
  Stories,
  Subtitle,
  Title,
  useOf,
} from '@storybook/addon-docs/blocks'

// Each component's usage guidelines live next to it as <name>.guidelines.md.
// They are matched to a docs page by the last part of its title, so
// "Components/ButtonGroup" finds button-group.guidelines.md.
const files = import.meta.glob('../src/components/ui/*.guidelines.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const guidelines = new Map<string, string>()
for (const [path, text] of Object.entries(files)) {
  const name = path.split('/').pop()!.replace('.guidelines.md', '')
  guidelines.set(name.replace(/-/g, ''), text)
}

export function DocsPage() {
  const { preparedMeta } = useOf('meta', ['meta'])
  const key = preparedMeta.title.split('/').pop()!.toLowerCase()
  const text = guidelines.get(key)

  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      <Primary />
      {text ? <Markdown>{text}</Markdown> : null}
      <Controls />
      <Stories />
    </>
  )
}
