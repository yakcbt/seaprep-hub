"use client";

import Link from "next/link";

export default function FPFFTopic01() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="bg-red-900 text-white">
        <div className="mx-auto max-w-5xl px-5 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            FPFF • Topic 01
          </p>

          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Fire Triangle & Principles of Fire
          </h1>

          <p className="mt-3 max-w-3xl leading-7 text-red-100">
            Introduction to fire, conditions required for combustion
            and the basic principles used to extinguish a fire.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-6 px-5 py-8">

        {/* INTRODUCTION */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Introduction
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Fire is energy released in the form of heat and light as a
            result of a chemical reaction when the necessary elements
            for combustion are present.
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            The three essential elements required for fire are
            <strong> Fuel, Heat and Oxygen.</strong>
          </p>
        </section>

        {/* FIRE TRIANGLE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            🔺 Fire Triangle
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The three conditions required for a fire can be represented
            by a triangle known as the
            <strong> Triangle of Fire.</strong>
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 text-center">
              <div className="text-4xl">🔥</div>
              <h3 className="mt-3 text-xl font-bold text-orange-900">
                HEAT
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Spark, ignition or a continued rise in temperature.
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center">
              <div className="text-4xl">🛢️</div>
              <h3 className="mt-3 text-xl font-bold text-red-900">
                FUEL
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Combustible material in solid, liquid or gaseous form.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-center">
              <div className="text-4xl">💨</div>
              <h3 className="mt-3 text-xl font-bold text-blue-900">
                OXYGEN
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Air contains approximately 21% oxygen by volume.
              </p>
            </div>

          </div>
        </section>

        {/* FORMULA */}
        <section className="rounded-2xl bg-red-900 p-6 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            Remember
          </p>

          <p className="mt-4 text-2xl font-bold md:text-3xl">
            FUEL + HEAT + OXYGEN = FIRE
          </p>

          <p className="mt-4 text-red-100">
            Remove any one side of the fire triangle and the fire can be
            extinguished.
          </p>
        </section>

        {/* FUEL */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            1. Fuel
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Fuel is the combustible material required for fire.
            According to the handout, fuel may exist in three forms:
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              ["Solid", "Wood, paper and similar combustible material"],
              ["Liquid", "Oil and other flammable liquids"],
              ["Gas", "Flammable gases"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-xl bg-slate-50 p-4"
              >
                <h3 className="font-bold text-red-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HEAT */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            2. Heat / Ignition
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Heat provides the ignition energy necessary to start and
            maintain combustion.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Mechanical source",
              "Electrical source",
              "Chemical source",
              "Biological source",
              "Spark or flame",
              "Rise in temperature",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-orange-50 p-4 font-semibold text-slate-700"
              >
                🔥 {item}
              </div>
            ))}
          </div>
        </section>

        {/* OXYGEN */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            3. Oxygen
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Oxygen supports combustion. The handout states that normal
            air contains approximately
            <strong> 21% oxygen by volume.</strong>
          </p>

          <div className="mt-5 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-4">
            <p className="font-bold text-blue-900">
              Oxygen + Fuel Vapour + Sufficient Heat
            </p>
            <p className="mt-2 text-slate-700">
              can result in combustion when the necessary conditions
              exist.
            </p>
          </div>
        </section>

        {/* EXTINGUISH FIRE */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Basic Methods of Extinguishing Fire
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Fire can be controlled by removing one of the elements
            required for combustion.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-600">
                METHOD 01
              </p>
              <h3 className="mt-2 text-xl font-bold text-blue-900">
                Cooling
              </h3>
              <p className="mt-3 leading-6 text-slate-700">
                Remove heat from the fire.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-600">
                METHOD 02
              </p>
              <h3 className="mt-2 text-xl font-bold text-amber-900">
                Starving
              </h3>
              <p className="mt-3 leading-6 text-slate-700">
                Remove the fuel or burning material from the fire.
              </p>
            </div>

            <div className="rounded-xl border border-slate-300 bg-slate-100 p-5">
              <p className="text-sm font-bold text-slate-600">
                METHOD 03
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Smothering
              </h3>
              <p className="mt-3 leading-6 text-slate-700">
                Remove or exclude the supply of air / oxygen.
              </p>
            </div>

          </div>
        </section>

        {/* INHIBITION */}
        <section className="rounded-2xl border-l-4 border-purple-500 bg-purple-50 p-6">
          <h2 className="text-xl font-bold text-purple-900">
            Inhibiting
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            The handout also describes inhibition. In some fires the
            combustion process is maintained by a self-sustaining
            chemical chain reaction. Breaking this reaction chain is
            called <strong>inhibiting.</strong>
          </p>
        </section>

        {/* SUMMARY */}
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-red-900">
            Fire Fighting Principle
          </h2>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">

              <thead>
                <tr className="bg-red-900 text-white">
                  <th className="p-3">Method</th>
                  <th className="p-3">Removes</th>
                  <th className="p-3">Effect</th>
                </tr>
              </thead>

              <tbody className="text-slate-700">

                <tr className="border-b">
                  <td className="p-3 font-bold">Cooling</td>
                  <td className="p-3">Heat</td>
                  <td className="p-3">Reduces temperature</td>
                </tr>

                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-bold">Starving</td>
                  <td className="p-3">Fuel</td>
                  <td className="p-3">Stops fuel supply</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3 font-bold">Smothering</td>
                  <td className="p-3">Oxygen / Air</td>
                  <td className="p-3">Excludes air</td>
                </tr>

                <tr className="bg-slate-50">
                  <td className="p-3 font-bold">Inhibiting</td>
                  <td className="p-3">Chain Reaction</td>
                  <td className="p-3">
                    Interrupts combustion reaction
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* QUICK REVISION */}
        <section className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <h2 className="text-xl font-bold text-green-900">
            Quick Revision
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            <strong>
              Fire Triangle = Fuel + Heat + Oxygen • Cooling removes
              Heat • Starving removes Fuel • Smothering removes Oxygen •
              Inhibiting breaks the chemical chain reaction.
            </strong>
          </p>
        </section>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">

          <Link
            href="/fpff"
            className="rounded-xl border border-red-200 bg-white px-5 py-3 text-center font-semibold text-red-800 hover:bg-red-50"
          >
            ← FPFF Topics
          </Link>

          <Link
            href="/fpff/topic-02"
            className="rounded-xl bg-red-900 px-5 py-3 text-center font-semibold text-white hover:bg-red-800"
          >
            Next: Sources of Heat / Ignition →
          </Link>

        </div>

      </div>
    </main>
  );
}