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
import { useGetCategoriesQuery, useGetRecentPostsQuery } from '../../../../features/api/apiSlice';

const WillTakeSection = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  // Fetch categories
  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useGetCategoriesQuery(currentLocale);

  // Fetch recent posts
  const {
    data: recentPosts = [],
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useGetRecentPostsQuery(currentLocale);

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
              {isCategoriesLoading ? (
                  <p>Loading categories...</p>
              ) : isCategoriesError ? (
                  <p>Error loading categories</p>
              ) : (
                  <ul className="categories-list">
                    {categories.map((category) => (
                        <li key={category.id} className="category-item">
                          <CgChevronDoubleRight className="category-icon" />
                          <Link to={`/category/${category.slug}`} className="category-link">
                            {category.name}
                          </Link>
                        </li>
                    ))}
                  </ul>
              )}
            </div>

            <div className="recentpost-box">
              <h4 className="recentpost-box-h4">{t('blog-section.recentPost')}</h4>
              {isPostsLoading ? (
                  <p>Loading posts...</p>
              ) : isPostsError ? (
                  <p>Error loading posts</p>
              ) : (
                  recentPosts.map((post, index) => (
                      <div key={post.id} className="recentpost-box-photobox">
                        <div
                            className={`recentpost-box-photobox-photo${index}`}
                            style={{
                              backgroundImage: post.thumbnail
                                  ? `url(${post.thumbnail})`
                                  : 'none',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                        ></div>
                        <div className="recentpost-box-photobox-text">
                          <h3 className="recentpost-box-photobox-text-h3">
                            <Link to={`/post/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="recentpost-box-photobox-text-p">
                            {new Date(post.created_at).toLocaleDateString(currentLocale)}
                          </p>
                        </div>
                      </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </section>
  );
};

export default WillTakeSection;