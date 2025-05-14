import React, { useState, useEffect } from 'react';

import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

import './TeamSliderSection.css';
import image1 from "../../../../assets/imgs/IMG_1225.jpg"
import image2 from "../../../../assets/imgs/IMG_7574.JPG"
import image3 from "../../../../assets/imgs/IMG_4107.jpg"

const TeamSliderSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: t('home-section.testimonials.0.text'),
      author: t('home-section.testimonials.0.author'),
      position: t('home-section.testimonials.0.position'),
      rating: 4,
      image: image1
    },
    {
      text: t('home-section.testimonials.1.text'),
      author: t('home-section.testimonials.1.author'),
      position: t('home-section.testimonials.1.position'),
      rating: 5,
      image: image2
        
    },
    {
      text: t('home-section.testimonials.2.text'),
      author: t('home-section.testimonials.2.author'),
      position: t('home-section.testimonials.2.position'),
      rating: 3,
      image: image3
       
    },
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="teamslider-section">
      <div className="dual-slider-container">
        <div className="photo-slider">
          <div className="photo-wrapper">
            <img src={testimonials[currentIndex].image} alt="User" />
          </div>
        </div>

        <div className="text-slider">
          <div className="text-wrapper">
            <p>{testimonials[currentIndex].text}</p>
            <div className="stars">
              {'★'.repeat(testimonials[currentIndex].rating)}
              {'☆'.repeat(5 - testimonials[currentIndex].rating)}
            </div>
            <h4>{testimonials[currentIndex].author}</h4>
            <span>{testimonials[currentIndex].position}</span>
          </div>
        </div>

        <div className="navigation">
          <button className="next" onClick={nextSlide}>
            <FaArrowLeftLong className="lefttt" />
          </button>
          <button className="prev" onClick={prevSlide}>
            <FaArrowRightLong className="righttt" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSliderSection;
