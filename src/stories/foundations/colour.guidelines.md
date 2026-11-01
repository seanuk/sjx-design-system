## Guidelines

There are two layers. **Primitives** are raw scales (brand, slate, red, green and so on, 50 to 950). **Semantic** tokens give each colour a job. Use semantic tokens in products. Use primitives only to build new semantic tokens.

| Group | Tokens | Use for |
| --- | --- | --- |
| Surface | primary #fff, secondary #dbeafe, tertiary #eff6ff, inverted #1e40af | Page and panel backgrounds. Inverted for dark areas, such as a hero. |
| Content | primary #0f172a, secondary #475569, tertiary #64748b, on-inverted #eff6ff, error #dc2626 | Text and icons. Primary for body text, secondary for supporting text, tertiary for hints. |
| Border | primary #94a3b8, secondary #e2e8f0, focus #020617, focus-error #dc2626 | Primary for input edges, secondary for dividers and cards. |
| Disabled | disabled #cbd5e1 | Disabled controls only. |
| Feedback | info, success, warning, error. Each has surface, default, content, border. | Alerts, Chips, Stats and validation. |

**Feedback tokens, which part when:** surface for the background, border for the edge, default for icons and fills, content for text.

**Do**

- Use content-primary on surface-primary for body text.
- Use the -content token for feedback text, not -default.
- Pair every feedback colour with an icon or word.

**Don't**

- Use primitives such as blue-600 directly in a product.
- Use -default tokens for small text. success-default (#16a34a) is about 3.3:1 on white and warning-default (#ea580c) about 3.6:1. Both fail the 4.5:1 WCAG AA text minimum.

> **Check:** border-primary (#94a3b8) is about 2.6:1 on white. If it is the only edge of an input, it fails WCAG's 3:1 minimum for controls. Consider slate-500 (#64748b). Also, the brand scale has the same values as blue. That's fine if it is an alias, but name it so in the docs.
