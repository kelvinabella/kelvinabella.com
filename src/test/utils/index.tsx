/* eslint-disable import/no-extraneous-dependencies */
// https://github.com/testing-library/react-testing-library/issues/169
import React, { ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import AppTheme from "~/components/Theme/AppTheme";

type ProvidersProps = {
  children?: ReactElement;
};

const Providers: React.ComponentType<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={AppTheme}>
      {/* <TranslationProvider messages={defaultStrings}> */}
      {children}
      {/* </TranslationProvider> */}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

// https://github.com/vercel/next.js/issues/7479
const router = {
  route: "",
  pathname: "",
  query: {},
  asPath: "",
  basePath: "",
} as NextRouter;

export const RouterCntxt = ({ children }: ProvidersProps) => (
  <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
);
