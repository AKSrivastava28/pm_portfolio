'use client';

/**
 * CaseStudies.tsx - Case Studies Display Component
 * Formatted dynamically for technical product evaluation with linked repositories.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './CaseStudies.module.css';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  focus: string;
  narrative: string;
  pillars: {
    title: string;
    description: string;
    details: string[];
  }[];
  tags: string[];
  ctas: { label: string; href: string }[];
  emoji?: string;
  color?: 'cyan' | 'green' | 'violet';
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fibr-ai',
    emoji: '🛠️',
    title: 'Clickstream Events Engineering',
    subtitle: 'Contextual Bandits & Real-Time ML Experimentation Platform',
    focus: 'Data Platform Engineering & Personalization Loops',
    narrative:
      'Designed and implemented an end-to-end data pipeline and real-time feedback loop system for multi-armed contextual bandit training.',
    pillars: [
      {
        title: 'High-Throughput Pipeline',
        description: 'Built 4 concurrent ETL streams processing clickstream and conversions',
        details: ['100,550 sample State-Action-Reward dataset', '129K+ events aggregated', 'Sub-second latency'],
      },
      {
        title: 'Data Quality & Guardrails',
        description: '14-point automated validation system',
        details: ['Zero-null metrics enforcement', '95%+ context hit rates', 'Anomaly detection'],
      },
      {
        title: 'Production SLA Design',
        description: 'Hot Cache → Warm Store → Cold Store lifecycle',
        details: ['Kafka deduplication', '5-minute update SLAs', '99.9% uptime'],
      },
    ],
    tags: ['Python', 'Kafka', 'Redis', 'Data Engineering'],
    ctas: [
      { label: '[View Repository]', href: 'https://github.com/AKSrivastava28/engineering_data' },
      { label: '[Architecture Doc]', href: 'https://github.com/AKSrivastava28/engineering_data/blob/main/REALTIME_FEEDBACK_ARCHITECTURE.md' }
    ],
    color: 'cyan',
  },
  {
    id: 'offerflow',
    emoji: '🤖',
    title: 'OfferFlow',
    subtitle: 'AI-Powered B2B SaaS Generation Workspace',
    focus: 'Generative AI, RAG, and Product-Led Growth',
    narrative:
      'Acted as founding PM to validate, architect, and construct an agentic RAG workspace automating offer letter generation.',
    pillars: [
      {
        title: 'Market Analysis & GTM',
        description: '$30M–$180M SAM evaluation',
        details: ['Freemium pricing matrix', 'Self-serve user loops', 'Startup ecosystem focus'],
      },
      {
        title: 'LLM System Architecture',
        description: 'Agentic RAG pipeline with semantic chunking',
        details: ['Claude API integration', 'FAISS vector database', 'Prompt engineering'],
      },
      {
        title: 'Business Impact',
        description: 'Eliminated 2.3 FTE backlogs monthly',
        details: ['85% turnaround reduction', '10-15% cost-per-hire savings', '3.2x compliance improvement'],
      },
    ],
    tags: ['Claude API', 'RAG', 'Flask', 'Product Strategy'],
    ctas: [
      { label: '[Code Repository]', href: 'https://github.com/AKSrivastava28/assignment2' },
      { label: '[Product Case Study]', href: 'https://docs.google.com/document/d/1jKZDoJiLuIol7ccnodsenep8H13ecxEN6CnbL5h85do/edit?tab=t.0#heading=h.p0idisi9wbib' } // Update this route anchor relative to public directory if rendering inline pdf viewer
    ],
    color: 'green',
  },
  {
    id: 'logistics',
    emoji: '📦',
    title: 'Agentic Logistics Workflow',
    subtitle: 'Enterprise Operations Automation Platform',
    focus: 'Multi-Agent Orchestration & Workflow Automation',
    narrative:
      'Designed and implemented a production-ready agentic orchestration system for intelligent autonomous logistics workflows.',
    pillars: [
      {
        title: 'Operational Automation',
        description: 'Replaced manual processing with autonomous execution',
        details: ['60% dispatch friction reduction', 'Recursive routing protocols', 'Request-to-fulfillment acceleration'],
      },
      {
        title: 'Context & Data Reliability',
        description: 'High-fidelity operational pipelines',
        details: ['Zero state-loss guarantees', 'Persistent workflow memory', 'Temporal consistency'],
      },
      {
        title: 'Exception Handling',
        description: 'Human-in-the-loop with audit trails',
        details: ['Fallback routing', 'Auto-escalation', 'Decision audit trails'],
      },
    ],
    tags: ['AI Workflows', 'Logistics', 'LLM Coordination'],
    ctas: [
      { label: '[Explore Architecture]', href: 'https://github.com/AKSrivastava28/agentic_logistic_workflow' }
    ],
    color: 'violet',
  },
  {
    id: 'youtube-rag',
    emoji: '📺',
    title: 'YouTube RAG Assistant',
    subtitle: 'Video Knowledge Discovery & Summarization Engine',
    focus: 'Multi-Modal RAG & User Experience for AI',
    narrative:
      'Designed and shipped an AI assistant capable of digesting long-form video tutorials and processing real-time semantic queries.',
    pillars: [
      {
        title: 'Context Retrieval',
        description: '40% token window cost reduction',
        details: ['Transcript extraction', 'Vector index matching', 'Multi-language support'],
      },
      {
        title: 'User-Centric Synthesis',
        description: 'Summary templates emphasizing practical timestamps',
        details: ['Code snippet extraction', 'Multi-format outputs', 'Persona-matched learning'],
      },
      {
        title: 'Edge Case Management',
        description: 'Multi-modal alignment handling',
        details: ['Confidence scoring', 'Source attribution', 'Audio translation recovery'],
      },
    ],
    tags: ['RAG', 'Vector Search', 'Multi-Modal', 'UX for AI'],
    ctas: [
      { label: '[View Repository]', href: 'https://github.com/AKSrivastava28/youtube_rag' }
    ],
    color: 'cyan',
  },
  {
    id: 'research-agents',
    emoji: '🧠',
    title: 'Multi-Research Agent System',
    subtitle: 'Specialized LLM Collaboration Engine',
    focus: 'Multi-Agent Orchestration & Iterative Prompt Engineering',
    narrative:
      'Engineered a multi-agent AI framework with specialized LLM agents for autonomous technical research and validation.',
    pillars: [
      {
        title: 'Agentic Orchestration',
        description: 'Asynchronous critique and validation loops',
        details: ['Persona-based prompts', 'Recursive refinement', 'Hallucination resolution'],
      },
      {
        title: 'Human-in-the-Loop',
        description: 'Operator intervention at decision points',
        details: ['Review gates', 'Intervention hooks', 'Coherence improvement'],
      },
      {
        title: 'Performance',
        description: '35% token usage reduction',
        details: ['Output quality maximization', 'Artifact caching', 'Efficient orchestration'],
      },
    ],
    tags: ['LLM Orchestration', 'Multi-Agent', 'Prompt Engineering'],
    ctas: [
      { label: '[Launch Framework Code]', href: 'https://github.com/AKSrivastava28/multi-research-agent' }
    ],
    color: 'green',
  },
  {
    id: 'habit-tracker',
    emoji: '📊',
    title: 'Full-Stack Habit Tracker MVP',
    subtitle: 'Productivity Engine & User Loop Design',
    focus: 'End-to-End Product Execution & Consumer Behavior',
    narrative:
      'Scoped and developed a full-stack MVP habit-tracking platform designed to drive stickiness through engagement loops.',
    pillars: [
      {
        title: 'Core MVP Definition',
        description: 'Ruthlessly scoped to high-leverage release',
        details: ['Tracking, streaks, history', '3-week sprint cycle', 'Speed-to-market validation'],
      },
      {
        title: 'Behavioral Loops',
        description: 'Daily triggers and streak mechanics',
        details: ['Social sharing', 'Analytics visualization', 'Celebration mechanics'],
      },
      {
        title: 'Full-Stack Integrity',
        description: 'Clean data modeling end-to-end',
        details: ['State management consistency', 'Transaction execution', 'Optimistic updates'],
      },
    ],
    tags: ['Full-Stack', 'React/Next.js', 'PostgreSQL', 'Analytics'],
    ctas: [
      { label: '[Explore Codebase]', href: 'https://github.com/AKSrivastava28/habit-tracker' }
    ],
    color: 'violet',
  },
];

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={`${styles.caseStudyCard} ${styles[`color-${study.color}`]}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.headerTop}>
          <div className={styles.emoji}>{study.emoji}</div>
          <h3 className={styles.cardTitle}>{study.title}</h3>
        </div>
        <button
          className={styles.expandButton}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? "Collapse case study details" : "Expand case study details"}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      <div className={styles.cardMeta}>
        <p className={styles.subtitle}>{study.subtitle}</p>
        <span className={styles.focus}>{study.focus}</span>
      </div>

      <p className={styles.narrative}>{study.narrative}</p>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isExpanded ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.expandableContent}
      >
        <div className={styles.pillars}>
          {study.pillars.map((pillar, idx) => (
            <div key={idx} className={styles.pillar}>
              <h4 className={styles.pillarTitle}>{pillar.title}</h4>
              <p className={styles.pillarDescription}>{pillar.description}</p>
              <ul className={styles.pillarDetails}>
                {pillar.details.map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <div className={styles.tagsContainer}>
        {study.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.ctasContainer}>
        {study.ctas.map((cta, idx) => (
          <a 
            key={idx} 
            href={cta.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaLink}
          >
            {cta.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export const CaseStudies: React.FC = () => {
  return (
    <section className={styles.caseStudiesSection}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>RECONSTRUCTED WORK & RESEARCH</h2>
      </motion.div>

      <div className={styles.studiesGrid}>
        {CASE_STUDIES.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;