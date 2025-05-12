import { Link } from 'react-router-dom';
import './FirstPartPerspectiveSection.css';
import { useTranslation } from 'react-i18next';

const FirstPartPerspectiveSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <section className="ourpers">
      <div className="fone-perspective">
        <h2 className="main_text">
          {t('blog-section.FirstPartPerspectiveSection.ourBlog')}
          <br />
          <Link className="home" to="/">
            {t('blog-section.FirstPartPerspectiveSection.home')}
          </Link>
          <span className="ss">
            {t('blog-section.FirstPartPerspectiveSection.separator')}
          </span>
          <Link className="pers" to="/perspective">
            {' '}
            {t('blog-section.FirstPartPerspectiveSection.ourBlogLink')}
          </Link>
        </h2>
        <div className="fakeShadow"></div>
      </div>
    </section>
  );
};

export default FirstPartPerspectiveSection;
