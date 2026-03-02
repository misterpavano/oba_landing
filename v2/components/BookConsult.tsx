export default function BookConsult() {
  return (
    <section style={{ background: 'var(--color-wireframe)', color: 'var(--color-base)', padding: '6rem 1.5rem', textAlign: 'center' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
          GET STARTED
        </div>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>
          Not sure if AI is right<br />for your business?
        </h2>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', lineHeight: 1.7, color: '#9ca3af', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2.5rem' }}>
          That&apos;s exactly what the free 30-minute call is for.
          No pitch. No pressure. Just an honest conversation about
          whether I can help and what that would look like.
        </p>
        <a href="mailto:wallymollc@gmail.com" className="wireframe-btn" style={{
          borderColor: 'var(--color-energy-primary)',
          color: 'var(--color-energy-primary)',
          background: 'transparent',
          padding: '16px 40px',
          fontSize: '12px',
        }}>
          Book Your Free Call →
        </a>
        <p style={{ marginTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#555' }}>
          wallymollc@gmail.com · Downtown Apex, NC
        </p>
      </div>
    </section>
  );
}
