import Link from "next/link";

export default function FireFightingSafetyPage() {
  const fireClasses = [
    {
      icon: "🪵",
      title: "Class A",
      text: "Fire involving ordinary solid combustible materials such as wood, paper, cloth and similar materials.",
    },
    {
      icon: "🛢️",
      title: "Class B",
      text: "Fire involving flammable liquids such as fuel oil, lubricating oil, paint and other flammable liquids.",
    },
    {
      icon: "🔥",
      title: "Class C",
      text: "Fire involving flammable gases. The gas supply should be isolated whenever it is safe to do so.",
    },
    {
      icon: "⚙️",
      title: "Class D",
      text: "Fire involving combustible metals. Special extinguishing agents suitable for the particular metal are required.",
    },
  ];

  const equipment = [
    {
      icon: "🧯",
      title: "Portable Fire Extinguisher",
      text: "Portable equipment used for tackling a small fire when it is safe and appropriate to do so.",
    },
    {
      icon: "🚒",
      title: "Fire Hydrant & Hose",
      text: "The ship's fire main supplies water through hydrants and hoses for firefighting operations.",
    },
    {
      icon: "🧺",
      title: "Fire Blanket",
      text: "Used mainly for smothering small fires by cutting off the oxygen supply.",
    },
    {
      icon: "👨‍🚒",
      title: "Firefighter's Outfit",
      text: "Protective equipment provided for trained personnel carrying out firefighting duties.",
    },
    {
      icon: "😷",
      title: "Breathing Apparatus",
      text: "Provides breathable air to trained personnel working in smoke-filled or hazardous atmospheres.",
    },
    {
      icon: "🚨",
      title: "Fire Detection & Alarm",
      text: "Detection and alarm systems provide early warning so that emergency action can begin quickly.",
    },
  ];

  const prevention = [
    "Maintain good housekeeping in accommodation and working areas.",
    "Do not allow oil-soaked rags or combustible waste to accumulate.",
    "Store flammable materials in designated safe locations.",
    "Follow the ship's smoking regulations.",
    "Report damaged electrical cables, plugs and equipment.",
    "Keep escape routes and fire equipment clear at all times.",
    "Follow hot-work procedures and permit requirements.",
    "Know the location of nearby fire alarms and extinguishers.",
  ];

  const emergencyActions = [
    "Raise the alarm immediately.",
    "Inform the bridge or responsible officer.",
    "Identify the location and nature of the fire if possible.",
    "Close doors where appropriate to help contain smoke and fire.",
    "Proceed to your muster station when instructed.",
    "Carry out the duties assigned to you on the muster list.",
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
      <section className="border-b border-red-400/20 bg-gradient-to-b from-red-950/50 to-slate-950">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center">
          <div className="text-6xl">🔥</div>

          <p className="mt-4 font-bold text-cyan-400">
            GSK • TOPIC 05
          </p>

          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Fire Fighting & Safety
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-300">
            Learn the basic principles of fire, fire classes,
            firefighting equipment, fire prevention and essential
            emergency actions onboard ships.
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
            What is Fire?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Fire is a combustion process that requires fuel, heat
            and oxygen. Removing one of these essential elements
            can stop the combustion process.
          </p>
        </div>
      </section>

      {/* Fire Triangle */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <p className="font-bold text-red-400">
          🔺 FIRE TRIANGLE
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Three Elements Required for Fire
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-6 text-center">
            <div className="text-5xl">🔥</div>
            <h3 className="mt-4 text-2xl font-bold text-red-300">
              Heat
            </h3>
            <p className="mt-3 text-slate-300">
              Sufficient heat is required to ignite and maintain combustion.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-6 text-center">
            <div className="text-5xl">🛢️</div>
            <h3 className="mt-4 text-2xl font-bold text-amber-300">
              Fuel
            </h3>
            <p className="mt-3 text-slate-300">
              A combustible material provides fuel for the fire.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6 text-center">
            <div className="text-5xl">💨</div>
            <h3 className="mt-4 text-2xl font-bold text-blue-300">
              Oxygen
            </h3>
            <p className="mt-3 text-slate-300">
              Oxygen supports the combustion process.
            </p>
          </div>

        </div>

        <div className="mt-6 rounded-xl border border-cyan-400/20 bg-slate-900 p-5 text-center">
          <p className="font-bold text-cyan-300">
            Remove Heat, Fuel or Oxygen → Fire can be extinguished.
          </p>
        </div>
      </section>

      {/* Fire Classes */}
      <section className="bg-slate-900 px-5 py-14">
        <div className="mx-auto max-w-7xl">

          <p className="font-bold text-cyan-400">
            🔥 FIRE CLASSIFICATION
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Basic Classes of Fire
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {fireClasses.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-400/20 bg-slate-950 p-6"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-4 text-xl font-bold text-red-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-amber-400/20 bg-amber-500/10 p-5">
            <p className="text-sm leading-6 text-slate-200">
              <span className="font-bold text-amber-400">
                Important:
              </span>{" "}
              Fire classifications can differ between standards.
              Always follow the classification, procedures and
              extinguishing guidance used onboard your vessel.
            </p>
          </div>

        </div>
      </section>

      {/* Equipment */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <p className="font-bold text-cyan-400">
          🧯 FIREFIGHTING EQUIPMENT
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Important Equipment Onboard
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item) => (
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

      {/* Fire Prevention */}
      <section className="bg-slate-900 px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-green-400/20 bg-green-500/10 p-7">

            <p className="font-bold text-green-400">
              ✅ FIRE PREVENTION
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Prevention is Better Than Firefighting
            </h2>

            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {prevention.map((item) => (
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

      {/* Emergency Actions */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-7">

          <p className="font-bold text-red-400">
            🚨 FIRE EMERGENCY
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Basic Actions on Discovering Fire
          </h2>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {emergencyActions.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-red-400/20 bg-slate-950/60 p-4"
              >
                <span className="mr-3 font-bold text-red-400">
                  {index + 1}.
                </span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-red-950/50 p-5">
            <p className="font-bold text-red-300">
              Never put yourself at unnecessary risk. Firefighting
              should be carried out according to your training,
              assigned emergency duty and instructions from the
              responsible officer.
            </p>
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
            Important Fire Safety Rules
          </h2>

          <div className="mt-7 grid gap-3 md:grid-cols-2">

            {[
              "Know the ship's fire alarm and emergency signals.",
              "Know your muster station and assigned emergency duty.",
              "Never block fire doors, escape routes or firefighting equipment.",
              "Do not enter a smoke-filled space without appropriate training and equipment.",
              "Never use an unsuitable extinguishing medium on a fire.",
              "Treat electrical equipment as energised until it has been safely isolated.",
              "Keep fire doors and ventilation arrangements as required by shipboard procedures.",
              "Participate seriously in fire drills and emergency training.",
            ].map((item) => (
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

          <h2 className="mt-2 text-2xl font-bold">
            Remember These Basics
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <p className="rounded-xl bg-slate-950/60 p-4">
              🔥 Fire Triangle = Heat + Fuel + Oxygen
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              🚨 Discover Fire = Raise Alarm Immediately
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              🧯 Use firefighting equipment according to training and procedures
            </p>

            <p className="rounded-xl bg-slate-950/60 p-4">
              🚪 Keep escape routes and firefighting equipment clear
            </p>
          </div>

        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:justify-between">

          <Link
            href="/gsk/life-saving-appliances"
            className="rounded-xl border border-cyan-400 px-5 py-3 text-center font-bold text-cyan-400"
          >
            ← Topic 04
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
        <p className="font-bold">
          SeaPrep Hub
        </p>

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