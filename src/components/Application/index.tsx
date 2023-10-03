import { ThemeProvider } from "styled-components";
import theme from "helpers/themes";
import GlobalStyle from "helpers/GlobalStyle";

const Application = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Application;
