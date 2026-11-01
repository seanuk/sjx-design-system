## Guidelines

A skeleton shows grey shapes where content will appear, while it loads.

**Use it** when you know the layout of what is loading, such as a list or profile. It feels faster than a spinner and stops the page jumping.

| Variant | Use it for |
| --- | --- |
| Default | A single line or block. |
| Profile | An avatar with lines of text. |
| Card Placeholder | A card while its content loads. |

**Do**

- Match the shapes to the real content's size and place.
- Swap in real content as soon as it arrives.

**Don't**

- Use it for actions, such as saving. Use Spinner.
- Leave it showing if loading fails. Show an error.
