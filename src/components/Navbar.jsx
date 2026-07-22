import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaArrowRight, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isAuthenticated, logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };
  
  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent navigating to /services immediately if clicking the chevron
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-top-glow"></div>
      <div className="container navbar-container">
        
        {/* Left Logo */}
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/logo.png" alt="Star Growth Hub" />
        </Link>
        
        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Center Pill Menu */}
        <div className={`nav-center-pill ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li className="nav-dropdown-container" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <div className="nav-dropdown-trigger">
                <Link to="/services" className={location.pathname.includes('/services') ? 'active-link' : ''} onClick={closeMobileMenu}>
                  Services
                </Link>
                <span className="dropdown-chevron" onClick={toggleDropdown}>
                  <FaChevronDown />
                </span>
              </div>
              
              {/* Dropdown Menu */}
              <div className={`nav-dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
                {servicesData.map((service) => (
                  <Link 
                    key={service.slug} 
                    to={`/services/${service.slug}`} 
                    className="dropdown-item"
                    onClick={closeMobileMenu}
                  >
                    <span className="dropdown-icon">{service.icon}</span>
                    {service.title}
                  </Link>
                ))}
              </div>
            </li>
            <li><Link to="/#process" onClick={closeMobileMenu}>Process</Link></li>
            <li><Link to="/work" className={location.pathname === '/work' ? 'active-link' : ''} onClick={closeMobileMenu}>Work</Link></li>
            <li><Link to="/blog" className={location.pathname === '/blog' ? 'active-link' : ''} onClick={closeMobileMenu}>Insights</Link></li>
            <li><Link to="/faq" className={location.pathname === '/faq' ? 'active-link' : ''} onClick={closeMobileMenu}>FAQ</Link></li>
            
            {/* Mobile Only Links (Hidden on desktop) */}
            <li className="mobile-only-link">
              {isAuthenticated ? (
                <Link to="/portal" onClick={closeMobileMenu}>Portal</Link>
              ) : (
                <Link to="/auth" onClick={closeMobileMenu}>Login</Link>
              )}
            </li>
            <li className="mobile-only-link">
              <button 
                className="mobile-nav-btn"
                onClick={() => { window.dispatchEvent(new Event('openPopup')); closeMobileMenu(); }}
              >
                Start a project
              </button>
            </li>
          </ul>
        </div>
        
        {/* Right CTA */}
        <div className="nav-cta-wrapper">
          {isAuthenticated ? (
            <div className="nav-auth-group">
              <Link to="/portal" className="nav-auth-link portal-link" onClick={closeMobileMenu}>
                <FaUser /> Portal
              </Link>
              <button onClick={() => { logout(); navigate('/'); closeMobileMenu(); }} className="nav-auth-link logout-btn" title="Logout">
                <FaSignOutAlt />
              </button>
            </div>
          ) : (
            <Link to="/auth" className="nav-auth-link login-btn" onClick={closeMobileMenu}>
              Client Login
            </Link>
          )}
          
          <button onClick={() => window.dispatchEvent(new Event('openPopup'))} className="btn btn-primary nav-cta">
            Start a project
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
