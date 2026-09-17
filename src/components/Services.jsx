import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crosshair, Map, Handshake } from 'lucide-react';
import './Sections.css';

export default function Services() {
  return (
    <section className="section-intro" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container intro-grid">
        <motion.div 
          className="services-list"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ marginBottom: '32px' }}>NOS SERVICES</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <ShieldCheck size={28} color="var(--primary-red)" />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Vente de véhicules</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Une sélection minutieuse de véhicules premium inspectés.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <Crosshair size={28} color="var(--primary-red)" />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Recherche personnalisé</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Nous trouvons le modèle exact que vous désirez.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <Handshake size={28} color="var(--primary-red)" />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Accompagnement</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Conseils fiscaux et personnalisation de votre achat.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <Map size={28} color="var(--primary-red)" />
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Importation</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Service complet d'importation aux normes locales.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <h2 style={{ marginBottom: '32px' }}>POURQUOI SHA-YO AUTO ?</h2>
           <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
             <strong>QUALITÉ :</strong> Chaque véhicule de notre showroom a passé un contrôle qualité intransigeant.
           </p>
           <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
             <strong>CONFIANCE :</strong> Une transparence totale sur l'historique et l'entretien.
           </p>
           <p style={{ color: 'var(--text-secondary)' }}>
             <strong>ACCOMPAGNEMENT :</strong> De la première visite jusqu'à la remise des clés, nous gérons tout.
           </p>
        </motion.div>
      </div>
    </section>
  );
}
