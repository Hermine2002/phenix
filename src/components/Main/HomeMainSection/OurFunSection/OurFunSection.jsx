import "./OurFunSection.css";

const OurFunSection = () => {
  return (
    <div className="ourfunconteiner">
      <div className="ourfun-section">
        <div className="fun-fact-home">
          <div className="container-home">
            <div className="fun-fact-content-home">
              <h2 className="h2-home">Our Achievements</h2>
              <p className="p">
            Phenix is a space for those who strive for more.
             We work with both aspiring and established entrepreneurs.
             We bring together people ready to grow, build, and achieve real results.
              Here, ideas take shape and goals gain momentum.
              Join us. The time to act is now.
              </p>
            </div>
            <div className="fun-fact-stats">
              <div className="box">
                <h3 className="h3">1500</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p className="contentbox-p"></p>
                </div>
              </div>
              <div className="box">
                <h3 className="h3">77</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p className="contentbox-p">Partners cooperating with us</p>
                </div>
              </div>
              <div className="box">
                <h3 className="h3">67</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p className="contentbox-p">Our successful projects for partners</p>
                </div>
              </div>
              <div className="box">
                <h3 className="h3">1644</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p className="contentbox-p">Our results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFunSection;
