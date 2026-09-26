import Link from "next/link";

export default function NavigationSignalsPage() {
  const navigationAids = [
    {
      icon: "🧭",
      title: "Magnetic Compass",
      text: "Used to indicate vessel heading with reference to magnetic north.",
    },
    {
      icon: "📡",
      title: "Radar",
      text: "Used to detect targets and obtain information such as range and bearing.",
    },
    {
      icon: "🛰️",
      title: "GPS / GNSS",
      text: "Satellite-based navigation equipment used to determine vessel position.",
    },
    {
      icon: "🗺️",
      title: "Nautical Charts",
      text: "Charts provide important information required for safe navigation.",
    },
  ];

  const soundSignals = [
    {
      signal: "One Short Blast",
      meaning: "I am altering my course to starboard.",
    },
    {
      signal: "Two Short Blasts",
      meaning: "I am altering my course to port.",
    },
    {
      signal: "Three Short Blasts",
      meaning: "I am operating astern propulsion.",
    },
    {
      signal: "Five or More Short Rapid Blasts",
      meaning:
        "A warning signal used when there is doubt about the intentions or actions of another vessel.",
    },
  ];

  const safetyRules = [
    "Maintain a proper lookout by sight, hearing and all available means.",
    "Never distract personnel carrying out navigational watch duties.",
    "Know the basic port and starboard terminology.",
    "Navigation lights and shapes must not be obstructed.",
    "Report defective navigation lights or equipment immediately.",
    "Do not operate bridge equipment unless authorised.",
    "Follow instructions from the Officer of the Watch.",
    "Know emergency signals and muster duties before sailing.",
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
          <div className="text-6xl">🧭</div>

          <p className="mt-4 font-bold text-cyan-400">
            GSK • TOPIC 07
          </p>

          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Navigation &amp; Signals
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-300">
            Learn basic navigation equipment, port and starboard,
            navigation lights, sound signals and important bridge
            safety practices.
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
            What is Navigation?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Navigation is the process of planning, monitoring and
            controlling the movement of a vessel safely from one
            position to another.
          </p>
        </div>
      </section>

      {/* Port and Starboard */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <p className="font-bold text-cyan-400">
          🚢 SHIP DIRECTIONS
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Port &amp; Starboard
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-7">
            <div className="text-4xl">🔴</div>

            <h3 className="mt-3 text-2xl font-bold text-red-400">
              PORT
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Port is the LEFT side of a vessel when facing forward
              towards the bow. The port sidelight is RED.
            </p>
          </div>

          <div className="rounded-2xl border border-green-400/30 bg-green-500/10 p-7">
            <div className="text-4xl">🟢</div>

            <h3 className="mt-3 text-2xl font-bold text-green-400">
              STARBOARD
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Starboard is the RIGHT side of a vessel when facing
              forward towards the bow. The starboard sidelight is GREEN.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Equipment */}
      <section className="bg-slate-900 px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-cyan-400">
            🧭 NAVIGATION EQUIPMENT
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Basic Navigation Aids
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {navigationAids.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cyan-400/20 bg-slate-950 p-6"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-4 text-xl font-bold text-cyan-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Lights */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <p className="font-bold text-cyan-400">
          💡 NAVIGATION LIGHTS
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Basic Lights to Remember
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/20 bg-slate-900 p-6">
            <p className="font-bold text-slate-200">WHITE</p>
            <h3 className="mt-2 text-xl font-bold">Masthead Light</h3>
            <p className="mt-3 text-slate-300">
              A white navigation light carried as prescribed by COLREGs.
            </p>
          </div>

          <div className="rounded-2xl border border-red-400/30 bg-red-500/10 p-6">
            <p className="font-bold text-red-400">RED</p>
            <h3 className="mt-2 text-xl font-bold">Port Sidelight</h3>
            <p className="mt-3 text-slate-300">
              Red sidelight is displayed on the port side.
            </p>
          </div>

          <div className="rounded-2xl border border-green-400/30 bg-green-500/10 p-6">
            <p className="font-bold text-green-400">GREEN</p>
            <h3 className="mt-2 text-xl font-bold">
              Starboard Sidelight
            </h3>
            <p className="mt-3 text-slate-300">
              Green sidelight is displayed on the starboard side.
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-slate-900 p-6">
            <p className="font-bold text-slate-200">WHITE</p>
            <h3 className="mt-2 text-xl font-bold">Sternlight</h3>
            <p className="mt-3 text-slate-300">
              A white navigation light placed as nearly as practicable
              at the stern.
            </p>
          </div>
        </div>
      </section>

      {/* Sound Signals */}
      <section className="bg-slate-900 px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-cyan-400">
            📢 SOUND SIGNALS
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Basic Manoeuvring Signals
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            These are basic manoeuvring and warning signals used by
            vessels in sight of one another as prescribed by COLREGs.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {soundSignals.map((item) => (
              <div
                key={item.signal}
                className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6"
              >
                <h3 className="text-xl font-bold text-cyan-300">
                  📢 {item.signal}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookout */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl border border-green-400/20 bg-green-500/10 p-7">
          <p className="font-bold text-green-400">
            👀 PROPER LOOKOUT
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Lookout Duties
          </h2>

          <p className="mt-5 leading-7 text-slate-200">
            A proper lookout must be maintained by sight and hearing,
            as well as by all available means appropriate to the
            prevailing circumstances and conditions.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Observe vessels, lights, shapes and objects around the vessel.",
              "Listen carefully for fog signals and other sound signals.",
              "Report important observations to the Officer of the Watch immediately.",
              "Remain alert and avoid unnecessary distractions while on lookout duty.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-slate-950/60 p-4 text-slate-200"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <div className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-7">
          <p className="font-bold text-amber-400">
            ⚠️ SAFETY FIRST
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Navigation Safety
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-7">
          <p className="font-bold text-cyan-400">
            📝 QUICK REVISION
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <p className="rounded-xl bg-slate-950/60 p-4">
              🔴 Port = Left = Red
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              🟢 Starboard = Right = Green
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              📢 1 Short Blast = Altering Course to Starboard
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              📢 2 Short Blasts = Altering Course to Port
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              📢 3 Short Blasts = Operating Astern Propulsion
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              👀 Maintain a Proper Lookout
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:justify-between">
          <Link
            href="/gsk/cargo-cargo-gear"
            className="rounded-xl border border-cyan-400 px-5 py-3 text-center font-bold text-cyan-400"
          >
            ← Topic 06
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