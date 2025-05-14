import top from '../../../../assets/imgs/RCmGn9RlTaxWd058D4K3ofiL7gak41iPOfv1eUl0 (1).jpg';

import { Link } from 'react-router-dom';
import '../WillTakeSection/WillTakeSection.css';
import { useTranslation } from 'react-i18next';

const Top21Section = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <section>
      <div className="willtake-article">
        <img
          src={top}
          alt="Artificial Intelligence"
          className="willtake-featured-image"
        />
        <div className="willtake-article-meta">
          <div className="meta-info">
            <Link className="meta-link">
              {t('blog-section.top21.linkText')}
            </Link>
          </div>
          <h2 className="willtake-article-title">
            {t('blog-section.top21.title')}
          </h2>
          <p className="willtake-article-excerpt">
            {t('blog-section.top21.excerpt')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Top21Section;
