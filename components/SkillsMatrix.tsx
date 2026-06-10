'use client';

/**
 * SkillsMatrix.tsx - Skills Dashboard Component
 */

import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsMatrix.module.css';

interface Skill {
  title: string;
  description: string;
}

interface SkillGroup {
  title: string;
  skills: Skill[];
}

const PRODUCT_OPERATIONS: SkillGroup[] = [
  {
    title: 'Market Strategy',
    skills: [
      { title: 'TAM/SAM/SOM Quantification', description: '$30M-$180M SaaS opportunity sizing' },
      { title: 'GTM & Positioning', description: 'Product-led growth loops and market entry' },
      { title: 'Pricing Strategy', description: 'Value-based and usage-based models' },
      { title: 'Competitive Analysis', description: 'Market landscape and differentiation' },
    ],
  },
  {
    title: 'Product Design',
    skills: [
      { title: 'UX/UI Principles', description: 'Minimalist glassmorphic design systems' },
      { title: 'User Research', description: 'Qualitative and quantitative insights' },
      { title: 'Wireframing & Prototyping', description: 'Figma, rapid iteration cycles' },
      { title: 'Design Systems', description: 'Token-based theme architecture' },
    ],
  },
  {
    title: 'Operations',
    skills: [
      { title: 'OKR & Roadmap Planning', description: 'Strategic prioritization frameworks' },
      { title: 'Cross-functional Coordination', description: 'Engineering, design, marketing alignment' },
      { title: 'Metrics & Analytics', description: 'North star definition and dashboards' },
      { title: 'Process Optimization', description: 'Agile, scrum, sprint execution' },
    ],
  },
];

const TECHNICAL_INFRASTRUCTURE: SkillGroup[] = [
  {
    title: 'Data & AI',
    skills: [
      { title: 'Machine Learning Systems', description: 'Contextual bandits, reinforcement learning' },
      { title: 'LLM Orchestration', description: 'Multi-agent coordination, prompt engineering' },
      { title: 'RAG & Vector Search', description: 'FAISS, semantic retrieval, embeddings' },
      { title: 'Data Pipeline Architecture', description: 'ETL, Kafka, real-time streaming' },
    ],
  },
  {
    title: 'Infrastructure',
    skills: [
      { title: 'Cloud Architecture', description: 'AWS, GCP, containerization, serverless' },
      { title: 'Database Design', description: 'PostgreSQL, MongoDB, Redis, vector DBs' },
      { title: 'API Design', description: 'REST, GraphQL, real-time WebSocket patterns' },
      { title: 'DevOps & CI/CD', description: 'Docker, Kubernetes, GitHub Actions' },
    ],
  },
  {
    title: 'Engineering',
    skills: [
      { title: 'Full-Stack Development', description: 'React, Next.js, TypeScript, Node.js' },
      { title: 'Real-Time Systems', description: 'WebSockets, Pub/Sub, event-driven architecture' },
      { title: '3D Graphics & WebGL', description: 'Three.js, Babylon.js, shader programming' },
      { title: 'Performance Optimization', description: 'Caching, indexing, query optimization' },
    ],
  },
];

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <motion.div
      className={styles.skillItem}
      whileHover={{ x: 6 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.checkmark}>✓</div>
      <div className={styles.skillContent}>
        <div className={styles.skillTitle}>{skill.title}</div>
        <div className={styles.skillDescription}>{skill.description}</div>
      </div>
    </motion.div>
  );
};

interface SkillGroupCardProps {
  group: SkillGroup;
  colorAccent: 'cyan' | 'green';
}

const SkillGroupCard: React.FC<SkillGroupCardProps> = ({ group, colorAccent }) => {
  return (
    <motion.div
      className={`${styles.skillGroupCard} ${styles[`accent-${colorAccent}`]}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <h4 className={styles.groupTitle}>{group.title}</h4>
      <div className={styles.skillsList}>
        {group.skills.map((skill, idx) => (
          <SkillItem key={idx} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

interface SkillsColumnProps {
  title: string;
  groups: SkillGroup[];
  colorAccent: 'cyan' | 'green';
}

const SkillsColumn: React.FC<SkillsColumnProps> = ({ title, groups, colorAccent }) => {
  const columnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className={`${styles.skillsColumn} ${styles[`border-${colorAccent}`]}`}
      variants={columnVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className={styles.columnTitle}>{title}</h3>

      <motion.div className={styles.groupsContainer} variants={columnVariants}>
        {groups.map((group, idx) => (
          <motion.div key={idx} variants={cardVariants}>
            <SkillGroupCard group={group} colorAccent={colorAccent} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export const SkillsMatrix: React.FC = () => {
  return (
    <section className={styles.skillsMatrixSection}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>CORE COMPETENCIES</h2>
      </motion.div>

      <div className={styles.columnsContainer}>
        <SkillsColumn
          title="Product & Operations"
          groups={PRODUCT_OPERATIONS}
          colorAccent="cyan"
        />
        <SkillsColumn
          title="Technical Infrastructure"
          groups={TECHNICAL_INFRASTRUCTURE}
          colorAccent="green"
        />
      </div>
    </section>
  );
};

export default SkillsMatrix;
