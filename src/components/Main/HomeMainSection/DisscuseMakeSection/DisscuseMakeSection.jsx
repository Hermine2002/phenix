import { FaArrowRightLong } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

import './DisscuseMakeSection.css';

const DisscuseMakeSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="disscusemake-section">
      <div className="banner">
        <div className="fonne1">
          <h2 className="fonneh2">{t('home-section.heading')}</h2>

          <a href="/">
            <p className="buuton">
              {t('home-section.button')}
              <FaArrowRightLong className="icooon11" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DisscuseMakeSection;
