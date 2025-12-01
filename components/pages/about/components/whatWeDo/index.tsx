"use client";

import Container from "@/components/common/container";
import React from "react";
import WhatWeDoCard from "./whatWeDoCard";
import whatWeDoImg1 from "@/assets/images/about-what-we-do-1.png";
import whatWeDoImg2 from "@/assets/images/about-what-we-do-2.png";
import whatWeDoImg3 from "@/assets/images/about-what-we-do-3.png";
import whatWeDoImg4 from "@/assets/images/about-what-we-do-4.png";
import whatWeDoImg5 from "@/assets/images/about-what-we-do-5.png";
import whatWeDoImg6 from "@/assets/images/about-what-we-do-6.png";
import MotionTypography from "@/components/common/motionTypography";

const WhatWeDo = () => {
  return (
    <section className="py-14 md:py-20 overflow-hidden">
      <Container>
        <MotionTypography
          initial={{ opacity: 0, x: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            ease: "easeOut",
            duration: 2,
            type: "spring",
          }}
          variant="heading-5"
          tabletVariant="heading-2"
          className="font-michroma mb-4 text-center"
          as="h2"
        >
          What we do
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
          className="text-center max-w-[500px] mb-7 md:mb-14 mx-auto"
        >
          We develop and deploy integrated solutions for training, treatment,
          and performance:
        </MotionTypography>
        <div className="space-y-10 md:space-y-12">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-around">
            <WhatWeDoCard
              image={whatWeDoImg1}
              index={0}
              text="Virtual Reality Therapy Modules for trauma recovery and resilience."
            />
            <WhatWeDoCard
              image={whatWeDoImg2}
              index={1}
              text="Medical & Combat Simulation Training with manikins, wound kits, and VR drills."
            />
          </div>
          <div className="flex gap-10 justify-around">
            <WhatWeDoCard
              image={whatWeDoImg3}
              index={2}
              text="Emergency Response Simulators for triage, evacuation, and mass casualty readiness."
            />
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-around">
            <WhatWeDoCard
              image={whatWeDoImg4}
              index={3}
              text="Mobile Simulation Units for bases, hospitals, and field operations."
            />
            <WhatWeDoCard
              image={whatWeDoImg5}
              index={4}
              text="Corporate & Educational Resilience Platforms for wellbeing and stress management."
            />
          </div>
          <div className="flex gap-10 justify-around">
            <WhatWeDoCard
              image={whatWeDoImg6}
              index={5}
              text="Custom VR/AR Simulation Environments for unique operational requirements."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatWeDo;
