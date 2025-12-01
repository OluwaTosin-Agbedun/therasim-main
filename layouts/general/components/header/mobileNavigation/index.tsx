import Container from "@/components/common/container";
import { Path } from "@/navigations/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/therasim-full-logo.png";
import MenuDropdown from "./menuDropdown";

const MobileNavigation = () => {
  return (
    <Container className="flex justify-between items-center gap-5 lg:hidden">
      <Link href={Path.Home}>
        <Image
          alt="Therasim logo"
          src={logo}
          width={200}
          height={50}
          className="w-[130px] h-[50px] object-contain relative"
        />
      </Link>
      <MenuDropdown />
    </Container>
  );
};

export default MobileNavigation;
