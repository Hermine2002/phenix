import studio from '../../../../assets/imgs/k2Yim1TbjjsMynpORml0IiI4jWL65XgfdIVBPvrs.jpg';

import { Link } from 'react-router-dom';
import '../WillTakeSection/WillTakeSection.css';
import { useTranslation } from 'react-i18next';

const CreativestudioSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <section>
      <div className="willtake-article">
        <img
          src={studio}
          alt="Artificial Intelligence"
          className="willtake-featured-image"
        />
        <div className="willtake-article-meta">
          <div className="meta-info">
            <Link className="meta-link">
              {t('blog-section.studio.name')}
              <span className="meta-separator"> | </span>
            </Link>

            <Link className="meta-link">
              {t('blog-section.studio.tagline')}
            </Link>
          </div>
          <h2 className="willtake-article-title">
            {t('blog-section.studio.title')}
          </h2>
          <p className="willtake-article-excerpt">
            {t('blog-section.studio.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativestudioSection;
