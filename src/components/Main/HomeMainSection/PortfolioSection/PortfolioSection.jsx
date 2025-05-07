import "./PortfolioSection.css";
import image1 from "../../../../assets/imgs/annie-spratt-QckxruozjRg-unsplash.jpeg";
import image2 from "../../../../assets/imgs/brooke-cagle-g1Kr4Ozfoac-unsplash.jpeg";
import image3 from "../../../../assets/imgs/upscalemedia-transformed.jpeg";
import image4 from "../../../../assets/imgs/adeolu-eletu-E7RLgUjjazc-unsplash.jpeg";

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
      <h3 className="portfolioh3"> to see the uniqueness</h3>
      <h2 className="portfolioh2">our uniqueness</h2>
      <div className="carousel">
        <button className="prev-portfolio" onClick={prevSlide}>
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
        <button className="next-portfolio" onClick={nextSlide}>
          ›
        </button>
      </div>
    </div>
  );
};

export default PortfolioSection;
