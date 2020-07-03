import useDarkMode from "use-dark-mode";
import { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import SunSVG from "~/components/Icons/Sun";
import MoonSVG from "~/components/Icons/Moon";
import { useLoaded } from "~/helpers/index";
import { IconContainer, AnimatedSpan } from "./style";

export default function DarkModeIcon() {
  const darkMode = useDarkMode(false);
  const [isDarkMode, setDarkMode] = useState(darkMode.value);
  const loaded = useLoaded();

  const svgSpring = useSpring({
    transform: isDarkMode ? "rotate(0deg)" : "rotate(90deg)",
  });

  const toggleDarkMode = (value: boolean) => {
    if (value) {
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
    <IconContainer>
      <AnimatedSpan
        style={svgSpring}
        aria-label="Dark Mode"
        role="button"
        tabIndex={0}
        onClick={() => toggleDarkMode(!isDarkMode)}
        onKeyPress={() => toggleDarkMode(!isDarkMode)}
      >
        {isDarkMode && loaded ? <MoonSVG /> : <SunSVG />}
      </AnimatedSpan>
    </IconContainer>
  );
}
