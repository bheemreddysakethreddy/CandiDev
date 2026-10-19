'use client';

import React, { useState } from 'react';
import {
  Code2,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigateToDashboard: () => void;
}

export default function Footer({
  onOpenBooking,
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
        borderTop: '1px solid var(--border-medium)',
        background: '#faf8f9',
        padding: '5rem 0 2.5rem',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Top CTA Banner */}
        <div
          style={{
            background: 'var(--burgundy-soft)',
            border: '1px solid var(--burgundy-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            marginBottom: '4.5rem',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--burgundy-accent)',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.8rem',
            }}
          >
            <Award size={15} />
            <span>Ready for the 2026 Corporate Campus Hiring Season?</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 800,
              color: 'var(--text-heading)',
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
            Book a 1-on-1 session or launch a 15-student pilot batch with CandiDev today. Receive complete 10-parameter
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
              <span>Book a Session Now</span>
              <ArrowRight size={17} />
            </button>
            <button
              onClick={onNavigateToDashboard}
              className="btn-secondary"
              style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}
            >
              <span>Explore Institute Command Center</span>
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
                  borderRadius: '9px',
                  background: 'var(--burgundy-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Code2 size={20} color="#ffffff" strokeWidth={2.3} />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                Candi<span style={{ color: 'var(--burgundy-accent)' }}>Dev</span>
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
              The premier Corporate Mock Interview & Technical Assessment Engine for Colleges,
              Bootcamps, and Software Engineers. Helping candidates clear Tier-1 corporate engineering bars.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontSize: '0.8rem', fontWeight: 600 }}>
              <ShieldCheck size={16} /> Standardized Corporate Hiring Bar
            </div>
          </div>

          {/* Col 2: Core Platform Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--text-heading)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.2rem',
              }}
            >
              Core Navigation
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
                <a href="#who-we-are" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Who Are We
                </a>
              </li>
              <li>
                <a href="#what-we-can-do" style={{ color: 'inherit', textDecoration: 'none' }}>
                  What We Can Do
                </a>
              </li>
              <li>
                <a href="#mock-types" style={{ color: 'inherit', textDecoration: 'none' }}>
                  What Kind of Mocks We Can Take
                </a>
              </li>
              <li>
                <a href="#helpful-impact" style={{ color: 'inherit', textDecoration: 'none' }}>
                  How Many Found Us Helpful
                </a>
              </li>
              <li>
                <a href="#colleges" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Which Colleges Tied Up With Us
                </a>
              </li>
              <li>
                <a href="#our-flow" style={{ color: 'inherit', textDecoration: 'none' }}>
                  What Kind of Flow We Follow
                </a>
              </li>
              <li>
                <a href="#why-choose-us" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Why Should You Choose Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Channels */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--text-heading)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.2rem',
              }}
            >
              Connect Channels
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
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ color: '#059669', fontWeight: 600, textDecoration: 'none' }}>
                  💬 WhatsApp: +91 98765 43210
                </a>
              </li>
              <li>
                <a href="https://discord.gg/candidev" target="_blank" rel="noopener noreferrer" style={{ color: '#5865F2', fontWeight: 600, textDecoration: 'none' }}>
                  🎮 Discord (25K+ Dev Community)
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/candidev" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', fontWeight: 600, textDecoration: 'none' }}>
                  💼 LinkedIn Official Page
                </a>
              </li>
              <li>
                <a href="https://t.me/candidev_prep" target="_blank" rel="noopener noreferrer" style={{ color: '#229ED9', fontWeight: 600, textDecoration: 'none' }}>
                  ✈️ Telegram DSA & Jobs Channel
                </a>
              </li>
              <li>
                <a href="mailto:students@candidev.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  ✉️ students@candidev.com
                </a>
              </li>
              <li>
                <a href="mailto:placements@candidev.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  🏫 placements@candidev.com
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--burgundy-accent)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: '0.88rem',
                    textAlign: 'left',
                  }}
                >
                  ⚡ Open Session Booking Modal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--text-heading)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1.2rem',
              }}
            >
              Campus Placement Brief
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
                  background: '#ffffff',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.55rem 0.8rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-primary)',
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
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontWeight: 600,
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
            borderTop: '1px solid var(--border-subtle)',
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
            Mock Partner for Universities & Engineers.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
              Terms of Service
            </a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
              Hiring Partner SLA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
