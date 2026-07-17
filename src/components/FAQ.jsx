import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
  {
    question: "Why should I choose custom web development over a pre-built template?",
    answer: "Custom website development helps you create a special and trustworthy online presence that stands out and meets your exact business needs. It's an investment in long-term success and scalability, unlike rigid templates."
  },
  {
    question: "How long will it take to deliver my website?",
    answer: "Typically, it takes 3 to 6 weeks to complete a standard corporate website. However, the specific duration depends on the complexity and desired features. We ensure rapid, high-quality deployment."
  },
  {
    question: "Do you offer website maintenance after completion?",
    answer: "Yes. After we complete your project, we offer comprehensive website maintenance and SEO tracking to ensure your site remains current, secure, and functions smoothly."
  },
  {
    question: "How do you ensure my website loads faster?",
    answer: "We develop websites from scratch using modern frameworks (like React), which allows us to create blazing fast experiences. We optimize images, minimize code, and leverage advanced caching."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding" id="faqs">
      <div className="container">
        <div className="faq-header">
          <motion.h2 
            className="heading-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="faq-desc"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find answers to common questions about our web development and digital marketing services.
          </motion.p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
