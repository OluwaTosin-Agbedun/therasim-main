"use client";

import MotionImage from "@/components/common/motionImage";
import MotionTypography from "@/components/common/motionTypography";
import { StaticImageData } from "next/image";
import React from "react";

interface Props {
  header: string;
  content: string;
  image: StaticImageData;
}

const VisionItem = ({ content, header, image }: Props) => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 flex-1">
      <MotionTypography
        initial={{ opacity: 0, x: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 2,
          type: "spring",
        }}
        variant="heading-5"
        tabletVariant="heading-3"
        className="font-michroma"
      >
        {header}
      </MotionTypography>
      <MotionTypography
        initial={{ opacity: 0, x: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 2,
          type: "spring",
          delay: 0.5,
        }}
        variant="body"
        tabletVariant="body-medium"
        className="flex-1"
      >
        {content}
      </MotionTypography>
      <MotionImage
        initial={{ opacity: 0, x: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 2,
          type: "spring",
          delay: 1,
        }}
        alt=""
        src={image}
      />
    </div>
  );
};

export default VisionItem;
