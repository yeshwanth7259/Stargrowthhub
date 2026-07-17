import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import laptopImg from '../assets/laptop_cta.png';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container cta-container">
        <div className="cta-content">
          <motion.h2 
            className="cta-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p 
            className="cta-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's build a strategy that gets you more leads, more customers, and more growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="/contact" className="btn btn-primary cta-btn">
              Get Your Free Consultation <span className="btn-icon-circle" style={{marginLeft: '15px'}}><FaArrowRight /></span>
            </a>
          </motion.div>
        </div>
        <div className="cta-visual">
          <motion.div 
            className="laptop-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={laptopImg} alt="Dashboard Analytics" className="laptop-img" />
            <div className="laptop-glow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
