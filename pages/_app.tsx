import Router from "next/router";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { defaultTheme } from "../styles/theme";

import Loader from "../components/loader";
import React, { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [isShowLoader, setShowLoader] = useState(true);
  const hideLoader = () => setShowLoader(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => hideLoader);
    Router.events.on("routeChangeComplete", () => hideLoader);
    return () => {
      Router.events.off("routeChangeStart", hideLoader);
      Router.events.off("routeChangeComplete", () => hideLoader);
    };
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {/* remove scroll when loading */}
      {isShowLoader && <Loader hideLoader={hideLoader} />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
