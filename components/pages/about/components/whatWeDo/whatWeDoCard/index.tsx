import { StaticImageData } from "next/image";
import React from "react";
import { motion } from "motion/react";
import MotionImage from "@/components/common/motionImage";
import MotionTypography from "@/components/common/motionTypography";

interface Props {
  image: StaticImageData;
  text: string;
  index?: number;
}

const WhatWeDoCard = ({ image, text, index = 0 }: Props) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0.4, x: isEven ? -100 : 100, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
      className="flex-1 max-w-[500px]"
    >
      <div className="mb-4 max-h-[350px] w-full overflow-hidden rounded-3xl">
        <MotionImage
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 5 }}
          alt=""
          src={image}
          className="object-cover w-full h-full"
        />
      </div>
      <MotionTypography
        initial={{ opacity: 0, x: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 2,
          delay: 0.7,
          type: "spring",
        }}
        className="text-center max-w-[350px] mx-auto"
      >
        {text}
      </MotionTypography>
    </motion.div>
  );
};

export default WhatWeDoCard;
