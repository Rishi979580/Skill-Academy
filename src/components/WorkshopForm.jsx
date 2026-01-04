import { useEffect, useState } from "react";
import { enrollWorkshop } from "../services/api";

export default function WorkshopForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  /* =============================
     🔥 COUNTDOWN TIMER
  ============================== */
  const targetDate = new Date("2026-01-11T19:00:00");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate - new Date();

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* =============================
     FORM HANDLERS
  ============================== */
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = async () => {
    if (!form.name || !form.email || !form.phone) {
      setMsg("❌ All fields are mandatory");
      return;
    }

    try {
      setLoading(true);
      setMsg("");

      await enrollWorkshop({
        ...form,
        course: "Python Automation Workshop",
      });

      setMsg("✅ Registered successfully! Redirecting to WhatsApp...");

      /* 📲 WHATSAPP REDIRECT */
      setTimeout(() => {
        const text = encodeURIComponent(
          `Hi, I have registered for the  Python Automation Workshop.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`
        );
        window.location.href = `https://wa.me/919795298080?text=${text}`;
      }, 1500);

      setForm({ name: "", email: "", phone: "" });
    } catch (err) {
      setMsg("❌ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 shadow-xl">

      {/* 🔥 FREE BADGE */}
      <div className="bg-emerald-600/10 border border-emerald-500/30 rounded-xl p-4 mb-6 text-center">
        <p className="text-emerald-400 text-2xl font-extrabold">
          100% FREE
        </p>
        <p className="text-zinc-400 text-sm">
          Limited seats • Live workshop
        </p>
      </div>

      {/* ⏳ COUNTDOWN */}
      <div className="bg-red-600 rounded-xl p-4 mb-6 text-center">
        <p className="text-white font-semibold mb-1">
          ⏰ Workshop Starts In
        </p>
        <div className="flex justify-center gap-4 text-white text-sm">
          <span>{timeLeft.days || 0}d</span>
          <span>{timeLeft.hours || 0}h</span>
          <span>{timeLeft.minutes || 0}m</span>
          <span>{timeLeft.seconds || 0}s</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-2">
        Join Free Python & AI Workshop
      </h2>
      <p className="text-zinc-400 mb-6 text-sm">
        Automation • AI Tools • Real Projects
      </p>

      {/* INPUTS */}
      <label className="text-sm text-zinc-400">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        className="w-full mb-4 p-3 rounded-lg bg-black border border-zinc-700 text-white focus:border-primary outline-none"
      />

      <label className="text-sm text-zinc-400">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        className="w-full mb-4 p-3 rounded-lg bg-black border border-zinc-700 text-white focus:border-primary outline-none"
      />

      <label className="text-sm text-zinc-400">
        Phone Number <span className="text-red-500">*</span>
      </label>
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full mb-6 p-3 rounded-lg bg-black border border-zinc-700 text-white focus:border-primary outline-none"
      />

      {/* CTA */}
      <button
        onClick={submitForm}
        disabled={loading}
        className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-3 rounded-full font-bold text-lg hover:opacity-90 transition"
      >
        {loading ? "Submitting..." : "Register Now"}
      </button>

      {/* TRUST */}
      <div className="mt-4 text-center text-xs text-zinc-500">
        🔒 Secure registration • 📩 Email + WhatsApp confirmation
      </div>

      {msg && (
        <p className="mt-4 text-center text-primary text-sm">
          {msg}
        </p>
      )}
    </div>
  );
}
