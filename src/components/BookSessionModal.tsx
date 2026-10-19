'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  User,
  Building,
  Calendar,
  Clock,
  Mail,
  Phone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Briefcase,
  FileText,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { MOCK_TYPES_DATA } from '@/data/mockData';

interface BookSessionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: string;
  initialRole?: 'student' | 'college';
}

export default function BookSessionModal({
  isOpen,
  onClose,
  initialTrack,
  initialRole = 'student',
}: BookSessionModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Form States
  const [userRole, setUserRole] = useState<'student' | 'college'>('student');
  const [selectedTrack, setSelectedTrack] = useState<string>('DSA & Algorithmic Problem Solving');
  const [targetTier, setTargetTier] = useState<string>('High-Growth Product Startups (Fintech, SaaS, AI)');
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('7:00 PM - 8:30 PM IST');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('Final Year / College Fresher');
  const [resumeUrl, setResumeUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (initialTrack) {
      setSelectedTrack(initialTrack);
    }
    if (initialRole) {
      setUserRole(initialRole);
    }
  }, [initialTrack, initialRole, isOpen]);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 4) {
      // Generate booking reference
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setBookingRef(`CD-2026-${randomNum}`);
      setStep(5);
    } else {
      setStep((step + 1) as any);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((step - 1) as any);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setFullName('');
    setEmail('');
    setPhone('');
    setOrganization('');
    setResumeUrl('');
    setNotes('');
    onClose();
  };

  const datesList = [
    { label: 'Today', date: 'Oct 17, 2026' },
    { label: 'Tomorrow', date: 'Oct 18, 2026' },
    { label: 'Monday', date: 'Oct 19, 2026' },
    { label: 'Tuesday', date: 'Oct 20, 2026' },
    { label: 'Wednesday', date: 'Oct 21, 2026' },
    { label: 'Weekend Slot', date: 'Oct 24, 2026' },
  ];

  const timeSlots = [
    '10:00 AM - 11:30 AM IST',
    '2:30 PM - 4:00 PM IST',
    '5:00 PM - 6:30 PM IST',
    '7:00 PM - 8:30 PM IST',
    '9:00 PM - 10:30 PM IST',
  ];

  const companyTiers = [
    'High-Growth Product Startups (Fintech, SaaS, AI)',
    'Fast-Paced Consumer Tech Startups (Series A-C)',
    'B2B SaaS & Cloud Platforms',
    'General Software Engineer / Tech Role',
  ];

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
          maxHeight: '92vh',
          overflowY: 'auto',
        }}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: '#f4f4f5',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
          }}
        >
          <X size={17} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.8rem', paddingRight: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.74rem',
              fontWeight: 700,
              color: 'var(--burgundy-accent)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '0.4rem',
            }}
          >
            <Sparkles size={13} />
            <span>Official CandiDev Session Booking</span>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-heading)' }}>
            {step === 5 ? 'Booking Confirmed!' : 'Book Your Corporate Mock Session'}
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
            {step === 5
              ? 'Your corporate interview slot has been reserved. Check details below.'
              : 'Calibrate your skills under strict corporate hiring committee standards with senior tech leads.'}
          </p>
        </div>

        {/* Step Indicator Progress Bar (Steps 1 to 4) */}
        {step < 5 && (
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.76rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                marginBottom: '0.5rem',
              }}
            >
              <span style={{ color: step >= 1 ? 'var(--burgundy-accent)' : 'inherit' }}>
                1. Role Type
              </span>
              <span style={{ color: step >= 2 ? 'var(--burgundy-accent)' : 'inherit' }}>
                2. Track & Tier
              </span>
              <span style={{ color: step >= 3 ? 'var(--burgundy-accent)' : 'inherit' }}>
                3. Date & Time
              </span>
              <span style={{ color: step >= 4 ? 'var(--burgundy-accent)' : 'inherit' }}>
                4. Your Details
              </span>
            </div>
            <div
              style={{
                width: '100%',
                height: '5px',
                background: '#f1f1f3',
                borderRadius: '3px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${(step / 4) * 100}%`,
                  height: '100%',
                  background: 'var(--burgundy-accent)',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleNext}>
          {/* STEP 1: Select User Role */}
          {step === 1 && (
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '1rem' }}>
                Who is this session booking for?
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.8rem' }}>
                {/* Individual Student Card */}
                <div
                  onClick={() => setUserRole('student')}
                  style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: userRole === 'student'
                      ? '2px solid var(--burgundy-accent)'
                      : '1px solid var(--border-medium)',
                    background: userRole === 'student' ? 'var(--burgundy-soft)' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--burgundy-accent)',
                      marginBottom: '0.8rem',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <User size={20} />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                    Individual Candidate
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    Book a 1-on-1 technical or behavioral mock to crack upcoming campus or lateral product company interviews.
                  </p>
                </div>

                {/* College / Placement Cell Card */}
                <div
                  onClick={() => setUserRole('college')}
                  style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: userRole === 'college'
                      ? '2px solid var(--burgundy-accent)'
                      : '1px solid var(--border-medium)',
                    background: userRole === 'college' ? 'var(--burgundy-soft)' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--burgundy-accent)',
                      marginBottom: '0.8rem',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <Building size={20} />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                    College / Placement Cell
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    Request a free 15-student pilot batch or institutional MoU for your engineering college campus drive.
                  </p>
                </div>
              </div>

              <div
                style={{
                  background: '#faf8f9',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '1rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <ShieldCheck size={18} color="#059669" style={{ flexShrink: 0 }} />
                <span>
                  All sessions include full 10-point corporate diagnostic scorecards, video replay, and personalized 14-day study action roadmaps.
                </span>
              </div>
            </div>
          )}

          {/* STEP 2: Select Track & Target Company Tier */}
          {step === 2 && (
            <div>
              <div style={{ marginBottom: '1.4rem' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                  Choose Interview Track *
                </label>
                <select
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.88rem',
                    background: '#ffffff',
                    outline: 'none',
                    fontWeight: 600,
                  }}
                >
                  {MOCK_TYPES_DATA.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name} ({t.duration}) — {t.difficulty.split(' ')[0]}
                    </option>
                  ))}
                  {userRole === 'college' && (
                    <option value="Comprehensive 360 Batch Audit (All Tracks Combined)">
                      Comprehensive 360° Batch Audit (All Tracks Combined)
                    </option>
                  )}
                </select>
              </div>

              <div style={{ marginBottom: '1.4rem' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                  Target Company Caliber / Hiring Bar *
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {companyTiers.map((tier) => (
                    <label
                      key={tier}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        padding: '0.65rem 0.9rem',
                        borderRadius: 'var(--radius-sm)',
                        border: targetTier === tier ? '1px solid var(--burgundy-accent)' : '1px solid var(--border-medium)',
                        background: targetTier === tier ? 'var(--burgundy-soft)' : '#ffffff',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: targetTier === tier ? 'var(--burgundy-dark)' : 'var(--text-primary)',
                      }}
                    >
                      <input
                        type="radio"
                        name="companyTier"
                        checked={targetTier === tier}
                        onChange={() => setTargetTier(tier)}
                        style={{ accentColor: 'var(--burgundy-accent)' }}
                      />
                      <span>{tier}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Date & Slot Picker */}
          {step === 3 && (
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.6rem' }}>
                  Select Preferred Date:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                  {datesList.map((d) => (
                    <button
                      key={d.label}
                      type="button"
                      onClick={() => setSelectedDate(`${d.label} (${d.date})`)}
                      style={{
                        padding: '0.65rem 0.5rem',
                        borderRadius: 'var(--radius-sm)',
                        border: selectedDate.includes(d.label) ? '1px solid var(--burgundy-accent)' : '1px solid var(--border-medium)',
                        background: selectedDate.includes(d.label) ? 'var(--burgundy-soft)' : '#ffffff',
                        color: selectedDate.includes(d.label) ? 'var(--burgundy-dark)' : 'var(--text-primary)',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        textAlign: 'center',
                      }}
                    >
                      <div>{d.label}</div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '2px' }}>
                        {d.date}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.6rem' }}>
                  Select Time Slot (IST):
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {timeSlots.map((slot) => (
                    <label
                      key={slot}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.65rem 0.9rem',
                        borderRadius: 'var(--radius-sm)',
                        border: selectedTimeSlot === slot ? '1px solid var(--burgundy-accent)' : '1px solid var(--border-medium)',
                        background: selectedTimeSlot === slot ? 'var(--burgundy-soft)' : '#ffffff',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: selectedTimeSlot === slot ? 'var(--burgundy-dark)' : 'var(--text-primary)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input
                          type="radio"
                          name="timeSlot"
                          checked={selectedTimeSlot === slot}
                          onChange={() => setSelectedTimeSlot(slot)}
                          style={{ accentColor: 'var(--burgundy-accent)' }}
                        />
                        <span>{slot}</span>
                      </div>
                      <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>
                        ● Available
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Candidate & Contact Details */}
          {step === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Siddharth Verma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.86rem',
                    background: '#ffffff',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="siddharth@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.86rem',
                      background: '#ffffff',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.86rem',
                      background: '#ffffff',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                    {userRole === 'student' ? 'College / Current Company' : 'Institute / University Name *'}
                  </label>
                  <input
                    required
                    type="text"
                    placeholder={userRole === 'student' ? 'e.g. VIT Vellore or TCS' : 'e.g. Apex Tech Institute'}
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.86rem',
                      background: '#ffffff',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                    Experience / Batch Status
                  </label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.86rem',
                      background: '#ffffff',
                      outline: 'none',
                    }}
                  >
                    <option value="Final Year / College Fresher">Final Year / College Fresher</option>
                    <option value="1-2 Years SDE Experience">1-2 Years SDE Experience</option>
                    <option value="3+ Years Senior SDE">3+ Years Senior SDE</option>
                    <option value="Placement Cell Official">Placement Cell Official</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                  LinkedIn Profile or Resume Link (Google Drive / GitHub)
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/username or drive link"
                  value={resumeUrl}
                  onChange={(e) => setResumeUrl(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.86rem',
                    background: '#ffffff',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                  Any Specific Topics or Interview Constraints?
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Please grill heavily on concurrency in Java and dynamic programming memoization..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.84rem',
                    background: '#ffffff',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>
            </div>
          )}

          {/* STEP 5: Confirmation Screen */}
          {step === 5 && (
            <div>
              <div
                style={{
                  background: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: '#059669',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.8rem',
                  }}
                >
                  <CheckCircle2 size={28} />
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#065f46', textTransform: 'uppercase' }}>
                  Booking Reference ID
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#065f46', letterSpacing: '0.05em' }}>
                  {bookingRef}
                </div>
              </div>

              {/* Session Summary Card */}
              <div
                style={{
                  background: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-medium)',
                  padding: '1.2rem',
                  marginBottom: '1.5rem',
                  fontSize: '0.84rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.55rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Candidate / Representative:</span>
                  <strong style={{ color: 'var(--text-heading)' }}>{fullName || 'Candidate'}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Track Selected:</span>
                  <strong style={{ color: 'var(--burgundy-accent)' }}>{selectedTrack}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Target Caliber:</span>
                  <strong style={{ color: 'var(--text-heading)' }}>{targetTier.split('(')[0]}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Reserved Slot:</span>
                  <strong style={{ color: 'var(--text-heading)' }}>{selectedDate} • {selectedTimeSlot}</strong>
                </div>
              </div>

              {/* Pre-Mock Checklist */}
              <div
                style={{
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Pre-Mock Checklist:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={13} color="#059669" />
                    <span>Meeting link and calendar invite sent to <strong>{email || 'your email'}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={13} color="#059669" />
                    <span>Please test your camera, microphone, and quiet room 10 minutes prior</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={13} color="#059669" />
                    <span>Have 2 structured STAR behavioral project stories ready in mind</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={resetAndClose}
                className="btn-primary"
                style={{ width: '100%', padding: '0.75rem', fontSize: '0.88rem' }}
              >
                Done • Close Window
              </button>
            </div>
          )}

          {/* Form Action Controls (Steps 1 to 4) */}
          {step < 5 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '1.8rem',
                paddingTop: '1.2rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn-secondary"
                  style={{ fontSize: '0.84rem', padding: '0.6rem 1.2rem' }}
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                type="submit"
                className="btn-primary"
                style={{ fontSize: '0.86rem', padding: '0.65rem 1.4rem' }}
              >
                <span>{step === 4 ? 'Confirm & Book Session' : 'Continue'}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
