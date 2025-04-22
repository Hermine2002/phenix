
import React from "react";
import "./CaseStudy.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const CaseStudy = () => {
  return (
    <div className="case-study">
      <div className="case-study-header">
        <div className="header-content">
          <h1>Uber food app case study</h1>
          <h2>Importance of storytelling and influencer marketing in social media marketing</h2>
        </div>
      </div>

      <div className="full-width-image-block">
        <img src="/src/assets/imgs/blog_hero_bg.jpeg" alt="Case Study Full Width" />
      </div>

      <div className="case-study-section overview">
        <h3>Case Study Overview</h3>
        <p>The social media marketing landscape has evolved significantly over the years, and influencer marketing has become a cornerstone of successful digital marketing strategies. This case study explores how storytelling and influencer partnerships can drive engagement and brand awareness.</p>
        <div className="image-grid">
          <div className="grid-image instagram"></div>
          <div className="grid-image strategy"></div>
        </div>
      </div>

      <div className="case-study-section research">
        <h3>Case Study Research</h3>
        <div className="research-grid">
          <div className="research-item">
            <h4>Marketing strategy</h4>
            <div className="circle-image strategy-image"></div>
            <p>Our comprehensive marketing strategy focused on authentic storytelling and strategic influencer partnerships to maximize reach and engagement across social media platforms.</p>
          </div>
          <div className="research-item">
            <h4>Branding guidelines</h4>
            <div className="circle-image branding-image"></div>
            <p>We developed clear branding guidelines to ensure consistency across all marketing channels while allowing influencers to maintain their authentic voice.</p>
          </div>
        </div>
      </div>

      <div className="case-study-section results">
        <h3>Result of The Case Study</h3>
        <p>The implementation of our storytelling and influencer marketing strategy resulted in significant improvements in brand awareness, engagement rates, and conversion metrics. The authentic approach resonated with the target audience and created lasting impact.</p>
      </div>

      <div className="discuss-section">
        <div className="discuss-content">
          <h3>Let's discuss and make something cool together</h3>
          <Link to="/contact" className="apply-button">
            Apply for Meeting <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
