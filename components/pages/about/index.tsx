import React from "react";
import VisionMission from "./components/visionMission";
import WhoWeAre from "./components/whoWeAre";
import AboutVideoSection from "@/components/pages/about/components/videoSection";
import Banner from "./components/banner";
import WhatWeDo from "./components/whatWeDo";
// import WhoWeServe from "./components/whoWeServe";

const AboutScreen = () => {
  return (
    <>
      <Banner />
      <WhoWeAre />
      <AboutVideoSection />
      <VisionMission />
      <WhatWeDo />
      {/* <WhoWeServe /> */}
    </>
  );
};

export default AboutScreen;
