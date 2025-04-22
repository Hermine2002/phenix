import { Link } from "react-router-dom";
import "./FirstPartPerspectiveSection.css";

const FirstPartPerspectiveSection = () => {
  return (
    <section className="ourpers">
      <div className="fone-perspective">     
      <h2 className="main_text">
        Our Perspective
        <br />
        <Link className="home" to="/">HOME </Link>
        <span className="ss"> | </span>
        <Link className="pers" to="/perspective"> OUR PERSPECTIVE</Link>
      </h2>
      <div className="fakeShadow"></div>
      </div>
    </section>
  );
};

export default FirstPartPerspectiveSection;
