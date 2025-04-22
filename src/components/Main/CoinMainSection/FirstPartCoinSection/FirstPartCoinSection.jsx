import React from 'react'
import "../FirstPartCoinSection/FirstPartCoinSection.css";
import { Link } from "react-router-dom";
export default function FirstPartCoinSection() {
  return (
    
    <div className="fone-coin">     
    <h2 className="main_text2">
   Coin
      <br />
      <Link className="home2" to="/">HOME </Link>
      <span className="ss2"> | </span>
      <Link className="pers2" to="/coin"> OUR Coin</Link>
    </h2>
    <div className="fakeShadow"></div>
    </div>

  )
}
