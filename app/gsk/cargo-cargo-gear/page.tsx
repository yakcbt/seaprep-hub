import Link from "next/link";

export default function CargoCargoGearPage() {
  const cargoTypes = [
    {
      icon: "📦",
      title: "General Cargo",
      text: "Cargo carried as individual packages, boxes, bags, drums, machinery or other separate units.",
    },
    {
      icon: "🚢",
      title: "Bulk Cargo",
      text: "Unpackaged cargo carried in large quantities, such as coal, grain and ore.",
    },
    {
      icon: "🛢️",
      title: "Liquid Bulk Cargo",
      text: "Liquid cargo such as petroleum products or chemicals carried in specially designed cargo tanks.",
    },
    {
      icon: "📦",
      title: "Container Cargo",
      text: "Cargo packed inside standardized containers for efficient handling, securing and transportation.",
    },
  ];

  const cargoGear = [
    {
      icon: "🏗️",
      title: "Cargo Crane",
      text: "Shipboard lifting equipment used for loading and discharging cargo where fitted.",
    },
    {
      icon: "⚙️",
      title: "Derrick",
      text: "A lifting arrangement consisting of a boom and associated wires, blocks and winches.",
    },
    {
      icon: "🪝",
      title: "Cargo Hook",
      text: "A lifting attachment used with suitable cargo-handling arrangements.",
    },
    {
      icon: "🔗",
      title: "Shackle",
      text: "A connecting fitting used with suitable lifting and securing equipment.",
    },
    {
      icon: "⛓️",
      title: "Slings",
      text: "Wire, chain, synthetic or other approved lifting accessories used to connect cargo to lifting gear.",
    },
    {
      icon: "⚙️",
      title: "Cargo Winch",
      text: "Powered machinery used to control wires or ropes during cargo-handling operations.",
    },
  ];

  const safetyRules = [
    "Wear the required PPE during cargo operations.",
    "Never stand or walk under a suspended load.",
    "Keep clear of moving cargo and lifting equipment.",
    "Use only suitable and properly inspected lifting gear.",
    "Check the Safe Working Load (SWL) before using lifting equipment.",
    "Never overload cargo-handling equipment.",
    "Maintain clear communication with the crane or winch operator.",
    "Follow the responsible officer's instructions and shipboard procedures.",
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
          <div className="text-6xl">🏗️</div>

          <p className="mt-4 font-bold text-cyan-400">
            GSK • TOPIC 06
          </p>

          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Cargo & Cargo Gear
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-300">
            Learn the basic types of cargo, common cargo-handling
            equipment, Safe Working Load and important safety
            precautions during cargo operations.
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
            What is Cargo?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Cargo means goods or commodities transported by a ship.
            Different ships are designed to carry different types of
            cargo, and each cargo must be handled, stowed and secured
            safely.
          </p>
        </div>
      </section>

      {/* Cargo Types */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <p className="font-bold text-cyan-400">
          📦 CARGO TYPES
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Common Types of Cargo
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cargoTypes.map((cargo) => (
            <div
              key={cargo.title}
              className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-950 to-slate-900 p-6"
            >
              <div className="text-4xl">{cargo.icon}</div>

              <h3 className="mt-4 text-xl font-bold text-cyan-300">
                {cargo.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {cargo.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cargo Gear */}
      <section className="bg-slate-900 px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-cyan-400">
            ⚙️ CARGO GEAR
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Common Cargo-Handling Equipment
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cargoGear.map((gear) => (
              <div
                key={gear.title}
                className="rounded-2xl border border-cyan-400/20 bg-slate-950 p-6"
              >
                <div className="text-4xl">{gear.icon}</div>

                <h3 className="mt-4 text-xl font-bold text-cyan-300">
                  {gear.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {gear.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SWL */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-7">
          <p className="font-bold text-amber-400">
            ⚠️ IMPORTANT TERM
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Safe Working Load (SWL)
          </h2>

          <p className="mt-5 leading-7 text-slate-200">
            Safe Working Load is the maximum load that lifting
            equipment is permitted to handle safely under the
            specified operating conditions.
          </p>

          <div className="mt-5 rounded-xl bg-slate-950/60 p-5">
            <p className="font-bold text-amber-300">
              Never intentionally exceed the marked or permitted SWL
              of cargo-handling equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Basic Operation */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <p className="font-bold text-cyan-400">
          🚢 BASIC CARGO OPERATION
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Simple Cargo-Handling Sequence
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            ["01", "Prepare", "Prepare the work area and required cargo gear."],
            ["02", "Inspect", "Check lifting gear and equipment before use."],
            ["03", "Handle", "Load or discharge cargo under proper supervision."],
            ["04", "Secure", "Stow and secure cargo as required for the voyage."],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-2xl border border-white/10 bg-slate-900 p-5"
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
      </section>

      {/* Suspended Load Warning */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-7 text-center">
          <div className="text-5xl">🚫</div>

          <h2 className="mt-3 text-2xl font-bold text-red-400">
            NEVER STAND UNDER A SUSPENDED LOAD
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-200">
            A suspended load can move, swing or fall unexpectedly.
            Always remain clear of the load and follow the designated
            safe working area.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-7">
          <p className="font-bold text-amber-400">
            ⚠️ SAFETY FIRST
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Cargo Operation Safety
          </h2>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {safetyRules.map((rule) => (
              <div
                key={rule}
                className="rounded-xl border border-amber-400/20 bg-slate-950/60 p-4"
              >
                <span className="mr-2 text-amber-400">⚠</span>
                <span className="text-slate-200">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Revision */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="rounded-3xl border border-green-400/20 bg-green-500/10 p-7">
          <p className="font-bold text-green-400">
            ✅ QUICK REVISION
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <p className="rounded-xl bg-slate-950/60 p-4">
              📦 Cargo = Goods transported by ship
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              🏗️ Crane/Derrick = Cargo lifting equipment
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              🪝 Sling/Shackle = Lifting accessories
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              ⚠️ SWL = Safe Working Load
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:justify-between">
          <Link
            href="/gsk/fire-fighting-safety"
            className="rounded-xl border border-cyan-400 px-5 py-3 text-center font-bold text-cyan-400"
          >
            ← Topic 05
          </Link>

          <Link
            href="/gsk"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-slate-950"
          >
            All GSK Topics
          </Link>
          <Link
  href="/gsk/navigation-signals"
  className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-slate-950"
>
  Next Topic →
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