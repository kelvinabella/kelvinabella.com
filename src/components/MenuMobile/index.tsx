/* eslint-disable react/no-array-index-key */
import Link from "next/link";
import { useEffect, useState } from "react";
import { animated, useTrail } from "react-spring";
import DarkModeIcon from "../DarkModeIcon";
import Hamburger from "../Icons/Hamburger";
import { useScrollDisabler, mobileHeight } from "~/helpers/index";
import { MenuMobileContainer, LinkWrapper, HamburgerWrapper } from "./style";

export default function MenuMobile() {
  const items = ["About", "Blog", "Projects", "Contact", "AMA"];
  const [isActive, setIsActive] = useState(false);

  const springs = useTrail(items.length, {
    to: { transform: isActive ? "translateX(70px)" : "translateX(-150px)" },
    config: { tension: 250 },
  });

  useScrollDisabler(isActive);

  useEffect(() => {
    mobileHeight();
  }, []);

  return (
    <>
      <MenuMobileContainer isActive={isActive}>
        <LinkWrapper>
          {springs.map((animation, index) => (
            <animated.span style={animation} key={index}>
              <Link href={`/${items[index].toLowerCase()}`}>
                <a>{items[index]}</a>
              </Link>
            </animated.span>
          ))}
        </LinkWrapper>
        <DarkModeIcon />
      </MenuMobileContainer>
      <HamburgerWrapper
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        <Hamburger />
      </HamburgerWrapper>
    </>
  );
}
