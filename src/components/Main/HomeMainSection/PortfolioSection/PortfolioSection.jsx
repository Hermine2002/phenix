import './PortfolioSection.css';
import image1 from '../../../../assets/imgs/annie-spratt-QckxruozjRg-unsplash.jpeg';
import image2 from '../../../../assets/imgs/brooke-cagle-g1Kr4Ozfoac-unsplash.jpeg';
import image3 from '../../../../assets/imgs/upscalemedia-transformed.jpeg';
import image4 from '../../../../assets/imgs/adeolu-eletu-E7RLgUjjazc-unsplash.jpeg';

import { useTranslation } from 'react-i18next';

import React, { useState, useRef } from 'react';

const images = [image1, image2, image3, image4];

const PortfolioSection = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="portfolio-section">
      <h3 className="portfolioh3">
        {t('home-section.portfolio.headingSmall')}
      </h3>
      <h2 className="portfolioh2">
        {t('home-section.portfolio.headingLarge')}
      </h2>
      <div className="carousel">
        <button className="prev-portfolio" onClick={prevSlide}>
          {t('home-section.portfolio.prev')}
        </button>
        <div className="carousel-inner" ref={carouselRef}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={index === currentIndex ? 'active' : 'hidden'}
            />
          ))}
        </div>
        <button className="next-portfolio" onClick={nextSlide}>
          {t('home-section.portfolio.next')}
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;
