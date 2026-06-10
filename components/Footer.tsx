'use client';

/**
 * Footer.tsx - Contact Protocol Section Component
 */

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

interface ContactLink {
  label: string;
  href?: string;
  icon?: string;
}

const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ananya-krishna-srivastava-51759721b/',
    icon: '👤',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AKSrivastava28',
    icon: '⚙️',
  },
  {
    label: 'Email',
    href: 'mailto:tushar28aks@gmail.com',
    icon: '✉️',
  },
];

interface ContactNodeProps {
  link: ContactLink;
  index: number;
}

const ContactNode: React.FC<ContactNodeProps> = ({ link, index }) => {
  const nodeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: 'easeOut',
      },
    },
    hover: {
      boxShadow: [
        '0 0 8px rgba(0, 242, 254, 0.2)',
        '0 0 16px rgba(0, 242, 254, 0.4)',
        '0 0 8px rgba(0, 242, 254, 0.2)',
      ],
      transition: { duration: 1.5, repeat: Infinity },
    },
  };

  return (
    <motion.a
      href={link.href || '#'}
      className={styles.contactNode}
      variants={nodeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.nodeIcon}>{link.icon}</span>
      <span className={styles.nodeLabel}>{link.label}</span>
      <motion.span
        className={styles.underline}
        layoutId="underline"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export const Footer: React.FC = () => {
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
    <footer className={styles.footer}>
      <div className={styles.gridOverlay} />

      <motion.div
        className={styles.footerContent}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className={styles.mainCta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.ctaText}>Let's build something extraordinary.</h2>
          <p className={styles.ctaSubtext}>
            Always open to discussing product strategy, AI systems architecture, and high-impact
            opportunities.
          </p>
        </motion.div>

        <motion.div className={styles.contactContainer} variants={containerVariants}>
          {CONTACT_LINKS.map((link, index) => (
            <ContactNode key={link.label} link={link} index={index} />
          ))}
        </motion.div>

        <motion.div
          className={styles.footerMeta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className={styles.metaText}>
            Crafted with attention to detail and shipped with intention.
          </p>
          <p className={styles.metaText}>© 2024 Portfolio. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
