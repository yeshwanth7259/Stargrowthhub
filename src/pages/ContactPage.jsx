import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <main className="page-transition">
      <div className="page-header services-hero" style={{ position: 'relative', minHeight: '60vh', paddingTop: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {/* Digital Marketing / Strategy Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.15 }}></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(3,3,3,0.95) 0%, rgba(229,9,20,0.15) 100%)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontSize: '0.9rem' }}>Reach Out</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, textTransform: 'capitalize', letterSpacing: '-1px', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Let's <span className="text-red-gradient">Connect</span>
            </h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
              Ready to dominate your market? Drop us a line and let's start building your digital empire.
            </p>
          </motion.div>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Contact />
      </div>
    </main>
  );
};

export default ContactPage;
