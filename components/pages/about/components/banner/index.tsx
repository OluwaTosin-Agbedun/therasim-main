"use client";

import ButtonLink from "@/components/common/buttonLink";
import Container from "@/components/common/container";
import { Path } from "@/navigations/routes";
import React from "react";
import bannerImg from "@/assets/images/about-banner.png";
import MotionImage from "@/components/common/motionImage";
import MotionTypography from "@/components/common/motionTypography";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden">
      <MotionImage
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 12, delay: 0.2 }}
        alt=""
        src={bannerImg}
        className="absolute top-0 right-0 w-full lg:w-auto h-full lg:h-auto object-cover"
      />
      <Container className="relative">
        <div className="mt-20 md:mt-0 md:mb-20">
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
            ABOUT
            <br /> THERASIM
          </MotionTypography>
          <motion.div
            initial={{ opacity: 0, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 2,
              delay: 1,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="w-max"
          >
            <ButtonLink href={Path.Solutions} label="Explore Our Solutions" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
