import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WorkPreview.css';

const worksData = [
  {
    id: 1,
    title: "JAPANESE\nCUISINE",
    date: "MAY 7, 2023",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "E-COMMERCE\nPLATFORM",
    date: "AUG 12, 2023",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "HEALTHCARE\nAPP",
    date: "NOV 24, 2023",
    image: "https://images.unsplash.com/photo-1551076805-e18690c5e561?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "REAL ESTATE\nPORTAL",
    date: "JAN 15, 2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
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
      <div className="bg-text-wrapper">
        <h1 className="bg-text-main">WORK</h1>
        <h1 className="bg-text-right">WORK</h1>
      </div>
      
      <div className="circle-decoration"></div>
      <div className="dot-decoration"></div>
      
      <div className="work-interactive-container">
        
        <div className="nav-area nav-left">
          <button className="text-nav-btn" onClick={prevSlide}>
            PREV <span className="nav-line"></span>
          </button>
        </div>

        <div className="center-image-area">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="tilted-image-wrapper"
            >
              <div className="image-backdrop"></div>
              <img src={currentWork.image} alt={currentWork.title.replace('\n', ' ')} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="nav-area nav-right">
          <button className="text-nav-btn" onClick={nextSlide}>
            <span className="nav-line"></span> NEXT
          </button>
          
          <div className="work-info-overlay">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="work-details"
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
