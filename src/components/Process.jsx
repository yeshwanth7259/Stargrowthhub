import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaSearch, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa';
import './Process.css';

const processSteps = [
  {
    id: 0,
    number: "01",
    title: "Discover & Audit",
    desc: "We tear down your current strategy, analyze your competitors, and identify the hidden bottlenecks in your funnel.",
    icon: <FaSearch />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    color: "#1a1a1a"
  },
  {
    id: 1,
    number: "02",
    title: "Strategize",
    desc: "We build a bespoke, data-driven blueprint tailored exactly to your revenue goals. No templates, just pure strategy.",
    icon: <FaLightbulb />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    color: "#1f1f1f"
  },
  {
    id: 2,
    number: "03",
    title: "Aggressive Execution",
    desc: "Our team deploys campaigns, launches platforms, and begins capturing market share immediately.",
    icon: <FaRocket />,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
    color: "#242424"
  },
  {
    id: 3,
    number: "04",
    title: "Scale & Optimize",
    desc: "We don't set it and forget it. We continuously A/B test and optimize to drive Cost Per Acquisition down and ROI up.",
    icon: <FaChartLine />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    color: "#292929"
  }
];

const ProcessCard = ({ step, i, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="process-card-wrapper">
      <motion.div 
        className="process-card"
        style={{ 
          scale,
          top: `calc(10vh + ${i * 30}px)`,
          backgroundColor: step.color
        }}
      >
        <div className="process-card-content">
          <div className="process-card-header">
            <div className="process-card-icon">{step.icon}</div>
            <h4 className="process-card-number">{step.number}</h4>
          </div>
          <h3 className="process-card-title">{step.title}</h3>
          <p className="process-card-desc">{step.desc}</p>
        </div>
        <div className="process-card-image-container">
          <motion.div className="process-card-image-inner" style={{ scale: imageScale }}>
            <img src={step.image} alt={step.title} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Process = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section className="process-section" ref={container}>
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

        <div className="process-cards-container">
          {processSteps.map((step, i) => {
            const targetScale = 1 - ((processSteps.length - i) * 0.05);
            return (
              <ProcessCard 
                key={step.id} 
                step={step} 
                i={i}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
