'use client';

import React, { useState, useEffect } from 'react';
import {
  Code2,
  Cpu,
  BarChart2,
  Calculator,
  Calendar,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigateToSimulator: () => void;
  onNavigateToDashboard: () => void;
}

export default function Navbar({
  onOpenBooking,
  onNavigateToSimulator,
  onNavigateToDashboard,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why CandiDev', href: '#why-us' },
    { name: 'Live Simulator', href: '#simulator', action: onNavigateToSimulator },
    { name: 'Institute Portal', href: '#portal', action: onNavigateToDashboard },
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'Comparison', href: '#comparison' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(7, 9, 19, 0.88)'
          : 'rgba(7, 9, 19, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.09)'
          : '1px solid transparent',
        padding: isScrolled ? '0.75rem 0' : '1.1rem 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(6, 182, 212, 0.5)',
            }}
          >
            <Code2 size={22} color="#ffffff" strokeWidth={2.5} />
          </div>
          <div>
            <span
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Candi<span style={{ color: '#38bdf8', WebkitTextFillColor: '#38bdf8' }}>Dev</span>
            </span>
            <div
              style={{
                fontSize: '0.65rem',
                color: 'var(--cyan-glow)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '-3px',
              }}
            >
              Corporate Mock Partner
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.8rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.action) {
                  e.preventDefault();
                  link.action();
                }
              }}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--text-primary)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--text-secondary)')
              }
            >
              {link.name === 'Live Simulator' && (
                <span className="pulse-green" style={{ width: 6, height: 6 }} />
              )}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <button
            onClick={onOpenBooking}
            className="btn-primary"
            style={{
              padding: '0.65rem 1.3rem',
              fontSize: '0.88rem',
            }}
          >
            <Calendar size={16} />
            <span>Book Institute Pilot</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(11, 15, 27, 0.98)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (link.action) {
                  e.preventDefault();
                  link.action();
                }
              }}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <Calendar size={16} />
            Book Institute Pilot
          </button>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
