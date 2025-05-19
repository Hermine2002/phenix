import { FaArrowRightLong } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

import './DisscuseMakeSection.css'

const DisscuseMakeSection = () => {
   const { t, i18n } = useTranslation();
  return (
    <div className='disscusemake-section'>
        <div className="banner">
            <div className="fonne1">
                <h2 className='fonneh2'> 
               {t('about.disscuseMake.title')}
                </h2>
                <p className="buuton">{t('about.disscuseMake.button')}<FaArrowRightLong className="icooon11"/>
                </p>
            </div>
        </div>
    </div>
  )
}

export default DisscuseMakeSection