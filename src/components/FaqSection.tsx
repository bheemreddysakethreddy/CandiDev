'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '@/data/mockData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>Institute Knowledge Base</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything training institute founders, deans, and placement officers need to know about
            partnering with CandiDev.
          </p>
        </div>

        {/* FAQs Accordion List */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.2rem 1.6rem',
                  border: '1px solid',
                  borderColor: isOpen
                    ? 'var(--cyan-glow)'
                    : 'var(--border-subtle)',
                  background: isOpen
                    ? 'rgba(16, 23, 42, 0.85)'
                    : 'rgba(16, 23, 42, 0.55)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onClick={() => toggleFaq(idx)}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: isOpen ? '#38bdf8' : 'var(--text-primary)',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </h3>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? '#38bdf8' : 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </div>

                {isOpen && (
                  <div
                    style={{
                      marginTop: '0.9rem',
                      paddingTop: '0.9rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
