import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  * {
    font-family: "Nunito Sans", Sans-serif;
  }
`;

export default GlobalStyle;
