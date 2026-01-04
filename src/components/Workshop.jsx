import { useNavigate } from "react-router-dom";

export default function Workshops({
  sectionId,
  leftTitle,
  leftDescription,
  features = [],        // 🔥 SAFE DEFAULT
  leftCtaText,
  rightImage,
  rightTitle,
  rightDescription,
  price,
  oldPrice,
  rightCtaText,
}) {
  const navigate = useNavigate();

  return (
    <section id={sectionId} className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">{leftTitle}</h2>
          <p className="text-zinc-400 mb-6">{leftDescription}</p>

          <ul className="space-y-4 mb-8">
            {features.map((item, i) => (
              <li key={i} className="flex gap-3 text-zinc-300">
                <span className="text-primary">✔</span> {item}
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate("/register-workshop")}
            className="bg-primary text-black px-8 py-3 rounded-full font-semibold"
          >
            {leftCtaText}
          </button>
        </div>

        {/* RIGHT */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <img src={rightImage} alt={rightTitle} className="mb-6 rounded-xl" />
          <h3 className="text-2xl font-bold text-white mb-2">{rightTitle}</h3>
          <p className="text-zinc-400 mb-6">{rightDescription}</p>

          <div className="flex gap-4 mb-6">
            <span className="text-primary text-3xl font-bold">{price}</span>
            <span className="line-through text-zinc-500">{oldPrice}</span>
          </div>

          <button
            onClick={() => navigate("/register-workshop")}
            className="w-full bg-primary text-black py-3 rounded-full font-semibold"
          >
            {rightCtaText}
          </button>
        </div>
      </div>
    </section>
  );
}
