import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LogoMarquee from './components/LogoMarquee'
import PopupForm from './components/PopupForm'
import WhatsAppButton from './components/WhatsAppButton'
import SmoothScroll from './components/SmoothScroll'
import AnimatedBackground from './components/AnimatedBackground'

// Pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ContactPage from './pages/ContactPage'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <div className="app-container" style={{ position: 'relative' }}>
        <AnimatedBackground />
        <Navbar />
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <LogoMarquee />
          <Footer />
        </div>

        <WhatsAppButton />
        <PopupForm />
      </div>
    </SmoothScroll>
  )
}

export default App;
