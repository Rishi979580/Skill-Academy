import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export default function Navbar({ brand, menuItems, cta }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* BRAND */}
        <NavLink to="/" className="text-2xl font-extrabold tracking-wide antialiased">
          <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
            {brand.highlight}
          </span>{" "}
          <span className="text-white font-semibold">
            {brand.name}
          </span>
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-300">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-white ${isActive ? "text-white" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <button
          onClick={() => goTo(cta.route)}
          className="hidden md:block bg-primary text-black px-5 py-2 rounded-full font-semibold"
        >
          {cta.label}
        </button>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-5">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => goTo(item.path)}
              className="block w-full text-left text-gray-300 hover:text-white"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => goTo(cta.route)}
            className="w-full bg-primary text-black py-2 rounded-full font-semibold mt-2"
          >
            {cta.label}
          </button>
        </div>
      )}
    </nav>
  );
}
