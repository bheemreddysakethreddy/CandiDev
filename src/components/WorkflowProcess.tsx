'use client';

import React, { useState } from 'react';
import {
  FileCheck,
  Users,
  Terminal,
  BarChart3,
  Compass,
  Award,
  Building,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
} from 'lucide-react';
import { STUDENT_FLOW_STEPS, COLLEGE_FLOW_STEPS, WorkflowStep } from '@/data/mockData';

interface WorkflowProcessProps {
  onOpenBooking: () => void;
}

export default function WorkflowProcess({ onOpenBooking }: WorkflowProcessProps) {
  const [flowType, setFlowType] = useState<'student' | 'college'>('student');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps: WorkflowStep[] = flowType === 'student' ? STUDENT_FLOW_STEPS : COLLEGE_FLOW_STEPS;
  const activeStep = steps[activeStepIndex] || steps[0];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck size={20} color="var(--burgundy-accent)" />;
      case 'Users':
        return <Users size={20} color="var(--burgundy-accent)" />;
      case 'Terminal':
        return <Terminal size={20} color="var(--burgundy-accent)" />;
      case 'BarChart3':
        return <BarChart3 size={20} color="var(--burgundy-accent)" />;
      case 'Compass':
        return <Compass size={20} color="var(--burgundy-accent)" />;
      case 'Award':
        return <Award size={20} color="var(--burgundy-accent)" />;
      case 'Building':
        return <Building size={20} color="var(--burgundy-accent)" />;
      default:
        return <Sparkles size={20} color="var(--burgundy-accent)" />;
    }
  };

  return (
    <section id="our-flow" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} color="var(--burgundy-accent)" />
            <span>What Kind of Flow We Follow</span>
          </div>
          <h2 className="section-title">
            The 6-Step Corporate Mastery Workflow
          </h2>
          <p className="section-desc">
            From initial baseline calibration to authentic corporate simulation, quantitative diagnostic scorecards, and placement certification.
          </p>
        </div>

        {/* Flow Type Toggle Switch */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              background: '#ffffff',
              padding: '0.35rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-medium)',
              display: 'inline-flex',
              gap: '0.3rem',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <button
              onClick={() => {
                setFlowType('student');
                setActiveStepIndex(0);
              }}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: flowType === 'student' ? 'var(--burgundy-accent)' : 'transparent',
                color: flowType === 'student' ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.86rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              For Individual Candidates (6 Steps)
            </button>
            <button
              onClick={() => {
                setFlowType('college');
                setActiveStepIndex(0);
              }}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: flowType === 'college' ? 'var(--burgundy-accent)' : 'transparent',
                color: flowType === 'college' ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.86rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              For Colleges & Placement Cells (6 Steps)
            </button>
          </div>
        </div>

        {/* Step Numbers Horizontal Selector */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '0.75rem',
            marginBottom: '2.5rem',
          }}
        >
          {steps.map((st, idx) => (
            <button
              key={st.stepNumber}
              onClick={() => setActiveStepIndex(idx)}
              style={{
                background: activeStepIndex === idx ? '#ffffff' : '#f4f0f2',
                border: activeStepIndex === idx
                  ? '2px solid var(--burgundy-accent)'
                  : '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 0.75rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeStepIndex === idx ? 'var(--shadow-sm)' : 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.3rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: activeStepIndex === idx ? 'var(--burgundy-accent)' : 'var(--text-muted)',
                  }}
                >
                  STEP 0{st.stepNumber}
                </span>
                {activeStepIndex === idx && (
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--burgundy-accent)',
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: activeStepIndex === idx ? 'var(--text-heading)' : 'var(--text-secondary)',
                  lineHeight: 1.25,
                }}
              >
                {st.title.split(' & ')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Feature Showcase */}
        <div
          className="glass-card"
          style={{
            padding: '2.8rem',
            background: '#ffffff',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Step Description */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'var(--burgundy-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--burgundy-border)',
                }}
              >
                {getStepIcon(activeStep.iconName)}
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: 'var(--burgundy-accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Phase 0{activeStep.stepNumber} of 06
                </span>
                <span
                  style={{
                    marginLeft: '0.6rem',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    background: 'var(--bg-primary)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                  }}
                >
                  {activeStep.durationBadge}
                </span>
              </div>
            </div>

            <h3
              style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                color: 'var(--text-heading)',
                marginBottom: '0.35rem',
                lineHeight: 1.25,
              }}
            >
              {activeStep.title}
            </h3>

            <div
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--burgundy-accent)',
                marginBottom: '1.2rem',
              }}
            >
              {activeStep.subtitle}
            </div>

            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '1.5rem',
              }}
            >
              {activeStep.description}
            </p>

            {/* Key Highlight Banner */}
            <div
              style={{
                background: 'var(--burgundy-soft)',
                borderLeft: '3px solid var(--burgundy-accent)',
                padding: '0.85rem 1rem',
                borderRadius: '0 6px 6px 0',
                marginBottom: '1.6rem',
                fontSize: '0.84rem',
                color: 'var(--text-primary)',
                fontWeight: 500,
              }}
            >
              <strong>Key Principle: </strong> {activeStep.keyHighlight}
            </div>

            {/* Next / Prev Buttons */}
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {activeStepIndex > 0 && (
                <button
                  onClick={() => setActiveStepIndex(activeStepIndex - 1)}
                  className="btn-secondary"
                  style={{ fontSize: '0.82rem', padding: '0.55rem 1rem' }}
                >
                  Previous Step
                </button>
              )}
              {activeStepIndex < steps.length - 1 ? (
                <button
                  onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                  className="btn-primary"
                  style={{ fontSize: '0.82rem', padding: '0.55rem 1rem' }}
                >
                  <span>Next: Step 0{activeStepIndex + 2}</span>
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={onOpenBooking}
                  className="btn-primary"
                  style={{ fontSize: '0.82rem', padding: '0.55rem 1rem' }}
                >
                  <span>Start Step 1: Book Now</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Right: Step Deliverables & Milestone Checklist */}
          <div
            style={{
              background: 'var(--bg-primary)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
              padding: '2rem',
            }}
          >
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: 800,
                color: 'var(--text-heading)',
                marginBottom: '0.4rem',
              }}
            >
              Phase Deliverables & Milestones
            </h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.4rem' }}>
              What is produced and verified in this exact phase:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {activeStep.deliverables.map((del, dIdx) => (
                <div
                  key={dIdx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    background: '#ffffff',
                    padding: '0.9rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <CheckCircle2
                    size={17}
                    color="#059669"
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {del}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '1.6rem',
                paddingTop: '1.2rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                Status: Standardized SLA Guaranteed
              </div>
              <button
                onClick={onOpenBooking}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--burgundy-accent)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <span>Book This Workflow</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
