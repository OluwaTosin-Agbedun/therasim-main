import React, { useState } from "react";
import HamburgerIcon from "@/assets/svgs/hamburger.svg";
import SideNavigation from "../sideNavigation";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button type="button" onClick={handleToggle} className="rounded shadow">
        <HamburgerIcon className="w-[24px] h-[24px]" />
      </button>
      <SideNavigation handleClose={handleClose} isOpen={isOpen} />
    </>
  );
};

export default MenuDropdown;
