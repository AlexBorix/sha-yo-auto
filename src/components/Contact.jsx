import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Sections.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Remplacez les 0 par le vrai numéro WhatsApp de l'entreprise (format international sans le +)
    // Exemple pour le Burkina : "22673366464"
    const whatsappNumber = "22673366464"; 
    
    const textMessage = `*NOUVELLE DEMANDE - SHA-YO AUTO*\n\n` +
                        `*👤 Nom et Prénom :* ${formData.name}\n` +
                        `*📞 Téléphone :* ${formData.phone}\n` +
                        `*📧 Email :* ${formData.email}\n\n` +
                        `*📝 Message / Recherche :*\n${formData.message}`;
    
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Ouvre le lien WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-contact" id="contact">
      <div className="container contact-grid">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2>PARLONS DE VOTRE<br/>PROCHAIN VÉHICULE.</h2>
          
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={24} color="var(--primary-red)" />
              <a href="https://maps.app.goo.gl/FAukwLpvHDWg31Br9?g_st=iwb" target="_blank" rel="noreferrer">
                Ouagadougou, Burkina Faso (Voir sur la carte)
              </a>
            </div>
            <div className="contact-item">
              <Phone size={24} color="var(--primary-red)" />
              <span>+226 73 36 64 64</span>
            </div>
            <div className="contact-item">
              <Mail size={24} color="var(--primary-red)" />
              <a href="mailto:yochiouedraogo@gmail.com">yochiouedraogo@gmail.com</a>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nom complet" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Numéro de téléphone" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Adresse e-mail" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message ou modèle recherché..." 
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Envoyer ma demande via WhatsApp &rarr;
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
