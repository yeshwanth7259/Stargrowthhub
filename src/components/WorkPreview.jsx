import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WorkPreview.css';

const worksData = [
  {
    id: 1,
    title: "HOSPITAL & \nHEALTHCARE",
    date: "CLINIC MANAGEMENT",
    image: "https://images.unsplash.com/photo-1749087869560-1f00fe44b58e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "REAL ESTATE \nDEVELOPMENT",
    date: "PROPERTY PORTAL",
    image: "https://images.unsplash.com/photo-1722421492323-eaf9c401befe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "RESTAURANT \n& DINING",
    date: "HOSPITALITY BRANDING",
    image: "https://images.unsplash.com/photo-1582228096960-7f5d2ec4aa8e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "FITNESS & \nGYM",
    date: "MEMBER ACQUISITION",
    image: "https://images.unsplash.com/photo-1682241367368-6387d5d4921a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "EDUCATION",
    date: "STUDENT ENROLLMENT",
    image: "https://images.unsplash.com/photo-1639910232134-8cc7505c4e64?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "CORPORATE \nENTERPRISE",
    date: "B2B LEAD GENERATION",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  }
];

const WorkPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === worksData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? worksData.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      rotate: direction > 0 ? 15 : -15,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      rotate: -8,
      scale: 1,
      transition: {
        type: "spring", stiffness: 200, damping: 25, duration: 0.5
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      rotate: direction < 0 ? 15 : -15,
      scale: 0.8,
      transition: {
        type: "spring", stiffness: 200, damping: 25, duration: 0.5
      }
    })
  };

  const currentWork = worksData[currentIndex];

  return (
    <section className="interactive-work-section">
      
      {/* Top Left Visible Heading */}
      <div className="section-main-heading">
        <h2 style={{ letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>What Business Do You Own?</h2>
      </div>

      {/* Giant Vertical Watermark on the Left Edge */}
      <div className="watermark-side" style={{ opacity: 0.03, fontSize: '12vw' }}>BUSINESS</div>
      
      <div className="circle-decoration"></div>
      <div className="dot-decoration"></div>
      
      <div className="work-interactive-container">
        
        {/* LEFT COLUMN: PREV Button */}
        <div className="nav-col-left desktop-only">
          <button className="text-nav-btn" onClick={prevSlide}>
            PREV <span className="nav-line"></span>
          </button>
        </div>

        {/* CENTER COLUMN: Tilted Image */}
        <div className="image-col-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="tilted-wrapper glass-panel"
              whileHover={{ scale: 1.05, rotate: 0 }}
              style={{ overflow: 'hidden' }}
            >
              <div className="image-backdrop"></div>
              <motion.img 
                src={currentWork.image} 
                alt={currentWork.title.replace('\n', ' ')} 
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          </AnimatePresence>

          {/* MOBILE NAVIGATION: Floating over image edges */}
          <div className="mobile-nav-overlay mobile-only">
            <button className="text-nav-btn" onClick={prevSlide}>
              PREV <span className="nav-line"></span>
            </button>
            <button className="text-nav-btn" onClick={nextSlide}>
              <span className="nav-line"></span> NEXT
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: NEXT Button + Title/Date */}
        <div className="info-col-right">
          
          <div className="desktop-only">
            <button className="text-nav-btn" onClick={nextSlide}>
              <span className="nav-line"></span> NEXT
            </button>
          </div>
          
          <div className="title-block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2>{currentWork.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</h2>
                <p>{currentWork.date}</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

    </section>
  );
};

export default WorkPreview;
