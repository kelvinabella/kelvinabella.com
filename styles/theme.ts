import { hex2rgba } from "../lib/index";
declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}

export const defaultTheme = {
  bg: {
    light: "#fffffe",
    dark: "#232946",
  },
  text: {
    light: "#fffffe",
    dark: "#232946",
  },
  hover: {
    light: hex2rgba("#007aff", 0.1),
    dark: hex2rgba("##fffffe", 0.16),
  },
  font: {
    body:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
    monospace: "SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    x3l: "1.875rem",
  },
  fontWeight: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
  screenSizes: {
    giant: 1440,
    bigDesktop: 1200,
    desktop: 1024,
    tablet: 768,
    thone: 600,
    phablet: 480,
    phone: 376,
    tiny: 330,
  },
};

//github.com/styled-components/styled-components-website/issues/392#issuecomment-633947024
export type MyTheme = typeof defaultTheme;
