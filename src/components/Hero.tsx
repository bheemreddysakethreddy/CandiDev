'use client';

import React from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Play,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
  Clock,
  Terminal,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToSimulator: () => void;
  onNavigateToDashboard: () => void;
}

export default function Hero({
  onOpenBooking,
  onNavigateToSimulator,
  onNavigateToDashboard,
}: HeroProps) {
  return (
    <section
      style={{
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient glowing orbs */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '400px',
          background:
            'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 80%)',
          filter: 'blur(70px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

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
            <Sparkles size={14} />
            <span>Dedicated Mock Interview Division for Training Institutes</span>
            <span
              style={{
                marginLeft: '0.4rem',
                background: 'rgba(56, 189, 248, 0.25)',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '0.72rem',
                color: '#fff',
              }}
            >
              Batch 2026 Ready
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}
          >
            Bridge the Classroom Gap.{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Turn Institute Students Into Corporate-Ready Tech Hires.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '780px',
              margin: '0 auto 2.5rem',
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
              gap: '1.2rem',
              marginBottom: '3.5rem',
            }}
          >
            <button
              onClick={onOpenBooking}
              className="btn-primary"
              style={{
                padding: '0.95rem 2rem',
                fontSize: '1.05rem',
              }}
            >
              <span>Schedule Institute Pilot Batch</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={onNavigateToSimulator}
              className="btn-secondary"
              style={{
                padding: '0.95rem 2rem',
                fontSize: '1.05rem',
              }}
            >
              <Play size={17} color="#38bdf8" />
              <span>Experience Mock Simulator</span>
            </button>
          </div>

          {/* Key Metric Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.2rem',
              marginBottom: '4.5rem',
              padding: '1.5rem',
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#38bdf8',
                  fontFamily: 'var(--font-code)',
                }}
              >
                12,400+
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Corporate Mocks Delivered
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#34d399',
                  fontFamily: 'var(--font-code)',
                }}
              >
                84.6%
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Placement Conversion Rate
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#a78bfa',
                  fontFamily: 'var(--font-code)',
                }}
              >
                140+ hrs
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Trainer Hours Saved / Batch
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#fbbf24',
                  fontFamily: 'var(--font-code)',
                }}
              >
                4.92 / 5
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Institute & Student Rating
              </div>
            </div>
          </div>
        </div>

        {/* Visual Platform Showcase Banner */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1100px',
            margin: '0 auto',
            borderRadius: 'var(--radius-xl)',
            padding: '8px',
            background:
              'linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.25) 50%, rgba(139, 92, 246, 0.4) 100%)',
            boxShadow:
              '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(56, 189, 248, 0.25)',
          }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              backgroundColor: '#070a13',
            }}
          >
            {/* Real generated high-res mock interview preview */}
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

            {/* Interactive Overlay Callout */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(7, 10, 19, 0.1) 0%, rgba(7, 10, 19, 0.65) 100%)',
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
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1px solid var(--border-accent)',
                    padding: '0.4rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#38bdf8',
                    marginBottom: '0.5rem',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="pulse-live" /> Live Technical Screening Simulation
                </div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                  }}
                >
                  Realistic Corporate Mock Environment with Instant Rubric Generation
                </h3>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <button
                  onClick={onNavigateToSimulator}
                  className="btn-primary"
                  style={{
                    boxShadow: '0 4px 20px rgba(6, 182, 212, 0.6)',
                    padding: '0.75rem 1.4rem',
                    fontSize: '0.9rem',
                  }}
                >
                  <Terminal size={17} />
                  <span>Launch Live Simulator</span>
                </button>
                <button
                  onClick={onNavigateToDashboard}
                  className="btn-secondary"
                  style={{
                    background: 'rgba(15, 23, 42, 0.85)',
                    padding: '0.75rem 1.4rem',
                    fontSize: '0.9rem',
                  }}
                >
                  <Users size={17} />
                  <span>View Cohort Portal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
