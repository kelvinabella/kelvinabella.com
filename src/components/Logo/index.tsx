import { useState } from "react";
import Link from "next/link";
import LogoSVG from "~/components/Icons/Logo";
import LogoContainer from "./style";
import { animate } from "~/helpers";

export default function Logo() {
  const [isFinished, setFinished] = useState(false);
  const anime = () =>
    animate(
      () => setFinished(true),
      () => setFinished(false),
      [{ target: ".logo rect", offset: 0 }],
      isFinished,
      700
    );

  return (
    <LogoContainer>
      <Link href="/">
        <a aria-label="Kelvs" onMouseEnter={anime}>
          <LogoSVG />
        </a>
      </Link>
    </LogoContainer>
  );
}
