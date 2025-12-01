"use client";

import Container from "@/components/common/container";
import React from "react";
import digitsBgImg from "@/assets/images/1-0-bg-digits.png";
import soldierImg from "@/assets/images/soldier-with-person-in-room.png";
import MotionTypography from "@/components/common/motionTypography";
import MotionImage from "@/components/common/motionImage";

const WhoWeAre = () => {
  return (
    <section className="py-14 md:py-20 overflow-hidden relative">
      <MotionImage
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 5 }}
        alt=""
        src={digitsBgImg}
        className="absolute top-0 left-0 w-full object-top opacity-75 h-full object-cover"
      />
      <Container className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-24 relative">
        <div className="flex-1 max-w-[500px]">
          <div className="max-h-[420px] overflow-hidden rounded-3xl">
            <MotionImage
              initial={{ scale: 1.3 }}
              whileInView={{ scale: 1 }}
              transition={{ ease: "easeInOut", duration: 5 }}
              alt=""
              src={soldierImg}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1">
          <MotionTypography
            initial={{ opacity: 0, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 2,
              type: "spring",
            }}
            variant="heading-5"
            tabletVariant="heading-2"
            className="font-michroma mb-4"
            as="h2"
          >
            Who we are
          </MotionTypography>
          <MotionTypography
            initial={{ opacity: 0, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 2,
              delay: 0.5,
              type: "spring",
            }}
            variant="body-medium"
          >
            TheraSim Technologies is a pioneering simulation and immersive
            technology company redefining readiness for critical industries.We
            fuse VR, AR, AI, and high-fidelity simulation systems with clinical
            expertise and operational insight to build solutions that protect
            lives and enhance performance.
          </MotionTypography>
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
