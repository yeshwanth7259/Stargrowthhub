import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPlus, FaMinus, FaArrowRight } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (window.innerWidth <= 768) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  return (
    <footer className="footer-premium">
      
      {/* Massive CTA Section */}
      <div className="footer-cta-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="footer-cta-content"
          >
            <h2 className="footer-huge-text">
              Ready to <span className="text-red-gradient">Dominate?</span>
            </h2>
            <p className="footer-cta-subtext">Stop chasing trends. Start capturing market share.</p>
            <button 
              onClick={() => window.dispatchEvent(new Event('openPopup'))} 
              className="btn btn-primary btn-massive"
              style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Start Your Project <FaArrowRight style={{ marginLeft: '10px' }} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-main">
        <div className="container footer-grid">
          
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="Star Growth Hub" />
            </Link>
            <p className="footer-brand-desc">
              Data-driven strategies and aggressive execution for brands that refuse to settle for average.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://www.instagram.com/p/DaXgWTtkvbN/?img_index=1" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://www.facebook.com/profile.php?id=61591562553581" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.youtube.com/@StarGrowthhub-z9q" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>

          {/* Quick Links (Accordion on Mobile) */}
          <div className="footer-nav-col">
            <div className="footer-nav-header" onClick={() => toggleSection('links')}>
              <h4>Quick Links</h4>
              <span className="mobile-toggle-icon">{openSection === 'links' ? <FaMinus /> : <FaPlus />}</span>
            </div>
            <div className={`footer-nav-list-wrapper ${openSection === 'links' ? 'open' : ''}`}>
              <ul className="footer-nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/work">Case Studies</Link></li>
                <li><Link to="/blog">Insights</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
          </div>

          {/* Services (Accordion on Mobile) */}
          <div className="footer-nav-col">
            <div className="footer-nav-header" onClick={() => toggleSection('services')}>
              <h4>Expertise</h4>
              <span className="mobile-toggle-icon">{openSection === 'services' ? <FaMinus /> : <FaPlus />}</span>
            </div>
            <div className={`footer-nav-list-wrapper ${openSection === 'services' ? 'open' : ''}`}>
              <ul className="footer-nav-list">
                <li><Link to="/services/seo">Search Engine Optimization</Link></li>
                <li><Link to="/services/google-ads">Performance Marketing</Link></li>
                <li><Link to="/services/social-media-marketing">Social Media Scaling</Link></li>
                <li><Link to="/services/web-development">High-Converting Web Design</Link></li>
                <li><Link to="/services/crm-integration">CRM Integration</Link></li>
                <li><Link to="/services/content-marketing">Content Marketing</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-col">
            <h4>Global HQ</h4>
            <ul className="footer-contact-list">
              <li>
                <div className="contact-icon-box"><FaMapMarkerAlt /></div>
                <span>Tech Park, Bengaluru, India</span>
              </li>
              <li>
                <div className="contact-icon-box"><FaPhoneAlt /></div>
                <a href="tel:+918904823979">+91 89048 23979</a>
              </li>
              <li>
                <div className="contact-icon-box"><FaEnvelope /></div>
                <a href="mailto:stargrowthhub@gmail.com">stargrowthhub@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-bar">
        <div className="container">
          <div className="footer-bottom-flex">
            <p>&copy; {new Date().getFullYear()} Star Growth Hub. Designed for Growth.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
