import React from "react";
import FirstPartCoinSection from "../../Main/CoinMainSection/FirstPartCoinSection/FirstPartCoinSection"
import SecondPartCoinSection from "../../Main/CoinMainSection/SecondPartCoinSection/SecondPartCoinSection";
import DisscuseMakeSection from "../../Main/HomeMainSection/DisscuseMakeSection/DisscuseMakeSection";
import TeamSliderSection from "../../Main/CoinMainSection/TeamSliderSection/TeamSliderSection";
import HighlySection from "../../Main/CoinMainSection/HighlySection/HighlySection";
export default function Coin() {
  return <div className="coin">
    <FirstPartCoinSection />
    <HighlySection/>
    <SecondPartCoinSection />
    <DisscuseMakeSection/>
    <TeamSliderSection/>
  </div>;
}
