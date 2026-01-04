import { useNavigate } from "react-router-dom";

export default function Workshops() {
    const navigate = useNavigate();

  return (

 <section id="workshops" className="py-24 px-6 bg-zinc-950">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT: CONTENT */}
    <div>
      <h2 className="text-4xl font-bold mb-6 text-white">
        Our Workshops
      </h2>

      <p className="text-zinc-400 mb-6">
        Industry-oriented workshops designed for beginners and working
        professionals to upgrade skills with real-world practice.
      </p>

      <ul className="space-y-4 mb-8">
        <li className="flex gap-3 items-start">
          <span className="text-primary">✔</span>
          <span className="text-zinc-300">
            No coding background required — start from basics
          </span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="text-primary">✔</span>
          <span className="text-zinc-300">
            Reduce daily work by 2+ hours using automation
          </span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="text-primary">✔</span>
          <span className="text-zinc-300">
            Live hands-on practice with real-world datasets
          </span>
        </li>

        <li className="flex gap-3 items-start">
          <span className="text-primary">✔</span>
          <span className="text-zinc-300">
            Get certified completion certificate
          </span>
        </li>
      </ul>

    <button onClick={() => navigate("/workshop")}
      className="bg-primary text-black px-8 py-3 rounded-full font-semibold">
        Enroll Now
      </button>
    </div>

    {/* RIGHT: WORKSHOP IMAGE + CARD */}
    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">

      {/* IMAGE */}
      <img
        src="/images/ai-workshop.png"
        alt="AI Python Workshop"
        className="w-full rounded-xl mb-6"
      />

      <h3 className="text-2xl font-bold mb-2 text-white">
        Join Free Workshop
      </h3>

      <p className="text-zinc-400 mb-6">
        Learn Python fundamentals, automation, and AI skills for real-world
        applications.
      </p>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-primary text-3xl font-bold">₹0</span>
        <span className="line-through text-zinc-500">₹9999</span>
      </div>

      <button className="w-full bg-primary text-black py-3 rounded-full font-semibold">
        Join Free Workshop
      </button>
    </div>

  </div>
</section>



  );
}
