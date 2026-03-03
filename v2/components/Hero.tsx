export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 'calc(var(--grid-baseline) * 20)', paddingBottom: 'calc(var(--grid-baseline) * 12)', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-10" style={{ border: '1px solid var(--color-wireframe)', padding: '6px 14px', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>
          {/* Dot → cyan (same viewport zone as pink h1, was conflicting) */}
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-energy-secondary)', display: 'inline-block' }} />
          AI Implementation · Apex &amp; RTP
        </div>
        <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--color-text-primary)', marginBottom: '1.5rem' }}>
          Your Business.<br />
          {/* Pink stays — the one hero moment that earns it */}
          <span style={{ color: 'var(--color-energy-primary)' }}>AI-Ready.</span><br />
          No BS.
        </h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
          I come to your business, learn how you actually work,
          and hand you a clear AI roadmap — tools you&apos;ll own,
          knowledge you&apos;ll keep, results you&apos;ll see.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* CTA stays pink */}
          <a href="mailto:wallymollc@gmail.com" className="wireframe-btn" style={{ padding: '14px 32px', fontSize: '12px' }}>
            Book Your Free 30-Min Call →
          </a>
          <a href="#how-it-works" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-tertiary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            See how it works
          </a>
        </div>
        <p style={{ marginTop: '3rem', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>
          Serving Downtown Apex · RTP Corridor · No agency overhead
        </p>
      </div>
    </section>
  );
}
