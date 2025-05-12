import "./OurAgileSection.css";
import { IoMdPlay } from "react-icons/io";
import { useTranslation } from "react-i18next";
const OurAgileSection = () => {
   const { t, i18n } = useTranslation()
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }
  return (
    <div className="ouragile-section">
      <h2 className="ouragileh2">
   {t('home-section.title')}
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
