import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './TermsOfServicePage.css';

const termsFaqs = [
  {
    question: "What happens if I want to cancel my contract?",
    answer: "You may terminate your agreement with 30 days written notice. Any outstanding invoices for services rendered up to the termination date will become immediately due."
  },
  {
    question: "Who owns the marketing assets you create?",
    answer: "Once full payment is received, you retain full ownership of all final deliverables, including ad creatives, website code, and content. We retain the right to showcase the work in our portfolio."
  },
  {
    question: "Do you guarantee specific ROI or rankings?",
    answer: "While we use data-driven strategies to maximize your success, digital platforms are unpredictable. Therefore, we do not guarantee specific rankings, traffic numbers, or financial returns."
  },
  {
    question: "When are payments due?",
    answer: "Invoices are typically issued at the beginning of each month for retainer services. Payment is due within 14 days of the invoice date unless otherwise specified in your contract."
  }
];

const TermsOfServicePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="terms-page-container">
      <div className="terms-header">
        <motion.h1 
          className="terms-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Terms of Service
        </motion.h1>
        <motion.p 
          className="terms-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Please read these terms carefully. By partnering with Star Growth Hub, you agree to the following conditions designed to ensure a successful and transparent relationship.
        </motion.p>
        <motion.div 
          className="last-updated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Last Updated: {new Date().toLocaleDateString()}
        </motion.div>
      </div>

      <motion.div 
        className="terms-content-layout"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* Section 1 */}
        <motion.div className="terms-section-card" variants={itemVariants}>
          <div className="section-number">01</div>
          <h2>Services Rendered</h2>
          <p>
            Star Growth Hub agrees to provide digital marketing services as outlined in your specific Statement of Work (SOW) or proposal. These services may include SEO, performance marketing, social media management, web design, or CRM integration. We reserve the right to refuse service to any project that violates our ethical standards.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div className="terms-section-card" variants={itemVariants}>
          <div className="section-number">02</div>
          <h2>Client Responsibilities</h2>
          <p>
            For us to execute effectively, you agree to:
          </p>
          <ul>
            <li>Provide timely access to necessary assets, logins, and approvals.</li>
            <li>Assign a primary point of contact for project communications.</li>
            <li>Ensure that any materials provided to us (logos, images, text) do not infringe on third-party copyrights.</li>
          </ul>
        </motion.div>

        {/* Section 3 */}
        <motion.div className="terms-section-card" variants={itemVariants}>
          <div className="section-number">03</div>
          <h2>Payment Terms</h2>
          <p>
            Fees for our services are detailed in your contract. All invoices are payable within 14 days of receipt. Late payments may incur a penalty fee of 1.5% per month. We reserve the right to pause active campaigns or withhold deliverables if payments are severely delayed.
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div className="terms-section-card" variants={itemVariants}>
          <div className="section-number">04</div>
          <h2>Intellectual Property</h2>
          <p>
            Upon receipt of full payment, you obtain full ownership of the final deliverables created specifically for your project. However, Star Growth Hub retains ownership of pre-existing tools, proprietary frameworks, and generalized code structures used during development. We also reserve the right to feature the completed work in our public portfolio and case studies.
          </p>
        </motion.div>

        {/* Section 5 */}
        <motion.div className="terms-section-card" variants={itemVariants}>
          <div className="section-number">05</div>
          <h2>Limitation of Liability</h2>
          <p>
            Star Growth Hub shall not be liable for any indirect, incidental, or consequential damages arising out of our services, including lost profits or data loss. Our maximum liability under any circumstance is limited to the total amount paid by you for the specific services in question over the preceding 3 months.
          </p>
        </motion.div>

        {/* Section 6 */}
        <motion.div className="terms-section-card" variants={itemVariants}>
          <div className="section-number">06</div>
          <h2>Termination</h2>
          <p>
            Either party may terminate the agreement with 30 days written notice. In the event of termination, the client is responsible for paying for all work completed up to the termination date. Ad spend commitments directly with platforms (e.g., Google Ads) remain the client's responsibility.
          </p>
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div 
        className="terms-faq-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="faq-title">Clarifications & FAQs</h2>
        <div className="faq-container">
          {termsFaqs.map((faq, index) => (
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

export default TermsOfServicePage;
