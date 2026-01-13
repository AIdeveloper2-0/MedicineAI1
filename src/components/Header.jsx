import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom'; // 1. EKLENDİ

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // 2. EKLENDİ
  
  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Technology', href: '#specs' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Documentation', href: '#docs' }
  ];
  
  return (
    <header className="dark-header">
      <div className="header-content">
        {/* Logo */}
        <div className="header-logo">
          <div className="logo-icon">
            <Heart size={24} fill="currentColor" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Medicine AI</span>
            <span className="logo-version">v1</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="dark-nav">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="dark-nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* CTA Button (MASAÜSTÜ) */}
        <div className="header-actions">
          <Button 
            className="btn-primary-header" 
            onClick={() => navigate('/demo')}
          >
            Demoyu dene
          </Button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              className="mobile-menu-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {/* Mobil Buton */}
          <Button 
            className="btn-primary-mobile"
            onClick={() => {
              setMobileMenuOpen(false);
              navigate('/demo');
            }}
          >
            demoyu dene
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;