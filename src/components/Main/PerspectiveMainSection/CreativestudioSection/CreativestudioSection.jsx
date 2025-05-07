import studio from '../../../../assets/imgs/k2Yim1TbjjsMynpORml0IiI4jWL65XgfdIVBPvrs.jpg'

import { Link } from 'react-router-dom'
import '../WillTakeSection/WillTakeSection.css';

const CreativestudioSection = () => {
  return (
    <section>
            <div className="willtake-article">
          <img src={studio} alt="Artificial Intelligence" className="willtake-featured-image" />
          <div className="willtake-article-meta">
            <div className="meta-info">
              <Link className="meta-link">Phenix Creative Studio <span className="meta-separator"> | </span></Link>
              
              
              
              <Link className="meta-link">– to tell your business story the right way</Link>
            </div>
            <h2 className="willtake-article-title">
            Multimedia content to showcase your brand’s story <br/>
            Professional support for social media and ad campaigns
            </h2>
            <p className="willtake-article-excerpt">
            We are building a new platform for collaboration between businesses, designers, and marketers.  
            Here, technology meets creativity.Phenix is building a platform designed to create impact.
            </p>
          </div>
        </div>
    </section>
  )
}

export default CreativestudioSection