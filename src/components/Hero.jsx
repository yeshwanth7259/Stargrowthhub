import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import rocketImg from '../assets/rocket_hero.png';
import './Hero.css';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rocketY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className="hero" ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          style={{ y: textY, opacity }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We Turn Clicks Into<br />
            <span className="text-red-gradient">Customers.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Data-driven strategies. Creative campaigns. Measurable growth. Let's grow your brand, together.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a 
              href="/services" 
              className="btn btn-primary hero-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services <FaArrowRight style={{ marginLeft: '10px' }} />
            </motion.a>
            <motion.a 
              href="/contact" 
              className="btn btn-outline hero-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="hero-trusted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>Trusted by 50+ Growing Brands</p>
            <div className="trusted-brands">
               <span><FaCheckCircle className="text-red" /> TechNova</span>
               <span><FaCheckCircle className="text-red" /> BrightMart</span>
               <span><FaCheckCircle className="text-red" /> Leafy</span>
               <span><FaCheckCircle className="text-red" /> DentalPro</span>
               <span><FaCheckCircle className="text-red" /> EduSmart</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          style={{ y: rocketY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="rocket-wrapper">
            <motion.img 
              src={rocketImg} 
              alt="Rocket taking off" 
              className="rocket-img"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            {/* Ambient glow behind rocket */}
            <div className="rocket-glow"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
