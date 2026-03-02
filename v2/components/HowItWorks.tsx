const steps = [
  {
    num: "01",
    title: "I Audit Your Workflow",
    desc: "We spend time together — in person or on a call. I learn how your business actually runs: where time gets wasted, what's repetitive, where the bottlenecks are. No assumptions.",
    accent: "#FF71CE",
  },
  {
    num: "02",
    title: "We Build Your AI Roadmap",
    desc: "I turn what I learned into a clear, prioritized plan. Which tools to use, how to set them up, what to do first. Written in plain English — not tech jargon.",
    accent: "#01CDFE",
  },
  {
    num: "03",
    title: "You Own Everything",
    desc: "Every system, document, and login belongs to you. I teach you as we build so you're never dependent on me. Monthly check-ins available if you want a partner as things evolve.",
    accent: "#B967FF",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6" style={{background: '#0a0a0a', color: 'white'}}>
      <div className="max-w-5xl mx-auto">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-4" style={{fontFamily: 'monospace'}}>
          HOW IT WORKS
        </div>
        <h2 className="text-5xl font-black mb-16" style={{fontFamily: 'system-ui, sans-serif'}}>
          Three steps.<br />
          <span style={{color: '#FF71CE'}}>Zero fluff.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="border border-gray-800 p-8 hover:border-gray-500 transition-colors">
              <div className="text-5xl font-black mb-6" style={{color: step.accent, fontFamily: 'monospace'}}>
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{fontFamily: 'system-ui, sans-serif'}}>{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{fontFamily: 'monospace'}}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
