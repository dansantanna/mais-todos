import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/helpers/themes";
import GlobalStyle from "../src/helpers/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

const preview: Preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </BrowserRouter>
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
