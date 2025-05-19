import React from "react";
import "../SecondPartCursesSection/SecondPartCursesSection.css";
import { FaArrowRight } from "react-icons/fa6";
import { FiArrowRightCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";
export default function SecondPartCursesSection() {

  const { t, i18n } = useTranslation()
  return <div className="second-section-curses">
    <div className="second-section-curses-child">
 <div className='price-container'>
            <h2 className='price-container-title'>{t('courses-section.choosePath')}</h2>
             <div className='price-container-child'>
              <span className='price-container-child-amd'> {t('courses-section.starterPack.price')}</span>
              <span className='price-container-child-text'> {t('courses-section.starterPack.only')}</span>
              <p className='price-container-child-per'>{t('courses-section.starterPack.title')}</p>
             </div>
                <ul className='price-container-lists'>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.starterPack.features.0')}</li>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.starterPack.features.1')}</li>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/> {t('courses-section.starterPack.features.2')}</li>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.starterPack.features.3')}</li>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>  {t('courses-section.starterPack.features.4')}</li>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/> {t('courses-section.starterPack.features.5')}</li>
                </ul>
            <br />
                <a href="/" className='price-container-link'> {t('courses-section.purchaseNow')}<FaArrowRight /> </a>
            </div>
             <div className='price-container'>
                        <h2 className='price-container-title'>{t('courses-section.proPack.title')}</h2>
                         <div className='price-container-child'>
                          <span className='price-container-child-amd'> {t('courses-section.proPack.price')}</span>
                          <span className='price-container-child-text'> {t('courses-section.proPack.only')}</span>
                          <p className='price-container-child-per'>{t('courses-section.proPack.description')}</p>
                         </div>
                            <ul className='price-container-lists'>
                              <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.proPack.features.0')}</li>
                              <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.proPack.features.1')}</li>
                              <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/> {t('courses-section.proPack.features.2')}</li>
                              <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/> {t('courses-section.proPack.features.3')}</li>
                              <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/> {t('courses-section.proPack.features.4')}</li>
                              <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/> {t('courses-section.proPack.features.5')}</li>
                            </ul>
                        <br />
                            <a href="/" className='price-container-link'>{t('courses-section.purchaseNow')}<FaArrowRight /> </a>
                        </div>
                         <div className='price-container'>
                                    <h2 className='price-container-title'> {t('courses-section.fullStackPack.title')}</h2>
                                     <div className='price-container-child'>
                                      <span className='price-container-child-amd'> {t('courses-section.fullStackPack.price')}</span>
                                      <span className='price-container-child-text'>{t('courses-section.fullStackPack.only')}</span>
                                      <p className='price-container-child-per'>{t('courses-section.fullStackPack.description')}</p>
                                     </div>
                                        <ul className='price-container-lists'>
                                          <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.fullStackPack.features.0')}</li>
                                          <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.fullStackPack.features.1')}</li>
                                          <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/> {t('courses-section.fullStackPack.features.2')}</li>
                                          <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.fullStackPack.features.3')}</li>
                                          <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.fullStackPack.features.4')}</li>
                                          <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.fullStackPack.features.5')}</li>
                                        </ul>
                                    <br />
                                        <a href="/" className='price-container-link'>{t('courses-section.purchaseNow')} <FaArrowRight /> </a>
                                    </div>
                                        
         
            <div className='price-container'>
            <h2 className='price-container-title'> {t('courses-section.mentorPack.title')}</h2>
             <div className='price-container-child'>
              <span className='price-container-child-amd'>{t('courses-section.mentorPack.price')}</span>
              <span className='price-container-child-text'>{t('courses-section.mentorPack.only')} </span>
              <p className='price-container-child-per'>{t('courses-section.mentorPack.description')}</p>
             </div>
                <ul className='price-container-lists'>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.mentorPack.features.0')}</li>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/> {t('courses-section.mentorPack.features.1')}</li>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.mentorPack.features.2')}</li>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/> {t('courses-section.mentorPack.features.3')}</li>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.mentorPack.features.4')}</li>
                  <li className='price-container-lists-child'> <FiArrowRightCircle className='price-container-lists-child2'/>{t('courses-section.mentorPack.features.5')}</li>
                </ul>
            <br />
                <a href="/" className='price-container-link'>{t('courses-section.purchaseNow')} <FaArrowRight /> </a>
            </div>
            
    </div>
  </div>
      
}
