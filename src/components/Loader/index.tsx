import React, { useState, useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";
import LoaderSVG from "~/components/Icons/Loader";
import { useScrollDisabler } from "~/helpers/index";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.bg.light};
  color: ${props => props.theme.text.dark};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;

  .dark-mode & {
    background-color: ${props => props.theme.bg.dark};
    color: ${props => props.theme.text.light};
  }
`;

const StyledLogo = styled.div<{ isMounted: boolean }>`
  width: max-content;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
  }
`;

export default function Loader({ hideLoader }: { hideLoader: () => void }) {
  const animate = () => {
    const animateLoader = anime.timeline({
      easing: "easeInOutCubic",
      duration: 1500,
      complete: () => {
        hideLoader();
      },
    });

    animateLoader
      .add({
        targets: ".loader rect",
        direction: "alternate",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add(
        {
          targets: ".loader path",
          direction: "alternate",
          strokeDashoffset: [anime.setDashoffset, 0],
        },
        400
      );
  };

  const [isMounted, setIsMounted] = useState(false);

  useScrollDisabler(true);

  useEffect(() => {
    // To avoid flickering of SVG.
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <StyledContainer>
      <StyledLogo isMounted={isMounted}>
        <LoaderSVG />
      </StyledLogo>
    </StyledContainer>
  );
}
