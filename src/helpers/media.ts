import { css } from "styled-components";

const sizes: { [key: string]: number } = {
  giant: 1440,
  bigDesktop: 1280,
  desktop: 1024,
  bigTablet: 968,
  tablet: 768,
  thone: 640,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

// Media queries in styled-components: https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053
export default Object.keys(sizes).reduce((acc: any, label: string) => {
  // Use em in breakpoints: https://zellwk.com/blog/media-query-units/
  acc[label] = (...args: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore;
    // Issue: https://github.com/microsoft/TypeScript/issues/28010
    const cssObj: any = css(...args);
    return css`
      @media (max-width: ${sizes[label]}px) {
        ${cssObj}
      }
    `;
  };
  return acc;
}, {});
