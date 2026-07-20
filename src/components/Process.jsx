import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaSearch, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa';
import './Process.css';

const processSteps = [
  {
    id: 1,
    title: "Discover & Audit",
    desc: "We tear down your current strategy, analyze your competitors, and identify the hidden bottlenecks in your funnel.",
    icon: <FaSearch />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Strategize",
    desc: "We build a bespoke, data-driven blueprint tailored exactly to your revenue goals. No templates, just pure strategy.",
    icon: <FaLightbulb />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Aggressive Execution",
    desc: "Our team deploys campaigns, launches platforms, and begins capturing market share immediately.",
    icon: <FaRocket />,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Scale & Optimize",
    desc: "We don't set it and forget it. We continuously A/B test and optimize to drive Cost Per Acquisition down and ROI up.",
    icon: <FaChartLine />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
  }
];

const Process = () => {
  const containerRef = useRef(null);
  
  // Track the scroll progress of the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Add a spring physics effect to the scroll line for smooth filling
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="process-section" id="process" ref={containerRef}>
      <div className="container">
        
        <div className="section-header process-header">
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

        <div className="timeline-container">
          
          {/* Center Glowing Scroll Line */}
          <div className="timeline-track">
            <motion.div className="timeline-progress" style={{ scaleY, transformOrigin: "top" }} />
          </div>

          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={step.id} className={`timeline-row ${isEven ? 'row-left' : 'row-right'}`}>
                
                {/* Center Number Dot */}
                <motion.div 
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  {step.id}
                </motion.div>

                {/* Content Card sliding in from left or right */}
                <motion.div 
                  className="timeline-content"
                  initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="timeline-card">
                    <div className="timeline-card-image">
                      <img src={step.image} alt={step.title} loading="lazy" />
                      <div className="timeline-card-icon">{step.icon}</div>
                    </div>
                    <div className="timeline-card-text">
                      <div className="step-number">Step {step.id}</div>
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
