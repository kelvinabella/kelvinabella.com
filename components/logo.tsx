import styled from "styled-components";
import Link from "next/link";
import anime from "animejs";
import React, { useState, useEffect } from "react";
import media from "../styles/media";
import LogoSVG from "../components/icons/logo.svg";

const StyledLogo = styled.div`
  display: flex;
  z-index: 20;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
  svg {
    display: block;
    height: 1.5em;
    width: auto;
  }
  ${media.tablet`
    justify-content: flex-start;
    a {
      padding-left: 1em;
    }
  `}
`;

export default function Logo() {
  const [isFinished, setFinished] = useState(false);

  const animate = () => {
    if (isFinished) return;

    const animateLoader = anime.timeline({
      easing: "easeInOutCubic",
      duration: 700,
      begin: () => {
        setFinished(true);
      },
      complete: () => {
        setFinished(false);
      },
    });

    animateLoader.add({
      targets: ".logo rect",
      direction: "normal",
      strokeDashoffset: [anime.setDashoffset, 0],
    });
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <StyledLogo>
      <Link href="/">
        <a>
          <LogoSVG onMouseEnter={() => animate()} />
        </a>
      </Link>
    </StyledLogo>
  );
}
