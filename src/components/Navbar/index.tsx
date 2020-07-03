import Logo from "../Logo";
import MenuMobile from "../MenuMobile";
import MenuDesktop from "../MenuDesktop";
import { NavContainer, MenuWrapper } from "./style";

export default function Navbar() {
  return (
    <NavContainer>
      <MenuWrapper>
        <Logo />
        <MenuDesktop />
        <MenuMobile />
      </MenuWrapper>
    </NavContainer>
  );
}
