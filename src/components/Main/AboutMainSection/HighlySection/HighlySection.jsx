import higlyphoto from '../../../../assets/imgs/IMG_2425.JPG'

import './HighlySection.css'

const HighlySection = () => {
  return (
    <section className='highly-section'>
            <div className="higly-kanteiner">
                <div className="higly-photobox">
                    <img src={higlyphoto} alt="higlyphoto" className='higlyphoto'/>
                </div>
                <div className="higly-textbox">
                    <h3 className='higly-h3'></h3>
                    <h2 className='higly-h2'></h2>
                    <p className='higly-p'></p>
                </div>
            </div>
    </section>
  )
}

export default HighlySection