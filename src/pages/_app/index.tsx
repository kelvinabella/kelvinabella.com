/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import * as Sentry from "@sentry/node";
import Loader from "~/components/Loader";
import Theme from "~/components/Theme";
import * as gtag from "~/helpers/gtag";

Sentry.init({
  enabled: process.env.NODE_ENV === "production",
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
});

// https://www.typescriptlang.org/docs/handbook/jsx.html#the-jsx-result-type
const App = ({ Component, pageProps, err }: AppProps & { err: any }) => {
  const [isShowLoader, setShowLoader] = useState(true);
  const hideLoader = () => setShowLoader(false);
  const style = [
    "color: #ffffff",
    "background: #c73433",
    "font-size: 1em",
    "border: 1px solid #ffffff",
    "padding: 5px",
    "font-family: Fira Code",
  ];

  useEffect(() => {
    if (isShowLoader) {
      // eslint-disable-next-line no-console
      console.log(
        "%cHi Welcome to my project. This codebase is also available at Github. Link here https://github.com/kelvinabella/kelvs.me.",
        style.join(";")
      );
    }

    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
      hideLoader();
    };

    Router.events.on("routeChangeStart", () => hideLoader);
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeStart", hideLoader);
      Router.events.off("routeChangeComplete", () => handleRouteChange);
    };
  }, [isShowLoader, style]);

  return (
    <Theme>
      {/* remove scroll when loading */}
      {isShowLoader && <Loader hideLoader={hideLoader} />}
      <Component {...pageProps} err={err} />
    </Theme>
  );
};

export default App;
