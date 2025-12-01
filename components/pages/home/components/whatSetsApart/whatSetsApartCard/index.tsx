"use client";

import Typography from "@/components/common/typography";
import { StaticImageData } from "next/image";
import React from "react";
import { motion } from "motion/react";
import MotionImage from "@/components/common/motionImage";

export interface WhatSetsApartCardProps {
  image: StaticImageData;
  header: string;
  paragraph: string;
  index?: number;
}

const WhatSetsApartCard = ({
  header,
  image,
  paragraph,
  index = 0,
}: WhatSetsApartCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0.4, x: isEven ? -100 : 100, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
      // viewport={{ once: true }}
    >
      <div className="mb-4 max-h-[350px] w-full overflow-hidden rounded-3xl">
        <MotionImage
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 5 }}
          alt=""
          src={image}
          className="object-cover w-full h-full bg-primary/20"
        />
      </div>
      <Typography
        variant="body-large"
        tabletVariant="heading-5"
        className="font-semibold mb-3"
      >
        {header}
      </Typography>
      <Typography>{paragraph}</Typography>
    </motion.div>
  );
};

export default WhatSetsApartCard;
