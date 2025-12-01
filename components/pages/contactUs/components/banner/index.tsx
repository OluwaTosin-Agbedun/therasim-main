"use client";

import Container from "@/components/common/container";
import React from "react";
import bannerImg from "@/assets/images/contact-us-banner.png";
import MotionImage from "@/components/common/motionImage";
import MotionTypography from "@/components/common/motionTypography";

const Banner = () => {
  return (
    <section className="pt-23 md:pt-72 pb-32 md:pb-40 md:min-h-[700px] relative overflow-hidden">
      <MotionImage
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 12, delay: 0.2 }}
        alt=""
        src={bannerImg}
        className="absolute top-0 right-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/50 to-black/70" />
      <Container className="relative">
        <div className="flex flex-col items-center mt-20 lg:mt-0 text-center">
          <MotionTypography
            initial={{ opacity: 0.4, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ease: "easeOut", duration: 2, type: "spring" }}
            viewport={{ once: true }}
            variant="heading-5"
            tabletVariant="heading-4"
            as="h1"
            className="font-michroma mb-5 text-white"
          >
            CONTACT US
          </MotionTypography>
          <div className="w-[100px] h-[1px] mb-5 bg-white rounded-lg" />
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
            variant="heading-5"
            tabletVariant="heading-4"
            className="text-white"
          >
            For any enquiry please contact us
          </MotionTypography>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
