import React from 'react';
import { Stethoscope, GraduationCap, Building2 } from 'lucide-react';
import { medicineAIData } from '../mock';

const iconMap = {
  Stethoscope,
  GraduationCap,
  Building2
};

const UseCases = () => {
  const { useCases } = medicineAIData;
  
  return (
    <section className="usecases-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Trusted Across Healthcare</h2>
          <p className="section-description">
            From individual practitioners to enterprise hospital systems
          </p>
        </div>
        
        <div className="usecases-grid">
          {useCases.map((useCase, idx) => {
            const Icon = iconMap[useCase.icon];
            return (
              <div key={idx} className="usecase-card">
                <div className="usecase-icon-wrapper">
                  <div className="usecase-icon">
                    {Icon && <Icon size={32} />}
                  </div>
                </div>
                <h3 className="usecase-title">{useCase.title}</h3>
                <p className="usecase-description">{useCase.description}</p>
                <div className="usecase-stat">{useCase.users}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;