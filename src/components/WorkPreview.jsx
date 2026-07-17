import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './WorkPreview.css';

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    title: "E-Commerce SEO",
    desc: "+320% Organic Traffic",
    link: "/work/ecommerce"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    title: "Lead Generation Campaign",
    desc: "+450% Quality Leads",
    link: "/work/leadgen"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    title: "Social Media Growth",
    desc: "+280% Engagement",
    link: "/work/social"
  }
];

const WorkPreview = () => {
  return (
    <section className="work-preview-section">
      <div className="container work-preview-container">
        
        <div className="work-preview-left">
          <motion.p 
            className="section-kicker"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            OUR WORK
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Success Stories<br/>
            That Inspire
          </motion.h2>
          
          <motion.div 
            className="work-nav-arrows"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="nav-arrow-btn"><FaArrowLeft /></button>
            <button className="nav-arrow-btn"><FaArrowRight /></button>
          </motion.div>
        </div>

        <div className="work-preview-right">
          <div className="work-carousel">
            {caseStudies.map((study, index) => (
              <motion.div 
                className="work-card"
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
              >
                <div className="work-image-wrapper">
                  <img src={study.image} alt={study.title} className="work-image" />
                </div>
                <div className="work-content">
                  <h3 className="work-title">{study.title}</h3>
                  <p className="work-desc">{study.desc}</p>
                  <Link to="/work" className="work-link">
                    View Case <FaArrowRight style={{ marginLeft: '8px' }} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkPreview;
