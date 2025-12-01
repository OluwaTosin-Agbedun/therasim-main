"use client";

import MotionTypography from "@/components/common/motionTypography";
import React from "react";
import cs from "classnames";
import { motion } from "motion/react";

export interface ListContentProps {
  header: string;
  list: string[];
  listColor?: "white" | "black";
}

const ListContent = ({
  header,
  list,
  listColor = "white",
}: ListContentProps) => {
  return (
    <div>
      <MotionTypography
        initial={{ opacity: 0, x: 0, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 2,
          type: "spring",
        }}
        variant="body-large"
        tabletVariant="heading-5"
        className="mb-4 font-semibold"
      >
        {header}
      </MotionTypography>
      <div className="space-y-2">
        {list.map((item) => (
          <div key={item} className="relative">
            <motion.span
              initial={{ opacity: 0, x: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                ease: "easeOut",
                duration: 2,
                delay: 0.5,
                type: "spring",
              }}
              className={cs(
                "absolute top-[10px] left-[-14px] w-[4px] h-[4px] rounded-full",
                {
                  "bg-white": listColor === "white",
                  "bg-neutral-black": listColor === "black",
                }
              )}
            />
            <MotionTypography
              initial={{ opacity: 0, x: 0, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                ease: "easeOut",
                duration: 2,
                delay: 0.5,
                type: "spring",
              }}
            >
              {item}
            </MotionTypography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListContent;
