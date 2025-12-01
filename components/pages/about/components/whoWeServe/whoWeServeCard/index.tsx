import Typography from "@/components/common/typography";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "motion/react";

interface Props {
  text: string;
  bgImage: StaticImageData;
  mainImage: StaticImageData;
  index?: number;
}

const WhoWeServeCard = ({ bgImage, mainImage, text, index = 0 }: Props) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0.4, x: isEven ? -100 : 100, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
      className="relative h-[350px] md:h-[500px]"
    >
      <div className="absolute w-[85%] md:w-[70%] h-[80%] bottom-0 rounded-3xl overflow-hidden left-[50%] translate-x-[-50%]">
        <Image alt="" src={bgImage} className="w-full h-full object-cover" />
      </div>
      <div className="relative h-full">
        <Image
          alt=""
          src={mainImage}
          className="absolute w-full h-full object-contain"
        />
        <Typography
          variant="heading-5"
          tabletVariant="heading-3"
          className="font-extrabold absolute max-w-[220px] left-[10%] md:left-[20%] bottom-[5%] md:bottom-[10%]"
        >
          {text}
        </Typography>
      </div>
    </motion.div>
  );
};

export default WhoWeServeCard;
