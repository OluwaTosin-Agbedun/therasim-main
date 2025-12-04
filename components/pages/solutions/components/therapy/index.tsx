"use client";

import Container from "@/components/common/container";
import React from "react";
import { simulationData } from "../../data/simulation";
import ListContent from "./listContent";
import therapyImg from "@/assets/images/solutions-therapy.png";
import MotionTypography from "@/components/common/motionTypography";
import MotionImage from "@/components/common/motionImage";
import { motion } from "motion/react";

const Therapy = () => {
  return (
    <section className="bg-[#01375D] py-14 md:py-20 text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0.4, x: 0, y: 200 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ ease: "easeOut", duration: 10, type: "spring" }}
        className="absolute bottom-0 right-[-200px] opacity-50 w-[550px] h-[550px] bg-[#2C8598] rounded-full"
      />
      <Container className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1">
          <MotionTypography
            initial={{ opacity: 0.4, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ease: "easeOut", duration: 2, type: "spring" }}
            variant="heading-5"
            tabletVariant="heading-2"
            className="font-michroma mb-4 md:mb-8"
          >
            Medical 
            <br /> & Trauma 
            <br /> Simulation 
          </MotionTypography>
          <div className="space-y-5 md:space-y-8">          
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
              
              We provide high-fidelity simulation systems that prepare responders,
               clinicians, and military units for real-world emergencies
               through realistic, hands-on training.
          </MotionTypography>
          </div>
          <div className="space-y-5 md:space-y-8">
            {simulationData.map((item) => (
              <ListContent key={item.header} {...item} />
            ))}
          </div>
        </div>
        <div className="flex-1 max-w-[700px] relative">
          <MotionImage
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ ease: "easeInOut", duration: 5 }}
            alt=""
            src={therapyImg}
            className="relative"
          />
        </div>
      </Container>
    </section>
  );
};

export default Therapy;
