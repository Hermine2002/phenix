import DisscuseMakeSection from './DisscuseMakeSection/DisscuseMakeSection'
import FirstPartWhatWeDoSection from './FirstPartWhatWeDoSection/FirstPartWhatWeDoSection'
import HelpYouSection from './HelpYouSection/HelpYouSection'
import PricingSection from './PricingSection/PricingSection'
import TeamSliderSection from './TeamSliderSection/TeamSliderSection'

const WhatWeDoMainSection = () => {
  return (
    <div>
        <FirstPartWhatWeDoSection />
        <HelpYouSection />
        <PricingSection />
        <TeamSliderSection />
        <DisscuseMakeSection />
    </div>
  )
}

export default WhatWeDoMainSection