"use client";

import ButtonLink from "@/components/common/buttonLink";
import Container from "@/components/common/container";
import React from "react";
import bannerImg from "@/assets/images/home-banner.png";
import { Path } from "@/navigations/routes";
import { motion } from "motion/react";
import MotionTypography from "@/components/common/motionTypography";
import MotionImage from "@/components/common/motionImage";

const Banner = () => {
  return (
    <section className="py-28 md:py-44 relative overflow-hidden bg-linear-to-b from-primary-dark to-black">
      <MotionImage
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 12, delay: 0.2 }}
        alt=""
        src={bannerImg}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <Container className="relative text-white">
        <div className="flex flex-col items-center max-w-[900px] mx-auto text-center">
          <MotionTypography
            variant="heading-2"
            tabletVariant="heading-1"
            desktopVariant="display-1"
            as="h1"
            className="font-michroma mb-5"
            initial={{ opacity: 0.4, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ease: "easeOut", duration: 2, type: "spring" }}
            viewport={{ once: true }}
          >
            Immersive Simulation. <br />
            Real-World Impact.
          </MotionTypography>
          <MotionTypography
            initial={{ opacity: 0, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 2,
              delay: 1,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="mb-8 max-w-[550px]"
          >
            Advanced VR therapy, medical simulation, and resilience systems for
            military, healthcare, and emergency response.
          </MotionTypography>
          <motion.div
            initial={{ opacity: 0, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 2,
              delay: 1.5,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="max-w-[400px]"
          >
            <ButtonLink
              href={Path.Solutions}
              label="Explore Our Solutions"
              variant="primary"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
