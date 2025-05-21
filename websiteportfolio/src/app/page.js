// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-20">
      {/* Intro Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Hi, I'm Your Name 👋</h1>
        <p className="text-lg text-gray-400">
          A passionate software developer crafting elegant solutions.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border p-4 rounded bg-[#1a1a1a]">Project 1</div>
          <div className="border p-4 rounded bg-[#1a1a1a]">Project 2</div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">
          Experience
        </h2>
        <div className="bg-[#1a1a1a] p-4 rounded">
          <p className="font-bold">Your Role @ Company</p>
          <p className="text-sm text-gray-400">Date – Date</p>
          <p>Description of what you did.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-4">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">
          Contact
        </h2>
        <p>
          Let's connect:{" "}
          <Link
            href="mailto:you@example.com"
            className="underline text-blue-400"
          >
            you@example.com
          </Link>
        </p>
      </section>
    </main>
  );
}
