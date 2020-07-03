import styled from "styled-components";

export const MenuMobileContainer = styled.div<{ isActive: boolean }>`
  display: none;
  width: 100%;
  height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  overflow: hidden;
  backdrop-filter: blur(8px);
  background-color: ${props => props.theme.bg.light};
  opacity: ${props => (props.isActive ? 0.9 : 0)};
  z-index: ${props => (props.isActive ? 15 : 0)};
  ${({ theme }) => theme.tablet`
    display:flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-evenly;
    div:nth-child(2) {
      display: block !important;
    }
  `}
  .dark-mode & {
    background-color: ${props => props.theme.bg.dark};
    span {
      color: ${props => props.theme.bg.light};
    }
  }
  svg {
    opacity: ${props => (props.isActive ? 1 : 0)};
    transition: 700ms;
  }
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 500ms;
  }
`;

export const LinkWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  font-size: 28px;
  width: 100%;
  transition: opacity 0.25s ease-in-out;
  span {
    text-align: left;
    display: block;
    color: ${props => props.theme.text.dark};
  }
  a {
    display: inline-block;
    position: relative;
    padding: 15px 0;
    text-decoration: none;
  }
`;

export const HamburgerWrapper = styled.div<{ isActive: boolean }>`
  display: none;
  ${({ theme }) => theme.tablet`display:block;`}
  svg {
    position: relative;
    height: 2em;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    user-select: none;
    z-index: 20;

    .line {
      fill: none;
      transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
      stroke: currentColor;
      stroke-width: 5.5;
      stroke-linecap: round;
    }
  }

  svg .top {
    stroke-dasharray: 40 172;
  }
  svg .middle {
    stroke-dasharray: 40 111;
  }
  svg .bottom {
    stroke-dasharray: 40 172;
  }

  ${props =>
    props.isActive
      ? `svg .top {
      stroke-dashoffset: -132px;
    }
    svg .middle {
      stroke-dashoffset: -71px;
    }
    svg .bottom {
      stroke-dashoffset: -132px;
    }`
      : ""}
`;
