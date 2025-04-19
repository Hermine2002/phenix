import "./OurAgileSection.css";
import { IoMdPlay } from "react-icons/io";

const OurAgileSection = () => {
  return (
    <div className="ouragile-section">
      <h2 className="ouragileh2">
        Our agile process is ability to adapt and respond <br />
        to change. Agile organizations view change as an <br />
        opportunity, not a threat.
      </h2>
      <div className="videoobox">
        <div className="ffoto1">
          <div className="playybox">
            <IoMdPlay className="vdeo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAgileSection;
