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
        <LinkItem href={Path.Home} label="Home" />
        <DropdownItem
          label="About Us"
          href={Path.About}
          links={[
            { label: "About Therasim", href: `${Path.About}#Banner` },
            { label: "Who We Are", href: `${Path.About}#WhoWeAre` },
            { label: "Vision & Mission", href: `${Path.About}#VisionMission` },
            { label: "Real Scenarios", href: `${Path.About}#VideoSection` },
            { label: "What We Do", href: `${Path.About}#WhatWeDo` },
          ]}
        />
        <LinkItem href={Path.Solutions} label="Solutions" />      
        <LinkItem href={Path.WhoWeServe}label="Who We Serve" />
        {/* <LinkItem href={Path.ContactUs} label="Contact Us" /> */}
        <DropdownItem
          label="Resources"
          links={[
            { label: "Our Partners", href: "#" },
            { label: "Research Studies", href: "#" },
            { label: "Help/FAQ", href: "#" },
          ]}
        />
        
      </div>
      <div>
        <ButtonLink
          href={Path.ContactUs}
          variant="dark"
          label="Contact Us"
        />
      </div>
    </Container>
  );
};

export default DesktopNavigation;
