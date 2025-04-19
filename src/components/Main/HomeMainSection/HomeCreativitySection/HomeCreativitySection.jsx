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
        setHeaderText(response.data.title);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching header text:", error);
        setHeaderText("Default Header");
      }
    };

    fetchHeaderText();
  }, []);
  return (
    <div className="hero-content">
      <h1 className="hero-content-h1">{headerText}</h1>
      <div className="hero-content-box">
        <a href="/" className="cta">
          Get a Quote <LuMoveRight className="icoon" />
        </a>

        <p className="hero-content-p">
          We deliver best problem solving solution for our client and provide
          finest <br />
          finishing product in present and upcoming future.
        </p>
      </div>
    </div>
  );
};

export default HomeCreativitySection;
