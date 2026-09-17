import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Calendar, Cog } from 'lucide-react';
import './Sections.css';
import imgMercedes from '../assets/mercedes gle.jpg';
import imgJetour from '../assets/jettour.jpg';
import imgJeep from '../assets/jeep.jpg';
import imgLX from '../assets/LX.png';

const vehicles = [
  {
    id: 1,
    name: "Mercedes GLE",
    year: "2023",
    transmission: "Automatique",
    km: "15 000 km",
    price: "Sur demande",
    featured: true,
    image: imgMercedes
  },
  {
    id: 2,
    name: "Jetour",
    year: "2024",
    transmission: "Automatique",
    km: "0 km",
    price: "Sur demande",
    featured: false,
    image: imgJetour
  },
  {
    id: 3,
    name: "Jeep",
    year: "2022",
    transmission: "Automatique",
    km: "32 000 km",
    price: "Sur demande",
    featured: false,
    image: imgJeep
  },
  {
    id: 4,
    name: "Lexus LX",
    year: "2023",
    transmission: "Automatique",
    km: "12 500 km",
    price: "Sur demande",
    featured: false,
    image: imgLX
  }
];

export default function Vehicles() {
  return (
    <section className="section-vehicles" id="vehicules">
      <div className="container">
        <div className="vehicles-header">
          <div>
            <h2>NOS VÉHICULES EN VEDETTE</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "8px", fontSize: "1.2rem" }}>
              Une sélection de véhicules choisis avec exigence.
            </p>
          </div>
          <a href="#tout-voir" className="btn btn-secondary">Voir tous les véhicules &rarr;</a>
        </div>

        <div className="vehicles-grid">
          {vehicles.map((v, i) => (
            <motion.div 
              key={v.id}
              className={`vehicle-card ${v.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="vehicle-img-wrapper">
                <img src={v.image} alt={v.name} />
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
          ))}
        </div>
      </div>
    </section>
  );
}
