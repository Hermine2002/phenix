import './OurFunSection.css';
import { useTranslation } from 'react-i18next';
const OurFunSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="ourfunconteiner">
      <div className="ourfun-section">
        <div className="fun-fact-home">
          <div className="container-home">
            <div className="fun-fact-content-home">
              <h2 className="h2-home">{t('home-section.ourAchievements')}</h2>
              <p className="p">{t('home-section.description')}</p>
            </div>
            <div className="fun-fact-stats">
              <div className="box">
                <h3 className="h3">1500</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p className="contentbox-p">{t('home-section.graduates')}</p>
                </div>
              </div>
              <div className="box">
                <h3 className="h3">77</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p className="contentbox-p">{t('home-section.partners')}</p>
                </div>
              </div>
              <div className="box">
                <h3 className="h3">67</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p className="contentbox-p">{t('home-section.projects')}</p>
                </div>
              </div>
              <div className="box">
                <h3 className="h3">1644</h3>
                <div className="contentbox">
                  <span>+</span>
                  <p className="contentbox-p">{t('home-section.results')}</p>
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
