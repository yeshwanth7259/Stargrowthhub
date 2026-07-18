import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Star Growth Hub" />
        </Link>
        
        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <div className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''} onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''} onClick={closeMobileMenu}>Services</Link></li>
          <li><Link to="/work" className={location.pathname === '/work' ? 'active-link' : ''} onClick={closeMobileMenu}>Case Studies</Link></li>
          <li><Link to="/blog" className={location.pathname === '/blog' ? 'active-link' : ''} onClick={closeMobileMenu}>Blog</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''} onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
        
        <div className="nav-cta-wrapper">
          <button onClick={() => window.dispatchEvent(new Event('openPopup'))} className="btn btn-primary nav-cta">
            Get a Free Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
