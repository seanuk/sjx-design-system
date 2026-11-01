## Guidelines

A field wraps a control with its label, hint and error message. It keeps spacing and wiring the same in every form.

**Use it** for every form control that needs a label and a message. It is the default way to build forms.

| Variant | Use it for |
| --- | --- |
| Default | A labelled control with an optional hint. |
| Error | The value fails a check. Shows the error message below the control. |
| Disabled | The whole field is locked, label included. |
| Form | Several fields stacked into a full form. |

**Do**

- Say what went wrong and how to fix it: "Enter a date after today".
- Keep hint text to one line.
- Stack fields in one column. It is faster to scan.

**Don't**

- Show only a red border. Colour alone fails users with colour blindness.
- Write errors that blame the user: "You entered an invalid date".
- Mix fields with and without the Field wrapper in one form.
