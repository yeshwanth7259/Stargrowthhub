import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaSearch, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa';
import './Process.css';

import imgAudit from '../assets/process_audit.png';
import imgStrategy from '../assets/process_strategy.png';
import imgExecution from '../assets/process_execution.png';
import imgScale from '../assets/process_scale.png';

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Discover & Audit",
    desc: "We tear down your current strategy, analyze your competitors, and identify the hidden bottlenecks in your funnel. Our Indian market experts dig deep into your data to uncover massive growth opportunities.",
    icon: <FaSearch />,
    image: imgAudit
  },
  {
    id: 2,
    number: "02",
    title: "Strategize",
    desc: "We build a bespoke, data-driven blueprint tailored exactly to your revenue goals. No templates, just pure strategy developed by our elite team in Mumbai, designed to dominate local and global search engines.",
    icon: <FaLightbulb />,
    image: imgStrategy
  },
  {
    id: 3,
    number: "03",
    title: "Aggressive Execution",
    desc: "Our team deploys campaigns, launches platforms, and begins capturing market share immediately. From high-converting ad copy to technical SEO, our Bangalore-based tech experts execute flawlessly.",
    icon: <FaRocket />,
    image: imgExecution
  },
  {
    id: 4,
    number: "04",
    title: "Scale & Optimize",
    desc: "We don't set it and forget it. We continuously A/B test and optimize to drive Cost Per Acquisition down and ROI up, ensuring your business scales rapidly and sustainably.",
    icon: <FaChartLine />,
    image: imgScale
  }
];

const StackCard = ({ step, index, targetScale }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);

  return (
    <div className="process-stack-card-container" ref={cardRef}>
      <motion.div 
        className="process-stack-card" 
        style={{ 
          top: `calc(15vh + ${index * 40}px)`,
          scale: targetScale,
        }}
      >
        <div className={`process-card-inner ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}>
          
          <div className="process-card-image-wrapper">
            <motion.img 
              src={step.image} 
              alt={step.title} 
              style={{ scale: imageScale }}
            />
            <div className="process-card-number-bg">{step.number}</div>
          </div>

          <motion.div 
            className="process-card-content-wrapper"
            style={{ y: contentY, opacity: contentOpacity }}
          >
            <div className="process-card-icon">{step.icon}</div>
            <h3 className="process-card-title">{step.title}</h3>
            <p className="process-card-desc">{step.desc}</p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

const Process = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className="process-stack-section" id="process" ref={containerRef}>
      <div className="container">
        
        <div className="process-stack-header">
          <p className="section-kicker" style={{ letterSpacing: '0.15em' }}>THE PLAYBOOK</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.1 }}>
            How We Turn Budgets<br/>
            Into <span className="text-red-gradient">Breakthroughs.</span>
          </h2>
        </div>

        <div className="process-stack-wrapper">
          {processSteps.map((step, index) => {
            // Calculate a slight scale down for cards underneath based on scroll progress
            const targetScale = 1 - ((processSteps.length - index) * 0.05);
            
            // To make it dynamic, we'd need to map scrollYProgress to scale for each specific card, 
            // but a static stacked scale creates a beautiful deep pile effect.
            return (
              <StackCard 
                key={step.id} 
                step={step} 
                index={index} 
                targetScale={1} // We will handle scale via CSS sticky behavior for simplicity
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
