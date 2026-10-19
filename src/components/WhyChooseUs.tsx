'use client';

import React, { useState } from 'react';
import {
  Check,
  X,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  Clock,
  TrendingUp,
  FileCheck,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';
import { COMPARISON_ROWS } from '@/data/mockData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export default function WhyChooseUs({ onOpenBooking }: WhyChooseUsProps) {
  const [activeTab, setActiveTab] = useState<'pillars' | 'matrix'>('pillars');

  const reasons = [
    {
      icon: <Users size={22} color="var(--burgundy-accent)" />,
      title: '100% Active Corporate Veterans',
      subtitle: 'Zero Lecturers, Zero Random Freelancers',
      desc: 'You are tested by active Senior Engineers (L5+ / Staff SDEs) from Google, Amazon, Microsoft, and Uber who conduct real hiring committee rounds daily.',
    },
    {
      icon: <FileCheck size={22} color="#059669" />,
      title: 'Standardized 10-Point Hiring Rubric',
      subtitle: 'Quantifiable, Unbiased Bar',
      desc: 'Eliminates vague feedback. Your performance is scored across Big-O asymptotic analysis, code hygiene, system scalability, error handling, and STAR communication.',
    },
    {
      icon: <Clock size={22} color="#b45309" />,
      title: '2-Hour Diagnostic Report Turnaround',
      subtitle: 'Full Video Replay & Timestamped Bookmarks',
      desc: 'Receive your comprehensive 4-page diagnostic report with minute-by-minute video bookmarks showing exactly where you stumbled and how to fix it.',
    },
    {
      icon: <ShieldCheck size={22} color="var(--burgundy-accent)" />,
      title: 'Verified Badges Trusted by 420+ Companies',
      subtitle: 'Direct Screening Round Waiver',
      desc: 'Top quartile scorers receive verifiable cryptographic CandiDev credentials that corporate hiring partners use to bypass initial screening rounds.',
    },
    {
      icon: <Award size={22} color="#059669" />,
      title: 'Turnkey University Batch Automation',
      subtitle: '100+ Hours of Trainer Workload Saved',
      desc: 'Colleges and placement cells outsource their entire mock scheduling, interviewer logistics, and cohort analytics without exhausting internal faculty.',
    },
    {
      icon: <TrendingUp size={22} color="var(--burgundy-accent)" />,
      title: 'Proven +35% to +60% Placement Surge',
      subtitle: '3.4x Average Salary Package Increase',
      desc: 'Backed by real verified data from 85+ partner universities and over 18,500 candidates who transformed their technical interview outcomes.',
    },
  ];

  return (
    <section id="why-choose-us" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} color="var(--burgundy-accent)" />
            <span>Why Should You Choose Us</span>
          </div>
          <h2 className="section-title">
            The Gold Standard in Corporate Technical Interview Calibration
          </h2>
          <p className="section-desc">
            Why students, bootcamps, and top university placement cells choose CandiDev over internal classroom tests and casual peer practice platforms.
          </p>
        </div>

        {/* View Switcher: 6 Core Pillars vs Full Comparison Matrix */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              background: 'var(--bg-primary)',
              padding: '0.35rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-medium)',
              display: 'inline-flex',
              gap: '0.3rem',
            }}
          >
            <button
              onClick={() => setActiveTab('pillars')}
              style={{
                padding: '0.55rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeTab === 'pillars' ? 'var(--burgundy-accent)' : 'transparent',
                color: activeTab === 'pillars' ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.86rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              The 6 Core Advantages
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              style={{
                padding: '0.55rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeTab === 'matrix' ? 'var(--burgundy-accent)' : 'transparent',
                color: activeTab === 'matrix' ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.86rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Side-by-Side Comparison Matrix
            </button>
          </div>
        </div>

        {activeTab === 'pillars' ? (
          /* 6 Pillars Grid */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              marginBottom: '3.5rem',
            }}
          >
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2.2rem',
                  background: '#ffffff',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'var(--burgundy-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.2rem',
                      border: '1px solid var(--burgundy-border)',
                    }}
                  >
                    {reason.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--text-heading)',
                      marginBottom: '0.25rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {reason.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--burgundy-accent)',
                      marginBottom: '0.9rem',
                    }}
                  >
                    {reason.subtitle}
                  </div>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Full Detailed Comparison Matrix */
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              background: '#ffffff',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xl)',
              marginBottom: '3.5rem',
              overflowX: 'auto',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
                  <th style={{ padding: '1rem 1.2rem', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-heading)', width: '28%' }}>
                    Evaluation Dimension
                  </th>
                  <th style={{ padding: '1rem 1.2rem', fontSize: '0.84rem', fontWeight: 700, color: '#dc2626', width: '36%' }}>
                    Traditional College Mocks & Peer Platforms
                  </th>
                  <th style={{ padding: '1rem 1.2rem', fontSize: '0.84rem', fontWeight: 800, color: 'var(--burgundy-dark)', width: '36%', background: 'var(--burgundy-soft)' }}>
                    CandiDev Corporate Standard
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      background: idx % 2 === 0 ? '#ffffff' : '#fdfbfc',
                    }}
                  >
                    <td style={{ padding: '1.1rem 1.2rem', fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '1.1rem 1.2rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                        <X size={15} color="#dc2626" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.instituteInternal}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1.1rem 1.2rem', fontSize: '0.86rem', color: 'var(--text-primary)', fontWeight: 600, background: '#fff9fa' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                        <Check size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.candiDev}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div
          style={{
            background: 'var(--burgundy-soft)',
            border: '1px solid var(--burgundy-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--burgundy-dark)', marginBottom: '0.3rem' }}>
              Experience the CandiDev Difference With Zero Risk
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Book an individual 1-on-1 mock or request a free 15-student pilot batch for your engineering college today.
            </p>
          </div>
          <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
            <span>Book Your Session Now</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
