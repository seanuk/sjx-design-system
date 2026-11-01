## Guidelines

A popover shows extra content in a small panel tied to a trigger, such as a button.

**Use it** for short content or light controls that don't need a full page: a calendar, a filter, a quick setting. For tasks that need full attention, use a dialog. For a short hint on hover, use a tooltip.

| Variant | Use it for |
| --- | --- |
| Default | Closed. Only the trigger shows. |
| Open | The panel is showing. |

**Do**

- Close it on Escape and on a click outside.
- Return focus to the trigger when it closes.
- Keep content short and focused on one task.

**Don't**

- Put critical content only in a popover.
- Open a popover from inside a popover.
- Open it on hover. Users on touch screens can't hover.
