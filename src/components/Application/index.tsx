import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import theme from "helpers/themes";
import GlobalStyle from "helpers/GlobalStyle";
import Navbar from "components/Navbar";
import Routes from "components/Routes";

const queryClient = new QueryClient();

const Application = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
        <Navbar
          items={[
            { text: "Produtos", route: "/" },
            { text: "Carrrinho", route: "/cart" },
          ]}
        />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

export default Application;
