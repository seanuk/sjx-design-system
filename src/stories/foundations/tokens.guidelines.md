## How tokens work

Every visual value in the system is a CSS variable in `src/app/globals.css`. Tokens come in layers. Each layer points at the one below it, so a change at the bottom flows up to every component.

| Layer | What it holds | Example | Use it in products? |
| --- | --- | --- | --- |
| **Primitives** | Raw values with no meaning: the colour palettes, the grid and the breakpoints. | `--color-blue-600: #2563eb`, `--grid-16: 16px` | Rarely. Grid tokens for sizes, yes. Palette colours, no. |
| **Semantic** | A primitive given a job: a surface, a text colour, a spacing step, a corner. | `--color-content-primary → --color-slate-900` | Yes. This is the default. |
| **Component** | A semantic token given to one part of one component. | `--button-primary-surface → --color-action-primary` | Yes, inside that component. |
| **shadcn roles** | The names shadcn/ui expects, pointed at our semantic tokens. | `--primary → --color-action-primary` | Only inside shadcn-generated code. |

**Brand** is an alias layer inside the primitives. `--color-brand-*` points at the blue scale, so the whole brand colour can be swapped in one place.

**Reading the tables below:** *Points to* is the next token in the chain. *Resolves to* is the final value the browser uses. A token with nothing in *Points to* holds a raw value.

**Do**

- Use the most specific token that exists: component, then semantic, then grid.
- Add a new semantic or component token to `globals.css` when nothing fits, then use it.
- Point new tokens at the layer directly below. Components point at semantic tokens, not primitives.

**Don't**

- Use a palette primitive such as `--color-blue-600` in a component.
- Give a semantic or component token a raw value. Add the value to the primitives first.
- Change colours anywhere but `globals.css`.

Text styles are tokens too, but each one bundles size, line height and weight. See **Type**.
