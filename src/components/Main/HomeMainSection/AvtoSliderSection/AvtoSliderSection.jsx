import React, { useState, useEffect } from "react";
import "./AvtoSliderSection.css";

import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Arino is the leading source of news for marketing",
    date: "Oct 28, 2023",
    image:
      "https://arino-laravel.laralink.com/storage/posts/2ic9mJLofec7RwkvzwOs4RWqlKtw1iczrdCOlqqw.jpg",
  },
  {
    id: 2,
    title: "Top 21 Must-Read Blogs For Agencies",
    date: "Oct 28, 2023",
    image:
      "https://arino-laravel.laralink.com/storage/posts/k2Yim1TbjjsMynpORml0IiI4jWL65XgfdIVBPvrs.jpg",
  },
  {
    id: 3,
    title: "Artistic mind for creation",
    date: "Oct 11, 2023",
    image:
      "https://arino-laravel.laralink.com/storage/posts/hd9yDqDAPfPnFGYZ0yQ2TPICV7C5yMNhaxW5471P.jpg",
  },
  {
    id: 4,
    title: "Artistic mind for creation",
    date: "Oct 11, 2023",
    image:
      "https://arino-laravel.laralink.com/storage/posts/sMWvOu2WgWwNbYx7SqSCiPACVUqlXe7gAgUsFol1.jpg",
  },
  {
    id: 5,
    title: "Artistic mind for creation",
    date: "Oct 11, 2023",
    image:
      "https://arino-laravel.laralink.com/storage/posts/RCmGn9RlTaxWd058D4K3ofiL7gak41iPOfv1eUl0.jpg",
  },
  {
    id: 6,
    title: "Artistic mind for creation",
    date: "Oct 11, 2023",
    image:
      "https://arino-laravel.laralink.com/storage/posts/trD4bRBqZ4svWTT4VCJ17p5KgRaCivqW0ASqmSfw.jpg",
  },
  {
    id: 7,
    title: "Artistic mind for creation",
    date: "Oct 11, 2023",
    image:
      "https://arino-laravel.laralink.com/storage/posts/1Cp058NOyBsQHLoGMXzwujKAav1FRUAZk4rwBdOr.jpg",
  },
];

const AvtoSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleCards = 3; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev < blogPosts.length - visibleCards) {
          return prev + 1;
        }
        return 0;
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="avtoslider-section">
    
      <div className="blog-header">
        <h3>Our Blog</h3>
        <h2>Explore recent publication</h2>
        <Link href="/" className="blog-link">
          View More Blog <FaArrowRightLong className="rightvieww"/>
        </Link>
        <div className="circle1"></div>
        <div className="circle"></div>
      </div>
      <div className="blog-slider">
        <div
          className="slider-inner"
          style={{ transform: `translateX(-${currentSlide * 320}px)` }}
        >
          {blogPosts.map((post) => (
            <div className="card" key={post.id}>
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
