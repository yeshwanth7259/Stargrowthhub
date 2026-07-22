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
import FaqPage from './pages/FaqPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import AuthPage from './pages/AuthPage'
import ClientPortal from './pages/ClientPortal'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import { AuthProvider } from './context/AuthContext'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Standard browser scroll
    window.scrollTo(0, 0);
    
    // Force Lenis to snap to the top immediately if it exists
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);
  return null;
};

function App() {
  return (
    <AuthProvider>
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
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/portal" element={<ClientPortal />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
            </Routes>
            <LogoMarquee />
            <Footer />
          </div>

          <WhatsAppButton />
          <PopupForm />
        </div>
      </SmoothScroll>
    </AuthProvider>
  )
}

export default App;
