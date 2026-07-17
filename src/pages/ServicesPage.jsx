import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Services from '../components/Services';
import CTA from '../components/CTA';

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const serviceFaqs = [
    { q: "How quickly will I see results from SEO?", a: "SEO is a long-term strategy. While technical fixes can show immediate improvements, significant organic growth usually takes 3 to 6 months of consistent effort." },
    { q: "Do you offer custom service packages?", a: "Yes, every business is unique. We conduct an initial audit to determine exactly which channels will drive the highest ROI for your specific situation and budget." },
    { q: "What is your approach to paid advertising?", a: "We believe in testing quickly and scaling profitably. We use hyper-targeted audiences and rigorous A/B testing to ensure your Cost Per Acquisition (CPA) is as low as possible." },
  ];

  return (
    <main className="page-transition">
      <div className="page-header services-hero" style={{ position: 'relative', minHeight: '60vh', paddingTop: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.2 }}></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(3,3,3,0.95) 0%, rgba(229,9,20,0.15) 100%)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontSize: '0.9rem' }}>Elevate Your Brand</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, textTransform: 'capitalize', letterSpacing: '-1px', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Our <span className="text-red-gradient">Services</span>
            </h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
              Discover our comprehensive suite of digital marketing solutions designed to scale your business and dominate your market.
            </p>
          </motion.div>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <Services />
      </div>

      <section className="section-padding responsive-section-padding" style={{ backgroundColor: 'var(--primary-white)', color: 'var(--primary-black)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, textAlign: 'center', textTransform: 'uppercase', marginBottom: '6rem', letterSpacing: '-1px' }}>
            Full-Stack <span style={{ color: 'var(--primary-red)' }}>Growth Engine</span>
          </h2>
          
          <div className="grid-2-col" style={{ alignItems: 'center', marginBottom: '10rem' }}>
            <motion.div 
              style={{ overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" alt="SEO Data" style={{ width: '100%', display: 'block' }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--primary-black)' }}>Data-Driven SEO</h3>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#555', marginBottom: '1rem' }}>
                We don't guess. We analyze, iterate, and conquer search engine rankings. Our SEO strategies are built on deep technical audits and high-converting content architectures.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, color: '#333', fontSize: '1.1rem' }}>
                <li style={{ marginBottom: '0.8rem' }}><span style={{ color: 'var(--primary-red)', marginRight: '10px' }}>✓</span> Comprehensive Keyword Research</li>
                <li style={{ marginBottom: '0.8rem' }}><span style={{ color: 'var(--primary-red)', marginRight: '10px' }}>✓</span> Technical Site Speed Optimization</li>
                <li style={{ marginBottom: '0.8rem' }}><span style={{ color: 'var(--primary-red)', marginRight: '10px' }}>✓</span> High-Authority Link Building</li>
              </ul>
            </motion.div>
          </div>

          <div className="grid-2-col" style={{ alignItems: 'center' }}>
            <motion.div 
              style={{ order: 2, overflow: 'hidden', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Web Dev" style={{ width: '100%', display: 'block' }} />
            </motion.div>
            <motion.div 
              style={{ order: 1 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--primary-black)' }}>Immersive Web Platforms</h3>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#555', marginBottom: '1rem' }}>
                A website should be an experience, not a brochure. We build high-performance, dynamic platforms using the latest frameworks to captivate your audience and drive massive conversions.
              </p>
              <ul style={{ listStyleType: 'none', padding: 0, color: '#333', fontSize: '1.1rem' }}>
                <li style={{ marginBottom: '0.8rem' }}><span style={{ color: 'var(--primary-red)', marginRight: '10px' }}>✓</span> Custom React/Next.js Development</li>
                <li style={{ marginBottom: '0.8rem' }}><span style={{ color: 'var(--primary-red)', marginRight: '10px' }}>✓</span> Conversion Rate Optimization (CRO)</li>
                <li style={{ marginBottom: '0.8rem' }}><span style={{ color: 'var(--primary-red)', marginRight: '10px' }}>✓</span> Fluid Micro-Animations</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding responsive-section-padding" style={{ backgroundColor: 'var(--secondary-black)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textAlign: 'center', marginBottom: '5rem' }}>Service <span className="text-red-gradient">FAQs</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {serviceFaqs.map((faq, i) => (
              <motion.div 
                key={i}
                style={{ 
                  background: 'var(--tertiary-black)', 
                  borderRadius: '15px', 
                  border: openFaq === i ? '1px solid rgba(229,9,20,0.3)' : '1px solid rgba(255,255,255,0.05)', 
                  overflow: 'hidden', 
                  cursor: 'pointer',
                  boxShadow: openFaq === i ? '0 10px 30px rgba(0,0,0,0.3)' : 'none',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div style={{ padding: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.3rem', margin: 0, color: openFaq === i ? 'var(--primary-red)' : 'var(--primary-white)', transition: 'color 0.3s ease' }}>{faq.q}</h4>
                  <span style={{ 
                    fontSize: '1.2rem', 
                    color: openFaq === i ? 'var(--primary-red)' : 'var(--text-gray)', 
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', 
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
                  }}>
                    ▼
                  </span>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      <div style={{ padding: '0 2.5rem 2.5rem 2.5rem' }}>
                        <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, margin: 0, fontSize: '1.1rem' }}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default ServicesPage;
