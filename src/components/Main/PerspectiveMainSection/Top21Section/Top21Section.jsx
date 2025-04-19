import top from '../../../../assets/imgs/RCmGn9RlTaxWd058D4K3ofiL7gak41iPOfv1eUl0 (1).jpg'

import { Link } from 'react-router-dom'
import '../WillTakeSection/WillTakeSection.css';

const Top21Section = () => {
  return (
    <section>
            <div className="willtake-article">
          <img src={top} alt="Artificial Intelligence" className="willtake-featured-image" />
          <div className="willtake-article-meta">
            <div className="meta-info">
              <Link className="meta-link">Arino<span className="meta-separator"> | </span></Link>
              
              <Link className="meta-link">Oct 28, 2023<span className="meta-separator"> | </span></Link>
              
              <Link className="meta-link">No Comments</Link>
            </div>
            <h2 className="willtake-article-title">
            Top 21 Must-Read Blogs For Agencies
            </h2>
            <p className="willtake-article-excerpt">
              Laboratories used for scientific research take many forms because of the differing requirements of specialists in the various fields of science and engineering. A physics laborator...
            </p>
          </div>
        </div>
    </section>
  )
}

export default Top21Section