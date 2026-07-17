import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SEO from '../components/SEO';
import blogPosts from '../data/blogPosts';
import CTA from '../components/CTA';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const gridRef = useRef(null);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (gridRef.current) {
      const y = gridRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Digital Marketing & Web Development Blog"
        description="Practical guides on SEO, paid ads, website development, and growing your business online — from the Star Growth Hub team."
        path="/blog"
      />
      <main className="page-transition">
        <div className="page-header services-hero" style={{ position: 'relative', minHeight: '60vh', paddingTop: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {/* Background image matching the dark theme */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url("https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', opacity: 0.2 }}></div>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(3,3,3,0.95) 0%, rgba(229,9,20,0.15) 100%)' }}></div>
          
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            >
              <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontSize: '0.9rem' }}>Star Growth Hub Blog</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, textTransform: 'capitalize', letterSpacing: '-1px', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Digital Marketing <span className="text-red-gradient">Explained</span>
              </h1>
              <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9, lineHeight: 1.6 }}>
                No jargon, no inflated promises — just practical guidance on SEO, paid ads, and building a website that actually works for your business.
              </p>
            </motion.div>
          </div>
        </div>
        
        <section ref={gridRef} style={{ position: 'relative', zIndex: 2, padding: '6rem 0', backgroundColor: 'var(--primary-black)', minHeight: '80vh' }}>
          <div className="container">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentPage}
                initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}
              >
                {currentPosts.map((post, i) => (
                  <Link to={`/blog/${post.slug}`} key={post.id} style={{ textDecoration: 'none' }}>
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderColor: 'rgba(229,9,20,0.5)' }}
                      style={{
                        background: 'var(--tertiary-black)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        transition: 'all 0.4s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary-red)' }}>{post.category}</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>{post.readTime}</span>
                      </div>
                      
                      <h3 style={{ fontSize: '1.5rem', lineHeight: 1.4, margin: '0 0 1rem 0', color: 'var(--primary-white)' }}>{post.title}</h3>
                      
                      <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-gray)', marginBottom: '2rem', flexGrow: 1 }}>{post.metaDescription}</p>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-red)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        Read Article <FaArrowRight />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '4rem' }}
              >
                <button 
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{ 
                    padding: '0.8rem 1.5rem', 
                    borderRadius: '50px', 
                    background: currentPage === 1 ? 'transparent' : 'var(--tertiary-black)', 
                    color: currentPage === 1 ? 'var(--text-gray)' : 'var(--primary-white)',
                    border: `1px solid ${currentPage === 1 ? 'rgba(255,255,255,0.1)' : 'var(--primary-red)'}`,
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    opacity: currentPage === 1 ? 0.5 : 1,
                    transition: 'all 0.3s ease',
                    fontWeight: 600
                  }}
                >
                  Previous
                </button>
                
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: currentPage === index + 1 ? 'var(--primary-red)' : 'transparent',
                        color: currentPage === index + 1 ? 'var(--primary-white)' : 'var(--text-gray)',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 700,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  style={{ 
                    padding: '0.8rem 1.5rem', 
                    borderRadius: '50px', 
                    background: currentPage === totalPages ? 'transparent' : 'var(--tertiary-black)', 
                    color: currentPage === totalPages ? 'var(--text-gray)' : 'var(--primary-white)',
                    border: `1px solid ${currentPage === totalPages ? 'rgba(255,255,255,0.1)' : 'var(--primary-red)'}`,
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    opacity: currentPage === totalPages ? 0.5 : 1,
                    transition: 'all 0.3s ease',
                    fontWeight: 600
                  }}
                >
                  Next
                </button>
              </motion.div>
            )}
          </div>
        </section>

        <CTA />
      </main>
    </>
  );
};

export default BlogPage;
