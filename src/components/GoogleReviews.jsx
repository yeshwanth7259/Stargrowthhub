import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './GoogleReviews.css';

const GoogleLogo = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" className="google-logo-main" />
);

const SmallGoogleLogo = () => (
  <svg className="g-logo-small" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const GoogleReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Silk and Satin Weaves",
      subtitle: "Koralla Sahithi",
      text: "I have had a wonderful experience with the website makers. They are very dedicated to their work. I recommend them."
    },
    {
      id: 2,
      name: "Out Line Arts",
      subtitle: "Murali Bala",
      text: "I'm extremely satisfied with the website design! The colors, layout, and interface are all spot-on and reflect my vision perfectly."
    },
    {
      id: 3,
      name: "We Can Interiors",
      subtitle: "Deepak Parida",
      text: "This team has a tremendous skill... They have been delivering on their commitments without fail and meeting customers expectations."
    }
  ];

  return (
    <section className="google-reviews-section">
      <div className="container reviews-container">
        <motion.div 
          className="reviews-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="google-badge">Google Reviews</div>
          <h2 className="rating-text">Rated 4.8/5</h2>
          <GoogleLogo />
          <div className="stars-main">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
          <p className="based-on">Based on <strong>250+ client reviews</strong></p>
          <a href="https://share.google/4UbBE7PGqulgomNaE" target="_blank" rel="noopener noreferrer" className="view-more-link">
            View More <FaStar style={{fontSize: '14px', color: '#174ea6'}} />
          </a>
        </motion.div>
        
        <motion.div 
          className="reviews-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {reviews.map((review, index) => (
            <motion.div 
              className="review-card" 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
            >
              <SmallGoogleLogo />
              <h3 className="reviewer-name">{review.name}</h3>
              <p className="reviewer-subtitle">{review.subtitle}</p>
              <div className="stars-small">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="review-text">{review.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
