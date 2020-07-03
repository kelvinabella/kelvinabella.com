/* eslint-disable react/no-array-index-key */
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuDesktopContainer, LinkWrapper } from "./style";
import DarkModeIcon from "../DarkModeIcon";

export default function MenuDesktop() {
  const router = useRouter();
  const links = ["About", "Blog", "Projects", "Contact", "AMA"];

  return (
    <>
      <MenuDesktopContainer>
        {links.map(link => {
          const linkLower = `/${link.toLowerCase()}`;
          return (
            <LinkWrapper
              key={link}
              isActive={router.pathname.includes(linkLower)}
            >
              <Link href={linkLower}>
                <a>{link}</a>
              </Link>
            </LinkWrapper>
          );
        })}
      </MenuDesktopContainer>
      <DarkModeIcon />
    </>
  );
}
