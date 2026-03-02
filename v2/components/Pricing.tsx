const tiers = [
  {
    name: "Discovery Workshop",
    price: "$299",
    freq: "one-time",
    desc: "Not sure where to start? We spend 2 hours together, map your workflow, and I leave you with 3 concrete AI quick wins written up in plain English.",
    cta: "Book a Workshop",
    highlight: false,
  },
  {
    name: "AI Roadmap Package",
    price: "$799",
    freq: "one-time",
    desc: "Full audit + a prioritized roadmap with tool recommendations, setup guides, and a 60-min walkthrough session. Everything you need to start executing.",
    cta: "Get Your Roadmap",
    highlight: true,
  },
  {
    name: "Monthly AI Partner",
    price: "$199",
    freq: "/mo",
    desc: "I stay in your corner. Monthly check-in call, access to me via message, and I keep your AI stack updated as tools evolve. Cancel anytime.",
    cta: "Start Partnership",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4">
          PRICING / TIERS_01
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
          Straightforward pricing.
        </h2>
        <p className="font-mono text-gray-500 mb-16 max-w-xl">
          No retainers you didn&apos;t ask for. No surprise invoices. Start wherever makes sense.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 border-2 flex flex-col ${
                tier.highlight
                  ? "border-black bg-black text-white"
                  : "border-black bg-white"
              }`}
            >
              {tier.highlight && (
                <div className="font-mono text-xs text-[#FF71CE] uppercase tracking-widest mb-4">
                  ★ Most Popular
                </div>
              )}
              <div className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">
                {tier.name}
              </div>
              <div className="font-display text-4xl font-black mb-1">
                {tier.price}
                <span className="text-lg font-mono font-normal text-gray-400">{tier.freq}</span>
              </div>
              <p className={`font-mono text-sm leading-relaxed mt-4 mb-8 flex-1 ${tier.highlight ? "text-gray-300" : "text-gray-600"}`}>
                {tier.desc}
              </p>
              <a
                href="mailto:wallymollc@gmail.com"
                className={`font-mono text-sm font-bold uppercase tracking-widest px-6 py-3 text-center border-2 transition-all duration-200 ${
                  tier.highlight
                    ? "border-[#FF71CE] text-[#FF71CE] hover:bg-[#FF71CE] hover:text-black"
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
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
