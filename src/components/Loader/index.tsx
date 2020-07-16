import { useState, useEffect } from "react";
import LoaderSVG from "~/components/Icons/Loader";
import { useScrollDisabler, animate } from "~/helpers/index";
import { LoaderContainer, LogoWrapper } from "./style";

type Props = { hideLoader: () => void };

export default function Loader({ hideLoader }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useScrollDisabler(true);

  useEffect(() => {
    // To avoid flickering of SVG.
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate(
      () => null,
      hideLoader,
      [
        { target: ".loader rect", offset: 0 },
        { target: ".loader path", offset: 400 },
      ],
      false,
      1500
    );
    return () => {
      clearTimeout(timeout);
    };
  }, [hideLoader]);

  return (
    <LoaderContainer>
      <LogoWrapper isMounted={isMounted}>
        <LoaderSVG />
      </LogoWrapper>
    </LoaderContainer>
  );
}
