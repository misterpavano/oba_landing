const principles = [
  {
    number: '01',
    title: 'Start With What Hurts',
    description:
      "I don't hand you a roadmap or a standard package. Tell me what's eating your time or where competitors are beating you. That's where we begin. Everything else can wait.",
  },
  {
    number: '02',
    title: 'You Learn, Not Just Get Help',
    description:
      "I show you the tools as we work. I explain the decisions. You'll understand what you're using and why, not just get a result you can't replicate.",
  },
  {
    number: '03',
    title: 'You Own Everything',
    description:
      "Every workflow, automation, and system we build is yours. No proprietary software. No ongoing bill to keep things running. You leave able to run it yourself.",
  },
];

export default function HowIWork() {
  return (
    <section id="how-well-succeed" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-surface-muted)' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="wireframe-section-header reveal">
          <span className="wireframe-section-label">02</span>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
          }}>
            How I Work
          </h2>
        </div>

        <p
          className="reveal"
          style={{
            fontSize: '17px',
            color: 'var(--color-text-secondary)',
            maxWidth: '480px',
            lineHeight: 1.65,
            marginBottom: '40px',
            animationDelay: '0.1s',
          }}
        >
          Hiring me isn't like hiring an agency. Here's the difference.
        </p>

        {/* Principles */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {principles.map((p, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: '24px',
                alignItems: 'start',
                padding: '28px 0',
                borderBottom: i < principles.length - 1 ? '1px solid var(--color-border)' : 'none',
                animationDelay: `${0.1 + i * 0.1}s`,
              }}
            >
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--color-accent)',
                paddingTop: '4px',
              }}>
                {p.number}
              </span>
              <div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-primary)',
                  marginBottom: '8px',
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.65,
                  maxWidth: '540px',
                }}>
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
