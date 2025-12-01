import Container from "@/components/common/container";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/therasim-full-logo.png";
import Typography from "@/components/common/typography";
import FooterColumn from "./footerColumn";
import { footerData } from "../../data/footer";

const Footer = () => {
  return (
    <footer className="pt-14 pb-36 bg-neutral-black text-white">
      <Container className="flex flex-col lg:flex-row gap-20">
        <div className="flex-1 max-w-[600px]">
          <Image
            alt="Therasim logo"
            src={logo}
            width={200}
            height={50}
            className="w-[200px] h-[50px] mb-4 object-contain relative left-[-26px]"
          />
          <Typography>
            We exist to bridge the gap between therapy and technology via
            delivering human-centered solutions that{" "}
            <span className="font-bold">heal, train, and prepare</span>{" "}
            individuals and institutions to thrive under real-world pressure.
          </Typography>
        </div>
        <div className="flex-1 flex gap-5">
          {footerData.map((item) => (
            <FooterColumn key={item.header} {...item} />
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
