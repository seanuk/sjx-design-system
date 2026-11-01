## Guidelines

Spacing and corners share one scale, built mostly on steps of 8px.

| Token | Spacing | Corners |
| --- | --- | --- |
| none | 0 | 0 |
| xxxs | n/a | 2px |
| xxs | 4px | 4px |
| xs | 8px | 8px |
| sm | 16px | 16px |
| md | 24px | 24px |
| lg | 32px | 32px |
| xl | 40px | 40px |
| xxl | 48px | 48px |
| xxxl | 64px | 64px |
| section | 128px | n/a |
| full | n/a | 9999px (pill or circle) |

**Border width:** none 0, sm 1px, md 2px, lg 4px, xl 8px.

**Do**

- Use small gaps (xxs, xs) inside a component and larger ones (md, lg) between groups.
- Use section (128px) only between major page sections.
- Use corner full for pills, Chips and Avatars.
- Use border sm (1px) for most edges; md (2px) for focus.

**Don't**

- Use values off the scale, such as 12px or 20px.
- Mix corner sizes on items that sit together.

> **Check:** there is no 12px step. Designers often need one between xs and sm. Decide now whether to add it or to forbid it.
