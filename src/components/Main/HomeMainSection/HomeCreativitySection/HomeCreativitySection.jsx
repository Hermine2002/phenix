import React, { useEffect, useState } from "react";
import { LuMoveRight } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import "./HomeCreativitySection.css";
import axios from "axios";

const HomeCreativitySection = () => {
  const [headerText, setHeaderText] = useState("Loading...");
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

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
    <div className="bg-blue-500 p-4 hero-content">
      <h1 className="hero-content-h1">{headerText}</h1>
      <div className="hero-content-box">

        <p className="hero-content-p">
       {t('home-section.paragraph')}
        </p>
        <a href="/" className="cta">
          {t('home-section.cta')} <LuMoveRight className="icoon" />
        </a>
      </div>
    </div>
  );
};

export default HomeCreativitySection;
