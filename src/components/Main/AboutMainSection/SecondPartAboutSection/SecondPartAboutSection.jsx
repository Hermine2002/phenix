import React from "react";
import "../SecondPartAboutSection/SecondPartAboutSection.css";
import about  from "../../../../assets/imgs/about.png"
import about1 from "../../../../assets/imgs/about1.jpg"
import about3 from "../../../../assets/imgs/istockphoto-2148468496-612x612.jpg"
import { useTranslation } from "react-i18next";
export default function SecondPartAboutSection() {
  
    const { t, i18n } = useTranslation()
  return (
    <section className="perspective_section">
    <div className="kanteiner-perpective">
      <div className="text-photo">
        <div className="kanteiner-textboxx">
          <h3 className="kanteiner-textboxx-h3">{t('about.heading')}</h3>
          <h2 className="kanteiner-textboxx-h2">
          {t('about.subheading')}
         </h2>
          <p className="kanteiner-textboxx-p">
{t('about.paragraph1')}
{t('about.paragraph2')}
        </p>
        </div>
        <div className="kanteiner-textbox">
          <img src={about} alt="perspectivephoto1" className="perspectivephoto1"/>
        </div>

      </div>
<div className="photo-photo">
  <div className="kanteiner-photobox">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={about3} alt="perspectivephoto2" className="perspectivephoto2" />
        </div>
        <div className="flip-card-back">
          
          <p>{t('about.card1')}</p>
        </div>
      </div>
    </div>
  </div>

  <div className="kanteiner-photobox">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={about1} alt="perspectivephoto3" className="perspectivephoto2" />
        </div>
        <div className="flip-card-back">
         
          <p>
          {t('about.card2')}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  </section>
  );
}
