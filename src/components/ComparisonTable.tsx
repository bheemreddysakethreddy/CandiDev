'use client';

import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { COMPARISON_ROWS } from '@/data/mockData';

export default function ComparisonTable() {
  return (
    <section id="comparison" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} color="var(--burgundy-accent)" />
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

        {/* Table Container - Clean White Light Mode */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-medium)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)',
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
                <tr style={{ background: '#f8f6f7' }}>
                  <th
                    style={{
                      padding: '1.2rem 1.5rem',
                      fontSize: '0.85rem',
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
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#9f1239',
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
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--burgundy-accent)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      width: '37%',
                      background: 'var(--burgundy-soft)',
                      borderLeft: '1px solid var(--burgundy-border)',
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
                      borderBottom: '1px solid var(--border-subtle)',
                      background:
                        idx % 2 === 0
                          ? '#ffffff'
                          : '#fcfbfa',
                    }}
                  >
                    {/* Dimension */}
                    <td
                      style={{
                        padding: '1.2rem 1.5rem',
                        fontWeight: 700,
                        fontSize: '0.92rem',
                        color: 'var(--text-heading)',
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
                          color="#e11d48"
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
                        color: 'var(--text-heading)',
                        background: 'rgba(253, 242, 244, 0.4)',
                        borderLeft: '1px solid var(--burgundy-border)',
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <Check
                          size={16}
                          color="#059669"
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
