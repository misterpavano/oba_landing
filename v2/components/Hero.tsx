export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative">
      <div className="fixed top-4 right-4 font-mono text-xs text-gray-400 opacity-50 pointer-events-none">
        WIREFRAME CATALYST v2.0 / HERO_01
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 border border-black px-3 py-1 font-mono text-xs mb-8 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-[#FF71CE] inline-block" />
          AI Implementation · Apex & RTP
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-black leading-none mb-6">
          Your Business.<br />
          <span className="text-[#FF71CE]">AI-Ready.</span><br />
          No BS.
        </h1>
        <p className="font-mono text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          I come to your business, learn how you actually work,
          and hand you a clear AI roadmap — tools you&apos;ll own,
          knowledge you&apos;ll keep, results you&apos;ll see.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:wallymollc@gmail.com"
            className="px-8 py-4 font-mono font-bold text-sm uppercase tracking-widest border-2 border-black bg-black text-white hover:bg-[#FF71CE] hover:border-[#FF71CE] transition-all duration-200">
            Book Your Free 30-Min Call →
          </a>
          <a href="#how-it-works"
            className="font-mono text-sm underline underline-offset-4 text-gray-500 hover:text-black transition-colors">
            See how it works
          </a>
        </div>
        <p className="mt-10 font-mono text-xs text-gray-400 tracking-widest uppercase">
          Serving Downtown Apex · RTP Corridor · No agency overhead
        </p>
      </div>
    </section>
  );
}
