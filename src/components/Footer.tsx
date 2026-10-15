'use client';

import React, { useState } from 'react';
import {
  Code2,
  Mail,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Heart,
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigateToSimulator: () => void;
  onNavigateToDashboard: () => void;
}

export default function Footer({
  onOpenBooking,
  onNavigateToSimulator,
  onNavigateToDashboard,
}: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: '#04060d',
        padding: '5rem 0 2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Top CTA Banner */}
        <div
          style={{
            background:
              'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(99, 102, 241, 0.12) 100%)',
            border: '1px solid var(--border-accent)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            marginBottom: '4.5rem',
            boxShadow: 'var(--shadow-glow-cyan)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#38bdf8',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.8rem',
            }}
          >
            <Award size={15} />
            <span>Ready for the 2026 Campus Hiring Season?</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '1rem',
            }}
          >
            Stop Losing Placement Offers to Unprepared Technical Mocks.
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              margin: '0 auto 2rem',
              lineHeight: 1.6,
            }}
          >
            Book a 15-student pilot batch with CandiDev today. Receive complete 10-parameter
            diagnostic reports and watch your cohort placement rate jump by 35–60%.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={onOpenBooking}
              className="btn-primary"
              style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
            >
              <span>Schedule Institute Pilot Batch</span>
              <ArrowRight size={17} />
            </button>
            <button
              onClick={onNavigateToSimulator}
              className="btn-secondary"
              style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
            >
              <span>Test Interactive Simulator</span>
            </button>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1.2rem',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Code2 size={20} color="#ffffff" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                Candi<span style={{ color: '#38bdf8' }}>Dev</span>
              </span>
            </div>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.2rem',
              }}
            >
              The premier Corporate Mock Interview & Technical Assessment Engine for Training
              Institutes, EdTechs, and Bootcamps. Helping students clear Tier-1 software engineering
              bars.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399', fontSize: '0.8rem', fontWeight: 600 }}>
              <ShieldCheck size={16} /> ISO 27001 Certified Evaluation Standards
            </div>
          </div>

          {/* Col 2: Services & Tracks */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.2rem',
              }}
            >
              Service Tracks
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
              }}
            >
              <li>
                <a href="#services" style={{ color: 'inherit' }}>
                  Full Stack MERN & Web Architecture
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'inherit' }}>
                  Backend Java & Spring Boot Microservices
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'inherit' }}>
                  DSA & Algorithmic Problem Solving
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'inherit' }}>
                  Corporate Behavioral & STAR Articulation
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'inherit' }}>
                  DevOps, Cloud Native & Docker Drills
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'inherit' }}>
                  Data Science & Applied ML Rounds
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Institute Portal */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.2rem',
              }}
            >
              Institute Solutions
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
              }}
            >
              <li>
                <a href="#portal" onClick={(e) => { e.preventDefault(); onNavigateToDashboard(); }}>
                  Placement Director Dashboard
                </a>
              </li>
              <li>
                <a href="#simulator" onClick={(e) => { e.preventDefault(); onNavigateToSimulator(); }}>
                  Interactive Live Mock Simulator
                </a>
              </li>
              <li>
                <a href="#calculator">Cohort ROI & Pricing Estimator</a>
              </li>
              <li>
                <a href="#comparison">Traditional Mocks vs CandiDev</a>
              </li>
              <li>
                <a href="#faqs">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onOpenBooking(); }}>
                  Book Institute Pilot Batch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.2rem',
              }}
            >
              Institute Placement Brief
            </h4>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                marginBottom: '1rem',
              }}
            >
              Bi-weekly analysis of corporate tech hiring trends, fresh interview question leaks, and
              curriculum benchmarks sent to placement heads.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.4rem' }}>
              <input
                required
                type="email"
                placeholder="dean@institute.edu"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{
                  flexGrow: 1,
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.55rem 0.8rem',
                  fontSize: '0.82rem',
                  color: '#ffffff',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '0.55rem 0.9rem', fontSize: '0.82rem' }}
              >
                Join
              </button>
            </form>

            {subscribed && (
              <div
                style={{
                  marginTop: '0.6rem',
                  fontSize: '0.78rem',
                  color: '#34d399',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <CheckCircle2 size={13} /> Subscribed to Placement Brief!
              </div>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © 2026 CandiDev Inc. All rights reserved. Specialized Corporate
            Mock Partner for Training Institutes.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'inherit' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: 'inherit' }}>
              Terms of Service
            </a>
            <a href="#" style={{ color: 'inherit' }}>
              Hiring Partner SLA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
