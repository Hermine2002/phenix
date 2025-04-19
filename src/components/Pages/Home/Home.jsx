import React, { useEffect, useState } from "react";
import OurFunSection from "../../Main/HomeMainSection/OurFunSection/OurFunSection";
import HelpYouSection from "../../Main/HomeMainSection/HelpYouSection/HelpYouSection";
import PortfolioSection from "../../Main/HomeMainSection/PortfolioSection/PortfolioSection";
import OurAwardsSection from "../../Main/HomeMainSection/OurAwardsSection/OurAwardsSection";
import OurAgileSection from "../../Main/HomeMainSection/OurAgileSection/OurAgileSection";
import TeamCarouselSection from "../../Main/HomeMainSection/TeamCarouselSection/TeamCarouselSection";
import TeamSliderSection from "../../Main/HomeMainSection/TeamSliderSection/TeamSliderSection";
import AvtoSliderSection from "../../Main/HomeMainSection/AvtoSliderSection/AvtoSliderSection";
import OurReputedSection from "../../Main/HomeMainSection/OurReputedSection/OurReputedSection";

import "./Home.css";
import DisscuseMakeSection from "../../Main/HomeMainSection/DisscuseMakeSection/DisscuseMakeSection";
import HomeCreativitySection from "../../Main/HomeMainSection/HomeCreativitySection/HomeCreativitySection";


export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);
  return (
    <>
      <HomeCreativitySection />
      <OurFunSection />
      <HelpYouSection />
      <PortfolioSection />
      <OurAwardsSection />
      <OurAgileSection />
      <TeamCarouselSection />
      <TeamSliderSection />
      <AvtoSliderSection />
      <OurReputedSection />
      <DisscuseMakeSection />
      <div
        className="custom-cursor"
        style={{ left: `${position.x - 29}px`, top: `${position.y - 29}px` }}
      ></div>
      <div
        className="custom-cursor1"
        style={{ left: `${position.x - 12}px`, top: `${position.y - 10}px` }}
      ></div>
    </>
  );
}
