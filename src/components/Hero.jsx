import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Boost Your Skills with{" "}
          <span className="text-primary">Python Automation</span>{" "}
          Workshop
        </h1>

        <p className="mt-5 text-gray-400 text-lg">
          Join Industry Oriented Python Workshop!!
        </p>

        <button 
        onClick={() => navigate("/workshop")}
        className="
          mt-8 px-8 py-3 rounded-full
          border border-primary
          text-primary font-semibold
          hover:bg-primary hover:text-black
          transition duration-300
        ">
          Enroll now →
        </button>

        <ul className="mt-8 space-y-2 text-gray-300">
          <li>Automate repetitive tasks</li>
          <li>Build AI-powered apps</li>
          <li>Master Python for Data & AI</li>
          <li>Hands-on projects with real-world use cases</li>
        </ul>

      </div>
    </section>
  );
}
