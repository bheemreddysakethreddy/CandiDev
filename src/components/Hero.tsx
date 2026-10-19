'use client';

import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Users,
  Calendar,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToDashboard: () => void;
}

export default function Hero({
  onOpenBooking,
  onNavigateToDashboard,
}: HeroProps) {
  return (
    <section
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          {/* Trust Pill */}
          <div
            className="section-tag"
            style={{
              cursor: 'pointer',
              marginBottom: '1.5rem',
            }}
            onClick={onNavigateToDashboard}
          >
            <Sparkles size={14} color="var(--burgundy-accent)" />
            <span>Dedicated Mock Interview Division for Training Institutes</span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '1.4rem',
              color: 'var(--text-heading)',
            }}
          >
            Bridge the Classroom Gap.{' '}
            <span style={{ color: 'var(--burgundy-accent)' }}>
              Turn Institute Students Into Corporate-Ready Tech Hires.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '780px',
              margin: '0 auto 2.2rem',
            }}
          >
            CandiDev partners with tech training institutes, colleges, and bootcamps to conduct
            rigorous, unscripted corporate mock interviews led by FAANG & Tier-1 lead engineers.
            Eliminate candidate anxiety, identify blindspots with 10-point rubrics, and deliver
            hiring-ready talent that corporate recruiters fight for.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
            }}
          >
            <button
              onClick={onOpenBooking}
              className="btn-primary"
              style={{
                padding: '0.9rem 2rem',
                fontSize: '1rem',
              }}
            >
              <span>Schedule Institute Pilot Batch</span>
              <ArrowRight size={17} />
            </button>

            <button
              onClick={onNavigateToDashboard}
              className="btn-secondary"
              style={{
                padding: '0.9rem 2rem',
                fontSize: '1rem',
              }}
            >
              <Users size={16} color="var(--burgundy-accent)" />
              <span>Explore Institute Portal</span>
            </button>
          </div>

          {/* Key Metric Highlights - Crisp White Light Mode Card */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.2rem',
              marginBottom: '4rem',
              padding: '1.6rem',
              background: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--burgundy-accent)',
                  fontFamily: 'var(--font-code)',
                }}
              >
                100+
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Corporate Mocks Delivered
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#059669',
                  fontFamily: 'var(--font-code)',
                }}
              >
                84.6%
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Placement Conversion Rate
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--burgundy-dark)',
                  fontFamily: 'var(--font-code)',
                }}
              >
                100+ hrs
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Trainer Hours Saved / Batch
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#b45309',
                  fontFamily: 'var(--font-code)',
                }}
              >
                4.73 / 5
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                Institute & Student Rating
              </div>
            </div>
          </div>
        </div>

        {/* Visual Platform Showcase Banner - Crisp Corporate Border, No Glow */}
        {/* <div
          style={{
            position: 'relative',
            maxWidth: '1100px',
            margin: '0 auto',
            borderRadius: 'var(--radius-xl)',
            padding: '6px',
            background: '#ffffff',
            border: '1px solid var(--border-medium)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              backgroundColor: '#fdfafb',
            }}
          >
            <img
              src="/images/candidev_hero_preview.jpg"
              alt="CandiDev Corporate Mock Interview Platform Simulator"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 'var(--radius-lg)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(24, 24, 27, 0.8) 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                padding: '2rem',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#ffffff',
                    border: '1px solid var(--border-medium)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--burgundy-accent)',
                    marginBottom: '0.5rem',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <span className="pulse-live" /> Corporate Assessment Architecture
                </div>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                  }}
                >
                  Industry-Standard Corporate Mocks with Automated Diagnostic Reports
                </h3>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <button
                  onClick={onNavigateToDashboard}
                  className="btn-primary"
                  style={{
                    padding: '0.7rem 1.3rem',
                    fontSize: '0.88rem',
                  }}
                >
                  <Users size={16} />
                  <span>View Cohort Portal</span>
                </button>
                <button
                  onClick={onOpenBooking}
                  className="btn-secondary"
                  style={{
                    padding: '0.7rem 1.3rem',
                    fontSize: '0.88rem',
                  }}
                >
                  <Calendar size={16} color="var(--burgundy-accent)" />
                  <span>Schedule Pilot</span>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
