import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import React from "react";
import { whatSetsApartData } from "../../data/whatSetsApart";
import WhatSetsApartCard from "./whatSetsApartCard";

const WhatSetsApart = () => {
  return (
    <section className="py-14 md:py-20 overflow-hidden">
      <Container>
        <Typography
          variant="heading-5"
          tabletVariant="heading-2"
          className="font-michroma mb-8 text-center"
          as="h2"
        >
          What Sets TheraSim Apart
        </Typography>
        <div className="grid md:grid-cols-2 gap-10 md:gap-x-14 md:gap-y-20 max-w-[1000px] mx-auto">
          {whatSetsApartData.map((item, index) => (
            <WhatSetsApartCard key={index} index={index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatSetsApart;
