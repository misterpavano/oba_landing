const audiences = [
  { type: "Salons & Spas", pain: "Spending hours on scheduling, reminders, and chasing no-shows?" },
  { type: "Contractors", pain: "Drowning in estimates, follow-ups, and supplier emails?" },
  { type: "Real Estate Agents", pain: "Manually writing listings, market updates, and client emails?" },
  { type: "Restaurants", pain: "Losing hours to social media, reviews, and menu updates?" },
  { type: "Solo Consultants", pain: "Doing research, proposals, and admin that AI could handle in minutes?" },
];

export default function WhoItsFor() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs text-gray-400 uppercase tracking-widest mb-4" style={{fontFamily: 'monospace'}}>
          WHO IT&apos;S FOR
        </div>
        <h2 className="text-5xl font-black mb-4" style={{fontFamily: 'system-ui, sans-serif'}}>
          Sound familiar?
        </h2>
        <p className="text-gray-500 mb-16 max-w-xl" style={{fontFamily: 'monospace'}}>
          If you run a small business and feel like AI is passing you by — this is for you.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((a) => (
            <div key={a.type} className="border-2 border-black p-6 hover:bg-black hover:text-white group transition-all duration-200 cursor-default">
              <div className="text-xs uppercase tracking-widest mb-3 group-hover:text-[#FF71CE]" style={{fontFamily: 'monospace', color: '#FF71CE'}}>
                {a.type}
              </div>
              <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed" style={{fontFamily: 'monospace'}}>
                {a.pain}
              </p>
            </div>
          ))}
          <div className="border-2 border-dashed border-gray-300 p-6 flex items-center justify-center">
            <p className="text-sm text-gray-400 text-center" style={{fontFamily: 'monospace'}}>
              Don&apos;t see your business?<br />
              <a href="mailto:wallymollc@gmail.com" className="text-black underline">Let&apos;s talk anyway →</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
