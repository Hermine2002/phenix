import './HelpYouSection.css'


const HelpYouSection = () => {
  return (
    <div className='helpyou-Section'>
        <div className="content-canteiner">
            <h3 className='contenth3'>What Can We Do</h3>
            <h2 className='contenth2'>Services we can <br />
            help you with</h2>
        </div>
        <div className="photo-canteiner">
            <div className="photobox1">
                <div className="photo1">
                    <div className="card1">
                        <div className="ket"></div>
                        <h3 className='helph3'>Digital <br />
                        Markiteng</h3>
                    </div>
                </div>
                <div className="photo1">
                    <div className="card2">
                        <div className="ket"></div>
                        <h3 className='helph3'>UI/UX <br />
                        design</h3>
                    </div>
                </div>
            </div>
            <div className="photobox2">
            <div className="photo2">
                    <div className="card3">
                        <div className="ket"></div>
                        <h3 className='helph3'>Technology</h3>
                    </div>
                </div>
                <div className="photo1">
                    <div className="card4">
                        <div className="ket"></div>
                        <h3 className='helph3'>UI/UX <br />
                        design</h3>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default HelpYouSection