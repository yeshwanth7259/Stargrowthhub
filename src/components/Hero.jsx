import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import MagneticButton from './MagneticButton';
import rocketImg from '../assets/rocket_hero.png';
import './Hero.css';

const textVariants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: (custom) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

const titleWords = ["Clicks", "Are", "Cheap.", "Customers", "Aren't.", "We", "Deliver", "Both."];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const rocketY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      className="hero" 
      ref={ref} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          style={{ y: textY, opacity, perspective: 1200, transformStyle: "preserve-3d" }}
          initial={{ rotateX: 45, opacity: 0, z: -100 }}
          animate={{ rotateX: 0, opacity: 1, z: 0 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}
        >
          <div className="hero-title">
            {titleWords.map((word, i) => {
              const isHighlight = word.includes("Customers") || word.includes("Both.");
              return (
                <motion.span
                  key={i}
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className={isHighlight ? "text-red-gradient" : ""}
                  style={{ display: 'inline-block' }}
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Data-driven strategies. Creative campaigns. Measurable growth. Let's engineer your brand's trajectory.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <MagneticButton 
              href="#services" 
              className="btn btn-primary hero-btn"
            >
              Our Arsenal <FaArrowRight style={{ marginLeft: '10px' }} />
            </MagneticButton>
            <MagneticButton 
              href="tel:+918904823979" 
              className="btn btn-outline hero-btn glass-panel"
            >
              Book a Call
            </MagneticButton>
          </motion.div>
          
          <motion.div 
            className="hero-trusted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Trusted by 50+ Growing Brands</p>
            <div className="trusted-brands">
               <span><FaCheckCircle className="text-red" /> TechNova</span>
               <span><FaCheckCircle className="text-red" /> BrightMart</span>
               <span><FaCheckCircle className="text-red" /> Leafy</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          style={{ y: rocketY }}
        >
          <motion.div 
            className="rocket-wrapper glass-panel"
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: "preserve-3d",
              padding: '3rem',
              borderRadius: '32px',
              border: '1px solid var(--line-strong)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
            initial={{ opacity: 0, scale: 0.8, rotateX: 10, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          >
            {/* Added 3D depth to image by translating it forward on Z axis */}
            <motion.img 
              src={rocketImg} 
              alt="Rocket taking off" 
              className="rocket-img"
              style={{ transform: "translateZ(50px)" }}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <div className="rocket-glow" style={{ transform: "translateZ(-20px)" }}></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
