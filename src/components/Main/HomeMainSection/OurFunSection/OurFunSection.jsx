import "./OurFunSection.css";

const OurFunSection = () => {
  return (
    <div className="ourfunconteiner">
      <div className="ourfun-section">
        <div className="fun-fact">
          <div className="container">
            <div className="fun-fact-content">
              <h2 className="h2">Our fun fact</h2>
              <p className="p">
                Sed ut perspiciatis unde omnis iste natus error voluptatem{" "}
                accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
            <div className="fun-fact-stats">
              <div className="box">
                <h3 className="h3">40k</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p>Global Happy Clients</p>
                </div>
              </div>
              <div className="box">
                <h3 className="h3">245</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p>Global Happy Clients</p>
                </div>
              </div>
              <div className="box">
                <h3 className="h3">50k</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p>Global Happy Clients</p>
                </div>
              </div>
              <div className="box">
                <h3 className="h3">550</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p>Global Happy Clients</p>
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
