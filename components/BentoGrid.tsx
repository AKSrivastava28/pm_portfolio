'use client';

/**
 * BentoGrid.tsx - Reusable Grid Layout System Component
 */

import React from 'react';
import { motion } from 'framer-motion';
import styles from './BentoGrid.module.css';

interface BentoItemProps {
  id: string;
  children: React.ReactNode;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2 | 3;
  borderColor?: 'cyan' | 'green' | 'violet' | 'neutral';
  glassEffect?: boolean;
}

export const BentoItem: React.FC<BentoItemProps> = ({
  id,
  children,
  colSpan = 1,
  rowSpan = 1,
  borderColor = 'neutral',
  glassEffect = true,
}) => {
  return (
    <motion.div
      key={id}
      className={`${styles.bentoItem} ${styles[`col-span-${colSpan}`]} ${styles[`row-span-${rowSpan}`]} ${styles[`border-${borderColor}`]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={glassEffect ? styles.glassWrapper : undefined}>
        {children}
      </div>
    </motion.div>
  );
};

interface BentoGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: 'sm' | 'md' | 'lg';
}

export const BentoGrid: React.FC<BentoGridProps> = ({ 
  children, 
  columns = 4,
  gap = 'md'
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={`${styles.bentoGrid} ${styles[`gap-${gap}`]} ${styles[`cols-${columns}`]}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default BentoGrid;
