import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CandiDev | Corporate Mock Interviews & Tech Readiness for Training Institutes',
  description:
    'Empower your students to pass corporate tech rounds. CandiDev provides 1-on-1 industry-grade mock interviews, live DSA coding simulations, system design reviews, and cohort diagnostic scorecards for training institutes and bootcamps.',
  keywords: [
    'mock interview service for institutes',
    'training institute placement booster',
    'corporate tech interview prep',
    'DSA mock interviews',
    'system design interview simulator',
    'student corporate readiness scorecard',
    'CandiDev',
  ],
  authors: [{ name: 'CandiDev Enterprise' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
