import WorkshopForm from "../components/WorkshopForm";
import workshopData from "../content/sections/workshop-form.json";

export default function WorkshopPage() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <img
            src="/images/python-ai.png"
            alt="Python AI Workshop"
            className="w-full max-w-md mb-6 rounded-xl object-contain"
          />

          <h2 className="text-4xl font-bold text-white mb-4">
            Free Python Automation Workshop
          </h2>

          <p className="text-zinc-400 mb-6">
            Learn Python automation, Cloud Run, Firebase, Email Automation
            & AI basics in one live workshop.
          </p>

          <ul className="space-y-3 text-zinc-300">
            <li>✔ 2.5 Hours Live Training</li>
            <li>✔ Beginner Friendly</li>
            <li>✔ Real Automation Projects</li>
            <li>✔ 100% Free</li>
          </ul>
        </div>

        {/* RIGHT FORM (DATA PASSED HERE) */}
        <WorkshopForm {...workshopData} />
      </div>
    </section>
  );
}
