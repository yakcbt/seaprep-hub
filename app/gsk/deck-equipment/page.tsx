import Link from "next/link";

export default function DeckEquipmentPage() {
  const equipment = [
    {
      icon: "⚓",
      title: "Anchor",
      text: "An anchor is used to hold the ship in a safe position by gripping the seabed. It is connected to the ship by anchor cable or chain.",
    },
    {
      icon: "⚙️",
      title: "Windlass",
      text: "A windlass is deck machinery used mainly for lowering and heaving up the anchor and anchor cable.",
    },
    {
      icon: "🪢",
      title: "Mooring Winch",
      text: "A mooring winch is used to handle, heave in and pay out mooring ropes or wires during mooring operations.",
    },
    {
      icon: "🔩",
      title: "Bollards & Bitts",
      text: "Bollards and bitts are strong deck fittings used for securing mooring ropes. They must be kept in good condition and free from damage.",
    },
    {
      icon: "➰",
      title: "Fairlead",
      text: "A fairlead guides a mooring rope or wire in the required direction and helps prevent excessive rubbing against ship structure.",
    },
    {
      icon: "⭕",
      title: "Chock",
      text: "A chock is a strong deck fitting through which a mooring line passes when leading from the ship to the shore or another vessel.",
    },
  ];

  const safety = [
    "Wear the required PPE: safety helmet, safety shoes, gloves and suitable work clothing.",
    "Never stand inside a bight or loop of a rope.",
    "Keep clear of snap-back zones whenever ropes are under tension.",
    "Do not stand directly in the line of pull of a mooring rope or wire.",
    "Keep hands, feet and loose clothing away from moving winches, drums and machinery.",
    "Maintain clear communication between the bridge and mooring team.",
    "Operate deck machinery only when trained and authorised.",
    "Check ropes, wires, brakes, winches and deck fittings before starting work.",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <div>
            <h1 className="text-2xl font-bold text-cyan-400">
              SeaPrep Hub
            </h1>
            <p className="text-sm text-slate-400">
              General Ship Knowledge • GP Rating
            </p>
          </div>

          <Link
            href="/gsk"
            className="rounded-lg border border-cyan-400 px-4 py-2 text-sm font-bold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
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
            GSK • TOPIC 02
          </p>

          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Deck Equipment
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-300">
            Learn the basic deck equipment used for anchoring,
            mooring and safe shipboard operations.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-6">
          <p className="font-bold text-cyan-400">
            📘 BASIC CONCEPT
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            What is Deck Equipment?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Deck equipment includes machinery, fittings and other
            equipment installed on the ship&apos;s deck for operations
            such as anchoring, mooring and handling ropes. A seafarer
            must know the purpose of each item and how to work around
            it safely.
          </p>
        </div>
      </section>

      {/* Equipment */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <p className="font-bold text-cyan-400">
          IMPORTANT EQUIPMENT
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Know Your Deck Equipment
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-950 to-slate-900 p-6"
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
            {[
              ["01", "Prepare", "Check ropes, winches, deck fittings and PPE."],
              ["02", "Stand By", "Crew take safe positions and maintain communication."],
              ["03", "Send Lines", "Mooring lines are passed ashore as instructed."],
              ["04", "Secure", "Lines are adjusted and secured as directed."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-slate-950 p-5"
              >
                <div className="text-sm font-bold text-cyan-400">
                  STEP {number}
                </div>

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

      {/* Safety */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 md:p-8">

          <p className="font-bold text-amber-400">
            ⚠️ SAFETY FIRST
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Deck Equipment Safety Precautions
          </h2>

          <p className="mt-3 text-slate-300">
            Mooring and anchoring operations can be dangerous.
            Always follow instructions and established shipboard
            procedures.
          </p>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {safety.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-amber-400/20 bg-slate-950/60 p-4"
              >
                <span className="mr-2 text-green-400">✓</span>
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remember */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="rounded-2xl border border-green-400/20 bg-green-500/10 p-6 text-center">
          <p className="text-xl font-bold text-green-400">
            ✅ Remember
          </p>

          <p className="mx-auto mt-3 max-w-3xl leading-7 text-slate-300">
            Never enter a dangerous mooring area unnecessarily.
            Stay clear of ropes under tension and always follow the
            officer&apos;s instructions during anchoring and mooring
            operations.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:justify-between">
          <Link
            href="/gsk/ship-familiarization"
            className="rounded-xl border border-cyan-400 px-5 py-3 text-center font-bold text-cyan-400"
          >
            ← Topic 01
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
        <p className="font-bold text-white">SeaPrep Hub</p>
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