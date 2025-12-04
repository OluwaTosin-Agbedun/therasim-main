import React from "react";
import Banner from "./components/banner";
import Therapy from "./components/therapy";
import Simulation from "./components/simulation";

const SolutionsScreen = () => {
  return (
    <>
      <Banner />
      <Simulation />      
      <Therapy />
    </>
  );
};

export default SolutionsScreen;
