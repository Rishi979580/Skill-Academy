import { useNavigate } from "react-router-dom";

export default function AIMastery() {
      const navigate = useNavigate();

  const points = [
    "Integrate AI into workflows",
    "AI chatbots & automation",
    "Excel + AI automation",
    "Prompt Engineering",
    "AI projects",
    "Lifetime community support",
  ];

  return (
    
    <section id="ai" className="py-24 px-6 bg-black">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT: TEXT + CONTENT */}
    <div>
      <h2 className="text-4xl font-bold text-white mb-4">
        AI Mastery
      </h2>

      <p className="text-gray-400 mb-6">
        Learn Prompt Engineering, AI-powered Excel, and automation techniques
        to work smarter and faster.
      </p>

      {/* POINTS */}
      <div className="grid gap-4 mb-8">
        <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl">
          <span className="text-primary">⚡</span>
          <span className="text-zinc-300">
            Master Prompt Engineering for real-world use
          </span>
        </div>

        <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl">
          <span className="text-primary">📊</span>
          <span className="text-zinc-300">
            Automate Excel reports using AI & formulas
          </span>
        </div>

        <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl">
          <span className="text-primary">🤖</span>
          <span className="text-zinc-300">
            Build chatbots & AI assistants for daily work
          </span>
        </div>

        <div className="flex gap-3 bg-zinc-900 p-4 rounded-xl">
          <span className="text-primary">🚀</span>
          <span className="text-zinc-300">
            Save hours of manual work with AI automation
          </span>
        </div>
      </div>

    <button onClick={() => navigate("/workshop")}
       
       className="w-full mt-8 bg-primary text-black px-8 py-3 rounded-full font-semibold">
            Join AI Mastery
          </button>
    </div>

    {/* RIGHT: IMAGE */}
    <img
      src="/images/ai-mastery.png"
      alt="AI Mastery"
      className="w-full max-w-md mx-auto"
    />

  </div>
</section>


  );
}
