const steps = [
  { num: "01", title: "I Audit Your Workflow", desc: "We spend time together — in person or on a call. I learn how your business actually runs: where time gets wasted, what's repetitive, where the bottlenecks are. No assumptions.", accent: 'var(--color-energy-primary)' },
  { num: "02", title: "We Build Your AI Roadmap", desc: "I turn what I learned into a clear, prioritized plan. Which tools to use, how to set them up, what to do first. Written in plain English — not tech jargon.", accent: 'var(--color-energy-secondary)' },
  { num: "03", title: "You Own Everything", desc: "Every system, document, and login belongs to you. I teach you as we build so you're never dependent on me. Monthly check-ins available if you want a partner as things evolve.", accent: 'var(--color-energy-accent)' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: 'var(--color-wireframe)', color: 'var(--color-base)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666', marginBottom: '1rem' }}>
          PROCESS
        </div>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1, marginBottom: '4rem' }}>
          Three steps.<br />
          <span style={{ color: 'var(--color-energy-primary)' }}>Zero fluff.</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
          {steps.map((step) => (
            <div key={step.num} className="wireframe-card" style={{ borderColor: '#333', background: 'transparent' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '3rem', fontWeight: 900, color: step.accent, marginBottom: '1.5rem' }}>{step.num}</div>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-base)' }}>{step.title}</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', lineHeight: 1.7, color: '#9ca3af' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
