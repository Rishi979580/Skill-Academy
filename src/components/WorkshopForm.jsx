import { useState, useEffect } from "react";
import { enrollWorkshop } from "../services/api";

export default function WorkshopForm({
  badge,
  countdown,
  heading,
  subheading,
  fields,
  ctaText,
  loadingText,
  courseName,
  whatsapp,
  trustText,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [timeLeft, setTimeLeft] = useState({});

  /* ⏳ COUNTDOWN */
  useEffect(() => {
    if (!countdown?.targetDate) return;

    const target = new Date(countdown.targetDate);
    const timer = setInterval(() => {
      const diff = target - new Date();
      if (diff <= 0) return clearInterval(timer);

      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  /* 🔥 INPUT HANDLER */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* 🚀 SUBMIT HANDLER */
  const submitForm = async () => {
    if (!form.name || !form.email || !form.phone) {
      setMsg("❌ All fields are required");
      return;
    }

    try {
      setLoading(true);
      setMsg("");

      await enrollWorkshop({
        ...form,
        course: courseName,
      });

      setMsg("✅ Registered successfully! Redirecting to WhatsApp…");

      /* 📲 WHATSAPP REDIRECT */
      setTimeout(() => {
        const text = encodeURIComponent(
          `Hi, I have registered for the ${courseName}.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}`
        );
        window.location.href = `https://wa.me/${whatsapp.number}?text=${text}`;
      }, 1500);

      setForm({ name: "", email: "", phone: "" });
    } catch (err) {
      setMsg("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">

      {/* BADGE */}
      <div className="bg-emerald-600/10 border border-emerald-500/30 rounded-xl p-4 mb-6 text-center">
        <p className="text-emerald-400 text-2xl font-bold">
          {badge?.title}
        </p>
        <p className="text-zinc-400 text-sm">
          {badge?.subtitle}
        </p>
      </div>

      {/* COUNTDOWN */}
      {countdown && (
        <div className="bg-red-600 rounded-xl p-4 mb-6 text-center text-white">
          <p className="font-semibold mb-1">{countdown.label}</p>
          <div className="flex justify-center gap-4 text-sm">
            <span>{timeLeft.d || 0}d</span>
            <span>{timeLeft.h || 0}h</span>
            <span>{timeLeft.m || 0}m</span>
            <span>{timeLeft.s || 0}s</span>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold text-white mb-1">{heading}</h2>
      <p className="text-zinc-400 mb-6 text-sm">{subheading}</p>

      {/* NAME */}
      <label className="block text-sm text-zinc-400 mb-1">
        {fields?.name} <span className="text-red-500">*</span>
      </label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        className="w-full mb-4 p-3 bg-black border border-zinc-700 rounded text-white"
      />

      {/* EMAIL */}
      <label className="block text-sm text-zinc-400 mb-1">
        {fields?.email} <span className="text-red-500">*</span>
      </label>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        className="w-full mb-4 p-3 bg-black border border-zinc-700 rounded text-white"
      />

      {/* PHONE */}
      <label className="block text-sm text-zinc-400 mb-1">
        {fields?.phone} <span className="text-red-500">*</span>
      </label>
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full mb-6 p-3 bg-black border border-zinc-700 rounded text-white"
      />

      {/* CTA */}
      <button
        onClick={submitForm}
        disabled={loading}
        className="w-full bg-primary text-black py-3 rounded-full font-bold"
      >
        {loading ? loadingText : ctaText}
      </button>

      {/* MESSAGE */}
      {msg && (
        <p className="mt-4 text-center text-sm text-primary">
          {msg}
        </p>
      )}

      <div className="mt-4 text-center text-xs text-zinc-500">
        {trustText}
      </div>
    </div>
  );
}
