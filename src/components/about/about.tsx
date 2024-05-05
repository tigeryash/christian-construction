import React from "react";
import SectionContainer from "../section-container";
import AboutGrid from "./about-grid";
import AboutInfo from "./about-info";

const About = () => {
  return (
    <SectionContainer
      id="about"
      className="flex flex-col text-black lg:flex-row justify-between w-full space-y-8"
    >
      <AboutInfo />
      <AboutGrid />
    </SectionContainer>
  );
};

export default About;
