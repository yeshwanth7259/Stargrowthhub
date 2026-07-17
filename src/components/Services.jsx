import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaHashtag, FaRocket, FaPenNib, FaLaptopCode, FaChartLine, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaSearch />,
    title: "Search Engine Optimization",
    desc: "Rank higher on Google and drive organic traffic that converts.",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <FaHashtag />,
    title: "Social Media Marketing",
    desc: "Engage your audience and build a brand that people love.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <FaRocket />,
    title: "Google Ads & PPC",
    desc: "Get instant visibility and maximum ROI with smart ad campaigns.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <FaPenNib />,
    title: "Content Marketing",
    desc: "Content that attracts, informs, and converts your audience.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Design & Dev",
    desc: "Beautiful, fast, and conversion-focused websites.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <FaChartLine />,
    title: "Analytics & Reporting",
    desc: "Track performance and make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        <div className="section-header">
          <motion.p 
            className="section-kicker"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            WHAT WE DO
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Powerful Digital Marketing <br/>
            Services That <span className="text-red">Drive Results</span>
          </motion.h2>
        </div>

        <div className="services-split-layout">
          {/* Left Side: Scrollable List of Services */}
          <div className="services-left-list">
            {services.map((service, index) => (
              <motion.div 
                className={`service-list-item ${activeService === index ? 'active' : ''}`}
                key={index}
                onViewportEnter={() => setActiveService(index)}
                viewport={{ amount: 0.5, margin: "-20% 0px -40% 0px" }}
              >
                <div className="service-list-icon">
                  {service.icon}
                </div>
                <div className="service-list-content">
                  <div className="mobile-service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <h3 className="service-list-title">{service.title}</h3>
                  <p className="service-list-desc">{service.desc}</p>
                  <a href="#contact" className="service-link">
                    Explore <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Sticky Image Viewer */}
          <div className="services-right-sticky">
            <div className="sticky-image-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  className="sticky-image-wrapper"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <img src={services[activeService].image} alt={services[activeService].title} />
                  <div className="sticky-image-overlay"></div>
                  <div className="sticky-image-content">
                    <div className="sticky-icon">{services[activeService].icon}</div>
                    <h3>{services[activeService].title}</h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
