"use client";

import React from "react";
import useHeader from "../../hooks/useHeader";
import cs from "classnames";
import DesktopNavigation from "./desktopNavigation";
import MobileNavigation from "./mobileNavigation";

const Header = () => {
  const { isSolid } = useHeader();

  return (
    <header
      className={cs("py-2 md:py-3 sticky top-0 z-10 backdrop-blur-sm shadow", {
        "bg-white/10": isSolid,
      })}
    >
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
};

export default Header;
