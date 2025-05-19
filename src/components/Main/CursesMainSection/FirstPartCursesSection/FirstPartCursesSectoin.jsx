import React from "react";
import { Link } from "react-router-dom";
import "../FirstPartCursesSection/FirstPartCursesSection.css";
import { useTranslation } from "react-i18next";
export default function FirstPartCursesSectoin() {
      const { t, i18n } = useTranslation()
  return <div className="first-section-cures">
         <div className="first-section-cures-child">
          <h2 className="first-section-cures-title">{t('courses-section.firstPartCourses.title')}</h2>
          <div className="first-section-cures-link">
          <Link className="cures-link" to="/">{t('courses-section.firstPartCourses.home')}</Link>
      <span className="cures-link2"> | </span>
      <Link className="cures-link3" to="/coin"> {t('courses-section.firstPartCourses.cursers')}</Link>
          </div>
         </div>
  </div>;
}
