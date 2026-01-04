export default function Contact({
  heading,
  description,
  placeholders,
  buttonText,
}) {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">
          {heading}
        </h2>

        <p className="text-zinc-400 mb-8">
          {description}
        </p>

        <input
          className="w-full bg-zinc-900 p-4 rounded mb-4"
          placeholder={placeholders.name}
        />

        <input
          className="w-full bg-zinc-900 p-4 rounded mb-4"
          placeholder={placeholders.email}
        />

        <textarea
          className="w-full bg-zinc-900 p-4 rounded mb-6"
          placeholder={placeholders.message}
        />

        <button className="w-full bg-primary text-black py-3 rounded font-semibold">
          {buttonText}
        </button>

      </div>
    </section>
  );
}
