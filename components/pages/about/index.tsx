import React from "react";
import VisionMission from "./components/visionMission";
import WhoWeAre from "./components/whoWeAre";
import Banner from "./components/banner";
import WhatWeDo from "./components/whatWeDo";
import WhoWeServe from "./components/whoWeServe";

const AboutScreen = () => {
  return (
    <>
      <Banner />
      <WhoWeAre />
      <VisionMission />
      <WhatWeDo />
      <WhoWeServe />
    </>
  );
};

export default AboutScreen;
