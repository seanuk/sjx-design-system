import type { Preview } from '@storybook/nextjs-vite'

import { figtree, geistMono } from '../src/app/fonts'
import '../src/app/globals.css'

// The font variables must sit on <html>, as they do in the app's root layout.
document.documentElement.classList.add(
  figtree.variable,
  geistMono.variable,
  'antialiased'
)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Foundations', 'Components'],
      },
    },
  },
};

export default preview;
