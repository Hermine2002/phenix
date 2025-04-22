import "./OurAwardsSection.css";

const OurAwardsSection = () => {
  return (
    <div className="ourawards-section">
      <div className="contentttbox">
        {" "}
        <h2 className="ourh2">Our Awards</h2>
        <h3 className="ourh3">
          We get multiple <br />
          awards
        </h3>
      </div>
      <div className="contentttbox1">
        <div className="awards-list">
          <h3 className="text001">2019</h3>
          <h2 className="text002">Google awards</h2>
          <p className="text003">
            Website of the day <br />
            Mobile exelence
          </p>
        </div>
        <div className="awards-list">
          <h3 className="text001">2020</h3>
          <h2 className="text002">New technology innovation</h2>
          <p className="text003">
            Honorable mention
            <br />
            Desktop excellence
          </p>
        </div>
        <div className="awards-list">
          <h3 className="text001">2021</h3>
          <h2 className="text002">CSS awards design</h2>
          <p className="text003">
            Honorable mention <br />
            Desktop excellence
          </p>
        </div>
        <div className="awards-list2">
          <h3 className="text001">2022</h3>
          <h2 className="text002">UI/UX design of the month</h2>
          <p className="text003">
            Website of the day <br />
            Mobile exelence
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurAwardsSection;
