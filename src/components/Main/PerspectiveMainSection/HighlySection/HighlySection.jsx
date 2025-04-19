import higlyphoto from '../../../../assets/imgs/W36HeJlhRELdASQcXhtyoO4EYd6cc7VNizphjWsO.jpg'

import './HighlySection.css'

const HighlySection = () => {
  return (
    <section className='highly-section'>
            <div className="higly-kanteiner">
                <div className="higly-photobox">
                    <img src={higlyphoto} alt="higlyphoto" className='higlyphoto'/>
                </div>
                <div className="higly-textbox">
                    <h3 className='higly-h3'>Why Choose Us</h3>
                    <h2 className='higly-h2'>Highly experienced <br />
                    pepole with us</h2>
                    <p className='higly-p'>This is the main factor that sets us apart from our competition and <br />
                    allows us to deliver a specialist business consultancy service. Our team <br />
                    applies its wide-ranging experience to determining. Through our years <br />
                    of experience, we’ve also learned that while each channel.This is the <br />
                    main factor that sets us apart from our competition and allows us to 
                    deliver a <br />specialist business consultancy service. Our team applies its
                    wide-ranging experience <br />
                    to determining.</p>
                </div>
            </div>
    </section>
  )
}

export default HighlySection