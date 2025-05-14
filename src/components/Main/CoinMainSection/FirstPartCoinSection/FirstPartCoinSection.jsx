import React from 'react'
import "../FirstPartCoinSection/FirstPartCoinSection.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function FirstPartCoinSection() {
    const { t, i18n } = useTranslation()
  return (
    
    <div className="fone-coin">     
    <h2 className="main_text2">
{t('coin-section.firstPartCoin.title')}
      <br />
      <Link className="home2" to="/">{t('coin-section.firstPartCoin.home')} </Link>
      <span className="ss2"> | </span>
      <Link className="pers2" to="/coin"> {t('coin-section.firstPartCoin.coin')}</Link>
    </h2>
    <div className="fakeShadow"></div>
    </div>

  )
}
