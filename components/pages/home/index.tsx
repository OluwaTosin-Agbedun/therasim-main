import React from "react";
import WhatSetsApart from "./components/whatSetsApart";
import Banner from "./components/banner";
import InfoGrid from "./components/infoGrid";
import MoreThanTechnology from "./components/moreThanTechnology";

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <InfoGrid />
      <WhatSetsApart />
      <MoreThanTechnology />
    </>
  );
};

export default HomeScreen;
