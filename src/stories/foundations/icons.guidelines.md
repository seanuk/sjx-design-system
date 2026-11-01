## Guidelines

Icons come from [Lucide](https://lucide.dev). Storybook lists all 1,854. They use a 2px stroke at every size.

| Size | Use for |
| --- | --- |
| 16px | Inline with body-md and body-sm text, small buttons, Chips. |
| 24px | Default. Buttons, navigation, inputs. |
| 32px | Empty states and feature highlights. |

**Do**

- Use only Lucide icons, so the style stays the same.
- Use the same icon for the same meaning everywhere, such as Trash2 for delete.
- Add a text label or an aria-label. Hide decorative icons from screen readers (aria-hidden).
- Colour icons with content tokens, such as content-secondary.

**Don't**

- Mix in icons from other sets.
- Change the stroke width or scale icons to off-scale sizes.
- Use an icon alone where its meaning isn't clear.
