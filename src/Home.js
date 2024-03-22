import React from "react";

import HeroSection from "./Component/Herosection";
import Trusted from "./Component/Trusted";
import Services from "./Component/Services";

const Home = () => {
  const data = {
    name: "Ghar ki Dukan",
  };

  return <>
            <HeroSection myData={data} />;
            <Services/>
            <Trusted/>
        </> 
};

export default Home;