const placeholders = [
  {
    quote: "Wally came in, spent two hours with us, and left us with a plan we actually understood. We implemented three tools that same week.",
    name: "— Local Business Owner, Apex NC",
  },
  {
    quote: "I was skeptical about AI for my type of business. Now I use it every day and I actually know why it works.",
    name: "— Independent Contractor, RTP",
  },
  {
    quote: "Best $299 I've spent on my business. No fluff, no jargon — just a clear plan and someone who taught me, not just told me.",
    name: "— Salon Owner, Downtown Apex",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs text-gray-400 uppercase tracking-widest mb-4" style={{fontFamily: 'monospace'}}>
          TESTIMONIALS
        </div>
        <h2 className="text-4xl font-black mb-16" style={{fontFamily: 'system-ui, sans-serif'}}>
          What clients say.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((t, i) => (
            <div key={i} className="border border-gray-200 p-8 relative">
              <div className="text-5xl leading-none mb-4" style={{color: '#FF71CE', fontFamily: 'serif'}}>&ldquo;</div>
              <p className="text-sm text-gray-700 leading-relaxed mb-6" style={{fontFamily: 'monospace'}}>{t.quote}</p>
              <div className="text-xs text-gray-400 uppercase tracking-widest" style={{fontFamily: 'monospace'}}>{t.name}</div>
              <div className="absolute top-3 right-3 text-xs text-gray-200 border border-gray-100 px-2 py-1" style={{fontFamily: 'monospace'}}>PLACEHOLDER</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
