import React from "react";
import "../FirstPartAboutSection/FirstPartAboutSection.css";
export default function FirstPartAboutSection() {
  return (
    <div className="about-section-container">
      <div className="about-section-text-box">
        <h1>About</h1>
        <div className="about-section-text-box-mini">
          {" "}
          <ol>
            <li>
              <a href="/" className="item-text">
                Home
              </a>
            </li>
            <li className="about-item">
              <a href="/about" className="item-text">
                About
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
