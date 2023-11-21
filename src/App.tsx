import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./components/styles/themes/default";

import { GlobalStyle } from "./components/styles/global";
import { Router } from "./Router";
import { CyclesConstextProvider } from "./contexts/CyclesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesConstextProvider>
          <Router />
        </CyclesConstextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
