'use client';

import React, { useState } from 'react';
import {
  Building2,
  GraduationCap,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MapPin,
  TrendingUp,
  Search,
  Quote,
} from 'lucide-react';
import { COLLEGES_TIED_UP, TiedUpCollege } from '@/data/mockData';

interface CollegesTiedUpProps {
  onOpenBookingForCollege: () => void;
}

export default function CollegesTiedUp({
  onOpenBookingForCollege,
}: CollegesTiedUpProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Campus Partners' },
    { id: 'Tier-1 University', label: 'Tier-1 Universities' },
    { id: 'Premier Tech Institute', label: 'Premier Tech Institutes' },
    { id: 'Top Private University', label: 'Top Private Universities' },
    { id: 'Flagship Academy', label: 'Coding Bootcamps' },
  ];

  const filteredColleges = COLLEGES_TIED_UP.filter((col) => {
    const matchesCategory =
      selectedCategory === 'all' || col.category === selectedCategory;
    const matchesSearch =
      col.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      col.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      col.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="colleges" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} color="var(--burgundy-accent)" />
            <span>Which Colleges Tied Up With Us</span>
          </div>
          <h2 className="section-title">
            Partnered with Engineering Colleges, Cells & Pilot Cohorts
          </h2>
          <p className="section-desc">
            From premier institutes to emerging campuses, explore how placement cells and student cohorts collaborate with CandiDev for practical startup-level mock drives.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  border: selectedCategory === cat.id
                    ? '1px solid var(--burgundy-accent)'
                    : '1px solid var(--border-medium)',
                  background: selectedCategory === cat.id
                    ? 'var(--burgundy-accent)'
                    : '#ffffff',
                  color: selectedCategory === cat.id
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

          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '280px',
            }}
          >
            <Search
              size={16}
              color="var(--text-muted)"
              style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }}
            />
            <input
              type="text"
              placeholder="Search by college or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem 0.8rem 0.5rem 2.2rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-medium)',
                fontSize: '0.82rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Colleges Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3.5rem',
          }}
        >
          {filteredColleges.map((college) => (
            <div
              key={college.id}
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
                {/* Header row with badge and MoU year */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--burgundy-accent)',
                      background: 'var(--burgundy-soft)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--burgundy-border)',
                    }}
                  >
                    {college.badge}
                  </span>

                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {college.mouYear}
                  </span>
                </div>

                {/* College Name & Location */}
                <h3
                  style={{
                    fontSize: '1.22rem',
                    fontWeight: 800,
                    color: 'var(--text-heading)',
                    marginBottom: '0.35rem',
                    lineHeight: 1.3,
                  }}
                >
                  {college.shortName}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.2rem',
                  }}
                >
                  <MapPin size={13} color="var(--burgundy-accent)" />
                  <span>{college.location}</span>
                </div>

                {/* Metrics 3-Col Bar */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '0.5rem',
                    background: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem',
                    textAlign: 'center',
                    marginBottom: '1.2rem',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--burgundy-accent)' }}>
                      {college.studentsTrained}+
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Trained
                    </div>
                  </div>
                  <div style={{ borderLeft: '1px solid var(--border-subtle)', borderRight: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#059669' }}>
                      {college.placementRate}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Placed Rate
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#b45309' }}>
                      {college.avgCtcBoost}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Avg CTC Jump
                    </div>
                  </div>
                </div>

                {/* Dean Endorsement Quote */}
                <div
                  style={{
                    background: '#fdfafb',
                    borderLeft: '3px solid var(--burgundy-accent)',
                    padding: '0.85rem 1rem',
                    borderRadius: '0 6px 6px 0',
                    marginBottom: '1.2rem',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.5,
                      fontStyle: 'italic',
                      marginBottom: '0.5rem',
                    }}
                  >
                    &ldquo;{college.deanEndorsement}&rdquo;
                  </p>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)' }}>
                    {college.deanName}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {college.deanTitle}
                  </div>
                </div>
              </div>

              {/* Verified Badge Footer */}
              <div
                style={{
                  paddingTop: '0.9rem',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.76rem',
                  color: '#059669',
                  fontWeight: 600,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={13} />
                  <span>Official MoU Verified</span>
                </div>

                <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>
                  {college.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Partner Your College MoU Callout Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--burgundy-dark) 0%, #1e050c 100%)',
            color: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#fecdd3',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '0.6rem',
              }}
            >
              <Award size={15} />
              <span>For Deans, HODs & Placement Directors</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 800, marginBottom: '0.8rem', lineHeight: 1.25 }}>
              Partner Your Engineering College With CandiDev for the 2026 Campus Drive Season
            </h3>
            <p style={{ fontSize: '0.94rem', color: '#f3e8eb', lineHeight: 1.6 }}>
              Eliminate trainer fatigue, conduct standardized 1-on-1 technical mocks for your entire batch, and equip visiting corporate recruiters with verifiable student readiness scorecards.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <button
              onClick={onOpenBookingForCollege}
              style={{
                background: '#ffffff',
                color: 'var(--burgundy-dark)',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                padding: '0.85rem 1.6rem',
                fontSize: '0.92rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
              }}
            >
              <span>Request College MoU & Pilot Batch</span>
              <ArrowRight size={16} />
            </button>
            <div style={{ fontSize: '0.76rem', color: '#e5e7eb', textAlign: 'center' }}>
              ⚡ 48-Hour Onboarding • Free 15-Student Pilot Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
