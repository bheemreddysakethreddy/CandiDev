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
  Terminal,
  FileCheck,
  Building,
  FileCode,
  Users,
  ShieldCheck,
} from 'lucide-react';
import {
  MOCK_TYPES_DATA,
  WHAT_WE_CAN_DO_DATA,
  MockTrack,
} from '@/data/mockData';

interface WhatWeCanDoProps {
  onOpenBooking: () => void;
  onOpenBookingWithTrack: (trackName?: string) => void;
}

export default function WhatWeCanDo({
  onOpenBooking,
  onOpenBookingWithTrack,
}: WhatWeCanDoProps) {
  // Main view switcher: 'tracks' or 'services'
  const [viewMode, setViewMode] = useState<'tracks' | 'services'>('tracks');

  // Track filtering states
  const [trackCategory, setTrackCategory] = useState<string>('all');
  const [expandedTrackId, setExpandedTrackId] = useState<string | null>(null);

  // Service capability filtering states
  const [serviceCategory, setServiceCategory] = useState<string>('all');

  const trackCategories = [
    { id: 'all', label: 'All 8 Tracks' },
    { id: 'Coding & Algorithms', label: 'Coding & Algorithms' },
    { id: 'Architecture & Systems', label: 'Architecture & Systems' },
    { id: 'Specialized Engineering', label: 'Fullstack, Backend & Cloud' },
    { id: 'Behavioral & Leadership', label: 'Behavioral & Leadership' },
  ];

  const serviceCategories = [
    { id: 'all', label: 'All Capabilities' },
    { id: '1-on-1 Simulations', label: '1-on-1 Live Mocks' },
    { id: 'Diagnostic Telemetry', label: 'Scorecards & Audits' },
    { id: 'Cohort & Peer Drives', label: 'Cohort & Group Drives' },
    { id: 'Portfolio & Code Roast', label: 'Resume & GitHub Roasts' },
    { id: 'Behavioral Calibration', label: 'STAR Soft Skills' },
  ];

  const filteredTracks = MOCK_TYPES_DATA.filter((track) => {
    if (trackCategory === 'all') return true;
    return track.category === trackCategory;
  });

  const filteredServices = WHAT_WE_CAN_DO_DATA.filter((item) => {
    if (serviceCategory === 'all') return true;
    return item.category === serviceCategory;
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

  const getServiceIcon = (id: string) => {
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
    <section
      id="what-we-can-do"
      className="section"
      style={{ backgroundColor: 'var(--bg-primary)', position: 'relative' }}
    >
      {/* Anchor shim for legacy or direct #mock-types links */}
      <div id="mock-types" style={{ position: 'absolute', top: '-80px' }} />

      <div className="container">
        {/* Unified Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} color="var(--burgundy-accent)" />
            <span>What We Can Do & Mock Tracks</span>
          </div>
          <h2 className="section-title">
            One Unified Platform for Technical Mock Interviews & Readiness Audits
          </h2>
          <p className="section-desc">
            Explore the 8 specialized technical tracks we test, our 10-point evaluation rubric,
            and end-to-end mock solutions tailored for aspiring software engineers and candidate cohorts.
          </p>
        </div>

        {/* Primary View Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              background: '#ffffff',
              padding: '6px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-medium)',
              boxShadow: 'var(--shadow-sm)',
              gap: '0.4rem',
            }}
          >
            <button
              onClick={() => setViewMode('tracks')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.65rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background:
                  viewMode === 'tracks'
                    ? 'var(--burgundy-accent)'
                    : 'transparent',
                color:
                  viewMode === 'tracks' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Code size={16} />
              <span>Specialized Mock Tracks (8 Disciplines)</span>
            </button>

            <button
              onClick={() => setViewMode('services')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.65rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background:
                  viewMode === 'services'
                    ? 'var(--burgundy-accent)'
                    : 'transparent',
                color:
                  viewMode === 'services' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Layers size={16} />
              <span>Core Services & Deliverables (6 Capabilities)</span>
            </button>
          </div>
        </div>

        {/* ----------------- VIEW 1: MOCK TRACKS ----------------- */}
        {viewMode === 'tracks' && (
          <div>
            {/* Category Filter Pills for Tracks */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                marginBottom: '2.8rem',
              }}
            >
              {trackCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setTrackCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    border:
                      trackCategory === cat.id
                        ? '1px solid var(--burgundy-accent)'
                        : '1px solid var(--border-medium)',
                    background:
                      trackCategory === cat.id
                        ? 'var(--burgundy-accent)'
                        : '#ffffff',
                    color:
                      trackCategory === cat.id
                        ? '#ffffff'
                        : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow:
                      trackCategory === cat.id ? 'var(--shadow-sm)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid of 8 Tracks */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '1.8rem',
                marginBottom: '3rem',
              }}
            >
              {filteredTracks.map((track) => {
                const isExpanded = expandedTrackId === track.id;
                return (
                  <div
                    key={track.id}
                    className="glass-card"
                    style={{
                      padding: '2rem',
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
                      {/* Top Header Row with Icon & Badges */}
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
                            width: '42px',
                            height: '42px',
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

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {track.popularBadge && (
                            <span
                              style={{
                                fontSize: '0.72rem',
                                fontWeight: 700,
                                color: 'var(--burgundy-accent)',
                                background: 'var(--burgundy-soft)',
                                padding: '0.2rem 0.6rem',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid var(--burgundy-border)',
                              }}
                            >
                              {track.popularBadge}
                            </span>
                          )}
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.3rem',
                              fontSize: '0.75rem',
                              color: 'var(--text-muted)',
                              fontWeight: 600,
                            }}
                          >
                            <Clock size={13} />
                            <span>{track.duration}</span>
                          </span>
                        </div>
                      </div>

                      {/* Track Category & Title */}
                      <div
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.05em',
                          marginBottom: '0.3rem',
                        }}
                      >
                        {track.category}
                      </div>

                      <h3
                        style={{
                          fontSize: '1.22rem',
                          fontWeight: 800,
                          color: 'var(--text-heading)',
                          marginBottom: '0.5rem',
                          lineHeight: 1.3,
                        }}
                      >
                        {track.name}
                      </h3>

                      {/* Target Roles Pills */}
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.35rem',
                          marginBottom: '0.9rem',
                        }}
                      >
                        {track.targetRoles.map((role, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 600,
                              background: 'var(--bg-primary)',
                              color: 'var(--text-secondary)',
                              padding: '0.15rem 0.55rem',
                              borderRadius: '4px',
                              border: '1px solid var(--border-subtle)',
                            }}
                          >
                            {role}
                          </span>
                        ))}
                      </div>

                      <p
                        style={{
                          fontSize: '0.86rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55,
                          marginBottom: '1.2rem',
                        }}
                      >
                        {track.overview}
                      </p>

                      {/* Expand/Collapse Toggle Button */}
                      <button
                        onClick={() => toggleExpand(track.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--burgundy-accent)',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          padding: 0,
                          marginBottom: '1rem',
                        }}
                      >
                        <span>
                          {isExpanded
                            ? 'Hide Syllabus & Sample Question'
                            : 'View Syllabus, Question & Rubric'}
                        </span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>

                      {/* Expandable Panel */}
                      {isExpanded && (
                        <div
                          style={{
                            background: 'var(--bg-primary)',
                            padding: '1.1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--border-subtle)',
                            marginBottom: '1.2rem',
                          }}
                        >
                          <div
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              color: 'var(--text-muted)',
                              marginBottom: '0.4rem',
                            }}
                          >
                            Core Topics Tested:
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '0.35rem',
                              marginBottom: '0.8rem',
                            }}
                          >
                            {track.coreTopics.map((topic, tIdx) => (
                              <span
                                key={tIdx}
                                style={{
                                  fontSize: '0.74rem',
                                  color: 'var(--text-primary)',
                                  background: '#ffffff',
                                  padding: '0.2rem 0.55rem',
                                  borderRadius: '4px',
                                  border: '1px solid var(--border-subtle)',
                                }}
                              >
                                • {topic}
                              </span>
                            ))}
                          </div>

                          <div
                            style={{
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              color: 'var(--burgundy-accent)',
                              marginBottom: '0.35rem',
                            }}
                          >
                            Sample Unscripted Drill:
                          </div>
                          <p
                            style={{
                              fontSize: '0.82rem',
                              color: 'var(--text-primary)',
                              lineHeight: 1.5,
                              fontFamily: 'var(--font-code)',
                              background: '#ffffff',
                              padding: '0.65rem',
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
                            Rubric Evaluation Focus:
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

                    {/* Card Footer: Level & Direct Booking CTA */}
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
                        <strong style={{ color: 'var(--text-primary)' }}>
                          {track.difficulty.split(' ')[0]}
                        </strong>
                      </div>

                      <button
                        onClick={() => onOpenBookingWithTrack(track.name)}
                        className="btn-primary"
                        style={{ fontSize: '0.82rem', padding: '0.55rem 1.05rem' }}
                      >
                        <span>Book This Mock</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ----------------- VIEW 2: CORE SERVICES & DELIVERABLES ----------------- */}
        {viewMode === 'services' && (
          <div>
            {/* Filter Pills for Services */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                marginBottom: '2.8rem',
              }}
            >
              {serviceCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setServiceCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    border:
                      serviceCategory === cat.id
                        ? '1px solid var(--burgundy-accent)'
                        : '1px solid var(--border-medium)',
                    background:
                      serviceCategory === cat.id
                        ? 'var(--burgundy-accent)'
                        : '#ffffff',
                    color:
                      serviceCategory === cat.id
                        ? '#ffffff'
                        : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow:
                      serviceCategory === cat.id ? 'var(--shadow-sm)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid of 6 Capabilities */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '1.8rem',
                marginBottom: '3rem',
              }}
            >
              {filteredServices.map((item) => (
                <div
                  key={item.id}
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
                    {/* Header Row with Icon and Stats Pill */}
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
                        {getServiceIcon(item.id)}
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
                        fontSize: '0.74rem',
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

                    {/* Highlights List */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.55rem',
                        marginBottom: '1.8rem',
                      }}
                    >
                      {item.highlights.map((hl, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.6rem',
                            fontSize: '0.82rem',
                            color: 'var(--text-primary)',
                            lineHeight: 1.45,
                          }}
                        >
                          <CheckCircle2
                            size={15}
                            color="#059669"
                            style={{ flexShrink: 0, marginTop: '2px' }}
                          />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div
                    style={{
                      paddingTop: '1.2rem',
                      borderTop: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Available for All Candidates & Cohorts
                    </span>

                    <button
                      onClick={onOpenBooking}
                      className="btn-primary"
                      style={{ fontSize: '0.82rem', padding: '0.55rem 1.1rem' }}
                    >
                      <span>Book Service</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Unified Bottom Callout Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #faf8f9 100%)',
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
              <span>Standardized 10-Point Technical Diagnostic Report</span>
            </div>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                color: 'var(--text-heading)',
                marginBottom: '0.4rem',
              }}
            >
              Every Mock Round Includes a Detailed 14-Day Remediation Plan
            </h3>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                maxWidth: '640px',
              }}
            >
              Within 2 hours of your session, receive a personalized breakdown covering Big-O efficiency,
              code readability, live debugging demeanor, and STAR storytelling.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="btn-primary"
            style={{
              padding: '0.85rem 1.8rem',
              fontSize: '0.92rem',
            }}
          >
            <span>Book a Session Now</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
