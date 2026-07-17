import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa';
import './Process.css';

const processSteps = [
  {
    id: 0,
    number: "01",
    title: "Discover & Audit",
    desc: "We tear down your current strategy, analyze your competitors, and identify the hidden bottlenecks in your funnel.",
    icon: <FaSearch />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 1,
    number: "02",
    title: "Strategize",
    desc: "We build a bespoke, data-driven blueprint tailored exactly to your revenue goals. No templates, just pure strategy.",
    icon: <FaLightbulb />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    number: "03",
    title: "Aggressive Execution",
    desc: "Our team deploys campaigns, launches platforms, and begins capturing market share immediately.",
    icon: <FaRocket />,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    number: "04",
    title: "Scale & Optimize",
    desc: "We don't set it and forget it. We continuously A/B test and optimize to drive Cost Per Acquisition down and ROI up.",
    icon: <FaChartLine />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
  }
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="process-section">
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <motion.p 
            className="section-kicker"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            OUR PROCESS
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A Simple 4-Step Process<br/>
            To Your <span className="text-red">Success</span>
          </motion.h2>
        </div>

        <div className="process-sticky-container">
          
          {/* LEFT: Sticky Visuals */}
          <div className="process-visual-side">
            <div className="process-sticky-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  className="process-image-card"
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img src={processSteps[activeStep].image} alt={processSteps[activeStep].title} />
                  <div className="process-image-overlay">
                    <div className="process-image-icon">{processSteps[activeStep].icon}</div>
                    <h3>{processSteps[activeStep].title}</h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Scrolling Content */}
          <div className="process-content-side">
            {processSteps.map((step) => (
              <motion.div 
                className={`process-scroll-step ${activeStep === step.id ? 'active' : ''}`}
                key={step.id}
                onViewportEnter={() => setActiveStep(step.id)}
                viewport={{ margin: "-50% 0px -50% 0px", amount: "some" }}
              >
                <h4 className="process-number">{step.number}</h4>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
