'use client';

import React, { useState } from 'react';
import {
  Terminal,
  Layers,
  Users,
  FileCheck,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SERVICE_PILLARS } from '@/data/mockData';

interface ServicesGridProps {
  onOpenBooking: () => void;
  onNavigateToSimulator: () => void;
}

export default function ServicesGrid({
  onOpenBooking,
  onNavigateToSimulator,
}: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'tech', label: 'Technical Rounds' },
    { id: 'behavioral', label: 'Behavioral & Culture' },
    { id: 'intelligence', label: 'Institute Dashboards' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal':
        return <Terminal size={24} color="#38bdf8" />;
      case 'Layers':
        return <Layers size={24} color="#818cf8" />;
      case 'Users':
        return <Users size={24} color="#f472b6" />;
      case 'FileCheck':
        return <FileCheck size={24} color="#34d399" />;
      case 'ShieldCheck':
        return <ShieldCheck size={24} color="#fbbf24" />;
      case 'BarChart3':
        return <BarChart3 size={24} color="#a78bfa" />;
      default:
        return <Terminal size={24} color="#38bdf8" />;
    }
  };

  const filteredPillars = SERVICE_PILLARS.filter((pillar) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'tech')
      return pillar.id === 'pillar-1' || pillar.id === 'pillar-2';
    if (activeCategory === 'behavioral') return pillar.id === 'pillar-3';
    if (activeCategory === 'intelligence')
      return (
        pillar.id === 'pillar-4' ||
        pillar.id === 'pillar-5' ||
        pillar.id === 'pillar-6'
      );
    return true;
  });

  return (
    <section id="services" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Enterprise Service Suite</span>
          </div>
          <h2 className="section-title">
            Comprehensive Corporate Mock Infrastructure
          </h2>
          <p className="section-desc">
            We provide training institutes with an end-to-end testing machine. Every round is
            structured to evaluate candidates under true corporate hiring conditions.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.65rem',
              marginTop: '2rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor:
                    activeCategory === cat.id
                      ? 'var(--cyan-glow)'
                      : 'var(--border-subtle)',
                  background:
                    activeCategory === cat.id
                      ? 'rgba(56, 189, 248, 0.15)'
                      : 'rgba(15, 23, 42, 0.5)',
                  color:
                    activeCategory === cat.id
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1.8rem',
          }}
        >
          {filteredPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-card"
              style={{
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.4rem',
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(pillar.icon)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(56, 189, 248, 0.1)',
                      color: '#38bdf8',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                    }}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 600,
                    marginBottom: '0.3rem',
                  }}
                >
                  {pillar.subtitle}
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    marginBottom: '0.9rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.4rem',
                  }}
                >
                  {pillar.description}
                </p>

                {/* Bullet Points */}
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    marginBottom: '1.8rem',
                  }}
                >
                  {pillar.bulletPoints.map((bullet, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color="#34d399"
                        style={{ flexShrink: 0, marginTop: '2px' }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                <button
                  onClick={onNavigateToSimulator}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#38bdf8',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: 0,
                  }}
                >
                  <span>Test in Sandbox</span>
                  <ArrowRight size={14} />
                </button>
                <button
                  onClick={onOpenBooking}
                  className="btn-accent"
                  style={{ fontSize: '0.78rem', padding: '0.4rem 0.85rem' }}
                >
                  Add to Cohort
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
