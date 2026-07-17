import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-wrapper">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          >
            <div className="about-image-badge glass-panel">
              <span className="text-red-gradient font-bold">10+ Years</span>
              <br />Experience
            </div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
              alt="Star Growth Hub Team" 
              className="about-image" 
            />
            <div className="about-image-overlay"></div>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="heading-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The <span className="text-red-gradient">Engine</span> Behind Your Growth
            </motion.h2>
            <motion.p 
              className="about-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              We are a passionate collective of digital innovators, marketers, and developers dedicated to transforming your digital footprint. At Star Growth Hub, we believe in strategies that deliver measurable results and designs that captivate.
            </motion.p>
            <motion.p 
              className="about-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              From building stunning web platforms to executing data-driven marketing campaigns, our comprehensive suite of services ensures that your brand not only competes but dominates in the digital arena.
            </motion.p>
            
            <motion.ul 
              className="about-features"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {[
                "Innovative Digital Solutions", 
                "Data-Driven Marketing", 
                "Dedicated Expert Team", 
                "Proven Track Record"
              ].map((feature, idx) => (
                <motion.li 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <span className="text-red-gradient mr-2">✦</span> {feature}
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <a href="#contact" className="btn btn-primary mt-4">Connect With Us</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
