'use client';

/**
 * WorkExperience.tsx - Professional Work Experience Section
 */

import React from 'react';
import { motion } from 'framer-motion';
import styles from './WorkExperience.module.css';

interface Achievement {
  title: string;
  description: string;
}

interface Role {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: Achievement[];
}

const WORK_EXPERIENCE: Role[] = [
  {
    company: 'AppCair',
    position: 'Data Science Intern',
    duration: 'Aug. 2025 - Dec. 2025',
    location: 'Remote / On-site', // Update location if applicable
    description:
      'Focused on translating technical constraints into user-centric roadmaps, workflow automation, and optimizing data pipelines for real-time predictions and engineering efficiency.',
    achievements: [
      {
        title: 'Workflow Automation & Profiling Efficiency',
        description: 'Identified performance bottlenecks in engineer workflows and automated data collection, reducing profiling time by 60%.',
      },
      {
        title: 'Data Strategy & Real-Time Analytics',
        description: 'Defined data strategy for 250k+ records pipeline, enabling real-time power and runtime predictions for engineers.',
      },
      {
        title: 'Algorithmic Optimization Roadmap',
        description: 'Owned optimization roadmap using algorithmic search to recommend configurations, reducing tuning latency by 22%.',
      },
    ],
  },
  {
    company: 'West Bengal Transport Department',
    position: 'Operations Intern',
    duration: 'May. 2024 - July. 2024',
    location: 'West Bengal, India',
    description:
      'Conducted field operations analysis, documented critical workflow gaps, and leveraged data insights to map demand patterns and maximize route efficiency.',
    achievements: [
      {
        title: 'Operational Bottleneck Identification',
        description: 'Conducted on-ground depot visits and coordinated with traffic officials to identify operational bottlenecks for routes.',
      },
      {
        title: 'Workflow Documentation & Gap Analysis',
        description: 'Engaged with depot staff and officials to document ticketing workflows, successfully surfacing gaps in record management.',
      },
      {
        title: 'Route Revenue & Demand Analysis',
        description: 'Analyzed 50+ bus routes to identify peak revenue timings, demand patterns, and high-traffic operational days.',
      },
    ],
  },
];

interface ExperienceCardProps {
  role: Role;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ role, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={styles.experienceCard}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.cardHeader}>
        <div>
          <h3 className={styles.company}>{role.company}</h3>
          <h4 className={styles.position}>{role.position}</h4>
        </div>
        <span className={styles.duration}>{role.duration}</span>
      </div>

      <p className={styles.location}>📍 {role.location}</p>

      <p className={styles.description}>{role.description}</p>

      <div className={styles.achievements}>
        <h5 className={styles.achievementsTitle}>Key Achievements:</h5>
        <ul className={styles.achievementsList}>
          {role.achievements.map((achievement, idx) => (
            <li key={idx} className={styles.achievementItem}>
              <div className={styles.achievementTitle}>{achievement.title}</div>
              <div className={styles.achievementDescription}>
                {achievement.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const WorkExperience: React.FC = () => {
  return (
    <section className={styles.workExperienceSection}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</h2>
      </motion.div>

      <div className={styles.experienceTimeline}>
        {WORK_EXPERIENCE.map((role, index) => (
          <ExperienceCard key={role.company} role={role} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;