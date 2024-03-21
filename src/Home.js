import React from "react";

import HeroSection from "./Component/Herosection";

const Home = () => {
  const data = {
    name: "Ghar ki Dukan",
  };

  return <HeroSection myData={data} />;
};

export default Home;