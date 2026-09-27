import Link from "next/link";

export default function LifeSavingAppliancesPage() {
  const appliances = [
    {
      icon: "🚤",
      title: "Lifeboat",
      text: "A survival craft provided for abandoning ship during an emergency. Lifeboats carry survival equipment and are launched from the ship.",
    },
    {
      icon: "🛟",
      title: "Liferaft",
      text: "An inflatable survival craft used during abandonment. It is normally packed in a container and designed to inflate when deployed.",
    },
    {
      icon: "⭕",
      title: "Lifebuoy",
      text: "A buoyant appliance designed to support a person in the water. Lifebuoys are positioned at suitable locations around the ship.",
    },
    {
      icon: "🦺",
      title: "Lifejacket",
      text: "Personal life-saving equipment designed to keep a person afloat and help maintain a safe position in the water.",
    },
    {
      icon: "🧥",
      title: "Immersion Suit",
      text: "Protective clothing designed to reduce body heat loss when a person is immersed in cold water.",
    },
    {
      icon: "📡",
      title: "EPIRB",
      text: "Emergency Position-Indicating Radio Beacon. It transmits a distress alert to assist search and rescue services in locating survivors.",
    },
    {
      icon: "📶",
      title: "SART",
      text: "Search and Rescue Transponder. It assists rescuing vessels or aircraft in locating survival craft during an emergency.",
    },
    {
      icon: "🪜",
      title: "Embarkation Ladder",
      text: "A specially constructed ladder used for safe embarkation into survival craft when required.",
    },
  ];

  const lifejacketSteps = [
    "Take the correct lifejacket from its stowage position.",
    "Put it on according to the manufacturer's instructions.",
    "Secure all straps, buckles or fastenings correctly.",
    "Check that the light and whistle are present where fitted.",
    "Proceed to the assigned muster station when ordered.",
  ];

  const safety = [
    "Know the location of your assigned muster station.",
    "Know where your lifejacket is stowed and how to wear it correctly.",
    "Read and understand the muster list and emergency duties.",
    "Do not operate launching equipment unless trained and instructed.",
    "Keep lifeboat and liferaft embarkation areas clear.",
    "Never tamper with life-saving appliances or their securing arrangements.",
    "Report damaged, missing or defective LSA immediately.",
    "During drills and emergencies, follow the responsible officer's instructions.",
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
          <div className="text-6xl">🛟</div>

          <p className="mt-4 font-bold text-cyan-400">
            GSK • TOPIC 04
          </p>

          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Life-Saving Appliances
          </h2>

          <p className="mt-2 text-xl font-bold text-cyan-300">LSA</p>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-300">
            Learn the basic life-saving appliances carried onboard ships,
            their purpose and the essential precautions every seafarer should
            know during an emergency.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-6">
          <p className="font-bold text-cyan-400">📘 BASIC CONCEPT</p>

          <h2 className="mt-2 text-2xl font-bold">
            What are Life-Saving Appliances?
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Life-saving appliances are equipment provided onboard to protect
            life during emergencies such as abandoning ship or a person falling
            overboard. Crew members must know their locations and basic use.
          </p>
        </div>
      </section>

      {/* Appliances */}
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <p className="font-bold text-cyan-400">IMPORTANT LSA</p>

        <h2 className="mt-2 text-3xl font-bold">
          Know Your Life-Saving Equipment
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {appliances.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-950 to-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400"
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
      </section>

      {/* Lifejacket */}
      <section className="bg-slate-900 px-5 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-cyan-400">
            🦺 PERSONAL LIFE-SAVING APPLIANCE
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Basic Lifejacket Procedure
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {lifejacketSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-slate-950 p-5"
              >
                <p className="font-bold text-cyan-400">
                  STEP {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abandon Ship */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-7">
          <p className="font-bold text-red-400">🚨 ABANDON SHIP</p>

          <h2 className="mt-2 text-3xl font-bold">
            Important Actions
          </h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Remain calm and follow the emergency alarm and instructions.",
              "Wear suitable clothing and put on your lifejacket correctly.",
              "Proceed promptly to your assigned muster station.",
              "Carry out the emergency duty assigned on the muster list.",
              "Board the survival craft only when instructed.",
              "Do not jump into the sea unless necessary or instructed.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-red-400/20 bg-slate-950/60 p-4 text-slate-200"
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
          <p className="font-bold text-amber-400">⚠️ SAFETY FIRST</p>

          <h2 className="mt-2 text-3xl font-bold">
            Life-Saving Appliance Safety
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
        <div className="rounded-3xl border border-green-400/20 bg-green-500/10 p-7">
          <p className="font-bold text-green-400">✅ QUICK REVISION</p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <p className="rounded-xl bg-slate-950/60 p-4">
              Lifeboat = Survival craft
            </p>
            <p className="rounded-xl bg-slate-950/60 p-4">
              Liferaft = Inflatable survival craft
            </p>
            <p className="rounded-xl bg-slate-950/60 p-4">
              Lifebuoy = Supports a person in water
            </p>
            <p className="rounded-xl bg-slate-950/60 p-4">
              Lifejacket = Personal flotation appliance
            </p>
            <p className="rounded-xl bg-slate-950/60 p-4">
              EPIRB = Distress alert and location aid
            </p>
            <p className="rounded-xl bg-slate-950/60 p-4">
              SART = Search and rescue locating aid
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:justify-between">
          <Link
            href="/gsk/ropes-knots"
            className="rounded-xl border border-cyan-400 px-5 py-3 text-center font-bold text-cyan-400"
          >
            ← Topic 03
          </Link>

          <Link
            href="/gsk"
            className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-slate-950"
          >
            All GSK Topics
          </Link>
          <Link
  href="/gsk/fire-fighting-safety"
  className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-bold text-slate-950"
>
  Next Topic →
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