import React from "react";
import "../SecondPartAboutSection/SecondPartAboutSection.css";
import about  from "../../../../assets/imgs/about.png"
import about1 from "../../../../assets/imgs/about1.jpg"
import about3 from "../../../../assets/imgs/about3.jpg"
export default function SecondPartAboutSection() {
  return (
    <section className="perspective_section">
    <div className="kanteiner-perpective">
      <div className="text-photo">
        <div className="kanteiner-textboxx">
          <h3 className="kanteiner-textboxx-h3">About Our Agency</h3>
          <h2 className="kanteiner-textboxx-h2">Your trusted partner <br />
          for business</h2>
          <p className="kanteiner-textboxx-p">this oois the main factor that sets us apart from our competition and <br />
          allows us to deliver a specialist business consultancy service. Our team <br />
          applies its wide-ranging experience to determining. Through our years <br />
          of experience, we’ve also learned that while each channel.</p>
        </div>
        <div className="kanteiner-textbox">
          <img src={about} alt="perspectivephoto1" className="perspectivephoto1"/>
        </div>

      </div>
      <div className="photo-photo">
      <div className="kanteiner-photobox">
          <img src={about3} alt="perspectivephoto2" className="perspectivephoto2"/>
          <img src={about1} alt="perspectivephoto3" className="perspectivephoto2"/>
        </div>
      </div>
    </div>
  </section>
  );
}
