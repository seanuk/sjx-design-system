import type { Preview } from '@storybook/nextjs-vite'
import { addons, useEffect } from 'storybook/preview-api'
import { UPDATE_GLOBALS } from 'storybook/internal/core-events'

import { figtree, geistMono } from '../src/app/fonts'
import '../src/app/globals.css'
import { DocsPage } from './docs-page'

// The font variables must sit on <html>, as they do in the app's root layout.
document.documentElement.classList.add(
  figtree.variable,
  geistMono.variable,
  'antialiased'
)

// The preview iframe has <base target="_parent">, so a story's placeholder link
// would load the iframe's URL in the whole window and lose the sidebar. Popups
// render in a portal outside the story root, so this matches everything except
// the docs page's own heading links.
document.addEventListener('click', (event) => {
  if (!(event.target instanceof Element)) return
  const link = event.target.closest('a[href^="#"]')
  if (!link) return
  if (link.closest('#storybook-docs') && !link.closest('.docs-story')) return
  event.preventDefault()
})

const preview: Preview = {
  decorators: [
    // The pseudo-states addon saves a story's forced state as a global, which
    // would carry on to every story opened after it. It also leaves its class on
    // elements the next story reuses. Clear both on navigation.
    (Story, { id, viewMode, parameters, globals }) => {
      const storySetsIt = viewMode === 'story' && parameters.pseudo

      useEffect(() => {
        if (globals.pseudo && !storySetsIt) {
          addons.getChannel().emit(UPDATE_GLOBALS, { globals: { pseudo: false } })
        }
        // Only on navigation, so a state picked in the toolbar stays on.
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id, viewMode])

      useEffect(() => {
        if (viewMode !== 'story' || storySetsIt || globals.pseudo) return
        document.querySelectorAll('#storybook-root [class*="pseudo-"]').forEach((element) => {
          element.classList.remove(
            ...[...element.classList].filter((name) => name.startsWith('pseudo-'))
          )
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id, viewMode, globals.pseudo])

      return <Story />
    },
  ],
  parameters: {
    docs: { page: DocsPage },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      // Foundations first, then A to Z. Stories in a component keep their file order.
      // Storybook evaluates this as plain JavaScript, so it can't have type annotations.
      storySort: (a, b) =>
        a.title === b.title
          ? 0
          : a.title === 'Foundations'
            ? -1
            : b.title === 'Foundations'
              ? 1
              : a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }),
    },
  },
};

export default preview;
