import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "helpers/themes";

const queryClient = new QueryClient();

const renderWithProviders = (
  comp: React.ReactNode,
  wrapper = BrowserRouter
) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{comp}</ThemeProvider>
    </QueryClientProvider>,
    { wrapper }
  );
};

export default renderWithProviders;
