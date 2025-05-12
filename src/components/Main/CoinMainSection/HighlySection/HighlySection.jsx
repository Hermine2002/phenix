import higlyphoto from '../../../../assets/imgs/IMG_2425.JPG'
import { useTranslation } from "react-i18next";
import './HighlySection.css'

const HighlySection = () => {
  const { t, i18n } = useTranslation()
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
    }
  return (
    <section className='highly-section-coin'>
            <div className="higly-kanteiner-coin">
                <div className="higly-photobox-coin">
                    <img src={higlyphoto} alt="higlyphoto" className='higlyphoto-coin'/>
                </div>
                <div className="higly-textbox-coin">
                    <h3 className='higly-h3-coin'>{t('coin-section.title')}</h3>
                    <p className='higly-h2-coin'> {t('coin-section.subtitle')}</p>
                    <p className='higly-p-coin'>{t('coin-section.paragraph')}</p>
                </div>
            </div>
    </section>
  )
}

export default HighlySection