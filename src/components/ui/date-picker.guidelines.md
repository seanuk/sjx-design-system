## Guidelines

A date picker is a compact field that opens a Calendar in a Popover.

**Use it** for dates in forms. For a date of birth, plain text inputs (day, month, year) are often faster than any calendar.

| Variant | Use it for |
| --- | --- |
| Default | No date picked yet. |
| Selected | A date is picked and shown in the field. |
| Open | The calendar is showing. |
| With Field | The standard form, with label and hint. Use this almost every time. |
| Focused / Error / Disabled | See Shared states. |

**Do**

- Show the date in a clear UK format: 30 Oct 2026.
- Close the calendar once a date is picked.
- Let users type the date as well as pick it, where possible.

**Don't**

- Use ambiguous formats like 10/11/26.
- Use it for dates many years away without month and year dropdowns.
