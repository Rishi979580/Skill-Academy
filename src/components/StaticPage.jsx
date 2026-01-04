export default function StaticPage({ title, updated, sections, footer }) {
  return (
    <section className="py-24 px-6 bg-black text-zinc-300">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-2">
          {title}
        </h1>

        {updated && (
          <p className="text-sm text-zinc-500 mb-8">
            Last updated: {updated}
          </p>
        )}

        <div className="space-y-8">
          {sections.map((sec, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-white mb-2">
                {sec.heading}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {sec.text}
              </p>
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-12 text-sm text-zinc-500">
            {footer}
          </div>
        )}

      </div>
    </section>
  );
}
