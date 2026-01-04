export default function About({ heading, description, stats = [] }) {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-950 text-center">
      <h2 className="text-3xl font-bold mb-4">{heading}</h2>

      <p className="text-zinc-400 max-w-3xl mx-auto">
        {description}
      </p>

      <div className="mt-10 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((item) => (
          <div key={item.label} className="bg-zinc-900 p-6 rounded-xl">
            <p className="text-primary text-2xl font-bold">{item.value}</p>
            <p className="text-zinc-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
