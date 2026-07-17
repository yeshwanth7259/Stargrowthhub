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
              Latest <span className="text-red-gradient">Insights</span>
            </motion.h2>
            <motion.p 
              className="section-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              Stay ahead of the curve with our expert strategies and digital marketing trends.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/blog" className="btn btn-outline view-all-btn">
              View All Articles
            </Link>
          </motion.div>
        </div>

        <div className="insights-cards-container">
          {recentBlogs.map((blog, i) => (
            <motion.div 
              className="insight-card"
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="insight-image-wrapper">
                <img src={blog.image} alt={blog.title} className="insight-image" />
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
                  Read Article <FaArrowRight />
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
