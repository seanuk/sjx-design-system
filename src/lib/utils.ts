import { createCn } from "cn/config"

// Teaches cn that the text styles are font sizes, not colours.
export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "heading-xl",
            "heading-lg",
            "heading-md",
            "heading-sm",
            "body-lg",
            "body-md",
            "body-sm",
            "button-lg",
            "button-md",
            "button-sm",
            "link-lg",
            "link-md",
            "link-sm",
            "label-lg",
            "label-md",
            "label-sm",
            "label-xs",
          ],
        },
      ],
    },
  },
})
