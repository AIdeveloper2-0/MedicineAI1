import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="section-container">
        <div className="cta-content">
          <div className="cta-badge">
            <span>Get Started Today</span>
          </div>
          
          <h2 className="cta-title">
            Ready to Transform Your Clinical Practice?
          </h2>
          
          <p className="cta-description">
            Join 50,000+ healthcare professionals already using Medicine AI to deliver 
            better patient care. Start your 14-day free trial—no credit card required.
          </p>
          
          <div className="cta-buttons">
            <Button className="btn-primary-cta">
              Start Free Trial
              <ArrowRight size={20} />
            </Button>
            <Button className="btn-secondary-cta">
              <Calendar size={20} />
              Schedule Demo
            </Button>
          </div>
          
          <div className="cta-trust">
            <div className="trust-item">
              <span className="trust-check">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="trust-item">
              <span className="trust-check">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="trust-item">
              <span className="trust-check">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;