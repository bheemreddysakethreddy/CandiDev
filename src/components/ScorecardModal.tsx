'use client';

import React from 'react';
import {
  X,
  CheckCircle2,
  AlertTriangle,
  Printer,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { Student } from '@/data/mockData';

interface ScorecardModalProps {
  student: Student | null;
  onClose: () => void;
}

export default function ScorecardModal({
  student,
  onClose,
}: ScorecardModalProps) {
  if (!student) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#ffffff',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg)',
          padding: '2.2rem',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: '#f3f4f6',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {/* Scorecard Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '1.8rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src={student.avatar}
              alt={student.name}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid var(--burgundy-accent)',
              }}
            />
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.2rem',
                }}
              >
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                  {student.name}
                </h3>
                {student.status === 'Corporate Ready' && (
                  <span className="badge-ready">
                    <CheckCircle2 size={12} /> Corporate Ready
                  </span>
                )}
                {student.status === 'Needs Polish' && (
                  <span className="badge-polish">
                    <AlertTriangle size={12} /> Needs Polish
                  </span>
                )}
                {student.status === 'At Risk' && (
                  <span className="badge-risk">
                    <AlertTriangle size={12} /> At Risk
                  </span>
                )}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Target Track: <strong style={{ color: 'var(--text-heading)' }}>{student.targetRole}</strong> • {student.track}
              </p>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '0.2rem',
                }}
              >
                Evaluated by {student.interviewer} • {student.interviewDate}
              </div>
            </div>
          </div>

          {/* Big Readiness Score Pill */}
          <div
            style={{
              textAlign: 'center',
              padding: '0.8rem 1.6rem',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--burgundy-soft)',
              border: '1px solid var(--burgundy-border)',
            }}
          >
            <div
              style={{
                fontSize: '0.72rem',
                color: 'var(--burgundy-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: 700,
              }}
            >
              Corporate Index
            </div>
            <div
              style={{
                fontSize: '2.4rem',
                fontWeight: 900,
                color:
                  student.readinessScore >= 85
                    ? '#059669'
                    : student.readinessScore >= 70
                    ? '#d97706'
                    : '#e11d48',
                fontFamily: 'var(--font-code)',
                lineHeight: 1.1,
              }}
            >
              {student.readinessScore}
              <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/100</span>
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: student.readinessScore >= 85 ? '#059669' : '#d97706',
              }}
            >
              {student.readinessScore >= 85
                ? 'SDE-1 Threshold Cleared'
                : 'Remediation Required'}
            </div>
          </div>
        </div>

        {/* 6 Dimension Skill Breakdown Grid */}
        <div style={{ marginBottom: '1.8rem' }}>
          <h4
            style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
            }}
          >
            Core Corporate Competency Matrix
          </h4>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}
          >
            {[
              { label: 'DSA & Big-O Optimization', val: student.metrics.dsa, color: 'var(--burgundy-accent)' },
              { label: 'System Architecture & Scalability', val: student.metrics.systemDesign, color: '#059669' },
              { label: 'Production Code Hygiene', val: student.metrics.codeQuality, color: 'var(--burgundy-dark)' },
              { label: 'Executive STAR Communication', val: student.metrics.communication, color: '#d97706' },
              { label: 'Live Debugging & Recovery', val: student.metrics.debugging, color: '#701a31' },
              { label: 'Behavioral Poise Under Pressure', val: student.metrics.behavioral, color: '#b45309' },
            ].map((metric, i) => (
              <div
                key={i}
                style={{
                  padding: '0.9rem',
                  background: '#faf8f9',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>{metric.label}</span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: metric.color,
                      fontFamily: 'var(--font-code)',
                    }}
                  >
                    {Math.round(metric.val)}%
                  </span>
                </div>
                <div
                  style={{
                    height: '5px',
                    background: '#e5e7eb',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${metric.val}%`,
                      height: '100%',
                      backgroundColor: metric.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interviewer Qualitative Summary */}
        <div
          style={{
            padding: '1.2rem',
            background: 'var(--burgundy-soft)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--burgundy-border)',
            marginBottom: '1.8rem',
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--burgundy-accent)',
              letterSpacing: '0.05em',
              marginBottom: '0.4rem',
            }}
          >
            Interviewer Panel Assessment & Corporate Verdict
          </div>
          <p
            style={{
              fontSize: '0.92rem',
              color: 'var(--text-heading)',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            &ldquo;{student.interviewerSummary}&rdquo;
          </p>
        </div>

        {/* Strengths & Growth Areas Side-by-Side */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.2rem',
            marginBottom: '1.8rem',
          }}
        >
          {/* Strengths */}
          <div
            style={{
              padding: '1.2rem',
              background: 'var(--emerald-soft)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--emerald-border)',
            }}
          >
            <h5
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#065f46',
                marginBottom: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <CheckCircle2 size={15} /> Observed Corporate Strengths
            </h5>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}
            >
              {student.strengths.map((str, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.82rem',
                    color: '#064e3b',
                    lineHeight: 1.5,
                  }}
                >
                  • {str}
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Areas */}
          <div
            style={{
              padding: '1.2rem',
              background: 'var(--amber-soft)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--amber-border)',
            }}
          >
            <h5
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#92400e',
                marginBottom: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <AlertTriangle size={15} /> High-Priority Blindspots
            </h5>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}
            >
              {student.growthAreas.map((ga, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.82rem',
                    color: '#78350f',
                    lineHeight: 1.5,
                  }}
                >
                  • {ga}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 14-Day Remediation Plan */}
        <div
          style={{
            padding: '1.2rem',
            background: '#faf8f9',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '1.8rem',
          }}
        >
          <h5
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--burgundy-accent)',
              marginBottom: '0.6rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <TrendingUp size={15} /> 14-Day Targeted Action Plan Before Campus Drives
          </h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {student.actionPlan.map((action, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-primary)',
                }}
              >
                <span
                  style={{
                    background: 'var(--burgundy-soft)',
                    color: 'var(--burgundy-accent)',
                    border: '1px solid var(--burgundy-border)',
                    padding: '1px 6px',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-code)',
                  }}
                >
                  STEP {i + 1}
                </span>
                <span>{action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cryptographic Seal & Modal Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.2rem',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldCheck size={20} color="#059669" />
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Verified CandiDev Corporate Token:{' '}
              <span style={{ fontFamily: 'var(--font-code)', color: 'var(--text-primary)', fontWeight: 600 }}>
                CD-2026-{student.id.toUpperCase()}-VERIFIED
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button
              onClick={handlePrint}
              className="btn-secondary"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
            >
              <Printer size={15} color="var(--burgundy-accent)" />
              <span>Print / PDF Dossier</span>
            </button>
            <button
              onClick={onClose}
              className="btn-primary"
              style={{ padding: '0.55rem 1.3rem', fontSize: '0.85rem' }}
            >
              Close Scorecard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
