import React, { useState, useEffect } from 'react';
import './AvtoSliderSection.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AvtoSliderSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0); // Start at the first real slide
  const visibleCards = 3;
  const blogPosts = [
    {
      id: 1,
      title: t('home-section.blog.posts.1'),
      date: 'Oct 28, 2023',
      image:
        'https://arino-laravel.laralink.com/storage/posts/2ic9mJLofec7RwkvzwOs4RWqlKtw1iczrdCOlqqw.jpg',
    },
    {
      id: 2,
      title: t('home-section.blog.posts.2'),
      date: 'Oct 28, 2023',
      image:
        'https://arino-laravel.laralink.com/storage/posts/k2Yim1TbjjsMynpORml0IiI4jWL65XgfdIVBPvrs.jpg',
    },
    {
      id: 3,
      title: t('home-section.blog.posts.3'),
      date: 'Oct 11, 2023',
      image:
        'https://arino-laravel.laralink.com/storage/posts/hd9yDqDAPfPnFGYZ0yQ2TPICV7C5yMNhaxW5471P.jpg',
    },
    {
      id: 4,
      title: t('home-section.blog.posts.4'),
      date: 'Oct 11, 2023',
      image:
        'https://arino-laravel.laralink.com/storage/posts/sMWvOu2WgWwNbYx7SqSCiPACVUqlXe7gAgUsFol1.jpg',
    },
    {
      id: 5,
      title: t('home-section.blog.posts.5'),
      date: 'Oct 11, 2023',
      image:
        'https://arino-laravel.laralink.com/storage/posts/RCmGn9RlTaxWd058D4K3ofiL7gak41iPOfv1eUl0.jpg',
    },
    {
      id: 6,
      title: t('home-section.blog.posts.6'),
      date: 'Oct 11, 2023',
      image:
        'https://arino-laravel.laralink.com/storage/posts/trD4bRBqZ4svWTT4VCJ17p5KgRaCivqW0ASqmSfw.jpg',
    },
    {
      id: 7,
      title: t('home-section.blog.posts.7'),
      date: 'Oct 11, 2023',
      image:
        'https://arino-laravel.laralink.com/storage/posts/1Cp058NOyBsQHLoGMXzwujKAav1FRUAZk4rwBdOr.jpg',
    },
  ];
  const totalSlides = blogPosts.length;
  const extendedPosts = [
    ...blogPosts.slice(-visibleCards), // Clone last slides for start
    ...blogPosts, // Original slides
    ...blogPosts.slice(0, visibleCards), // Clone first slides for end
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle transition end to reset the slide position without animation
  const handleTransitionEnd = () => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0); // Reset to the first real slide
    }
  };

  return (
    <div className="avtoslider-section">
      <div className="blog-header">
        <h3>{t('home-section.blog.header')}</h3>
        <h2>{t('home-section.blog.subheader')}</h2>
        <Link to="/" className="blog-link">
          {t('home-section.blog.viewMore')}
          <FaArrowRightLong className="rightvieww" />
        </Link>
        <div className="circle1"></div>
        <div className="circle"></div>
      </div>
      <div className="blog-slider">
        <div
          className="slider-inner"
          style={{
            transform: `translateX(-${currentSlide * 320}px)`,
            transition: currentSlide === 0 ? 'none' : 'transform 0.5s ease',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedPosts.map((post, index) => (
            <div
              className={`card ${
                index < visibleCards || index >= totalSlides + visibleCards
                  ? 'cloned'
                  : ''
              }`}
              key={`${post.id}-${index}`}
            >
              <img src={post.image} alt={post.title} />
              <div className="card-info">
                <span className="card-date">{post.date}</span>
                <h4 className="card-title">{post.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvtoSliderSection;
