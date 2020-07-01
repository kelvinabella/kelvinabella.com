import { ThemeProvider } from "styled-components";
import React from "react";
import GlobalStyle from "./GlobalStyle";
import AppTheme from "./AppTheme";

type Props = {
  children: React.ReactNode;
};

// https://www.typescriptlang.org/docs/handbook/jsx.html#the-jsx-result-type
export default function Theme({ children }: Props) {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
