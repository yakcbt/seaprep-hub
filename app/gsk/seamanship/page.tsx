import Link from "next/link";

export default function SeamanshipPage() {
  const basics = [
    {
      icon: "🪢",
      title: "Rope Work",
      text: "Basic seamanship includes correct handling of ropes, knots, bends, hitches, whipping and splicing.",
    },
    {
      icon: "⚓",
      title: "Anchoring",
      text: "Seafarers assist with preparation and safe operation of anchoring equipment under proper supervision.",
    },
    {
      icon: "🚢",
      title: "Mooring",
      text: "Mooring operations secure a vessel to a berth or other suitable arrangement using ropes or wires.",
    },
    {
      icon: "🧹",
      title: "Deck Maintenance",
      text: "Routine deck work includes cleaning, preservation, painting and maintaining deck areas and equipment.",
    },
    {
      icon: "🏗️",
      title: "Cargo Work",
      text: "Deck ratings may assist in cargo operations while following safe working procedures and instructions.",
    },
    {
      icon: "👀",
      title: "Lookout Duties",
      text: "A rating may perform lookout duties and immediately report relevant observations to the Officer of the Watch.",
    },
  ];

  const mooringSteps = [
    ["01", "Prepare", "Prepare ropes and equipment as instructed."],
    ["02", "Check", "Check the working area and identify hazards."],
    ["03", "Communicate", "Maintain clear communication with the team."],
    ["04", "Secure", "Handle and secure mooring lines as instructed."],
  ];

  const maintenance = [
    "Keep decks clean and free from unnecessary obstructions.",
    "Remove rust and prepare surfaces using approved procedures.",
    "Apply protective coatings and paint as instructed.",
    "Inspect ropes, wires and deck fittings regularly.",
    "Keep tools clean and return them to their proper storage location.",
    "Report damaged or defective equipment immediately.",
  ];

  const safety = [
    "Always wear the PPE required for the job.",
    "Follow instructions from the responsible officer or supervisor.",
    "Never stand inside a bight of rope.",
    "Keep clear of snap-back zones and tensioned mooring lines.",
    "Never stand underneath a suspended load.",
    "Use the correct tool for the job.",
    "Maintain three points of contact when using ladders where applicable.",
    "Keep working areas clean and free from trip hazards.",
    "Do not operate machinery unless trained and authorised.",
    "Immediately report unsafe conditions, defects and accidents.",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div>
            <h1 className="text-2xl font-bold text-cyan-400">
              ⚓ SeaPrep Hub
            </h1>
            <p className="text-sm text-slate-400">
              General Ship Knowledge • GP Rating
            </p>
          </div>

          <Link
            href="/gsk"
            className="rounded-lg border border-cyan-400 px-4 py-2 font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            ← GSK Topics
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-cyan-400/20 bg-gradient-to-b from-blue-950 to-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center">
          <div className="text-6xl">⚓</div>

          <p className="mt-4 font-bold text-cyan-400">
            GSK • TOPIC 08
          </p>

          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Seamanship
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-300">
            Learn essential deck seamanship including rope work,
            mooring, anchoring, deck maintenance, lookout duties
            and safe working practices onboard.
          </p>
        </div>
      </section>

      {/* Basic Concept */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-6">
          <p className="font-bold text-cyan-400">
            📘 BASIC CONCEPT
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            What is Seamanship?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Seamanship is the practical knowledge and skill required
            to perform shipboard duties safely and efficiently.
            It includes rope work, deck operations, maintenance,
            mooring, anchoring and safe working practices.
          </p>
        </div>
      </section>

      {/* Seamanship Basics */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <p className="font-bold text-cyan-400">
          ⚓ ESSENTIAL SKILLS
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Basic Seamanship Duties
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {basics.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-blue-950 to-slate-900 p-6"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-4 text-xl font-bold text-cyan-300">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mooring */}
      <section className="bg-slate-900 px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-cyan-400">
            🪢 MOORING OPERATION
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Basic Mooring Sequence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {mooringSteps.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-slate-950 p-5"
              >
                <p className="font-bold text-cyan-400">
                  STEP {number}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snap Back */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-7">
          <p className="font-bold text-red-400">
            🚨 MOORING HAZARD
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Snap-Back Hazard
          </h2>

          <p className="mt-5 leading-7 text-slate-200">
            A mooring line under tension can recoil violently if it
            parts or is released suddenly. Personnel must keep clear
            of the potential path of a tensioned line and follow the
            vessel procedures for safe positioning.
          </p>

          <div className="mt-5 rounded-xl bg-slate-950/60 p-5">
            <p className="font-bold text-red-300">
              Never stand in a bight of rope or unnecessarily close
              to a tensioned mooring line.
            </p>
          </div>
        </div>
      </section>

      {/* Anchoring */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <p className="font-bold text-cyan-400">
          ⚓ ANCHORING
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Basic Anchor Equipment
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["⚓", "Anchor", "Used to hold the vessel to the seabed."],
            ["⛓️", "Anchor Cable", "Connects the anchor to the vessel."],
            ["⚙️", "Windlass", "Machinery used for handling the anchor and cable."],
            ["🔒", "Chain Stopper", "Used as part of the arrangement for securing the anchor cable."],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-blue-400/20 bg-slate-900 p-6"
            >
              <div className="text-4xl">{icon}</div>

              <h3 className="mt-4 text-xl font-bold text-cyan-300">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Deck Maintenance */}
      <section className="bg-slate-900 px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-green-400/20 bg-green-500/10 p-7">
            <p className="font-bold text-green-400">
              🧹 DECK MAINTENANCE
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Good Seamanship Practices
            </h2>

            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {maintenance.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-slate-950/60 p-4 text-slate-200"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PPE */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <p className="font-bold text-cyan-400">
          🦺 PERSONAL PROTECTIVE EQUIPMENT
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Common PPE
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["⛑️", "Safety Helmet"],
            ["🥽", "Eye Protection"],
            ["🧤", "Safety Gloves"],
            ["🥾", "Safety Shoes"],
            ["🦺", "Protective Clothing"],
          ].map(([icon, title]) => (
            <div
              key={title}
              className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-5 text-center"
            >
              <div className="text-4xl">{icon}</div>
              <p className="mt-3 font-bold text-cyan-300">
                {title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-7">
          <p className="font-bold text-amber-400">
            ⚠️ SAFETY FIRST
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Seamanship Safety Rules
          </h2>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {safety.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-amber-400/20 bg-slate-950/60 p-4"
              >
                <span className="mr-2 text-amber-400">⚠</span>
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Revision */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-7">
          <p className="font-bold text-cyan-400">
            📝 QUICK REVISION
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <p className="rounded-xl bg-slate-950/60 p-4">
              🪢 Never stand inside a bight of rope
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              ⚓ Windlass = Anchor handling machinery
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              🦺 Wear the correct PPE for the job
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              🚫 Never stand under a suspended load
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              👀 Maintain a proper lookout when assigned
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              🧹 Good housekeeping improves shipboard safety
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:justify-between">
          <Link
            href="/gsk/navigation-signals"
            className="rounded-xl border border-cyan-400 px-5 py-3 text-center font-bold text-cyan-400"
          >
            ← Topic 07
          </Link>

          <Link
            href="/gsk"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-slate-950"
          >
            All GSK Topics
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center">
        <p className="font-bold">SeaPrep Hub</p>

        <p className="mt-2 text-sm text-slate-400">
          General Ship Knowledge • GP Rating Study Material
        </p>

        <p className="mt-4 font-semibold text-cyan-400">
          Prepared by: Saurav Kumar Das
        </p>
      </footer>

    </main>
  );
}