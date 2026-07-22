import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './PrivacyPolicyPage.css';

const faqs = [
  {
    question: "How do you protect my data?",
    answer: "We use industry-standard encryption, secure cloud servers, and strict access controls to ensure your personal and business data is always protected."
  },
  {
    question: "Do you sell my data to third parties?",
    answer: "Absolutely not. We only share data with trusted advertising partners (like Google and Meta) strictly for the purpose of executing your marketing campaigns."
  },
  {
    question: "Can I request to delete my data?",
    answer: "Yes, in accordance with GDPR and CCPA, you can request full deletion of your data at any time by contacting privacy@stargrowthhub.com."
  },
  {
    question: "How long do you retain data?",
    answer: "We retain campaign and performance data for as long as your account is active. After termination, we securely delete or anonymize personal data within 90 days."
  }
];

const PrivacyPolicyPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  return (
    <div className="privacy-page-container">
      <div className="privacy-header">
        <motion.h1 
          className="privacy-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p 
          className="privacy-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We value your privacy as much as we value your business. Here is how Star Growth Hub handles your data.
        </motion.p>
        <motion.div 
          className="last-updated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Last Updated: {new Date().toLocaleDateString()}
        </motion.div>
      </div>

      <motion.div 
        className="privacy-cards-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Card 1 */}
        <motion.div className="policy-card-modern" variants={itemVariants}>
          <div className="card-icon-modern">01</div>
          <h2>Introduction</h2>
          <p>
            Star Growth Hub ("we," "our," or "us") is a full-service digital marketing agency. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website or use our services.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div className="policy-card-modern" variants={itemVariants}>
          <div className="card-icon-modern">02</div>
          <h2>Information We Collect</h2>
          <p>We collect information voluntarily provided by you:</p>
          <ul>
            <li><strong>Personal Data:</strong> Names, emails, and phone numbers.</li>
            <li><strong>Business Data:</strong> URLs, goals, and campaign metrics.</li>
            <li><strong>Analytics:</strong> IP addresses and device info.</li>
          </ul>
        </motion.div>

        {/* Card 3 */}
        <motion.div className="policy-card-modern" variants={itemVariants}>
          <div className="card-icon-modern">03</div>
          <h2>How We Use Your Data</h2>
          <p>We use your information strictly to:</p>
          <ul>
            <li>Deliver targeted marketing campaigns (SEO, PPC).</li>
            <li>Provide performance analytics and reports.</li>
            <li>Manage contracts, billing, and support requests.</li>
          </ul>
        </motion.div>

        {/* Card 4 */}
        <motion.div className="policy-card-modern" variants={itemVariants}>
          <div className="card-icon-modern">04</div>
          <h2>Data Sharing</h2>
          <p>We never sell your data. We only share it with:</p>
          <ul>
            <li><strong>Ad Partners:</strong> Google, Meta, LinkedIn.</li>
            <li><strong>Tools:</strong> Google Analytics, HubSpot.</li>
            <li><strong>Providers:</strong> Cloud hosting & CRMs.</li>
          </ul>
        </motion.div>

        {/* Card 5 */}
        <motion.div className="policy-card-modern" variants={itemVariants}>
          <div className="card-icon-modern">05</div>
          <h2>Cookies & Tracking</h2>
          <p>
            We use cookies to improve your site experience and track aggregate usage. 
            You can disable cookies in your browser settings, though some site features may not function optimally.
          </p>
        </motion.div>

        {/* Card 6 */}
        <motion.div className="policy-card-modern" variants={itemVariants}>
          <div className="card-icon-modern">06</div>
          <h2>Your Privacy Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data. 
            To exercise these rights under GDPR/CCPA, please contact our support team.
          </p>
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        className="privacy-faq-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openFaq === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  {openFaq === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div 
                    className="faq-answer-wrapper"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicyPage;
