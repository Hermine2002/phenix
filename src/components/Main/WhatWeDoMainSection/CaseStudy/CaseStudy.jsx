
import React from "react";
import "./CaseStudy.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import vcgkcq from "../../../../assets/imgs/vcGkcqqY8NPzikds0pVAEMVGbBIED3BZbSxywdvU.jpg"

const CaseStudy = () => {
  return (
    <div className="case-study">
      <div className="case-study-header">
        <div className="header-content">
          <h1>What we do</h1>
          <h2>Importance of storytelling and influencer marketing in social media marketing</h2>
        </div>
      </div>

      <div className="full-width-image-block">
        <img src={vcgkcq} alt="Case Study Full Width" />
      </div>

      <div className="case-study-section overview">
        <h3> Build Your IT Business With Us</h3>
        <p>
Phenix is a platform for innovators, aspiring entrepreneurs, and anyone who wants to transform their idea into a powerful digital business.
<br/>
We help create startups from scratch, develop professional websites, and provide the necessary technical and business support for a successful launch and growth.
<br/>
If you have an idea, we know how to make it a reality.</p>
        <div className="image-grid">
          <div className="grid-image instagram"></div>
          <div className="grid-image strategy"></div>
        </div>
      </div>

      <div className="case-study-section research">
        <h3>Case Study Research</h3>
        <div className="research-grid">
          <div className="research-item">
            <h4>Knowledge That Becomes Power
            </h4>
            <div className="circle-image strategy-image"></div>
            <p>At Phenix, education is not just a course — it's a launchpad for a sustainable future.
We teach programming, marketing, and business not only in theory, but with real hands-on experience.

 Our training model is designed so that even beginners can build a career or start their own IT business in just 6 months.

 We teach:
– Programming (Python, Web, App)
– Marketing and SMM
– Business management and startup creation

Transform your life with knowledge that works.
At Phenix, we foster forward-thinking minds.</p>
          </div>
          <div className="research-item">
            <h4> Marketing That Delivers Results</h4>
            <div className="circle-image branding-image"></div>
            <p>
At Phenix, marketing is not just advertising — it's a strategy that drives growth. We help businesses present themselves effectively, engage their target audience, and turn interest into real sales.

 We provide:
– Digital marketing (SMM, advertising campaigns, content)
– Comprehensive marketing strategy
– SEO and brand development
– Targeting, analysis, and result-driven management

If you want your business to speak to the right people, trust us.
At Phenix, we create marketing that works.

 Knowledge That Becomes Power
At Phenix, learning is not just a course — it’s a launchpad for a sustainable future. We teach programming, marketing, and business not just theoretically, but with real hands-on experience.

Our learning model is designed so that even beginners can build a career or start their own IT business in 6 months.

 We teach:
– Programming (Python, Web, App)
– Marketing and SMM
– Business management and startup building

Change your life with knowledge that works.
At Phenix, we nurture advanced thinking.

</p>
          </div>
        </div>
      </div>

      <div className="case-study-section results">
        <h3>Build Your Success with Phenix</h3>
        <p>
If you're looking for high-quality tech solutions and want to confidently build and grow your business, we are here to help. Phenix offers not only cutting-edge technology but also in-depth analysis and a support system at every step.

Our team ensures that your idea turns into results. We understand how important every decision is, which is why we provide reliable advice and guidance focused on achieving the best outcomes.

Join our partners who have already reached new heights with our support. Believe in your idea and let us take it to the next level.</p>
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
