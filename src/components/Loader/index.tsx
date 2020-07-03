import { useState, useEffect } from "react";
import anime from "animejs";
import LoaderSVG from "~/components/Icons/Loader";
import { useScrollDisabler } from "~/helpers/index";
import { LoaderContainer, LogoWrapper } from "./style";

type Props = { hideLoader: () => void };

export default function Loader({ hideLoader }: Props) {
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
    <LoaderContainer>
      <LogoWrapper isMounted={isMounted}>
        <LoaderSVG />
      </LogoWrapper>
    </LoaderContainer>
  );
}
