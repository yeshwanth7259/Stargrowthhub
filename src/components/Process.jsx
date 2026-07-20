import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaSearch, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa';
import './Process.css';

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Discover & Audit",
    desc: "We tear down your current strategy, analyze your competitors, and identify the hidden bottlenecks in your funnel.",
    icon: <FaSearch />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    number: "02",
    title: "Strategize",
    desc: "We build a bespoke, data-driven blueprint tailored exactly to your revenue goals. No templates, just pure strategy.",
    icon: <FaLightbulb />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    number: "03",
    title: "Aggressive Execution",
    desc: "Our team deploys campaigns, launches platforms, and begins capturing market share immediately.",
    icon: <FaRocket />,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    number: "04",
    title: "Scale & Optimize",
    desc: "We don't set it and forget it. We continuously A/B test and optimize to drive Cost Per Acquisition down and ROI up.",
    icon: <FaChartLine />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
  }
];

const Process = () => {
  const targetRef = useRef(null);
  
  // Track vertical scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // 4 items = track is 400% of viewport width. 
  // To reach the 4th item, we shift by -75% of the track's total width.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section className="process-carousel-section" id="process" ref={targetRef}>
      <div className="process-carousel-sticky">
        
        <div className="process-carousel-header">
          <p className="section-kicker">OUR PROCESS</p>
          <h2 className="section-title">
            A Simple 4-Step Process<br/>
            To Your <span className="text-red">Success</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="process-carousel-track">
          {processSteps.map((step) => (
            <div key={step.id} className="process-carousel-slide">
              <div className="carousel-card">
                <div className="carousel-card-image">
                  <img src={step.image} alt={step.title} loading="lazy" />
                  <div className="carousel-card-number">{step.number}</div>
                </div>
                <div className="carousel-card-content">
                  <div className="carousel-card-icon">{step.icon}</div>
                  <div className="carousel-card-text">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
