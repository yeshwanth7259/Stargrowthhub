import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaHashtag, FaRocket, FaPenNib, FaLaptopCode, FaChartLine, FaArrowRight } from 'react-icons/fa';
import './Services.css';
import socialPileImg from '../assets/service_social_pile.png';

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
    image: socialPileImg
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

        <div className="services-stack-container">
          {services.map((service, index) => (
            <div 
              className="stack-card" 
              key={index}
              style={{ top: `calc(130px + ${index * 25}px)` }}
            >
              <div className="stack-card-inner">
                <div className="stack-card-content">
                  <div className="stack-card-icon">{service.icon}</div>
                  <h3 className="stack-card-title">{service.title}</h3>
                  <p className="stack-card-desc">{service.desc}</p>
                  <a href="#contact" className="stack-card-link">
                    Explore <FaArrowRight />
                  </a>
                </div>
                <div className="stack-card-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
