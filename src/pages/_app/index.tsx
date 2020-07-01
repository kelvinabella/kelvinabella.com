/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import Loader from "~/components/Loader";
import Theme from "~/components/Theme";

// https://www.typescriptlang.org/docs/handbook/jsx.html#the-jsx-result-type
const App = ({ Component, pageProps }: AppProps) => {
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
    <Theme>
      {/* remove scroll when loading */}
      {isShowLoader && <Loader hideLoader={hideLoader} />}
      <Component {...pageProps} />
    </Theme>
  );
};

export default App;
