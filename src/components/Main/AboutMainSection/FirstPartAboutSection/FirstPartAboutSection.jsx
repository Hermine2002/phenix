import React from "react";
import { Link } from "react-router-dom";
import "../FirstPartAboutSection/FirstPartAboutSection.css";
export default function FirstPartAboutSection() {
  return (
    <section className="ourpers">
    <div className="fone-about">     
    <h2 className="main_text">
     About
      <br />
      <Link className="home" to="/">HOME </Link>
      <span className="ss"> | </span>
      <Link className="pers" to="/about"> OUR About</Link>
    </h2>
    <div className="fakeShadow"></div>
    </div>
  </section>
  );
}
