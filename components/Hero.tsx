export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="reveal mb-6">
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
          }}>
            One Block Away — Apex, NC
          </span>
        </div>

        {/* Headline */}
        <h1
          className="reveal"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.03,
            letterSpacing: '-0.04em',
            color: 'var(--color-text-primary)',
            marginBottom: '24px',
            animationDelay: '0.1s',
            maxWidth: '820px',
          }}
        >
          Your competitors are
          <br />
          using AI.
          <br />
          <span style={{ color: 'var(--color-accent)' }}>Here's what's actually worth it.</span>
        </h1>

        {/* Subhead */}
        <p
          className="reveal"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 400,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.65,
            maxWidth: '520px',
            marginBottom: '40px',
            animationDelay: '0.2s',
          }}
        >
          I work with small businesses in Apex on AI adoption. Some tools cut time. Some don't.
          I help you figure out which ones fit your situation.
        </p>

        {/* CTAs */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            animationDelay: '0.3s',
          }}
        >
          <a href="#book-consult" className="btn btn-primary">
            Let's Talk About Your Business
          </a>
          <a href="#how-i-can-help" className="btn btn-secondary">
            See What I Do
          </a>
        </div>

        {/* Social proof strip */}
        <div
          className="reveal"
          style={{
            marginTop: '56px',
            paddingTop: '28px',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            animationDelay: '0.4s',
          }}
        >
          {[
            { stat: '14 years', label: 'in customer experience' },
            { stat: 'Local to Apex', label: 'not a remote vendor' },
            { stat: 'You own it', label: 'no contracts, no lock-in' },
          ].map((item, i) => (
            <div key={i}>
              <div style={{
                fontSize: '15px',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
              }}>
                {item.stat}
              </div>
              <div style={{
                fontSize: '12px',
                color: 'var(--color-text-tertiary)',
                marginTop: '2px',
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
