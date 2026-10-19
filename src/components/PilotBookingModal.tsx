'use client';

import React, { useState } from 'react';
import {
  X,
  Building,
  Mail,
  User,
  Phone,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

interface PilotBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PilotBookingModal({
  isOpen,
  onClose,
}: PilotBookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [instituteName, setInstituteName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [studentCount, setStudentCount] = useState('30');
  const [selectedTracks, setSelectedTracks] = useState<string[]>([
    'Full Stack Web (MERN / Next.js)',
  ]);
  const [targetDate, setTargetDate] = useState('Within 2 Weeks');
  const [specialNotes, setSpecialNotes] = useState('');

  if (!isOpen) return null;

  const toggleTrack = (track: string) => {
    if (selectedTracks.includes(track)) {
      if (selectedTracks.length > 1) {
        setSelectedTracks(selectedTracks.filter((t) => t !== track));
      }
    } else {
      setSelectedTracks([...selectedTracks, track]);
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          background: '#ffffff',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-lg)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.4rem',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
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

        {/* Step Indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            marginBottom: '1.8rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: step >= 1 ? 'var(--burgundy-accent)' : 'var(--text-muted)',
            }}
          >
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: step >= 1 ? 'var(--burgundy-soft)' : '#f3f4f6',
                border: step >= 1 ? '1px solid var(--burgundy-accent)' : '1px solid #d1d5db',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              1
            </span>
            <span>Institute Details</span>
          </div>

          <ChevronRight size={14} color="var(--text-muted)" />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: step >= 2 ? 'var(--burgundy-accent)' : 'var(--text-muted)',
            }}
          >
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: step >= 2 ? 'var(--burgundy-soft)' : '#f3f4f6',
                border: step >= 2 ? '1px solid var(--burgundy-accent)' : '1px solid #d1d5db',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              2
            </span>
            <span>Cohort Tracks</span>
          </div>

          <ChevronRight size={14} color="var(--text-muted)" />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: step === 3 ? '#059669' : 'var(--text-muted)',
            }}
          >
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: step === 3 ? 'var(--emerald-soft)' : '#f3f4f6',
                border: step === 3 ? '1px solid #059669' : '1px solid #d1d5db',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              3
            </span>
            <span>Confirmation</span>
          </div>
        </div>

        {/* STEP 1: Institute Information */}
        {step === 1 && (
          <form onSubmit={handleNextStep}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: 'var(--text-heading)',
                  marginBottom: '0.35rem',
                }}
              >
                Schedule an Institute Pilot Batch
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Test CandiDev with 10–50 students. Receive full 10-parameter diagnostic reports and
                evaluate how our corporate bar elevates your placement numbers.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    marginBottom: '0.35rem',
                  }}
                >
                  Training Institute / College / Bootcamp Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <Building
                    size={16}
                    color="var(--text-muted)"
                    style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
                  />
                  <input
                    required
                    type="text"
                    placeholder="e.g. Apex Coding Academy"
                    value={instituteName}
                    onChange={(e) => setInstituteName(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#ffffff',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.65rem 1rem 0.65rem 2.5rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--text-heading)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Placement Head / Coordinator Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User
                      size={16}
                      color="var(--text-muted)"
                      style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
                    />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Dr. Rajesh Sen"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#ffffff',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.65rem 1rem 0.65rem 2.5rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--text-heading)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Official Email Address *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail
                      size={16}
                      color="var(--text-muted)"
                      style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
                    />
                    <input
                      required
                      type="email"
                      placeholder="placement@institute.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#ffffff',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.65rem 1rem 0.65rem 2.5rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--text-heading)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Direct Phone / WhatsApp *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone
                      size={16}
                      color="var(--text-muted)"
                      style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
                    />
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#ffffff',
                        border: '1px solid var(--border-medium)',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.65rem 1rem 0.65rem 2.5rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--text-heading)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    Target Pilot Batch Size
                  </label>
                  <select
                    value={studentCount}
                    onChange={(e) => setStudentCount(e.target.value)}
                    style={{
                      width: '100%',
                      background: '#ffffff',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.65rem 1rem',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  >
                    <option value="15">15 Students (Quick Diagnostic)</option>
                    <option value="30">30 Students (Standard Pilot)</option>
                    <option value="60">60 Students (Full Cohort)</option>
                    <option value="120+">120+ Students (Academy-wide)</option>
                  </select>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '2rem',
                paddingTop: '1.2rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '0.75rem 1.6rem', fontSize: '0.95rem' }}
              >
                <span>Continue to Track Selection</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Track & Scheduling */}
        {step === 2 && (
          <form onSubmit={handleFinalSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: 'var(--text-heading)',
                  marginBottom: '0.35rem',
                }}
              >
                Customize Your Cohort Evaluation
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Select the technical domains to test and target dates for conducting the mocks.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {/* Tracks Checkboxes */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    marginBottom: '0.6rem',
                  }}
                >
                  Select Technical Tracks to Mock:
                </label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '0.65rem',
                  }}
                >
                  {[
                    'Full Stack Web (MERN / Next.js)',
                    'Backend Java & Spring Boot Microservices',
                    'Python, Django & API Architecture',
                    'DSA & Algorithmic Problem Solving',
                    'DevOps, Docker & Cloud Native',
                    'Behavioral STAR & Executive Presence',
                  ].map((track) => (
                    <div
                      key={track}
                      onClick={() => toggleTrack(track)}
                      style={{
                        padding: '0.65rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid',
                        borderColor: selectedTracks.includes(track)
                          ? 'var(--burgundy-accent)'
                          : 'var(--border-medium)',
                        background: selectedTracks.includes(track)
                          ? 'var(--burgundy-soft)'
                          : '#ffffff',
                        color: selectedTracks.includes(track)
                          ? 'var(--burgundy-accent)'
                          : 'var(--text-primary)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <div
                        style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '4px',
                          border: '1px solid',
                          borderColor: selectedTracks.includes(track)
                            ? 'var(--burgundy-accent)'
                            : '#9ca3af',
                          background: selectedTracks.includes(track)
                            ? 'var(--burgundy-accent)'
                            : '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {selectedTracks.includes(track) && (
                          <CheckCircle2 size={12} color="#ffffff" />
                        )}
                      </div>
                      <span>{track}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Date */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    marginBottom: '0.35rem',
                  }}
                >
                  Desired Mock Window
                </label>
                <select
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  style={{
                    width: '100%',
                    background: '#ffffff',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.65rem 1rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                >
                  <option value="Immediately (Within 3 Days)">Immediately (Within 3 Days)</option>
                  <option value="Within 2 Weeks">Within Next 2 Weeks</option>
                  <option value="Next Month Ahead of Campus Drive">
                    Next Month Ahead of Campus Drives
                  </option>
                  <option value="Custom Date Range">Custom Date Range (Coordinate with us)</option>
                </select>
              </div>

              {/* Special Notes */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--text-heading)',
                    marginBottom: '0.35rem',
                  }}
                >
                  Specific Syllabus Alignment or Corporate Bar Target (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Preparing students for FinTech product companies, please emphasize SQL indexing, distributed caches, and tough concurrency edge cases."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  style={{
                    width: '100%',
                    background: '#ffffff',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.65rem 1rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '2rem',
                paddingTop: '1.2rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <button
                type="button"
                onClick={() => setStep(1)}
                className="btn-secondary"
                style={{ padding: '0.75rem 1.4rem' }}
              >
                Back
              </button>

              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '0.75rem 1.8rem', fontSize: '0.95rem' }}
              >
                <span>Confirm Pilot Reservation</span>
                <CheckCircle2 size={16} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Success Confirmation */}
        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'var(--emerald-soft)',
                border: '2px solid #059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
              }}
            >
              <CheckCircle2 size={36} color="#059669" />
            </div>

            <h3
              style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: 'var(--text-heading)',
                marginBottom: '0.6rem',
              }}
            >
              Pilot Batch Scheduled!
            </h3>

            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '480px',
                margin: '0 auto 1.8rem',
              }}
            >
              Thank you, <strong style={{ color: 'var(--text-heading)' }}>{contactName || 'Placement Team'}</strong>.
              We have reserved a dedicated pilot slot for{' '}
              <strong style={{ color: 'var(--burgundy-accent)' }}>{instituteName || 'your institute'}</strong>{' '}
              ({studentCount} students).
            </p>

            {/* Pilot Summary Card */}
            <div
              style={{
                background: 'var(--burgundy-soft)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--burgundy-border)',
                padding: '1.2rem',
                maxWidth: '480px',
                margin: '0 auto 2rem',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.85rem',
                  marginBottom: '0.5rem',
                }}
              >
                <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Assigned Partner Director:</span>
                <span style={{ color: 'var(--text-heading)', fontWeight: 700 }}>Vikram Joshi (Senior Staff)</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.85rem',
                  marginBottom: '0.5rem',
                }}
              >
                <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Target Window:</span>
                <span style={{ color: 'var(--burgundy-accent)', fontWeight: 700 }}>{targetDate}</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.85rem',
                }}
              >
                <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Verification Code:</span>
                <span
                  style={{
                    color: '#059669',
                    fontFamily: 'var(--font-code)',
                    fontWeight: 700,
                  }}
                >
                  PILOT-{Math.floor(1000 + Math.random() * 9000)}-VERIFIED
                </span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="btn-primary"
              style={{ padding: '0.8rem 2rem', fontSize: '0.95rem' }}
            >
              Done & Return to Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
