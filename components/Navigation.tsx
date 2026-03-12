'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(248,248,245,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border)',
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60px',
      }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/Group-38.png" alt="One Block Away" style={{ height: '40px', width: 'auto' }} />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '4px', alignItems: 'center' }}>
          {[
            { label: 'What I Do', href: '#how-i-can-help' },
            { label: 'How I Work', href: '#how-well-succeed' },
            { label: 'About', href: '#about' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                padding: '8px 14px',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                borderRadius: '3px',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#book-consult"
            className="btn btn-primary"
            style={{ marginLeft: '8px', padding: '9px 20px', fontSize: '13px' }}
          >
            Free AI Audit
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: 'var(--color-text-primary)',
          }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {isOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{
          background: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
          padding: '12px 24px 20px',
        }}>
          {[
            { label: 'What I Do', href: '#how-i-can-help' },
            { label: 'How I Work', href: '#how-well-succeed' },
            { label: 'About', href: '#about' },
            { label: 'Book Free Call', href: '#book-consult' },
            { label: 'Say Hi', href: '#say-hi' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '11px 0',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
