import React from 'react';
import { motion } from 'framer-motion';
import { FaFolderOpen, FaHeart, FaChartBar, FaUsers, FaPlus } from 'react-icons/fa';
import './Stats.css';

const statsData = [
  {
    icon: <FaFolderOpen />,
    value: "250+",
    label: "Projects Completed"
  },
  {
    icon: <FaHeart />,
    value: "98%",
    label: "Client Satisfaction"
  },
  {
    icon: <FaChartBar />,
    value: "5X",
    label: "Average ROI Growth"
  },
  {
    icon: <FaUsers />,
    value: "50+",
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
            Real Strategies.<br/>
            Real Growth.
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
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
