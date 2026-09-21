import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Calendar, Cog } from 'lucide-react';
import './Sections.css';
import { client, urlFor } from '../sanity';
import imgMercedes from '../assets/mercedes gle.jpg';
import imgJetour from '../assets/jettour.jpg';
import imgJeep from '../assets/jeep.jpg';
import imgLX from '../assets/LX.png';

const defaultVehicles = [
  {
    _id: "default1",
    name: "Mercedes GLE",
    year: "2023",
    transmission: "Automatique",
    km: "15 000 km",
    price: "Sur demande",
    featured: true,
    image: null,
    defaultImage: imgMercedes
  },
  {
    _id: "default2",
    name: "Jetour",
    year: "2024",
    transmission: "Automatique",
    km: "0 km",
    price: "Sur demande",
    featured: false,
    image: null,
    defaultImage: imgJetour
  },
  {
    _id: "default3",
    name: "Jeep",
    year: "2022",
    transmission: "Automatique",
    km: "32 000 km",
    price: "Sur demande",
    featured: false,
    image: null,
    defaultImage: imgJeep
  },
  {
    _id: "default4",
    name: "Lexus LX",
    year: "2023",
    transmission: "Automatique",
    km: "12 500 km",
    price: "Sur demande",
    featured: false,
    image: null,
    defaultImage: imgLX
  }
];

export default function Vehicles({ setPage }) {
  const [vehicles, setVehicles] = useState(defaultVehicles);

  useEffect(() => {
    // Only fetch the 4 featured or newest vehicles for the home page
    client.fetch('*[_type == "vehicle"] | order(featured desc, _createdAt desc)[0...4]').then((data) => {
      if (data && data.length > 0) {
        setVehicles(data);
      }
    });
  }, []);
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
          <button onClick={() => setPage('catalogue')} className="btn btn-secondary">Voir tous les véhicules &rarr;</button>
        </div>

        <div className="vehicles-grid">
          {vehicles.map((v, i) => {
            // Check if it's a real Sanity image or a local fallback image
            const imageSource = v.image ? urlFor(v.image).url() : v.defaultImage;

            return (
              <motion.div 
                key={v._id || i}
                className={`vehicle-card ${v.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="vehicle-img-wrapper">
                  <img src={imageSource} alt={v.name} />
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
      </div>
    </section>
  );
}
