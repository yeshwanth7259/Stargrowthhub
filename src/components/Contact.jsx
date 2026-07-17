import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await emailjs.send(
        'service_6h11d3p',
        'template_g6vp53f',
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        '2hRzuO4rnjzXExfDH'
      );
      
      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="contact section-padding responsive-section-padding">
      <div className="container">
        <div className="grid-2-col" style={{ alignItems: 'flex-start' }}>
          
          {/* Left Side: Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
                Start The <span className="text-red-gradient">Conversation</span>
              </h2>
              <p className="contact-description" style={{ marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--text-gray)' }}>
                Whether you have a question, a project in mind, or just want to say hi, we're always ready to listen.
              </p>
            </div>
            
            {/* Email Card */}
            <a href="mailto:stargrowthhub@gmail.com" style={{ textDecoration: 'none' }}>
              <motion.div 
                whileHover={{ scale: 1.02, x: 10, borderColor: 'rgba(229,9,20,0.5)', boxShadow: '0 20px 40px rgba(229,9,20,0.1)' }}
                style={{ background: 'var(--tertiary-black)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'all 0.4s ease' }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(229,9,20,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-red)', fontSize: '1.5rem' }}>
                  <FaEnvelope />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-gray)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Email Us</h4>
                  <p style={{ color: 'var(--primary-white)', fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>stargrowthhub@gmail.com</p>
                </div>
              </motion.div>
            </a>
            
            {/* Phone Card */}
            <a href="tel:+918904823979" style={{ textDecoration: 'none' }}>
              <motion.div 
                whileHover={{ scale: 1.02, x: 10, borderColor: 'rgba(229,9,20,0.5)', boxShadow: '0 20px 40px rgba(229,9,20,0.1)' }}
                style={{ background: 'var(--tertiary-black)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'all 0.4s ease' }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(229,9,20,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-red)', fontSize: '1.5rem' }}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 style={{ color: 'var(--text-gray)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Call Us</h4>
                  <p style={{ color: 'var(--primary-white)', fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>+91 89048 23979</p>
                </div>
              </motion.div>
            </a>

            {/* Interactive Location/Map Card */}
            <a href="https://maps.app.goo.gl/erNNAPHK8Ref2TKq9" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <motion.div 
                whileHover={{ scale: 1.02, x: 10, borderColor: 'rgba(229,9,20,0.5)', boxShadow: '0 20px 40px rgba(229,9,20,0.1)' }}
                style={{ background: 'var(--tertiary-black)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative', overflow: 'hidden', transition: 'all 0.4s ease' }}
              >
                {/* Subtle map background watermark */}
                <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1, pointerEvents: 'none', transform: 'scale(1.5) translate(20%, -20%)' }}>
                  <FaMapMarkerAlt size={150} />
                </div>
                
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(229,9,20,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-red)', fontSize: '1.5rem', position: 'relative', zIndex: 1 }}>
                  <FaMapMarkerAlt />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h4 style={{ color: 'var(--text-gray)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Headquarters</h4>
                  <p style={{ color: 'var(--primary-white)', fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>Star Growth Hub, India</p>
                  <span style={{ color: 'var(--primary-red)', fontSize: '0.8rem', fontWeight: 700, display: 'block', marginTop: '0.5rem' }}>↗ OPEN IN GOOGLE MAPS</span>
                </div>
              </motion.div>
            </a>

          </motion.div>

          {/* Right Side: Glassmorphic Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              background: 'rgba(20, 20, 20, 0.6)', 
              backdropFilter: 'blur(20px)',
              padding: '3rem', 
              borderRadius: '24px', 
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
              position: 'relative'
            }}
          >
            {/* Decorative Glow */}
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'rgba(229,9,20,0.3)', filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none' }}></div>
            
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary-white)' }}>Send a Message</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  style={{ width: '100%', padding: '1.2rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none', transition: 'border-color 0.3s ease' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  style={{ width: '100%', padding: '1.2rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none', transition: 'border-color 0.3s ease' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '1.2rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none', appearance: 'none', transition: 'border-color 0.3s ease' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                >
                  <option value="" disabled style={{ color: 'var(--text-gray)' }}>Select a Service</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="social-media">Social Media Marketing</option>
                  <option value="web-dev">Web Development</option>
                  <option value="ppc">Pay-Per-Click Advertising</option>
                  <option value="content">Content Marketing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  style={{ width: '100%', padding: '1.2rem', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', outline: 'none', resize: 'vertical', transition: 'border-color 0.3s ease' }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary-red)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={status === 'loading'}
                style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', fontSize: '1.1rem', marginTop: '1rem', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
              >
                {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="form-message success" style={{ color: '#4ade80', marginTop: '1rem', textAlign: 'center' }}>
                  Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="form-message error" style={{ color: 'var(--primary-red)', marginTop: '1rem', textAlign: 'center' }}>
                  Oops! Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Embedded Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            marginTop: '6rem',
            background: 'var(--tertiary-black)', 
            borderRadius: '24px', 
            border: '1px solid rgba(255, 255, 255, 0.05)',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div className="grid-2-col" style={{ gap: 0 }}>
            {/* Left Side: Office Details */}
            <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-white)' }}>Our Office</h3>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ color: 'var(--primary-red)', fontSize: '1.5rem', marginTop: '0.2rem' }}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary-white)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Star Growth Hub HQ</h4>
                  <p style={{ color: 'var(--text-gray)', lineHeight: 1.6, margin: 0 }}>
                    Star Growth Hub<br />
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ color: 'var(--primary-red)', fontSize: '1.5rem' }}>
                  <FaPhoneAlt />
                </div>
                <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', margin: 0 }}>+91 89048 23979</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ color: 'var(--primary-red)', fontSize: '1.5rem' }}>
                  <FaEnvelope />
                </div>
                <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', margin: 0 }}>stargrowthhub@gmail.com</p>
              </div>
              
              <a 
                href="https://maps.app.goo.gl/erNNAPHK8Ref2TKq9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: 'fit-content' }}
              >
                GET DIRECTIONS ↗
              </a>
            </div>
            
            {/* Right Side: Map Iframe */}
            <div style={{ height: '100%', minHeight: '400px', width: '100%', position: 'relative' }}>
              <iframe 
                src="https://maps.google.com/maps?q=Bengaluru,%20Karnataka,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0, filter: 'grayscale(0.8) contrast(1.2)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Star Growth Hub Location"
              ></iframe>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
