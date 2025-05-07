import React from "react";
import { Link } from "react-router-dom";
import "../FirstPartCursesSection/FirstPartCursesSection.css";
export default function FirstPartCursesSectoin() {
  return <div className="first-section-cures">
         <div className="first-section-cures-child">
          <h2 className="first-section-cures-title">Courses</h2>
          <div className="first-section-cures-link">
          <Link className="cures-link" to="/">HOME </Link>
      <span className="cures-link2"> | </span>
      <Link className="cures-link3" to="/coin"> OUR Coin</Link>
          </div>
         </div>
  </div>;
}
