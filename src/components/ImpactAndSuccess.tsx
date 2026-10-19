'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  Award,
  Star,
  CheckCircle2,
  Building2,
  ArrowRight,
  Sparkles,
  Users,
  Briefcase,
  DollarSign,
} from 'lucide-react';
import { IMPACT_METRICS } from '@/data/mockData';

interface ImpactAndSuccessProps {
  onOpenBooking: () => void;
}

export default function ImpactAndSuccess({ onOpenBooking }: ImpactAndSuccessProps) {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);

  const currentStory = IMPACT_METRICS.verifiedStudentSuccessStories[selectedStoryIndex];

  return (
    <section id="helpful-impact" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} color="var(--burgundy-accent)" />
            <span>How Many Found Our Services Helpful</span>
          </div>
          <h2 className="section-title">
            100+ Candidates Evaluated. 86% Interview Success Rate.
          </h2>
          <p className="section-desc">
            We measure our worth strictly by offers bagged and career trajectories transformed. Explore verified data, before-and-after scorecards, and genuine student feedback.
          </p>
        </div>

        {/* 6 Key Headline Impact Metrics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.2rem',
            marginBottom: '3.5rem',
          }}
        >
          {IMPACT_METRICS.headlineStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.6rem 1.4rem',
                background: '#ffffff',
                border: '1px solid var(--border-medium)',
                textAlign: 'center',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.3rem)',
                  fontWeight: 800,
                  color: 'var(--burgundy-accent)',
                  lineHeight: 1.1,
                  marginBottom: '0.4rem',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: 'var(--text-heading)',
                  marginBottom: '0.2rem',
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Before vs After Impact Comparison Table */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            background: '#ffffff',
            border: '1px solid var(--border-medium)',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--burgundy-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '0.4rem',
              }}
            >
              <TrendingUp size={14} />
              <span>Measurable Cohort Transformation</span>
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-heading)' }}>
              Placement Outcomes: With CandiDev vs Without CandiDev
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              Data compiled across 100+ evaluated candidates and student mock sessions.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
                  <th style={{ padding: '0.9rem 1.2rem', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                    Recruitment Benchmark
                  </th>
                  <th style={{ padding: '0.9rem 1.2rem', fontSize: '0.84rem', fontWeight: 700, color: '#dc2626' }}>
                    Traditional Preparation / No CandiDev
                  </th>
                  <th style={{ padding: '0.9rem 1.2rem', fontSize: '0.84rem', fontWeight: 700, color: '#059669' }}>
                    With CandiDev Corporate Mocks
                  </th>
                  <th style={{ padding: '0.9rem 1.2rem', fontSize: '0.84rem', fontWeight: 700, color: 'var(--burgundy-accent)' }}>
                    Net Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {IMPACT_METRICS.outcomesComparison.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      background: idx % 2 === 0 ? '#ffffff' : '#fdfbfc',
                    }}
                  >
                    <td style={{ padding: '1rem 1.2rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                      {row.metric}
                    </td>
                    <td style={{ padding: '1rem 1.2rem', fontSize: '0.86rem', color: '#dc2626', fontWeight: 600 }}>
                      {row.withoutCandiDev}
                    </td>
                    <td style={{ padding: '1rem 1.2rem', fontSize: '0.88rem', color: '#059669', fontWeight: 700 }}>
                      {row.withCandiDev}
                    </td>
                    <td style={{ padding: '1rem 1.2rem', fontSize: '0.86rem', color: 'var(--burgundy-accent)', fontWeight: 800 }}>
                      {row.delta}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verified Student Success Stories Showcase */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-heading)' }}>
              Verified Student Offer Breakdowns
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Click on each candidate below to see how their mock diagnostic scores translated into dream corporate offers.
            </p>
          </div>

          {/* Student Selector Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.8rem',
              marginBottom: '2rem',
            }}
          >
            {IMPACT_METRICS.verifiedStudentSuccessStories.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => setSelectedStoryIndex(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: selectedStoryIndex === idx
                    ? '2px solid var(--burgundy-accent)'
                    : '1px solid var(--border-medium)',
                  background: selectedStoryIndex === idx ? 'var(--burgundy-soft)' : '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <img
                  src={story.avatar}
                  alt={story.name}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: selectedStoryIndex === idx ? 'var(--burgundy-dark)' : 'var(--text-primary)',
                  }}
                >
                  {story.name} ({story.placedCompany})
                </span>
              </button>
            ))}
          </div>

          {/* Active Story Card */}
          <div
            className="glass-card"
            style={{
              padding: '2.5rem',
              background: '#ffffff',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xl)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Candidate Profile & Offer Badge */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                <img
                  src={currentStory.avatar}
                  alt={currentStory.name}
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--burgundy-border)',
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                    {currentStory.name}
                  </h4>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    {currentStory.college}
                  </div>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--burgundy-accent)',
                    }}
                  >
                    Track: {currentStory.track}
                  </div>
                </div>
              </div>

              {/* Offer Bagged Card */}
              <div
                style={{
                  background: 'var(--burgundy-soft)',
                  border: '1px solid var(--burgundy-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.2rem',
                  marginBottom: '1.2rem',
                }}
              >
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--burgundy-accent)', marginBottom: '0.2rem' }}>
                  Verified Offer Secured:
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                  {currentStory.placedCompany} — {currentStory.role}
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#059669', marginTop: '0.2rem' }}>
                  {currentStory.package}
                </div>
              </div>

              {/* Readiness Score Jump */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Initial Mock Score
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#dc2626' }}>
                    {currentStory.initialScore} / 100
                  </div>
                </div>
                <div style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>➔</div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    Final Corporate Score
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#059669' }}>
                    {currentStory.finalScore} / 100
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Story Quote & Action CTA */}
            <div>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#d97706" color="#d97706" />
                ))}
              </div>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                  marginBottom: '1.8rem',
                }}
              >
                &ldquo;{currentStory.quote}&rdquo;
              </p>

              <button
                onClick={onOpenBooking}
                className="btn-primary"
                style={{ padding: '0.75rem 1.4rem', fontSize: '0.88rem' }}
              >
                <span>Book a Mock Session Like {currentStory.name.split(' ')[0]}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
