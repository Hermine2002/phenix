import React from "react";
import FirstPartPerspectiveSection from "./FirstPartPerspectiveSection/FirstPartPerspectiveSection";
import SecondPartPerspectveSection from "./SecondPartPerspectiveSection/SecondPartPerspectveSection";
import OurFunSection from "./OurFunSection/OurFunSection";
import TeamCarouselSection from "./TeamCarouselSection/TeamCarouselSection";
import DisscuseMakeSection from "./DisscuseMakeSection/DisscuseMakeSection";
import HighlySection from "./HighlySection/HighlySection";

const PerspectiveMainSection = () => {
  return (
    <>
      <FirstPartPerspectiveSection />
      <SecondPartPerspectveSection />
      <OurFunSection />
      <HighlySection />
      <TeamCarouselSection />
      <DisscuseMakeSection />
    </>
  );
};

export default PerspectiveMainSection;
