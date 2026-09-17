import React from 'react';
import { motion } from 'framer-motion';
import './Sections.css';

export default function Experience() {
  return (
    <section className="section-experience" id="services">
      <div className="container">
        <h2>L'EXPÉRIENCE<br/>SHA-YO AUTO</h2>
        
        <div className="exp-grid">
          <motion.div 
            className="exp-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="exp-num">01</div>
            <h3>DÉCOUVREZ</h3>
            <p>Explorez notre sélection de véhicules haut de gamme, renouvelée régulièrement.</p>
          </motion.div>

          <motion.div 
            className="exp-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="exp-num">02</div>
            <h3>CHOISISSEZ</h3>
            <p>Trouvez le véhicule parfaitement adapté à vos exigences lors d'un essai privé.</p>
          </motion.div>

          <motion.div 
            className="exp-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="exp-num">03</div>
            <h3>ROULEZ</h3>
            <p>Profitez de votre nouvelle expérience automobile avec notre garantie exclusive.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
