const placeholders = [
  { quote: "Wally came in, spent two hours with us, and left us with a plan we actually understood. We implemented three tools that same week.", name: "— Local Business Owner, Apex NC" },
  { quote: "I was skeptical about AI for my type of business. Now I use it every day and I actually know why it works.", name: "— Independent Contractor, RTP" },
  { quote: "Best $299 I've spent on my business. No fluff, no jargon — just a clear plan and someone who taught me, not just told me.", name: "— Salon Owner, Downtown Apex" },
];

export default function Testimonials() {
  return (
    <section style={{ padding: '6rem 1.5rem', background: 'var(--color-base)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: '1rem' }}>
          TESTIMONIALS
        </div>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '3.5rem', color: 'var(--color-text-primary)' }}>
          What clients say.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {placeholders.map((t, i) => (
            <div key={i} className="wireframe-card" style={{ position: 'relative' }}>
              <div style={{ fontFamily: 'serif', fontSize: '3rem', lineHeight: 1, color: 'var(--color-energy-primary)', marginBottom: '1rem' }}>&ldquo;</div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>{t.quote}</p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)' }}>{t.name}</div>
              <div style={{ position: 'absolute', top: '12px', right: '12px', fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-wireframe-subtle)', border: '1px solid var(--color-wireframe-subtle)', padding: '2px 6px' }}>PLACEHOLDER</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
