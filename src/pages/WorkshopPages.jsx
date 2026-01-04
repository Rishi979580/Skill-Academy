import WorkshopForm from "../components/WorkshopForm";

export default function WorkshopPage() {
  return (
    <section
      id="workshop"
      className="py-24 px-6 bg-black scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


 {/* RIGHT FORM */}
        <WorkshopForm />
        {/* LEFT CONTENT */}
        <div>

          {/* 🔥 IMAGE ON TOP */}
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
            & AI basics in one live session.
          </p>

          <ul className="space-y-3 text-zinc-300">
            <li className="flex gap-2">
              <span className="text-primary">✔</span> 2.5 Hours Live Training
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✔</span> Beginner Friendly
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✔</span> Real Automation Projects
            </li>
            <li className="flex gap-2">
              <span className="text-primary">✔</span> 100% Free
            </li>
          </ul>
        </div>

       

      </div>
    </section>
  );
}
