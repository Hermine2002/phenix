import artist from '../../../../assets/imgs/sMWvOu2WgWwNbYx7SqSCiPACVUqlXe7gAgUsFol1.jpg'

import { Link } from 'react-router-dom'
import '../WillTakeSection/WillTakeSection.css';

const ArtisticMindSection = () => {
  return (
    <section>
            <div className="willtake-article">
          <img src={artist} alt="Artificial Intelligence" className="willtake-featured-image" />
          <div className="willtake-article-meta">
            <div className="meta-info">

              
              <Link className="meta-link">Creative thinking is the driving force of business</Link>
            </div>
            <h2 className="willtake-article-title">
            Branding based on values and style
            </h2>
            <p className="willtake-article-excerpt">
            Phenix combines design, content, and strategy to build memorable brands.Creativity is one of the key factors in business success.
            </p>
          </div>
        </div>
    </section>
  )
}

export default ArtisticMindSection