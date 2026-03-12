export default function GeographicFocus() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-base)' }}>
      <div className="max-w-5xl mx-auto">
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            border: '1px solid var(--color-border)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          {/* Left */}
          <div style={{
            padding: '36px 40px',
            background: 'var(--color-surface)',
            borderRight: '1px solid var(--color-border)',
          }}>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '12px',
            }}>
              Local
            </div>
            <h3 style={{
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
              marginBottom: '12px',
            }}>
              Based in downtown Apex.
              <br />
              Serving the RTP corridor.
            </h3>
            <p style={{
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.65,
            }}>
              You get big agency results without the markup, because I'm local.
            </p>
          </div>

          {/* Right */}
          <div style={{ padding: '36px 40px', background: 'var(--color-base)' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Coffee meetings in Apex, not just Zoom calls',
                'I know the RTP market and your customers',
                'No agency overhead or hourly minimums',
                'Your growth helps our community grow',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    flexShrink: 0,
                    marginTop: '6px',
                  }} />
                  <span style={{
                    fontSize: '13px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.55,
                  }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
