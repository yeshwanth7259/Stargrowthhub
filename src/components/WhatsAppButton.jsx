import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber = "918904823979", message = "Hello!" }) => {
  return (
    <div className="whatsapp-container">
      <div className="whatsapp-tooltip">Chat with us!</div>
      <a 
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <span className="ping-ring"></span>
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;
