import { hex2rgba } from "../../helpers/index";
import media from "~/helpers/media";

const AppTheme = {
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
  ...media,
};

// https://spectrum.chat/styled-components/general/i-cant-use-my-theme-in-createglobalstyle-function-styled-components-v4-react-v16-6-3~0978b404-ab71-45c9-8f75-0862abde4eb5
export type ThemeType = typeof AppTheme;

export default AppTheme;
