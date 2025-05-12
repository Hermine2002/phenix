import './OurAwardsSection.css';
import { useTranslation } from 'react-i18next';

const OurAwardsSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="ourawards-section">
      <div className="contentttbox">
        {' '}
        <h2 className="ourh2">{t('home-section.ourAwards.title')}</h2>
        <h3 className="ourh3">{t('home-section.ourAwards.subtitle')}</h3>
      </div>
      <div className="contentttbox1">
        <div className="awards-list">
          <h3 className="text001">
            {t('home-section.ourAwards.projects.title')}
          </h3>
          <h2 className="text002">
            {t('home-section.ourAwards.projects.subtitle')}
          </h2>
          <p className="text003">
            {t('home-section.ourAwards.projects.description')}
          </p>
        </div>
        <div className="awards-list">
          <h3 className="text001">
            {t('home-section.ourAwards.business.title')}
          </h3>
          <h2 className="text002">
            {t('home-section.ourAwards.business.subtitle')}
          </h2>
          <p className="text003">
            {t('home-section.ourAwards.business.description')}
          </p>
        </div>
        <div className="awards-list">
          <h3 className="text001">
            {t('home-section.ourAwards.training.title')}
          </h3>
          <h2 className="text002">
            {t('home-section.ourAwards.training.subtitle')}
          </h2>
          <p className="text003">
            {t('home-section.ourAwards.training.description')}
          </p>
        </div>
        <div className="awards-list2">
          <h3 className="text001">
            {t('home-section.ourAwards.marketing.title')}
          </h3>
          <h2 className="text002">
            {t('home-section.ourAwards.marketing.subtitle')}
          </h2>
          <p className="text003">
            {t('home-section.ourAwards.marketing.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurAwardsSection;
