'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Users,
  Building,
  Clock,
  Copy,
  Check,
} from 'lucide-react';
import { CONNECT_CHANNELS_DATA } from '@/data/mockData';

export default function ConnectChannels() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Form State
  const [formName, setFormName] = useState('');
  const [formContact, setFormContact] = useState('');
  const [formRole, setFormRole] = useState<'student' | 'college' | 'other'>('student');
  const [formSubject, setFormSubject] = useState('DSA & System Design Mocks');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName && formContact) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormName('');
        setFormContact('');
        setFormMessage('');
      }, 5000);
    }
  };

  return (
    <section id="connect-channels" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} color="var(--burgundy-accent)" />
            <span>Connect Through These Channels</span>
          </div>
          <h2 className="section-title">
            Always Accessible. Join Our Community or Speak to Us Directly.
          </h2>
          <p className="section-desc">
            Whether you want immediate WhatsApp counseling, daily interview problem discussions on Telegram, our 25K+ Discord dev hub, or formal university MoU inquiries.
          </p>
        </div>

        {/* 6 Direct Channel Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3.5rem',
          }}
        >
          {CONNECT_CHANNELS_DATA.map((ch) => {
            const isCopied = copiedId === ch.id;

            return (
              <div
                key={ch.id}
                className="glass-card"
                style={{
                  padding: '2.2rem',
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
                  {/* Top Bar with Channel Badge */}
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
                        color: ch.color,
                        background: ch.bgColor,
                        border: `1px solid ${ch.borderColor}`,
                        padding: '0.2rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                      }}
                    >
                      {ch.badge}
                    </span>

                    <button
                      onClick={() => handleCopy(ch.id, ch.detail)}
                      title="Copy handle/contact"
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.72rem',
                      }}
                    >
                      {isCopied ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                      <span>{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--text-heading)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {ch.channel}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: ch.color,
                      marginBottom: '0.8rem',
                      fontFamily: ch.id.includes('email') ? 'var(--font-code)' : 'inherit',
                    }}
                  >
                    {ch.detail}
                  </div>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {ch.description}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <a
                    href={ch.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      width: '100%',
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      background: ch.bgColor,
                      color: ch.color,
                      border: `1px solid ${ch.borderColor}`,
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{ch.actionLabel}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive "Send Us a Message / Request Immediate Callback" Card */}
        <div
          className="glass-card"
          style={{
            padding: '3rem 2.5rem',
            background: '#ffffff',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-xl)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Info Column */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--burgundy-accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '0.5rem',
              }}
            >
              <Clock size={13} />
              <span>Instant Help & Fast Turnaround</span>
            </div>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.8rem', lineHeight: 1.25 }}>
              Need Help Deciding or Prefer a Quick Phone Consultation?
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Drop your details here. A senior mock interview counselor will call or message you within 15 minutes.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Immediate 1-on-1 counseling on target company bars (Early-stage vs Growth Startups)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Personalized mock preparation timeline for upcoming interviews</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Sample 4-page corporate diagnostic scorecard preview</span>
              </div>
            </div>

            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              📞 Direct Candidate Support Hotline: <strong>+91 (800) 226-3433</strong> (9 AM - 9 PM IST)
            </div>
          </div>

          {/* Right Form Column */}
          <div
            style={{
              background: 'var(--bg-primary)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: '#ecfdf5',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}
                >
                  <CheckCircle2 size={30} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                  Message Received!
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Thank you, {formName}. Our team has received your query and will reach out to you via WhatsApp / Phone at <strong>{formContact}</strong> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Role Switcher */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
                    I am a:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => setFormRole('student')}
                      style={{
                        padding: '0.5rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        borderRadius: 'var(--radius-sm)',
                        border: formRole === 'student' ? '1px solid var(--burgundy-accent)' : '1px solid var(--border-medium)',
                        background: formRole === 'student' ? 'var(--burgundy-accent)' : '#ffffff',
                        color: formRole === 'student' ? '#ffffff' : 'var(--text-secondary)',
                        cursor: 'pointer',
                      }}
                    >
                      Student / Candidate
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormRole('college')}
                      style={{
                        padding: '0.5rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        borderRadius: 'var(--radius-sm)',
                        border: formRole === 'college' ? '1px solid var(--burgundy-accent)' : '1px solid var(--border-medium)',
                        background: formRole === 'college' ? 'var(--burgundy-accent)' : '#ffffff',
                        color: formRole === 'college' ? '#ffffff' : 'var(--text-secondary)',
                        cursor: 'pointer',
                      }}
                    >
                      College / Placement Cell
                    </button>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
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
                    Phone Number or WhatsApp (with Country Code) *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="+91 98765 43210"
                    value={formContact}
                    onChange={(e) => setFormContact(e.target.value)}
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
                    Topic of Interest
                  </label>
                  <select
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
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
                    <option value="DSA & System Design Mocks">DSA & System Design Mocks</option>
                    <option value="Full Stack & Frontend Mocks">Full Stack & Frontend Mocks</option>
                    <option value="Behavioral & STAR Leadership Mocks">Behavioral & STAR Leadership Mocks</option>
                    <option value="College Campus Batch Pilot (15+ Students)">College Campus Batch Pilot (15+ Students)</option>
                    <option value="Institutional MoU & Placement Collaboration">Institutional MoU & Placement Collaboration</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                    Specific Notes or Target Companies (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Preparing for tech startup SDE-1 drives in November..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
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

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    marginTop: '0.4rem',
                  }}
                >
                  <Send size={15} />
                  <span>Request Instant Callback</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
