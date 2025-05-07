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
             
              <Link className="meta-link">Phenix shares experience to help growing agencies</Link>
            </div>
            <h2 className="willtake-article-title">
            Insights based on real-world projects
            </h2>
            <p className="willtake-article-excerpt">
            We don't just create — we also educate.  
            The Phenix blog is a valuable resource for the growth of agencies and startups.
          Articles on digital marketing, design, and technology.
          Your business growth starts with knowledge.
            </p>
          </div>
        </div>
    </section>
  )
}

export default Top21Section