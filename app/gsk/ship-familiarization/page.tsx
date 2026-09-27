import Link from "next/link";

export default function ShipFamiliarizationPage() {
  const directions = [
    ["Bow", "Forward or front part of the ship."],
    ["Stern", "Rear or after part of the ship."],
    ["Port", "Left-hand side when facing towards the bow."],
    ["Starboard", "Right-hand side when facing towards the bow."],
    ["Forward", "Towards the bow of the ship."],
    ["Aft", "Towards the stern of the ship."],
  ];

  const shipParts = [
    {
      icon: "🚢",
      title: "Hull",
      text: "The main body of the ship which provides strength and watertight integrity.",
    },
    {
      icon: "🌊",
      title: "Main Deck",
      text: "The principal continuous deck of the ship.",
    },
    {
      icon: "🏠",
      title: "Superstructure",
      text: "Structure built above the main deck containing accommodation and other spaces.",
    },
    {
      icon: "🧭",
      title: "Bridge",
      text: "The navigation and command centre from where the ship is controlled.",
    },
    {
      icon: "⚙️",
      title: "Engine Room",
      text: "Machinery space containing main engines, generators, pumps and auxiliary machinery.",
    },
    {
      icon: "📦",
      title: "Cargo Space",
      text: "Area designed for carrying cargo, depending on the type of vessel.",
    },
  ];

  const importantAreas = [
    "Accommodation",
    "Galley and Mess Room",
    "Bridge",
    "Engine Room",
    "Main Deck",
    "Muster Station",
    "Lifeboat / Liferaft Station",
    "Emergency Escape Routes",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <div>
            <h1 className="text-2xl font-extrabold text-cyan-400">
              ⚓ SeaPrep Hub
            </h1>
            <p className="text-xs text-slate-400">
              GP Rating • General Ship Knowledge
            </p>
          </div>

          <Link
            href="/gsk"
            className="rounded-xl border border-cyan-400 px-4 py-2 text-sm font-bold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            ← GSK Topics
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-cyan-400/20 bg-gradient-to-b from-blue-950 to-slate-950 px-5 py-14 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="text-6xl">🚢</div>

          <p className="mt-4 font-bold tracking-wider text-cyan-400">
            GSK • TOPIC 01
          </p>

          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Ship Familiarization
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-300">
            Understand the basic layout, important parts, directions,
            emergency arrangements and safe movement onboard a ship.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-5 py-12">
        {/* Introduction */}
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-6">
          <p className="font-bold text-cyan-400">01 • INTRODUCTION</p>

          <h3 className="mt-2 text-2xl font-bold">
            What is Ship Familiarization?
          </h3>

          <p className="mt-4 leading-7 text-slate-300">
            Ship familiarization means learning the basic layout of the ship,
            important working areas, emergency equipment, escape routes and
            shipboard safety procedures.
          </p>

          <p className="mt-3 leading-7 text-slate-300">
            A crew member joining a vessel must become familiar with the ship
            so that normal duties can be performed safely and correct action
            can be taken during an emergency.
          </p>
        </div>

        {/* Directions */}
        <div className="rounded-2xl border border-blue-400/20 bg-slate-900 p-6">
          <p className="font-bold text-cyan-400">02 • BASIC DIRECTIONS</p>

          <h3 className="mt-2 text-2xl font-bold">
            Important Shipboard Terms
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {directions.map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-slate-800 p-5"
              >
                <h4 className="text-lg font-bold text-cyan-300">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="font-bold text-cyan-300">💡 Remember</p>
            <p className="mt-2 text-slate-300">
              When facing forward: PORT = LEFT and STARBOARD = RIGHT.
            </p>
          </div>
        </div>

        {/* Ship Parts */}
        <div className="rounded-2xl border border-blue-400/20 bg-slate-900 p-6">
          <p className="font-bold text-cyan-400">03 • MAIN PARTS</p>

          <h3 className="mt-2 text-2xl font-bold">
            Main Parts & Areas of a Ship
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {shipParts.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-slate-800 p-5"
              >
                <div className="text-3xl">{item.icon}</div>
                <h4 className="mt-3 text-lg font-bold">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Areas */}
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-6">
          <p className="font-bold text-cyan-400">04 • KNOW YOUR SHIP</p>

          <h3 className="mt-2 text-2xl font-bold">
            Areas Every Crew Member Should Know
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {importantAreas.map((area) => (
              <div
                key={area}
                className="rounded-xl bg-slate-800 px-4 py-3 text-slate-200"
              >
                ✓ {area}
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Familiarization */}
        <div className="rounded-2xl border border-orange-400/30 bg-orange-500/5 p-6">
          <p className="font-bold text-orange-400">
            05 • EMERGENCY FAMILIARIZATION
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Know Before an Emergency Happens
          </h3>

          <div className="mt-5 space-y-3 text-slate-300">
            <p>✓ Know your assigned muster station.</p>
            <p>✓ Know the emergency alarm signals used onboard.</p>
            <p>✓ Know the location of your lifejacket.</p>
            <p>✓ Know primary and alternative escape routes.</p>
            <p>✓ Know the location of nearby fire-fighting equipment.</p>
            <p>✓ Know where lifeboats and liferafts are located.</p>
            <p>✓ Read and understand the ship&apos;s muster list.</p>
          </div>
        </div>

        {/* Safety */}
        <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-6">
          <h3 className="text-2xl font-bold text-yellow-400">
            ⚠️ Safety First
          </h3>

          <div className="mt-5 space-y-3 leading-7 text-slate-300">
            <p>
              • Always wear the correct PPE for the job and working area.
            </p>
            <p>
              • Use designated walkways and keep clear of dangerous machinery.
            </p>
            <p>
              • Never enter a restricted or enclosed space without proper
              authorization and required safety procedures.
            </p>
            <p>
              • Keep escape routes, fire doors and emergency equipment clear.
            </p>
            <p>
              • Follow warning signs, shipboard procedures and instructions
              from responsible officers.
            </p>
            <p>
              • Immediately report unsafe conditions, leakage, fire or other
              hazards.
            </p>
          </div>
        </div>

        {/* Quick Revision */}
        <div className="rounded-2xl border border-green-400/20 bg-green-400/5 p-6">
          <p className="font-bold text-green-400">QUICK REVISION</p>

          <h3 className="mt-2 text-2xl font-bold">
            Before Moving to the Next Topic
          </h3>

          <div className="mt-5 space-y-2 text-slate-300">
            <p>✓ Bow = front of ship</p>
            <p>✓ Stern = rear of ship</p>
            <p>✓ Port = left side when facing forward</p>
            <p>✓ Starboard = right side when facing forward</p>
            <p>✓ Bridge = navigation and command centre</p>
            <p>✓ Engine Room = main machinery space</p>
            <p>✓ Muster Station = assigned emergency assembly area</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-between gap-4 pt-4">
          <Link
            href="/gsk"
            className="rounded-xl border border-cyan-400 px-5 py-3 font-bold text-cyan-400"
          >
            ← All GSK Topics
          </Link>

          <Link
  href="/gsk/deck-equipment"
  className="rounded-xl bg-cyan-500 px-5 py-3 font-bold text-slate-950"
>
  Next Topic →
</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
        <p className="text-lg font-bold text-white">SeaPrep Hub</p>
        <p className="mt-1">GP Rating • General Ship Knowledge</p>
        <p className="mt-4 font-semibold text-cyan-400">
          Prepared by: Saurav Kumar Das
        </p>
      </footer>
    </main>
  );
}