import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { 
  FaPlay, 
  FaRocket, 
  FaBullseye, 
  FaRegEye, 
  FaLightbulb, 
  FaHandshake, 
  FaChartLine, 
  FaUsers, 
  FaGlobe, 
  FaCheckCircle,
  FaSmile,
  FaHeart,
  FaGoogle,
  FaFacebook,
  FaHubspot,
  FaShopify,
  FaWordpress,
  FaMailchimp
} from 'react-icons/fa';
import './AboutPage.css';

import marketingTeam from '../assets/marketing_team.png';
import rocketHero from '../assets/rocket_hero.png';
import serviceSeo from '../assets/service_seo.png';
import serviceAds from '../assets/service_ads.png';
import serviceContent from '../assets/service_marketing.png';

const AnimatedCounter = ({ from = 0, to, suffix = "", duration = 2.5 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          setCount(Math.floor(value));
        },
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AboutPage = () => {
  // Bubbles array for the background animation
  const bubbles = Array.from({ length: 15 });

  return (
    <main className="about-page-container">
      {/* 1. Hero Section with Video Background and Bubbling Animation */}
      <section className="about-hero">
        <video autoPlay loop muted playsInline className="hero-bg-video">
          <source src="https://cdn.pixabay.com/video/2023/10/22/186000-876939527_large.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        
        {/* Bubbling Animation Elements */}
        <div className="bubbles-container">
          {bubbles.map((_, i) => (
            <div key={i} className={`bubble bubble-${i + 1}`}></div>
          ))}
        </div>

        <div className="container hero-content-wrapper">
          <motion.span 
            className="about-subtitle bubble-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Our World
          </motion.span>
          <motion.h1 
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We Don't Just Market.<br/>
            <span className="text-red-gradient">We Spark Happiness & Growth.</span>
          </motion.h1>
          <motion.p 
            className="about-hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At StarGrowthHub, we believe building your business should be a joyful experience. We combine bubbling creativity with data-driven precision to create campaigns that make you and your customers smile.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#story" className="play-btn">
              <div className="play-icon"><FaPlay size={20} style={{ marginLeft: '5px' }} /></div>
              Discover Our Magic
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Horizontal Bar (Moved slightly up over the hero) */}
      <div className="container about-stats-container">
        <motion.div 
          className="about-stats-bar glass-panel-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-stat-item">
            <FaSmile className="about-stat-icon" />
            <div className="about-stat-value"><AnimatedCounter to={250} suffix="+" /></div>
            <div className="about-stat-label">Happy Brands</div>
          </div>
          <div className="about-stat-item">
            <FaHeart className="about-stat-icon" />
            <div className="about-stat-value"><AnimatedCounter to={98} suffix="%" /></div>
            <div className="about-stat-label">Client Love</div>
          </div>
          <div className="about-stat-item">
            <FaChartLine className="about-stat-icon" />
            <div className="about-stat-value"><AnimatedCounter to={5} suffix="X" /></div>
            <div className="about-stat-label">ROI Growth</div>
          </div>
          <div className="about-stat-item">
            <FaGlobe className="about-stat-icon" />
            <div className="about-stat-value"><AnimatedCounter to={50} suffix="+" /></div>
            <div className="about-stat-label">Global Markets</div>
          </div>
        </motion.div>
      </div>

      {/* 3. Our Story Section (Without years) */}
      <section id="story" className="about-section">
        <div className="container story-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-subtitle">Our Journey</span>
            <h2 className="heading-lg mb-4" style={{ marginBottom: '1.5rem' }}>Cultivating A <span className="text-red-gradient">Culture of Success</span></h2>
            <p className="text-gray mb-4" style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>We started with a simple, bubbling idea: marketing doesn't have to be cold and corporate. It can be vibrant, engaging, and deeply human.</p>
            <p className="text-gray" style={{ marginBottom: '2.5rem', fontSize: '1.2rem' }}>Today, our team of passionate creatives and analysts work together to breathe life into brands, making every digital interaction feel magical and rewarding.</p>
            
            <div className="journey-steps">
              <div className="journey-item">
                <div className="journey-icon"><FaLightbulb /></div>
                <div className="journey-content">
                  <h4 className="journey-title">The Spark of Joy</h4>
                  <p className="journey-desc">Igniting creative ideas that break through the noise.</p>
                </div>
              </div>
              <div className="journey-item">
                <div className="journey-icon"><FaUsers /></div>
                <div className="journey-content">
                  <h4 className="journey-title">Building Connections</h4>
                  <p className="journey-desc">Fostering deep, meaningful relationships with audiences.</p>
                </div>
              </div>
              <div className="journey-item">
                <div className="journey-icon"><FaRocket /></div>
                <div className="journey-content">
                  <h4 className="journey-title">Soaring Together</h4>
                  <p className="journey-desc">Elevating brands to unprecedented heights of success.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="story-image-wrapper bubble-border"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={marketingTeam} alt="Happy Team Working" className="story-image" />
            <div className="story-image-overlay">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="play-icon" style={{ width: '50px', height: '50px' }}><FaHeart size={20} /></div>
                <div>
                  <h4 style={{ margin: 0, fontWeight: 800, fontSize: '1.2rem' }}>Our Promise</h4>
                  <p style={{ margin: 0, fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>To pour passion and joy into every project we touch.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Our Values Section */}
      <section className="about-section bg-tertiary relative overflow-hidden">
        {/* Subtle background blob for uniqueness */}
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>

        <div className="container relative z-10">
          <div className="section-header text-center" style={{ textAlign: 'center' }}>
            <span className="about-subtitle">Core Philosophy</span>
            <h2 className="heading-lg">What Makes Us <span className="text-red-gradient">Unique</span></h2>
          </div>
          
          <div className="values-timeline">
            <div className="timeline-line"></div>

            {/* Item 1 - Left */}
            <div className="timeline-item left">
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10, borderColor: "rgba(229, 9, 20, 0.4)", boxShadow: "0 15px 30px rgba(229, 9, 20, 0.15)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
              >
                <div className="timeline-icon"><FaSmile /></div>
                <h3 className="value-title">Positivity</h3>
                <p className="value-desc">We approach every challenge with a smile and a can-do attitude, ensuring a joyful collaboration.</p>
              </motion.div>
            </div>

            {/* Item 2 - Right */}
            <div className="timeline-item right">
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10, borderColor: "rgba(229, 9, 20, 0.4)", boxShadow: "0 15px 30px rgba(229, 9, 20, 0.15)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: 0.1 }}
              >
                <div className="timeline-icon"><FaRegEye /></div>
                <h3 className="value-title">Clarity</h3>
                <p className="value-desc">No jargon, no smoke and mirrors. Just pure, honest, and crystal-clear communication.</p>
              </motion.div>
            </div>

            {/* Item 3 - Left */}
            <div className="timeline-item left">
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10, borderColor: "rgba(229, 9, 20, 0.4)", boxShadow: "0 15px 30px rgba(229, 9, 20, 0.15)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: 0.2 }}
              >
                <div className="timeline-icon"><FaLightbulb /></div>
                <h3 className="value-title">Brilliance</h3>
                <p className="value-desc">We let our creativity shine, constantly bubbling up with fresh, innovative ideas.</p>
              </motion.div>
            </div>

            {/* Item 4 - Right */}
            <div className="timeline-item right">
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10, borderColor: "rgba(229, 9, 20, 0.4)", boxShadow: "0 15px 30px rgba(229, 9, 20, 0.15)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: 0.3 }}
              >
                <div className="timeline-icon"><FaHandshake /></div>
                <h3 className="value-title">True Partnership</h3>
                <p className="value-desc">Your wins are our wins. We celebrate every milestone with you as part of your extended family.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Digital Marketing Arsenal */}
      <section className="about-section overflow-hidden">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '8rem', textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="about-subtitle">Our Magic Touch</span>
              <h2 className="heading-lg">Strategies That <span className="text-red-gradient">Inspire</span></h2>
              <p className="text-gray mx-auto mt-4" style={{ maxWidth: '700px', margin: '1rem auto', fontSize: '1.2rem' }}>Experience digital marketing that feels alive. We blend art and science to create campaigns that resonate deeply and drive explosive growth.</p>
            </motion.div>
          </div>

          {/* Strategy 1 */}
          <div className="arsenal-item">
            <div className="arsenal-content">
              <motion.div initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0 }}>
                <span className="arsenal-tag">Organic Discovery</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.15 }}>
                <h3 className="arsenal-title">Shine Bright in Search</h3>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 }}>
                <p className="arsenal-desc">Let your customers find you effortlessly. Our joyful SEO strategies ensure your website is the brightest star in the search engine galaxy.</p>
              </motion.div>
              <motion.ul className="arsenal-features" initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.45 }}>
                <li><FaCheckCircle /> Delightful On-Page Optimization</li>
                <li><FaCheckCircle /> Authoritative Link Building</li>
                <li><FaCheckCircle /> Content That Captivates</li>
              </motion.ul>
            </div>
            <motion.div 
              className="arsenal-visual float-animation"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <img src={serviceSeo} alt="SEO Optimization" className="arsenal-img" />
            </motion.div>
          </div>

          {/* Strategy 2: Reversed */}
          <div className="arsenal-item">
            <div className="arsenal-content">
              <motion.div initial={{ opacity: 0, x: 150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0 }}>
                <span className="arsenal-tag">Targeted Connections</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.15 }}>
                <h3 className="arsenal-title">Ads That Make Them Smile</h3>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 }}>
                <p className="arsenal-desc">Stop burning ad spend. We create data-backed PPC and Social Media ad campaigns that convert clicks into high-paying customers with exceptional ROI.</p>
              </motion.div>
              <motion.ul className="arsenal-features" initial={{ opacity: 0, x: 150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.45 }}>
                <li><FaCheckCircle /> Google & Social Ads That Convert</li>
                <li><FaCheckCircle /> Joyful Ad Copywriting</li>
                <li><FaCheckCircle /> Continuous Optimization</li>
              </motion.ul>
            </div>
            <motion.div 
              className="arsenal-visual float-animation-reverse"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <img src={serviceAds} alt="Performance Marketing" className="arsenal-img" />
            </motion.div>
          </div>

          {/* Strategy 3 */}
          <div className="arsenal-item">
            <div className="arsenal-content">
              <motion.div initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0 }}>
                <span className="arsenal-tag">Community Building</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.15 }}>
                <h3 className="arsenal-title">Fostering Real Love</h3>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.3 }}>
                <p className="arsenal-desc">Transform casual scrollers into passionate brand advocates. We create social content that bubbles with personality and sparks authentic conversations.</p>
              </motion.div>
              <motion.ul className="arsenal-features" initial={{ opacity: 0, x: -150 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.45 }}>
                <li><FaCheckCircle /> Vibrant Social Media Management</li>
                <li><FaCheckCircle /> Engaging Storytelling</li>
                <li><FaCheckCircle /> Community Moderation & Love</li>
              </motion.ul>
            </div>
            <motion.div 
              className="arsenal-visual float-animation"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <img src={serviceContent} alt="Content Marketing" className="arsenal-img" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Certifications & Partners */}
      <section className="partners-section">
        <div className="container">
          <motion.h4 
            className="partners-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Loved & Certified By
          </motion.h4>
          <div className="partners-grid">
            {[
              { icon: <FaGoogle />, name: "Google Partner" },
              { icon: <FaFacebook />, name: "Meta Partner" },
              { icon: <FaHubspot />, name: "HubSpot" },
              { icon: <FaShopify />, name: "Shopify" },
              { icon: <FaWordpress />, name: "WordPress" },
              { icon: <FaMailchimp />, name: "Mailchimp" }
            ].map((partner, index) => (
              <motion.div 
                key={index}
                className="partner-logo-item"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", bounce: 0.5, delay: index * 0.15 }}
              >
                <div className="partner-icon">{partner.icon}</div>
                <span className="partner-name">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Let's Build CTA */}
      <section className="cta-alt">
        <div className="container">
          <motion.div 
            className="cta-alt-card bubbly-cta"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="cta-alt-content">
              <h2 className="cta-alt-title">Ready for a Joyful <br/><span className="text-red-gradient">Journey?</span></h2>
              <p className="cta-alt-desc">Let's build something magical together. Your growth adventure starts with a single, happy click.</p>
              <a href="/contact" className="btn btn-primary btn-bubbly" style={{ padding: '1.2rem 2.5rem', fontSize: '1.2rem' }}>
                Start The Magic
              </a>
            </div>
            <div className="cta-alt-visual">
              <img src={rocketHero} alt="Rocket Launch" className="rocket-img" />
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
