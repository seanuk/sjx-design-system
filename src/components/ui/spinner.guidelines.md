## Guidelines

A spinner shows that something is loading or working.

**Use it** for short waits (about 1 to 10 seconds) of unknown length, or inside a button after a click. When you know the page layout, use Skeleton.

| Variant | Use it for |
| --- | --- |
| Default | General loading. |
| Sizes | Match the size of the area or text it sits in. |
| Colours | Keep contrast with the background. |
| In Button | After a click. Disable the button and keep its width. |

**Do**

- Add a text label for screen readers: "Loading".
- Wait about 300ms before showing it, so fast loads don't flash.

**Don't**

- Show a full-page spinner when only part of the page is loading.
- Use it for long tasks. Show progress instead.
