import React from 'react';
import { MessageCircle } from 'lucide-react';
import './Sections.css';
import logoImg from '../assets/logo.jpeg';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <a href="#" className="footer-logo">
              <img src={logoImg} alt="SHA-YO AUTO" />
            </a>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 SHA-YO AUTO. L'excellence automobile à votre portée.</span>
            <span>Design by Alex</span>
          </div>
        </div>
      </footer>

      {/* Bouton WhatsApp Flottant */}
      <a href="https://wa.me/22673366464" target="_blank" rel="noreferrer" className="whatsapp-float">
        <MessageCircle size={32} />
      </a>
    </>
  );
}
