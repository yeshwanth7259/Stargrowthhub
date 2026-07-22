import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  // Generate random bubbles
  const bubbles = Array.from({ length: 6 }).map((_, i) => {
    const size = Math.random() * 300 + 100; // Between 100px and 400px
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = Math.random() * 20 + 10; // Between 10s and 30s
    const delay = Math.random() * 5;
    
    // Choose between primary red and a deeper crimson/purple tone
    const isRed = Math.random() > 0.5;
    const bgClass = isRed ? 'bubble-red' : 'bubble-dark';

    return { id: i, size, left, top, duration, delay, bgClass };
  });

  return (
    <div className="animated-bg-container">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className={`bg-bubble ${b.bgClass}`}
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}vw`,
            top: `${b.top}vh`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="bg-noise"></div>
    </div>
  );
};

export default AnimatedBackground;
