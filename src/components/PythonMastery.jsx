import { useNavigate } from "react-router-dom";

export default function PythonAI({
  sectionId,
  image,
  cardTitle,
  cardDescription,
  price,
  oldPrice,
  enrollText,
  rightTitle,
  rightDescription,
  points,
  ctaText,
}) {
  const navigate = useNavigate();

  return (
    <section id={sectionId} className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CARD */}
        <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <img
            src={image}
            alt={cardTitle}
            className="w-full rounded-xl mb-6 aspect-[16/9] object-contain"
          />

          <h3 className="text-2xl font-bold mb-2 text-white">
            {cardTitle}
          </h3>

          <p className="text-zinc-400 mb-6">
            {cardDescription}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-primary text-3xl font-bold">
              {price}
            </span>
            <span className="line-through text-zinc-500">
              {oldPrice}
            </span>
          </div>

          <button
            onClick={() => navigate("/register-workshop")}
            className="w-full bg-primary text-black py-3 rounded-full font-semibold"
          >
            {enrollText}
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            {rightTitle}
          </h2>

          <p className="text-zinc-400 mb-8 max-w-xl">
            {rightDescription}
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

          <button
            onClick={() => navigate("/workshop")}
            className="w-full mt-8 bg-primary text-black px-8 py-3 rounded-full font-semibold"
          >
            {ctaText}
          </button>
        </div>

      </div>
    </section>
  );
}
