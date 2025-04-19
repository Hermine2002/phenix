import { Link } from 'react-router-dom';
import './PricingSection.css';

const Pricing = () => {
  return (
    <div className="pricing-container">
      {/* Standard Plan */}
      <div className="pricing-card">
        <h2 className="plan-name">Standard</h2>
        <div className="plan-price">
          <h3>$10<span>/monthly</span></h3>
          <p>Per subscriber per month</p>
        </div>
        <ul className="plan-features">
          <li>Static responsive website</li>
          <li>Video marketing</li>
          <li>Keywords research</li>
          <li>Facebook campaign</li>
          <li>eCommerce solution</li>
          <li>Google adword</li>
        </ul>
        <Link href="#" className="see-details">See Details →</Link>
      </div>

      {/* Professional Plan */}
      <div className="pricing-card highlighted">
        <h2 className="plan-name">Professional</h2>
        <div className="plan-price">
          <h3>$99<span>/monthly</span></h3>
          <p>Per subscriber per month</p>
        </div>
        <ul className="plan-features">
          <li>Static responsive website</li>
          <li>Video marketing</li>
          <li>Keywords research</li>
          <li>Facebook campaign</li>
          <li>eCommerce solution</li>
          <li>Google adword</li>
        </ul>
        <Link href="#" className="see-details">See Details →</Link>
      </div>

      {/* Ultimate Plan */}
      <div className="pricing-card">
        <h2 className="plan-name">Ultimate</h2>
        <div className="plan-price">
          <h3>$199<span>/monthly</span></h3>
          <p>Per subscriber per month</p>
        </div>
        <ul className="plan-features">
          <li>Static responsive website</li>
          <li>Video marketing</li>
          <li>Keywords research</li>
          <li>Facebook campaign</li>
          <li>eCommerce solution</li>
          <li>Google adword</li>
        </ul>
        <Link href="#" className="see-details">See Details →</Link>
      </div>
    </div>
  );
};

export default Pricing;