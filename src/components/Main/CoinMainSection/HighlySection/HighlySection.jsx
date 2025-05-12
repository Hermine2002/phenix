import higlyphoto from '../../../../assets/imgs/IMG_2425.JPG'

import './HighlySection.css'

const HighlySection = () => {
  return (
    <section className='highly-section-coin'>
            <div className="higly-kanteiner-coin">
                <div className="higly-photobox-coin">
                    <img src={higlyphoto} alt="higlyphoto" className='higlyphoto-coin'/>
                </div>
                <div className="higly-textbox-coin">
                    <h3 className='higly-h3-coin'>Phenix Coin is a flexible and secure cryptocurrency based on
                       Ethereum technology, combining the power of modern digital finance with years of Phenix’s 
                       experience in IT and marketing.</h3>
                    <p className='higly-h2-coin'> Phenix Coin — Building a Trusted Future for Digital Business</p>
                    <p className='higly-p-coin'>Phenix is more than just a coin:
                    It is an ecosystem where digital currency serves as a tool for technological 
                    advancement, educational development, and innovative business solutions.</p>
                </div>
            </div>
    </section>
  )
}

export default HighlySection