import React, { useState } from "react";
import styled from "styled-components";
import media from "../styles/media";
// import { defaultTheme } from "../styles/theme";
import { Menu, MenuMobile } from "./menu";
import Hamburger from "../components/icons/hamburger.svg";
import Logo from "./logo";
import DarkModeIcon from "./dark-mode-icon";

const Container = styled.header`
  padding: 8px 8px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  font-size: 1em;
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.theme.text.dark};
  display: flex;
  justify-content: space-around;
  .dark-mode & {
    color: ${(props) => props.theme.text.light};
  }
`;

const StyledNav = styled.nav`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  grid-gap: 4px;
  max-width: 968px;
  grid-template-columns: 1fr 2fr 1fr;
  ${media.tablet` grid-template-columns: 8fr 1fr`}
`;

const StyledBurger = styled.div<{ isActive: boolean }>`
  display: none;
  ${media.tablet`display:block;`}
  svg {
    height: 3.5em;
    width: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    padding: 0;
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

  ${(props) =>
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

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container>
      <React.Fragment>
        <StyledNav>
          <Logo />
          <Menu />
          <DarkModeIcon />
          <StyledBurger
            isActive={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <Hamburger />
          </StyledBurger>
        </StyledNav>
        <MenuMobile isActive={isActive} />
      </React.Fragment>
    </Container>
  );
}
