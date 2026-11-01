## Guidelines

An input takes one line of text: a name, an email, a number.

**Use it** for short, free-form answers. For long text, use Textarea. For a fixed list of answers, use Select or Radio Group.

| State | What it shows |
| --- | --- |
| Default | Empty, ready for typing. |
| Filled | Holds a value. |
| Focused | The user is typing in it. |
| Error | The value is wrong or missing. |
| Disabled | The user can't change it. |

**Do**

- Always pair it with a Label, or wrap it in a Field.
- Match the width to the answer. A postcode box can be short.
- Use the right input type (email, tel, number) so phones show the right keyboard.

**Don't**

- Use placeholder text as the label. It vanishes when the user types.
- Put hints or rules only in the placeholder.
- Show an error before the user has finished typing.
