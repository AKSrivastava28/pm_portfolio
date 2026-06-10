'use client';

/**
 * ControlRoom.tsx - Hero Section Component
 * 
 * Features:
 * - Main headline and professional subtitle
 * - Live system status tracker
 * - Core metric indicators with animations
 * - 3D canvas integration
 */

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from './ControlRoom.module.css';

const InteractiveMesh3D = dynamic(() => import('./InteractiveMesh3D'), {
  ssr: false,
});


const StatusIndicator: React.FC = () => {
  const pulseVariants = {
    animate: {
      opacity: [1, 0.6, 1],
      scale: [1, 1.05, 1],
    },
  };

  return (
    <motion.div
      className={styles.statusIndicator}
      animate="animate"
      variants={pulseVariants}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className={styles.statusDot}>●</span>
      <span className={styles.statusText}>SYSTEM.ACTIVE</span>
      <span className={styles.statusDivider}>//</span>
      <span className={styles.locationText}>LOCATION: INDIA</span>
      <span className={styles.statusDivider}>//</span>
      <span className={styles.timezoneText}>TIMEZONE: UTC+5:30</span>
    </motion.div>
  );
};


export const ControlRoom: React.FC = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const canvasContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  return (
    <section className={styles.controlRoom}>
      {/* Left Column: Content */}
      <div className={styles.leftColumn}>
        {/* Header */}
        <motion.div
          className={styles.headerContainer}
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className={styles.mainHeader}>
            Ananya Krishna Srivastava
          </h1>

          <p className={styles.subLabel}>
            Technical Product Manager specializing in high-throughput data infrastructure, ML platforms, and agentic AI systems. Bridging the gap between deep technical constraints and user-centric roadmaps, I excel at turning complex data pipelines and AI capabilities into scalable, market-ready products that drive measurable business impact. With a strong foundation in engineering, data science, and agile experimentation, I focus on automating workflows, optimizing compute efficiency, and building intelligent agentic architectures to solve real-world operational bottlenecks.
          </p>
        </motion.div>

        {/* Status Tracker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <StatusIndicator />
        </motion.div>


        {/* CTA Buttons */}
        <motion.div
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#experience"
            className={`${styles.cta} ${styles.ctaPrimary}`}
            style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
          >
            Explore Work →
          </a>
        </motion.div>
      </div>

      {/* Right Column: 3D Canvas */}
      <motion.div
        className={styles.rightColumn}
        variants={canvasContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.canvasWrapper}>
          <InteractiveMesh3D />
        </div>
      </motion.div>
    </section>
  );
};

export default ControlRoom;
