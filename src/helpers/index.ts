import React, { useState, useEffect } from "react";

// https://github.com/bchiang7/v4/blob/master/src/utils/index.js
export const hex2rgba = (hex: string, alpha = 1): string => {
  const [r, g, b] = (hex.match(/\w\w/g) || ["0", "0", "0"]).map(x =>
    parseInt(x, 16)
  );
  return `rgba(${r},${g},${b},${alpha})`;
};

// https://joshwcomeau.com/
export const useScrollDisabler = (disabled: boolean) => {
  React.useEffect(() => {
    if (!disabled) {
      return;
    }

    const oldOverflow = document.body.style.overflow;
    const oldPosition = document.body.style.position;
    const oldWidth = document.body.style.width;
    const oldHeight = document.body.style.height;
    const oldTop = document.body.style.top;

    const oldScrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = `calc(100% + ${oldScrollY}px)`;
    document.body.style.top = `-${oldScrollY}px`;

    // eslint-disable-next-line consistent-return
    return () => {
      document.body.style.overflow = oldOverflow;
      document.body.style.position = oldPosition;
      document.body.style.width = oldWidth;
      document.body.style.height = oldHeight;
      document.body.style.top = oldTop;

      window.scrollTo(0, oldScrollY);
    };
  }, [disabled]);
};

// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
export const mobileHeight = () => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh1 = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh1}px`);

  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    const vh2 = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh2}px`);
  });
};

// https://stackoverflow.com/questions/55271855/react-material-ui-ssr-warning-prop-d-did-not-match-server-m-0-0-h-24-v-2
export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return loaded;
};
