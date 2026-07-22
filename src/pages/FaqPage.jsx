import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTA from '../components/CTA';

const FaqPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const agencyFaqs = [
    { 
      q: "How much does it cost to hire a digital marketing agency?", 
      a: "The cost of hiring a digital marketing agency depends entirely on your goals, the scope of work, and the specific services you need (like SEO, Paid Ads, or Web Dev). We offer custom-tailored retainer packages designed to maximize your ROI rather than one-size-fits-all pricing." 
    },
    { 
      q: "How long does it take to see results from digital marketing?", 
      a: "Timelines vary by channel. Paid advertising (Google Ads, Meta Ads) can drive traffic and leads almost instantly. Organic strategies like SEO and Content Marketing typically take 3 to 6 months to show significant compounding growth." 
    },
    { 
      q: "What digital marketing services do you offer?", 
      a: "We are a full-stack growth agency. Our core services include Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Social Media Marketing, Content Creation, Web Design & Development, and CRM Software Integration." 
    },
    { 
      q: "How do you measure the success of a marketing campaign?", 
      a: "We focus on the metrics that actually move the needle: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and overall Revenue Growth. We provide transparent, real-time analytics dashboards so you always know your numbers." 
    },
    { 
      q: "Why should I hire an agency instead of building an in-house team?", 
      a: "Hiring an in-house team requires recruiting, training, and paying salaries for a strategist, copywriter, designer, developer, and media buyer. By partnering with us, you get instant access to an entire team of seasoned experts for a fraction of the total cost." 
    },
    { 
      q: "Do you work with small startups or established enterprise brands?", 
      a: "We partner with ambitious companies of all sizes. Whether you are a funded startup looking to scale aggressively or an established enterprise aiming to modernize your digital presence, we build strategies tailored to your current growth stage." 
    }
  ];

  return (
    <main className="page-transition">
      <div className="page-header services-hero" style={{ position: 'relative', minHeight: '60vh', paddingTop: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.15 }}></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(3,3,3,0.95) 0%, rgba(229,9,20,0.15) 100%)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          >
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontSize: '0.9rem' }}>Knowledge Base</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, textTransform: 'capitalize', letterSpacing: '-1px', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Agency <span className="text-red-gradient">FAQs</span>
            </h1>
            <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
              Everything you need to know about partnering with our digital marketing agency to scale your brand.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding responsive-section-padding" style={{ backgroundColor: 'var(--primary-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {agencyFaqs.map((faq, i) => (
              <motion.div 
                key={i}
                style={{ 
                  background: 'var(--primary-white)', 
                  borderRadius: '15px', 
                  border: openFaq === i ? '1px solid rgba(229,9,20,0.5)' : '1px solid rgba(0,0,0,0.1)', 
                  overflow: 'hidden', 
                  cursor: 'pointer',
                  boxShadow: openFaq === i ? '0 10px 30px rgba(0,0,0,0.05)' : 'none',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div style={{ padding: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.3rem', margin: 0, color: openFaq === i ? 'var(--primary-red)' : 'var(--primary-black)', transition: 'color 0.3s ease', fontWeight: 800 }}>{faq.q}</h4>
                  <span style={{ 
                    fontSize: '1.2rem', 
                    color: openFaq === i ? 'var(--primary-red)' : '#888', 
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
                        <p style={{ color: '#555', lineHeight: 1.7, margin: 0, fontSize: '1.1rem' }}>{faq.a}</p>
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

export default FaqPage;
