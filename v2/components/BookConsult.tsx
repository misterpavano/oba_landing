export default function BookConsult() {
  return (
    <section className="py-24 px-6" style={{background: '#0a0a0a', color: 'white'}}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-4" style={{fontFamily: 'monospace'}}>
          GET STARTED
        </div>
        <h2 className="text-5xl font-black mb-6" style={{fontFamily: 'system-ui, sans-serif'}}>
          Not sure if AI is right<br />for your business?
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{fontFamily: 'monospace'}}>
          That&apos;s exactly what the free 30-minute call is for.
          No pitch. No pressure. Just an honest conversation about
          whether I can help and what that would look like.
        </p>
        <a
          href="mailto:wallymollc@gmail.com"
          className="inline-block px-10 py-5 text-sm uppercase tracking-widest border-2 transition-all duration-200 hover:opacity-80"
          style={{fontFamily: 'monospace', fontWeight: 700, borderColor: '#FF71CE', color: '#FF71CE'}}
        >
          Book Your Free Call →
        </a>
        <p className="mt-6 text-xs text-gray-600" style={{fontFamily: 'monospace'}}>
          wallymollc@gmail.com · Downtown Apex, NC
        </p>
      </div>
    </section>
  );
}
