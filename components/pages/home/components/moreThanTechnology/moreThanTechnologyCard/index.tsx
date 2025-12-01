"use client";

import Typography from "@/components/common/typography";
import React from "react";
import virtualRealityImg from "@/assets/images/virtual-reality.png";
import Image from "next/image";
import { motion } from "motion/react";

export interface MoreThanTechnologyCardProps {
  header: string;
  paragraph: string;
  index?: number;
}

const MoreThanTechnologyCard = ({
  header,
  paragraph,
  index = 0,
}: MoreThanTechnologyCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0.4, x: isEven ? -100 : 100, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
      className="bg-[#FDFCFCCC] px-8 py-8 rounded-xl shadow-[0px_-4px_0px_5px_#00000040]"
    >
      <div className="w-[40px] h-[40px] mb-4">
        <Image alt="" src={virtualRealityImg} />
      </div>
      <Typography
        variant="body-medium"
        tabletVariant="body-large"
        className="font-semibold mb-2 md:mb-4"
      >
        {header}
      </Typography>
      <Typography>{paragraph}</Typography>
    </motion.div>
  );
};

export default MoreThanTechnologyCard;
