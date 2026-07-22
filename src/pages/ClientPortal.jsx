import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { FaFileInvoiceDollar, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import './ClientPortal.css';

const ClientPortal = () => {
  const { currentUser, isAuthenticated } = useAuth();
  
  const [selectedServices, setSelectedServices] = useState([]);
  const [timeline, setTimeline] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // If not logged in, redirect to auth
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  const servicesList = [
    "SEO Optimization",
    "Social Media Management",
    "Google Ads (PPC)",
    "Content Marketing",
    "Web Development",
    "CRM Integration"
  ];

  const handleServiceToggle = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/stargrowthhub@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Quotation Request from ${currentUser.name}`,
          ClientName: currentUser.name,
          ClientEmail: currentUser.email,
          ClientCompany: currentUser.company || 'Not Provided',
          ClientPhone: currentUser.phone || 'Not Provided',
          ServicesRequested: selectedServices.join(', '),
          ProjectTimeline: timeline,
          ProjectDetails: details
        })
      });

      if (response.ok) {
        setSuccess(true);
        setSelectedServices([]);
        setTimeline('');
        setDetails('');
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert("Failed to submit request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="portal-page">
      <div className="container">
        
        <motion.div 
          className="portal-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Welcome, <span className="text-red">{currentUser.name}</span>.</h1>
          <p>This is your secure client dashboard. Request a new quotation below.</p>
        </motion.div>

        <div className="portal-grid">
          
          {/* Dashboard Sidebar / Info */}
          <motion.div 
            className="portal-sidebar glass-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Account Details</h3>
            <div className="account-info">
              <p><strong>Email:</strong> {currentUser.email}</p>
              {currentUser.company && <p><strong>Company:</strong> {currentUser.company}</p>}
              {currentUser.phone && <p><strong>Phone:</strong> {currentUser.phone}</p>}
              <div className="status-badge">
                <span className="dot active"></span> Active Account
              </div>
            </div>
          </motion.div>

          {/* Quotation Form */}
          <motion.div 
            className="portal-main glass-panel"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="portal-form-header">
              <FaFileInvoiceDollar className="form-icon" />
              <h2>Request a Quotation</h2>
            </div>
            
            {success ? (
              <motion.div 
                className="success-message"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <FaCheckCircle className="success-icon" />
                <h3>Request Sent Successfully!</h3>
                <p>Our team will review your details and email you a custom quotation shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="quotation-form">
                
                <div className="form-group">
                  <label>Select Services Needed:</label>
                  <div className="services-checkbox-grid">
                    {servicesList.map(service => (
                      <div 
                        key={service} 
                        className={`service-checkbox ${selectedServices.includes(service) ? 'selected' : ''}`}
                        onClick={() => handleServiceToggle(service)}
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Timeline (Optional):</label>
                  <select value={timeline} onChange={(e) => setTimeline(e.target.value)} className="portal-select">
                    <option value="">Select a timeline...</option>
                    <option value="ASAP (Within 1 month)">ASAP (Within 1 month)</option>
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="6+ Months">6+ Months</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Project Details & Goals:</label>
                  <textarea 
                    placeholder="Tell us what you want to achieve..." 
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={loading || selectedServices.length === 0}>
                  {loading ? <FaSpinner className="spinner" /> : "Submit Request"}
                </button>
                {selectedServices.length === 0 && (
                  <p className="form-error-msg">Please select at least one service.</p>
                )}

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
