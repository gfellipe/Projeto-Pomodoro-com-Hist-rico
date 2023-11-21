import "styled-components";
import { defaultTheme } from "../components/styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "style-components" {
  export interface DefaultTheme extends ThemeType {}
}
