import React from 'react';
import { Star, Quote } from 'lucide-react';
import { medicineAIData } from '../mock';

const Testimonials = () => {
  const { testimonials } = medicineAIData;
  
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Trusted by Healthcare Professionals</h2>
          <p className="section-description">
            See what doctors and medical professionals are saying about Medicine AI
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <Quote size={32} className="testimonial-quote" />
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, starIdx) => (
                  <Star key={starIdx} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="testimonial-content">{testimonial.content}</p>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="author-avatar"
                />
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;