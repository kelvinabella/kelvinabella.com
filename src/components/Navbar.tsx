import React from "react";
import Logo from "components/Logo";
import DesktopMenu from "components/DesktopMenu";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="dark:text-white fixed top-0 right-0 left-0 mx-auto flex max-w-4xl justify-around p-2 text-base font-semibold">
      <nav className="flex w-full max-w-4xl items-center justify-center md:justify-between">
        <Logo />
        <DesktopMenu />
      </nav>
    </header>
  );
}
