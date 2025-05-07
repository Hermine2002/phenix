import React from "react";
import "../SecondPartAboutSection/SecondPartAboutSection.css";
import about  from "../../../../assets/imgs/about.png"
import about1 from "../../../../assets/imgs/about1.jpg"
import about3 from "../../../../assets/imgs/about3.jpg"
export default function SecondPartAboutSection() {
  return (
    <section className="perspective_section">
    <div className="kanteiner-perpective">
      <div className="text-photo">
        <div className="kanteiner-textboxx">
          <h3 className="kanteiner-textboxx-h3">Phenix — Creating Solutions That Drive Growth</h3>
          <h2 className="kanteiner-textboxx-h2">
Phenix turns your ideas into success.
         </h2>
          <p className="kanteiner-textboxx-p">
          Phenix combines innovative thinking, deep marketing expertise, and technical capability to build modern and effective projects.
We specialize in brand and web project creation, digital marketing, and software development — delivering real results, not just promises.

Our team works in alignment with your business goals, providing solutions that not only stand out but truly make an impact. We focus on quality, creativity, and fast results.
If you're looking for a partner who can turn ideas into real success — Phenix is the place to start.
        </p>
        </div>
        <div className="kanteiner-textbox">
          <img src={about} alt="perspectivephoto1" className="perspectivephoto1"/>
        </div>

      </div>
<div className="photo-photo">
  <div className="kanteiner-photobox">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={about3} alt="perspectivephoto2" className="perspectivephoto2" />
        </div>
        <div className="flip-card-back">
          
          <p>Phenix is a company where technology merges with business thinking.
We develop software projects for small businesses, early-stage startups, and established enterprises.
What makes us unique is that we don’t just create business solutions — we also teach how to build your own IT business from scratch.
<br/>
Phenix is a platform where ideas become reality.
We bring together creators, entrepreneurs, and beginners by providing knowledge, tools, and support to help them start and grow with confidence.
<br/>
We stand out because we go beyond services — we build a community where people grow together.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="kanteiner-photobox">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={about1} alt="perspectivephoto3" className="perspectivephoto2" />
        </div>
        <div className="flip-card-back">
         
          <p>By collaborating with Phenix, you gain more than just a service.

Personalized approach — We thoroughly analyze your needs and offer solutions tailored to your business.
Knowledge and tools — We teach you not only how to use technology but also how to manage and grow your own projects.
A platform for growth — You become part of a community where ideas and people grow together.
Market visibility — Our marketing expertise helps your project reach its audience.
Fast and high-quality execution — We value your time and deliver fast yet thoughtful results.

Phenix is more than just an agency. It’s a space where business, technology, and human potential come together to achieve success.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  </section>
  );
}
