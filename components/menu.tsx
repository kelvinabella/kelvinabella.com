import Link from "next/link";
import styled from "styled-components";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import DarkModeIcon from "./dark-mode-icon";
import { animated, useTrail } from "react-spring";
import { useScrollDisabler, mobileHeight } from "../lib/index";
import media from "../styles/media";

const StyledMenu = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 4px;

  grid-template-columns: repeat(5, max-content);
  ${media.tablet`display:none;`}

  a {
    padding: 8px 32px;
    border-radius: 4px;
    width: 100%;
    text-align: center;
    margin: 0 2px;
  }
`;

const StyledLinks = styled.span<{ isActive: boolean }>`
  a {
    background: ${(props) =>
      props.isActive ? "rgba(0,122,255, 0.1)" : "none"};
    color: ${(props) => (props.isActive ? "#007AFF" : "#050505")};
  }
  a:hover {
    color: #007aff;
    background: ${(props) => props.theme.hover.light};
  }

  .dark-mode & a {
    color: ${(props) => props.theme.text.light};
    background: ${(props) =>
      props.isActive ? props.theme.hover.dark : "none"};

    &:hover {
      background: ${(props) => props.theme.hover.dark};
    }
  }
`;

export function Menu() {
  const router = useRouter();

  return (
    <StyledMenu>
      <StyledLinks isActive={router.pathname.includes("/about")}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </StyledLinks>
      <StyledLinks isActive={router.pathname.includes("/blog")}>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </StyledLinks>
      <StyledLinks isActive={router.pathname.includes("/projects")}>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </StyledLinks>
      <StyledLinks isActive={router.pathname.includes("/contact")}>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </StyledLinks>
      <StyledLinks isActive={router.pathname.includes("/ama")}>
        <Link href="/ama">
          <a>AMA</a>
        </Link>
      </StyledLinks>
    </StyledMenu>
  );
}

const WrapperMobile = styled.div<{ isActive: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(8px);
  overflow: hidden;
  width: 100%;
  align-items: baseline;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  background-color: ${(props) => props.theme.bg.light};
  opacity: ${(props) => (props.isActive ? 0.9 : 0)};
  z-index: ${(props) => (props.isActive ? 15 : 1)};
  display: none;
  ${media.tablet`
    display:flex;
    div:nth-child(2) {
      display: block !important;
    }
    `}
  .dark-mode & {
    background-color: ${(props) => props.theme.bg.dark};
    span {
      color: ${(props) => props.theme.bg.light};
    }
    svg {
      display: block !important;
    }
  }

  svg {
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    transition: 700ms;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 500ms;
  }
`;

const GridWrapper = styled.div`
  flex: 1;
  display: grid;
  justify-content: space-evenly;
  align-content: center;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
`;

const StyledMenuMobile = styled.div`
  grid-column: 2;
  font-size: 28px;
  width: 100%;
  transition: opacity 0.25s ease-in-out;

  span {
    text-align: left;
    display: block;
    color: ${(props) => props.theme.text.dark};
  }

  a {
    text-decoration: none;
    display: inline-block;
    padding: 15px 0;
    position: relative;
  }
`;

export function MenuMobile({ isActive }: { isActive: boolean }) {
  const items = ["About", "Blog", "Projects", "Contact", "AMA"];
  const springs = useTrail(items.length, {
    to: { transform: isActive ? "translateX(20px)" : "translateX(-150px)" },
    config: { tension: 250 },
  });

  useScrollDisabler(isActive);

  useEffect(() => {
    mobileHeight();
  }, []);

  return (
    <WrapperMobile isActive={isActive}>
      <GridWrapper>
        <StyledMenuMobile>
          {springs.map((animation, index) => (
            <animated.span style={animation} key={index}>
              <Link href={"/" + items[index].toLowerCase()}>
                <a>{items[index]}</a>
              </Link>
            </animated.span>
          ))}
        </StyledMenuMobile>
      </GridWrapper>
      <DarkModeIcon />
    </WrapperMobile>
  );
}
