import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTA from '../components/CTA';

const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState(null);
  const [hoveredStep, setHoveredStep] = useState(null);

  const projects = [
    { title: "NeoTech Brand Identity", category: "Branding", metric: "+240% Brand Recall", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop" },
    { title: "Flow E-Commerce", category: "Web Design", metric: "+150% Conversion Rate", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" },
    { title: "Pulse App Launch", category: "Marketing", metric: "500k+ App Downloads", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
    { title: "Aura Skincare", category: "Social Media", metric: "1.2M Organic Reach", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop" },
    { title: "Vertex SaaS Platform", category: "Web Design", metric: "3x User Retention", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop" },
    { title: "Lumina Tech Rebrand", category: "Branding", metric: "Market Share Doubled", image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop" },
  ];

  const categories = ['All', 'Branding', 'Web Design', 'Marketing', 'Social Media'];
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  const processSteps = [
    { step: "01", title: "Discovery & Audit", desc: "We tear down your current strategy to find the hidden bottlenecks and untapped opportunities." },
    { step: "02", title: "Strategy Architecture", desc: "We build a bespoke, data-driven blueprint tailored exactly to your revenue goals." },
    { step: "03", title: "Aggressive Execution", desc: "Our team deploys campaigns, launches platforms, and begins capturing market share immediately." },
    { step: "04", title: "Scale & Optimize", desc: "We don't set it and forget it. We continuously A/B test and optimize to drive CPA down and ROI up." }
  ];

  const workFaqs = [
    { q: "Do you have experience in my specific industry?", a: "We have scaled businesses across 40+ verticals, from SaaS and eCommerce to Healthcare and Real Estate. The principles of human psychology and data analytics apply universally." },
    { q: "How long do projects typically take?", a: "Web platforms usually launch in 4-8 weeks. Marketing campaigns are launched within 14 days and scaled iteratively over the following months." },
  ];

  return (
    <main className="page-transition">
      <div className="page-header services-hero" style={{ position: 'relative', height: '45vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.2 }}></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(3,3,3,0.95) 0%, rgba(229,9,20,0.15) 100%)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontSize: '0.9rem' }}>Case Studies</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, textTransform: 'capitalize', letterSpacing: '-1px', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Our <span className="text-red-gradient">Work</span>
            </h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
              Explore how we've helped ambitious brands transform their digital presence and shatter revenue ceilings.
            </p>
          </motion.div>
        </div>
      </div>
      
      <section className="section-padding responsive-section-padding" style={{ position: 'relative', zIndex: 2, backgroundColor: 'var(--primary-black)' }}>
        <div className="container">
          
          {/* Filter Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.8rem 2rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: activeCategory === cat ? 'var(--primary-red)' : 'rgba(255,255,255,0.05)',
                  color: activeCategory === cat ? 'white' : 'var(--text-gray)',
                  border: activeCategory === cat ? '1px solid var(--primary-red)' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: activeCategory === cat ? '0 10px 20px rgba(229,9,20,0.3)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '4rem' }}>
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div 
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  style={{ position: 'relative', group: 'true' }}
                >
                  <div style={{ overflow: 'hidden', borderRadius: '15px', marginBottom: '1.5rem', aspectRatio: '4/3', position: 'relative' }}>
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'var(--primary-red)', padding: '0.5rem 1rem', borderRadius: '50px', fontWeight: 800, fontSize: '0.9rem', color: 'white', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>
                      {project.metric}
                    </div>
                  </div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--primary-white)' }}>{project.title}</h3>
                  <p style={{ color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>{project.category}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="section-padding responsive-section-padding" style={{ backgroundColor: 'var(--secondary-black)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textAlign: 'center', marginBottom: '5rem' }}>Our Proven <span className="text-red-gradient">Process</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                style={{ 
                  background: 'rgba(25,25,25,0.6)', 
                  backdropFilter: 'blur(10px)',
                  padding: '3rem 2.5rem', 
                  borderRadius: '24px', 
                  border: hoveredStep === i ? '1px solid rgba(229,9,20,0.5)' : '1px solid rgba(255,255,255,0.05)', 
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  opacity: (hoveredStep !== null && hoveredStep !== i) ? 0.3 : 1,
                  transform: hoveredStep === i ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: hoveredStep === i ? '0 20px 40px rgba(229,9,20,0.15)' : '0 10px 30px rgba(0,0,0,0.2)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                {/* Giant Animated Watermark Number */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: hoveredStep === i ? '-10px' : '-20px', 
                  right: hoveredStep === i ? '-10px' : '-20px', 
                  fontSize: '8rem', 
                  fontWeight: 900, 
                  lineHeight: 1,
                  color: hoveredStep === i ? 'rgba(229,9,20,0.1)' : 'rgba(255,255,255,0.03)',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  zIndex: 0,
                  pointerEvents: 'none'
                }}>
                  {step.step}
                </div>
                
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ 
                    color: hoveredStep === i ? 'var(--primary-white)' : 'var(--primary-red)', 
                    fontSize: '1.2rem', 
                    fontWeight: 900, 
                    marginBottom: '1rem',
                    transition: 'color 0.4s ease'
                  }}>
                    STEP {step.step}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-white)', marginBottom: '1rem', letterSpacing: '-0.5px' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '1.05rem' }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding responsive-section-padding" style={{ backgroundColor: 'var(--primary-black)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textAlign: 'center', marginBottom: '5rem' }}>Client <span className="text-red-gradient">FAQs</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {workFaqs.map((faq, i) => (
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
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
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

export default WorkPage;
