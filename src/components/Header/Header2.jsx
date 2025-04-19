import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header2.css";
import HeaderAside from "./HeaderAside/HeaderAside";

export default function Header2() {
  const [clicked, isClicked] = useState(false);
  const handlerClick = () => {
    isClicked(true);
  };

  return (
    <header>
      <div className="inner">
        <div className="logo-1">
          <span className="firstPart">P</span>
          <span className="secondPart">henix</span>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">HOME</Link>
              <div className="forDeck"></div>
            </li>
            <li>
              <Link>ABOUT</Link>
              <div className="forDeck"></div>
            </li>
            <li>
              <Link>COURSES</Link>
              <div className="forDeck"></div>
            </li>
            <li>
              <Link>MARKETING</Link>
              <div className="forDeck"></div>
            </li>
            <li>
              <Link>PERSPECTIVE</Link>
              <div className="forDeck"></div>
            </li>

            <li>
              <Link>COIN</Link>
              <div className="forDecking"></div>
            </li>
          </ul>
        </nav>
        <div className="header-circle-div" onClick={handlerClick}>
          {clicked ? <HeaderAside /> : ""}

          <div className="short"></div>
          <div className="long"></div>
        </div>
      </div>
    </header>
  );
}