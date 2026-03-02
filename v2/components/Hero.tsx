export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 border border-black px-3 py-1 text-xs mb-8 uppercase tracking-widest" style={{fontFamily: 'monospace'}}>
          <span className="w-2 h-2 rounded-full inline-block" style={{background: '#FF71CE'}} />
          AI Implementation · Apex & RTP
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black leading-none mb-6" style={{fontFamily: 'system-ui, sans-serif'}}>
          Your Business.<br />
          <span style={{color: '#FF71CE'}}>AI-Ready.</span><br />
          No BS.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed" style={{fontFamily: 'monospace'}}>
          I come to your business, learn how you actually work,
          and hand you a clear AI roadmap — tools you&apos;ll own,
          knowledge you&apos;ll keep, results you&apos;ll see.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:wallymollc@gmail.com"
            className="px-8 py-4 text-sm uppercase tracking-widest border-2 border-black bg-black text-white transition-all duration-200 hover:opacity-80"
            style={{fontFamily: 'monospace', fontWeight: 700}}
          >
            Book Your Free 30-Min Call →
          </a>
          <a
            href="#how-it-works"
            className="text-sm underline underline-offset-4 text-gray-500 hover:text-black transition-colors"
            style={{fontFamily: 'monospace'}}
          >
            See how it works
          </a>
        </div>

        <p className="mt-10 text-xs text-gray-400 tracking-widest uppercase" style={{fontFamily: 'monospace'}}>
          Serving Downtown Apex · RTP Corridor · No agency overhead
        </p>
      </div>
    </section>
  );
}
