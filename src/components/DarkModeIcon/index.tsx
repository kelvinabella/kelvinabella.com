import useDarkMode from "use-dark-mode";
import styled from "styled-components";
// import anime from "animejs";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import MoonSVG from "~/components/Icons/Moon";
import SunSVG from "~/components/Icons/Sun";
import { useLoaded } from "~/helpers/index";

const StyledIcon = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  span {
    display: inherit;
  }
  svg {
    height: 1.5em;
    width: auto;
    cursor: pointer;
    fill: ${props => props.theme.text.dark};
    .dark-mode & {
      fill: ${props => props.theme.text.light};
    }
  }

  ${({ theme }) => theme.tablet` 
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
      } catch (err) {
        // do nothing
      }
    };
    window.addEventListener("storage", handler);

    return () => window.removeEventListener("storage", handler);
  }, []);

  return (
    <StyledIcon style={svgSpring}>
      {isDarkMode && loaded ? (
        <span
          role="button"
          tabIndex={0}
          onClick={() => toggleDarkMode(false)}
          onKeyPress={() => toggleDarkMode(false)}
        >
          <MoonSVG />
        </span>
      ) : (
        <span
          role="button"
          tabIndex={0}
          onClick={() => toggleDarkMode(true)}
          onKeyPress={() => toggleDarkMode(false)}
        >
          <SunSVG />
        </span>
      )}
    </StyledIcon>
  );
}
