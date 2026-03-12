export default function BookConsult() {
  return (
    <section id="book-consult" className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-surface-muted)' }}>
      <div className="max-w-5xl mx-auto">
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '16px',
            }}>
              03 — Let's Talk
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: 'var(--color-text-primary)',
              lineHeight: 1.08,
              marginBottom: '16px',
            }}>
              Not sure where
              <br />
              to start?
            </h2>
            <p style={{
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.65,
              maxWidth: '400px',
            }}>
              That's what the free call is for. 30 minutes. We talk about
              what's slow, what you've tried, whether I can actually help. No pitch.
            </p>
          </div>

          {/* Right */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            padding: '36px',
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
              marginBottom: '8px',
            }}>
              Free 30-Min AI Audit Call
            </h3>
            <p style={{
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              marginBottom: '24px',
            }}>
              Bring your biggest bottleneck. I'll tell you straight: can AI fix it, and how?
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                'Plain language, no sales pitch',
                'You leave with a real answer',
                'Free',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '14px' }}>✓</span>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#say-hi" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
              Schedule Free Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
