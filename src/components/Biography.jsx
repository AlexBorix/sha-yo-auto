import React from 'react';
import { motion } from 'framer-motion';
import './Biography.css';
import pdgImage from '../assets/pdg.jpeg';

export default function Biography() {
  return (
    <section className="section-biography" id="pdg">
      <div className="container bio-grid">
        <motion.div 
          className="bio-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={pdgImage} 
            alt="Portrait du PDG" 
          />
        </motion.div>
        
        <motion.div 
          className="bio-content"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="bio-subtitle">LE FONDATEUR</h3>
          <h2>UNE PASSION GUIDÉE<br/>PAR L'EXCELLENCE.</h2>
          
          <div className="bio-text">
            <p>
              "L'automobile n'est pas seulement un moyen de transport, c'est l'expression ultime d'un style de vie et d'une passion inébranlable pour la perfection."
            </p>
            <p>
              Fondateur de SHA-YO AUTO, mon objectif a toujours été très clair : offrir à nos clients burkinabè et internationaux une porte d'accès privilégiée vers l'excellence automobile. Nous sélectionnons chaque modèle comme s'il s'agissait du nôtre, avec une rigueur absolue.
            </p>
            <p>
              Mon engagement envers vous repose sur trois piliers : la transparence totale, la qualité sans compromis et l'accompagnement sur mesure. Bienvenue chez SHA-YO AUTO.
            </p>
          </div>
          
          <div className="bio-signature">
            <h4>PDG Sha-Yo Auto</h4> {/* À ajuster avec le vrai nom */}
            <span>Président Directeur Général</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
