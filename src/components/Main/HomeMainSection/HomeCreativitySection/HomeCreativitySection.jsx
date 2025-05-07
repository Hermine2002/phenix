import React, { useEffect, useState } from "react";
import { LuMoveRight } from "react-icons/lu";

import "./HomeCreativitySection.css";
import axios from "axios";

const HomeCreativitySection = () => {
  const [headerText, setHeaderText] = useState("Loading...");

  useEffect(() => {
    const fetchHeaderText = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/home");
        //setHeaderText(response.data.title);
        setHeaderText("Phenix");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching header text:", error);
        setHeaderText("Phenix");
      }
    };

    fetchHeaderText();
  }, []);
  return (
    <div className="hero-content">
      <h1 className="hero-content-h1">{headerText}</h1>
      <div className="hero-content-box">

        <p className="hero-content-p">
        Phenix is more than a company. It's the power behind successful IT projects.
         We don’t look for clients — we build partners who change the rules of the game.
          If you're ready to lead, welcome to the place where leaders are made.
        </p>
        <a href="/" className="cta">
          Get a Quote <LuMoveRight className="icoon" />
        </a>
      </div>
    </div>
  );
};

export default HomeCreativitySection;
