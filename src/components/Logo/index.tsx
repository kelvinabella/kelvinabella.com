import { useState, useEffect } from "react";
import Link from "next/link";
import anime from "animejs";
import LogoSVG from "~/components/Icons/Logo";
import LogoContainer from "./style";

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
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);

  return (
    <LogoContainer>
      <Link href="/">
        <a onMouseEnter={() => animate()}>
          <LogoSVG />
        </a>
      </Link>
    </LogoContainer>
  );
}
