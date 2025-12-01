import Container from "@/components/common/container";
import React from "react";
import VisionItem from "./visionItem";
import aboutMissionImg from "@/assets/images/about-mission.png";
import aboutVisionImg from "@/assets/images/about-vision.png";

const VisionMission = () => {
  return (
    <section className="bg-[linear-gradient(to_right,#01375D,#2E899B)] py-14 md:py-20 overflow-hidden text-white">
      <Container className="flex flex-col lg:flex-row gap-16 lg:gap-32">
        <VisionItem
          content="To transform health, resilience, and operational readiness through immersive technology and simulation innovation."
          header="Our mission"
          image={aboutMissionImg}
        />
        <VisionItem
          content="We envision a world where immersive technology bridges the gap between traditional treatment modalities and contemporary healthcare challenges, making effective therapeutic interventions and training more accessible, engaging, and impactful for diverse populations across africa"
          header="Our vision"
          image={aboutVisionImg}
        />
      </Container>
    </section>
  );
};

export default VisionMission;
