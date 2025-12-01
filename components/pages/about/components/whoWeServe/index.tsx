"use client";

import Container from "@/components/common/container";
import React from "react";
import WhoWeServeCard from "./whoWeServeCard";
import whoWeServeMainImg1 from "@/assets/images/who-we-serve-1-main.png";
import whoWeServeBgImg1 from "@/assets/images/who-we-serve-1-bg.png";
import whoWeServeMainImg2 from "@/assets/images/who-we-serve-2-main.png";
import whoWeServeBgImg2 from "@/assets/images/who-we-serve-2-bg.png";
import whoWeServeMainImg3 from "@/assets/images/who-we-serve-3-main.png";
import whoWeServeBgImg3 from "@/assets/images/who-we-serve-3-bg.png";
import whoWeServeMainImg4 from "@/assets/images/who-we-serve-4-main.png";
import whoWeServeBgImg4 from "@/assets/images/who-we-serve-4-bg.png";
import MotionTypography from "@/components/common/motionTypography";

const WhoWeServe = () => {
  return (
    <section className="py-14 md:py-20 bg-[linear-gradient(to_bottom_right,#01375D,#2E899B)] overflow-hidden text-white">
      <Container>
        <MotionTypography
          initial={{ opacity: 0, x: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            ease: "easeOut",
            duration: 2,
            type: "spring",
            delay: 0.5,
          }}
          variant="heading-5"
          tabletVariant="heading-2"
          className="font-michroma mb-4 text-center"
          as="h2"
        >
          Who we serve
        </MotionTypography>
        <div className="grid lg:grid-cols-2 gap-12">
          <WhoWeServeCard
            bgImage={whoWeServeBgImg1}
            text="Defense & Security"
            mainImage={whoWeServeMainImg1}
            index={0}
          />
          <WhoWeServeCard
            bgImage={whoWeServeBgImg2}
            text="Healthcare Providers"
            mainImage={whoWeServeMainImg2}
            index={1}
          />
          <WhoWeServeCard
            bgImage={whoWeServeBgImg3}
            text="Educational Institutions"
            mainImage={whoWeServeMainImg3}
            index={2}
          />
          <WhoWeServeCard
            bgImage={whoWeServeBgImg4}
            text="Corporate and Organisational Clients"
            mainImage={whoWeServeMainImg4}
            index={3}
          />
        </div>
      </Container>
    </section>
  );
};

export default WhoWeServe;
