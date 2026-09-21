import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Calendar, Cog, ArrowLeft } from 'lucide-react';
import './Sections.css';
import { client, urlFor } from '../sanity';

export default function Catalog({ setPage }) {
  const [allVehicles, setAllVehicles] = useState([]);

  useEffect(() => {
    // Fetch ALL vehicles without limit order by creation date
    client.fetch('*[_type == "vehicle"] | order(_createdAt desc)').then((data) => {
      if (data && data.length > 0) {
        setAllVehicles(data);
      }
    });
    window.scrollTo(0, 0); // Remonte en haut de page en arrivant
  }, []);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-black)' }}>
      <section className="section-vehicles">
        <div className="container">
          <div className="vehicles-header">
            <div>
              <button 
                onClick={() => setPage('home')}
                className="btn btn-secondary"
                style={{ marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <ArrowLeft size={18} /> Retour à l'accueil
              </button>
              <h2>CATALOGUE COMPLET</h2>
              <p style={{ color: "var(--text-secondary)", marginTop: "8px", fontSize: "1.2rem" }}>
                Découvrez l'ensemble de notre stock de véhicules exclusifs.
              </p>
            </div>
          </div>

          {allVehicles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px', color: 'gray' }}>Chargement du catalogue...</div>
          ) : (
            <div className="vehicles-grid">
              {allVehicles.map((v, i) => {
                const imageSource = v.image ? urlFor(v.image).url() : '';
                
                return (
                  <motion.div 
                    key={v._id || i}
                    className="vehicle-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                  >
                    <div className="vehicle-img-wrapper">
                      {imageSource ? <img src={imageSource} alt={v.name} /> : <div style={{ height: '100%', background: '#222' }}></div>}
                    </div>
                    <div className="vehicle-info">
                      <h3>{v.name}</h3>
                      <div className="v-meta">
                        <span><Calendar size={14} /> {v.year}</span>
                        <span><Cog size={14} /> {v.transmission}</span>
                        <span><Gauge size={14} /> {v.km}</span>
                      </div>
                      <div className="v-price">{v.price}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
