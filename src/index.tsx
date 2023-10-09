import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";

import Products from "pages/Products";
import ProductDetails from "pages/ProductDetails";
import Cart from "pages/Cart";
import NotFound from "pages/NotFound";
import SuccessfulPayment from "pages/SuccessfulPayment";
import theme from "helpers/themes";
import GlobalStyle from "helpers/GlobalStyle";
import Navbar from "components/Navbar";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <SnackbarProvider />
          <ReactQueryDevtools initialIsOpen={false} />
          <Navbar
            items={[
              { text: "Produtos", route: "/" },
              { text: "Carrrinho", route: "/cart" },
            ]}
          />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/successful-payment" element={<SuccessfulPayment />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
