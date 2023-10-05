import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Application from "components/Application";
import routes from "helpers/routes";
import reportWebVitals from "./reportWebVitals";
import Navbar from "components/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Application>
      <Navbar
        items={[
          { text: "Produtos", route: "/" },
          { text: "Carrrinho", route: "/cart" },
        ]}
      />
      <RouterProvider router={routes} />
    </Application>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
