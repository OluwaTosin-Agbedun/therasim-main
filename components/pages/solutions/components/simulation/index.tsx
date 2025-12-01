"use client";

import Container from "@/components/common/container";
import React from "react";
import ListContent from "../therapy/listContent";
import { therapyData } from "../../data/therapy";
import simulationsImg from "@/assets/images/solutions-simulations.png";
import MotionImage from "@/components/common/motionImage";
import MotionTypography from "@/components/common/motionTypography";
import { motion } from "motion/react";

const Simulation = () => {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0.4, x: 0, y: 200 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 10, type: "spring" }}
        className="absolute bottom-[-40px] left-[-200px] opacity-50 w-[550px] h-[550px] bg-[#01375D] rounded-full"
      />
      <Container className="flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-24">
        <div className="flex-1 max-w-[700px] relative">
          <MotionImage
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 5 }}
            alt=""
            src={simulationsImg}
            className="relative"
          />
        </div>
        <div className="flex-1 max-w-[500px]">
          <MotionTypography
            initial={{ opacity: 0.4, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ease: "easeOut", duration: 2, type: "spring" }}
            variant="heading-5"
            tabletVariant="heading-2"
            className="font-michroma mb-8"
          >
            Medical
            <br />& Trauma
            <br />
            Simulation
          </MotionTypography>
          <div className="space-y-8">
            {therapyData.map((item) => (
              <ListContent key={item.header} listColor="black" {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Simulation;
