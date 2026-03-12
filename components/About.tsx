import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-base)' }}>
      <div className="max-w-5xl mx-auto">

        <div className="wireframe-section-header reveal">
          <span className="wireframe-section-label">04</span>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
          }}>
            About
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '40px',
          alignItems: 'start',
        }}>

          {/* Photo */}
          <div
            className="reveal"
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              overflow: 'hidden',
              maxWidth: '260px',
              animationDelay: '0.1s',
            }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
              <Image
                src="/wally-headshot.jpg"
                alt="Wally — Founder of One Block Away"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
            <div style={{
              padding: '12px 16px',
              borderTop: '1px solid var(--color-border)',
              background: 'var(--color-surface)',
            }}>
              <p style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--color-text-secondary)',
                letterSpacing: '0.05em',
              }}>
                Wally — Founder
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="reveal" style={{ animationDelay: '0.15s' }}>
            <p style={{
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: '20px',
            }}>
              My path to One Block Away started with a simple frustration: agencies create dependency, not empowerment.
            </p>
            <p style={{
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: '20px',
            }}>
              I spent 14 years in customer experience — from NYC advertising to UX research and design — learning how to bridge business goals and real customer needs. But I also saw how agencies gatekeep knowledge, run up retainers, and leave clients dependent on "experts" who won't explain their own work.
            </p>
            <p style={{
              fontSize: '15px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
            }}>
              When I moved to Apex and expanded into AI, I decided to build something different: a partner who teaches you as we build, gives you everything we create, and makes sure you can thrive without me when we're done.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
