import { useState } from "react";
import Link from "next/link";
import LogoSVG from "components/icons/Logo";
import { animate } from "lib";

export default function Logo() {
  const [isFinished, setFinished] = useState(false);
  const anime = () =>
    animate(
      () => setFinished(true),
      () => setFinished(false),
      [{ target: "#logo rect", offset: 0 }],
      isFinished,
      700
    );

  return (
    <div className="flex items-center justify-center justify-self-start z-20">
      <Link href="/" aria-label="Kelvs" onMouseEnter={anime}>
          <LogoSVG />
      </Link>
    </div>
  );
}
