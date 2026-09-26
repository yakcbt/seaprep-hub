import Link from "next/link";

const topics = [
  {
    number: "01",
    icon: "🚢",
    title: "Ship Familiarization",
    description:
      "Basic ship terminology, principal parts of a ship, dimensions and general arrangement.",
  },
  {
    number: "02",
    icon: "⚓",
    title: "Deck Equipment",
    description:
      "Anchors, windlass, mooring equipment, bollards, bitts, fairleads and deck fittings.",
  },
  {
    number: "03",
    icon: "🪢",
    title: "Ropes & Knots",
    description:
      "Types of ropes, rope construction, care and maintenance, knots, bends, hitches and splicing.",
  },
  {
    number: "04",
    icon: "🛟",
    title: "Life-Saving Appliances",
    description:
      "Lifeboats, liferafts, lifebuoys, lifejackets and basic emergency equipment.",
  },
  {
    number: "05",
    icon: "🔥",
    title: "Fire Fighting & Safety",
    description:
      "Fire prevention, fire-fighting equipment, safe working practices and emergency precautions.",
  },
  {
    number: "06",
    icon: "📦",
    title: "Cargo & Cargo Gear",
    description:
      "Basic cargo operations, lifting equipment, derricks, cranes and safe cargo handling.",
  },
  {
    number: "07",
    icon: "🚩",
    title: "Navigation & Signals",
    description:
      "Basic navigation terms, navigation lights, shapes, flags and common shipboard signals.",
  },
  {
    number: "08",
    icon: "🧭",
    title: "Seamanship",
    description:
      "Watchkeeping basics, deck work, maintenance and essential seamanship knowledge.",
  },
];

export default function GSKPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-2xl font-bold text-cyan-400">
            SeaPrep Hub
          </Link>

          <Link
            href="/"
            className="rounded-lg border border-cyan-400 px-4 py-2 text-sm font-semibold text-cyan-400"
          >
            ← Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-b from-blue-950 to-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center">
          <div className="text-6xl">⚓</div>

          <p className="mt-4 font-bold tracking-wider text-cyan-400">
            GP RATING STUDY MATERIAL
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
            General Ship Knowledge
          </h1>

          <p className="mt-3 text-xl font-semibold text-slate-300">
            GSK
          </p>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-400">
            Learn essential shipboard knowledge through simple explanations,
            topic-wise notes, important safety precautions and visual learning
            material.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-9">
          <p className="font-bold text-cyan-400">GSK TOPICS</p>
          <h2 className="mt-2 text-3xl font-bold">
            Choose a Topic to Start Learning
          </h2>
          <p className="mt-3 text-slate-400">
            Start from the basics and progress topic by topic.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.number}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
            >
              <div className="flex items-start justify-between">
                <div className="text-4xl">{topic.icon}</div>

                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-400">
                  TOPIC {topic.number}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-bold">{topic.title}</h2>

              <p className="mt-3 leading-6 text-slate-400">
                {topic.description}
              </p>

              <Link
href={
  topic.number === "01"
    ? "/gsk/ship-familiarization"
    : topic.number === "02"
    ? "/gsk/deck-equipment"
    : topic.number === "03"
    ? "/gsk/ropes-knots"
    : topic.number === "04"
    ? "/gsk/life-saving-appliances"
    : topic.number === "05"
    ? "/gsk/fire-fighting-safety"
    : topic.number === "06"
    ? "/gsk/cargo-cargo-gear"
    : topic.number === "07"
    ? "/gsk/navigation-signals"
    : topic.number === "08"
    ? "/gsk/seamanship"
    : "#"
}

  className="mt-6 inline-block rounded-lg bg-cyan-500 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-400 transition"
>
  Read Notes →
</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section className="border-y border-amber-400/20 bg-amber-400/5">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="rounded-2xl border border-amber-400/30 p-6">
            <h2 className="text-2xl font-bold text-amber-400">
              ⚠️ Safety First
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-300">
              Safety precautions will be included with relevant GSK topics.
              Students should understand the hazards, correct PPE, safe working
              procedures and emergency actions before carrying out shipboard
              work.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Tools */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <h2 className="text-center text-3xl font-bold">
          Learn • Revise • Practice
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-900 p-6 text-center">
            <div className="text-4xl">📘</div>
            <h3 className="mt-3 text-xl font-bold">Study Notes</h3>
            <p className="mt-2 text-slate-400">
              Short and easy topic-wise explanations.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 text-center">
            <div className="text-4xl">🎨</div>
            <h3 className="mt-3 text-xl font-bold">Visual Learning</h3>
            <p className="mt-2 text-slate-400">
              Colour diagrams to understand equipment and operations.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 text-center">
            <div className="text-4xl">✅</div>
            <h3 className="mt-3 text-xl font-bold">MCQ Practice</h3>
            <p className="mt-2 text-slate-400">
              Important questions for revision and CBT preparation.
            </p>
          </div>
        </div>
      </section>
{/* Practice CBT Button */}
<section className="px-5 py-8 text-center">
  <Link
    href="/gsk/practice-cbt"
    className="inline-block rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 hover:bg-cyan-400"
  >
    Start Practice CBT →
  </Link>
</section>
      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        <p className="font-bold text-white">SeaPrep Hub</p>
        <p className="mt-2">General Ship Knowledge • GP Rating</p>

        <p className="mt-4 font-semibold text-cyan-400">
          Prepared by: Saurav Kumar Das
        </p>
      </footer>
    </main>
  );
}