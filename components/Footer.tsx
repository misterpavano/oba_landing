'use client';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-surface)',
      padding: '28px 24px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
      }}>
        <p style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
          © 2025 One Block Away, LLC — Apex, NC
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a
            href="https://www.linkedin.com/in/wallymo/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--color-text-tertiary)',
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-tertiary)')}
          >
            LinkedIn
          </a>
          <a
            href="mailto:wallymollc@gmail.com"
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--color-text-tertiary)',
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-tertiary)')}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
