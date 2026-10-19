'use client';

import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Zap,
} from 'lucide-react';

export default function ProblemSolution() {
  const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('solution');

  const problems = [
    {
      title: '73% First-Round Rejection Trap',
      desc: 'Students know Python or React syntax, but freeze completely when asked to design scalable architectures or optimize algorithms live under corporate time pressure.',
      badge: 'High Campus Rejection',
    },
    {
      title: 'Trainer Burnout & Time Crunch',
      desc: 'Conducting sixty-minute 1-on-1 mock interviews for 80 students requires 100+ hours. Institute trainers burn out or skip mocks to finish syllabus deadlines.',
      badge: 'Operational Bottleneck',
    },
    {
      title: 'Blind Soft-Skill Rejections',
      desc: 'Candidates speak either too fast or give robotic answers without the STAR (Situation-Task-Action-Result) structure demanded by corporate hiring managers.',
      badge: 'Behavioral Gap',
    },
    {
      title: 'Zero Proof for Corporate Recruiters',
      desc: 'Hiring partners discount internal institute marks as biased. Institutes struggle to prove which students are genuinely corporate-grade prior to campus drives.',
      badge: 'Recruiter Distrust',
    },
  ];

  const solutions = [
    {
      title: 'Practical Startup Engineering Mirror',
      desc: 'We simulate the exact intensity, unscripted problem variants, and live debugging drills used by modern tech startups and product companies.',
      badge: 'Real-world Bar',
    },
    {
      title: 'Turnkey Outsourced Mock Operations',
      desc: 'Zero burden on your trainers. We handle slot booking, interviewer assignment, video recording, and post-interview debriefs end-to-end.',
      badge: '100% Automated',
    },
    {
      title: '10-Parameter Diagnostic Scorecards',
      desc: 'Students receive deep feedback covering Big-O optimization, clean code, error recovery, STAR responses, and a personalized 14-day study plan.',
      badge: 'Actionable Remediation',
    },
    {
      title: 'Measurable Placement Readiness',
      desc: 'Institutes showcase verified CandiDev candidate readiness scorecards to visiting hiring partners, giving students confidence and clarity.',
      badge: 'Direct Placements',
    },
  ];

  return (
    <section id="why-us" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} color="var(--burgundy-accent)" />
            <span>The Placement Gap Solved</span>
          </div>
          <h2 className="section-title">
            Why Classroom Training Alone Fails Corporate Tech Screens
          </h2>
          <p className="section-desc">
            Bridging the chasm between textbook programming and corporate hiring standards.
            See how CandiDev transforms student rejection into offer letters.
          </p>
        </div>

        {/* Comparison Toggle */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              background: '#ffffff',
              padding: '5px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <button
              onClick={() => setActiveTab('problem')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background:
                  activeTab === 'problem'
                    ? 'var(--rose-soft)'
                    : 'transparent',
                color:
                  activeTab === 'problem' ? '#9f1239' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <AlertTriangle size={16} />
              <span>The Institute Dilemma</span>
            </button>

            <button
              onClick={() => setActiveTab('solution')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background:
                  activeTab === 'solution'
                    ? 'var(--burgundy-accent)'
                    : 'transparent',
                color:
                  activeTab === 'solution' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <CheckCircle size={16} />
              <span>The CandiDev Solution</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {(activeTab === 'problem' ? problems : solutions).map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.8rem',
                background: '#ffffff',
                borderLeft:
                  activeTab === 'problem'
                    ? '4px solid #e11d48'
                    : '4px solid var(--burgundy-accent)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: activeTab === 'problem' ? '#9f1239' : 'var(--burgundy-accent)',
                    background:
                      activeTab === 'problem'
                        ? 'var(--rose-soft)'
                        : 'var(--burgundy-soft)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor:
                      activeTab === 'problem' ? 'var(--rose-border)' : 'var(--burgundy-border)',
                  }}
                >
                  {item.badge}
                </span>

                {activeTab === 'problem' ? (
                  <XCircle size={20} color="#e11d48" />
                ) : (
                  <CheckCircle size={20} color="#059669" />
                )}
              </div>

              <h3
                style={{
                  fontSize: '1.18rem',
                  fontWeight: 700,
                  marginBottom: '0.65rem',
                  color: 'var(--text-heading)',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '1.8rem 2.2rem',
            background: 'var(--burgundy-soft)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--burgundy-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <h4
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-heading)',
                marginBottom: '0.3rem',
              }}
            >
              Want to see where your current cohort stands?
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Conduct a quick 5-student pilot diagnostic mock to baseline your students against
              Tier-1 corporate benchmarks.
            </p>
          </div>
          <a href="#calculator" className="btn-primary" style={{ padding: '0.7rem 1.4rem' }}>
            Calculate Batch ROI <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
