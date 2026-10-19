'use client';

import React, { useState } from 'react';
import {
  Code,
  Layers,
  Cpu,
  Globe,
  Database,
  Layout,
  Cloud,
  MessageSquare,
  Clock,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import { MOCK_TYPES_DATA, MockTrack } from '@/data/mockData';

interface MockTypesExplorerProps {
  onOpenBookingWithTrack: (trackName?: string) => void;
}

export default function MockTypesExplorer({
  onOpenBookingWithTrack,
}: MockTypesExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedTrackId, setExpandedTrackId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All 8 Tracks' },
    { id: 'Coding & Algorithms', label: 'Coding & Algorithms' },
    { id: 'Architecture & Systems', label: 'Architecture & Systems' },
    { id: 'Specialized Engineering', label: 'Fullstack, Backend & Cloud' },
    { id: 'Behavioral & Leadership', label: 'Behavioral & Leadership' },
  ];

  const filteredTracks = MOCK_TYPES_DATA.filter((track) => {
    if (activeCategory === 'all') return true;
    return track.category === activeCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedTrackId(expandedTrackId === id ? null : id);
  };

  const getTrackIcon = (id: string) => {
    switch (id) {
      case 'mock-dsa':
        return <Code size={20} color="var(--burgundy-accent)" />;
      case 'mock-hld':
        return <Layers size={20} color="var(--burgundy-accent)" />;
      case 'mock-lld':
        return <Cpu size={20} color="var(--burgundy-accent)" />;
      case 'mock-fullstack':
        return <Globe size={20} color="var(--burgundy-accent)" />;
      case 'mock-backend':
        return <Database size={20} color="var(--burgundy-accent)" />;
      case 'mock-frontend':
        return <Layout size={20} color="var(--burgundy-accent)" />;
      case 'mock-devops':
        return <Cloud size={20} color="var(--burgundy-accent)" />;
      case 'mock-behavioral':
        return <MessageSquare size={20} color="var(--burgundy-accent)" />;
      default:
        return <Code size={20} color="var(--burgundy-accent)" />;
    }
  };

  return (
    <section id="mock-types" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} color="var(--burgundy-accent)" />
            <span>What Kind of Mocks We Can Take</span>
          </div>
          <h2 className="section-title">
            Specialized Corporate Mock Tracks for Every Engineering Discipline
          </h2>
          <p className="section-desc">
            We don’t do generic, one-size-fits-all interviews. Choose from 8 practical mock tracks calibrated against high-growth tech startups and modern product hiring standards.
          </p>
        </div>

        {/* Category Filters */}
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
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tracks Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
          }}
        >
          {filteredTracks.map((track) => {
            const isExpanded = expandedTrackId === track.id;

            return (
              <div
                key={track.id}
                className="glass-card"
                style={{
                  padding: '2.2rem',
                  background: '#ffffff',
                  border: '1px solid var(--border-medium)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'all 0.25s ease',
                }}
              >
                <div>
                  {/* Top Bar: Icon, Duration, and Badges */}
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
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: 'var(--burgundy-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid var(--burgundy-border)',
                        }}
                      >
                        {getTrackIcon(track.id)}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.78rem',
                          color: 'var(--text-muted)',
                          fontWeight: 600,
                        }}
                      >
                        <Clock size={14} />
                        <span>{track.duration}</span>
                      </div>
                    </div>

                    {track.popularBadge && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          background: 'var(--burgundy-accent)',
                          padding: '0.2rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                        }}
                      >
                        {track.popularBadge}
                      </span>
                    )}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--text-heading)',
                      marginBottom: '0.4rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {track.name}
                  </h3>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginBottom: '1rem',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Briefcase size={13} color="var(--burgundy-accent)" />
                    <span>Target: {track.targetRoles.join(', ')}</span>
                  </div>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.3rem',
                    }}
                  >
                    {track.overview}
                  </p>

                  {/* Core Topics Pills */}
                  <div style={{ marginBottom: '1.4rem' }}>
                    <div
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.05em',
                        marginBottom: '0.6rem',
                      }}
                    >
                      Core Concepts Tested:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {track.coreTopics.map((topic, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--text-primary)',
                            background: 'var(--bg-primary)',
                            border: '1px solid var(--border-subtle)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '4px',
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sample Question Toggle */}
                  <button
                    onClick={() => toggleExpand(track.id)}
                    style={{
                      width: '100%',
                      background: isExpanded ? 'var(--burgundy-soft)' : '#faf8f9',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.65rem 0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--text-heading)',
                      cursor: 'pointer',
                      marginBottom: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <HelpCircle size={14} color="var(--burgundy-accent)" />
                      <span>{isExpanded ? 'Hide Sample Corporate Prompt' : 'View Sample Corporate Prompt'}</span>
                    </div>
                    {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>

                  {/* Expanded Sample Question & Rubric */}
                  {isExpanded && (
                    <div
                      style={{
                        background: '#ffffff',
                        border: '1px solid var(--burgundy-border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '1rem',
                        marginBottom: '1.2rem',
                        animation: 'fadeIn 0.2s ease',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: 'var(--burgundy-accent)',
                          marginBottom: '0.4rem',
                        }}
                      >
                        Sample Corporate Drill:
                      </div>
                      <p
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--text-primary)',
                          lineHeight: 1.5,
                          fontFamily: 'var(--font-code)',
                          background: '#fcfcfc',
                          padding: '0.6rem',
                          borderRadius: '4px',
                          border: '1px solid var(--border-subtle)',
                          marginBottom: '0.8rem',
                        }}
                      >
                        &ldquo;{track.sampleQuestion}&rdquo;
                      </p>

                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                          marginBottom: '0.3rem',
                        }}
                      >
                        Evaluation Rubric Focus:
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        {track.rubricFocus.map((rf, rIdx) => (
                          <div
                            key={rIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              fontSize: '0.76rem',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            <CheckCircle2 size={12} color="#059669" />
                            <span>{rf}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom CTA to Book This Specific Track */}
                <div
                  style={{
                    paddingTop: '1.1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <span>Level: </span>
                    <strong style={{ color: 'var(--text-primary)' }}>{track.difficulty.split(' ')[0]}</strong>
                  </div>

                  <button
                    onClick={() => onOpenBookingWithTrack(track.name)}
                    className="btn-primary"
                    style={{ fontSize: '0.82rem', padding: '0.55rem 1rem' }}
                  >
                    <span>Book This Mock</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Simulator Link */}
        <div
          style={{
            background: 'linear-gradient(135deg, #fdfbfb 0%, #faf8f9 100%)',
            color: 'var(--text-primary)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-medium)',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--burgundy-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.4rem',
              }}
            >
              <Cpu size={14} />
              <span>Interactive Practice Sandbox</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
              Want to Experience the Live Code & Rubric Simulator Right Now?
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
              Test your code execution against real test cases and observe how our skilled startup engineer mentors score you in real-time.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('portal');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
            style={{
              padding: '0.75rem 1.4rem',
              fontSize: '0.88rem',
            }}
          >
            <span>Launch Live Portal</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
