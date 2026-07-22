import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { FaFolderOpen, FaHeart, FaChartBar, FaUsers, FaPlus } from 'react-icons/fa';
import './Stats.css';

const AnimatedCounter = ({ value, suffix }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          node.textContent = Math.round(v);
        }
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <span ref={nodeRef}>0</span>
      <span>{suffix}</span>
    </div>
  );
};

const statsData = [
  {
    icon: <FaFolderOpen />,
    value: 250,
    suffix: "+",
    label: "Projects Completed"
  },
  {
    icon: <FaHeart />,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction"
  },
  {
    icon: <FaChartBar />,
    value: 5,
    suffix: "X",
    label: "Average ROI Growth"
  },
  {
    icon: <FaUsers />,
    value: 50,
    suffix: "+",
    label: "Industries Served"
  }
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="container stats-container">
        
        <div className="stats-left">
          <motion.p 
            className="section-kicker"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ letterSpacing: '0.15em' }}
          >
            PROVEN IMPACT
          </motion.p>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The Scoreboard<br/>
            <span className="text-red">Doesn't Lie.</span>
          </motion.h2>
          <motion.p 
            className="stats-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We focus on what matters — results that impact your bottom line.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="/work" className="btn btn-primary stats-btn">
              View Case Studies <span className="btn-icon-circle"><FaPlus /></span>
            </a>
          </motion.div>
        </div>

        <div className="stats-right">
          {statsData.map((stat, index) => (
            <motion.div 
              className="stat-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-value">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
