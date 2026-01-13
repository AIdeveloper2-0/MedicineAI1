import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Heart, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. EKLENDİ

const Hero = () => {
  const navigate = useNavigate(); // 2. EKLENDİ

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Sol Taraf (Yazılar) */}
        <div className="hero-content">
          <div className="hero-badge">
            <Heart className="badge-icon" size={16} />
            <span>HIPAA Uyumlu • Yapay Zeka Destekli</span>
          </div>
          
          <h1 className="hero-title">
            Medicine AI
            <span className="hero-subtitle">Klinik Asistan v1</span>
          </h1>
          
          <p className="hero-description">
            Yapay zeka destekli tıbbi asistan ile klinik iş akışlarını dönüştürün. 
            Anında semptom analizi, ilaç etkileşim kontrolleri ve akıllı hasta 
            verisi özetleme — hepsi tek bir güvenli platformda.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">50,000+</div>
              <div className="stat-label">Sağlık Uzmanı</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">%98.5</div>
              <div className="stat-label">Doğruluk Oranı</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">&lt;1.5sn</div>
              <div className="stat-label">Yanıt Süresi</div>
            </div>
          </div>
          
          <div className="hero-cta">
            {/* TIKLAYINCA DEMOYA GİDEN BUTON */}
            <Button 
              className="btn-primary-hero" 
              onClick={() => navigate('/demo')}
            >
              Demoyu Dene
              <ArrowRight size={20} />
            </Button>

            <Button className="btn-secondary-hero">
              Dokümantasyonu İncele
            </Button>
          </div>
          
          <div className="hero-trust">
            <Activity size={16} className="trust-icon" />
            <span>Dünya çapında önde gelen hastaneler tarafından güvenilmektedir</span>
          </div>
        </div>
        
        {/* Sağ Taraf (Görsel) */}
        <div className="hero-visual">
          <div className="visual-card">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef" 
              alt="Medical AI Dashboard"
              className="visual-image"
            />
            <div className="visual-overlay">
              <div className="overlay-badge">
                <div className="badge-pulse"></div>
                <span>Canlı Sistem Aktif</span>
              </div>
            </div>
          </div>
          
          <div className="floating-card floating-card-1">
            <div className="card-icon">
              <Activity size={20} />
            </div>
            <div className="card-content">
              <div className="card-label">İşleniyor</div>
              <div className="card-value">10M+ Sorgu</div>
            </div>
          </div>
          
          <div className="floating-card floating-card-2">
            <div className="card-icon">
              <Heart size={20} />
            </div>
            <div className="card-content">
              <div className="card-label">Hasta Güvenliği</div>
              <div className="card-value">AES-256 Korumalı</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;