'use client';

import React from 'react';
import {
  ShieldCheck,
  Award,
  Users,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Briefcase,
  Layers,
} from 'lucide-react';
import { WHO_WE_ARE_DATA } from '@/data/mockData';

interface WhoWeAreProps {
  onOpenBooking: () => void;
}

export default function WhoWeAre({ onOpenBooking }: WhoWeAreProps) {
  return (
    <section id="who-we-are" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} color="var(--burgundy-accent)" />
            <span>Who Are We</span>
          </div>
          <h2 className="section-title">
            The Practical Tech Mock Interview Engine for Software Engineers
          </h2>
          <p className="section-desc">
            Bridging the gap between academic coding and real-world corporate hiring standards. We help students build interview-ready skills through industry-aligned mock interviews and practical feedback.
          </p>
        </div>

        {/* Story & Mission Split Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
            marginBottom: '3.5rem',
          }}
        >
          {/* Left Column: Our Origin & Story */}
          <div
            className="glass-card"
            style={{
              padding: '2.4rem',
              background: 'linear-gradient(180deg, #ffffff 0%, #faf8f9 100%)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--burgundy-accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '1rem',
                  background: 'var(--burgundy-soft)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--burgundy-border)',
                }}
              >
                <Compass size={13} />
                <span>Our Origin & Purpose</span>
              </div>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: 'var(--text-heading)',
                  marginBottom: '1.1rem',
                  lineHeight: 1.3,
                }}
              >
                Built Because 70% of Capable Students Bleed Out in Corporate Round 1
              </h3>
              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '1.2rem',
                }}
              >
                {WHO_WE_ARE_DATA.story}
              </p>
              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                CandiDev was created to help students prepare for the realities of technical interviews. We focus on the gap between academic learning and industry expectations, helping candidates strengthen problem-solving, communication, and interview confidence.
              </p>
            </div>

            {/* Micro stats banner */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                paddingTop: '1.8rem',
                marginTop: '1.8rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--burgundy-accent)' }}>
                  25+
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Skilled Startup Mentors
                </div>
              </div>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--burgundy-accent)' }}>
                  100+
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Realistic Mocks Delivered
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision & Guiding Oath */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                background: '#ffffff',
                border: '1px solid var(--border-medium)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.8rem',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'var(--burgundy-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--burgundy-accent)',
                  }}
                >
                  <Award size={18} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                  Our Mission
                </h4>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {WHO_WE_ARE_DATA.mission}
              </p>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '2rem',
                background: '#ffffff',
                border: '1px solid var(--border-medium)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.8rem',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'var(--burgundy-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--burgundy-accent)',
                  }}
                >
                  <ShieldCheck size={18} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                  Our Vision
                </h4>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {WHO_WE_ARE_DATA.vision}
              </p>
            </div>

            <div
              style={{
                padding: '1.6rem 2rem',
                background: 'var(--burgundy-soft)',
                border: '1px solid var(--burgundy-border)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--burgundy-dark)' }}>
                  Ready to test your candidates or yourself against real corporate standards?
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Book your first 1-on-1 mock or college pilot batch in under 2 minutes.
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="btn-primary"
                style={{ fontSize: '0.86rem', padding: '0.65rem 1.2rem' }}
              >
                <span>Book a Session</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Foundational Pillars */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>
              The 4 Pillars That Define Our DNA
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              How CandiDev protects students and institutes from artificial, generic coaching
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {WHO_WE_ARE_DATA.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.8rem',
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--burgundy-accent)',
                      background: 'var(--burgundy-soft)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--burgundy-border)',
                      marginBottom: '0.8rem',
                    }}
                  >
                    {pillar.badge}
                  </div>
                  <h4
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text-heading)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {pillar.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Interviewer Pedigree */}
        <div
          style={{
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.2rem' }}>
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
                marginBottom: '0.5rem',
              }}
            >
              <Briefcase size={13} />
              <span>Mentorship & Evaluation Team</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-heading)' }}>
              Guided by Skilled Engineers & Startup Tech Leads
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Our mentors are active software engineers and tech leads working in high-growth startups and fast-paced product companies.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.6rem',
            }}
          >
            {WHO_WE_ARE_DATA.leadership.map((leader, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.8rem',
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
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
                      gap: '0.9rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid var(--burgundy-border)',
                      }}
                    />
                    <div>
                      <h4
                        style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--text-heading)',
                        }}
                      >
                        {leader.name}
                      </h4>
                      <div
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          color: 'var(--burgundy-accent)',
                        }}
                      >
                        {leader.role}
                      </div>
                      <div
                        style={{
                          fontSize: '0.74rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {leader.pedigree}
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;{leader.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
