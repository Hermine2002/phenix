import React from "react";
import { Link } from "react-router-dom";
import "../FirstPartAboutSection/FirstPartAboutSection.css";
import { useTranslation } from "react-i18next";

export default function FirstPartAboutSection() {
     const { t, i18n } = useTranslation()
  return (
    <section className="ourpers">
    <div className="fone-about">     
    <h2 className="main_text">
   {t('about.firstPartAbout.title')}
   
      <br />
      <Link className="home" to="/">  {t('about.firstPartAbout.home')} </Link>
      <span className="ss"> | </span>
      <Link className="pers" to="/about">    {t('about.firstPartAbout.about')}</Link>
    </h2>
    <div className="fakeShadow"></div>
    </div>
  </section>
  );
}
