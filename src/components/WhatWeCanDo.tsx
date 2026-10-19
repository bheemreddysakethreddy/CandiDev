'use client';

import React, { useState } from 'react';
import {
  Terminal,
  FileCheck,
  Building,
  FileCode,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';
import { WHAT_WE_CAN_DO_DATA } from '@/data/mockData';

interface WhatWeCanDoProps {
  onOpenBooking: () => void;
  onNavigateToDashboard: () => void;
}

export default function WhatWeCanDo({
  onOpenBooking,
  onNavigateToDashboard,
}: WhatWeCanDoProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: '1-on-1 Simulations', label: '1-on-1 Corporate Mocks' },
    { id: 'Diagnostic Telemetry', label: 'Scorecards & Audits' },
    { id: 'Institutional Audits', label: 'College Batch Drives' },
    { id: 'Portfolio & Code Roast', label: 'Resume & GitHub Roasts' },
    { id: 'Behavioral Calibration', label: 'STAR Soft Skills' },
  ];

  const filteredItems = WHAT_WE_CAN_DO_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const getIcon = (id: string) => {
    switch (id) {
      case 'wwcd-1':
        return <Terminal size={22} color="var(--burgundy-accent)" />;
      case 'wwcd-2':
        return <FileCheck size={22} color="#059669" />;
      case 'wwcd-3':
        return <Building size={22} color="var(--burgundy-dark)" />;
      case 'wwcd-4':
        return <FileCode size={22} color="#b45309" />;
      case 'wwcd-5':
        return <Users size={22} color="var(--burgundy-accent)" />;
      case 'wwcd-6':
        return <ShieldCheck size={22} color="#059669" />;
      default:
        return <Layers size={22} color="var(--burgundy-accent)" />;
    }
  };

  return (
    <section id="what-we-can-do" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} color="var(--burgundy-accent)" />
            <span>What We Can Do</span>
          </div>
          <h2 className="section-title">
            Complete Suite of Corporate Mock & Diagnostic Solutions
          </h2>
          <p className="section-desc">
            From single-candidate high-stakes technical grilling to 1,000-student university campus placement audits, explore what CandiDev delivers end-to-end.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.55rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem',
                fontWeight: 600,
                border: activeCategory === cat.id
                  ? '1px solid var(--burgundy-accent)'
                  : '1px solid var(--border-medium)',
                background: activeCategory === cat.id
                  ? 'var(--burgundy-accent)'
                  : '#ffffff',
                color: activeCategory === cat.id
                  ? '#ffffff'
                  : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeCategory === cat.id ? 'var(--shadow-sm)' : 'none',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Capabilities */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3rem',
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '2.2rem',
                background: '#ffffff',
                border: '1px solid var(--border-medium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
              }}
            >
              <div>
                {/* Header row with icon and stats pill */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.2rem',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'var(--burgundy-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--burgundy-border)',
                    }}
                  >
                    {getIcon(item.id)}
                  </div>

                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: 'var(--burgundy-accent)',
                      background: 'var(--burgundy-soft)',
                      padding: '0.25rem 0.7rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--burgundy-border)',
                    }}
                  >
                    {item.stats}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.05em',
                    marginBottom: '0.3rem',
                  }}
                >
                  {item.category}
                </div>

                <h3
                  style={{
                    fontSize: '1.22rem',
                    fontWeight: 800,
                    color: 'var(--text-heading)',
                    marginBottom: '0.4rem',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                <div
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: 'var(--burgundy-accent)',
                    marginBottom: '0.9rem',
                  }}
                >
                  {item.subtitle}
                </div>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.4rem',
                  }}
                >
                  {item.description}
                </p>

                {/* Bullet highlights */}
                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '1.1rem',
                    marginBottom: '1.4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.55rem',
                  }}
                >
                  {item.highlights.map((bullet, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.55rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <CheckCircle2
                        size={15}
                        color="#059669"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action button */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                {item.id === 'wwcd-3' ? (
                  <button
                    onClick={onNavigateToDashboard}
                    className="btn-secondary"
                    style={{ width: '100%', fontSize: '0.84rem', padding: '0.6rem' }}
                  >
                    <span>View Institute Command Center</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={onOpenBooking}
                    className="btn-primary"
                    style={{ width: '100%', fontSize: '0.84rem', padding: '0.6rem' }}
                  >
                    <span>Book This Service</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            background: 'var(--burgundy-soft)',
            border: '1px solid var(--burgundy-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--burgundy-dark)', marginBottom: '0.3rem' }}>
              Need a Customized Corporate Bar for Your Tech Stack?
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              We build specialized question rubrics for FinTech, E-Commerce, Cloud Infrastructure, and AI Startups.
            </p>
          </div>
          <button onClick={onOpenBooking} className="btn-primary" style={{ padding: '0.75rem 1.4rem' }}>
            <span>Request Custom Bar Mock</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
