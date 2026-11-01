## Guidelines

A button starts an action: save, send, delete, next.

**Use it** when a click does something. If the click only takes the user to a new page, use a link.

| Variant | Use it for |
| --- | --- |
| Primary | The main action on the screen. One per view. |
| Secondary | Other actions next to the primary, such as Cancel. |
| Tertiary | Low-priority actions, such as in toolbars or cards. |
| Destructive | Actions that delete or can't be undone. |
| Link | An action that sits inside text or needs to look light. |

**Sizes.** Use the default size in most places. Use smaller sizes in dense areas like tables. Keep one size per group.

**Icon layouts.** Icons help the label; they don't replace it. An icon-only button needs an accessible label (aria-label) and a tooltip.

**Do**

- Start labels with a verb: Save, Send, Delete.
- Keep labels to one to three words.
- Put the primary button in the same place on every screen.
- Ask the user to confirm a destructive action.

**Don't**

- Use more than one primary button in a view.
- Use Destructive for actions that are safe.
- Use vague labels like OK or Submit when a clear verb fits.
- Disable a button without saying why.
