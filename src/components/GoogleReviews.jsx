import React from 'react';
import { FaStar } from 'react-icons/fa';
import './GoogleReviews.css';

const GoogleLogo = () => (
  <svg className="google-logo-main" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
    <path d="M115.75,47.18c0,7.18-5.83,12.39-12.89,12.39c-7.06,0-12.89-5.21-12.89-12.39c0-7.23,5.83-12.44,12.89-12.44 C109.92,34.74,115.75,39.95,115.75,47.18z M95.42,47.18c0,4.45,3.13,7.67,7.44,7.67c4.26,0,7.44-3.22,7.44-7.67 c0-4.5-3.13-7.72-7.44-7.72C98.55,39.46,95.42,42.68,95.42,47.18z" fill="#EA4335"/>
    <path d="M143.14,47.18c0,7.18-5.83,12.39-12.89,12.39c-7.06,0-12.89-5.21-12.89-12.39c0-7.23,5.83-12.44,12.89-12.44 C137.31,34.74,143.14,39.95,143.14,47.18z M122.82,47.18c0,4.45,3.13,7.67,7.44,7.67c4.26,0,7.44-3.22,7.44-7.67 c0-4.5-3.13-7.72-7.44-7.72C125.95,39.46,122.82,42.68,122.82,47.18z" fill="#FBBC05"/>
    <path d="M167.64,35.59v22.75c0,9.37-5.35,13.2-11.83,13.2c-5.96,0-9.51-3.97-10.88-7.24l4.83-2.03 c0.85,2.03,3.13,4.55,6.06,4.55c3.97,0,6.43-2.46,6.43-7.05v-1.7h-0.19c-1.18,1.47-3.41,2.84-6.34,2.84 c-6.01,0-11.45-5.11-11.45-12.34c0-7.15,5.44-12.39,11.45-12.39c2.93,0,5.16,1.37,6.34,2.79h0.19v-2.37H167.64z M163.1,47.23 c0-4.35-2.84-7.67-6.58-7.67c-3.83,0-6.91,3.31-6.91,7.67c0,4.31,3.08,7.62,6.91,7.62C160.26,54.85,163.1,51.54,163.1,47.23z" fill="#4285F4"/>
    <path d="M182.25,23.33v35.15h-5.3v-35.15H182.25z" fill="#34A853"/>
    <path d="M205.52,47.79l-4.59-13.06h5.53l2.84,9.22h0.09l2.88-9.22h5.49l-6.86,18.82L205.52,47.79z M193.36,58.48l-5.3-17.5l-5.3,17.5 h-5.63l8.09-25.07h5.73l5.06,16.51h0.09l5.11-16.51h5.73l8.14,25.07H193.36z" fill="#5F6368"/>
    <path d="M72.93,42.42h-22.1v5.16h12.83c-0.66,2.98-3.41,8.37-12.83,8.37c-7.71,0-14.05-6.43-14.05-14.38 c0-7.95,6.34-14.38,14.05-14.38c4.4,0,7.38,1.89,9.08,3.5l4.12-4.02C80.23,23.35,74.59,20.7,67.6,20.7 c-12.3,0-22.33,10-22.33,22.33c0,12.34,10.03,22.33,22.33,22.33c12.87,0,21.43-9.03,21.43-21.85 C89.03,44.59,88.9,43.46,72.93,42.42z" fill="#4285F4"/>
  </svg>
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
        <div className="reviews-left">
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
        </div>
        
        <div className="reviews-right">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <SmallGoogleLogo />
              <h3 className="reviewer-name">{review.name}</h3>
              <p className="reviewer-subtitle">{review.subtitle}</p>
              <div className="stars-small">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
