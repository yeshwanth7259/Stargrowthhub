import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import './BlogPreview.css';

const fallbackImages = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
];

const fallbackDates = [
  "Jul 15, 2024",
  "Jul 10, 2024",
  "Jul 05, 2024"
];

const BlogPreview = () => {
  const recentBlogs = blogPosts.slice(0, 3);

  return (
    <section className="blog-section section-padding" id="insights">
      <div className="container">
        <div className="blog-header">
          <motion.h2 
            className="heading-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Latest Insights & News
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/blog" className="btn btn-outline" style={{ color: 'var(--primary-black)', borderColor: 'var(--primary-black)' }}>
              View All Articles
            </Link>
          </motion.div>
        </div>

        <div className="blog-grid">
          {recentBlogs.map((blog, index) => (
            <motion.article 
              key={blog.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="blog-image-wrapper">
                <img src={blog.image || fallbackImages[index]} alt={blog.title} className="blog-image" />
                <div className="blog-category">{blog.category}</div>
              </div>
              <div className="blog-content">
                <span className="blog-date">{blog.date || fallbackDates[index]} • {blog.readTime}</span>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc" style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {blog.metaDescription}
                </p>
                <Link to={`/blog/${blog.slug}`} className="blog-link">
                  Read Article <FaArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
