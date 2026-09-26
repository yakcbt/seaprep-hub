"use client";

import Link from "next/link";

export default function PSSRTopic03() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-cyan-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            PSSR • Topic 03
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Take Precautions to Prevent Pollution of the Marine Environment
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-cyan-100">
            Basic awareness of marine pollution and the precautions
            required from seafarers to protect the marine environment.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🌊 Marine Pollution
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Ships operate directly in the marine environment. Therefore,
            every seafarer has a responsibility to take precautions to
            prevent pollution and to protect the sea from harmful
            substances and waste generated during shipboard operations.
          </p>

          <div className="mt-5 rounded-xl bg-cyan-50 p-5">
            <p className="font-bold text-cyan-900">
              Basic Principle
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Pollution prevention should form part of normal shipboard
              working practices. Waste and harmful substances must be
              handled carefully and according to the ship&apos;s
              procedures.
            </p>
          </div>
        </section>

        {/* SOURCES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            ⚠️ Shipboard Sources of Pollution
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Pollution can result when waste or harmful materials from
            shipboard activities enter the marine environment.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "🛢️",
                title: "Oil",
                text: "Oil and oily mixtures require careful handling to prevent discharge or spillage.",
              },
              {
                icon: "🗑️",
                title: "Garbage",
                text: "Shipboard garbage must be properly collected, separated and handled.",
              },
              {
                icon: "🚿",
                title: "Sewage",
                text: "Sewage generated on board requires proper control and handling.",
              },
              {
                icon: "🧪",
                title: "Harmful Substances",
                text: "Chemicals and other harmful substances require careful handling to avoid pollution.",
              },
              {
                icon: "📦",
                title: "Cargo Residues",
                text: "Cargo residues and contaminated material can become sources of pollution.",
              },
              {
                icon: "💨",
                title: "Air Emissions",
                text: "Ship operations can also affect the environment through emissions to the atmosphere.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="text-3xl">{item.icon}</div>

                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EFFECTS */}
        <section className="rounded-2xl bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">
            🐟 Why Pollution Prevention Is Important
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Protects marine life",
              "Protects the marine environment",
              "Reduces contamination of seawater",
              "Supports safe and responsible ship operation",
              "Prevents unnecessary discharge of waste",
              "Encourages good environmental practices on board",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white p-4"
              >
                <span className="text-xl">✓</span>
                <p className="font-semibold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRECAUTIONS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🛡️ Basic Pollution Prevention Precautions
          </h2>

          <div className="mt-5 space-y-3">
            {[
              "Follow the ship's pollution prevention procedures.",
              "Do not throw waste or harmful material into the sea without authorization.",
              "Use designated containers for different types of waste.",
              "Handle oil, chemicals and other harmful substances carefully.",
              "Prevent leakage and accidental spillage during work.",
              "Immediately report any spill, leakage or pollution incident.",
              "Follow the instructions of the responsible officer.",
              "Use pollution-control equipment only as instructed.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-xl bg-cyan-50 p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-900 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <p className="font-semibold leading-7 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* OIL */}
        <section className="rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-6">
          <h2 className="text-2xl font-bold text-orange-900">
            🛢️ Prevention of Oil Pollution
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Oil spills can contaminate the sea and damage the marine
            environment. Crew members should take care whenever oil or
            oily material is being handled.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5">
            <p className="font-bold text-orange-900">
              Good Working Practice
            </p>

            <div className="mt-3 space-y-2 text-slate-700">
              <p>• Watch for leaks and spills.</p>
              <p>• Keep the working area clean.</p>
              <p>• Use the correct equipment and procedures.</p>
              <p>• Report leakage immediately.</p>
              <p>• Follow instructions given by the responsible officer.</p>
            </div>
          </div>
        </section>

        {/* GARBAGE */}
        <section className="rounded-2xl bg-green-50 p-6">
          <h2 className="text-2xl font-bold text-green-900">
            🗑️ Garbage Management
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Garbage produced on board should be properly collected and
            handled. Crew members should use the designated garbage
            containers and follow the ship&apos;s waste-management
            procedures.
          </p>

          <div className="mt-5 rounded-xl bg-white p-5">
            <p className="font-bold text-green-900">
              Remember
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Never dispose of shipboard garbage carelessly. Follow the
              vessel&apos;s instructions for collection, segregation,
              storage and disposal.
            </p>
          </div>
        </section>

        {/* PLASTIC */}
        <section className="rounded-2xl border-2 border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            🚫 Plastics
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Plastic waste can remain in the marine environment for a
            long time and can harm marine life. It must be handled
            carefully as part of the ship&apos;s garbage-management
            procedures.
          </p>

          <div className="mt-5 rounded-xl bg-red-900 p-5 text-center text-white">
            <p className="text-xl font-bold">
              Keep plastic waste under proper control.
            </p>
          </div>
        </section>

        {/* SEWAGE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🚿 Sewage
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Sewage is another form of ship-generated waste that can
            affect the marine environment. Crew members must follow
            the vessel&apos;s established procedures for its handling
            and disposal.
          </p>
        </section>

        {/* CHEMICALS */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-cyan-900">
            🧪 Harmful Substances
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Harmful substances must be handled with care. Leakage,
            spillage or incorrect disposal can cause pollution and
            create hazards for personnel and the environment.
          </p>

          <div className="mt-5 rounded-xl bg-yellow-50 p-5">
            <p className="font-bold text-yellow-900">
              If a spill occurs
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              Report it immediately and follow the ship&apos;s
              instructions and emergency procedures.
            </p>
          </div>
        </section>

        {/* CREW RESPONSIBILITY */}
        <section className="rounded-2xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-bold">
            👨‍✈️ Responsibility of Every Seafarer
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            Pollution prevention is not only the responsibility of
            officers. Every crew member should work carefully and
            follow the procedures established on board.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Follow shipboard procedures",
              "Use correct waste containers",
              "Prevent spills and leaks",
              "Report pollution immediately",
              "Follow officer's instructions",
              "Protect the marine environment",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white/10 p-4 font-semibold"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* IF POLLUTION OCCURS */}
        <section className="rounded-2xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-2xl font-bold text-red-900">
            🚨 If Pollution or a Spill Is Observed
          </h2>

          <div className="mt-5 space-y-3">
            <div className="rounded-xl bg-white p-4">
              <strong>1. Report immediately</strong>
              <p className="mt-1 text-slate-600">
                Inform the responsible officer without delay.
              </p>
            </div>

            <div className="rounded-xl bg-white p-4">
              <strong>2. Follow instructions</strong>
              <p className="mt-1 text-slate-600">
                Act according to the ship&apos;s established procedures.
              </p>
            </div>

            <div className="rounded-xl bg-white p-4">
              <strong>3. Prevent further spread</strong>
              <p className="mt-1 text-slate-600">
                Take only the actions for which you are trained and
                instructed.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            📝 Exam Quick Revision
          </h2>

          <div className="mt-4 space-y-2 leading-7 text-slate-700">
            <p>
              • Every seafarer should take precautions to prevent
              pollution of the <strong>marine environment</strong>.
            </p>

            <p>
              • Oil, garbage, sewage and harmful substances require
              careful <strong>handling and control</strong>.
            </p>

            <p>
              • Waste should be handled according to the ship&apos;s
              established <strong>procedures</strong>.
            </p>

            <p>
              • Pollution, leakage or spills should be{" "}
              <strong>reported immediately</strong>.
            </p>

            <p>
              • Crew should use the correct equipment and follow the
              instructions of the <strong>responsible officer</strong>.
            </p>

            <p>
              • Pollution prevention is the responsibility of{" "}
              <strong>every crew member</strong>.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Link
            href="/pssr/topic-02"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            ← Previous: Emergency Procedures
          </Link>

          <Link
            href="/pssr"
            className="rounded-xl border border-cyan-200 bg-white px-5 py-3 text-center font-semibold text-cyan-900 hover:bg-cyan-50"
          >
            PSSR Topics
          </Link>

          <Link
            href="/pssr/topic-04"
            className="rounded-xl bg-cyan-900 px-5 py-3 text-center font-semibold text-white hover:bg-cyan-800"
          >
            Next: Safe Working Practices →
          </Link>
        </div>

      </div>
    </main>
  );
}