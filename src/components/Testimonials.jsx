import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const dummyTestimonials = [
  {
    id: 1,
    name: "John Carter",
    role: "CEO",
    company: "Nexus Dynamics",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
    text: "The sheer creativity and technical brilliance of this team completely transformed our brand. They didn't just build a website; they engineered an experience that drove a 300% increase in engagement.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Founder",
    company: "Aura Tech",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
    text: "Unparalleled professionalism. Their approach to digital strategy is completely unique, matching modern aesthetics with powerful, data-driven backends. Absolutely unmatched in the industry.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Lumina Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    text: "I was blown away by their attention to detail. From the micro-animations to the flawless user journeys, they delivered a product that left our competitors years behind.",
    rating: 5
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "VP of Digital",
    company: "Synergy Corp",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    text: "Working with them was an absolute game-changer. They completely redefined what we thought was possible for our online presence, blending art and technology seamlessly.",
    rating: 5
  }
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <div className="section-header testimonials-header">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg">
              Client <span className="text-red-gradient">Stories</span>
            </h2>
            <p className="section-description">
              Hear from the visionaries and leaders who transformed their digital footprint with us.
            </p>
          </motion.div>
        </div>

        <motion.div 
          ref={containerRef} 
          className="testimonials-carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="testimonials-inner-carousel"
          >
            {dummyTestimonials.map((t, index) => (
              <motion.div 
                key={t.id} 
                className="testimonial-card glass-panel"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="testimonial-header">
                  <FaQuoteLeft className="quote-icon text-red-gradient" />
                  <div className="testimonial-rating">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                
                <div className="testimonial-footer">
                  <img src={t.image} alt={t.name} className="author-image" />
                  <div className="testimonial-author">
                    <h4 className="author-name">{t.name}</h4>
                    <p className="author-role">{t.role}, <span className="author-company">{t.company}</span></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="drag-hint"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <div className="drag-line"></div>
          <span>DRAG TO EXPLORE</span>
          <div className="drag-line"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
