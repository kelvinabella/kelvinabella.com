import useDarkMode from "use-dark-mode";
// import anime from "animejs";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import MoonSVG from "../components/icons/moon.svg";
import SunSVG from "../components/icons/sun.svg";
import styled from "styled-components";
import media from "../styles/media";
import { useLoaded } from "../lib/index";

const StyledIcon = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  svg {
    height: 1.5em;
    width: auto;
    cursor: pointer;
    fill: ${(props) => props.theme.text.dark};
    .dark-mode & {
      fill: ${(props) => props.theme.text.light};
    }
  }

  ${media.tablet` 
    margin: 0 0 15% 15%;
    display:none;
  `}
`;

export default function DarkModeIcon() {
  const darkMode = useDarkMode(false);
  const [isDarkMode, setDarkMode] = useState(darkMode.value);
  const loaded = useLoaded();

  const svgSpring = useSpring({
    transform: isDarkMode ? "rotate(0deg)" : "rotate(90deg)",
  });

  // const animate = () => {
  //   const animateLoader = anime.timeline({
  //     easing: "easeInOutCubic",
  //     duration: 1000,
  //   });

  //   animateLoader.add({
  //     targets: ".sun path",
  //     direction: "normal",
  //     strokeDashoffset: [anime.setDashoffset, 0],
  //   });
  // };

  const toggleDarkMode = (value: boolean) => {
    if (value) {
      // animate();
      darkMode.enable();
    } else {
      darkMode.disable();
    }
    setDarkMode(value);
  };

  useEffect(() => {
    const handler = () => {
      let localStorageTheme = false;
      try {
        localStorageTheme = JSON.parse(
          localStorage.getItem("darkMode") || "false"
        );
        setDarkMode(localStorageTheme);
      } catch (err) {}
    };
    window.addEventListener("storage", handler);

    return () => window.removeEventListener("storage", handler);
  }, []);

  return (
    <StyledIcon style={svgSpring}>
      {isDarkMode && loaded ? (
        <MoonSVG onClick={() => toggleDarkMode(false)} />
      ) : (
        <SunSVG onClick={() => toggleDarkMode(true)} />
      )}
    </StyledIcon>
  );
}
