import artist from '../../../../assets/imgs/sMWvOu2WgWwNbYx7SqSCiPACVUqlXe7gAgUsFol1.jpg';

import { Link } from 'react-router-dom';
import '../WillTakeSection/WillTakeSection.css';
import { useTranslation } from 'react-i18next';

const ArtisticMindSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <section>
      <div className="willtake-article">
        <img
          src={artist}
          alt="Artificial Intelligence"
          className="willtake-featured-image"
        />
        <div className="willtake-article-meta">
          <div className="meta-info">
            <Link className="meta-link">
              {t('blog-section.creativeThinking')}
            </Link>
          </div>
          <h2 className="willtake-article-title">
            {t('blog-section.articleTitle')}
          </h2>
          <p className="willtake-article-excerpt">
            {t('blog-section.articleExcerpt')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtisticMindSection;
