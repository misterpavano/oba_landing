const services = [
  {
    tag: 'Start Here',
    title: 'AI Readiness Audit',
    description:
      "Not sure where AI fits in your business? We'll spend 90 minutes mapping where you're losing time and money, then I'll walk you through the specific tools that address each gap. You'll leave with a prioritized action list.",
    accent: true,
  },
  {
    tag: 'Most Popular',
    title: 'AI Tool Training',
    description:
      "Hands-on training for you and your team on the AI tools that actually matter for your work. We'll go through real examples from your business, not generic lectures.",
    accent: false,
  },
  {
    tag: 'High Impact',
    title: 'Workflow Automation',
    description:
      "Customer follow-ups, scheduling, invoicing, content drafts. Most businesses waste hours on these. I'll identify which ones you can automate and set them up.",
    accent: false,
  },
  {
    tag: 'Ongoing',
    title: 'AI Support Retainer',
    description:
      "Monthly check-ins to add new tools as they become useful, fix what's breaking, and keep you from falling behind as AI changes.",
    accent: false,
  },
];

export default function Services() {
  return (
    <section id="how-i-can-help" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-base)' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="wireframe-section-header reveal">
          <span className="wireframe-section-label">01</span>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
          }}>
            What I Do
          </h2>
        </div>

        <p
          className="reveal"
          style={{
            fontSize: '17px',
            fontWeight: 400,
            color: 'var(--color-text-secondary)',
            maxWidth: '520px',
            lineHeight: 1.65,
            marginBottom: '40px',
            animationDelay: '0.1s',
          }}
        >
          Four ways to work together. Most people start with the audit,
          then build from there based on what they actually need.
        </p>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {services.map((svc, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: svc.accent ? 'var(--color-accent)' : 'var(--color-surface)',
                border: `1px solid ${svc.accent ? 'var(--color-accent)' : 'var(--color-border)'}`,
                borderRadius: '4px',
                padding: '28px',
                animationDelay: `${0.1 + i * 0.08}s`,
              }}
            >
              <div style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: svc.accent ? 'rgba(255,255,255,0.65)' : 'var(--color-accent)',
                marginBottom: '12px',
              }}>
                {svc.tag}
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: svc.accent ? '#fff' : 'var(--color-text-primary)',
                marginBottom: '10px',
              }}>
                {svc.title}
              </h3>
              <p style={{
                fontSize: '13px',
                fontWeight: 400,
                color: svc.accent ? 'rgba(255,255,255,0.8)' : 'var(--color-text-secondary)',
                lineHeight: 1.65,
              }}>
                {svc.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
