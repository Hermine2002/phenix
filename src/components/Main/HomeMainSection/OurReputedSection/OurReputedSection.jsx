import logggo1 from "../../../../assets/imgs/partner_1.png";
import logggo2 from "../../../../assets/imgs/partner_2.png";
import logggo3 from "../../../../assets/imgs/partner_3.png";
import logggo4 from "../../../../assets/imgs/partner_4.png";
import logggo5 from "../../../../assets/imgs/partner_5.png";

import "./OurReputedSection.css";

const OurReputedSection = () => {
  return (
    <div className="running-text-container">
   
      <div className="logoscanteiner">
        <img src={logggo1} alt="logo1" className="loggggo1" />
        <img src={logggo2} alt="logo2" className="loggggo1" />
        <img src={logggo3} alt="logo3" className="loggggo1" />
        <img src={logggo4} alt="logo4" className="loggggo1" />
        <img src={logggo5} alt="logo5" className="loggggo1" />
      </div>
    </div>
  );
};

export default OurReputedSection;
