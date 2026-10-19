'use client';

import React from 'react';
import {
  Building2,
  Award,
  CheckCircle2,
  Clock,
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
      icon: <Award size={18} color="var(--burgundy-accent)" />,
      title: 'Skilled Startup Engineers & Leads',
      desc: 'Active software engineers & tech leads with deep product experience',
    },
    {
      icon: <CheckCircle2 size={18} color="#059669" />,
      title: 'Standardized 10-Point Technical Rubric',
      desc: 'Zero subjective bias; measured against practical engineering standards',
    },
    {
      icon: <Clock size={18} color="#b45309" />,
      title: '2-Hour Diagnostic Report Turnaround',
      desc: 'Instant notes, code review logs & 14-day study action plans',
    },
    {
      icon: <ShieldCheck size={18} color="var(--burgundy-accent)" />,
      title: 'Verified Job-Readiness Badges',
      desc: 'Practical evaluations showcasing candidate problem-solving skills',
    },
  ];

  return (
    <div
      style={{
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        background: '#ffffff',
        padding: '2.5rem 0',
      }}
    >
      <div className="container">
        {/* Partner Institutes Strip */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
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
            }}
          >
            {partnerInstitutes.map((name) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                <Building2 size={16} color="var(--burgundy-accent)" />
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
            borderTop: '1px solid var(--border-subtle)',
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
                  background: 'var(--burgundy-soft)',
                  borderRadius: '8px',
                  border: '1px solid var(--burgundy-border)',
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
                    color: 'var(--text-heading)',
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
