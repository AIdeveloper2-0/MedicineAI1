import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <Heart size={24} fill="currentColor" />
              </div>
              <div className="logo-text">
                <span className="logo-name">Medicine AI</span>
                <span className="logo-version">v1</span>
              </div>
            </div>
            <p className="footer-description">
              Transforming clinical workflows with AI-powered medical assistance.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link">
                <Github size={20} />
              </a>
              <a href="#" className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Product Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Product</h4>
            <ul className="footer-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Roadmap</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div className="footer-column">
            <h4 className="footer-column-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">HIPAA Compliance</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">License</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Medicine AI. All rights reserved. HIPAA Compliant.
          </p>
          <div className="footer-certifications">
            <span className="cert-badge">HIPAA</span>
            <span className="cert-badge">SOC 2</span>
            <span className="cert-badge">ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;