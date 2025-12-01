import Container from "@/components/common/container";
import { Path } from "@/navigations/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkItem from "./linkItem";
import ButtonLink from "@/components/common/buttonLink";
import logo from "@/assets/images/therasim-full-logo.png";
import DropdownItem from "./dropdownItem";

const DesktopNavigation = () => {
  return (
    <Container className="hidden lg:flex items-center justify-between gap-10">
      <Link href={Path.Home}>
        <Image
          alt="Therasim logo"
          src={logo}
          width={200}
          height={50}
          className="w-[200px] h-[50px] object-contain relative left-[-26px]"
        />
      </Link>
      <div className="flex items-center gap-5">
        <LinkItem href={Path.About} label="About Us" />
        <LinkItem href={Path.Solutions} label="Solutions" />
        <DropdownItem
          label="Resources"
          links={[
            { label: "Our Partners", href: "#" },
            { label: "Research Studies", href: "#" },
            { label: "Help/FAQ", href: "#" },
          ]}
        />
        <LinkItem href={Path.WhoWeServe}label="Who We Serve" />
        <LinkItem href={Path.ContactUs} label="Contact Us" />
      </div>
      <div>
        <ButtonLink
          href={Path.Solutions}
          variant="dark"
          label="Explore Our Solutions"
        />
      </div>
    </Container>
  );
};

export default DesktopNavigation;
