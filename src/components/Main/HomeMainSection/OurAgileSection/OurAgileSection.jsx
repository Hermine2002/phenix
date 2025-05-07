import "./OurAgileSection.css";
import { IoMdPlay } from "react-icons/io";

const OurAgileSection = () => {
  return (
    <div className="ouragile-section">
      <h2 className="ouragileh2">
      Seminars
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
