export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-zinc-400 mb-8">
          Have questions? We'd love to hear from you.
        </p>

        <input className="w-full bg-zinc-900 p-4 rounded mb-4" placeholder="Your Name" />
        <input className="w-full bg-zinc-900 p-4 rounded mb-4" placeholder="Your Email" />
        <textarea className="w-full bg-zinc-900 p-4 rounded mb-6" placeholder="Your Message" />

        <button className="w-full bg-primary text-black py-3 rounded font-semibold">
          Send Message
        </button>
      </div>
    </section>
  );
}
