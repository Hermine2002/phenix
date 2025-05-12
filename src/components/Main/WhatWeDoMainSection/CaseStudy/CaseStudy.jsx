
import React from "react";
import "./CaseStudy.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import vcgkcq from "../../../../assets/imgs/vcGkcqqY8NPzikds0pVAEMVGbBIED3BZbSxywdvU.jpg"
import { useTranslation } from "react-i18next";

const CaseStudy = () => {
   const { t, i18n } = useTranslation()
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }
  return (
    <div className="case-study">
      <div className="case-study-header">
        <div className="header-content">
          <h1>{t('WhatWeDoSection.header.title')}</h1>
          <h2>{t('WhatWeDoSection.header.subtitle')}</h2>
        </div>
      </div>

      <div className="full-width-image-block">
        <img src={vcgkcq} alt="Case Study Full Width" />
      </div>

      <div className="case-study-section overview">
        <h3>{t('WhatWeDoSection.overview.title')}</h3>
        <p>
               {t('WhatWeDoSection.overview.text')}</p>
        <div className="image-grid">
          <div className="grid-image instagram"></div>
          <div className="grid-image strategy"></div>
        </div>
      </div>

      <div className="case-study-section research">
        <h3>{t('WhatWeDoSection.research.title')}</h3>
        <div className="research-grid">
          <div className="research-item">
            <h4>{t('WhatWeDoSection.research.items.0.title')}
            </h4>
            <div className="circle-image strategy-image"></div>
            <p>{t('WhatWeDoSection.research.items.0.text')}</p>
          </div>
          <div className="research-item">
            <h4> {t('WhatWeDoSection.research.items.1.title')}</h4>
            <div className="circle-image branding-image"></div>
            <p>
            {t('WhatWeDoSection.research.items.1.text')}

</p>
          </div>
        </div>
      </div>

      <div className="case-study-section results">
        <h3>{t('WhatWeDoSection.results.title')}</h3>
        <p>{t('WhatWeDoSection.results.text')}</p>
      </div>

      <div className="discuss-section">
        <div className="discuss-content">
          <h3>{t('WhatWeDoSection.discuss.title')}</h3>
          <Link to="/contact" className="apply-button">
          {t('WhatWeDoSection.discuss.button')} <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
