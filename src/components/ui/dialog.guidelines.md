## Guidelines

A dialog opens over the page and blocks it until the user acts or closes it.

**Use it** for short tasks that need full attention, such as confirming a delete. For longer tasks that keep the page in view, use Sheet. For small extras, use Popover.

| Variant | Use it for |
| --- | --- |
| Default | A message with one or two actions. |
| With Form | A short form, such as renaming an item. |
| Destructive | Confirming an action that can't be undone. Uses a Destructive button. |
| Long Content | Terms or details. The body scrolls; header and buttons stay put. |

**Do**

- Use a title that says what happens: "Delete 3 files?"
- Name the buttons by action: "Delete", "Keep files".
- Trap focus inside, and return it to the trigger on close.

**Don't**

- Open a dialog without the user asking.
- Stack one dialog on another.
- Use it for long forms. Use a page or Sheet.
