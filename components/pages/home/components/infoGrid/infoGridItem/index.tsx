"use client";

import Typography from "@/components/common/typography";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "motion/react";

interface Props {
  image: StaticImageData;
  text: string;
  imageClasses?: string;
  index?: number;
}

const InfoGridItem = ({ image, text, imageClasses, index = 0 }: Props) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0.4, x: 0, y: isEven ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
      viewport={{ once: true }}
      className="flex-1 flex flex-col items-center text-center"
    >
      <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] flex items-end justify-center mb-3">
        <Image alt="" src={image} className={imageClasses} />
      </div>
      <Typography variant="body-small" tabletVariant="body">
        {text}
      </Typography>
    </motion.div>
  );
};

export default InfoGridItem;
