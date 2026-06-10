/**
 * page.tsx - Main Portfolio Page
 * 
 * Next.js App Router page component that orchestrates all sections
 * Features:
 * - Complete page layout with all major sections
 * - Smooth scroll behavior with staggered animations
 * - Meta tags and SEO optimization
 */

import React from 'react';
import { ControlRoom } from '@/components/ControlRoom';
import { CaseStudies } from '@/components/CaseStudies';
import { WorkExperience } from '@/components/WorkExperience';
import { Footer } from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Ananya Krishna Srivastava',
  description:
    'Technical Product Manager specializing in high-throughput data infrastructure, ML platforms, and agentic AI systems. Bridging the gap between deep technical constraints and user-centric roadmaps, I excel at turning complex data pipelines and AI capabilities into scalable, market-ready products that drive measurable business impact. With a strong foundation in engineering, data science, and agile experimentation, I focus on automating workflows, optimizing compute efficiency, and building intelligent agentic architectures to solve real-world operational bottlenecks.',
  keywords: [
    'Ananya Krishna Srivastava',
    'Product Manager',
    'Technical PM',
    'Data Engineering',
    'ML Platforms',
    'LLM Orchestration',
    'AI Systems',
    'Product Strategy',
  ],
  author: 'Ananya Krishna Srivastava',
  openGraph: {
    title: 'Ananya Krishna Srivastava - Technical Product Manager',
    description:
      'Technical PM specializing in data infrastructure and agentic AI systems.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Background Effects */}
      <div className={styles.backgroundGradient} />
      <div className={styles.noiseTexture} />

      {/* Navigation Beacon (Optional) */}
      <nav className={styles.navBeacon}>
        <a href="#work" className={styles.navLink}>
          Work
        </a>
        <a href="#experience" className={styles.navLink}>
          Experience
        </a>
        <a href="#contact" className={styles.navLink}>
          Contact
        </a>
      </nav>

      {/* Sections */}
      <section id="hero" className={styles.section}>
        <ControlRoom />
      </section>

      <section id="work" className={styles.section}>
        <CaseStudies />
      </section>

      <section id="experience" className={styles.section}>
        <WorkExperience />
      </section>

      <section id="contact" className={styles.section}>
        <Footer />
      </section>
    </main>
  );
}
