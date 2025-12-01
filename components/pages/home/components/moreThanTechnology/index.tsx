"use client";

import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import React from "react";
import moreThanTechnologyImg from "@/assets/images/more-than-technology.png";
import { moreThanTechnologyData } from "../../data/moreThanTechnology";
import MoreThanTechnologyCard from "./moreThanTechnologyCard";
import MotionImage from "@/components/common/motionImage";

const MoreThanTechnology = () => {
  return (
    <section className="pt-14 md:pt-20 pb-20 md:pb-56 overflow-hidden relative">
      <MotionImage
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", duration: 8, delay: 0.2 }}
        alt=""
        src={moreThanTechnologyImg}
        className="absolute top-0 left-0 w-full h-full object-top object-cover"
      />
      <Container className="relative">
        <div className="max-w-[450px] ml-auto">
          <Typography
            variant="heading-5"
            tabletVariant="heading-2"
            className="text-white font-medium font-michroma mb-12"
            as="h2"
          >
            More Than Technology
          </Typography>
          <div className="space-y-12">
            {moreThanTechnologyData.map((item, index) => (
              <MoreThanTechnologyCard
                key={item.header}
                index={index}
                {...item}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MoreThanTechnology;
