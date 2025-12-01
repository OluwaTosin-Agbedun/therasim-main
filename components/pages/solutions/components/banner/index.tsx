"use client";

import Container from "@/components/common/container";
import React from "react";
import bannerImg from "@/assets/images/solutions-banner.png";
import MotionTypography from "@/components/common/motionTypography";
import MotionImage from "@/components/common/motionImage";

const Banner = () => {
  return (
    <section className="pt-32 md:pt-40 pb-32 md:pb-56 md:min-h-[700px] relative overflow-hidden bg-linear-to-b from-primary-dark to-black">
      <MotionImage
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 12, delay: 0.2 }}
        alt=""
        src={bannerImg}
        className="absolute top-0 right-0 w-full h-full object-cover"
      />
      <Container className="relative">
        <MotionTypography
          initial={{ opacity: 0, x: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            ease: "easeOut",
            duration: 2,
            type: "spring",
          }}
          variant="heading-2"
          tabletVariant="heading-1"
          desktopVariant="display-1"
          as="h1"
          className="font-michroma mt-20 lg:mt-0 mb-5 text-white"
        >
          OUR
          <br /> SOLUTIONS
        </MotionTypography>
      </Container>
    </section>
  );
};

export default Banner;
