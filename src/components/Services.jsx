import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { servicesData } from '../data/servicesData';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        
        <div className="section-header">
          <motion.p 
            className="section-kicker"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ letterSpacing: '0.15em' }}
          >
            THE FULL STACK
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Built To Rank. Built To Convert.<br/>
            <span className="text-red">Built To Scale.</span>
          </motion.h2>
        </div>

        <div className="services-stack-container">
          {servicesData.map((service, index) => (
            <motion.div 
              className="stack-card glass-panel" 
              key={service.id}
              style={{ top: `calc(130px + ${index * 25}px)` }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              whileHover="hover"
            >
              <div className="stack-card-inner">
                <div className="stack-card-content">
                  <motion.div 
                    className="stack-card-icon"
                    variants={{
                      hover: { rotate: [0, -10, 10, -5, 5, 0], scale: 1.1, transition: { duration: 0.5 } }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="stack-card-title">{service.title}</h3>
                  <p className="stack-card-desc">{service.shortDesc}</p>
                  <Link to={`/services/${service.slug}`} className="stack-card-link">
                    Explore <FaArrowRight />
                  </Link>
                </div>
                <div className="stack-card-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
