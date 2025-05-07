import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./SecondPartCoinSection.css";
import img1 from "../../assets/imgs/card1.png";
import img2 from "../../assets/imgs/card2.png";
import img3 from "../../assets/imgs/card3..png";
import img4 from "../../assets/imgs/card4.png";
import { Link } from "react-router-dom";

export default function SecondPartCoinSection({ direction = "bottom-to-top" }) {
  const validDirections = ["bottom-to-top", "top-to-bottom"];
  const animationDirection = validDirections.includes(direction) ? direction : "bottom-to-top";

  const images = [
    {
      img: img1,
      url: "/digital",
      text: "Digital",
      text2:"Marketing"
    },
    {
      img: img2,
      url: "/digital1",
      text: "UI/UX",
      text2:"design"
    },
    {
      img: img3,
      url: "/digital2",
      text: "Technology"
    },
    {
      img: img4,
      url: "/digital3",
      text: "React Js",
      text2:"Development"
    }
  ];
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3 // Trigger when 30% of the container is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="second-section-coin-container">
      <div className="content-container">
        <h3 className="contenth3">What Can We Do</h3>
        <h2 className="contenth2">
        What can we offer you? <br />
        Opportunities for success and growth. 
         
        </h2>
      </div>

      <div
        className={`slide-container ${isVisible ? "active" : ""} direction-${animationDirection}`}
        ref={containerRef}
      >
        {images.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className="slide-link"
          >
            <div
              className={`slide-image slide-image-${index}`}
              style={{ backgroundImage: `url(${item.img})`, zIndex: images.length - index }}
            >
              <div className="ket"></div>
              <h3 className="helph3">{item.text}</h3>
              <h3 className="helph3">{item.text2}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

SecondPartCoinSection.propTypes = {
  direction: PropTypes.oneOf(["bottom-to-top", "top-to-bottom"])
};