import { useNavigate } from "react-router-dom";

export default function PythonAI() {
    const navigate = useNavigate();

  const points = [
    {
      icon: "🐍",
      text: "Python from basics to advanced automation",
    },
    {
      icon: "🤖",
      text: "AI tools, prompt engineering & workflows",
    },
     {
      icon: "🚀",
      text: "Automate repatetive task, EMail & reports",
    },
    {
      icon: "🧩",
      text: "Hands-on projects with real-world use cases",
    },
    {
      icon: "💼",
      text: "Job-ready skills with portfolio guidance",
    },
  ];

  return (
    <section id="python-ai" className="py-4 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: IMAGE + CARD */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <img
            src="/images/python-ai.png"
            alt="Python AI Program"
            className="w-full rounded-xl mb-6 aspect-[16/9] object-contain"
          />

          <h3 className="text-2xl font-bold mb-2 text-white">
            Python + AI Program
          </h3>

          <p className="text-zinc-400 mb-6">
            Learn automation, AI tools, and industry workflows in a structured,
            beginner-friendly format.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary text-3xl font-bold">₹4999</span>
            <span className="line-through text-zinc-500">₹14999</span>
          </div>

    <button onClick={() => navigate("/workshop")}
          className="w-full bg-primary text-black py-3 rounded-full font-semibold">
            Enroll Now
          </button>
        </div>

        {/* RIGHT: CARD-STYLE CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Learn Python & AI
          </h2>

          <p className="text-zinc-400 mb-8 max-w-xl">
            Master Python automation and AI tools to build real-world projects
            and fast-track your tech career.
          </p>

          <div className="space-y-4">
            {points.map((item, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-4
                  bg-gradient-to-r from-zinc-900 to-zinc-800
                  border border-zinc-800
                  rounded-2xl
                  px-6 py-4
                  hover:border-primary/50
                  transition
                "
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-zinc-200">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

    <button onClick={() => navigate("/workshop")}
           className="w-full mt-8 bg-primary text-black px-8 py-3 rounded-full font-semibold">
            Join Python Mastery
          </button>
        </div>

      </div>
    </section>
  );
}
