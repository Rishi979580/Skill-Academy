export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-950 text-center">
      <h2 className="text-3xl font-bold mb-4">About Futureway Skill</h2>
      <p className="text-zinc-400 max-w-3xl mx-auto">
        Empowering professionals with AI, Data, and Automation skills through
        expert-led workshops and hands-on projects.
      </p>

      <div className="mt-10 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {[
          ["5000+", "Students"],
          ["50+", "Workshops"],
          ["15+", "Experts"],
          ["10+", "Countries"],
        ].map(([n, t]) => (
          <div key={t} className="bg-zinc-900 p-6 rounded-xl">
            <p className="text-primary text-2xl font-bold">{n}</p>
            <p className="text-zinc-400">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
