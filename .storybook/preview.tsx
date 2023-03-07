import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/globals.css";

export const decorators = [
  (Story) => (
    <div style={{ margin: "3em" }}>
      <Story />
    </div>
  ),
];

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "light",
          value: "#fff",
        },
        {
          name: "dark",
          value: "#00304D",
        },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
