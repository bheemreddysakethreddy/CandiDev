'use client';

import React from 'react';
import {
  Building2,
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export default function StatsRibbon() {
  const partnerInstitutes = [
    'Apex Institute of Tech',
    'CodeSprint Academy',
    'FullStackForge Bootcamp',
    'NexGen Software School',
    'DataVanguard AI Labs',
    'CloudScale Training Hub',
    'CyberMatrix Academy',
  ];

  const valueProps = [
    {
      icon: <Award size={18} color="#38bdf8" />,
      title: 'FAANG & Tier-1 Lead Interviewers',
      desc: 'Active corporate software leaders with 5+ yrs experience',
    },
    {
      icon: <CheckCircle2 size={18} color="#34d399" />,
      title: 'Standardized 10-Point Corporate Rubric',
      desc: 'Zero subjective bias; measured against exact hiring thresholds',
    },
    {
      icon: <Clock size={18} color="#fbbf24" />,
      title: '2-Hour Diagnostic Report Turnaround',
      desc: 'Instant video replay, timestamped logs & 14-day action plans',
    },
    {
      icon: <ShieldCheck size={18} color="#a78bfa" />,
      title: 'Verified Corporate Competency Badges',
      desc: 'Cryptographic credentials trusted by 70+ hiring companies',
    },
  ];

  return (
    <div
      style={{
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'rgba(11, 16, 29, 0.6)',
        backdropFilter: 'blur(10px)',
        padding: '2.5rem 0',
      }}
    >
      <div className="container">
        {/* Partner Institutes Ticker / Strip */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1.2rem',
            }}
          >
            Trusted by Directors of Training Institutes & Bootcamps Across Tech Hubs
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.2rem',
              opacity: 0.85,
            }}
          >
            {partnerInstitutes.map((name) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                }}
              >
                <Building2 size={16} color="#38bdf8" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Value Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {valueProps.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: '0.85rem',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  padding: '0.55rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderRadius: '10px',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.2rem',
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
