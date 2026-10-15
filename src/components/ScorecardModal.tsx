'use client';

import React from 'react';
import {
  X,
  Award,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Printer,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Calendar,
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
          background: 'rgba(11, 16, 29, 0.98)',
          border: '1px solid var(--border-medium)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 30px rgba(56, 189, 248, 0.25)',
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
            background: 'rgba(255, 255, 255, 0.06)',
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
                border: '2px solid #38bdf8',
                boxShadow: '0 0 16px rgba(56, 189, 248, 0.4)',
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
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800 }}>
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
                Target Track: <strong style={{ color: '#fff' }}>{student.targetRole}</strong> • {student.track}
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
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-accent)',
            }}
          >
            <div
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
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
                    ? '#34d399'
                    : student.readinessScore >= 70
                    ? '#fbbf24'
                    : '#fb7185',
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
                color: student.readinessScore >= 85 ? '#34d399' : '#fbbf24',
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
              { label: 'DSA & Big-O Optimization', val: student.metrics.dsa, color: '#38bdf8' },
              { label: 'System Architecture & Scalability', val: student.metrics.systemDesign, color: '#818cf8' },
              { label: 'Production Code Hygiene', val: student.metrics.codeQuality, color: '#34d399' },
              { label: 'Executive STAR Communication', val: student.metrics.communication, color: '#fbbf24' },
              { label: 'Live Debugging & Recovery', val: student.metrics.debugging, color: '#f472b6' },
              { label: 'Behavioral Poise Under Pressure', val: student.metrics.behavioral, color: '#a78bfa' },
            ].map((metric, i) => (
              <div
                key={i}
                style={{
                  padding: '0.9rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
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
                  <span style={{ color: 'var(--text-secondary)' }}>{metric.label}</span>
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
                    background: 'rgba(255, 255, 255, 0.08)',
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
            background: 'rgba(56, 189, 248, 0.06)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            marginBottom: '1.8rem',
          }}
        >
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#38bdf8',
              letterSpacing: '0.05em',
              marginBottom: '0.4rem',
            }}
          >
            Interviewer Panel Assessment & Corporate Verdict
          </div>
          <p
            style={{
              fontSize: '0.92rem',
              color: '#f8fafc',
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
              background: 'rgba(16, 185, 129, 0.05)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
            }}
          >
            <h5
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#34d399',
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
                    color: 'var(--text-secondary)',
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
              background: 'rgba(245, 158, 11, 0.05)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
            }}
          >
            <h5
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#fbbf24',
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
                    color: 'var(--text-secondary)',
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
            background: 'rgba(15, 23, 42, 0.7)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '1.8rem',
          }}
        >
          <h5
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#38bdf8',
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
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
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
            <ShieldCheck size={20} color="#34d399" />
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Verified CandiDev Corporate Token:{' '}
              <span style={{ fontFamily: 'var(--font-code)', color: '#94a3b8' }}>
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
              <Printer size={15} />
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
