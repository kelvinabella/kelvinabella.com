import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDarkMode, useLoaded } from "lib/index";
import SunSVG from "components/icons/Sun";
import MoonSVG from "components/icons/Moon";
type Props = {};

export default function DarkModeIcon({}: Props) {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const loaded = useLoaded();
  const svgSpring = useSpring({
    transform: isDarkMode ? "rotate(0deg)" : "rotate(90deg)",
  });

  return (
    <div className="flex items-center justify-self-end justify-center w-24">
      <animated.span style={svgSpring} aria-label="dark mode" role="button" tabIndex={0} onClick={() => setIsDarkMode(!isDarkMode)} onKeyPress={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode && loaded ? <MoonSVG /> : <SunSVG />}
      </animated.span>
    </div>
  );
}
