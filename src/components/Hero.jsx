import { useNavigate } from "react-router-dom";

export default function Hero({
  title,
  highlight,
  subtitle,
  ctaText,
  points,
}) {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center text-center py-24 px-4">
      <div className="max-w-4xl">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          {title}{" "}
          <span className="text-primary">{highlight}</span>{" "}
          Workshop
        </h1>

        <p className="mt-5 text-gray-400 text-lg">
          {subtitle}
        </p>

        <button
          onClick={() => navigate("/register-workshop")}
          className="
            mt-8 px-8 py-3 rounded-full
            border border-primary
            text-primary font-semibold
            hover:bg-primary hover:text-black
            transition duration-300
          "
        >
          {ctaText} →
        </button>

        <ul className="mt-8 space-y-2 text-gray-300">
          {points.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>
    </section>
  );
}
