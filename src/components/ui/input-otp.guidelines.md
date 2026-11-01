## Guidelines

An OTP input takes a short one-time code, one box per character.

**Use it** only for one-time codes sent by text, email or an app. For any other short code, use Input.

**States:** Default, Filled, Focused, Error, Disabled. See Shared states.

**Do**

- Let users paste the whole code at once.
- Support autofill from text messages (autocomplete="one-time-code").
- Say where the code was sent, and offer a way to resend it.

**Don't**

- Clear the code on error without saying why.
- Use it for passwords or PINs the user sets.
