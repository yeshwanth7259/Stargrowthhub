import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './PopupForm.css';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        // Trigger when the user scrolls past the middle of the Services section
        const triggerPoint = servicesSection.offsetTop + (servicesSection.offsetHeight / 2);
        if (window.scrollY > triggerPoint && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem('popupShown', 'true');
        }
      }
    };

    if (sessionStorage.getItem('popupShown')) {
      setHasShown(true);
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    const handleOpenPopup = () => setIsOpen(true);
    window.addEventListener('openPopup', handleOpenPopup);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openPopup', handleOpenPopup);
    };
  }, [hasShown]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    alert('Thank you! Your inquiry has been sent.');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="popup-container glass-panel"
            initial={{ scale: 0.5, y: 100, opacity: 0, rotateX: 20 }}
            animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, y: 50, opacity: 0, rotateX: -20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          >
            <button className="popup-close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
            
            <div className="popup-header">
              <h3 className="heading-md">
                Get a <span className="text-red-gradient">Free Quote</span>
              </h3>
              <p className="popup-desc">
                Tell us about your project requirements and we'll get back to you with a custom proposal!
              </p>
            </div>
            
            <form className="popup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <select required defaultValue="">
                  <option value="" disabled>What service do you need?</option>
                  <option value="web">Website Development</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="seo">SEO</option>
                  <option value="social">Social Media Management</option>
                  <option value="content">Content Creation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Project Details & Requirements" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100 popup-submit">
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
