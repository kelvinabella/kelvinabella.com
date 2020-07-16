import useDarkMode from "use-dark-mode";
import { useSpring } from "react-spring";
import { useLoaded } from "~/helpers/index";
import { IconContainer, AnimatedSpan } from "./style";
import SunSVG from "~/components/Icons/Sun";
import MoonSVG from "~/components/Icons/Moon";

export default function DarkModeIcon() {
  const darkMode = useDarkMode(false);
  const loaded = useLoaded();

  const svgSpring = useSpring({
    transform: darkMode.value ? "rotate(0deg)" : "rotate(90deg)",
  });

  return (
    <IconContainer>
      <AnimatedSpan
        style={svgSpring}
        aria-label="dark mode"
        role="button"
        tabIndex={0}
        onClick={darkMode.toggle}
        onKeyPress={darkMode.toggle}
      >
        {darkMode.value && loaded ? <MoonSVG /> : <SunSVG />}
      </AnimatedSpan>
    </IconContainer>
  );
}
