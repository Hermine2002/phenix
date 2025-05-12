import React from "react";
import FirstPartAboutSection from "../../Main/AboutMainSection/FirstPartAboutSection/FirstPartAboutSection";
import SecondPartAboutSection from "../../Main/AboutMainSection/SecondPartAboutSection/SecondPartAboutSection";
 import  OurFunSection from "../../Main/HomeMainSection/OurFunSection/OurFunSection"
 import HighlySection from "../../Main/AboutMainSection/HighlySection/HighlySection"
import DisscuseMakeSection from "../../Main/AboutMainSection/DisscuseMakeSection/DisscuseMakeSection"

export default function About() {
  return (
    <div className="about">

      <FirstPartAboutSection />
      <SecondPartAboutSection />
      <OurFunSection />
      <HighlySection />
      <DisscuseMakeSection />
 
    </div>

  );
}
