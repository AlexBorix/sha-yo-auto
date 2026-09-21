import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';
import logoImg from '../assets/logo.jpeg';

export default function Header({ setPage }) {
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
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); setPage('home'); window.scrollTo(0,0); }}>
            <img src={logoImg} alt="SHA-YO AUTO" />
          </a>
        </div>
        
        <nav className="header-center desktop-only">
          <a href="#accueil" className="nav-link" onClick={() => setPage('home')}>Accueil</a>
          <a href="#vehicules" className="nav-link" onClick={() => setPage('home')}>Nos véhicules</a>
          <a href="#services" className="nav-link" onClick={() => setPage('home')}>Services</a>
          <a href="#propos" className="nav-link" onClick={() => setPage('home')}>À propos</a>
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
          <a href="#accueil" onClick={() => { setMobileMenuOpen(false); setPage('home'); }}>Accueil</a>
          <a href="#vehicules" onClick={() => { setMobileMenuOpen(false); setPage('home'); }}>Nos véhicules</a>
          <a href="#services" onClick={() => { setMobileMenuOpen(false); setPage('home'); }}>Services</a>
          <a href="#propos" onClick={() => { setMobileMenuOpen(false); setPage('home'); }}>À propos</a>
          <a href="#contact" className="btn btn-primary mt-4" onClick={() => { setMobileMenuOpen(false); setPage('home'); }}>Nous contacter</a>
        </nav>
      </div>
    </header>
  );
}
