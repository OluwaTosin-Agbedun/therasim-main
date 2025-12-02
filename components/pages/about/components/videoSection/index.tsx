"use client";

import React from "react";
import Container from "@/components/common/container";
import MotionTypography from "@/components/common/motionTypography";

const AboutVideoSection = () => {
  return (
    <section className="py-14 md:py-20 bg-black/5">
      <Container>
        {/* <MotionTypography
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          variant="heading-5"
          tabletVariant="heading-2"
          className="font-michroma mb-6 text-center"
        >
          At TheraSim, we use immersive simulation technologies to transform
             readiness, training, and performance across critical industries.
        </MotionTypography>
        SECTION TITLE */}
        <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            variant="heading-5"
            tabletVariant="heading-2"
            className="font-michroma mb-6 text-center"
        >
            Real Life Scenarios
        </MotionTypography>

        <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            variant="body-large"              // <-- normal text size
            className="text-center max-w-2xl mx-auto mb-10"
        >
            At TheraSim, we use immersive simulation technologies to transform
            readiness, training, and performance across critical industries.
        </MotionTypography>

        <div className="w-full rounded-3xl overflow-hidden">
          <video
            src="/videos/what-we-do.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutVideoSection;
