"use client";

import Typography from "@/components/common/typography";
import React from "react";
import { motion } from "motion/react";
import {
  Brain,
  Globe,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

export interface MoreThanTechnologyCardProps {
  header: string;
  paragraph: string;
  index?: number;
}

const iconMap = [
  { Icon: Globe, color: "text-green-500" },
  { Icon: ShieldCheck , color: "text-blue-500" },
  { Icon: Brain, color: "text-purple-500" },
  { Icon: HeartHandshake, color: "text-red-500" },
];

const MoreThanTechnologyCard = ({
  header,
  paragraph,
  index = 0,
}: MoreThanTechnologyCardProps) => {
  const isEven = index % 2 === 0;
  const { Icon, color } = iconMap[index % 4];

  return (
    <motion.div
      initial={{ opacity: 0.4, x: isEven ? -100 : 100, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
      className="bg-[#FDFCFCCC] px-8 py-8 rounded-xl shadow-[0px_-4px_0px_5px_#00000040]"
    >
      <div className="w-[40px] h-[40px] mb-4">
        <Icon size={40} className={color} strokeWidth={1.5} />
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
