import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import CTA from '../components/CTA';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);
  const heroRef = useRef(null);

  // Scroll animations for 3D hero effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <Link to="/services" className="btn btn-primary">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      
      {/* 3D Animated Hero Section */}
      <section className="service-hero" ref={heroRef} style={{ perspective: "1000px" }}>
        <motion.div 
          className="service-hero-bg"
          style={{ 
            backgroundImage: `url(${service.image})`,
            y: smoothY,
            opacity,
            rotateX: smoothRotateX,
            scale: smoothScale,
            transformOrigin: "bottom center"
          }}
        >
          <div className="service-hero-overlay"></div>
        </motion.div>

        <div className="container service-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="service-hero-icon">{service.icon}</div>
            <h1 className="service-hero-title">{service.title}</h1>
            <p className="service-hero-subtitle">{service.shortDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Informational Content Section */}
      <section className="service-content-section">
        <div className="container">
          <div className="service-content-grid">
            
            {/* Left Column: Description */}
            <motion.div 
              className="service-main-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Why You Need <span className="text-red">This.</span></h2>
              <p className="service-full-desc">{service.fullDesc}</p>
              
              <div className="service-quote-box glass-panel">
                <p>"The difference between good marketing and great marketing is the execution. We handle the heavy lifting so you can focus on scaling."</p>
              </div>
            </motion.div>

            {/* Right Column: Benefits */}
            <motion.div 
              className="service-benefits-sidebar"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Key Benefits</h3>
              <ul className="service-benefits-list">
                {service.benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <span className="benefit-check">✓</span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
              <div className="service-sidebar-cta">
                <p>Ready to see these results for your business?</p>
                <button 
                  onClick={() => window.dispatchEvent(new Event('openPopup'))} 
                  className="btn btn-primary w-100"
                >
                  Get Your Free Audit
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Shared CTA */}
      <CTA />

    </div>
  );
};

export default ServiceDetailPage;
