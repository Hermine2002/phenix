import React from 'react';
import walli from '../../../../assets/imgs/2ic9mJLofec7RwkvzwOs4RWqlKtw1iczrdCOlqqw.jpg';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgChevronDoubleRight } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import './WillTakeSection.css';
import CreativestudioSection from '../CreativestudioSection/CreativestudioSection';
import ARoadmapSection from '../ARoadmapSection/ARoadmapSection';
import ArtisticMindSection from '../ArtisticMindSection/ArtisticMindSection';
import Top21Section from '../Top21Section/Top21Section';
import { useTranslation } from 'react-i18next';

const WillTakeSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const categories = [
    { name: 'Company', path: '/' },
    { name: 'Corporate', path: '/' },
    { name: 'Creative Agency', path: '/' },
    { name: 'Painting Agency', path: '/' },
    { name: 'Creative', path: '/' },
  ];

  return (
    <section className="willtake-section">
      <div className="willtake-container">
        <div className="willtake-article">
          <img
            src={walli}
            alt="Artificial Intelligence"
            className="willtake-featured-image"
          />
          <div className="willtake-article-meta">
            <div className="meta-info">
              <Link className="meta-link">
                {t('blog-section.article.meta1')}
                <span className="meta-separator"> | </span>
              </Link>
              <Link className="meta-link">
                {t('blog-section.article.meta2')}
              </Link>
            </div>
            <h2 className="willtake-article-title">
              {t('blog-section.article.title')}
            </h2>
            <p className="willtake-article-excerpt">
              {t('blog-section.article.excerpt')}
            </p>
          </div>
          <CreativestudioSection />
          <ARoadmapSection />
          <ArtisticMindSection />
          <Top21Section />
        </div>

        <div className="willtake-sidebar">
          <div className="search-box">
            <h4 className="sidebar-title">{t('blog-section.search')}</h4>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <AiOutlineSearch className="search-icon" />
            </div>
          </div>

          <div className="categories-box">
            <h4 className="sidebar-title">{t('blog-section.categories')}</h4>
            <ul className="categories-list">
              {categories.map((category, index) => (
                <li key={index} className="category-item">
                  <CgChevronDoubleRight className="category-icon" />
                  <Link to={category.path} className="category-link">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="recentpost-box">
            <h4 className="recentpost-box-h4">
              {t('blog-section.recentPost')}
            </h4>
            <div className="recentpost-box-photobox">
              <div className="recentpost-box-photobox-photo"></div>
              <div className="recentpost-box-photobox-text">
                <h3 className="recentpost-box-photobox-text-h3">
                  {t('blog-section.Post1.title')}
                </h3>
                <p className="recentpost-box-photobox-text-p">
                  {t('blog-section.Post1.date')}
                </p>
              </div>
            </div>
            <div className="recentpost-box-photobox">
              <div className="recentpost-box-photobox-photo1"></div>
              <div className="recentpost-box-photobox-text">
                <h3 className="recentpost-box-photobox-text-h3">
                  {t('blog-section.Post2.title')}
                </h3>
                <p className="recentpost-box-photobox-text-p">
                  {t('blog-section.Post2.date')}
                </p>
              </div>
            </div>
            <div className="recentpost-box-photobox">
              <div className="recentpost-box-photobox-photo2"></div>
              <div className="recentpost-box-photobox-text">
                <h3 className="recentpost-box-photobox-text-h3">
                  {t('blog-section.Post3.title')}
                </h3>
                <p className="recentpost-box-photobox-text-p">
                  {t('blog-section.Post3.date')}
                </p>
              </div>
            </div>
            <div className="recentpost-box-photobox">
              <div className="recentpost-box-photobox-photo3"></div>
              <div className="recentpost-box-photobox-text">
                <h3 className="recentpost-box-photobox-text-h3">
                  {t('blog-section.Post4.title')}
                </h3>
                <p className="recentpost-box-photobox-text-p">
                  {t('blog-section.Post4.date')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WillTakeSection;
