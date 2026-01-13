import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { medicineAIData } from '../mock';

const ThemeVariants = () => {
  const { themes } = medicineAIData;
  const [selectedTheme, setSelectedTheme] = useState(themes.find(t => t.active) || themes[1]);
  
  return (
    <section className="theme-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Adaptive Interface Themes</h2>
          <p className="section-description">
            Switch between four carefully designed themes optimized for different clinical scenarios
          </p>
        </div>
        
        <div className="theme-content">
          {/* Theme Selector */}
          <div className="theme-selector">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`theme-option ${selectedTheme.id === theme.id ? 'theme-option-active' : ''}`}
                onClick={() => setSelectedTheme(theme)}
              >
                <div className="theme-option-header">
                  <div 
                    className="theme-color-preview" 
                    style={{ 
                      background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                      border: `2px solid ${theme.accent}`
                    }}
                  >
                    {selectedTheme.id === theme.id && (
                      <Check size={16} style={{ color: theme.accent }} />
                    )}
                  </div>
                  <div className="theme-option-info">
                    <h4 className="theme-option-name">{theme.name}</h4>
                    <p className="theme-option-description">{theme.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Theme Preview */}
          <div className="theme-preview">
            <div className="preview-window" style={{ background: selectedTheme.primary }}>
              <div className="preview-header" style={{ borderBottom: `1px solid ${selectedTheme.accent}20` }}>
                <div className="preview-dots">
                  <span style={{ background: selectedTheme.accent }}></span>
                  <span style={{ background: selectedTheme.accent, opacity: 0.6 }}></span>
                  <span style={{ background: selectedTheme.accent, opacity: 0.3 }}></span>
                </div>
                <div className="preview-title" style={{ color: selectedTheme.id === 'night-carbon' ? '#FFFFFF' : '#000000' }}>
                  Medicine AI Dashboard
                </div>
              </div>
              
              <div className="preview-content">
                <div className="preview-sidebar" style={{ background: selectedTheme.secondary }}>
                  <div className="preview-menu-item preview-menu-active" style={{ background: `${selectedTheme.accent}20`, borderLeft: `3px solid ${selectedTheme.accent}` }}>
                    <div className="menu-item-dot" style={{ background: selectedTheme.accent }}></div>
                  </div>
                  <div className="preview-menu-item">
                    <div className="menu-item-dot" style={{ background: selectedTheme.id === 'night-carbon' ? '#4D4D4D' : '#CCCCCC' }}></div>
                  </div>
                  <div className="preview-menu-item">
                    <div className="menu-item-dot" style={{ background: selectedTheme.id === 'night-carbon' ? '#4D4D4D' : '#CCCCCC' }}></div>
                  </div>
                </div>
                
                <div className="preview-main">
                  <div className="preview-card" style={{ background: selectedTheme.secondary }}>
                    <div className="preview-card-header" style={{ background: `${selectedTheme.accent}10` }}>
                      <div className="card-header-line" style={{ background: selectedTheme.accent, width: '40%' }}></div>
                      <div className="card-header-line" style={{ background: selectedTheme.id === 'night-carbon' ? '#4D4D4D' : '#CCCCCC', width: '25%' }}></div>
                    </div>
                    <div className="preview-card-body">
                      <div className="card-body-line" style={{ background: selectedTheme.id === 'night-carbon' ? '#4D4D4D' : '#CCCCCC' }}></div>
                      <div className="card-body-line" style={{ background: selectedTheme.id === 'night-carbon' ? '#4D4D4D' : '#CCCCCC', width: '80%' }}></div>
                      <div className="card-body-line" style={{ background: selectedTheme.id === 'night-carbon' ? '#4D4D4D' : '#CCCCCC', width: '60%' }}></div>
                    </div>
                  </div>
                  
                  <div className="preview-stats">
                    <div className="preview-stat-card" style={{ background: selectedTheme.secondary, borderLeft: `3px solid ${selectedTheme.accent}` }}>
                      <div className="stat-card-value" style={{ color: selectedTheme.accent }}>98.5%</div>
                    </div>
                    <div className="preview-stat-card" style={{ background: selectedTheme.secondary, borderLeft: `3px solid ${selectedTheme.accent}` }}>
                      <div className="stat-card-value" style={{ color: selectedTheme.accent }}>&lt;1.5s</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="theme-info">
              <h3 className="theme-info-title">{selectedTheme.name}</h3>
              <p className="theme-info-description">{selectedTheme.description}</p>
              <div className="theme-colors">
                <div className="color-swatch">
                  <div className="color-preview" style={{ background: selectedTheme.primary }}></div>
                  <span className="color-label">Primary</span>
                </div>
                <div className="color-swatch">
                  <div className="color-preview" style={{ background: selectedTheme.secondary }}></div>
                  <span className="color-label">Secondary</span>
                </div>
                <div className="color-swatch">
                  <div className="color-preview" style={{ background: selectedTheme.accent }}></div>
                  <span className="color-label">Accent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeVariants;