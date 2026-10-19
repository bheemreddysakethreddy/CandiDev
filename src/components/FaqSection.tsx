'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '@/data/mockData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} color="var(--burgundy-accent)" />
            <span>Institute Knowledge Base</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything training institute founders, deans, and placement officers need to know about
            partnering with CandiDev.
          </p>
        </div>

        {/* FAQs Accordion List - Clean Light Mode */}
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
                    ? 'var(--burgundy-border)'
                    : 'var(--border-subtle)',
                  background: isOpen
                    ? 'var(--burgundy-soft)'
                    : '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
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
                      color: isOpen ? 'var(--burgundy-accent)' : 'var(--text-heading)',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </h3>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      color: isOpen ? 'var(--burgundy-accent)' : 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={18} />
                  </div>
                </div>

                {isOpen && (
                  <div
                    style={{
                      marginTop: '0.85rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid var(--border-subtle)',
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
