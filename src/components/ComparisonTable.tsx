'use client';

import React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';
import { COMPARISON_ROWS } from '@/data/mockData';

export default function ComparisonTable() {
  return (
    <section id="comparison" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Benchmark Comparison</span>
          </div>
          <h2 className="section-title">
            Traditional Institute Mocks vs CandiDev Corporate Standard
          </h2>
          <p className="section-desc">
            Why internal classroom tests fail to prepare students for modern software engineering
            hiring loops, and how CandiDev sets the corporate benchmark.
          </p>
        </div>

        {/* Table Container */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-medium)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                textAlign: 'left',
              }}
            >
              <thead>
                <tr style={{ background: 'rgba(15, 23, 42, 0.95)' }}>
                  <th
                    style={{
                      padding: '1.2rem 1.5rem',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      width: '26%',
                    }}
                  >
                    Evaluation Dimension
                  </th>
                  <th
                    style={{
                      padding: '1.2rem 1.5rem',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#fb7185',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      width: '37%',
                      borderLeft: '1px solid var(--border-subtle)',
                    }}
                  >
                    Internal Institute Mocks
                  </th>
                  <th
                    style={{
                      padding: '1.2rem 1.5rem',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: '#38bdf8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      width: '37%',
                      background: 'rgba(56, 189, 248, 0.08)',
                      borderLeft: '1px solid var(--border-accent)',
                    }}
                  >
                    CandiDev Corporate Partner
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      background:
                        idx % 2 === 0
                          ? 'transparent'
                          : 'rgba(255, 255, 255, 0.01)',
                    }}
                  >
                    {/* Dimension */}
                    <td
                      style={{
                        padding: '1.2rem 1.5rem',
                        fontWeight: 700,
                        fontSize: '0.92rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {row.feature}
                    </td>

                    {/* Internal Institute */}
                    <td
                      style={{
                        padding: '1.2rem 1.5rem',
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        borderLeft: '1px solid var(--border-subtle)',
                        lineHeight: 1.5,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <X
                          size={16}
                          color="#f43f5e"
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{row.instituteInternal}</span>
                      </div>
                    </td>

                    {/* CandiDev */}
                    <td
                      style={{
                        padding: '1.2rem 1.5rem',
                        fontSize: '0.88rem',
                        color: '#f8fafc',
                        background: 'rgba(56, 189, 248, 0.04)',
                        borderLeft: '1px solid var(--border-accent)',
                        fontWeight: 500,
                        lineHeight: 1.5,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <Check
                          size={16}
                          color="#34d399"
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{row.candiDev}</span>
                      </div>
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
