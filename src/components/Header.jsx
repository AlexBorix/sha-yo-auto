import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="header-left">
          <a href="#" className="logo">
            <img src="/images/logo.jpeg" alt="SHA-YO AUTO" />
          </a>
        </div>
        
        <nav className="header-center desktop-only">
          <a href="#accueil" className="nav-link">Accueil</a>
          <a href="#vehicules" className="nav-link">Nos véhicules</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#propos" className="nav-link">À propos</a>
        </nav>

        <div className="header-right desktop-only">
          <a href="#contact" className="btn btn-primary">Nous contacter</a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#accueil" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
          <a href="#vehicules" onClick={() => setMobileMenuOpen(false)}>Nos véhicules</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#propos" onClick={() => setMobileMenuOpen(false)}>À propos</a>
          <a href="#contact" className="btn btn-primary mt-4" onClick={() => setMobileMenuOpen(false)}>Nous contacter</a>
        </nav>
      </div>
    </header>
  );
}
