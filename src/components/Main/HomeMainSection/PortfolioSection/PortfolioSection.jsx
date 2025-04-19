import "./PortfolioSection.css";
import image1 from "../../../../assets/imgs/image1.png";
import image2 from "../../../../assets/imgs/imag2.png";
import image3 from "../../../../assets/imgs/image3.png";
import image4 from "../../../../assets/imgs/image4.png";

import React, { useState, useRef } from "react";

const images = [image1, image2, image3, image4];

const PortfolioSection = () => {
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
      <h3 className="portfolioh3">Latest Projects</h3>
      <h2 className="portfolioh2">Portfolio to explore</h2>
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>
          ‹
        </button>
        <div className="carousel-inner" ref={carouselRef}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={index === currentIndex ? "active" : "hidden"}
            />
          ))}
        </div>
        <button className="next" onClick={nextSlide}>
          ›
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;
