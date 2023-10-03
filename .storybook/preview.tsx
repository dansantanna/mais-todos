import React from "react";
import type { Preview } from "@storybook/react";
import Application from "../src/components/Application";

const preview: Preview = {
  decorators: [
    (Story) => (
      <Application>
        <Story />
      </Application>
    ),
  ],
  parameters: {
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
