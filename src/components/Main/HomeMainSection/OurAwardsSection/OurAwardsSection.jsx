import "./OurAwardsSection.css";

const OurAwardsSection = () => {
  return (
    <div className="ourawards-section">
      <div className="contentttbox">
        {" "}
        <h2 className="ourh2">Our Awards</h2>
        <h3 className="ourh3">
        The advantages of working with us
        </h3>
      </div>
      <div className="contentttbox1">
        <div className="awards-list">
          <h3 className="text001"> Projects, </h3>
          <h2 className="text002">non-repetitive</h2>
          <p className="text003">
          original  projects
          </p>
        </div>
        <div className="awards-list">
          <h3 className="text001"> Business</h3>
          <h2 className="text002"> Business growth </h2>
          <p className="text003">
          The business is growing
            <br />
            by 30–60%
          </p>
        </div>
        <div className="awards-list">
          <h3 className="text001">Training </h3>
          <h2 className="text002"> Quality education</h2>
          <p className="text003">
          in line with <br/>
          international standards
          </p>
        </div>
        <div className="awards-list2">
          <h3 className="text001"> Marketing </h3>
          <h2 className="text002"> New and Effective</h2>
          <p className="text003">
          Marketing solutions  <br />
           in a short time
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurAwardsSection;
