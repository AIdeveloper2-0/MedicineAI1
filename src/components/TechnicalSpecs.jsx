import React from 'react';
import { Cpu, Database, Shield, Zap } from 'lucide-react';
import { medicineAIData } from '../mock';

const categoryIcons = {
  'AI Engine': Cpu,
  'Medical Standards': Database,
  'Security & Compliance': Shield,
  'Performance': Zap
};

const TechnicalSpecs = () => {
  const { technicalSpecs } = medicineAIData;
  
  return (
    <section className="specs-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Technical Specifications</h2>
          <p className="section-description">
            Enterprise-grade infrastructure built for healthcare reliability and security
          </p>
        </div>
        
        <div className="specs-grid">
          {technicalSpecs.map((category, idx) => {
            const Icon = categoryIcons[category.category];
            return (
              <div key={idx} className="spec-card">
                <div className="spec-card-header">
                  <div className="spec-icon">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className="spec-category">{category.category}</h3>
                </div>
                
                <div className="spec-list">
                  {category.specs.map((spec, specIdx) => (
                    <div key={specIdx} className="spec-item">
                      <div className="spec-label">{spec.label}</div>
                      <div className="spec-value">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Compliance Badges */}
        <div className="compliance-badges">
          <div className="badge-item">
            <Shield size={20} />
            <span>HIPAA Certified</span>
          </div>
          <div className="badge-item">
            <Database size={20} />
            <span>SOC 2 Type II</span>
          </div>
          <div className="badge-item">
            <Shield size={20} />
            <span>ISO 27001</span>
          </div>
          <div className="badge-item">
            <Database size={20} />
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;