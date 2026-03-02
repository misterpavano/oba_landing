const tiers = [
  { name: "Discovery Workshop", price: "$299", freq: "one-time", desc: "2 hours together. I map your workflow and leave you with 3 concrete AI quick wins in plain English. Perfect if you're not sure where to start.", cta: "Book a Workshop", highlight: false },
  { name: "AI Roadmap Package", price: "$799", freq: "one-time", desc: "Full audit + prioritized roadmap with tool recommendations, setup guides, and a 60-min walkthrough. Everything you need to start executing.", cta: "Get Your Roadmap", highlight: true },
  { name: "Monthly AI Partner", price: "$199", freq: "/mo", desc: "Monthly check-in, access to me via message, and I keep your AI stack current as tools evolve. Cancel anytime.", cta: "Start Partnership", highlight: false },
];

export default function Pricing() {
  return (
    <section style={{ padding: '6rem 1.5rem', background: 'var(--color-surface)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: '1rem' }}>
          PRICING
        </div>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
          Straightforward pricing.
        </h2>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--color-text-tertiary)', marginBottom: '3.5rem', maxWidth: '480px' }}>
          No retainers you didn&apos;t ask for. Start wherever makes sense.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {tiers.map((tier) => (
            <div key={tier.name} className="wireframe-card" style={{
              background: tier.highlight ? 'var(--color-wireframe)' : 'var(--color-base)',
              color: tier.highlight ? 'var(--color-base)' : 'var(--color-text-primary)',
              display: 'flex', flexDirection: 'column',
            }}>
              {tier.highlight && (
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-energy-primary)', marginBottom: '1rem' }}>
                  ★ Most Popular
                </div>
              )}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem' }}>{tier.name}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.25rem' }}>
                {tier.price}<span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 400, color: '#888' }}>{tier.freq}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: 1.7, color: tier.highlight ? '#9ca3af' : 'var(--color-text-secondary)', margin: '1rem 0 2rem', flex: 1 }}>
                {tier.desc}
              </p>
              <a href="mailto:wallymollc@gmail.com" className="wireframe-btn" style={{
                borderColor: tier.highlight ? 'var(--color-energy-primary)' : 'var(--color-wireframe)',
                color: tier.highlight ? 'var(--color-energy-primary)' : 'var(--color-wireframe)',
                background: 'transparent',
                textAlign: 'center',
                fontSize: '11px',
              }}>
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
