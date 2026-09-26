import Link from "next/link";

const topics = [
  {
    no: "01",
    icon: "⚙️",
    title: "Marine Diesel Engine",
    text: "Basic diesel engine principles, 2-stroke and 4-stroke engines, main components and working cycle.",
    href: "/mek/marine-diesel-engine",
  },
  {
    no: "02",
    icon: "🔩",
    title: "Engine Components",
    text: "Piston, cylinder liner, connecting rod, crankshaft, cylinder head, valves and bearings.",
    href: "/mek/engine-components",
  },
  {
    no: "03",
    icon: "💧",
    title: "Pumps",
    text: "Types of pumps, centrifugal and positive displacement pumps, operation, maintenance and safety.",
    href: "/mek/pumps",
  },
  {
    no: "04",
    icon: "🔧",
    title: "Valves",
    text: "Globe, gate, butterfly, ball, check and relief valves, their uses, operation and basic maintenance.",
    href: "/mek/valves",
  },
  {
    no: "05",
    icon: "🛢️",
    title: "Fuel & Lubrication",
    text: "Fuel oil system, lubricating oil system, filters, purifiers and importance of correct lubrication.",
    href: "/mek/fuel-lubrication",
  },
  {
    no: "06",
    icon: "🌡️",
    title: "Cooling System",
    text: "Fresh-water and sea-water cooling systems, heat exchangers, temperature control and maintenance.",
    href: "/mek/cooling-system",
  },
  {
    no: "07",
    icon: "⚡",
    title: "Electrical Basics",
    text: "Basic shipboard electrical safety, generators, motors, batteries, switches, fuses and circuit breakers.",
    href: "/mek/electrical-basics",
  },
  {
    no: "08",
    icon: "🧯",
    title: "Engine-Room Safety",
    text: "PPE, fire prevention, hot surfaces, oil leakage, safe working practices and emergency precautions.",
    href: "/mek/engine-room-safety",
  },
  {
    no: "09",
    icon: "🛠️",
    title: "Maintenance & Tools",
    text: "Common engine-room tools, planned maintenance, dismantling, inspection, cleaning and safe reassembly.",
    href: "/mek/maintenance-tools",
  },
];

export default function MEKPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-extrabold text-cyan-400">
              ⚓ SeaPrep Hub
            </h1>
            <p className="text-xs text-slate-400">
              Maritime Learning • Notes • MCQ • CBT
            </p>
          </div>

          <Link
            href="/"
            className="rounded-xl border border-cyan-400 px-4 py-2 text-sm font-bold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            ← Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-cyan-400/20 bg-gradient-to-b from-blue-950 to-slate-950 px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="text-6xl">⚙️</div>

          <p className="mt-5 font-bold tracking-wider text-orange-400">
            GP RATING STUDY MATERIAL
          </p>

          <h2 className="mt-3 text-4xl font-extrabold md:text-6xl">
            Marine Engineering Knowledge
          </h2>

          <p className="mt-2 text-xl font-bold text-orange-400">MEK</p>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-300">
            Learn essential engine-room knowledge through simple explanations,
            topic-wise notes, important safety precautions and practical
            maritime basics.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-8">
          <p className="font-bold text-orange-400">MEK TOPICS</p>

          <h2 className="mt-2 text-3xl font-bold">
            Choose a Topic to Start Learning
            {/* MEK PRACTICE CBT */}
<div className="mb-10 mt-8 rounded-3xl bg-gradient-to-r from-blue-950 to-slate-900 p-6 text-white shadow-lg md:p-8">
  <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
        MEK PRACTICE CBT
      </p>

      <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">
        Ready to Test Your Knowledge?
      </h3>

      <p className="mt-3 max-w-2xl leading-7 text-slate-300">
        Practice 50 Marine Engineering Knowledge questions with a
        60-minute timer, random question order, instant score and
        complete answer review.
      </p>
    </div>

    <Link
      href="/mek/practice-cbt"
      className="shrink-0 rounded-xl bg-orange-500 px-7 py-4 text-center font-extrabold text-white shadow-md transition hover:bg-orange-600"
    >
      Start Practice CBT →
    </Link>
  </div>
</div>
          </h2>

          <p className="mt-2 text-slate-400">
            Build your marine engineering basics step by step.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.no}
              className="rounded-2xl border border-orange-400/20 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-orange-400"
            >
              <div className="flex items-start justify-between">
                <div className="text-4xl">{topic.icon}</div>

                <span className="rounded-full bg-orange-400/10 px-3 py-1 text-xs font-bold text-orange-400">
                  TOPIC {topic.no}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold">{topic.title}</h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-400">
                {topic.text}
              </p>

             <Link
  href={topic.href}
  className="mt-6 inline-block rounded-xl bg-orange-500 px-5 py-3 font-bold text-white transition hover:bg-orange-600"
>
  Read Notes →
</Link>
            </div>
          ))}
        </div>

        {/* Safety */}
        <div className="mt-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6">
          <h3 className="text-xl font-bold text-yellow-400">
            ⚠️ Safety First
          </h3>

          <p className="mt-3 leading-7 text-slate-300">
            Every MEK topic will include relevant safety precautions. Students
            should understand PPE, machinery hazards, isolation procedures,
            hot surfaces, rotating machinery and safe working practices before
            carrying out engine-room work.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">Learn • Revise • Practice</h2>
          <p className="mt-3 text-slate-400">
            Strong basics for GP Rating students and future seafarers.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        <p className="text-lg font-bold text-white">SeaPrep Hub</p>
        <p className="mt-1">Maritime Education • STCW • GP Rating • MCQ • CBT</p>

        <p className="mt-5 font-semibold text-cyan-400">
          Prepared by: Saurav Kumar Das
        </p>
      </footer>
    </main>
  );
}