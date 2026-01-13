import React from 'react';
import { MessageSquare, Activity, AlertCircle, FileText, FileCheck, TrendingUp, Shield, Globe } from 'lucide-react';
import { medicineAIData } from '../mock';

const iconMap = {
  MessageSquare,
  Activity,
  AlertCircle,
  FileText,
  FileCheck,
  TrendingUp,
  Shield,
  Globe
};

const Features = () => {
  const { features } = medicineAIData;
  
  return (
    <section className="features-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Comprehensive Clinical Intelligence</h2>
          <p className="section-description">
            Advanced AI capabilities designed specifically for modern healthcare professionals
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="bento-grid">
          {/* Large Feature Card - Top Left */}
          <div className="bento-card bento-large" style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
            {features[0].image && (
              <div className="bento-image-wrapper">
                <img src={features[0].image} alt={features[0].title} className="bento-image" />
                <div className="bento-image-overlay"></div>
              </div>
            )}
            <div className="bento-content">
              <div className="bento-icon">
                {React.createElement(iconMap[features[0].icon], { size: 32 })}
              </div>
              <h3 className="bento-title">{features[0].title}</h3>
              <p className="bento-description">{features[0].description}</p>
            </div>
          </div>
          
          {/* Medium Feature Cards */}
          <div className="bento-card bento-medium">
            {features[1].image && (
              <div className="bento-image-wrapper">
                <img src={features[1].image} alt={features[1].title} className="bento-image" />
                <div className="bento-image-overlay"></div>
              </div>
            )}
            <div className="bento-content">
              <div className="bento-icon">
                {React.createElement(iconMap[features[1].icon], { size: 28 })}
              </div>
              <h3 className="bento-title">{features[1].title}</h3>
              <p className="bento-description">{features[1].description}</p>
            </div>
          </div>
          
          <div className="bento-card bento-medium">
            {features[2].image && (
              <div className="bento-image-wrapper">
                <img src={features[2].image} alt={features[2].title} className="bento-image" />
                <div className="bento-image-overlay"></div>
              </div>
            )}
            <div className="bento-content">
              <div className="bento-icon">
                {React.createElement(iconMap[features[2].icon], { size: 28 })}
              </div>
              <h3 className="bento-title">{features[2].title}</h3>
              <p className="bento-description">{features[2].description}</p>
            </div>
          </div>
          
          {/* Second Row */}
          <div className="bento-card bento-medium">
            {features[3].image && (
              <div className="bento-image-wrapper">
                <img src={features[3].image} alt={features[3].title} className="bento-image" />
                <div className="bento-image-overlay"></div>
              </div>
            )}
            <div className="bento-content">
              <div className="bento-icon">
                {React.createElement(iconMap[features[3].icon], { size: 28 })}
              </div>
              <h3 className="bento-title">{features[3].title}</h3>
              <p className="bento-description">{features[3].description}</p>
            </div>
          </div>
          
          {/* Small Feature Cards */}
          <div className="bento-card bento-small">
            <div className="bento-content">
              <div className="bento-icon">
                {React.createElement(iconMap[features[4].icon], { size: 24 })}
              </div>
              <h3 className="bento-title-small">{features[4].title}</h3>
              <p className="bento-description-small">{features[4].description}</p>
            </div>
          </div>
          
          <div className="bento-card bento-small">
            <div className="bento-content">
              <div className="bento-icon">
                {React.createElement(iconMap[features[5].icon], { size: 24 })}
              </div>
              <h3 className="bento-title-small">{features[5].title}</h3>
              <p className="bento-description-small">{features[5].description}</p>
            </div>
          </div>
          
          <div className="bento-card bento-small">
            <div className="bento-content">
              <div className="bento-icon">
                {React.createElement(iconMap[features[6].icon], { size: 24 })}
              </div>
              <h3 className="bento-title-small">{features[6].title}</h3>
              <p className="bento-description-small">{features[6].description}</p>
            </div>
          </div>
          
          <div className="bento-card bento-small">
            <div className="bento-content">
              <div className="bento-icon">
                {React.createElement(iconMap[features[7].icon], { size: 24 })}
              </div>
              <h3 className="bento-title-small">{features[7].title}</h3>
              <p className="bento-description-small">{features[7].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;