import { css } from "styled-components";
import { defaultTheme } from "./theme";

type Sizes = {
  [key: string]: number;
};

const sizes: Sizes = defaultTheme.screenSizes;

// Media queries in styled-components: https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053
export const media = Object.keys(sizes).reduce((acc: any, label: string) => {
  // Use em in breakpoints: https://zellwk.com/blog/media-query-units/
  const emSize: number = sizes[label] / 16;
  acc[label] = (...args: any) => {
    // @ts-ignore;
    // Issue: https://github.com/microsoft/TypeScript/issues/28010
    const cssObj: any = css(...args);
    return css`
      @media (max-width: ${emSize}em) {
        ${cssObj}
      }
    `;
  };
  return acc;
}, {});

export default media;
