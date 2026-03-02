const audiences = [
  { type: "Salons & Spas", pain: "Spending hours on scheduling, reminders, and chasing no-shows?" },
  { type: "Contractors", pain: "Drowning in estimates, follow-ups, and supplier emails?" },
  { type: "Real Estate Agents", pain: "Manually writing listings, market updates, and client emails?" },
  { type: "Restaurants", pain: "Losing hours to social media, reviews, and menu updates?" },
  { type: "Solo Consultants", pain: "Doing research, proposals, and admin work that AI could handle in minutes?" },
];

export default function WhoItsFor() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4">
          TARGET / WHO_ITS_FOR_01
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
          Sound familiar?
        </h2>
        <p className="font-mono text-gray-500 mb-16 max-w-xl">
          If you run a small business and feel like AI is passing you by — this is for you.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((a) => (
            <div key={a.type} className="border-2 border-black p-6 hover:bg-black hover:text-white group transition-all duration-200">
              <div className="font-mono text-xs text-[#FF71CE] uppercase tracking-widest mb-3 group-hover:text-[#FF71CE]">
                {a.type}
              </div>
              <p className="font-mono text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed">
                {a.pain}
              </p>
            </div>
          ))}
          <div className="border-2 border-dashed border-gray-300 p-6 flex items-center justify-center">
            <p className="font-mono text-sm text-gray-400 text-center">
              Don&apos;t see your business?<br />
              <span className="text-black underline">Let&apos;s talk anyway →</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
