import React from 'react'
import Logo from "components/Logo";
import DesktopMenu from "components/DesktopMenu";

type Props = {}

export default function Navbar({}: Props) {
  return (
    <header className="fixed top-0 right-0 left-0 flex justify-around p-2 text-base font-semibold">
      <nav className="flex justify-center items-center max-w-4xl w-full md:justify-between">
        <Logo />
        <DesktopMenu />
      </nav>
    </header>
  );
}