import studio from '../../../../assets/imgs/hd9yDqDAPfPnFGYZ0yQ2TPICV7C5yMNhaxW5471P.jpg';

import { Link } from 'react-router-dom';
import '../WillTakeSection/WillTakeSection.css';
import { useTranslation } from 'react-i18next';

const ARoadmapSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <section>
      <div className="willtake-article">
        <img
          src={studio}
          alt={t('blog-section.aroadmap.imageAlt')}
          className="willtake-featured-image"
        />
        <div className="willtake-article-meta">
          <div className="meta-info">
            <Link className="meta-link">
              {t('blog-section.aroadmap.author')}
              <span className="meta-separator"> | </span>
            </Link>

            <Link className="meta-link">
              {t('blog-section.aroadmap.date')}
              <span className="meta-separator"> | </span>
            </Link>

            <Link className="meta-link">
              {t('blog-section.aroadmap.comments')}
            </Link>
          </div>
          <h2 className="willtake-article-title">
            {t('blog-section.aroadmap.title')}
          </h2>
          <p className="willtake-article-excerpt">
            {t('blog-section.aroadmap.excerpt')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ARoadmapSection;
