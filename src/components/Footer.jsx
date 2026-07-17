import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container footer-container">
        
        {/* Column 1: Brand */}
        <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="Star Growth Hub" />
            </Link>
          <p className="footer-desc">
            We help businesses grow online with data-driven strategies, creative campaigns, and measurable results.
          </p>
          <div className="social-links">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/work">Case Studies</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col">
          <h4 className="footer-title">Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">SEO</Link></li>
            <li><Link to="/services">Social Media Marketing</Link></li>
            <li><Link to="/services">Google Ads & PPC</Link></li>
            <li><Link to="/services">Content Marketing</Link></li>
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">Analytics & Reporting</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h4 className="footer-title">Let's Talk Growth</h4>
          <p className="footer-desc">Have a project in mind? Let's make it happen.</p>
          <div className="contact-info">
            <p><FaPhoneAlt className="footer-contact-icon" /> +1 123 456 65710</p>
            <p><FaEnvelope className="footer-contact-icon" /> hello@stargrowthhub.com</p>
            <p><FaMapMarkerAlt className="footer-contact-icon" /> Bangalore, India</p>
          </div>
          <Link to="/contact" className="btn btn-primary footer-btn">
            Get a Free Quote
          </Link>
        </div>

      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} Star Growth Hub. All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
