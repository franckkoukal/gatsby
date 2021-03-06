import React from "react"
import { keyframes } from "@emotion/core"

export default ({ items, color }) => (
  <div
    css={{
      display: `inline`,
      textIndent: `8px`,

      "& span": {
        animation: `${topToBottom} 10s linear infinite 0s`,
        opacity: 0,
        position: `absolute`,

        ":nth-of-type(2)": {
          animationDelay: `2.5s`,
        },

        ":nth-of-type(3)": {
          animationDelay: `5s`,
        },

        ":nth-of-type(4)": {
          animationDelay: `7.5s`,
        },
      },
    }}
  >
    {items.map(item => (
      <span key={item} css={{ color }}>
        {item}
      </span>
    ))}
  </div>
)

const topToBottom = keyframes({
  "0%": {
    opacity: 0,
  },
  "6%": {
    opacity: 0,
    transform: `translateY(-30px)`,
  },
  "10%": {
    opacity: 1,
    transform: `translateY(0px)`,
  },
  "25%": {
    opacity: 1,
    transform: `translateY(0px)`,
  },
  "29%": {
    opacity: 0,
    transform: `translateY(30px)`,
  },
  "80%": {
    opacity: 0,
  },
  "100%": {
    opacity: 0,
  },
})
