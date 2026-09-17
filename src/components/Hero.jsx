import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import heroBg from '../assets/cool.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroBg} alt="SHA-YO AUTO Accueil" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          L'EXCELLENCE AUTOMOBILE<br />À VOTRE PORTÉE
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-subtitle"
        >
          Découvrez une sélection de véhicules haut de gamme soigneusement choisis pour leur qualité, leur performance et leur élégance.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#vehicules" className="btn btn-primary">Découvrir nos véhicules &rarr;</a>
          <a href="#contact" className="btn btn-secondary">Nous contacter</a>
        </motion.div>
      </div>
    </section>
  );
}
