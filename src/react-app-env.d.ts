import "styled-components";
import theme from "helpers/themes";

type CustomTheme = typeof theme;

/// <reference types="react-scripts" />
declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
