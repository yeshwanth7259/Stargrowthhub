import React from 'react';
import './LogoMarquee.css';

const items = [
  "STAR GROWTH HUB", "✦", 
  "DYNAMIC EXPERIENCES", "✦", 
  "DIGITAL EXCELLENCE", "✦", 
  "STRATEGIC GROWTH", "✦", 
  "INNOVATION", "✦", 
  "CREATIVE SOLUTIONS", "✦", 
  "RESULTS DRIVEN", "✦"
];

const LogoMarquee = () => {
  return (
    <div className="logo-marquee-container">
      <div className="logo-rail">
        <div className="logo-rail-track">
          {/* We duplicate the array to ensure a smooth infinite scroll */}
          {[...items, ...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="logo-rail-item">
              <span className={`logo-text-placeholder ${item === "✦" ? "text-red-gradient" : ""}`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
