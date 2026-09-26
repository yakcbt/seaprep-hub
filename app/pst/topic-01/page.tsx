"use client";

import Link from "next/link";

export default function PSTTopic01() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            PST • Topic 01
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Introduction, Safety & Survival
          </h1>

          <p className="mt-3 max-w-3xl text-blue-100">
            Basic safety guidelines and principles of survival at sea for
            seafarers.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            1. Introduction
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Every prospective seafarer should receive approved training in
            Personal Survival Techniques before being employed on a
            sea-going ship.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            Following safety guidelines, documented procedures, training
            and drills helps seafarers prepare for emergency situations
            and respond effectively when life is threatened.
          </p>
        </section>

        {/* OBJECTIVES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            2. Course Objectives
          </h2>

          <p className="mt-3 text-slate-700">
            After completing Personal Survival Techniques training, a
            seafarer should be able to:
          </p>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>✓ React correctly during emergency situations.</li>

            <li>
              ✓ Take appropriate measures for personal survival and the
              survival of others.
            </li>

            <li>✓ Use survival craft equipment correctly.</li>

            <li>
              ✓ Acquire knowledge that can help prevent emergency
              situations.
            </li>
          </ul>
        </section>

        {/* SAFETY GUIDELINES */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            3. Safety Guidelines
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Safety of the ship, crew and cargo is important at all times.
            Every seafarer should maintain a safe working environment and
            follow established safety procedures.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Training & Drills
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Participate actively in safety training programmes and
                emergency drills conducted on board.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Maintain Vigilance
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Remain vigilant for your own safety and for the safety of
                the ship.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Good Housekeeping
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Keep working areas clean and ensure garbage does not
                accumulate beyond acceptable limits.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Follow Safety Checklists
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Take necessary precautions during enclosed-space entry and
                hot work and follow the required safety checklists.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Working Aloft
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Use an appropriate safety harness or safety belt whenever
                working at height.
              </p>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
              <h3 className="font-bold text-blue-900">
                Know Safety Equipment
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Remain familiar with life-saving and fire-fighting
                appliances carried on board.
              </p>
            </div>

          </div>
        </section>

        {/* ENCLOSED SPACE */}
        <section className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-amber-900">
            ⚠ Enclosed Space Safety
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Do not enter an enclosed space until the required safety
            precautions have been completed and the space has been
            certified safe by the responsible officer.
          </p>
        </section>

        {/* PRINCIPLES OF SURVIVAL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-900">
            4. Principles of Survival at Sea
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Survival at sea depends greatly on training, emergency
            preparedness and practical knowledge of survival craft and
            life-saving equipment.
          </p>

          <div className="mt-5 space-y-3">

            {[
              "Importance of regular training and emergency drills",
              "Hope and will to survive",
              "Prevention of panic during emergencies",
              "Emergency preparedness",
              "Correct use of life-saving appliances",
              "Launching and handling survival craft",
              "Knowledge of emergency radio equipment",
              "Understanding dangers to survivors in the water",
              "Use of immersion suits and thermal protective aids",
              "Use of pyrotechnics and survival equipment",
              "Handling survival craft in bad weather",
              "Helicopter rescue procedures",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl bg-slate-50 p-3"
              >
                <span className="font-bold text-blue-700">✓</span>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}

          </div>
        </section>

        {/* IMPORTANT */}
        <section className="rounded-2xl bg-blue-900 p-6 text-white">
          <h2 className="text-xl font-bold">
            Remember
          </h2>

          <p className="mt-3 leading-7 text-blue-100">
            Emergencies can occur unexpectedly. Regular training,
            realistic drills, knowledge of safety equipment and correct
            emergency actions improve preparedness for survival at sea.
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/pst"
            className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-center font-semibold text-blue-800 hover:bg-blue-50"
          >
            ← PST Topics
          </Link>

          <Link
            href="/pst/topic-02"
            className="rounded-xl bg-blue-900 px-5 py-3 text-center font-semibold text-white hover:bg-blue-800"
          >
            Next: Emergency Situations →
          </Link>

        </div>

      </div>
    </main>
  );
}