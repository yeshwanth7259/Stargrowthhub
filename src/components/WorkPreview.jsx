import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './WorkPreview.css';

const worksData = [
  {
    id: 1,
    title: "RESTAURANT\nMANAGEMENT",
    date: "MAY 7, 2023",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "E-COMMERCE\nPLATFORM",
    date: "AUG 12, 2023",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "HEALTHCARE\nAPP",
    date: "NOV 24, 2023",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "REAL ESTATE\nPORTAL",
    date: "JAN 15, 2024",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
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
        <h2>WORK</h2>
      </div>

      {/* Giant Vertical Watermark on the Left Edge */}
      <div className="watermark-side">WORK</div>
      
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
              className="tilted-wrapper"
            >
              <div className="image-backdrop"></div>
              <img src={currentWork.image} alt={currentWork.title.replace('\n', ' ')} />
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
