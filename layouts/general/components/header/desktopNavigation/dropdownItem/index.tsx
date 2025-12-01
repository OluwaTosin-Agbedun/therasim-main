import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import React, { useMemo, useState } from "react";
import Typography from "@/components/common/typography";
import cs from "classnames";
import Link from "next/link";
import TriangleDownIcon from "@/assets/svgs/triangle-down.svg";
import { usePathname } from "next/navigation";
import { getActiveLink } from "@/layouts/general/utils/getActiveLink";
import { LinkItemProps } from "../linkItem";

interface Props {
  label: string;
  links: LinkItemProps[];
}

const DropdownItem = ({ label, links = [] }: Props) => {
  const [isHover, setIsHover] = useState(false);

  const pathname = usePathname();

  const isActive = useMemo(() => {
    let active = false;

    for (let i = 0; i < links.length; i++) {
      const selected = links[i];

      if (getActiveLink(selected.href as string, pathname)) {
        active = true;
        break;
      }
    }

    return active;
  }, [links, pathname]);

  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <MenuButton
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={cs(
              "flex flex-col items-center gap-1 group relative hover:text-primary-dark duration-200",
              {
                "text-blue-base font-semibold": isActive,
              }
            )}
          >
            <div className="flex items-center justify-center gap-1">
              <Typography className="font-semibold">{label}</Typography>
              <TriangleDownIcon className="text-orange-base w-[12px] h-[12px] duration-75 group-hover:rotate-180" />
            </div>
            <span className="absolute bottom-0 left-0 w-0 duration-200 group-hover:w-[60%] h-[2px] bg-primary-dark block" />
          </MenuButton>
          <Transition show={open || isHover}>
            <MenuItems
              anchor="bottom"
              transition
              static
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="origin-top z-[10] transition focus:outline-none shadow-lg bg-white text-neutral-black px-2 py-4 rounded-lg duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              {links.map((link) => (
                <MenuItem key={link.label}>
                  <Link
                    className={cs(
                      "block text-[14px] py-2 rounded-lg px-2 font-semibold hover:bg-primary/20 data-[focus]:bg-primary/20",
                      {
                        "bg-white/30": getActiveLink(
                          link.href as string,
                          pathname
                        ),
                      }
                    )}
                    href={link.href || ""}
                    onClick={() => setIsHover(false)}
                  >
                    {link.label}
                  </Link>
                </MenuItem>
              ))}
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default DropdownItem;
