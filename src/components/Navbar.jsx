import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
    const navigate = useNavigate();


  const handleClick = (id) => {
    setOpen(false);

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<h1 className="text-2xl font-extrabold tracking-wide antialiased">
  <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
    FutureWay
  </span>{" "}
  <span className="text-white font-semibold">
    Skill
  </span>
</h1>




        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <button onClick={() => handleClick("python-ai")} className="hover:text-white">Python Mastery</button>
          <button onClick={() => handleClick("workshops")} className="hover:text-white">Workshops</button>
          <button onClick={() => handleClick("ai")} className="hover:text-white">AI Mastery</button>
          <button onClick={() => handleClick("about")} className="hover:text-white">About</button>
          <button onClick={() => handleClick("contact")} className="hover:text-white">Contact</button>
        </div>

        
        <button
            onClick={() => navigate("/workshop")}
            className="hidden md:block bg-primary text-black px-5 py-2 rounded-full font-semibold"
        >
            Join Live Workshop
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-5">
          <button onClick={() => handleClick("python-ai")} className="block w-full text-left text-gray-300">Python Mastery</button>
          <button onClick={() => handleClick("workshops")} className="block w-full text-left text-gray-300">Workshops</button>
          <button onClick={() => handleClick("ai")} className="block w-full text-left text-gray-300">AI Mastery</button>
          <button onClick={() => handleClick("about")} className="block w-full text-left text-gray-300">About</button>
          <button onClick={() => handleClick("contact")} className="block w-full text-left text-gray-300">Contact</button>

          
          <button
           onClick={() => navigate("/workshop")}
           className="w-full bg-primary text-black py-2 rounded-full font-semibold mt-2">
            Join Live Workshop
        </button>

        </div>
      )}
    </nav>
  );
}
