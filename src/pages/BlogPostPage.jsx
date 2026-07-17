import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import SEO from '../components/SEO';
import blogPosts from '../data/blogPosts';
import CTA from '../components/CTA';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);
  const fallbackRelated =
    related.length > 0 ? related : blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <SEO
        title={post.title}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        article={{
          headline: post.title,
          description: post.metaDescription,
          datePublished: "2026-07-17",
        }}
      />

      <main className="page-transition" style={{ backgroundColor: 'var(--primary-black)' }}>
        
        {/* Post Header */}
        <section style={{ padding: '12rem 0 4rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-gray)', textDecoration: 'none', marginBottom: '2rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <FaArrowLeft /> Back to Blog
              </Link>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--primary-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>
                  {post.category}
                </span>
                <span style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>• {post.readTime}</span>
              </div>
              
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, color: 'var(--primary-white)', marginBottom: '1.5rem', fontWeight: 800 }}>
                {post.title}
              </h1>
              
              <p style={{ fontSize: '1.25rem', color: 'var(--text-gray)', lineHeight: 1.6, borderLeft: '4px solid var(--primary-red)', paddingLeft: '1.5rem', fontStyle: 'italic' }}>
                {post.metaDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Post Content */}
        <section style={{ padding: '4rem 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <motion.article 
              className="blog-content-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            {/* Inline styles for the injected HTML content */}
            <style dangerouslySetInnerHTML={{__html: `
              .blog-content-body {
                color: var(--primary-white);
                font-size: 1.15rem;
                line-height: 1.8;
              }
              .blog-content-body p {
                margin-bottom: 2rem;
                color: rgba(255, 255, 255, 0.85);
              }
              .blog-content-body h2 {
                font-size: 2.2rem;
                color: var(--primary-white);
                margin: 4rem 0 1.5rem 0;
                font-weight: 700;
                letter-spacing: -0.5px;
              }
              .blog-content-body h3 {
                font-size: 1.6rem;
                color: var(--primary-white);
                margin: 3rem 0 1rem 0;
              }
              .blog-content-body ul, .blog-content-body ol {
                margin-bottom: 2rem;
                padding-left: 2rem;
              }
              .blog-content-body li {
                margin-bottom: 1rem;
                color: rgba(255, 255, 255, 0.85);
              }
              .blog-content-body li strong {
                color: var(--primary-white);
              }
              .blog-content-body a {
                color: var(--primary-red);
                text-decoration: none;
                border-bottom: 1px solid transparent;
                transition: border-color 0.3s ease;
              }
              .blog-content-body a:hover {
                border-bottom-color: var(--primary-red);
              }
              .blog-content-body blockquote {
                border-left: 4px solid var(--primary-red);
                padding-left: 1.5rem;
                margin: 2rem 0;
                font-style: italic;
                color: var(--text-gray);
                background: rgba(255,255,255,0.02);
                padding: 1.5rem;
                border-radius: 0 8px 8px 0;
              }
            `}} />
          </div>
        </section>

        {/* Post CTA */}
        <section style={{ padding: '2rem 0 6rem 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, rgba(229,9,20,0.1) 0%, rgba(3,3,3,0.9) 100%)',
                border: '1px solid rgba(229,9,20,0.2)',
                borderRadius: '24px',
                padding: '4rem',
                textAlign: 'center'
              }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-white)' }}>Ready to implement this?</h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                Star Growth Hub builds websites and runs digital marketing campaigns that are built to actually convert — not just look good.
              </p>
              <button 
                onClick={() => window.dispatchEvent(new Event('openPopup'))} 
                className="btn btn-primary" 
                style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', cursor: 'pointer', border: 'none' }}
              >
                Get a Free Strategy Call
              </button>
            </motion.div>
          </div>
        </section>

        {/* Related Articles */}
        {fallbackRelated.length > 0 && (
          <section style={{ padding: '4rem 0', background: 'var(--tertiary-black)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
              <h3 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>Keep <span className="text-red-gradient">Reading</span></h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {fallbackRelated.map((p, i) => (
                  <Link to={`/blog/${p.slug}`} key={p.id} style={{ textDecoration: 'none' }}>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -5, borderColor: 'rgba(229,9,20,0.3)' }}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        padding: '2rem',
                        transition: 'all 0.3s ease',
                        height: '100%'
                      }}
                    >
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-red)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', display: 'block' }}>{p.category}</span>
                      <h4 style={{ fontSize: '1.3rem', color: 'var(--primary-white)', marginBottom: '1rem', lineHeight: 1.4 }}>{p.title}</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', margin: 0 }}>{p.readTime}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
    </>
  );
};

export default BlogPostPage;
