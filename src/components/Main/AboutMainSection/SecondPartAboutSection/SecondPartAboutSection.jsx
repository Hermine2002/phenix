import React from "react";
import "../SecondPartAboutSection/SecondPartAboutSection.css";
import img1 from "../../../../assets/imgs/5TQUCyH6qAyEHyjd31J3BIEEyBgpgXzwBvcUUsJw.jpg";
import img2 from "../../../../assets/imgs/OtkldinvaxOaXIUTfXcSkyu5hPFatPnu9NMtKvFh.jpg";
import img3 from "../../../../assets/imgs/FnGfSsgABe4ruPpsoSZJBrfdwGO6SVgTNglLdWRV.jpg";
import img4 from "../../../../assets/imgs/W36HeJlhRELdASQcXhtyoO4EYd6cc7VNizphjWsO.jpg";
import img5 from "../../../../assets/imgs/I4WuYxUfcw0qEF2sL1iB8wtCcwOSzgjFs11uAj3H.jpg";
import img6 from "../../../../assets/imgs/ma8RG4ft7uETf91LVGDdZXPDpg14Y0zemPJUSJ4B.jpg";
import img7 from "../../../../assets/imgs/gnXiqFUhrWRjX7cG3O1fBHobhqGkVRKyybpuQhq0.jpg";
import img8 from "../../../../assets/imgs/F4Y3e5bkteg5Ust1ZxuaiN3JWIeGSl1yjpiM8F4P.jpg";
export default function SecondPartAboutSection() {
  return (
    <div className="second-section-container">
      <div className="top">
        <div className="left-container">
          <div className="text-box">
            <h3>About Our Agency</h3>
            <h2>Your trusted partner for business</h2>
            <p>
              this oois the main factor that sets us apart from our competition
              and allows us to deliver a specialist business consultancy
              service. Our team applies its wide-ranging experience to
              determining. Through our years of experience, we’ve also learned
              that while each channel.
            </p>
            <div></div>
            <div className="box-mini">
              <div className="box-mini-box"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="right-container">
          <div className="img-box">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      {/* ///////////////////////////////// */}
      <div className="top-two">
        <div className="img-box-two">
          <div className="one-box">
            <img src={img2} alt="" />
          </div>
          <div className="two-box">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      {/*  ////////////////////////////////////////////*/}
      <div className="three">
        <div className="rating-box">
          <div className="rating-box-child">
            <div className="rating-box-child-left">
              <h2 className="rating-box-child-left-text">Our fun fact</h2>
              <p className="rating-box-child-left-text2">
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis.
              </p>
            </div>
            <div className="rating-box-child-right">
              <div className="rating-box-child-right-child">
                <div className="rating-box-child-right-child1">
                  <div className="right-child1-child1">40K</div>
                  <div className="right-child1-child2">
                    <span className="span-text">+</span>
                    <p className="p-style">Global Happy Clients</p>
                  </div>
                </div>
                <div className="rating-box-child-right-child2">
                  <div className="right-child2-child1">250</div>
                  <div className="right-child2-child2">
                    <span className="span-text">+</span>
                    <p className="p-style">Team Members</p>
                  </div>
                </div>
                <div className="rating-box-child-right-child3">
                  <div className="right-child3-chold1">50K</div>
                  <div className="right-child3-chold2">
                    <span className="span-text">+</span>
                    <p className="p-style">Project Completed</p>
                  </div>
                </div>
                <div className="rating-box-child-right-child4">
                  <div className="right-child4-child1">550</div>
                  <div className="right-child4-child2">
                    <span className="span-text">+</span>
                    <p className="p-style">Digital products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////// */}
      <div className="highly-box">
        <div className="highly-container">
          <div className="highly-img">
            <img src={img4} alt="" />
          </div>
          <div className="highly-text">
            <h3 className="why">Why Choose Us</h3>
            <h2 className="highly">Highly experienced pepole with us</h2>
            <div></div>
            <p className="highly-factor">
              This is the main factor that sets us apart from our competition
              and allows us to deliver a specialist business consultancy
              service. Our team applies its wide-ranging experience to
              determining. Through our years of experience, we’ve also learned
              that while each channel. This is the main factor that sets us
              apart from our competition and allows us to deliver a specialist
              business consultancy service. Our team applies its wide-ranging
              experience to determining.
            </p>
            <div></div>
            <div className="box-mini">
              <div className="box-mini-box"></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////// */}
      <div className="cs-height"></div>
      <div className="container-end">
        <div className="cs-section_heading">
          <h3 className="cs-section_subtitle">Our team</h3>
          <h2 className="cs-section_title">
            Awesome team
            <br />
            members
          </h2>
          <div className="slick-box">
            <div className="slick-prev"></div>
            <div className="slick-next"></div>
          </div>
        </div>
        <div className="cs-height_85"></div>
        <div className="cs-height_85"></div>
        <div className="awesome">
          <div className="awesome-img-box">
            <img src={img5} alt="" />
          </div>
          <div className="awesome-img-box">
            <img src={img6} alt="" />
          </div>
          <div className="awesome-img-box">
            <img src={img7} alt="" />
          </div>
          <div className="awesome-img-box">
            <img src={img8} alt="" />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
