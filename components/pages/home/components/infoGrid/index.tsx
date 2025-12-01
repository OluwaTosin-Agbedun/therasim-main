import Container from "@/components/common/container";
import React from "react";
import InfoGridItem from "./infoGridItem";
import infoGridImg1 from "@/assets/images/info-grid-1.png";
import infoGridImg2 from "@/assets/images/info-grid-2.png";
import infoGridImg3 from "@/assets/images/info-grid-3.png";
import infoGridImg4 from "@/assets/images/info-grid-4.png";

const InfoGrid = () => {
  return (
    <section className="py-14 md:py-20 overflow-hidden bg-[#E5F1F4]">
      <Container className="grid grid-cols-2 md:flex gap-10">
        <InfoGridItem
          image={infoGridImg1}
          text="VR Therapy for PTSD & Mental Resilience"
          index={0}
        />
        <InfoGridItem
          image={infoGridImg2}
          text="Medical & Trauma Simulation for Field Training"
          index={1}
        />
        <InfoGridItem
          image={infoGridImg3}
          text=" Emergency Response Readiness"
          index={2}
        />
        <InfoGridItem
          image={infoGridImg4}
          imageClasses="!w-[60px] !h-[60px]"
          text=" Custom Simulation & R&D"
          index={3}
        />
      </Container>
    </section>
  );
};

export default InfoGrid;
