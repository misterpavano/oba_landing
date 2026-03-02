export default function BookConsult() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">
          CTA / BOOK_CONSULT_01
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
          Not sure if AI is right<br />
          for your business?
        </h2>
        <p className="font-mono text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          That&apos;s exactly what the free 30-minute call is for.
          No pitch. No pressure. Just an honest conversation about
          whether I can help and what that would look like.
        </p>
        <a
          href="mailto:wallymollc@gmail.com"
          className="inline-block px-10 py-5 font-mono font-bold text-sm uppercase tracking-widest border-2 border-[#FF71CE] text-[#FF71CE] hover:bg-[#FF71CE] hover:text-black transition-all duration-200"
        >
          Book Your Free Call →
        </a>
        <p className="mt-6 font-mono text-xs text-gray-600">
          wallymollc@gmail.com · Downtown Apex, NC
        </p>
      </div>
    </section>
  );
}
