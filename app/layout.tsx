/**
 * layout.tsx - Root Layout Component
 * 
 * Next.js 13+ App Router layout wrapper
 * Configures global providers, metadata, and structure
 */

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Technical Product Manager - Data Infrastructure & AI Systems',
    template: '%s | Technical Product Manager',
  },
  description:
    'Orchestrating high-throughput data infrastructure & agentic AI systems. Product-led growth, ML platforms, LLM orchestration.',
  keywords: [
    'Product Manager',
    'Technical PM',
    'Data Engineering',
    'ML Platforms',
    'LLM Orchestration',
    'AI Systems',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    siteName: 'Technical Product Manager',
    title: 'Technical Product Manager - Data Infrastructure & AI Systems',
    description:
      'Orchestrating high-throughput data infrastructure & agentic AI systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Product Manager',
    description:
      'Orchestrating high-throughput data infrastructure & agentic AI systems.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#030303',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preload Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          as="style"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Performance: DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      
      <body>
        {/* Main Content */}
        {children}
        
        {/* Skip to Main Content Link (Accessibility) */}
        <a href="#main" className="sr-only">
          Skip to main content
        </a>
      </body>
    </html>
  );
}
