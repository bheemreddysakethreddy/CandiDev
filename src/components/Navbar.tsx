'use client';

import React, { useState, useEffect } from 'react';
import {
  Code2,
  Calendar,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({
  onOpenBooking,
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
    { name: 'Who We Are', href: '#who-we-are' },
    { name: 'What We Can Do & Mocks', href: '#what-we-can-do' },
    { name: 'Impact & Results', href: '#helpful-impact' },
    { name: 'Our Flow', href: '#our-flow' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Connect', href: '#connect-channels' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        transition: 'all 0.25s ease',
        background: isScrolled
          ? 'rgba(255, 255, 255, 0.98)'
          : 'rgba(250, 248, 249, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isScrolled
          ? '1px solid var(--border-medium)'
          : '1px solid transparent',
        padding: isScrolled ? '0.7rem 0' : '1rem 0',
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
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
              borderRadius: '9px',
              background: 'var(--burgundy-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Code2 size={22} color="#ffffff" strokeWidth={2.3} />
          </div>
          <div>
            <span
              style={{
                fontSize: '1.35rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text-heading)',
              }}
            >
              Candi<span style={{ color: 'var(--burgundy-accent)' }}>Dev</span>
            </span>
            <div
              style={{
                fontSize: '0.65rem',
                color: 'var(--burgundy-accent)',
                fontWeight: 700,
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
            gap: '1.25rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.84rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                transition: 'color 0.15s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--burgundy-accent)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--text-secondary)')
              }
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
          }}
        >
          <button
            onClick={onOpenBooking}
            className="btn-primary"
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: '0.86rem',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <Calendar size={15} />
            <span>Book a Session</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff',
              border: '1px solid var(--border-medium)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              width: '38px',
              height: '38px',
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
            background: '#ffffff',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              style={{
                fontSize: '0.94rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '0.45rem 0',
                borderBottom: '1px solid var(--border-subtle)',
                textDecoration: 'none',
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
            style={{ width: '100%', marginTop: '0.6rem', padding: '0.7rem' }}
          >
            <Calendar size={16} />
            <span>Book a Session</span>
          </button>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 1080px) {
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
