import React from "react";
import HeroSection from "./Component/Herosection";

const About = () => {
  const data = {
    name: "Raj Ecommerce",
  };

  return <HeroSection myData={data} />;
};

export default About;