import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import blogPosts from '../data/blogPosts';
import './LatestInsights.css';

const LatestInsights = () => {
  // Grab the first 3 blogs for the homepage
  const recentBlogs = blogPosts.slice(0, 3);

  return (
    <section className="latest-insights section-padding">
      <div className="container">
        <div className="insights-header">
          <div>
            <motion.h2 
              className="heading-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Straight From <span className="text-red-gradient">The Trenches.</span>
            </motion.h2>
            <motion.p 
              className="section-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              Field notes and strategies straight from the trenches.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/blog" className="btn btn-outline view-all-btn glass-panel">
              View All Dispatch
            </Link>
          </motion.div>
        </div>

        <div className="insights-cards-container" style={{ perspective: '1000px' }}>
          {recentBlogs.map((blog, i) => (
            <motion.div 
              className="insight-card glass-panel"
              key={blog.id}
              initial={{ opacity: 0, rotateX: -30, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              whileHover={{ y: -10, rotateX: 5 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="insight-image-wrapper" style={{ overflow: 'hidden' }}>
                <motion.img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="insight-image" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="insight-category">{blog.category}</span>
              </div>
              <div className="insight-content">
                <div className="insight-meta">
                  <span>{blog.date}</span>
                  <span style={{ color: 'var(--primary-red)' }}>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="insight-title">{blog.title}</h3>
                <p className="insight-excerpt">{blog.metaDescription}</p>
                <Link to={`/blog/${blog.slug}`} className="insight-read-more" style={{ position: 'relative', zIndex: 10 }}>
                  Read Dispatch <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
