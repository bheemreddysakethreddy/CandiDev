'use client';

import React, { useState } from 'react';
import {
  Calculator,
  Clock,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export default function RoiCalculator({ onOpenBooking }: RoiCalculatorProps) {
  const [batchSize, setBatchSize] = useState<number>(50);
  const [selectedTier, setSelectedTier] = useState<'single' | 'double' | 'full'>('full');

  // Pricing calculations
  const tierConfig = {
    single: {
      name: 'Single Round (Core DSA)',
      pricePerStudent: 799,
      hoursMultiplier: 1.5,
      placementBoost: 28,
      desc: '1-on-1 DSA problem solving & code optimization screen',
    },
    double: {
      name: 'Dual Round (DSA + Architecture)',
      pricePerStudent: 1299,
      hoursMultiplier: 2.5,
      placementBoost: 42,
      desc: 'Live coding + System design & GitHub production code review',
    },
    full: {
      name: 'Complete 360° Corporate Suite',
      pricePerStudent: 1799,
      hoursMultiplier: 3.5,
      placementBoost: 58,
      desc: 'DSA + Architecture + Behavioral STAR + Certified Corporate Scorecard',
    },
  };

  const currentTier = tierConfig[selectedTier];
  const totalHoursSaved = Math.round(batchSize * currentTier.hoursMultiplier);
  const totalCost = Math.round(batchSize * currentTier.pricePerStudent);
  const averagePlacedCtcBoost = '₹3.5 - 6.2 LPA';

  return (
    <section id="calculator" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Calculator size={14} color="var(--burgundy-accent)" />
            <span>Interactive ROI Estimator</span>
          </div>
          <h2 className="section-title">
            Calculate Your Batch Investment & Placement ROI
          </h2>
          <p className="section-desc">
            See exactly how many trainer hours your faculty reclaims, the projected surge in student
            placement rates, and transparent cohort volume pricing.
          </p>
        </div>

        {/* Calculator Card - Clean White Light Mode */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-medium)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '2.5rem',
            }}
            className="calc-grid"
          >
            {/* Left Column: Interactive Sliders & Tier Selectors */}
            <div>
              {/* Batch Size Slider */}
              <div style={{ marginBottom: '2.2rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.8rem',
                  }}
                >
                  <label
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--text-heading)',
                    }}
                  >
                    Number of Students in Cohort:
                  </label>
                  <span
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--burgundy-accent)',
                      fontFamily: 'var(--font-code)',
                      background: 'var(--burgundy-soft)',
                      padding: '0.2rem 0.8rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--burgundy-border)',
                    }}
                  >
                    {batchSize} Students
                  </span>
                </div>

                <input
                  type="range"
                  min={15}
                  max={300}
                  step={5}
                  value={batchSize}
                  onChange={(e) => setBatchSize(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#881337',
                    height: '7px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.4rem',
                  }}
                >
                  <span>Small Batch (15)</span>
                  <span>Standard Cohort (50)</span>
                  <span>Mega Bootcamp (300+)</span>
                </div>
              </div>

              {/* Service Tier Buttons */}
              <div style={{ marginBottom: '1.8rem' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    marginBottom: '0.8rem',
                  }}
                >
                  Select Corporate Evaluation Depth:
                </label>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {[
                    {
                      key: 'single',
                      title: 'Single Technical Round (DSA & Logic)',
                      price: '₹799 / student',
                      desc: '45-min live whiteboard & algorithm optimization',
                    },
                    {
                      key: 'double',
                      title: 'Dual Rounds (DSA + System Architecture)',
                      price: '₹1,299 / student',
                      desc: 'Coding screen + real GitHub project & API architecture review',
                    },
                    {
                      key: 'full',
                      title: 'Full 360° Corporate Suite (Recommended)',
                      price: '₹1,799 / student',
                      desc: 'DSA + Architecture + Behavioral STAR + Certified Scorecard',
                    },
                  ].map((tier) => (
                    <div
                      key={tier.key}
                      onClick={() => setSelectedTier(tier.key as any)}
                      style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid',
                        borderColor:
                          selectedTier === tier.key
                            ? 'var(--burgundy-accent)'
                            : 'var(--border-medium)',
                        background:
                          selectedTier === tier.key
                            ? 'var(--burgundy-soft)'
                            : '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.2rem',
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '0.92rem',
                            color:
                              selectedTier === tier.key
                                ? 'var(--burgundy-accent)'
                                : 'var(--text-heading)',
                          }}
                        >
                          {tier.title}
                        </div>
                        <span
                          style={{
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            color: 'var(--burgundy-accent)',
                            fontFamily: 'var(--font-code)',
                          }}
                        >
                          {tier.price}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {tier.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Projected ROI & Placement Impact Card */}
            <div
              style={{
                background: '#faf8f9',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-medium)',
                padding: '1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    color: 'var(--burgundy-accent)',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    marginBottom: '0.4rem',
                  }}
                >
                  Cohort Projection Summary
                </div>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: 'var(--text-heading)',
                    marginBottom: '1.4rem',
                  }}
                >
                  Projected Placement Impact
                </h3>

                {/* 3 Metric Output Blocks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.8rem 1rem',
                      background: '#ffffff',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <div
                      style={{
                        padding: '0.6rem',
                        borderRadius: '8px',
                        background: 'var(--burgundy-soft)',
                      }}
                    >
                      <Clock size={20} color="var(--burgundy-accent)" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '1.4rem',
                          fontWeight: 800,
                          color: 'var(--burgundy-accent)',
                          fontFamily: 'var(--font-code)',
                        }}
                      >
                        {totalHoursSaved} Hours
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        Faculty teaching time saved per cohort
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.8rem 1rem',
                      background: '#ffffff',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <div
                      style={{
                        padding: '0.6rem',
                        borderRadius: '8px',
                        background: 'var(--emerald-soft)',
                      }}
                    >
                      <TrendingUp size={20} color="#059669" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '1.4rem',
                          fontWeight: 800,
                          color: '#059669',
                          fontFamily: 'var(--font-code)',
                        }}
                      >
                        +{currentTier.placementBoost}%
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        Estimated placement offer conversion surge
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.8rem 1rem',
                      background: '#ffffff',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <div
                      style={{
                        padding: '0.6rem',
                        borderRadius: '8px',
                        background: 'var(--amber-soft)',
                      }}
                    >
                      <ShieldCheck size={20} color="#d97706" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          color: '#d97706',
                          fontFamily: 'var(--font-code)',
                        }}
                      >
                        {averagePlacedCtcBoost}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        Average CTC boost with corporate verified badges
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Investment & CTA */}
              <div
                style={{
                  marginTop: '1.8rem',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid var(--border-medium)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '1rem',
                  }}
                >
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    Total Cohort Investment:
                  </span>
                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontSize: '1.6rem',
                        fontWeight: 900,
                        color: 'var(--text-heading)',
                        fontFamily: 'var(--font-code)',
                      }}
                    >
                      ₹{totalCost.toLocaleString('en-IN')}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 600 }}>
                      (Tiered Institute Volume Discount Applied)
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
                >
                  <span>Request Custom Pilot Batch Quote</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          .calc-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
