import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import DarkModeIcon from "./DarkModeIcon";

type Props = {};

export default function DesktopMenu({}: Props) {
  const router = useRouter();
  const links = ["About", "Projects", "Contact"];
  return (
    <React.Fragment>
      <div className="w-full sm:flex items-center justify-center hidden">
        {links.map(link => {
          const linkLower = `/${link.toLowerCase()}`;
          const isActive = router.pathname.includes(linkLower);
          return (
            <Link key={link} className={classNames("text-center py-2 px-8 rounded hover:text-sky-500 hover:bg-sky-100", { "text-sky-600": isActive })} href={linkLower}>
              {link}
            </Link>
          );
        })}
      </div>
      <DarkModeIcon />
    </React.Fragment>
  );
}
