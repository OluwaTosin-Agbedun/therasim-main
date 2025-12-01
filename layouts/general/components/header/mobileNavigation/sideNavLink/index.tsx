import Link from "next/link";
import React from "react";
import cs from "classnames";
import Typography from "@/components/common/typography";
import { usePathname } from "next/navigation";
import { getActiveLink } from "@/layouts/general/utils/getActiveLink";

export interface SideNavLinkProps {
  label: string;
  link: string;
  handleClose?: () => void;
}

const SideNavLink = ({ label, link, handleClose }: SideNavLinkProps) => {
  const pathname = usePathname();
  const isActive = getActiveLink(link, pathname);

  return (
    <Link
      href={link}
      onClick={handleClose}
      className={cs(
        "w-full text-center font-semibold block py-3 border-b border-b-white/50",
        {
          "bg-white text-primary rounded-lg": isActive,
          "text-white": !isActive,
        }
      )}
      key={label}
    >
      <Typography>{label}</Typography>
    </Link>
  );
};

export default SideNavLink;
