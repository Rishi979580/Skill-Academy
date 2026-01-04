import { useNavigate } from "react-router-dom";

export default function AIMastery({ title, description, points, ctaText, image }) {
  const navigate = useNavigate();

  return (
    <section id="ai" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">
            {title}
          </h2>

          <p className="text-gray-400 mb-6">
            {description}
          </p>

          {/* POINTS */}
          <div className="grid gap-4 mb-8">
            {points.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 bg-zinc-900 p-4 rounded-xl"
              >
                <span className="text-primary">{item.icon}</span>
                <span className="text-zinc-300">{item.text}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/register-workshop")}
            className="w-full mt-8 bg-primary text-black px-8 py-3 rounded-full font-semibold"
          >
            {ctaText}
          </button>
        </div>

        {/* RIGHT */}
        <img
          src={image}
          alt={title}
          className="w-full max-w-md mx-auto"
        />

      </div>
    </section>
  );
}
