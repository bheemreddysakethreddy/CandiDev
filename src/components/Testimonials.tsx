'use client';

import React from 'react';
import { Star, Award } from 'lucide-react';
import { TESTIMONIALS } from '@/data/mockData';

export default function Testimonials() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} color="var(--burgundy-accent)" />
            <span>Institute Success Stories</span>
          </div>
          <h2 className="section-title">
            Trusted by Placement Leaders & Bootcamp Founders
          </h2>
          <p className="section-desc">
            Hear from academic and corporate placement directors who scaled their student placement
            numbers using CandiDev as their specialized mock interview division.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.8rem',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card"
              style={{
                padding: '2.2rem',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Top: 5 Stars & Metric Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.2rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#d97706" color="#d97706" />
                    ))}
                  </div>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--burgundy-accent)',
                      background: 'var(--burgundy-soft)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--burgundy-border)',
                    }}
                  >
                    {t.stats}
                  </span>
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.65,
                    marginBottom: '1.6rem',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <img
                  src={t.avatar}
                  alt={t.author}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--burgundy-border)',
                  }}
                />
                <div>
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--text-heading)',
                    }}
                  >
                    {t.author}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--burgundy-accent)', fontWeight: 600 }}>
                    {t.role}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {t.organization}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
