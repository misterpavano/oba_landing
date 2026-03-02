const audiences = [
  { type: "Salons & Spas", pain: "Spending hours on scheduling, reminders, and chasing no-shows?" },
  { type: "Contractors", pain: "Drowning in estimates, follow-ups, and supplier emails?" },
  { type: "Real Estate Agents", pain: "Manually writing listings, market updates, and client emails?" },
  { type: "Restaurants", pain: "Losing hours to social media, reviews, and menu updates?" },
  { type: "Solo Consultants", pain: "Doing research, proposals, and admin that AI could handle in minutes?" },
];

export default function WhoItsFor() {
  return (
    <section style={{ padding: '6rem 1.5rem', background: 'var(--color-base)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: '1rem' }}>
          WHO IT&apos;S FOR
        </div>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
          Sound familiar?
        </h2>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--color-text-tertiary)', marginBottom: '3.5rem', maxWidth: '480px' }}>
          If you run a small business and feel like AI is passing you by — this is for you.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
          {audiences.map((a) => (
            <div key={a.type} className="wireframe-card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-energy-primary)', marginBottom: '0.75rem' }}>
                {a.type}
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                {a.pain}
              </p>
            </div>
          ))}
          <div style={{ border: '2px dashed var(--color-wireframe-subtle)', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-text-tertiary)', textAlign: 'center' }}>
              Don&apos;t see your business?<br />
              <a href="mailto:wallymollc@gmail.com" style={{ color: 'var(--color-text-primary)', textDecoration: 'underline' }}>Let&apos;s talk anyway →</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
