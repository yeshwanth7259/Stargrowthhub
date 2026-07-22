import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaBuilding, FaPhoneAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        // Mock Login
        login(email);
        setTimeout(() => navigate('/portal'), 800);
      } else {
        // Real Email Sending via FormSubmit (AJAX)
        const response = await fetch("https://formsubmit.co/ajax/stargrowthhub@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: "New Client Registration!",
            Name: name,
            Email: email,
            Phone: phone,
            Company: company
          })
        });

        if (response.ok) {
          signup({ name, email, phone, company });
          navigate('/portal');
        } else {
          alert("Registration failed. Please try again.");
        }
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="container auth-container">
        
        {/* 3D Scene Container */}
        <div className="auth-3d-scene" style={{ perspective: "1200px" }}>
          <motion.div
            className="auth-card glass-panel"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="auth-card-inner">
              
              <div className="auth-header">
                <h2>{isLogin ? "Welcome Back." : "Join the Elite."}</h2>
                <p>{isLogin ? "Access your client portal." : "Register to start your growth journey."}</p>
              </div>

              <form onSubmit={handleSubmit} className="auth-form">
                
                <AnimatePresence mode="popLayout">
                  {!isLogin && (
                    <motion.div
                      key="signup-fields"
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="expanded-fields"
                    >
                      <div className="input-group">
                        <FaUser className="input-icon" />
                        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                      </div>
                      <div className="input-group">
                        <FaBuilding className="input-icon" />
                        <input type="text" placeholder="Company Name" value={company} onChange={(e) => setCompany(e.target.value)} required />
                      </div>
                      <div className="input-group">
                        <FaPhoneAlt className="input-icon" />
                        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="input-group">
                  <FaEnvelope className="input-icon" />
                  <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                
                <div className="input-group">
                  <FaLock className="input-icon" />
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit" className="btn btn-primary btn-auth w-100" disabled={loading}>
                  {loading ? "Processing..." : (isLogin ? "Login to Portal" : "Register Now")}
                </button>

              </form>

              <div className="auth-footer">
                <p>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button type="button" className="auth-switch-btn" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Sign Up" : "Login"}
                  </button>
                </p>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;
