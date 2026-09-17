import React from 'react';
import { motion } from 'framer-motion';
import './Sections.css';
import immersiveBg from '../assets/back.jpg';

export default function Immersive() {
  return (
    <>
      <section className="section-immersive">
        <img src={immersiveBg} alt="Immersive Section Background" />
        <motion.div 
          className="container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}>LE LUXE NE SE RACONTE PAS.<br/>IL SE VIT.</h1>
        </motion.div>
      </section>

      <section className="section-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>VOTRE PROCHAIN VÉHICULE<br/>VOUS ATTEND.</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "16px", fontSize: "1.1rem" }}>
              Prenez rendez-vous dans notre showroom exclusif.
            </p>
            <div className="cta-actions">
              <a href="#vehicules" className="btn btn-primary">Découvrir nos véhicules</a>
              <a href="#contact" className="btn btn-secondary">Nous contacter</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
