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
              <Link className="meta-link">Arino<span className="meta-separator"> | </span></Link>
              
              <Link className="meta-link">Oct 10, 2023<span className="meta-separator"> | </span></Link>
              
              <Link className="meta-link">7 Comments</Link>
            </div>
            <h2 className="willtake-article-title">
            Artistic mind will be great for creation
            </h2>
            <p className="willtake-article-excerpt">
              Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laborator...
            </p>
          </div>
        </div>
    </section>
  )
}

export default ArtisticMindSection