import perspectivephoto1 from "../../../../assets/imgs/5TQUCyH6qAyEHyjd31J3BIEEyBgpgXzwBvcUUsJw.png"
import perspectivephoto2 from "../../../../assets/imgs/OtkldinvaxOaXIUTfXcSkyu5hPFatPnu9NMtKvFh.jpg"
import perspectivephoto3 from "../../../../assets/imgs/FnGfSsgABe4ruPpsoSZJBrfdwGO6SVgTNglLdWRV.jpg"

import "./SecondPartPerspective.css";

const SecondPartPerspectveSection = () => {
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
            <img src={perspectivephoto1} alt="perspectivephoto1" className="perspectivephoto1"/>
          </div>

        </div>
        <div className="photo-photo">
        <div className="kanteiner-photobox">
            <img src={perspectivephoto2} alt="perspectivephoto2" className="perspectivephoto2"/>
            <img src={perspectivephoto3} alt="perspectivephoto3" className="perspectivephoto2"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPartPerspectveSection;
