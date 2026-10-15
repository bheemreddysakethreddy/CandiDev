'use client';

import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Download,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Eye,
  BarChart2,
  TrendingUp,
  FileSpreadsheet,
  Building,
  GraduationCap,
} from 'lucide-react';
import { COHORTS_DATA, Cohort, Student } from '@/data/mockData';

interface InstituteDashboardProps {
  onOpenScorecard: (student: Student) => void;
  onOpenBooking: () => void;
}

export default function InstituteDashboard({
  onOpenScorecard,
  onOpenBooking,
}: InstituteDashboardProps) {
  const [selectedCohortId, setSelectedCohortId] = useState<string>('cohort-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Corporate Ready' | 'Needs Polish' | 'At Risk'>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const selectedCohort =
    COHORTS_DATA.find((c) => c.id === selectedCohortId) || COHORTS_DATA[0];

  // If cohort-2 or 3 is picked, use generated fallback students if empty
  const activeStudents: Student[] =
    selectedCohort.students.length > 0
      ? selectedCohort.students
      : COHORTS_DATA[0].students.map((s, idx) => ({
          ...s,
          id: `gen-${s.id}-${idx}`,
          name: `${s.name} (${selectedCohort.batchCode})`,
          readinessScore: Math.max(55, Math.min(95, s.readinessScore - 4 + idx * 3)),
          status:
            s.readinessScore > 80
              ? 'Corporate Ready'
              : s.readinessScore > 65
              ? 'Needs Polish'
              : 'At Risk',
        }));

  const filteredStudents = activeStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.targetRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.track.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'All' || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleExport = () => {
    setToastMessage(`Exported Corporate Readiness Dossier for ${selectedCohort.name} (CSV/PDF)`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <section id="portal" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Toast Alert */}
        {toastMessage && (
          <div
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              background: '#0f172a',
              border: '1px solid #10b981',
              color: '#34d399',
              padding: '0.8rem 1.4rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.88rem',
              fontWeight: 600,
            }}
          >
            <CheckCircle2 size={18} />
            <span>{toastMessage}</span>
          </div>
        )}

        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Institute Placement Intelligence</span>
          </div>
          <h2 className="section-title">
            The Institute Director & Placement Command Center
          </h2>
          <p className="section-desc">
            Stop sending unvetted students into corporate drives. Monitor cohort readiness in real
            time, identify at-risk candidates before company screening, and share corporate-ready
            scorecards with hiring partners.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-medium)',
            padding: '2rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {/* Top Control Bar: Cohort Switcher & Export */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.2rem',
              marginBottom: '2rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.3rem',
                }}
              >
                Active Batch Cohort:
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <select
                  value={selectedCohortId}
                  onChange={(e) => setSelectedCohortId(e.target.value)}
                  style={{
                    background: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid var(--border-medium)',
                    color: '#ffffff',
                    padding: '0.6rem 1.2rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {COHORTS_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.batchCode})
                    </option>
                  ))}
                </select>
                <span
                  style={{
                    fontSize: '0.8rem',
                    color: '#38bdf8',
                    background: 'rgba(56, 189, 248, 0.1)',
                    padding: '0.3rem 0.7rem',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 600,
                  }}
                >
                  {selectedCohort.institute}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <button
                onClick={handleExport}
                className="btn-secondary"
                style={{
                  padding: '0.6rem 1.1rem',
                  fontSize: '0.85rem',
                }}
              >
                <Download size={15} />
                <span>Export Hiring Partner Dossier</span>
              </button>
              <button
                onClick={onOpenBooking}
                className="btn-primary"
                style={{
                  padding: '0.6rem 1.1rem',
                  fontSize: '0.85rem',
                }}
              >
                <span>Add Mock Re-Attempt Window</span>
              </button>
            </div>
          </div>

          {/* KPI Cards Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.2rem',
              marginBottom: '2rem',
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: '1.2rem 1.5rem',
                borderLeft: '4px solid #38bdf8',
              }}
            >
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Average Corporate Readiness
              </div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#38bdf8',
                  fontFamily: 'var(--font-code)',
                  marginTop: '0.2rem',
                }}
              >
                {selectedCohort.avgReadiness}%
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#34d399',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.2rem',
                  marginTop: '0.2rem',
                }}
              >
                <TrendingUp size={13} /> +18% vs un-mocked baseline
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '1.2rem 1.5rem',
                borderLeft: '4px solid #10b981',
              }}
            >
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Corporate Ready (Passed Bar)
              </div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#34d399',
                  fontFamily: 'var(--font-code)',
                  marginTop: '0.2rem',
                }}
              >
                {selectedCohort.readyCount} Students
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                Ready for immediate hiring drives
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '1.2rem 1.5rem',
                borderLeft: '4px solid #f59e0b',
              }}
            >
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Needs 7-Day Polish
              </div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#fbbf24',
                  fontFamily: 'var(--font-code)',
                  marginTop: '0.2rem',
                }}
              >
                {selectedCohort.polishCount} Students
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                Minor gaps in STAR or edge cases
              </div>
            </div>

            <div
              className="glass-card"
              style={{
                padding: '1.2rem 1.5rem',
                borderLeft: '4px solid #f43f5e',
              }}
            >
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                At Risk Candidates
              </div>
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#fb7185',
                  fontFamily: 'var(--font-code)',
                  marginTop: '0.2rem',
                }}
              >
                {selectedCohort.atRiskCount} Students
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                Requires mentor code-along intervention
              </div>
            </div>
          </div>

          {/* Skill Breakdown Radar/Bars */}
          <div
            style={{
              padding: '1.5rem',
              background: 'rgba(15, 23, 42, 0.5)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '2rem',
            }}
          >
            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              Cohort Competency Diagnostic (vs Tier-1 Corporate Standards)
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.2rem',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    marginBottom: '0.3rem',
                  }}
                >
                  <span style={{ color: 'var(--text-secondary)' }}>
                    DSA & Algorithmic Deconstruction
                  </span>
                  <span style={{ fontWeight: 700, color: '#38bdf8' }}>84%</span>
                </div>
                <div
                  style={{
                    height: '6px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '84%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
                    }}
                  />
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    marginBottom: '0.3rem',
                  }}
                >
                  <span style={{ color: 'var(--text-secondary)' }}>
                    System Architecture & Clean Code
                  </span>
                  <span style={{ fontWeight: 700, color: '#34d399' }}>89%</span>
                </div>
                <div
                  style={{
                    height: '6px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '89%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #10b981, #059669)',
                    }}
                  />
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    marginBottom: '0.3rem',
                  }}
                >
                  <span style={{ color: 'var(--text-secondary)' }}>
                    Behavioral Articulation (STAR)
                  </span>
                  <span style={{ fontWeight: 700, color: '#fbbf24' }}>76%</span>
                </div>
                <div
                  style={{
                    height: '6px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '76%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #f59e0b, #d97706)',
                    }}
                  />
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    marginBottom: '0.3rem',
                  }}
                >
                  <span style={{ color: 'var(--text-secondary)' }}>
                    Real-time Error Debugging
                  </span>
                  <span style={{ fontWeight: 700, color: '#a78bfa' }}>81%</span>
                </div>
                <div
                  style={{
                    height: '6px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '81%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #8b5cf6, #6366f1)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.2rem',
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                minWidth: '280px',
                maxWidth: '400px',
                flexGrow: 1,
              }}
            >
              <Search
                size={16}
                color="var(--text-muted)"
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              />
              <input
                type="text"
                placeholder="Search student, track or target role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.55rem 1rem 0.55rem 2.6rem',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {(['All', 'Corporate Ready', 'Needs Polish', 'At Risk'] as const).map(
                (status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    style={{
                      background:
                        statusFilter === status
                          ? 'rgba(56, 189, 248, 0.18)'
                          : 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid',
                      borderColor:
                        statusFilter === status
                          ? 'var(--cyan-glow)'
                          : 'rgba(255, 255, 255, 0.08)',
                      color:
                        statusFilter === status
                          ? '#38bdf8'
                          : 'var(--text-secondary)',
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    {status}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Student Roster Table */}
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
                fontSize: '0.88rem',
              }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: '1px solid var(--border-subtle)',
                    color: 'var(--text-muted)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  <th style={{ padding: '0.8rem 1rem' }}>Candidate</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Target Role</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Interviewer</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Corporate Readiness</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Status</th>
                  <th style={{ padding: '0.8rem 1rem', textAlign: 'right' }}>
                    Diagnostic
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        'rgba(255, 255, 255, 0.02)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = 'transparent')
                    }
                  >
                    {/* Candidate */}
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <img
                          src={student.avatar}
                          alt={student.name}
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '1px solid var(--border-accent)',
                          }}
                        />
                        <div>
                          <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                            {student.name}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {student.track}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Target Role */}
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>
                      {student.targetRole}
                    </td>

                    {/* Interviewer */}
                    <td style={{ padding: '1rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      {student.interviewer}
                    </td>

                    {/* Readiness Gauge */}
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <div
                          style={{
                            width: '80px',
                            height: '6px',
                            background: 'rgba(255,255,255,0.08)',
                            borderRadius: '3px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              width: `${student.readinessScore}%`,
                              height: '100%',
                              background:
                                student.readinessScore >= 85
                                  ? '#10b981'
                                  : student.readinessScore >= 70
                                  ? '#f59e0b'
                                  : '#f43f5e',
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontWeight: 700,
                            fontFamily: 'var(--font-code)',
                            color:
                              student.readinessScore >= 85
                                ? '#34d399'
                                : student.readinessScore >= 70
                                ? '#fbbf24'
                                : '#fb7185',
                          }}
                        >
                          {student.readinessScore}%
                        </span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td style={{ padding: '1rem' }}>
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
                          <XCircle size={12} /> At Risk
                        </span>
                      )}
                    </td>

                    {/* Action Button */}
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <button
                        onClick={() => onOpenScorecard(student)}
                        className="btn-secondary"
                        style={{
                          padding: '0.35rem 0.75rem',
                          fontSize: '0.78rem',
                          gap: '0.35rem',
                        }}
                      >
                        <Eye size={13} color="#38bdf8" />
                        <span>Scorecard</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
