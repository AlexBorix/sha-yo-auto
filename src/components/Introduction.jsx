import React from 'react';
import { motion } from 'framer-motion';
import './Sections.css';
import introImg from '../assets/mazda.jpg';

export default function Introduction() {
  return (
    <section className="section-intro" id="propos">
      <div className="container intro-grid">
        <motion.div 
          className="intro-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>PLUS QU'UNE VOITURE.<br/>UNE EXPÉRIENCE.</h2>
        </motion.div>
        
        <motion.div 
          className="intro-text-section"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={introImg} 
            alt="Philosophie SHA-YO AUTO" 
            style={{ width: '100%', marginBottom: '24px', borderRadius: '4px' }}
          />
          <p>
            SHA-YO AUTO n'est pas un simple concessionnaire. Nous sommes les architectes 
            de votre prochaine expérience automobile. Chaque véhicule de notre collection 
            est soigneusement sélectionné pour répondre aux plus hautes exigences de 
            prestige, de performance et de qualité.
          </p>
          <a href="#services" className="btn-text" style={{ marginTop: '24px', display: 'inline-block' }}>
            Découvrir notre philosophie &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
