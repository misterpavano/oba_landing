const tiers = [
  {
    name: "Discovery Workshop",
    price: "$299",
    freq: "one-time",
    desc: "2 hours together. I map your workflow and leave you with 3 concrete AI quick wins written up in plain English. Perfect if you're not sure where to start.",
    cta: "Book a Workshop",
    highlight: false,
  },
  {
    name: "AI Roadmap Package",
    price: "$799",
    freq: "one-time",
    desc: "Full audit + a prioritized roadmap with tool recommendations, setup guides, and a 60-min walkthrough. Everything you need to start executing.",
    cta: "Get Your Roadmap",
    highlight: true,
  },
  {
    name: "Monthly AI Partner",
    price: "$199",
    freq: "/mo",
    desc: "Monthly check-in call, access to me via message, and I keep your AI stack current as tools evolve. Cancel anytime.",
    cta: "Start Partnership",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6" style={{background: '#f5f5f5'}}>
      <div className="max-w-5xl mx-auto">
        <div className="text-xs text-gray-400 uppercase tracking-widest mb-4" style={{fontFamily: 'monospace'}}>
          PRICING
        </div>
        <h2 className="text-5xl font-black mb-4" style={{fontFamily: 'system-ui, sans-serif'}}>
          Straightforward pricing.
        </h2>
        <p className="text-gray-500 mb-16 max-w-xl" style={{fontFamily: 'monospace'}}>
          No retainers you didn&apos;t ask for. Start wherever makes sense.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="p-8 border-2 flex flex-col"
              style={{
                borderColor: 'black',
                background: tier.highlight ? '#0a0a0a' : 'white',
                color: tier.highlight ? 'white' : 'black',
              }}
            >
              {tier.highlight && (
                <div className="text-xs uppercase tracking-widest mb-4" style={{fontFamily: 'monospace', color: '#FF71CE'}}>
                  ★ Most Popular
                </div>
              )}
              <div className="text-xs uppercase tracking-widest text-gray-400 mb-2" style={{fontFamily: 'monospace'}}>
                {tier.name}
              </div>
              <div className="text-4xl font-black mb-1" style={{fontFamily: 'system-ui, sans-serif'}}>
                {tier.price}
                <span className="text-lg font-normal text-gray-400" style={{fontFamily: 'monospace'}}>{tier.freq}</span>
              </div>
              <p className="text-sm leading-relaxed mt-4 mb-8 flex-1" style={{fontFamily: 'monospace', color: tier.highlight ? '#9ca3af' : '#4b5563'}}>
                {tier.desc}
              </p>
              <a
                href="mailto:wallymollc@gmail.com"
                className="text-sm font-bold uppercase tracking-widest px-6 py-3 text-center border-2 transition-all duration-200 hover:opacity-80"
                style={{
                  fontFamily: 'monospace',
                  borderColor: tier.highlight ? '#FF71CE' : 'black',
                  color: tier.highlight ? '#FF71CE' : 'black',
                }}
              >
                {tier.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
