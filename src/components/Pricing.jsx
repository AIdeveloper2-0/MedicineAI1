import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { medicineAIData } from '../mock';
import { Button } from './ui/button';

const Pricing = () => {
  const { pricing } = medicineAIData;
  
  return (
    <section className="pricing-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-description">
            Flexible pricing designed for practices of all sizes
          </p>
        </div>
        
        <div className="pricing-grid">
          {pricing.map((plan, idx) => (
            <div key={idx} className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-description">{plan.description}</p>
                <div className="pricing-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
              </div>
              
              <div className="pricing-features">
                {plan.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="pricing-feature">
                    <Check size={18} className="feature-check" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className={plan.popular ? 'btn-primary-pricing' : 'btn-secondary-pricing'}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                <ArrowRight size={18} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;