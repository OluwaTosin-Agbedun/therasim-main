import React from "react";
import cs from "classnames";
import { navLinks } from "@/layouts/general/data/navLinks";
import SideNavLink from "../sideNavLink";

interface Props {
  handleClose: () => void;
  isOpen: boolean;
}

const SideNavigation = ({ handleClose, isOpen }: Props) => {
  return (
    <>
      <div
        onClick={handleClose}
        className={cs(
          "fixed bg-primary/40 w-full top-[66px] md:top-[74px] h-[calc(100vh-66px)] md:h-[calc(100vh-74px)]",
          {
            "left-[-120%]": !isOpen,
            "left-0": isOpen,
          }
        )}
      />
      <aside
        className={cs(
          "fixed bg-primary px-4 py-7 w-full max-w-[300px] top-[66px] md:top-[74px] h-[calc(100vh-66px)] md:h-[calc(100vh-74px)] duration-300",
          {
            "left-[-120%]": !isOpen,
            "left-0": isOpen,
          }
        )}
      >
        {navLinks.map((item) => (
          <SideNavLink key={item.label} {...item} handleClose={handleClose} />
        ))}
      </aside>
    </>
  );
};

export default SideNavigation;
